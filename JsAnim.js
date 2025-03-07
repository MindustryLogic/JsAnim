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
    this.init = function (resolution, fps) {
        ResolutionHeight = Number(resolution.split("x")[1]);
        ResolutionWidth = Number(resolution.split("x")[0]);
        MsPerFrame = Math.round(1000 / fps);
        const frame = document.createElement("p");
        frame.id = "AnimationDisplayArea";
        frame.textContent = "This exist";
        document.body.appendChild(frame);//it is not showing up
        /*document.getElementById("AnimationDisplayArea").forEach((defaults) => {
            defaults.style.top = "0px";
            defaults.style.left = "0px";
            defaults.style.width = ResolutionWidth + "px";
            defaults.style.height = ResolutionHeight + "px";
            defaults.style.position = "absolute";
            defaults.style.backgroundColor = "black";
            defaults.style.overflow = "hidden";
            defaults.style.display = "block";
        })*/
    };//wait how do i make it auto execute init so i don't have to worry about people forgetting to do that
    this.DisplayMeta = function () {
        
    }
};