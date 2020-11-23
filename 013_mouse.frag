#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 col = vec3(0.0);
    col.r = st.x * (u_mouse.x / u_resolution.x);
    col.g = st.y * (u_mouse.y / u_resolution.x);

    gl_FragColor = vec4(col, 1.0);
}