#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.1415926535;

uniform vec2 u_resolution;
uniform float u_time;

float polygonshape(vec2 position, float radius, float sides){
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;
    return step(radius, cos(floor((sin(u_time) + sin(u_time * 0.3 + 0.5) + cos(u_time / 2.)) + angle / slice) * slice - angle) * length(position));
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec2 translate = vec2(0., u_time / 20.);
    st += translate;
    st *= 6.;
    st = fract(st);
    vec3 col = vec3(0.0);
    float polygon = polygonshape(st, 0.2, 6.);
    col = vec3(polygon);
    if (st.y < 0.7 && st.y > 0.3 && st.x < 0.7 && st.x > 0.3 && col == vec3(0.)){
        col = vec3(1., 0., 0.);
    }

    gl_FragColor = vec4(col, 1.0);

}
