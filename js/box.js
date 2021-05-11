const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x22ff00 } );
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry, material)
scene.add(cube);
scene.add(cube2)

camera.position.z = 10;

const light = new THREE.AmbientLight(0xfffff)
scene.add(light)

const animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    cube2.position.x = 2.4
    cube2.rotation.x += 0.02;
	cube2.rotation.y += 0.03;

	renderer.render( scene, camera);
};

animate();