// JavaScript for UHT-Framework Website

// --- Three.js Background Animation ---
let scene, camera, renderer, particles, particleMaterial;

function initThreeJS() {
    // Get the canvas element
    const canvas = document.getElementById('three-bg');

    // Scene: Where objects, lights, and cameras live
    scene = new THREE.Scene();

    // Camera: Defines the viewing frustum (how much of the scene is visible)
    // PerspectiveCamera(fov, aspect, near, far)
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // Move camera back to see particles

    // Renderer: Renders the scene onto the canvas
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Improve quality on high-DPI screens

    // Create particles
    const particleCount = 2000; // Increased particle count for more "hose of animation"
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3); // x, y, z for each particle
    const velocities = new Float32Array(particleCount * 3); // velocity for each particle
    const colors = new Float32Array(particleCount * 3); // r, g, b for each particle

    const color1 = new THREE.Color(0x00FFFF); // Cyan
    const color2 = new THREE.Color(0x00FF00); // Green
    const color3 = new THREE.Color(0x8A2BE2); // BlueViolet
    const color4 = new THREE.Color(0xFFD700); // Gold - new color for more variety

    for (let i = 0; i < particleCount; i++) {
        // Random positions within a larger cube
        positions[i * 3] = (Math.random() - 0.5) * 200; // x
        positions[i * 3 + 1] = (Math.random() - 0.5) * 200; // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 200; // z

        // Random velocities for subtle movement
        velocities[i * 3] = (Math.random() - 0.5) * 0.08; // Slightly faster movement
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.08;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.08;

        // Interpolate colors for a gradient effect with more variety
        const rand = Math.random();
        let color;
        if (rand < 0.25) {
            color = new THREE.Color().lerpColors(color1, color2, Math.random());
        } else if (rand < 0.5) {
            color = new THREE.Color().lerpColors(color2, color3, Math.random());
        } else if (rand < 0.75) {
            color = new THREE.Color().lerpColors(color3, color4, Math.random());
        } else {
            color = new THREE.Color().lerpColors(color4, color1, Math.random());
        }
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3)); // Store velocities
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material for particles
    particleMaterial = new THREE.PointsMaterial({
        size: 0.2, // Slightly larger particles for more presence
        vertexColors: true, // Use colors defined in geometry
        blending: THREE.AdditiveBlending, // For glowing effect
        transparent: true,
        opacity: 0.95, // More opaque for stronger neon look
        sizeAttenuation: true // Particles closer to camera appear larger
    });

    // Create the particle system
    particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Add a subtle ambient light to make the scene slightly brighter
    const ambientLight = new THREE.AmbientLight(0x606060); // Soft white light
    scene.add(ambientLight);

    // Add a directional light for more depth
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7); // Brighter directional light
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);


    // Handle window resizing
    window.addEventListener('resize', onWindowResize, false);
}

// Function to handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update particle positions based on their velocities
    const positions = particles.geometry.attributes.position.array;
    const velocities = particles.geometry.attributes.velocity.array;

    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        // Wrap particles around to create an infinite effect
        // Adjust boundary to match the larger particle field
        if (positions[i] > 100) positions[i] = -100;
        if (positions[i] < -100) positions[i] = 100;
        if (positions[i + 1] > 100) positions[i + 1] = -100;
        if (positions[i + 1] < -100) positions[i + 1] = 100;
        if (positions[i + 2] > 100) positions[i + 2] = -100;
        if (positions[i + 2] < -100) positions[i + 2] = 100;
    }
    particles.geometry.attributes.position.needsUpdate = true; // Tell Three.js to update vertex data

    // Rotate particles for a dynamic background effect
    particles.rotation.x += 0.0001; // Slower rotation
    particles.rotation.y += 0.0002; // Slower rotation

    renderer.render(scene, camera);
}

// --- Scroll-based Animations (Intersection Observer) ---
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, /* viewport as root */
        rootMargin: '0px',
        threshold: 0.1 /* 10% of element visible to trigger */
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation class when element enters viewport
                entry.target.classList.add('is-visible');
                // Remove the initial opacity:0 that prevents animation from replaying
                entry.target.style.opacity = 1;
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements that should animate on scroll
    document.querySelectorAll('.animate-fade-in-up, .animate-card-entry, .animate-text-reveal').forEach(element => {
        // Remove the 'is-visible' class if it was added by mistake (e.g., from server-side rendering)
        element.classList.remove('is-visible');
        // Set initial opacity to 0 to prepare for animation
        element.style.opacity = 0;
        observer.observe(element);
    });
});


// --- Smooth Scrolling for Navigation Links ---
document.querySelectorAll('a.nav-link, a.mobile-nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Close mobile menu if open
            const mobileNav = document.getElementById('mobile-nav-overlay');
            if (mobileNav.classList.contains('translate-x-0')) {
                mobileNav.classList.remove('translate-x-0');
            }

            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



// --- Accordion Functionality for Tools Section ---
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentContent = header.nextElementSibling; // Get the content div
            const currentIcon = header.querySelector('.accordion-icon');

            // Close other open accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = 0;
                    otherHeader.querySelector('.accordion-icon').classList.remove('rotate-180');
                }
            });

            // Toggle current accordion
            header.classList.toggle('active');
            currentIcon.classList.toggle('rotate-180');

            if (header.classList.contains('active')) {
                // Set max-height to scrollHeight to allow smooth expansion
                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
            } else {
                currentContent.style.maxHeight = 0;
            }
        });
    });
});




// Initialize Three.js and start animation when the window loads
window.onload = function() {
    initThreeJS();
    animate();
};
