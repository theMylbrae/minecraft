import { data, main, piocheBois } from "../world/data.js";
import { objInventaireAffichage,objInventaireAffichage0,objCraftingTableInventaireAffichage,objCraftingTableStorageAffichage } from "../main.js";

export let inventaire = [[['TableCraft', 1], ['Pierre', 64], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]], [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0]]];
export let inventaireCarftingTable = [[['', ],['', ]],[['', 0],['', 0]]];
export let TableDeCraftExpace = [[['',0],['',0],['',0]],[['',0],['',0],['',0]],[['',0],['',0],['',0]]]
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

export function finCraftingTableEspace(){
    if(!data.isInCraftingTable){
        for(var y = 0; y < TableDeCraftExpace.length; y++){
            for(var x = 0; x < TableDeCraftExpace[0].length; x++){
                if(TableDeCraftExpace[y][x][0] != ""){
                    inMain = [TableDeCraftExpace[y][x][0],TableDeCraftExpace[y][x][1]]
                    TableDeCraftExpace[y][x][0] ="";
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
    for(var y = 0; y < TableDeCraftExpace.length; y++){
        for(var x = 0;x<TableDeCraftExpace[0].length;x++){
            if(TableDeCraftExpace[y][x][1] <= 0){TableDeCraftExpace[y][x][0] = ""}
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

export function craftingTableAventure(){
    for(var y = 0; y < TableDeCraftExpace.length; y++){
        for(var x = 0; x < TableDeCraftExpace[0].length; x++){
            objCraftingTableStorageAffichage(TableDeCraftExpace[y][x][0],TableDeCraftExpace[y][x][1]+"",x,y)
        }
    }
}

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

function contientQueDesObjets2fois2(objet,Table){
    var nbr = 0;
    for(var x = 0;x < listeIdentifier(Table).length;x++){
        if(listeIdentifier(Table)[x] === objet){
            nbr++;
            if(nbr === 4){return true};
        };
    }return false;
};

function queSurUneMoitié2fois2(objet,Table){
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
};

function contientQueDesObjets2Fois2Sur3Fois3(objet,Table){
    var nbr = 0;
    var Air = 0;
    for(var x = 0;x < listeIdentifier(Table).length;x++){
        if(listeIdentifier(Table)[x] === objet){nbr++}
        else if(listeIdentifier(Table)[x] === ""){Air++};
    };
    if(nbr != 4 && Air != 5){return false}
    for(var x = 0;x < listeIdentifier(Table).length;x++){
        if(x<1){
            if(Table[0][0][0] === objet && Table[0][1][0] === objet && Table[1][0][0] === objet && Table[1][1][0] === objet){
                return true
            }
        }
        else if(0 < x && x < 2){
            if(Table[0][1][0] === objet && Table[0][2][0] === objet && Table[1][1][0] === objet && Table[1][2][0] === objet){
                return true
            }
        }
        else if(2 < x && x < 4){
            if(Table[1][0][0] === objet && Table[1][1][0] === objet && Table[2][0][0] === objet && Table[2][1][0] === objet){
                return true
            }
        }
        else if(3 < x && x < 5){
            if(Table[1][1][0] === objet && Table[1][2][0] === objet && Table[2][1][0] === objet && Table[2][2][0] === objet){
                return true
            }
        }
    };
    return false
};

function constientQueUnObjet3Fois3(objet,Table){
    var nbr = 0;
    var Air = 0;
    for(var x=0;x < listeIdentifier(Table).length;x++){
        if(listeIdentifier(Table)[x] === objet){nbr++;}
        else if(listeIdentifier(Table)[x] === ""){Air++;};
    }if(nbr === 1 && Air === 8){return true}else{return false};
};

function contientEnT2Objet(objet1,objet2,Table){
    var Air = 0;
    if(
        listeIdentifier(Table)[0] === objet1
        && listeIdentifier(Table)[1] === objet1
        && listeIdentifier(Table)[2] === objet1
        && listeIdentifier(Table)[4] === objet2
        && listeIdentifier(Table)[7] === objet2
    ){
        for (var x=0; x<listeIdentifier(Table).length;x++){if(listeIdentifier(Table)[x] === ""){Air++;};};
        if(Air === 4){return true}else{return false};
    }else{return false}
};

function queSur2fois13Fois3(objet,Table){
    var nbr = 0;
    var Air = 0;
    for(var x=0;x < listeIdentifier(Table).length;x++){
        if(listeIdentifier(Table)[x] === objet){nbr++;}
        else if(listeIdentifier(Table)[x] === ""){Air++};
    };if(nbr != 2 && Air != 7){return false}
    for(var x=0;x < listeIdentifier(Table).length;x++){
        if(x<6){
            if(listeIdentifier(Table)[x] === objet && listeIdentifier(Table)[x+3] === objet){return true}
        }
    };
    return false
};

function que1ObjetPartout(objet,Table){
    var nbr = 0;
    for(var x=0; x<listeIdentifier(Table).length;x++){
        if(listeIdentifier(Table)[x] === objet){nbr++};
    }if(nbr === listeIdentifier(Table).length){return True}else{return false};
};
    

function Craft(Table){
    for(var y = 0; y < Table.length; y++){
        for(var x = 0; x<Table[0].length; x++){Table[y][x][1] -= 1};
    };
};


export function craftRecipeInventaire(){
    if(data.isInventaire){
        if(contientQueUnObjet("Buche",inventaireCarftingTable)){data.whatIsCrafting = "Planche"}
        else if(contientQueDesObjets2fois2("Planche",inventaireCarftingTable)){data.whatIsCrafting = "TableCraft"}
        else if(queSurUneMoitié2fois2("Planche",inventaireCarftingTable)){data.whatIsCrafting = "stick"}
        else{data.whatIsCrafting = ""};
    };
};

export function carftCraftingTable(){
    if(data.isInCraftingTable){
        if(constientQueUnObjet3Fois3("Buche",TableDeCraftExpace)){data.whatIsCrafting = "Planche"}
        else if(contientQueDesObjets2Fois2Sur3Fois3("Planche",TableDeCraftExpace)){data.whatIsCrafting = "TableCraft"}
        else if(queSur2fois13Fois3("Planche",TableDeCraftExpace)){data.whatIsCrafting = "stick"}
        else if(contientEnT2Objet("Planche","stick",TableDeCraftExpace)){data.whatIsCrafting = "piocheBois"}
        else if(contientEnT2Objet("Pierre","stick",TableDeCraftExpace)){data.whatIsCrafting = "piochePierre"}
        else if(contientEnT2Objet("LingotDeFer","stick",TableDeCraftExpace)){data.whatIsCrafting = "piocheFer"}
        else{data.whatIsCrafting = ""};
    };
};

function recupCraftRecipeInventaire(x,y){
    var constanteX = (x/(innerWidth/15.7))-1
    var constanteY = y/(innerHeight/5)+1
    console.log((x/(innerWidth/15.7))-1,y/(innerHeight/5)+1)
    if(11.80 <= constanteX && constanteX <= 12.54 && 3.66 <= constanteY && constanteY <= 4.22 && data.isInventaire){
        if(data.whatIsCrafting != ""){
            if(data.whatIsCrafting==="Planche"){result = ["Planche",4]}
            else if(data.whatIsCrafting==="TableCraft"){result = ["TableCraft",1]}
            else if(data.whatIsCrafting==="stick"){result = ["stick",4]}
            data.whatIsCrafting = ""
            Craft(TableDeCraftExpace)
            Aftercraft()
        };
    }else if(11.80 <= constanteX && constanteX <= 12.54 && 4.70 <= constanteY && constanteY <= 5.27 && data.isInCraftingTable){
        if(data.whatIsCrafting != ""){
            if(data.whatIsCrafting==="Planche"){result = ["Planche",4]}
            else if(data.whatIsCrafting==="TableCraft"){result = ["TableCraft",1]}
            else if(data.whatIsCrafting==="stick"){result = ["stick",4]}
            else if(data.whatIsCrafting==="piocheBois"){result = ["piocheBois",1]}
            else if(data.whatIsCrafting==="piochePierre"){result = ["piochePierre",1]}
            else if(data.whatIsCrafting==="piocheFer"){result = ["piocheFer",1]}
            data.whatIsCrafting = ""
            Craft(TableDeCraftExpace)
            Aftercraft()
        };
    };
}

function isOnSlot(x,y){
    var constanteX = Math.floor((x/(innerWidth/15.7)))-1
    var constanteY = Math.floor(y/(innerHeight/5))+1
    console.log(x/(innerWidth/15.7)-1)
    if(0 <= constanteX && constanteX < 10 && (data.isInventaire || data.isInCraftingTable)){
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
    }else if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.5 && data.isInCraftingTable){
        if(1.5 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 2.2){
            if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 12.20){
                inMain[0] = TableDeCraftExpace[0][0][0];
                inMain[1] = TableDeCraftExpace[0][0][1];
                TableDeCraftExpace[0][0][0] = "";
            }else if(12.40 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 13.30){
                inMain[0] = TableDeCraftExpace[0][1][0];
                inMain[1] = TableDeCraftExpace[0][1][1];
                TableDeCraftExpace[0][1][0] = "";
            }else if(13.50 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.50){
                inMain[0] = TableDeCraftExpace[0][2][0];
                inMain[1] = TableDeCraftExpace[0][2][1];
                TableDeCraftExpace[0][2][0] = "";
            };
        }else if(2.3 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 2.9){
            if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 12.20){
                inMain[0] = TableDeCraftExpace[1][0][0];
                inMain[1] = TableDeCraftExpace[1][0][1];
                TableDeCraftExpace[1][0][0] = "";
            }else if(12.40 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 13.30){
                inMain[0] = TableDeCraftExpace[1][1][0];
                inMain[1] = TableDeCraftExpace[1][1][1];
                TableDeCraftExpace[1][1][0] = "";
            }else if(13.50 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.50){
                inMain[0] = TableDeCraftExpace[1][2][0];
                inMain[1] = TableDeCraftExpace[1][2][1];
                TableDeCraftExpace[1][2][0] = "";
            };
        }if(3 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 3.75){
            if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 12.20){
                inMain[0] = TableDeCraftExpace[2][0][0];
                inMain[1] = TableDeCraftExpace[2][0][1];
                TableDeCraftExpace[2][0][0] = "";
            }else if(12.40 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 13.30){
                inMain[0] = TableDeCraftExpace[2][1][0];
                inMain[1] = TableDeCraftExpace[2][1][1];
                TableDeCraftExpace[2][1][0] = "";
            }else if(13.50 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.50){
                inMain[0] = TableDeCraftExpace[2][2][0];
                inMain[1] = TableDeCraftExpace[2][2][1];
                TableDeCraftExpace[2][2][0] = "";
            };
        }
    }
};
function depotOnSlot(x,y){
    var constanteX = Math.floor((x/(innerWidth/15.7)))-1
    var constanteY = Math.floor(y/(innerHeight/5))+1
    if(0 <= constanteX && constanteX < 10 && (data.isInventaire || data.isInCraftingTable)){
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
    }else if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.5 && data.isInCraftingTable && 1.5 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 3.75){
        if(1.5 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 2.2){
            if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 12.20 && TableDeCraftExpace[0][0][0] === ""){
                TableDeCraftExpace[0][0][0] = inMain[0];
                TableDeCraftExpace[0][0][1] = inMain[1];
                inMain[0] = "";
            }else if(12.40 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 13.30 && TableDeCraftExpace[0][1][0] === ""){
                TableDeCraftExpace[0][1][0] = inMain[0];
                TableDeCraftExpace[0][1][1] = inMain[1];
                inMain[0] = "";
            }else if(13.50 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.50 && TableDeCraftExpace[0][2][0] === ""){
                TableDeCraftExpace[0][2][0] = inMain[0];
                TableDeCraftExpace[0][2][1] = inMain[1];
                inMain[0] = "";
            }else{horsInventaire()};
        }else if(2.3 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 2.9){
            if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 12.20 && TableDeCraftExpace[1][0][0] === ""){
                TableDeCraftExpace[1][0][0] = inMain[0];
                TableDeCraftExpace[1][0][1] = inMain[1];
                inMain[0] = "";
            }else if(12.40 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 13.30 && TableDeCraftExpace[1][1][0] === ""){
                TableDeCraftExpace[1][1][0] = inMain[0];
                TableDeCraftExpace[1][1][1] = inMain[1];
                inMain[0] = "";
            }else if(13.50 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.50 && TableDeCraftExpace[1][2][0] === ""){
                TableDeCraftExpace[1][2][0] = inMain[0];
                TableDeCraftExpace[1][2][1] = inMain[1];
                inMain[0] = "";
            }else{horsInventaire()};
        }if(3 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 3.75){
            if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 12.20 && TableDeCraftExpace[2][0][0] === ""){
                TableDeCraftExpace[2][0][0] = inMain[0];
                TableDeCraftExpace[2][0][1] = inMain[1];
                inMain[0] = "";
            }else if(12.40 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 13.30 && TableDeCraftExpace[2][1][0] === ""){
                TableDeCraftExpace[2][1][0] = inMain[0];
                TableDeCraftExpace[2][1][1] = inMain[1];
                inMain[0] = "";
            }else if(13.50 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.50 && TableDeCraftExpace[2][2][0] === ""){
                TableDeCraftExpace[2][2][0] = inMain[0];
                TableDeCraftExpace[2][2][1] = inMain[1];
                inMain[0] = "";
            }else{horsInventaire()};
        }else{horsInventaire()}
    }else if (inMain[0] != "" && (data.isInventaire || data.isInCraftingTable)){
        horsInventaire()
    }
};
function depotOnSlot1(x,y){
    var constanteX = Math.floor((x/(innerWidth/15.7)))-1
    var constanteY = Math.floor(y/(innerHeight/5))+1
    if(0 <= constanteX && constanteX < 10 && (data.isInventaire || data.isInCraftingTable)){
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
        }else if(0 < constanteY && constanteY < 5 ){
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
    }else if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.5 && data.isInCraftingTable && 1.5 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 3.75){
        if(1.5 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 2.2){
            if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 12.20){
                if(TableDeCraftExpace[0][0][0] === inMain[0]){
                    TableDeCraftExpace[0][0][1]++;
                    inMain[1]--;
                    isDeposing1++
                }else if(TableDeCraftExpace[0][0][0] === ""){
                    TableDeCraftExpace[0][0][0] = inMain[0];
                    TableDeCraftExpace[0][0][1] = 1;
                    inMain[1]--;
                    isDeposing1++
                }
            }else if(12.40 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 13.30){
                if(TableDeCraftExpace[0][1][0] === inMain[0]){
                    TableDeCraftExpace[0][1][1]++;
                    inMain[1]--;
                    isDeposing1++
                }else if(TableDeCraftExpace[0][1][0] === ""){
                    TableDeCraftExpace[0][1][0] = inMain[0];
                    TableDeCraftExpace[0][1][1] = 1;
                    inMain[1]--;
                    isDeposing1++
                }
            }else if(13.50 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.50){
                if(TableDeCraftExpace[0][2][0] === inMain[0]){
                    TableDeCraftExpace[0][2][1]++;
                    inMain[1]--;
                    isDeposing1++
                }else if(TableDeCraftExpace[0][2][0] === ""){
                    TableDeCraftExpace[0][2][0] = inMain[0];
                    TableDeCraftExpace[0][2][1] = 1;
                    inMain[1]--;
                    isDeposing1++
                }
            };
        }else if(2.3 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 2.9){
            if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 12.20){
                if(TableDeCraftExpace[1][0][0] === inMain[0]){
                    TableDeCraftExpace[1][0][1]++;
                    inMain[1]--;
                    isDeposing1++
                }else if(TableDeCraftExpace[1][0][0] === ""){
                    TableDeCraftExpace[1][0][0] = inMain[0];
                    TableDeCraftExpace[1][0][1] = 1;
                    inMain[1]--;
                    isDeposing1++
                }
            }else if(12.40 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 13.30){
                if(TableDeCraftExpace[1][1][0] === inMain[0]){
                    TableDeCraftExpace[1][1][1]++;
                    inMain[1]--;
                    isDeposing1++
                }else if(TableDeCraftExpace[1][1][0] === ""){
                    TableDeCraftExpace[1][1][0] = inMain[0];
                    TableDeCraftExpace[1][1][1] = 1;
                    inMain[1]--;
                    isDeposing1++
                }
            }else if(13.50 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.50){
                if(TableDeCraftExpace[1][2][0] === inMain[0]){
                    TableDeCraftExpace[1][2][1]++;
                    inMain[1]--;
                    isDeposing1++
                }else if(TableDeCraftExpace[1][2][0] === ""){
                    TableDeCraftExpace[1][2][0] = inMain[0];
                    TableDeCraftExpace[1][2][1] = 1;
                    inMain[1]--;
                    isDeposing1++
                }
            };
        }if(3 < y/(innerHeight/5)+1 && y/(innerHeight/5)+1 < 3.75){
            if(11.25 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 12.20){
                if(TableDeCraftExpace[2][0][0] === inMain[0]){
                    TableDeCraftExpace[2][0][1]++;
                    inMain[1]--;
                    isDeposing1++
                }else if(TableDeCraftExpace[2][0][0] === ""){
                    TableDeCraftExpace[2][0][0] = inMain[0];
                    TableDeCraftExpace[2][0][1] = 1;
                    inMain[1]--;
                    isDeposing1++
                }
            }else if(12.40 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 13.30){
                if(TableDeCraftExpace[2][1][0] === inMain[0]){
                    TableDeCraftExpace[2][1][1]++;
                    inMain[1]--;
                    isDeposing1++
                }else if(TableDeCraftExpace[2][1][0] === ""){
                    TableDeCraftExpace[2][1][0] = inMain[0];
                    TableDeCraftExpace[2][1][1] = 1;
                    inMain[1]--;
                    isDeposing1++
                }
            }else if(13.50 < x/(innerWidth/15.7)-1 && x/(innerWidth/15.7)-1 < 14.50){
                if(TableDeCraftExpace[2][2][0] === inMain[0]){
                    TableDeCraftExpace[2][2][1]++;
                    inMain[1]--;
                    isDeposing1++
                }else if(TableDeCraftExpace[2][2][0] === ""){
                    TableDeCraftExpace[2][2][0] = inMain[0];
                    TableDeCraftExpace[2][2][1] = 1;
                    inMain[1]--;
                    isDeposing1++
                }
            };
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
        if((data.isInventaire || data.isInCraftingTable) && touche.code === "KeyQ" && inMain[0] != "" && isDeposing1 < 1){
            depotOnSlot1(coordonneeX,coordonneeY)
        };
    })
});


window.addEventListener("keyup",(event) =>{
    if(event.code === "KeyQ"){isDeposing1 = 0}
})

