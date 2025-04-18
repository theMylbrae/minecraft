import { data, main, piocheBois } from "../world/data.js";
import { objInventaireAffichage,objInventaireAffichage0,objCraftingTableInventaireAffichage } from "../main.js";

export let inventaire = [[['TableCraft', 1], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]]];
export let inventaireCarftingTable = [[['', ],['', ]],[['', 0],['', 0]]];
let ancienCoordonnee = [0,0];
let inMain = ['',0] ;
let result = ['',0]

let isDeposing1 = 0

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


function horsInventaire(){
    for(var y = 0;y<inventaire.length; y++){
        for(var x = 0;x<inventaire[0].length;x++){
            if(inventaire[y][x][0] === inMain[0] && inventaire[y][x][1] < 64){
                inventaire[y][x][1] += inMain[1];
                inMain = ['',0] 
            };
        };
    };
    if(inMain[0] != ""){
        for(var y1 = 0;y1<inventaire.length; y1++){
            for(var x1 = 0;x1<inventaire[0].length;x1++){
                if(inventaire[y1][x1][0] === ""){
                    inventaire[y1][x1][1] = inMain[1];
                    inventaire[y1][x1][0] = inMain[0];
                    inMain = ['',0];
                };
            };
        };
    };
}

export function finInventaireCraftingInventaire(){
    if(!data.isInventaire){
        for(var y = 0; y < inventaireCarftingTable.length; y++){
            for(var x = 0; x < inventaireCarftingTable[0].length; x++){
                if(inventaireCarftingTable[y][x][0] != ""){
                    inMain = [inventaireCarftingTable[y][x][0],inventaireCarftingTable[y][x][1]]
                    inventaireCarftingTable[y][x][0] ="";
                    horsInventaire()
                }
            }
        }
    };
};

