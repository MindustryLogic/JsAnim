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
export function AnimMain() {
    const initDisplay = function init(resolution, fps) {
        alert(resolution);
        /*let ResolutionWidth = Number(resolution.split("x")[0]);
        let MsPerFrame = Math.round(1000 / fps);*/
        const para = document.createElement("p");
        /*frame.id = "AnimationDisplayArea";
        frame.style.backgroundColor = "black";
        frame.style.height = ResolutionHeight + "px";
        frame.style.width = ResolutionWidth + "px";*/
        para.textContent = "Bruh";
        document.body.appendChild(para);//and this isn't
    };//wait how do i make it auto execute init so i don't have to worry about people forgetting to do that
    const DisplayData = function DisplayMeta() {
        const para = document.createElement("p");
        para.textContent = "Thing";
        document.body.appendChild(para);
    }//this is working fine
    return {
        initDisplay,
        DisplayData
    }
};
export const Anim = AnimMain();