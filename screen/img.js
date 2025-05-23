export const img = {
    Air : new Image(),
    Pierre : new Image(),
    Buche : new Image(),
    Planche: new Image(),
    Feuille : new Image(),
    Herbe : new Image(),
    Terre : new Image(),
    Copper : new Image(),
    Fer : new Image(),
    Diamand : new Image(),
    TableCraft : new Image(),
    BugDeTexture : new Image(),


    Inventaire : new Image(),
    Tabledecraftinterne : new Image(),
    resultCraft : new Image(),
    Tabledecraft : new Image(),
};

img.Inventaire.src = "../texture/player/interaction/inventaire.png"
img.Tabledecraftinterne.src = "../texture/player/interaction/tabledevraftinterne.png"
img.resultCraft.src = "../texture/player/interaction/resultCraft.png"
img.Tabledecraft.src = "../texture/player/interaction/tabledecraft.png"

img.Air.src = "../texture/blocs/Air.png";
img.Pierre.src = "../texture/blocs/Pierre.png";
img.Buche.src = "../texture/blocs/Buche.png";
img.Feuille.src = "../texture/blocs/Feuille.png";
img.Herbe.src = "../texture/blocs/Herbe.png";
img.Terre.src = "../texture/blocs/Terre.png";
img.Copper.src = "../texture/blocs/Copper.png";
img.Fer.src = "../texture/blocs/Fer.png";
img.Diamand.src = "../texture/blocs/Diamand.png";
img.Planche.src = "../texture/blocs/Planche.png";
img.TableCraft.src = "../texture/blocs/TableCraft.png";
img.BugDeTexture.src = "../texture/blocs/BugDeTexture.png";

export const obj = {
    Terre : new Image(),
    Herbe : new Image(),
    Fer : new Image(),
    Feuille : new Image(),
    Pierre : new Image(),
    Copper : new Image(),
    Diamand : new Image(),
    Buche : new Image(),
    Planche : new Image(),
    TableCraft : new Image(),
    stick : new Image(),
    piocheBois: new Image(),
    piochePierre : new Image(),
    piocheFer : new Image(),
}

obj.Pierre.src = "../texture/blocs/Pierre.png";
obj.Buche.src = "../texture/blocs/Buche.png";
obj.Feuille.src = "../texture/blocs/Feuille.png";
obj.Herbe.src = "../texture/blocs/Herbe.png";
obj.Terre.src = "../texture/blocs/Terre.png";
obj.Copper.src = "../texture/blocs/Copper.png";
obj.Fer.src = "../texture/blocs/Fer.png";
obj.Diamand.src = "../texture/blocs/Diamand.png";
obj.Planche.src = "../texture/blocs/Planche.png";
obj.TableCraft.src = "../texture/blocs/TableCraft.png"

obj.stick.src = "../texture/obj/stick.png"
obj.piocheBois.src = "../texture/obj/piocheBois.png"
obj.piochePierre.src = "../texture/obj/piochePierre.png"
obj.piocheFer.src = "../texture/obj/piocheFer.png"

export const statuPlayer = {
    statLB0 : new Image(),
    statLB1 : new Image(),
    statLB2 : new Image(),
    statLB3 : new Image(),

    statRB0 : new Image(),
    statRB1 : new Image(),
    statRB2 : new Image(),
    statRB3 : new Image(),

    statLH0 : new Image(),
    statLH1 : new Image(),
    statLH2 : new Image(),
    statLH3 : new Image(),

    statRH0 : new Image(),
    statRH1 : new Image(),
    statRH2 : new Image(),
    statRH3 : new Image(),
}

statuPlayer.statLB0.src = "../texture/player/Sprite/statLB0.png"
statuPlayer.statLB1.src = "../texture/player/Sprite/statLB1.png"
statuPlayer.statLB2.src = "../texture/player/Sprite/statLB2.png"
statuPlayer.statLB3.src = "../texture/player/Sprite/statLB3.png"

statuPlayer.statRB0.src = "../texture/player/Sprite/statRB0.png"
statuPlayer.statRB1.src = "../texture/player/Sprite/statRB1.png"
statuPlayer.statRB2.src = "../texture/player/Sprite/statRB2.png"
statuPlayer.statRB3.src = "../texture/player/Sprite/statRB3.png"

statuPlayer.statLH0.src = "../texture/player/Sprite/statLH0.png"
statuPlayer.statLH1.src = "../texture/player/Sprite/statLH1.png"
statuPlayer.statLH2.src = "../texture/player/Sprite/statLH2.png"
statuPlayer.statLH3.src = "../texture/player/Sprite/statLH3.png"

statuPlayer.statRH0.src = "../texture/player/Sprite/statRH0.png"
statuPlayer.statRH1.src = "../texture/player/Sprite/statRH1.png"
statuPlayer.statRH2.src = "../texture/player/Sprite/statRH2.png"
statuPlayer.statRH3.src = "../texture/player/Sprite/statRH3.png"

export const statuBloc = {
    stat1 : new Image(),
    stat2 : new Image(),
    stat3 : new Image(),
    stat4 : new Image(),
    stat5 : new Image(),
    stat6 : new Image(),
    stat7 : new Image(),
    stat8 : new Image(),
    stat9 : new Image(),
    stat10 : new Image(),
};

statuBloc.stat1.src = "../texture/blocs/statu/statu1.png"
statuBloc.stat2.src = "../texture/blocs/statu/statu2.png"
statuBloc.stat3.src = "../texture/blocs/statu/statu3.png"
statuBloc.stat4.src = "../texture/blocs/statu/statu4.png"
statuBloc.stat5.src = "../texture/blocs/statu/statu5.png"
statuBloc.stat6.src = "../texture/blocs/statu/statu6.png"
statuBloc.stat7.src = "../texture/blocs/statu/statu7.png"
statuBloc.stat8.src = "../texture/blocs/statu/statu8.png"
statuBloc.stat9.src = "../texture/blocs/statu/statu9.png"
statuBloc.stat10.src = "../texture/blocs/statu/statu10.png"

export let constante = innerWidth/19

export function changConstante(){
    constante = innerWidth/19
};