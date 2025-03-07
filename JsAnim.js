export function helloWorldBecauseYes() {
    const Hi = "Hello" + " " + "World";
    const paraExample = document.createElement("p");
    const nodeExample = document.createTextNode(Hi);
    const idForExample = createAttribute("id");
    idForExample.value = "HelloWorld";
    paraExample.appendChild(nodeExample);
    nodeExample.setAttributeNode(idForExample);
    document.body.appendChild(paraExample);
}