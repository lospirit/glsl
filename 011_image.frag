#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 col = vec3(0.0);
    st.y *= abs(sin(st.y * u_time * 10.));
    // st *= 20.;
    // st.x += sin(st.x + u_time);
    // st.y += cos(st.y + u_time);
    vec4 image = texture2D(u_tex0, st);

    if(image.rgb == vec3(1.)) {
        image.b = 0.;
        image.g = st.y;
    //     // image.r = st.y;
    }
    gl_FragColor = vec4(image);
}