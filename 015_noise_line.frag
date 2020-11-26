#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (in float x) {
    return fract(sin(x) * 1e4);
}

float randomSerie(float x, float freq, float t) {
    return step(.8,random(floor(x * freq) - floor(t)));
}

void main(){
    vec2 st = (2. * gl_FragCoord.xy - u_resolution) / min(u_resolution.x, u_resolution.y);
    vec3 col = vec3(0.0, 0.0, 0.0);

    float cols = 1.;
    float freq = abs(atan(u_time) * 0.05);
    // float t = 60. + u_time * (1.0 - freq) * 30.;
    float t = u_time * 4.;

    if (fract(st.x * cols * 0.5) < 0.5){
        t *= -2.0;
    }
    float sty_one = -.9;
    float sty_two = -.7;
    for(float i = 0.; i < 2.; i += 0.4){
        if (st.x > -0.2 && st.x < 0.2 && st.y > sty_one + i && st.y < sty_two + i) {
            t *= 4. + (u_time * i - (i / 2.));
        }
    }
    col = vec3(randomSerie(st.y, freq * 100., t + .05), randomSerie(st.y, freq * 100., t), randomSerie(st.y, freq * 100., t));

    for(float i = 0.; i < 2.; i += 0.4){
        if (st.x > -0.2 && st.x < 0.2 && st.y > sty_one + i && st.y < sty_two + i) {
            col -= vec3(0., i, random(i));
        }
    }
    gl_FragColor = vec4(col, 1.);

}