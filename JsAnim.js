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
        this.fps;
        this.AppendTarget;
    }
    initDisplay(resolution, fps) {
        let ResolutionWidth = Number(resolution.split("x")[0]);
        let ResolutionHeight = Number(resolution.split("x")[1]);
        let MsPerFrame = Math.round(1000 / fps);
        this.fps = fps;
        const frame = document.createElement("div");
        frame.id = this.id;
        frame.style.backgroundColor = "black";
        frame.style.height = ResolutionHeight + "px";
        frame.style.width = ResolutionWidth + "px";
        document.body.appendChild(frame);
    }
    DisplayData() {
        const frame = document.getElementById("RenderZone");
        this.AppendTarget = frame;
        const para = document.createElement("p");
        para.textContent = frame.style.getPropertyValue("width") + " x " + frame.style.getPropertyValue("height") + " " + this.fps + " fps";
        document.body.appendChild(para);
    }
    CreateObject(Object) {
        this.object = Object;
        switch (this.object) {
            case "rect":
                
        }
    }
    CreateRectCSS(width, height, bgColor) {
        const rect = createElement("div");
        rect.style.width = width + "px";
        rect.style.height = height + "px";
        rect.style.position = "relative";
        rect.style.backgroundColor = bgColor;
        this.AppendTarget.appendChild(rect);
    }
    CreateRectSVG(width, height, startPos) {
        const svg = document.createElementNS("https://www.w3.org/2000/svg", "svg")
        const rect = document.createElementNS("https://www.w3.org/2000/svg", "rect")
        svg.setAttribute("viewBox",)
    }
}

export const Anim = new Main("RenderZone");