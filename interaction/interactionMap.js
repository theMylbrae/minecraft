import { map } from "../world/map.js";
import { data,solide,main,vide } from "../world/data.js";
import { casseraff } from "../main.js";
import { statuBloc } from "../screen/img.js";
import { InInventaire,isOutil ,inventaire,restInInventaire} from "../player/inventaire.js";

let cooldownCraftingTable = 0

export function casser(x,y){
    if(solide.includes(map[data.cY+4-y][data.cX+x-8])){
        var statu = 0
        var boucle = setInterval(() => {
            data.isbreaking = true;
            window.addEventListener("mouseup", () =>{
                clearInterval(boucle)
                data.isbreaking = false;
                data.isInteracting = false;
            })
            statu += 1
            data.statuBloc = "stat" + statu
            data.blockXCasser = x
            data.blockYCasser = y
            if( statu === 10){
                clearInterval(boucle)
                data.isbreaking = false;
                data.statuBloc = "stat" + 0
                data.isInteracting = false;
                if(data.outil.includes(map[data.cY+4-y][data.cX+x-8])){
                    if(map[data.cY+4-y][data.cX+x-8] ==="Herbe"){
                        data.isInPreInventaire = "Terre"
                    InInventaire()
                    }else{
                        data.isInPreInventaire = map[data.cY+4-y][data.cX+x-8]
                        InInventaire()
                    }
                }
                map[data.cY+4-y][data.cX+x-8] = "Air"
            };
        }, 1500/10);
    };
};

export function placer(x,y){
    if(map[data.cY+4-y][data.cX+x-8] === "Air"
        && ((data.cX+x-8 != Math.floor(data.cXtemp/100)
        && data.cX+x-8 != Math.ceil(data.cXtemp/100)
        && (data.cY+4-y === data.cY
        || data.cY+4-y === data.cY+1))
        || (data.cY+4-y != data.cY
        && data.cY+4-y != data.cY+1))
        && (solide.includes(inventaire[0][data.inMain][0]) || vide.includes(inventaire[0][data.inMain][0]))
    ){
        map[data.cY+4-y][data.cX+x-8] = inventaire[0][data.inMain][0]
        inventaire[0][data.inMain][1] -= 1;
        restInInventaire();
    };
};

function isCraftingTable(x,y){
    cooldownCraftingTable = 0;
    if(map[data.cY+4-y][data.cX+x-8] === "TableCraft"){data.isInCraftingTable = true};
    var boucle = setInterval(() => {
        cooldownCraftingTable++;
        if(cooldownCraftingTable>=2){clearInterval(boucle)};
    }, 100);
};

export function yDeDépart(){
    for(var y = 0; y < map.length; y++){
        if(map[y][data.cX] === "Air"){return y}
    }
}

window.addEventListener("keydown",(event) => {
    if(event.code === "Digit1"){isOutil(0), data.inMain = 0}
    else if(event.code === "Digit2"){isOutil(1), data.inMain = 1}
    else if(event.code === "Digit3"){isOutil(2), data.inMain = 2}
    else if(event.code === "Digit4"){isOutil(3), data.inMain = 3}
    else if(event.code === "Digit5"){isOutil(4), data.inMain = 4}
    else if(event.code === "Digit6"){isOutil(5), data.inMain = 5}
    else if(event.code === "Digit7"){isOutil(6), data.inMain = 6}
    else if(event.code === "Digit8"){isOutil(7), data.inMain = 7}
    else if(event.code === "Digit9"){isOutil(8), data.inMain = 8}
    else if(event.code === "Digit0"){isOutil(9), data.inMain = 9}
});
let breakingAffConstanteX = 0
let breakingAffConstanteY = 0
window.addEventListener("mousemove", (event) =>{
    breakingAffConstanteX = event.clientX/(innerWidth/15.7)+0.7
    breakingAffConstanteY = (event.clientY/(innerWidth/15.7))+0.95
})
document.oncontextmenu = function() {
    if(!data.isInventaire && !data.isInCraftingTable){
        placer(Math.floor(breakingAffConstanteX+(data.marginX/100)),Math.floor(breakingAffConstanteY+(data.marginY/100)));
    };
return false
};
window.addEventListener("keypress",(event) =>{
    if(event.code === "KeyR" && !data.isInventaire){
        if(!data.isInCraftingTable){
            data.isInteracting = true;
            isCraftingTable(Math.floor(breakingAffConstanteX+(data.marginX/100)),Math.floor(breakingAffConstanteY+(data.marginY/100)));
        }else if(cooldownCraftingTable>=2){data.isInCraftingTable = false;data.isInteracting = false}
    };
})


