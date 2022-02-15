uniform float time;
uniform sampler2D uTexture;

varying float pulse;
varying vec2 vUv;

void main() {
  float sinePulse = (1.0 + sin(vUv.x * 50.0 + time)) / 2.0;

  vec4 myImage = texture(uTexture, vUv + sin(vUv * 20.0 + time) * 0.012);

  gl_FragColor = myImage;
}