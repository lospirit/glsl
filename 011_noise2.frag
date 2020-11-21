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
    st.x = st.x + sin(noise1d(st.x));
    st.y = st.y - sin(noise1d(st.y));
    st = vec2(st.x - sin(u_time)/ st.y + cos(u_time));
    float col = 0.;
    col += st.x;
    col += st.y;

    st *= 40.;
    st *= noise1d(st.y);
    vec3 coll = vec3(col);
    if(sin(u_time) > 0.5)
        coll.r += st.x + cos(noise1d(u_time / 2.) * 10.);
    if(sin(u_time) < - 0.5)
    col += st.x * sin(noise1d(u_time - 10.) * 20.);
    coll.r += abs(sin(st.x + st.y - u_time) * 2.) / abs(cos(st.x - st.y - u_time) * 10.);

    gl_FragColor = vec4(coll, 1.0);
}