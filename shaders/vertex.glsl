uniform float time;

varying float pulse;
varying vec2 vUv;

void main() {
    vec3 newPosition = position;

    vUv = uv;

    newPosition.z = sin(length(newPosition) * 30.0 + time) * 0.05;
    
    pulse = 20.0 * newPosition.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
}