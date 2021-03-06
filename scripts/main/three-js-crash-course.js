// import * as THREE from '../vendor/three.module.js';

// Scene is the whole view, where the objects are contained and where the user will interact
const scene = new THREE.Scene();
// Camera is a virtual that will be where the user will see the world through
// Perspective camera, allow to have depth, orthographic is the contradiction that is used for 2d and measurement-important designs

// Parameters: Field of View, Ratio of browser, Near Clipping Plane and Far Clipping Plane
// before Near Clipping Plane, will be able to see, beyond Far clipping plane wont be able to see
// This is important to eliminate unnecessary rendering of the objects that aren't even viewed yet
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight,  0.1, 1000);

const renderer = new THREE.WebGLRenderer();
var { innerHeight: height, innerWidth: width } = window;
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  var { innerHeight: height, innerWidth: width } = window;
  renderer.setSize(width, height);
  camera.aspect = width/height;
  camera.updateProjectionMatrix();
});

// create the shape
var geometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterials = [
   new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('../images/1.jpg'), side: THREE.DoubleSide}),
   new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('../images/2.jpg'), side: THREE.DoubleSide}),
   new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('../images/3.jpg'), side: THREE.DoubleSide}),
   new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../images/4.jpg'), side: THREE.DoubleSide}),
   new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../images/5.jpg'), side: THREE.DoubleSide}),
   new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../images/6.jpg'), side: THREE.DoubleSide})
];
var material = new THREE.MeshFaceMaterial(cubeMaterials);


// create a material, color or image texture
// var material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

// Add Lights
var ambientLight = new THREE.AmbientLight(0xFFFFFF, 5.0);

// Setup update method
// Will be called every frame, every change
// Game Logic
const update = () => {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.005;
};

// Basically everything that you want to draw
// Draw Scene
const render = () => {
 renderer.render(scene, camera);
}

// A Game development theory construt that needs the proper
const gameLoop = () =>{
  requestAnimationFrame(gameLoop);
  update();
  render();
}

// This needs to run at least once 
gameLoop();
