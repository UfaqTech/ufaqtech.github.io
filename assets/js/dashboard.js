
        

        // Custom alert function to replace window.alert
        function alert(message) {
            const alertBox = document.createElement('div');
            alertBox.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #fff;
                padding: 25px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                z-index: 9999;
                text-align: center;
                font-family: 'Inter', sans-serif;
                max-width: 350px;
                width: 90%;
            `;
            alertBox.innerHTML = `
                <p style="margin-bottom: 20px; font-size: 1.1em; color: #333;">${message}</p>
                <button onclick="this.parentNode.remove()" style="
                    background-color: #3498db;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                    transition: background-color 0.3s;
                ">OK</button>
            `;
            document.body.appendChild(alertBox);
        }

       

        // --- Three.js Animation Setup (Abstract Digital Landscape) ---
        let scene, camera, renderer, particles, particleMaterial, particleGeometry;
        let mouseX = 0, mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        const canvas = document.getElementById('three-js-canvas');
        const animationContainer = document.querySelector('.hero-animation-container');

        function initThreeJS() {
            // Scene
            scene = new THREE.Scene();
            scene.background = null; // Transparent background for overlay effect

            // Camera
            camera = new THREE.PerspectiveCamera(75, animationContainer.clientWidth / animationContainer.clientHeight, 0.1, 1000);
            camera.position.z = 50;

            // Renderer
            renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); // alpha: true for transparent background
            renderer.setSize(animationContainer.clientWidth, animationContainer.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            // Particles (representing data/digital elements)
            const particleCount = 1000;
            particleGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);

            const color1 = new THREE.Color(0x3498db); // Blue
            const color2 = new THREE.Color(0x2ecc71); // Green
            const color3 = new THREE.Color(0xe74c3c); // Red

            for (let i = 0; i < particleCount; i++) {
                // Position particles randomly in a larger volume
                positions[i * 3] = (Math.random() - 0.5) * 500;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 500;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 500;

                // Assign random color from a palette
                const rand = Math.random();
                if (rand < 0.33) {
                    color1.toArray(colors, i * 3);
                } else if (rand < 0.66) {
                    color2.toArray(colors, i * 3);
                } else {
                    color3.toArray(colors, i * 3);
                }
            }

            particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            particleMaterial = new THREE.PointsMaterial({
                size: 0.8, // Size of particles
                vertexColors: true, // Use colors from geometry
                transparent: true,
                opacity: 0.7,
                blending: THREE.AdditiveBlending // For glowing effect
            });

            particles = new THREE.Points(particleGeometry, particleMaterial);
            scene.add(particles);

            // Mouse Interaction for Camera
            document.addEventListener('mousemove', onDocumentMouseMove, false);
            window.addEventListener('resize', onWindowResize, false);
        }

        function onDocumentMouseMove(event) {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        }

        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            const currentWidth = animationContainer.clientWidth;
            const currentHeight = animationContainer.clientHeight;

            camera.aspect = currentWidth / currentHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentWidth, currentHeight);
        }

        function animateThreeJS() {
            requestAnimationFrame(animateThreeJS);

            // Rotate particles
            particles.rotation.x += 0.0005;
            particles.rotation.y += 0.001;

            // Move particles slightly
            const positions = particleGeometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i] += Math.sin(Date.now() * 0.0001 + i) * 0.05;
                positions[i + 1] += Math.cos(Date.now() * 0.0001 + i) * 0.05;
            }
            particleGeometry.attributes.position.needsUpdate = true;


            // Camera movement based on mouse
            camera.position.x += (mouseX * 0.1 - camera.position.x) * 0.005;
            camera.position.y += (-mouseY * 0.1 - camera.position.y) * 0.005;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }

        // Initialize Three.js when the window loads
        window.onload = function() {
            initThreeJS();
            animateThreeJS();
        }

        // Handle contact form submission (basic example)
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset(); // Clear the form
        });
 

        
  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Toggle active button styling
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Show/hide projects
        projectItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category.includes(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
