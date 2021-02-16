import * as THREE from '../vendor/three.module.js';

var scene = new THREE.Scene();
    
// FOV
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// WebGL, 2D CSS, 3D CSS,  SVG Renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setClearColor('#e5e5e5');
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// When the screen resizes, the renderer size should be upadted.
window.addEventListener('resize', ()=> {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;

  camera.updateProjectionMatrix();
});

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// We need to render the properties of the scene and camera first

var objects = {
  square: {
   geometry: new THREE.BoxGeometry(1, 1, 1),
   material: new THREE.MeshLambertMaterial({ color: 0xF7F7F7 })
 },
 circle: {
   geometry: new THREE.SphereGeometry(1, 50, 50),
   material: new THREE.MeshLambertMaterial({ color: 0xFFCC00 }),
 },
 lights:  {
  primary: new THREE.PointLight(0xFFFFFF, 1, 500),
  secondary: new THREE.PointLight(0xFFFFFF, 2, 1000),
 }
};

    // Circle
function circle(positions = {}) {
  const { circle } = objects;
  const { geometry, material} = circle;
  const { x, y, z } = positions;

  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = x;
  scene.add(mesh);
  return mesh;
}

//  Square
function square(positions = {}) {
  const { square } = objects;
  const { geometry, material } = square;
  const { x, y, z } = positions;

 var meshX =  -10;
 for( var i = 0; i < 15; i++) {
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = (Math.random() - 0.5) * 10;
  mesh.position.y = (Math.random() - 0.5) * 10;
  mesh.position.z = (Math.random() - 0.5) * 10;
  scene.add(mesh);
  meshX+=1;
 }

  /**
    * mesh.rotation.set(x, y, z);
    * mesh.scale.set(x, y, z);
    *  mesh.rotation.x += 0.05;
    * mesh.rotation.y += 0.01;
    * mesh.scale.x -= 0.05;
  **/
  // scene.add(mesh);55
  return mesh;
}

function light() {
  const { lights } = objects;
  const { primary, secondary } = lights;
  scene.add(primary);
  scene.add(secondary );
  primary.position.set(0, 0, 0);
  secondary.position.set(0, 0, 25);
  // secondary.position.set(20, 0, 25);
}

light();

var render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};


function onMouseMove(event) {
  event.preventDefault();

  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(scene.children, true);
  raycaster.setFromCamera(mouse, camera);

  var intersects =  raycaster.intersectObjects(scene.children,  true);
  for( var i = 0; i < intersects.length; i++) {
    this.tl = new TimelineMax();

    this.tl.to(intersects[i].object.scale, 1, { x: 2, ease: Expo.easeOut});
    this.tl.to(intersects[i].object.scale, 0.5, { x: 0.5, ease: Expo.easeOut});
    this.tl.to(intersects[i].object.position, 0.5, { x: 2, ease: Expo.easeOut});
    this.tl.to(intersects[i].object.rotation, 0.5, { y: Math.PI*.5, ease: Expo.easeOut}, "-=1.5" );

    // intersects[i].object.material.color.set(0xf7f7f7);
  }
}
const square1 = square({ x: 0, y: 0, z: 0});
render();
window.addEventListener('mousemove',onMouseMove);

