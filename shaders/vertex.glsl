uniform float time;
varying float pulse; 

void main() {
    vec3 newPosition = position;

    
    newPosition.z = sin(length(newPosition) * 30.0 + time) * 0.05;
    
    pulse = 20.0 * newPosition.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}