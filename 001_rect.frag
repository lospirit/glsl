#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float rectangle(vec2 position, vec2 scale){
    scale = vec2(0.5) - scale * 0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
    return shaper.x * shaper.y;
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 col = vec3(0.0);
    float rect = rectangle(st, vec2(0.4));
    col = vec3(rect);
    col.gb -= 1.;
    gl_FragColor = vec4(col, 1.0);

}