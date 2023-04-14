const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("input", onChange);

function onChange(evt) {
    // console.log("currentTarget: ", evt.currentTarget.value);
    // console.log("event type: ", evt.type);
    text.style.fontSize = `${evt.currentTarget.value}px`;

    // if(evt.currentTarget.value<50){
    //     text.style.color = 'blue';
    // } else {
    //     text.style.color = 'yellow';
    // }
}