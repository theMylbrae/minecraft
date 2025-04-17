import { data, main, piocheBois } from "../world/data.js";
import { objInventaireAffichage,objInventaireAffichage0 } from "../main.js";

export let inventaire = [[['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]]];

export function InInventaire(){
    for(var y = 0;y<inventaire.length; y++){
        for(var x = 0;x<inventaire[0].length;x++){
            if(inventaire[y][x][0] === data.isInPreInventaire && inventaire[y][x][1] < 64){
                inventaire[y][x][1]++;
                data.isInPreInventaire = "" 
            };
        };
    };
    if(data.isInPreInventaire != ""){
        for(var y1 = 0;y1<inventaire.length; y1++){
            for(var x1 = 0;x1<inventaire[0].length;x1++){
                if(inventaire[y1][x1][0] === ""){
                    inventaire[y1][x1][1] = 1;
                    inventaire[y1][x1][0] = data.isInPreInventaire
                    data.isInPreInventaire = "" 
                };
            };
        };
    };
}; 
export function isOutil(x){
    if(inventaire[0][x][0] === "piocheBois"){data.outil = piocheBois}
    else if(inventaire[0][x][0] === "piochePierre"){data.outil = "piochePierre"}
    else if(inventaire[0][x][0] === "piocheFer"){data.outil = "piocheFer"}
    else{data.outil = main}
};

export function restInInventaire(){
    for(var y = 0; y < inventaire.length; y++){
        for(var x = 0;x<inventaire[0].length;x++){
            if(inventaire[y][x][1] <= 0){inventaire[y][x][0] = ""}
        };
    };
};


export function chargeAfficheAventure(){
    if(data.isInventaire){
        for(var y = 0; y < inventaire.length;y++){
            for(var x = 0;x < inventaire[0].length;x++){
                if(y === 0){
                    if(inventaire[y][x][0] != ""){objInventaireAffichage0(inventaire[y][x][0],x)};
                }else{
                    if(inventaire[y][x][0] != ""){objInventaireAffichage(inventaire[y][x][0],x,y)};
                };
            };
        };
    };
};

