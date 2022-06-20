"use strict";
import * as THREE from "/node_modules/three/build/three";

const canvas = document.getElementById("canvas");
const renderer = new THREE.WebGLRenderer({ canvas });

const cameraOptions = {
  fov: 75,
  aspect: 2,
  near: 0.1,
  far: 5,
};
const camera = new THREE.PerspectiveCamera(
  cameraOptions.fov,
  cameraOptions.aspect,
  cameraOptions.near,
  cameraOptions.far
);

const scene = new THREE.Scene();

const cubeOptions = {
  boxWidth: 1,
  boxHeight: 1,
  boxDepth: 1,
};
const geometry = new THREE.BoxGeometry(
  cubeOptions.boxWidth,
  cubeOptions.boxHeight,
  cubeOptions.boxDepth
);

const materialOptions = {
  color: 0x44aa88,
};
const material = new THREE.MeshPhongMaterial(materialOptions);

const cube = new THREE.Mesh(geometry, material);

function render(time) {
  time *= 0.001; // convert time to seconds

  cube.rotation.x = time;
  cube.rotation.y = time;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}

const lightOptions = {
  color: 0xffffff,
  intensity: 1,
};
const light = new THREE.DirectionalLight(
  lightOptions.color,
  lightOptions.intensity
);

function init() {
  scene.add(cube);
  renderer.render(scene, camera);
  light.position.set(-1, 2, 4);
  scene.add(light);
  requestAnimationFrame(render);
}

init();
