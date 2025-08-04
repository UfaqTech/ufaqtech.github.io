 const canvas = document.getElementById('earthCanvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    const loader = new THREE.TextureLoader();

    let earthMesh;
    loader.load('assets/textures/earth.jpg', (texture) => {
      earthMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1, 64, 64),
        new THREE.MeshStandardMaterial({ map: texture })
      );
      earthMesh.scale.set(0.95, 0.95, 0.95);
      scene.add(earthMesh);
    });

    let cloudMesh;
    loader.load('assets/textures/earthCloud.png', (cloudTexture) => {
      const cloudMaterial = new THREE.MeshPhongMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      cloudMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1.02, 64, 64),
        cloudMaterial
      );
      scene.add(cloudMesh);

      animate();
    });

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    const hemisphereLight = new THREE.HemisphereLight(0xb1eaff, 0x080820, 0.8);
    scene.add(hemisphereLight);

    let techLinesGroup;
    function createTechBackground() {
      techLinesGroup = new THREE.Group();
      scene.add(techLinesGroup);

      const numNodes = 200;
      const nodeRadius = 150;
      const nodes = [];
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00FFFF,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending
      });
      const nodeMaterial = new THREE.PointsMaterial({
        color: 0x00FFFF,
        size: 1.5,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });

      const nodePositions = [];
      for (let i = 0; i < numNodes; i++) {
        const x = (Math.random() - 0.5) * nodeRadius * 2;
        const y = (Math.random() - 0.5) * nodeRadius * 2;
        const z = (Math.random() - 0.5) * nodeRadius * 2;
        nodes.push(new THREE.Vector3(x, y, z));
        nodePositions.push(x, y, z);
      }

      const nodeGeometry = new THREE.BufferGeometry();
      nodeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
      const nodeMesh = new THREE.Points(nodeGeometry, nodeMaterial);
      techLinesGroup.add(nodeMesh);

      const linePoints = [];
      const maxDistance = 30;
      for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
          if (nodes[i].distanceTo(nodes[j]) < maxDistance) {
            linePoints.push(nodes[i].x, nodes[i].y, nodes[i].z);
            linePoints.push(nodes[j].x, nodes[j].y, nodes[j].z);
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      techLinesGroup.add(lines);

      techLinesGroup.position.z = -100;
      techLinesGroup.scale.set(0.5, 0.5, 0.5);
    }
    createTechBackground();

    function animate() {
      requestAnimationFrame(animate);

      if (earthMesh) {
        earthMesh.rotation.y += 0.0024;
      }
      if (cloudMesh) {
        cloudMesh.rotation.y += 0.0028;
      }

      if (techLinesGroup) {
        techLinesGroup.rotation.y += 0.0005;
        techLinesGroup.rotation.x += 0.0002;
      }

      renderer.render(scene, camera);
    }

    function resizeCanvas() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();