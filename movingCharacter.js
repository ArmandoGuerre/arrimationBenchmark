const characterData = {
        arrImgs: ["fly00.png", "fly01.png",
            "fly02.png", "fly03.png", "fly04.png",
            "fly05.png", "fly06.png", "fly07.png"],
    poseNumber: 0,
    elem: document.querySelector("#drag"),
    screenWidth: document.querySelector("#castle").clientWidth,
    screenHeight: document.querySelector("#castle").scrollHeight,
    x: 0,
    y: document.querySelector("#castle").scrollHeight - 680,
    timerId: null
}
const characterData2 = {
    arrImgs: ["ang00.png", "ang01.png",
            "ang02.png", "ang03.png", "ang04.png",
            "ang05.png", "ang06.png", "ang07.png", 
            "ang08.png", "ang09.png", "ang10.png", 
            "ang11.png", "ang12.png", "ang13.png", 
            "ang14.png", "ang15.png"],
poseNumber: 0,
elem: document.querySelector("#angel"),
screenWidth: document.querySelector("#castle").clientWidth,
screenHeight: document.querySelector("#castle").scrollHeight,
x: 880,
y: document.querySelector("#castle").scrollHeight - 1200,
timerId: null
}
const characterData3 = {
    arrImgs: ["spid00.png", "spid01.png",
            "spid02.png", "spid03.png", "spid04.png",
            "spid05.png", "spid06.png", "spid07.png", 
            "spid08.png", "spid09.png", "spid10.png"],
poseNumber: 0,
elem: document.querySelector("#spid"),
screenWidth: document.querySelector("#castle").clientWidth,
screenHeight: document.querySelector("#castle").scrollHeight,
x: 980,
y: document.querySelector("#castle").scrollHeight - 200,
timerId: null
}
//function move() {
    characterData2.timerId = setInterval(frame, 100);
    characterData.timerId = setInterval(frame2, 100);
    characterData3.timerId = setInterval(frame3, 100);
//}
function frame() {
    if (characterData2.y > characterData2.screenWidth - 1000) {
        characterData2.y = 10;
    } else {
        characterData2.y += 5;
        characterData2.elem.style.top = characterData2.y + "px";
        characterData2.elem.style.left = characterData2.x + "px";
        characterData2.elem.src =
            "angHov\\" + characterData2.arrImgs[characterData2.poseNumber];
        console.log(characterData2.elem.src);
        characterData2.poseNumber = (characterData2.poseNumber + 1) % 8; //speed of picture not speed over the screen
    }
}
function frame2() {
    if (characterData.x > characterData.screenWidth - 150) {
        characterData.x = 5;
    } else {
        characterData.x += 5;
        characterData.elem.style.top = characterData.y + "px";
        characterData.elem.style.left = characterData.x + "px";
        characterData.elem.src =
            "boyFly\\" + characterData.arrImgs[characterData.poseNumber];
        console.log(characterData.elem.src);
        characterData.poseNumber = (characterData.poseNumber + 1) % 8;
    }
}
function frame3() {
    if (characterData3.x > characterData3.screenWidth - 150) {
        characterData3.x = 5;
    } else {
        characterData3.x += 0;
        characterData3.elem.style.top = characterData3.y + "px";
        characterData3.elem.style.left = characterData3.x + "px";
        characterData3.elem.src =
            "spidFlip\\" + characterData3.arrImgs[characterData3.poseNumber];
        console.log(characterData3.elem.src);
        characterData3.poseNumber = (characterData3.poseNumber + 1) % 8;
    }
}

/*function frame() {
    if (pos == 350) {
    clearInterval(id);
    } else {
    pos++;
    characterData.elem.style.top = pos + 'px';
    characterData.elem.style.left = pos + 'px';
    }
    }*/
    /*function frame() {
        if (pos == 350) {
        clearInterval(id);
        } else {
        pos++;
        characterData.elem.style.right = pos + 'px';
        //elem.style.left = pos + 'px';
        }
        }*/