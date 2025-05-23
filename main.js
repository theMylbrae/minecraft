import { map } from "./world/map.js";
import { data,frame,vide  } from "./world/data.js";
import { img , constante, statuBloc, statuPlayer,obj} from "./screen/img.js";
import { left ,right,jump,falling,running} from "./interaction/mouv.js";
import { casser } from "./interaction/interactionMap.js";
import { inventaire } from "./player/inventaire.js";
import { isLoad } from "./world/map.js";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


export function screenFond(x,y){
    ctx.drawImage(img.Air,((constante*3)*x)-(constante*3*(data.marginX/100)),((constante*3)*(22-y))-(constante*3*(data.marginY/100)),constante*3,constante*3)
}
export function screen(x,y){
    var matrice = map[data.cY - 12 + y][data.cX - 9 + x]
    ctx.drawImage(img[matrice],((constante*3)*x)-(constante*3*(data.marginX/100)),((constante*3)*(22-y))-(constante*3*(data.marginY/100)),constante*3,constante*3)
};
export function sreenPlayerH(){
    var playerState = data.playerStateH
    ctx.drawImage(statuPlayer[playerState],(constante*3)*9,(constante*3)*9,constante*3,constante*3*2)
};
export function sreenPlayer(){
    var playerState = data.playerState
    ctx.drawImage(statuPlayer[playerState],(constante*3)*9,(constante*3)*10,constante*3,constante*3)
};
export function casseraff(){
    if(data.statuBloc != "stat0"){
        var statu = data.statuBloc
    ctx.drawImage(statuBloc[statu],((constante*3)*(data.blockXCasser+1))-(constante*3*(data.marginX/100)),((constante*3)*(data.blockYCasser+6))-(constante*3*(data.marginY/100)),constante*3,constante*3)
    };
};
export function inventaireAffichage(){
    var vide = []
    if(data.isInventaire){
        ctx.drawImage(img.Inventaire,(innerWidth/21)*6,(innerWidth+((innerWidth/19)*4))*0.3638555925952195*2.6,(innerWidth/21)*3*13,((innerWidth/21)*3*13)*(9/16));
        ctx.drawImage(img.Tabledecraftinterne,constante*3*13.5,(innerWidth+((innerWidth/19)*4))*0.3638555925952195*2.6,constante*8,constante*8);
        ctx.drawImage(img.resultCraft,constante*3*13.5,(innerWidth+((innerWidth/19)*4))*0.3638555925952195*3.5,constante*8,constante*8);
    };
};
export function craftingTableAffichage(){
    var vide = []
    if(data.isInCraftingTable){
        ctx.drawImage(img.Inventaire,(innerWidth/21)*6,(innerWidth+((innerWidth/19)*4))*0.3638555925952195*2.6,(innerWidth/21)*3*13,((innerWidth/21)*3*13)*(9/16));
        ctx.drawImage(img.Tabledecraft,constante*3*13.5,(innerWidth+((innerWidth/19)*4))*0.3638555925952195*2.6,constante*12,constante*12);
        ctx.drawImage(img.resultCraft,constante*3*13.5,(innerWidth+((innerWidth/19)*4))*0.3638555925952195*4.016,constante*8,constante*8);
    };
};
export function objInventaireAffichage(matrice,nbr,x,y){
    ctx.drawImage(obj[matrice],(innerWidth*3/19)*(x+2.89),((innerWidth*3)/17.1)*(y+6.2),innerWidth*3/35,innerWidth*3/35);
    ctx.font = innerWidth/19+"px" +" arial";
    ctx.fillText(nbr,(innerWidth*3/19)*(x+3.3),((innerWidth*3)/17.1)*(y+6.8));
};
export function objInventaireAffichage0(matrice,nbr,x){
    ctx.drawImage(obj[matrice],(innerWidth*3/19)*(x+2.89),((innerWidth*3)/17.5)*(11.6),innerWidth*3/35,innerWidth*3/35);
    ctx.font = innerWidth/19+"px" +" arial";
    ctx.fillText(nbr,(innerWidth*3/19)*(x+3.3),((innerWidth*3)/17.5)*(12.2));
};
export function objCraftingTableInventaireAffichage(matrice,nbr,x,y){
    ctx.drawImage(obj[matrice],(innerWidth*3/19)*(x+14.05),((innerWidth*3)/20.1)*(y+8.35),innerWidth*3/35,innerWidth*3/35);
    ctx.font = innerWidth/19+"px" +" arial";
    ctx.fillText(nbr,(innerWidth*3/19)*(x+14.55),((innerWidth*3)/20.1)*(y+9.1));
};

export function objCraftingTableStorageAffichage(matrice,nbr,x,y){
    if(matrice != ""){
        ctx.drawImage(obj[matrice],(innerWidth*3/16.50)*(x+12.25),((innerWidth*3)/16.5)*(y+6.8),innerWidth*3/35,innerWidth*3/35);
        ctx.font = innerWidth/19+"px" +" arial";
        ctx.fillText(nbr,(innerWidth*3/16.50)*(x+12.75),((innerWidth*3)/16.5)*(y+7.5));
    };
};
export function affichageObjetCraft(){
    if(data.isInventaire){
        if(data.whatIsCrafting != ""){
            ctx.drawImage(obj[data.whatIsCrafting],constante*3*14.55,(innerWidth+((innerWidth/19)*4))*0.3638555925952195*3.89,innerWidth*3/35,innerWidth*3/35);
        }
    }else if(data.isInCraftingTable){
        if(data.whatIsCrafting != ""){
            ctx.drawImage(obj[data.whatIsCrafting],constante*3*14.55,(innerWidth+((innerWidth/19)*4))*0.3638555925952195*4.4,innerWidth*3/35,innerWidth*3/35);
        }
    }
};

if(isLoad){
    frame(data.frame)
    falling()
}



window.addEventListener("keydown",(event) =>{
    if((event.code === "KeyA" || event.code === "ArrowLeft")){left()}
    else if((event.code === "KeyD" || event.code === "ArrowRight")){right()};
})

window.addEventListener("keydown",(event) =>{
    if(event.code === "ShiftLeft"){running()}
})

window.addEventListener("keydown",(event) =>{
    if(event.code === "Space" && data.spaceIsPress === false){jump()}
})

window.addEventListener("mousedown", (event) =>{
    const breakingAffConstanteX = event.clientX/(innerWidth/15.7)+0.7
    const breakingAffConstanteY = (event.clientY/(innerWidth/15.7))+0.95
    if(!data.isInventaire && !data.isInCraftingTable){
        data.isInteracting = true;
        casser(Math.floor(breakingAffConstanteX+(data.marginX/100)),Math.floor(breakingAffConstanteY+(data.marginY/100)));
    }
})

window.addEventListener("keypress",(event) =>{
    if(event.code === "KeyE" && data.isInventaire){data.isInventaire = false}
    else if(event.code === "KeyE" && !data.isInventaire && !data.isInCraftingTable){data.isInventaire = true}
})

