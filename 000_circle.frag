#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circle(vec2 _st, float radius){
    return step(radius, length(_st));

}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    st -= 0.5;
    st *= 4.;
    vec3 col = vec3(0.0);
    float circ = circle(st, 0.3);
    col = vec3(circ);
    gl_FragColor = vec4(col, 1.0);

}