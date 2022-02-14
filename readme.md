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
