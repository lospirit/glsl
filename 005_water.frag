#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
const int AMOUNT = 10;

void main(){
    vec2 st = (2. * gl_FragCoord.xy - u_resolution) / min(u_resolution.x, u_resolution.y);
    st *= 10.;
    float len;

    for(int i = 0; i < AMOUNT; i++){
        len = length(vec2(st.x, st.y));
        st.x = st.x - cos(st.y + sin(len)) + cos(u_time / 10.);
        st.y = st.y + sin(st.x - cos(len)) - sin(u_time / 13.);
    }

    gl_FragColor = vec4(cos(len / 10.), cos(len / 7.), cos(len * 200000.), 1.0);
}