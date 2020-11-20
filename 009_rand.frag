#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(){
    // vec2 st = (2. * gl_FragCoord.xy - u_resolution) / min(u_resolution.x, u_resolution.y);
    vec2 st = gl_FragCoord.xy * 0.005;
    st += u_time + vec2(sin(st.y), cos(st.x));
    st.x -= u_time;
    st.x -= sin(u_time + cos(st.y + 10.));

    float rand01 = fract(random2d(st) + u_time / 90.);
    float rand02 = fract(random2d(st) + u_time / 40.);
    rand01 *= 0.06 * length(fract(st));
    gl_FragColor = vec4(rand01 * 30., 0., rand02 * rand01 * 10., 1.0);
}