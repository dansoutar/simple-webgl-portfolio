uniform float time;
uniform sampler2D uTexture;
uniform float uProgress;

varying vec2 vUv;

void main() {

  vec4 image = texture(uTexture, vUv);

  gl_FragColor = image;
}