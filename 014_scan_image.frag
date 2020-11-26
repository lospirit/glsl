#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

float size = 10.;
float speed = 3.;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec4 image = texture2D(u_tex0, st);
    image.a = sin(floor(st.x * size) - u_time * speed);

    gl_FragColor = vec4(image);
}