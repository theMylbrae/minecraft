import { map } from "../world/map.js";
import { data,solide,vide} from "../world/data.js";
import { margin } from "../screen/screen.js";

let statuPlayerMouv = 0

let animMouvPlayer = 15

export function left(){
    if(data.mouvPlayer === false && !data.isInteracting){
        data.mouvPlayer = true
        var boucle = setInterval(() => {
            if(vide.includes(map[Math.floor((data.cYtemp)/100)][Math.floor((data.cXtemp-1)/100)]) && vide.includes(map[Math.floor(data.cYtemp/100)+1][Math.floor((data.cXtemp-1)/100)])){
                mouvAnimation()
                data.isGoingLeft = true;
                statuPlayerMouv++;
                data.cXtemp -= data.isRunning
                data.marginX -= data.isRunning
                if(Number.isInteger(data.cXtemp/100)){
                    data.cX = data.cXtemp/100
                    margin()
                };
                window.addEventListener("keyup",(event) =>{
                    if(event.code === "KeyA" || event.code === "ArrowLeft"){
                        mouvAnimation()
                        clearInterval(boucle) 
                        data.mouvPlayer = false
                    };
                });
            }else{
                clearInterval(boucle)
                data.mouvPlayer = false
            };
        }, 10);
    }; 
};

export function right(){
    if(data.mouvPlayer === false && !data.isInteracting){
        data.mouvPlayer = true
        var boucle = setInterval(() => {
            if(vide.includes(map[Math.floor(data.cYtemp/100)][Math.ceil((data.cXtemp+1)/100)]) && vide.includes(map[Math.floor(data.cYtemp/100)+1][Math.ceil((data.cXtemp+1)/100)])){
                mouvAnimation()
                data.isGoingLeft = false;
                statuPlayerMouv++;
                data.cXtemp += data.isRunning
                data.marginX += data.isRunning
                if(Number.isInteger(data.cXtemp/100)){
                    margin()
                    data.cX = data.cXtemp/100
                };
                window.addEventListener("keyup",(event) =>{
                    if(event.code === "KeyD" || event.code === "ArrowRight"){
                        mouvAnimation()
                        clearInterval(boucle) 
                        data.mouvPlayer = false
                    };
                });
            }else{
                clearInterval(boucle)
                data.mouvPlayer = false
            };
        }, 10);
    }; 
};

export function jump(){
    if(solide.includes(map[data.cY-1][data.cX]) && !data.isInteracting){
        data.spaceIsPress = true
        data.isJumping = true;
        var boucle = setInterval(() => {
            if(data.hauteurJump === 180 || solide.includes(map[Math.ceil((data.cYtemp/100)+1)][data.cX])){
                clearInterval(boucle)
                var boucleTiers = setInterval(() => {
                    data.isJumping = false;
                    data.hauteurJump = 0
                    data.spaceIsPress = false
                    clearInterval(boucleTiers)
                }, 100);
            }
            else{
                data.hauteurJump += 10;
                data.cYtemp += 10;
                data.marginY -= 10;
                if(Number.isInteger(data.cYtemp/100)){
                    data.cY = data.cYtemp/100;
                    data.marginY = 0
                };
            };
        }, 10);
    };
};

export function falling(){
    var boucle = setInterval(() => {
        if(data.cY === data.cYtemp/100 && !data.isInteracting){
            if(vide.includes(map[data.cY-1][Math.floor((data.cXtemp+50)/100)]) && vide.includes(map[data.cY-1][Math.floor(data.cXtemp/100)]) && vide.includes(map[data.cY-1][Math.ceil(data.cXtemp/100)]) && data.isJumping === false){
                data.cYtemp -= 10;
                data.marginY += 10;
                if(Number.isInteger(data.cYtemp/100)){
                    data.cY = data.cYtemp/100
                    data.marginY = 0
                };
            };
        }else if(!data.isInteracting){
            if(vide.includes(map[Math.floor(data.cYtemp/100)][Math.floor((data.cXtemp+50)/100)]) && vide.includes(map[Math.floor(data.cYtemp/100)][Math.floor(data.cXtemp/100)]) && vide.includes(map[Math.floor(data.cYtemp/100)][Math.ceil(data.cXtemp/100)]) && data.isJumping === false){
                data.cYtemp -= 10;
                data.marginY += 10;
                if(Number.isInteger(data.cYtemp/100)){
                    data.cY = data.cYtemp/100
                    data.marginY = 0
                };
            };
        };
    }, 1);
};

export function running(){
    var boucle = setInterval(() => {
        if(Number.isInteger(data.cXtemp/100)){
            data.isRunning = 10
        };
        window.addEventListener("keyup",(event) =>{
            if(event.code === "ShiftLeft"){data.isRunning = 5}
            clearInterval(boucle)
        })
    }, 1);
};

export function mouvAnimation(){
    if(!data.mouvPlayer){
        data.playerStatuMouv = 0;
        statuPlayerMouv = 0;
    }else if(statuPlayerMouv > 0 && statuPlayerMouv <= animMouvPlayer){
        data.playerStatuMouv = 0
    }else if(statuPlayerMouv > animMouvPlayer && statuPlayerMouv <= animMouvPlayer*2){
        data.playerStatuMouv = 1
    }else if(statuPlayerMouv > animMouvPlayer*2 && statuPlayerMouv <= animMouvPlayer*3){
        data.playerStatuMouv = 2
    }else if(statuPlayerMouv >animMouvPlayer*3 && statuPlayerMouv <= animMouvPlayer*4){
        data.playerStatuMouv = 3
    };
    if(data.isGoingLeft){
        data.playerState = "statLB" + data.playerStatuMouv
        if(data.playerStatuMouv >= 3){
            statuPlayerMouv = 0;
        };
    }else{
        data.playerState = "statRB" + data.playerStatuMouv
        if(data.playerStatuMouv >= 3){
            statuPlayerMouv = 0;
        };
    };
    if(!data.isbreaking){
        if(data.isGoingLeft){
            data.playerStateH = "statLH" + data.playerStatuMouv;
            if(data.playerStatuMouv >= 3){
                statuPlayerMouv = 0;
            };
        }else{
            data.playerStateH = "statRH" + data.playerStatuMouv;
            if(data.playerStatuMouv >= 3){
                statuPlayerMouv = 0;
            };
        };
    };
};