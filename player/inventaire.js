import { data, main, piocheBois } from "../world/data.js";
import { objInventaireAffichage,objInventaireAffichage0,objCraftingTableInventaireAffichage } from "../main.js";

export let inventaire = [[['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]]];
export let inventaireCarftingTable = [[['Terre', 64],['', 0]],[['Terre', 64],['', 0]]];
let ancienCoordonnee = [0,0];
let inMain = ['',0] ;
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
                    if(inventaire[y][x][0] != ""){objInventaireAffichage0(inventaire[y][x][0],inventaire[y][x][1]+"",x)};
                }else{
                    if(inventaire[y][x][0] != ""){objInventaireAffichage(inventaire[y][x][0],inventaire[y][x][1]+"",x,y)};
                };
            };
        };
    };
};
export function chargeAfficheCraftingTableInventaire(){
    if(data.isInventaire){
        for(var y = 0;y < inventaireCarftingTable.length;y++){
            for(var x = 0;x < inventaireCarftingTable[0].length; x++){
                if(inventaireCarftingTable[y][x][0] != ""){objCraftingTableInventaireAffichage(inventaireCarftingTable[y][x][0],inventaireCarftingTable[y][x][1]+"",x,y),console.log(x,y)}
            };
        };
    };
};

function isOnSlot(x,y){
    var constanteX = Math.floor((x/(innerWidth/15.7)))-1
    var constanteY = Math.floor(y/(innerHeight/5))+1
    if(0 <= constanteX && constanteX < 10 && data.isInventaire){
        if(constanteY >= 5){
            ancienCoordonnee[0] = 0; 
            ancienCoordonnee[1] = constanteX; 
            inMain[0] = inventaire[0][constanteX][0];
            inMain[1] = inventaire[0][constanteX][1];
            inventaire[0][constanteX][0] = "";
        }else{
            ancienCoordonnee[0] = constanteY; 
            ancienCoordonnee[1] = constanteX; 
            inMain[0] = inventaire[constanteY][constanteX][0];
            inMain[1] = inventaire[constanteY][constanteX][1];
            inventaire[constanteY][constanteX][0] = "";
        };
    }else if( 11 <= constanteX <= 12 && data.isInventaire && 1 <= constanteY <= 2){
        ancienCoordonnee[0] = constanteY; 
        ancienCoordonnee[1] = constanteX; 
        inMain[0] = inventaireCarftingTable[constanteY-1][constanteX-11][0];
        inMain[1] = inventaireCarftingTable[constanteY-1][constanteX-11][1];
        inventaireCarftingTable[constanteY-1][constanteX-11][0] = "";
    };
};
function depotOnSlot(x,y){
    var constanteX = Math.floor((x/(innerWidth/15.7)))-1
    var constanteY = Math.floor(y/(innerHeight/5))+1
    console.log(inventaireCarftingTable)
    if(0 <= constanteX && constanteX < 10 && data.isInventaire){
        if(constanteY >= 5 && inventaire[0][constanteX][0] === ""){
            inventaire[0][constanteX][0] = inMain[0]; 
            inventaire[0][constanteX][1] = inMain[1];
            inMain[0] = ""
        }else if(0 <= constanteY < 5 && inventaire[constanteY][constanteX][0] === ""){
            inventaire[constanteY][constanteX][0] = inMain[0]; 
            inventaire[constanteY][constanteX][1] = inMain[1];
            inMain[0] = ""
        }else if (inMain[0] != ""){
            inventaire[ancienCoordonnee[0]][ancienCoordonnee[1]][0] = inMain[0];
            inventaire[ancienCoordonnee[0]][ancienCoordonnee[1]][1] = inMain[1];
            inMain[0] = ""
        }
    }else if( 11 <= constanteX && constanteX <= 12 && data.isInventaire && 1 <= constanteY <= 2){
        inventaireCarftingTable[constanteY-1][constanteX-11][0] = inMain[0]
        inventaireCarftingTable[constanteY-1][constanteX-11][1] = inMain[1]
        inMain[0] = ""
    }else if (inMain[0] != "" && data.isInventaire){
        inventaire[ancienCoordonnee[0]][ancienCoordonnee[1]][0] = inMain[0];
        inventaire[ancienCoordonnee[0]][ancienCoordonnee[1]][1] = inMain[1];
        inMain[0] = ""
    }
};
let coordonneeX = 0;
let coordonneeY = 0;

window.addEventListener("mousedown",(event) =>{
    coordonneeX = event.clientX
    coordonneeY = event.clientY
    isOnSlot(coordonneeX,coordonneeY)
});

window.addEventListener("mouseup" , (event) => {
    coordonneeX = event.clientX
    coordonneeY = event.clientY
    depotOnSlot(coordonneeX,coordonneeY)
});