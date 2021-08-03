var parser = document.createElement("a");
parser.href = document.location.href;
if(parser.hostname === "scratch.mit.edu" && parser.pathname.startsWith("/projects/")) {
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-page { background-color: #fcfcfc}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-tab-nav li { padding: 0.5em 1.25em 0.5em 1em}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-follow-button { width: 40%}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-follow-button { padding-bottom: 7px}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-follow-button { padding-top: 7px}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-follow-button { font-size: 12px}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".button { padding: 0.5em 1em}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-title { font-size: 25px}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-title { font-weight: 500}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-tab-nav li:active { padding: calc(0.5em) calc(1.25em) calc(0.5em) calc(1em)}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".replies.collapsed > .comment:last-of-type:after { background: none}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-description { height: 35rem}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info { gap: 10px}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".sub-nav li, .sub-nav button { border-radius: 12px}"})));
    void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-tab-nav li { background: transparent}"})));
} else {
    alert("Please click this in a studio :)");
}
