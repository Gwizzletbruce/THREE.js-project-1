

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//Texture Loader
const loader = new THREE.TextureLoader()
const dot = loader.load("/images/dot2.jpg")


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry(.7, .2, 16, 100)

const material = new THREE.PointsMaterial({
	size: 0.005,
	//map: dot,
	transparent: true
})

camera.position.z = 5;

const particlesGeometry = new THREE.BufferGeometry()
const particlesCount = 500000

const posArray = new Float32Array(particlesCount * 3)

for (let i =0; i < particlesCount; i++) {
	posArray[i] = (Math.random() - 0.5) * (Math.random() * 5)
}

const sphere = new THREE.Points(geometry, material)
const particlesMesh = new THREE.Points(particlesGeometry, material)
scene.add( particlesMesh)

particlesGeometry.setAttribute("position" , new THREE.BufferAttribute(posArray, 3))

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.x = 3
pointLight.position.z = 4
scene.add(pointLight)

const animate =  () => {
	requestAnimationFrame( animate );
	sphere.rotation.x += 0.01
	sphere.rotation.y += 0.01
	particlesMesh.rotation.x += Math.sin(0.05)
	particlesMesh.scale.y += Math.sin(0.0001)
	particlesMesh.rotation.z += Math.sin(0.001)
	
	

	renderer.render( scene, camera);
};

animate();


