export let isLoad = false;
let mapY = 501;
let mapX = 20001;
export let map = [];
let air = "Air";
let listebiom = []
function arbre1(x,y){
    map[y][x] = "Buche"
    map[y+1][x] = "Buche"
    map[y+2][x] = "Buche"
    map[y+1][x-2] = "Feuille"
    map[y+1][x-1] = "Feuille"
    map[y+1][x+1] = "Feuille"
    map[y+1][x+2] = "Feuille"
    map[y+2][x-2] = "Feuille"
    map[y+2][x-1] = "Feuille"
    map[y+2][x+1] = "Feuille"
    map[y+2][x+2] = "Feuille"
    map[y+3][x-1] = "Feuille"
    map[y+3][x] = "Feuille"
    map[y+3][x+1] = "Feuille"
    map[y+4][x-1] = "Feuille"
    map[y+4][x] = "Feuille"
    map[y+4][x+1] = "Feuille"
}

function arbre2(x,y){
    map[y][x] = "Buche"
    map[y+1][x] = "Buche"
    map[y+2][x] = "Buche"
    map[y+3][x] = "Buche"
    map[y+2][x-2] = "Feuille"
    map[y+2][x-1] = "Feuille"
    map[y+2][x+1] = "Feuille"
    map[y+2][x+2] = "Feuille"
    map[y+3][x-2] = "Feuille"
    map[y+3][x-1] = "Feuille"
    map[y+3][x+1] = "Feuille"
    map[y+3][x+2] = "Feuille"
    map[y+4][x-1] = "Feuille"
    map[y+4][x] = "Feuille"
    map[y+4][x+1] = "Feuille"
    map[y+5][x-1] = "Feuille"
    map[y+5][x] = "Feuille"
    map[y+5][x+1] = "Feuille"
}


for(let yCreation = 0; yCreation < mapY; yCreation++) {
    let row = [];
    for (let xCreation = 0; xCreation < mapX; xCreation++) {
        row.push(air);
    };
    map.push(row);
};

for(let yInitBordure = 0; yInitBordure < mapY; yInitBordure++){
    for(let XInitBordure = 0; XInitBordure < mapX; XInitBordure++){
        if(XInitBordure < 23){
            map[yInitBordure][XInitBordure] = "BugDeTexture"
        }else if(XInitBordure > mapX-23){
            map[yInitBordure][XInitBordure] = "BugDeTexture"
        };
    };
};for(let xInitBordure = 0; xInitBordure < mapX; xInitBordure++){
    for(let YInitBordure = 0; YInitBordure < 23; YInitBordure++){
        map[YInitBordure][xInitBordure] = "BugDeTexture"
    };
};

for(let yInit = 23; yInit < mapY; yInit++){
    if(yInit < (mapY/3)*2){
        map[yInit][23] = "Pierre"
    }else if(yInit === (mapY/3)*2){
        map[yInit][23] = "Herbe"
    };
};

for(let x = 1; x < mapX;x++){
    for(let y = 23; y < mapY;y++){
        if(map[y][x-1] === "Pierre"){
            map[y][x] = "Pierre"
        }else if(map[y][x-1] === "Herbe"){
            let pourcentage = Math.random()
            if(pourcentage <= 0.80){
                map[y][x] = "Herbe"
            }else if(pourcentage > 0.80 && pourcentage <= 0.90){
                map[y+1][x] = "Herbe"
                map[y][x] = "Pierre"
            }else if(pourcentage > 0.90){
                map[y-1][x] = "Herbe"
            };
        }
    };
};

for(let xTerre = 1;xTerre < mapX;xTerre++){
    for(let yTerre = 100;yTerre < mapY;yTerre++){
        if(map[yTerre][xTerre] === "Herbe"){
            map[yTerre-1][xTerre] = "Terre"
            map[yTerre-2][xTerre] = "Terre"
            map[yTerre-3][xTerre] = "Terre"
            map[yTerre-4][xTerre] = "Terre"
            map[yTerre-5][xTerre] = "Terre"
        }
    }
}for(let xTerre = 1;xTerre < mapX;xTerre++){
    for(let yTerre = 100;yTerre < mapY;yTerre++){
        if(
            map[yTerre][xTerre] === "Herbe"
            && map[yTerre][xTerre-1] === "Air"
            && map[yTerre][xTerre+1] === "Air"
        ){
            map[yTerre][xTerre] = "Air"
            map[yTerre-1][xTerre] = "Herbe"
        }else if(
            map[yTerre][xTerre] === "Air"
            && map[yTerre][xTerre-1] === "Herbe"
            && map[yTerre][xTerre+1] === "Herbe"
        ){
            map[yTerre][xTerre] = "Herbe"
            map[yTerre-1][xTerre] = "Terre"
        }
    }
}for(let y = 0;y < mapY;y++){
    for(let x = 0;x<mapX;x++){
        if(map[y][x] === "Pierre"){
            let pourcentage = Math.random()
            if(pourcentage < 0.01){
                map[y][x] = "Diamand"
            }else if(pourcentage > 0.01 && pourcentage < 0.10){
                map[y][x] = "Fer"
            }else if(pourcentage > 0.10 && pourcentage < 0.20){
                map[y][x] = "Copper"
            }
        }
    }
};for(let x = 0; x < Math.floor(map[0].length/20);x++){
    let pourcentage = Math.random()
    if(pourcentage < 0.50){
        listebiom.push("foret")
    }else if(pourcentage >= 0.50){
        listebiom.push("plaine")
    };
}
for(let y = 1;y < map.length;y++){
    for(let x = 0;x < map[0].length;x++){
        if (map[y-1][x] === "Herbe"){
            console.log(listebiom[Math.floor(x/20)])
            if(listebiom[Math.floor(x/20)] === "foret"){
                if(x%3 === 0){
                    let pourcentage = Math.random()
                    if(pourcentage < 0.50){
                        arbre1(x,y)
                    }else if(pourcentage > 0.50){
                        arbre2(x,y)
                    }
                }
            }
        };
    };
};

isLoad = true