function Aftercraft(){
    for(var y = 0;y<inventaire.length; y++){
        for(var x = 0;x<inventaire[0].length;x++){
            if(inventaire[y][x][0] === result[0] && inventaire[y][x][1] < 64){
                inventaire[y][x][1] += result[1];
                result = ['',0] 
            };
        };
    };
    if(result[0] != ""){
        for(var y1 = 0;y1<inventaire.length; y1++){
            for(var x1 = 0;x1<inventaire[0].length;x1++){
                if(inventaire[y1][x1][0] === ""){
                    inventaire[y1][x1][1] = result[1];
                    inventaire[y1][x1][0] = result[0];
                    result = ['',0];
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
    for(var y = 0; y < inventaireCarftingTable.length; y++){
        for(var x = 0;x<inventaireCarftingTable[0].length;x++){
            if(inventaireCarftingTable[y][x][1] <= 0){inventaireCarftingTable[y][x][0] = ""}
        };
    };
};


export function chargeAfficheAventure(){
    if(data.isInventaire || data.isInCraftingTable){
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
                if(inventaireCarftingTable[y][x][0] != ""){objCraftingTableInventaireAffichage(inventaireCarftingTable[y][x][0],inventaireCarftingTable[y][x][1]+"",x,y)}
            };
        };
    };
};

function listeIdentifier(Table){
    var liste = []
    for(var y = 0;y < Table.length;y++){
        for(var x = 0;x < Table[0].length;x++){
            liste.push(Table[y][x][0])
        };
    };
    return liste;
};

function contientQueUnObjet(objet,Table){
    var nbr = 0;
    var Air = 0;
    for(var x = 0;x < listeIdentifier(Table).length;x++){
        if(listeIdentifier(Table)[x] === objet){
            nbr ++;
            if(nbr>1){return false};
        }else if(listeIdentifier(Table)[x] === ""){Air++;}
    };
    if(nbr === 1 && Air === 3){return true}else{return false};
};

function contientQueDesObjets(objet,Table){
    var nbr = 0;
    for(var x = 0;x < listeIdentifier(Table).length;x++){
        if(listeIdentifier(Table)[x] === objet){
            nbr++;
            if(nbr === 4){return true};
        };
    }return false;
};

function queSurUneMoitié(objet,Table){
    var nbr = 0
    var air = 0
    var y = 0
    for(var x = 0; x < listeIdentifier(Table).length; x++){
        if(listeIdentifier(Table)[x] === objet){
            nbr++
            if(nbr === 1){y = x}
        }
        else if(listeIdentifier(Table)[x] === ""){air++};
    };if(listeIdentifier(Table).length%3 === 0){
        if(y < 3){
            if(nbr == 2 && air == listeIdentifier(Table).length - 2 && Table[1][y][0] === "Planche"){return true}else{return false};
        }else if(3 < y && y < 7){
            if(nbr == 2 && air == listeIdentifier(Table).length - 2 && Table[2][y][0] === "Planche"){return true}else{return false};
        };
    }else{
        if(y < 2){
            if(nbr == 2 && air == listeIdentifier(Table).length - 2 && Table[1][y][0] === "Planche"){return true}else{return false};
        };
};
    }
    

function Craft(Table){
    for(var y = 0; y < Table.length; y++){
        for(var x = 0; x<Table[0].length; x++){Table[y][x][1] -= 1};
    };
};


export function craftRecipeInventaire(){
    if(contientQueUnObjet("Buche",inventaireCarftingTable)){data.whatIsCrafting = "Planche"}
    else if(contientQueDesObjets("Planche",inventaireCarftingTable)){data.whatIsCrafting = "TableCraft"}
    else if(queSurUneMoitié("Planche",inventaireCarftingTable)){data.whatIsCrafting = "stick"}
    else{data.whatIsCrafting = ""};
};

function recupCraftRecipeInventaire(x,y){
    var constanteX = (x/(innerWidth/15.7))-1
    var constanteY = y/(innerHeight/5)+1
    if(11.80 <= constanteX && constanteX <= 12.54 && 3.66 <= constanteY && constanteY <= 4.22){
        if(data.whatIsCrafting != ""){
            if(data.whatIsCrafting==="Planche"){result = ["Planche",4]}
            else if(data.whatIsCrafting==="TableCraft"){result = ["TableCraft",1]}
            else if(data.whatIsCrafting==="stick"){result = ["stick",4]}
            data.whatIsCrafting = ""
            Craft(inventaireCarftingTable)
            Aftercraft()
        };
    };
}

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
    }else if( 11 <= constanteX && constanteX <= 12 && data.isInventaire && 1 <= constanteY && constanteY <= 2){
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
    if(0 <= constanteX && constanteX < 10 && data.isInventaire){
        if(constanteY >= 5 && inventaire[0][constanteX][0] === ""){
            inventaire[0][constanteX][0] = inMain[0]; 
            inventaire[0][constanteX][1] = inMain[1];
            inMain[0] = ""
        }else if(0 <= constanteY && constanteY < 5 && inventaire[constanteY][constanteX][0] === ""){
            inventaire[constanteY][constanteX][0] = inMain[0]; 
            inventaire[constanteY][constanteX][1] = inMain[1];
            inMain[0] = ""
        }else if (inMain[0] != ""){
            horsInventaire()
            inMain[0] = ""
        }
    }else if( 11 <= constanteX && constanteX <= 12 && data.isInventaire && 1 <= constanteY && constanteY <= 2){
        if(inventaireCarftingTable[constanteY-1][constanteX-11][0] === ""){
            inventaireCarftingTable[constanteY-1][constanteX-11][0] = inMain[0]
            inventaireCarftingTable[constanteY-1][constanteX-11][1] = inMain[1]
            inMain[0] = ""
        }else if (inMain[0] != ""){
            horsInventaire()
            inMain[0] = ""
        }
    }else if (inMain[0] != "" && data.isInventaire){
        horsInventaire()
    }
};
function depotOnSlot1(x,y){
    var constanteX = Math.floor((x/(innerWidth/15.7)))-1
    var constanteY = Math.floor(y/(innerHeight/5))+1
    if(0 <= constanteX && constanteX < 10 && data.isInventaire){
        if(constanteY >= 5){
            if(inventaire[0][constanteX][0] === ""){
                inventaire[0][constanteX][0] = inMain[0]; 
                inventaire[0][constanteX][1] = 1;
                inMain[1]--;
                isDeposing1++
            }else if(inventaire[0][constanteX][0] === inMain[0]){
                inventaire[0][constanteX][1]++;
                inMain[1]--;
                isDeposing1++
            };
        }else if(0 <= constanteY && constanteY < 5 ){
            if(inventaire[constanteY][constanteX][0] === ""){
                inventaire[constanteY][constanteX][0] = inMain[0]; 
                inventaire[constanteY][constanteX][1] = 1;
                inMain[1]--;
                isDeposing1++
            }else if(inventaire[constanteY][constanteX][0] === inMain[0]){
                inventaire[constanteY][constanteX][1]++;
                inMain[1]--;
                isDeposing1++
            };
        };
    }else if( 11 <= constanteX && constanteX <= 12 && data.isInventaire && 1 <= constanteY && constanteY <= 2){
        if(inventaireCarftingTable[constanteY-1][constanteX-11][0] === ""){
            inventaireCarftingTable[constanteY-1][constanteX-11][0] = inMain[0]; 
            inventaireCarftingTable[constanteY-1][constanteX-11][1] = 1;
            inMain[1]--;
            isDeposing1++
        }else if(inventaireCarftingTable[constanteY-1][constanteX-11][0] === inMain[0]){
            inventaireCarftingTable[constanteY-1][constanteX-11][1]++;
            inMain[1]--;
            isDeposing1++
        };
    };
    if(inMain[1] <= 0){inMain[0] = ""};
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

window.addEventListener("click",(event) =>{
    coordonneeX = event.clientX
    coordonneeY = event.clientY
    recupCraftRecipeInventaire(coordonneeX,coordonneeY)
});

window.addEventListener("mousemove",(event) =>{
    coordonneeX = event.clientX
    coordonneeY = event.clientY
    window.addEventListener("keydown",(touche) =>{
        if(data.isInventaire && touche.code === "KeyQ" && inMain[0] != "" && isDeposing1 < 1){
            depotOnSlot1(coordonneeX,coordonneeY)
        };
    })
});


window.addEventListener("keyup",(event) =>{
    if(event.code === "KeyQ"){isDeposing1 = 0}
})

