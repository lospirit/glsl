#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 col = vec3(0.);
    float grain = 0.;
    grain = random2d(sin(st) * u_time);
    col = vec3(grain);
    if (st.x > 0.1 && st.x < 0.9 && st.y > abs(sin(u_time * 0.5)) + 0.1 && st.y < 0.9) {
        col *= vec3(1., 0., 0.);
        if(col.r >= .6 && st.x > 0.4 && st.x < 0.6)
            col -= vec3(2., .0, 0.9);
    }

    gl_FragColor = vec4(col, 1.);
}