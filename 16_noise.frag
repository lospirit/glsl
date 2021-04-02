#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (in float x) {
    return fract(sin(x)*1e4);
}

float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12222.9898,7.233)))* 1111111.5453123);
}

float pattern(vec2 st, vec2 v, float t) {
    vec2 p = floor(st + v);
    return step(t, random(100. + p * .0000001) + random(p.x) * .4 );
}

void main(){
    vec2 st = (2. * gl_FragCoord.xy - u_resolution) / min(u_resolution.x, u_resolution.y);
    vec2 grid = vec2(100., 100.);
    st *= grid;

    vec2 ipos = floor(st);
    vec2 fpos = fract(st);

    vec2 vel = vec2(u_time * max(grid.y , grid.x)); // time
    vel *= vec2(-1., .0) * random(1.0 + ipos.y); // direction

    vec3 col = vec3(0.);
    col.r = pattern(st, vel, 1.);
    col.g = pattern(st, vel, .5);
    col.b = pattern(st, vel, .5);;
    col += step(0.5, fpos.y);

    gl_FragColor = vec4(1. - col, 1.);
}