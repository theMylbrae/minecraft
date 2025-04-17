import { screen,screenFond } from "../main.js"
import { data } from "../world/data.js"
import { changConstante } from "./img.js"

export function init(){
    var canvas = document.querySelector("canvas")
    canvas.style.width = (innerWidth+((innerWidth/19)*4))+"px"
    canvas.style.height = (innerWidth+((innerWidth/19)*4))+"px"
    canvas.width = innerWidth*3
    canvas.height = innerWidth*3
    canvas.style.marginLeft = -((innerWidth/19)*2)+"px"
    canvas.style.marginTop = (innerWidth+((innerWidth/19)*4))*-0.3638555925952195+"px"
    var body = document.querySelector("body")
    body.style.margin = "0%"
    body.style.overflow = "hidden"
    body.style.float = "Left"
    changConstante()
};

export function margin(){
    data.marginX = 0
};


export function loading(){
    for(var y = 0;y<23;y++){
        for(var x = 0;x<23;x++){
            screenFond(x,y)
            screen(x,y)
        };
    };
};
