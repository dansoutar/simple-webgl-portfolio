# Steps

---

## Creating Boilerplate

- create index.html
- add container div
- add basic styling reset
- container fw and fh black bg
- add script tag app.js
- three js boilerplate
  - copy from three js docs example - get to spinning cube
  - convert to class
  - render method
  - test render loop by logging time var
  - add this keyword in front of properties
  - addObjects() method
  - move cube stuff into add objects
  - add camera, scene, renderer stuff into constructor
  - pass container div into constructor as dom el
  - this.width adn this.height
  - append renderer.domelement to container dom el
  - import orbit controls from three/exmaples/jsm/controls/OrbitControls.js
  - add controls to constructor as new OrbitControls
  - add resize and setupResize func
  - update proejction matrix
- set pixel ratio

## Using Shaders

- set material to shader material
- use example from docs
- add uniforms and vertex shader and fragment shader
- create shaders foldder
- create fragment and vertex.glsl files
- add basic frag shader and vertex shader code from some source
- import frag and vert shader into app.js
- set imported files as shader meterial vert and frag shader
- switch geom to plane

## Vertex Shaders

- define a newPosition var in vertex shader file and set equal to position given by three js
- modify x and and y of newPosition
- make the z coord the sin of newposition.x and manip values surrounding
- send this.time to a uniform in the vertex shader
- add time inside the sin()
- try changing newPosition.x to the length() of position

## Fragment Shaders

- create vUv var in vertex shader
- set vUv to uv in main function
- declare same vuv in frag shader
- declare uniform time as well
- set position in vertex back to normal position
- set vuv as first 3 of gl-fragcolor
- create sinPulse var in frag shader main func
- multiple sinePulse by 10
- map sin range to uv range
- get vuv.x bc of error
- put sinPulse intol fragcolor
- add time to sinePulse
- get texture from src code
- import texture into app.js file
- add texture to uniforms obj in js file using texture loader
- bring in texture uniform in frag shader with sampler2D
- use texture func in main func; pass in texture uniform and vuv
- outpute img value instead of sinePulse
- turn off wireframe
- add sin and time to vuv in texture func
- chanfge texture to water img

## Combining Shaders

- change geo to sphere geo
- create a varying for normals in vert and pass to frag
- add vNormal to frag color
- find glsl noise gist
- get 4d noise function
- bring into vert shader file
- add normals to new position
- multiply normal by snoise function and pass in normals and time into vec4 (4D nosie)
- add more triangles to the sphere
- move noise in vert shader into noise var
- set pulse var to noise
- set fragcolor to pulse
- add 1 and half pulse var

## Sync Html and webGl Dimensions

- set camera position to 600
- calculate fov to be screen size

## Creating Zoom effect - 1

- import dat gui
- add this.setupSettings() method
- inside func create a this.setting object on the class
- obj that has a progress property with val of 0
- this.gui = new dat gui
- this.gui add (check video)
- create new uniform uProgress
- update the value of uprogress in the render func and set it to this.settings.progress
- bring uprogress uniform into frag shader
- bring uprogress into vert shader
- bring utexture uniform into frag shader
- bring vuv into vertex , set it to uv and bring into frag shader
- use texture func to show texsture on plane
- switch texture to checkered
- make plane swaure at 300
- move plane x pos to the right
- create defualt state of mesh in vert shader
- set = to modelMatrix x vec4 position
- create fullScreenPos = to same without modelMatrix
- make finalState var = to a mix() of default and fullscreen state
- add rotation to mesh

## Creating Zoom effect - 2

- add uresolution uniform with width and height of screen
- uniform - uQuadsize - vec2 300 300
- bring above into to vert shader
- fullscreenstate.x will be the resolution.x / quadsize.x (size of plane)
- fullscreenstate.y will be the resolution.y / quadsize.y (size of plane)

## Fixing UV aspect ratio

- add utexture uniform with 100, 100 which gives the size of textsure for aspect ratio
- create vec2 size - mix(quadsize, uresolution, uprogress)
- make above a varying to pass to frag shader - vSize
- bring into frag shader
- newUv = vUv - vec2(0.5) + vec(0.5) - scaling uv's
- above keeps texture in center
- create function getUv - watch vid
- calc uv's to stay centered (background cover formula)

## Effect with corners

- add uConrners uniform in js - make it a vec2 starting at 0,0
- uProgress to 0 by default
- import gsap
- create gsap timeline
- .to the x and y uCorners values to 1 suing gsap
- declare the uniform in uCorners in the vertex shader
- this.tl.prgoess(this.settings.progress)
-
