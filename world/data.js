import {init,loading} from "../screen/screen.js"
import {sreenPlayer,sreenPlayerH, inventaireAffichage,casseraff} from "../main.js"
import { map } from "./map.js";
import { herbe,herbeTerre } from "../interaction/interactionMap.js";
import { statuBloc , constante, statuPlayer} from "../screen/img.js";
import {chargeAfficheAventure, inventaire,restInInventaire,chargeAfficheCraftingTableInventaire} from "../player/inventaire.js"

export const main = ["Buche","Terre","Herbe"]
export const piocheBois = [["Pierre","Buche","Terre","Herbe"]]
export const piochePierre = ["Pierre","Buche","Terre","Herbe","Fer"]
export const piocheFer = ["Pierre","Buche","Terre","Herbe","Fer","Copper","Diamand"]

export const data = {
    cX : 0,
    cY : 0,
    cXtemp : 100000,
    cYtemp : 10000,
    marginX : 0,
    marginY : 0,
    frame : 30,
    mouvPlayer : false,
    playerState : "statLB0",
    playerStateH : "statLH0",
    hauteurJump : 0,
    isJumping : false,
    isbreaking : false,
    statuBloc : "stat0",
    spaceIsPress : false,
    isRunning : 5,
    isInventaire : false,
    isInPreInventaire : "",
    outil : main,
    inMain : 0,
    blockXCasser : null,
    blockYCasser : null,
    isGoingLeft : true,
    playerStatuMouv : 0,
    isInteracting : false,
    inventaireIsInMain : false,
}; 
data.cX = (map[0].length-1)/2
data.cY = ((map.length-1)/2)+100
data.cXtemp = data.cX*100
data.cYtemp = data.cY*100

export const vide = ["Air"]
export const solide = ["Pierre","Buche","Feuille","Terre","Herbe","Fer","Copper","Diamand"]


export function frame(framePerMinute){
    const frame = setInterval(() => {
        init();
        loading();
        casseraff();
        sreenPlayer();
        sreenPlayerH();
        inventaireAffichage();
        chargeAfficheCraftingTableInventaire();
        chargeAfficheAventure();
        restInInventaire();
    }, 1000/framePerMinute);
};

export const tickspeed = setInterval(() => {
    herbe()
    herbeTerre()
}, 10);