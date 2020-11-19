#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = (2. * gl_FragCoord.xy - u_resolution) / min(u_resolution.x, u_resolution.y);
    float col = 0.;
    st.x *= .2;
    st.y *= .1;
    col += sin(st.x * 50. + cos(u_time + st.y * 10. + sin(st.x * 10. + u_time * 2.)) * 8.);
    col += cos(st.x * 4. + sin(u_time + st.y * 2. + cos(st.x * 2. + u_time * 3.)) * 2.);
    col /= sin(st.x * 30. + cos(u_time + st.y * 30. + sin(st.x * 10. + u_time * 2.)) * 5.);
    col /= cos(st.x * 2. + sin(u_time + st.y * 4. + cos(st.x * 25. + u_time * 2.)) * 2.);

    gl_FragColor = vec4(vec3(col + 1., col - 1., col - 1.), 1.0);
}