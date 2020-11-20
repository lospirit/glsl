#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = (2. * gl_FragCoord.xy - u_resolution) / min(u_resolution.x, u_resolution.y);
    st *= 5.;
    // st = fract(st);
    // st.x *= 2.;
    // st.y *= 0.5;
    float grid = cos(st.x) + sin(st.y) - cos(u_time);
    vec3 col = vec3(0.0);
    col += step(grid, grid * 0.1);
    // col += grid;

    gl_FragColor = vec4(col, 1.0);
}