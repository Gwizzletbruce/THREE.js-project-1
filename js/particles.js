const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let particleCount = 1800,
	particles = new THREE.Geometry(),
	pMaterial = new THREE.ParticleBasicMaterial({
		color: 0xffffff,
		size: 20
	})

for (i = 0; i < particleCount; i++) {
	let pX = Math.random() * 500 - 250,
		pY = Math.random() * 500 - 250,
		pZ = Math.random() * 500 - 250,
		particle = new THREE.Vertex(new THREE.Vector3(pX, pY, pZ))

	particles.vertices.push(particle)	

	}

camera.position.z = 10;

scene.add(camera)
const particleSystem = new THREE.ParticleSystem(particles, pMaterial)


scene.addChild(particleSystem)

renderer.render( scene, camera)

// const animate = () => {
// 	requestAnimationFrame( animate );

	
// 	renderer.render( scene, camera);
// };

// animate();



