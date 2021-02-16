import * as THREE from '../vendor/three.module.js';

// Scene is the whole view, where the objects are contained and where the user will interact
const scene = new THREE.Scene();
// Camera is a virtual that will be where the user will see the world through
// Perspective camera, allow to have depth, orthographic is the contradiction that is used for 2d and measurement-important designs

// Parameters: Field of View, Ratio of browser, Near Clipping Plane and Far Clipping Plane
// before Near Clipping Plane, will be able to see, beyond Far clipping plane wont be able to see
// This is important to eliminate unnecessary rendering of the objects that aren't even viewed yet
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight,  0.1, 1000);

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Setup update method
// Will be called every frame, every change
// Game Logic
const update = () => {

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
