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
export let ObjList = new Array;
export let stylesheet;
export const ObjChangeEvent = new CustomEvent("Change", {
    detail: {
        Update: "Obj",
    }
})
export class Main{
    constructor(name) {
        this.id = name;
        this.fps;
        this.AppendTarget;
        this.SVGTarget;
        this.reso;
        this.stylesheet;
        this.ObjTracker;
    }
    initDisplay(resolution=String("1080x720"), fps=Number(30), includeSVG=Boolean(true)) {
        let ResolutionWidth = Number(resolution.split("x")[0]);
        let ResolutionHeight = Number(resolution.split("x")[1]);
        let MsPerFrame = Math.round(1000 / fps);
        this.reso = resolution;
        this.fps = fps;
        const frame = document.createElement("div");
        frame.id = this.id;
        frame.style.backgroundColor = "rgba(0, 0, 0, 0)";
        frame.style.height = ResolutionHeight + "px";
        frame.style.width = ResolutionWidth + "px";
        frame.style.borderStyle = "solid";
        frame.style.display = "block"
        document.body.appendChild(frame);
        if (includeSVG === Boolean(true)) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("aria-hidden","true");
            svg.setAttribute("viewbox", "0 0" + " " + this.reso.split("x")[0] + " " + this.reso.split("x")[1]);
            svg.setAttribute('width', this.reso.split("x")[0]+"px");
            svg.setAttribute('height', this.reso.split("x")[1]+"px");
            svg.setAttribute('id', "SVGHere");
            svg.style.position = "relative";
            svg.style.display = "block";
            svg.style.zIndex = -1;
            frame.appendChild(svg);
        };
        stylesheet = document.createElement("style");
        this.stylesheet = stylesheet;
        stylesheet.appendChild(document.createTextNode(""));
        document.head.appendChild(stylesheet);
    }
    DisplayData() {
        const frame = document.getElementById("RenderZone");
        this.AppendTarget = frame;
        this.SVGTarget = document.getElementById("SVGHere")
        const para = document.createElement("p");
        para.textContent = frame.style.getPropertyValue("width") + " x " + frame.style.getPropertyValue("height") + " " + this.fps + " fps";
        document.body.appendChild(para);
        console.log(stylesheet);
        const ol = document.createElement("ol");
        ol.style.id = "ObjTrackList";
        ol.appendChild(document.createTextNode(""));
        document.body.appendChild(ol);
        this.ObjTracker = document.getElementById("ObjTrackList");
    }
    //Dynamic item tracker
    ObjectTracker() {
        if (this.ObjTracker.children.length == 0) {
            for (i = 0; i < ObjList.length; i++) {
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(ObjList[i].toString));
                this.ObjTracker.appendChild(li);
            };
        } else {
            this.ObjTracker.innerHTML = "";
            for (i = 0; i < ObjList.length; i++){
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(ObjList[i].toString));
                this.ObjTracker.appendChild(li);
            }
        }
    }
    //this portion make stuff exist
    CreateRectCSS(width=Number, height=Number, startPos=String(0x0), color=String(), id=String()) {
        const rect = document.createElement("div");
        rect.style.width = width + "px";
        rect.style.height = height + "px";
        rect.style.position = "relative";
        rect.style.top = startPos.split("x")[1]+"px";
        rect.style.left = startPos.split("x")[0]+"px";
        rect.style.backgroundColor = color;
        rect.setAttribute("id", id);
        rect.style.display = "block";
        rect.style.opacity = 0;
        this.AppendTarget.insertBefore(rect, this.AppendTarget.children[0]);
        ObjList.push("Rect " + id);
        console.log(ObjList);
    };
    CreateRectSVG(width=Number, height=Number, startPos=String(0x0), color=String, id=String) {
        var rect1 = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
            
        rect1.setAttribute("width", width+"px");
        rect1.setAttribute("height", height+"px");
        rect1.setAttribute("x", startPos.split("x")[0]);
        rect1.setAttribute("y", startPos.split("x")[1]);
        rect1.setAttribute("fill", color);
        rect1.setAttribute("id", id + "svg");
        rect1.setAttribute("opacity", 0);

        this.SVGTarget.appendChild(rect1);
        ObjList.push("Rect " + id + "svg");
        console.log(ObjList);
    };
    //this portion make stuff move
    static sub = class {
        constructor() {
        };
        Appear(object) {
            this.object = ObjList[object];
            if (this.object.includes("svg") === false) {
                document.getElementById(this.object.split(" ")[1]).style.opacity = 1;
                console.log(this.object + "is now opac")
            } else {
                document.getElementById(this.object.split(" ")[1]).setAttribute("opacity", 1);
            }
        }
        Animate(object, type, duration, to=String("0x0")) {
            this.object = ObjList[object];
            this.location = document.getElementById(this.object.split(" ")[1]).getBoundingClientRect();
            console.log(this.location)
            if (this.object.includes("svg") === false) {
                let shape = String(this.object).split(" ")[0];
                switch (shape) {
                    case ("Rect"):
                        console.log(stylesheet);
                        let AddKeyframes = new Array;
                        AddKeyframes.push("@keyframes", this.item + "Anim");
                        AddKeyframes.push("{", "from {", "transform: translate(", this.location.x + "px", this.location.y + "px", ");}");
                        AddKeyframes.push("to", "{ transform: translate (", to.split("x")[0] + "px", to.split("x")[1] + "px", "); } }");
                        console.log(AddKeyframes);
                        const node = AddKeyframes[0].toString();
                        console.log(node);
                        for (i = 0; i < AddKeyframes.length; i++) {
                            document.head.appendChild(document.createTextNode(AddKeyframes[i].toString));
                        };
                        
                }
            }
        }
    }
}

export const Add = new Main("RenderZone");
export const Animate = new Main.sub();
export const Auto = window.addEventListener("Change", (action) => {
    switch (action.detail.Update) {
        case "Obj":

    }
})
