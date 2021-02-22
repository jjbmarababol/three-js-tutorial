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

// Add Control
controls = new THREE.OrbitControls(camera, renderer.domElement);

  const x = -5, y = -2 ;

  const shape = new THREE.Shape();
  shape.moveTo( x, y );




  shape.lineTo( x + 0, y + 14 );
  shape.lineTo( x + 12, y + 14 );
  shape.lineTo( x + 12, y -14 )
  shape.lineTo( x + 12, y + 14 );
  shape.lineTo( x + 12, y + -10 );
  shape.lineTo( x + 7, y + -10 );
  shape.lineTo( x + 4, y + -7 );
  shape.lineTo( x + 4, y + -2 );
  shape.lineTo( x + 2, y + -2 );
  shape.lineTo( x + 2, y + 0 );
  
  const extrudeSettings = {
    steps: 1,
    depth: 1,
    bevelEnabled: false,
  };
  
  
  const segments = 500;
  const r = 1;
  let t = 0;

  let material = new THREE.MeshBasicMaterial( { vertexColors: true, morphTargets: true } );

				const positions = [];
				const colors = [];

        // var cols = [{
        //   stop: 0,
        //   color: new THREE.Color(0xf7b000)
        // }, {
        //   stop: .25,
        //   color: new THREE.Color(0xdd0080)
        // }, {
        //   stop: .5,
        //   color: new THREE.Color(0x622b85)
        // }, {
        //   stop: .75,
        //   color: new THREE.Color(0x007dae)
        // }, {
        //   stop: 1,
        //   color: new THREE.Color(0x77c8db)
        // }]
        // const selection = [0x4178b9, 0xbfb373, 0x35a4bf, 0xc1466a];

				for ( let i = 0; i < segments; i ++ ) {

					const y =Math.random(0);
					const z = Math.random(0,3);

					colors.push(y);
        }
        let a = new THREE.Color(0xf7b000);

        console.log(a);
        
  const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
  // geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
  geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 2 ) );
//  material = new THREE.MeshBasicMaterial( { color: 0x463fa5, wireframe: true } );
  const mesh = new THREE.Mesh( geometry, material ) ;
  scene.add( mesh );


  


  function setBackground () {
    const vertices = [];

  for ( let i = 0; i < 10000; i ++ ) {

  const x = THREE.MathUtils.randFloatSpread( 2000 );
  const y = THREE.MathUtils.randFloatSpread( 2000 );
  const z = THREE.MathUtils.randFloatSpread( 2000 );

  vertices.push( x, y, z );

  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

  const material = new THREE.PointsMaterial( { color: 0x888888 } );

  const points = new THREE.Points( geometry, material );

  scene.add( points );
  }
  setBackground();
  camera.position.z = 20;

var cols = [{
  stop: 0,
  color: new THREE.Color(0xf7b000)
}, {
  stop: .25,
  color: new THREE.Color(0xdd0080)
}, {
  stop: .5,
  color: new THREE.Color(0x622b85)
}, {
  stop: .75,
  color: new THREE.Color(0x007dae)
}, {
  stop: 1,
  color: new THREE.Color(0x77c8db)
}];


// Add Lights
var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.5);
scene.add(ambientLight);

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
