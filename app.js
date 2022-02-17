import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

import testTexture from './texture.jpg'

import * as dat from 'dat.gui'

export default class Sketch {
  constructor(options) {
    this.container = options.domElement
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight

    this.camera = new THREE.PerspectiveCamera(30, this.width / this.height, 10, 1000)
    this.camera.position.z = 600
    this.camera.fov = 2 * Math.atan(this.height / 2 / this.camera.position.z) * (180 / Math.PI)

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.container.appendChild(this.renderer.domElement)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)

    this.time = 0

    this.resize()
    this.addObjects()
    this.setupResize()
    this.setupSettings()
    this.render()
  }

  resize() {
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight
    this.renderer.setSize(this.width, this.height)
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  setupSettings() {
    this.settings = {
      progress: 0
    }

    this.gui = new dat.GUI()
    this.gui.add(this.settings, 'progress', 0, 1, 0.001)
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this))
  }

  addObjects() {
    this.geometry = new THREE.PlaneBufferGeometry(300, 300, 100, 100)
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 1.0 },
        resolution: { value: new THREE.Vector2() },
        uTexture: { value: new THREE.TextureLoader().load(testTexture) },
        uResolution: { value: new THREE.Vector2(this.width, this.height) },
        uQuadSize: { value: new THREE.Vector2(300, 300) },
        uTextureSize: { value: new THREE.Vector2(100, 100) },
        uProgress: { value: 0 }
      },
      side: THREE.DoubleSide,
      // wireframe: true,
      vertexShader,
      fragmentShader
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)

    this.scene.add(this.mesh)

    // Default state
    this.mesh.position.x = 300
    this.mesh.rotation.z = 0.5
  }

  render() {
    this.time += 0.05

    this.material.uniforms.time.value = this.time
    this.material.uniforms.uProgress.value = this.settings.progress

    this.mesh.rotation.x = this.time / 2000
    this.mesh.rotation.y = this.time / 1000

    this.renderer.render(this.scene, this.camera)

    requestAnimationFrame(this.render.bind(this))
  }
}

new Sketch({ domElement: document.querySelector('#container') })
