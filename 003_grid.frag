#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    st += vec2(.5);
    vec3 col = vec3(0.0);
    col += sin(st.x * cos(u_time / 20.) * 60.) + sin(st.y * cos(u_time / 80.) * 30.);
    col += cos(st.x * sin(u_time / 40.) * 10.) + cos(st.y * sin(u_time / 100.) * u_time);
    col += cos(st.y * sin(u_time / 4.) * 400.);
    col *= cos(u_time) * 0.4;
    col.b -= 1.;
    col.g -= cos(u_time * 0.1);

    gl_FragColor = vec4(col, 1.0);

}