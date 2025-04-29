import random

hauteurMap = 300
largeurMap = 10000

def arbre1(y, x):
    for hauteur in range(4):
        listey[y + hauteur][x] = "Buche"
    for hauteur in range(2,4):
        for largeur in range(5):
            if listey[y + hauteur][x - 2 + largeur] != "Buche":
                listey[y + hauteur][x - 2 + largeur] = "Feuille"
    for hauteur2 in range(4, 6):
        for largeur2 in range(3):
            if listey[y + hauteur2][x - 1 + largeur2] != "Buche":
                listey[y + hauteur2][x - 1 + largeur2] = "Feuille"

def arbre2(y, x):
    for hauteur in range(3):
        listey[y + hauteur][x] = "Buche"
    for hauteur in range(1,3):
        for largeur in range(5):
            if listey[y + hauteur][x - 2 + largeur] != "Buche":
                listey[y + hauteur][x - 2 + largeur] = "Feuille"
    for hauteur2 in range(3,4):
        for largeur2 in range(3):
            if listey[y + hauteur2][x - 1 + largeur2] != "Buche":
                listey[y + hauteur2][x - 1 + largeur2] = "Feuille"

def surface(x):
    for y in range(hauteurMap):
        if listey[y][x] == "Air":  # Correction : Accéder à l'élément par l'index x
            return y
    return y  # Si aucune surface n'est trouvée, retourner la hauteur maximale
def foret():
    for largeur in range(largeurMap):
        if largeur %2 == 0:
            if largeur > 5 and largeur < 9995:# Correction : Boucler sur la largeur de la carte
                if random.random() <0.15 and listey[surface(largeur)-1][largeur] == "Herbe":  # Utiliser random.random()
                    arbre1(surface(largeur), largeur)
                elif 0.15 < random.random() < 0.30 and listey[surface(largeur)-1][largeur] == "Herbe":
                    arbre2(surface(largeur), largeur)

def terrain2L3():
    for y in range((hauteurMap//2)+1):
        for x in range(largeurMap+1):
            if y < ((hauteurMap//2)//3):
                if random.random() < 0.005:
                    listey[y][x] = "Diamand"
                elif random.random() < 0.05:
                    listey[y][x] = "Fer"
                else:
                    listey[y][x] = "Pierre" 
            elif ((hauteurMap//2)//3)<= y <= ((hauteurMap//2)//3)*2: 
                if random.random() < 0.0005:
                    listey[y][x] = "Diamand"
                elif random.random() < 0.10:
                    listey[y][x] = "Fer"
                elif random.random() < 0.20:
                    listey[y][x] = "Copper"
                else:
                    listey[y][x] = "Pierre" 
    print(y)
                    
def terrain3L3():
    for largeur in range(largeurMap+1):
        for hauteur in range(hauteurMap+1):
            if ((hauteurMap//2)//3)*2 < hauteur <= (hauteurMap/2)-3:
                if random.random() < 0.10:
                    listey[hauteur][largeur] = "Fer"
                elif random.random() < 0.20:
                    listey[hauteur][largeur] = "Copper"
                else:
                    listey[hauteur][largeur] = "Pierre" 
            elif (hauteurMap/2)-3< hauteur <= (hauteurMap/2):
                listey[hauteur][largeur] = "Terre"
            elif (hauteurMap/2) < hauteur <= (hauteurMap/2) + 1:
                listey[hauteur][largeur] = "Herbe"
    for x in range(1,largeurMap+1):
        noterre = True
        for y in range(1,hauteurMap+1):
            if (hauteurMap/2)-10 < y < hauteurMap:
                if listey[y][x-1] == "Pierre" or listey[y][x-1] == "Fer" or listey[y][x-1] == "Copper":
                    if random.random() > 0.50:
                        listey[y][x] = "Pierre"
                    else:
                        listey[y][x] = "Pierre"
                elif listey[y][x-1] == "Herbe" and noterre: 
                    if random.random() > 0.50:
                        listey[y][x] = "Herbe"
                        noterre = False
                    elif random.random() > 0.50:
                        listey[y-1][x] = "Herbe"
                        noterre = False
                    else: 
                        listey[y][x] = "Terre"
                        listey[y+1][x] = "Herbe"
                        noterre = False
                elif listey[y][x-1] == "Terre":
                    listey[y][x] = "Terre" 
                
def adoucir():
    for y in range(1,hauteurMap):
        for x in range(1,largeurMap):
            if listey[y][x] == "Air" and listey[y][x-1] == "Herbe" and listey[y][x+1] == "Herbe":
                listey[y][x] == "Herbe"
            elif listey[y][x] == "Herbe" and listey[y][x-1] == "Air" and listey[y][x+1] == "Air":
                listey[y][x] = "Air"
                listey[y-1][x] = "Herbe"
                         

def generatorMap():
    global listey  # Indique que vous utilisez la variable globale listey
    listey = []  # Initialisation de listey à l'intérieur de la fonction
    for y in range(hauteurMap+1):  # Correction : Boucler jusqu'à hauteurMap
        listex = []
        for x in range(largeurMap+1):  # Correction : Boucler jusqu'à largeurMap
            listex.append("Air")
        listey.append(listex)
    terrain2L3()
    terrain3L3()
    adoucir()
    foret()
    fichier = open("C:/Users/barthelemybarat/Documents/minecraft/minecraft/game/world/map.js", "w")
    fichier.write(f"export const map = {listey}")
    fichier.close()

generatorMap()

def generatorInventaire():
    fichier = open("C:/Users/barthelemybarat/Documents/minecraft/minecraft/game/player/inventaire.js","w")
    liste = ["",0]
    listey = []
    for y in range(5):
        listex = []
        for x in range(10):
            listex.append(liste)
        listey.append(listex)
    fichier.write(f"export const inventaire = {listey}")
    fichier.close()
    
#generatorInventaire()
            