var parser = document.createElement("a");
parser.href = document.location.href;
if(parser.hostname === "scratch.mit.edu" && parser.pathname.startsWith("/studios/")) {
void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-page { background-color: #fcfcfc}"})));
void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-tab-nav li { padding: 0.5em 1.25em 0.5em 1em}"})));
void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-follow-button { width: 50%}"})));
void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-follow-button { padding-bottom: 11px}"})));
void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-follow-button { padding-top: 11px}"})));
void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".button { padding: 0.5em 1em}"})));
void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-title { font-size: 25px}"})));
void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-info .studio-title { font-weight: 500}"})));
void(document.head.appendChild(Object.assign(document.createElement('style'), { textContent: ".studio-tab-nav li:active { padding: calc(0.5em) calc(1.25em) calc(0.5em) calc(1em)}"})));
} else {
    alert("This only works in studios, please click the bookmark in them!");
  
