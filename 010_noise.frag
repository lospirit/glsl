#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float noise1d(float v){
    return cos(v + cos(v * 90.1415) * 100.1415) * 0.5 + 0.5;
}

void main(){
    vec2 st = (2. * gl_FragCoord.xy - u_resolution) / min(u_resolution.x, u_resolution.y);
    st *= 6.;
    vec2 glitch = st;
    st *= noise1d(sin(st.y * 100.) + sin(st.x * 100.));
    glitch *= noise1d(cos(glitch.x - 5000000.) + sin(glitch.y / 200000.));
    vec3 col = vec3(0.0);
    // if(sin(u_time) > 0.5)
    //     col.r += st.x + cos(noise1d(u_time / 2.) * 10.);
    // if(sin(u_time) < - 0.5)
    //     col += st.x * sin(noise1d(u_time - 10.) * 20.);
    col.r += abs(sin(st.x + st.y - u_time) * 2.) / abs(cos(st.x - st.y - u_time) * 10.);
    col += (abs(cos(glitch.s + glitch.t + u_time) * 2.) / abs(sin(glitch.s + glitch.t + u_time) * 10.)) / 3.5;
    gl_FragColor = vec4(col, 1.0);
}