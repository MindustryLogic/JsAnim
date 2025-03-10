export function helloWorldBecauseYes() {
    const Hi = "Hello" + " " + "World";
    const paraExample = document.createElement("p");
    const nodeExample = document.createTextNode(Hi);
    paraExample.appendChild(nodeExample);
    //const idForExample = createAttribute("id");
    //idForExample.value = "HelloWorld";
    //nodeExample.setAttributeNode(idForExample);
    document.body.appendChild(paraExample);//somewhere went wrong when setting attribute
}
export function AltWay() {
    const Hi = "Hello" + " " + "World";
    const paraExample = document.createElement("p");
    paraExample.id = "HelloFromDiffWay";
    paraExample.textContent = Hi;
    document.body.appendChild(paraExample);
}
//Concept ok initial testing over time for the real deal
//Sooner or later I will have to write the documentation and tests(probably) and i might put the docs on my github pages and/or use the wiki in github

export class Main{
    constructor(name) {
        this.id = name;
    }
    initDisplay(resolution, fps) {
        let ResolutionWidth = Number(resolution.split("x")[0]);
        let ResolutionHeight = Number(resolution.split("x")[1]);
        let MsPerFrame = Math.round(1000 / fps);
        const frame = document.createElement("div");
        frame.id = this.id;
        frame.style.backgroundColor = "black";
        frame.style.height = ResolutionHeight + "px";
        frame.style.width = ResolutionWidth + "px";
        document.body.appendChild(frame);
    }
    DisplayData() {
        const frame = document.getElementById(this.id)
        const para = document.createElement("p");
        para.textContent = frame.getAttribute("width");
        document.body.appendChild(para);
    }
}

export const Anim = new Main("RenderZone");