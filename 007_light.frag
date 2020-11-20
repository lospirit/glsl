#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 st = (2. * gl_FragCoord.xy - u_resolution) / min(u_resolution.x, u_resolution.y);
    st *= 0.5;
    vec4 col = vec4(0.0);
    float radius = 0.3;

    for(int i = 0; i < 50; i++){
        float rad = radians(360. / 50.) * float(i);
        // col.rgba += 0.003 / length(st + vec2(radius * cos(rad), radius * sin(rad)));
        col.rgba += 0.001 / length(st + vec2(radius * cos(rad + float(i) - (u_time * 10.)), radius * sin(rad + float(i) - (u_time * 100.))));
        // col.a = 0.003 / length(st + vec2((radius) * cos(rad + float(i) - (u_time * 100.)), radius * sin(rad + float(i) - (u_time * 100.))));
    }


    gl_FragColor = vec4(col);

}