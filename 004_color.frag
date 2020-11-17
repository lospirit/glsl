#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    st *= 2.;

    for (int n = 1; n < 28; n++) { // displace n times
        float i = float(n);
        st += vec2((0.7 / i * sin(i * st.y + u_time + 0.3 * i) + 0.8), 0.4 / i * sin(st.x + u_time + 0.3) + 1.6);
        st += vec2(.9, 2.5 /  sin(floor(st.y / st.x + u_time + 2000000.)));

    }

    // st += vec2((0.7 / sin(st.y + u_time + 0.3) + 0.8), 0.4 / sin(st.x + u_time + 0.3) + 1.6);
    st += vec2(9., 2.5 / sin(floor(st.y / st.x + u_time + 2000000.)));
    vec3 col = vec3(.5 * sin(st.x) + .5, .5 * sin(st.y) + .5, .5 * sin(st.x + st.y) + .5);
    col.g -= 0.9;
    gl_FragColor = vec4(col, 1.0);
}