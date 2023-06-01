const on_button = document.getElementById('on');
const off_button = document.getElementById('off');

function on_fan(){
    const fan = document.getElementById('fan-image');

    fan.src = "images/Vfan.gif";
    
}

function off_fan(){
    const fan = document.getElementById('fan-image');

    fan.src = "images/fan.png";
    
}

on_button.addEventListener('click', () => console.log("Fan turned on"));
off_button.addEventListener('click', () => console.log("Fan turned off"));