let blockTickX = [];
let blockTickY = [];
let etatBlockTick = [];

export function herbe() {
    if(data.cY > 55){
        for (var y = 0; y < 100; y++) {
            for (var x = 0; x < 100; x++) {
                //alert(data.cY - 49 + y)
                if (
                    map[data.cY - 49 + y][data.cX - 50 + x] === "Air" &&
                    (map[data.cY - 50 + y][data.cX - 49 + x] === "Herbe" || map[data.cY - 50 + y][data.cX - 51 + x] === "Herbe") &&
                    map[data.cY - 50 + y][data.cX - 50 + x] === "Terre"
                ) {
                    // Si les coordonnées ne sont pas déjà dans les tableaux, on les ajoute
                    if (!blockTickX.includes(data.cX - 50 + x) && !blockTickY.includes(data.cY - 50 + y)) {
                        blockTickX.push(data.cX - 50 + x);
                        blockTickY.push(data.cY - 50 + y);
                        etatBlockTick.push(1); // Initialisation de l'état à 1
                    } else {
                        // Si les coordonnées sont déjà présentes, on incrémente l'état
                        const index = blockTickX.indexOf(data.cX - 50 + x);
                        if (index !== -1 && blockTickY[index] === data.cY - 50 + y) {
                            etatBlockTick[index]++; // On incrémente l'état
                            if (etatBlockTick[index] >= 200*60) {
                                map[data.cY - 50 + y][data.cX - 50 + x] = "Herbe"; // Modification de la carte
                                etatBlockTick.splice(index, 1); // On retire l'état du tableau
                                blockTickX.splice(index, 1); // On retire la coordonnée X
                                blockTickY.splice(index, 1); // On retire la coordonnée Y
                            }
                        }
                    }
                }
            }
        }
    }
}

export function herbeTerre() {
    if(data.cY > 55){
        for (var y = 0; y < 100; y++) {
            for (var x = 0; x < 100; x++) {
                // Vérification des conditions initiales
                if (map[data.cY - 49 + y][data.cX - 50 + x] != "Air" && map[data.cY - 50 + y][data.cX - 50 + x] === "Herbe") {
                    // Si les coordonnées ne sont pas déjà dans les tableaux, on les ajoute
                    if (!blockTickX.includes(data.cX - 50 + x) && !blockTickY.includes(data.cY - 50 + y)) {
                        blockTickX.push(data.cX - 50 + x);
                        blockTickY.push(data.cY - 50 + y);
                        etatBlockTick.push(1); // Initialisation de l'état à 1
                    } else {
                        // Si les coordonnées sont déjà présentes, on incrémente l'état
                        const index = blockTickX.indexOf(data.cX - 50 + x);
                        if (index !== -1 && blockTickY[index] === data.cY - 50 + y) {
                            etatBlockTick[index]++; // On incrémente l'état
                            if (etatBlockTick[index] >= 100*10) {
                                map[data.cY - 50 + y][data.cX - 50 + x] = "Terre"; // Modification de la carte
                                etatBlockTick.splice(index, 1); // On retire l'état du tableau
                                blockTickX.splice(index, 1); // On retire la coordonnée X
                                blockTickY.splice(index, 1); // On retire la coordonnée Y
                            }
                        }
                    }
                }
            }
        }
    }
}
