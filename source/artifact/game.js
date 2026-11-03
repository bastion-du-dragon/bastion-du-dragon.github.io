(() => {
  (() => {
    const tn = "bdd-lang";
    let ws = "fr";
    try {
      const e = localStorage.getItem(tn);
      ws = e === "fr" || e === "en" ? e : /^fr/i.test(navigator.language || "fr") ? "fr" : "en";
    } catch {}
    try {
      document.documentElement.lang = ws;
    } catch {}
    const Is = (() => {
      if (ws === "fr") return (h) => h;
      const e = {
          "La Plaine de Verval": "The Plain of Verval",
          "Le seigneur de guerre Varek et son arm\xE9e envahissent la plaine. Les fermes tombent une \xE0 une, et le cristal est leur prochaine cible.":
            "The warlord Varek and his army are invading the plain. The farms fall one by one, and the crystal is their next target.",
          "La ferme du vallon": "The Valley Farm",
          "Une bande de brigands sort des haies. Ils en veulent au cristal de la ferme.":
            "A band of brigands bursts out of the hedges. They want the farm's crystal.",
          "Les champs de bl\xE9": "The Wheat Fields",
          "Les brigands reviennent, plus nombreux. Des cavaliers galopent \xE0 travers les bl\xE9s.":
            "The brigands are back, and there are more of them. Horsemen gallop through the wheat.",
          "Le vieux moulin": "The Old Mill",
          "Des soldats portent les couleurs de Varek. Ce n'est plus une simple bande de voleurs.":
            "Soldiers wear Varek's colors. This is no longer a simple band of thieves.",
          "Le gu\xE9 du ruisseau": "The Stream Ford",
          "L'arm\xE9e traverse le ruisseau par les gu\xE9s. Il faut tenir la rive.":
            "The army crosses the stream at the fords. You must hold the bank.",
          "La route du village": "The Village Road",
          "Les soldats marchent sur le village. Ses murets de pierre sont ta meilleure d\xE9fense.":
            "The soldiers march on the village. Its stone walls are your best defense.",
          "Le soir sur la plaine": "Evening on the Plain",
          "Le soleil se couche. Des faucons de guerre tournent au-dessus des champs.":
            "The sun is setting. War falcons circle above the fields.",
          "Les champs pi\xE9tin\xE9s": "The Trampled Fields",
          "L'arm\xE9e a tout pi\xE9tin\xE9 et br\xFBl\xE9 les meules. La fum\xE9e cache l'horizon.":
            "The army trampled everything and burned the haystacks. Smoke hides the horizon.",
          "La nuit du si\xE8ge": "The Night of the Siege",
          "Les feux du camp ennemi brillent dans la nuit. Les chevaliers chargent vers le cristal.":
            "The enemy campfires glow in the night. The knights charge toward the crystal.",
          "Le camp de Varek": "Varek's Camp",
          "Le seigneur de guerre Varek sort de sa tente. Bats-le pour lib\xE9rer la plaine.":
            "The warlord Varek steps out of his tent. Defeat him to free the plain.",
          "Le Ch\xE2teau de Corvin": "Corvin Castle",
          "Les derniers soldats de Varek se replient dans le ch\xE2teau du baron Corvin. Il faut quitter la plaine et entrer dans la forteresse.":
            "Varek's last soldiers fall back into Baron Corvin's castle. You must leave the plain and enter the fortress.",
          "La route du ch\xE2teau": "The Castle Road",
          "Varek est vaincu. Ses soldats fuient vers le ch\xE2teau du baron. La route quitte la plaine.":
            "Varek is defeated. His soldiers flee toward the baron's castle. The road leaves the plain.",
          "Les douves": "The Moat",
          "Le ch\xE2teau se dresse devant toi. Des gardes patrouillent le long des douves.":
            "The castle looms before you. Guards patrol along the moat.",
          "Le pont-levis": "The Drawbridge",
          "Le pont-levis est baiss\xE9. Force l'entr\xE9e sans laisser tomber le cristal.":
            "The drawbridge is down. Force your way in without letting the crystal fall.",
          "La basse-cour": "The Courtyard",
          "\xC9curies, puits et chiens de garde : la cour du ch\xE2teau se r\xE9veille.":
            "Stables, wells and guard dogs: the castle courtyard is waking up.",
          "Les remparts": "The Ramparts",
          "Sur le chemin de ronde, le vent siffle. Des chauves-souris quittent les tours.":
            "On the battlements the wind whistles. Bats leave the towers.",
          "La forge": "The Forge",
          "Les forgerons du baron \xE9quipent ses chevaliers noirs. Les braises volent.":
            "The baron's smiths equip his black knights. Embers fly.",
          "La grande salle": "The Great Hall",
          "Les tables du festin sont renvers\xE9es. La garde du baron t'attend.":
            "The feast tables are overturned. The baron's guard awaits you.",
          "Les cachots": "The Dungeons",
          "Sous le ch\xE2teau, l'eau suinte des murs. Le bourreau r\xF4de dans le noir.":
            "Beneath the castle, water seeps from the walls. The executioner prowls in the dark.",
          "La salle du tr\xF4ne": "The Throne Room",
          "Le baron Corvin se l\xE8ve de son tr\xF4ne. C'est lui qui a arm\xE9 Varek.":
            "Baron Corvin rises from his throne. He is the one who armed Varek.",
          "Les Grottes de Morn": "The Caves of Morn",
          "Sous le ch\xE2teau, un passage descend dans la roche. Les cr\xE9atures des profondeurs se r\xE9veillent et gardent le chemin.":
            "Beneath the castle, a passage descends into the rock. The creatures of the deep awaken and guard the way.",
          "La sortie des cachots": "The Dungeon Exit",
          "Les derniers pav\xE9s du ch\xE2teau laissent place \xE0 la roche brute. Des kobolds r\xF4dent dans le noir.":
            "The last cobblestones of the castle give way to bare rock. Kobolds prowl in the dark.",
          "Les galeries": "The Galleries",
          "Des torches \xE9teintes jalonnent les galeries. Des araign\xE9es filent entre les rochers.":
            "Dead torches line the galleries. Spiders scuttle between the rocks.",
          "La mine abandonn\xE9e": "The Abandoned Mine",
          "Des wagonnets rouill\xE9s et des tonneaux oubli\xE9s. Les golems gardent les filons.":
            "Rusty carts and forgotten barrels. Golems guard the veins.",
          "Le lac souterrain": "The Underground Lake",
          "Une eau noire et immobile. Quelque chose bouge \xE0 la surface.": "Still, black water. Something moves on the surface.",
          "La for\xEAt de champignons": "The Mushroom Forest",
          "Des champignons g\xE9ants brillent dans l'obscurit\xE9. Leurs spores flottent dans l'air.":
            "Giant mushrooms glow in the darkness. Their spores drift through the air.",
          "La caverne de cristal": "The Crystal Cavern",
          "Des cristaux bleus \xE9clairent la caverne. Leur lumi\xE8re attire les ogres.":
            "Blue crystals light up the cavern. Their glow attracts ogres.",
          "Les toiles": "The Webs",
          "Des toiles couvrent les parois. Il ne faut pas r\xE9veiller ce qui les a tiss\xE9es.":
            "Webs cover the walls. Do not wake whatever spun them.",
          "Le gouffre": "The Chasm",
          "Le sol s'ouvre sur un vide sans fond. Le basilic remonte des profondeurs.":
            "The ground opens onto a bottomless void. The basilisk rises from the depths.",
          "Le nid de la reine": "The Queen's Nest",
          "La reine araign\xE9e garde ses \u0153ufs. Il faut la vaincre pour revoir le jour.":
            "The spider queen guards her eggs. You must defeat her to see daylight again.",
          "Le D\xE9sert d'Ambre": "The Amber Desert",
          "Au bout des grottes, la lumi\xE8re revient : un d\xE9sert br\xFBlant s'\xE9tend jusqu'aux montagnes du dragon.":
            "At the end of the caves, the light returns: a scorching desert stretches to the dragon's mountains.",
          "Le bout du tunnel": "The End of the Tunnel",
          "La roche laisse place au sable. Des pillards guettent la sortie des grottes.":
            "The rock gives way to sand. Raiders watch the cave exit.",
          "Le canyon rouge": "The Red Canyon",
          "Les parois du canyon br\xFBlent au soleil. Les hy\xE8nes chassent en meute.":
            "The canyon walls burn in the sun. Hyenas hunt in packs.",
          "Les dunes": "The Dunes",
          "Le vent sculpte les dunes. Des scorpions g\xE9ants s'y enfouissent.":
            "The wind sculpts the dunes. Giant scorpions burrow into them.",
          "L'oasis": "The Oasis",
          "Une oasis, enfin. Mais l'eau attire aussi les monstres.": "An oasis, at last. But the water attracts monsters too.",
          "La caravane pill\xE9e": "The Plundered Caravan",
          "Les tentes de la caravane sont vides. Les vautours tournent au-dessus.": "The caravan's tents are empty. Vultures circle above.",
          "Les ruines englouties": "The Sunken Ruins",
          "Les colonnes d'un temple oubli\xE9 sortent du sable. Des golems de sable s'y rel\xE8vent.":
            "The columns of a forgotten temple rise from the sand. Sand golems rise from it.",
          "La temp\xEAte de sable": "The Sandstorm",
          "Le ciel devient orange. La temp\xEAte cache les ennemis jusqu'au dernier moment.":
            "The sky turns orange. The storm hides the enemies until the last moment.",
          "La vall\xE9e des os": "The Valley of Bones",
          "Des squelettes g\xE9ants dorment dans la vall\xE9e. La momie royale s'\xE9veille.":
            "Giant skeletons sleep in the valley. The royal mummy awakens.",
          "Le repaire du ver": "The Worm's Lair",
          "Le sol tremble. Le ver des sables surgit pour d\xE9fendre son territoire.":
            "The ground trembles. The sand worm bursts out to defend its territory.",
          "L'Antre du Dragon": "The Dragon's Lair",
          "Au-del\xE0 du d\xE9sert se dresse le volcan. C'est l\xE0 que dort le Dragon noir, entour\xE9 de ses enfants.":
            "Beyond the desert rises the volcano. This is where the Black Dragon sleeps, surrounded by his children.",
          "Le pied du volcan": "The Foot of the Volcano",
          "Le sable devient cendre noire. Les gobelins du dragon gardent la mont\xE9e.":
            "The sand turns to black ash. The dragon's goblins guard the climb.",
          "Les coul\xE9es de lave": "The Lava Flows",
          "La lave coule entre les rochers. Les loups du volcan courent sur la pierre br\xFBlante.":
            "Lava flows between the rocks. The volcano wolves run across the burning stone.",
          "La for\xEAt p\xE9trifi\xE9e": "The Petrified Forest",
          "Des arbres chang\xE9s en pierre par le souffle du dragon. Rien ne pousse plus ici.":
            "Trees turned to stone by the dragon's breath. Nothing grows here anymore.",
          "Le pont d'obsidienne": "The Obsidian Bridge",
          "Un \xE9troit passage de pierre noire au-dessus de la lave. Les orcs le gardent.":
            "A narrow strip of black stone above the lava. Orcs guard it.",
          "Les nids de wyvernes": "The Wyvern Nests",
          "Des \u0153ufs chauds reposent dans les cendres. Les wyvernes d\xE9fendent leurs nids.":
            "Warm eggs rest in the ashes. The wyverns defend their nests.",
          "Le cimeti\xE8re des dragons": "The Dragon Graveyard",
          "Les os des anciens dragons couvrent la vall\xE9e. Les trolls y font leur repaire.":
            "The bones of ancient dragons cover the valley. Trolls make their lair here.",
          "Le tr\xE9sor du dragon": "The Dragon's Treasure",
          "Des montagnes d'or brillent dans la lueur de la lave. Un dragon veille sur le tr\xE9sor.":
            "Mountains of gold glitter in the lava glow. A dragon watches over the treasure.",
          "Le c\u0153ur du volcan": "The Heart of the Volcano",
          "La chaleur est insoutenable. Le Dragon noir est tout proche.": "The heat is unbearable. The Black Dragon is very close.",
          "L'antre du Dragon noir": "The Black Dragon's Lair",
          "Le Dragon noir ouvre les yeux. Prot\xE8ge le cristal jusqu'au bout.":
            "The Black Dragon opens his eyes. Protect the crystal to the very end.",
          Facile: "Easy",
          Difficile: "Hard",
          "Tour d'archers": "Archer Tower",
          Rapide: "Fast",
          "Tour de mage": "Mage Tower",
          Polyvalent: "Versatile",
          Catapulte: "Catapult",
          Zone: "Area",
          "Tour de givre": "Frost Tower",
          Givre: "Frost",
          Ralentit: "Slows",
          "Tour \xE9lectrique": "Lightning Tower",
          Éclair: "Lightning",
          "# cibles": "# targets",
          Baliste: "Ballista",
          "Longue port\xE9e": "Long range",
          "Tour d'alchimiste": "Alchemist Tower",
          Alchimie: "Alchemy",
          Rafale: "Barrage",
          "Tous les # tirs, envoie # fl\xE8ches de plus sur des ennemis au hasard": "Every # shots, fires # extra arrows at random enemies",
          "-# % de d\xE9g\xE2ts": "-# % damage",
          Embuscade: "Ambush",
          "Le premier tir sur chaque nouvel ennemi fait # fois plus de d\xE9g\xE2ts":
            "The first shot on each new enemy deals # times more damage",
          "-# % de vitesse de tir": "-# % fire rate",
          "Onde de givre": "Frost Wave",
          "Toutes les # s, g\xE8le sur place tous les ennemis \xE0 port\xE9e pendant # s":
            "Every # s, freezes all enemies in range in place for # s",
          "-# % de port\xE9e": "-# % range",
          "Sillage gel\xE9": "Frozen Wake",
          "Les ennemis touch\xE9s laissent derri\xE8re eux une tra\xEEn\xE9e de glace qui ralentit ceux qui suivent (# %)":
            "Hit enemies leave an ice trail behind them that slows those that follow (# %)",
          Téléportation: "Teleportation",
          "# % de chance de renvoyer la cible au portail d'entr\xE9e (sauf boss)":
            "# % chance to send the target back to the entry portal (except bosses)",
          "+# % de d\xE9g\xE2ts \xE0 chaque tir sur la m\xEAme cible (jusqu'\xE0 +# %)":
            "+# % damage on each shot at the same target (up to +# %)",
          "Boulet roulant": "Rolling Boulder",
          "Apr\xE8s l'impact, le rocher roule sur le chemin vers les portails et \xE9crase les ennemis sur sa route (# % des d\xE9g\xE2ts)":
            "After impact, the rock rolls down the path toward the portals and crushes enemies on its way (# % of damage)",
          "Tir de barrage": "Barrage Fire",
          "Lance # rochers \xE0 la fois autour de la cible (# % des d\xE9g\xE2ts chacun)":
            "Throws # rocks at once around the target (# % of damage each)",
          Exécution: "Execution",
          "Ach\xE8ve tout ennemi touch\xE9 sous # % de vie (sauf boss)": "Finishes off any hit enemy below # % health (except bosses)",
          "Carreau explosif": "Explosive Bolt",
          "Le carreau explose et touche les ennemis autour (# % des d\xE9g\xE2ts)":
            "The bolt explodes and hits nearby enemies (# % of damage)",
          "N'ignore plus l'armure": "No longer ignores armor",
          "Le poison se cumule jusqu'\xE0 # fois sur la m\xEAme cible": "Poison stacks up to # times on the same target",
          "-# % de poison": "-# % poison",
          "Fiole de faiblesse": "Weakness Vial",
          "Les ennemis touch\xE9s font # % de d\xE9g\xE2ts en moins au cristal pendant # s":
            "Hit enemies deal # % less damage to the crystal for # s",
          "Champ statique": "Static Field",
          "Ne lance plus d'\xE9clair : blesse tous les ennemis \xE0 port\xE9e # fois par seconde":
            "No longer fires lightning: hurts all enemies in range # times per second",
          "-# % de port\xE9e, d\xE9g\xE2ts par coup \xD7#": "-# % range, damage per hit \xD7#",
          "Chaque monstre tu\xE9 par cette tour recharge le Souffle de # %":
            "Each monster killed by this tower recharges the Breath by # %",
          "Battre le boss du biome": "Defeat the boss of biome",
          "Cristal du dragon": "Dragon Crystal",
          Gobelin: "Goblin",
          Gobelins: "Goblins",
          Loup: "Wolf",
          Loups: "Wolves",
          "Orc cuirass\xE9": "Armored Orc",
          "Orcs cuirass\xE9s": "Armored Orcs",
          Wyverne: "Wyvern",
          Wyvernes: "Wyverns",
          "Dragon noir": "Black Dragon",
          "Dragons noirs": "Black Dragons",
          Cavalier: "Horseman",
          Cavaliers: "Horsemen",
          Soldat: "Soldier",
          Soldats: "Soldiers",
          Chevalier: "Knight",
          "Faucon de guerre": "War Falcon",
          "Faucons de guerre": "War Falcons",
          Capitaine: "Captain",
          Garde: "Guard",
          Gardes: "Guards",
          "Chien de garde": "Guard Dog",
          "Chiens de garde": "Guard Dogs",
          "Homme d'armes": "Man-at-arms",
          "Hommes d'armes": "Men-at-arms",
          "Chevalier noir": "Black Knight",
          "Chevaliers noirs": "Black Knights",
          "Chauve-souris": "Bat",
          "Chauves-souris": "Bats",
          Bourreau: "Executioner",
          Bourreaux: "Executioners",
          Araignée: "Spider",
          Araignées: "Spiders",
          "Golem de pierre": "Stone Golem",
          "Golems de pierre": "Stone Golems",
          "Ogre des cavernes": "Cave Ogre",
          Basilic: "Basilisk",
          Basilics: "Basilisks",
          "La reine araign\xE9e": "The Spider Queen",
          Reines: "Queens",
          Pillard: "Raider",
          Pillards: "Raiders",
          Hyène: "Hyena",
          Hyènes: "Hyenas",
          "Scorpion g\xE9ant": "Giant Scorpion",
          "Scorpions g\xE9ants": "Giant Scorpions",
          "Golem de sable": "Sand Golem",
          "Golems de sable": "Sand Golems",
          Vautour: "Vulture",
          Vautours: "Vultures",
          "Momie royale": "Royal Mummy",
          "Momies royales": "Royal Mummies",
          "Le ver des sables": "The Sand Worm",
          "Vers des sables": "Sand Worms",
          "Le baron Corvin": "Baron Corvin",
          Puissance: "Power",
          "+# % de d\xE9g\xE2ts par point": "+# % damage per point",
          "Longue vue": "Spyglass",
          "+# % de port\xE9e par point": "+# % range per point",
          "+# % de vitesse de tir par point": "+# % fire rate per point",
          "Fl\xE8ches per\xE7antes": "Piercing Arrows",
          "Ignore # % de l'armure par point": "Ignores # % of armor per point",
          "\u0152il de lynx": "Lynx Eye",
          "# % de chance par point de coup critique \xD7#": "# % chance per point of a \xD7# critical hit",
          Volée: "Volley",
          "Tire sur # cibles \xE0 la fois": "Shoots # targets at once",
          "Fl\xE8ches de feu": "Fire Arrows",
          "Br\xFBle la cible : # % des d\xE9g\xE2ts par seconde pendant # s": "Burns the target: # % of damage per second for # s",
          "Arcane instable": "Unstable Arcana",
          "# % de chance par point de doubler les d\xE9g\xE2ts": "# % chance per point to double the damage",
          Économie: "Thrift",
          "-# % sur le prix de la tour et de ses niveaux par point": "-# % on the price of the tower and its levels per point",
          "Cha\xEEne d'\xE9clairs": "Chain Lightning",
          "Rebondit sur # ennemis proches (# % des d\xE9g\xE2ts)": "Bounces to # nearby enemies (# % of damage)",
          Malédiction: "Curse",
          "La cible subit +# % de d\xE9g\xE2ts de toutes les sources pendant # s": "The target takes +# % damage from all sources for # s",
          "Gros calibre": "Heavy Caliber",
          "+# % de zone par point": "+# % area per point",
          Sonné: "Stunned",
          "# % de chance par point d'\xE9tourdir # s": "# % chance per point to stun for # s",
          "L'impact projette # \xE9clats (# % des d\xE9g\xE2ts)": "The impact throws # shards (# % of damage)",
          "Poix enflamm\xE9e": "Burning Pitch",
          "Laisse un sol br\xFBlant pendant # s": "Leaves scorching ground for # s",
          "Froid mordant": "Biting Cold",
          "+# % de ralentissement par point": "+# % slow per point",
          "Gel durable": "Lasting Frost",
          "+# s de ralentissement par point": "+# s of slow per point",
          "Gel total": "Deep Freeze",
          "# % de chance de geler la cible # s": "# % chance to freeze the target for # s",
          Fragilité: "Fragility",
          "Les ennemis ralentis subissent +# % de d\xE9g\xE2ts": "Slowed enemies take +# % damage",
          Surtension: "Surge",
          "L'\xE9clair rebondit sur # cible de plus par point": "The lightning bounces to # more target per point",
          Électrocution: "Electrocution",
          Orage: "Storm",
          "# % de chance de lancer un second \xE9clair": "# % chance to cast a second lightning bolt",
          Paratonnerre: "Lightning Rod",
          "+# % de d\xE9g\xE2ts contre les volants": "+# % damage against flying enemies",
          "Carreaux lourds": "Heavy Bolts",
          "Ignore # % d'armure de plus par point": "Ignores # % more armor per point",
          "Chasseur de g\xE9ants": "Giant Hunter",
          "+# % de d\xE9g\xE2ts par point contre les boss": "+# % damage per point against bosses",
          Perforation: "Piercing",
          "Le carreau traverse et touche # ennemis derri\xE8re (# %)": "The bolt pierces and hits # enemies behind (# %)",
          "Tir assommant": "Stunning Shot",
          "Chaque tir \xE9tourdit la cible # s": "Each shot stuns the target for # s",
          "Toxine durable": "Lasting Toxin",
          "Le poison dure # s de plus par point": "Poison lasts # s longer per point",
          Acide: "Acid",
          "Malus : les cibles de l'alchimiste perdent # % de leur armure par point":
            "Penalty: the alchemist's targets lose # % of their armor per point",
          "Un ennemi empoisonn\xE9 qui meurt contamine ses voisins": "A poisoned enemy that dies infects its neighbors",
          "Brume toxique": "Toxic Mist",
          "La fiole laisse un nuage de poison pendant # s": "The vial leaves a poison cloud for # s",
          "Attends la fin de la vague": "Wait until the end of the wave",
          Bloc: "Block",
          "Barre de #": "Bar of #",
          Coin: "Corner",
          Carré: "Square",
          "Chemin bloqu\xE9 !": "Path blocked!",
          "Un monstre passe": "A monster is passing",
          "Place occup\xE9e": "Spot taken",
          "Limite :": "Limit:",
          "Pas assez d'or": "Not enough gold",
          "Pas \xE0 toi": "Not yours",
          "tours vendues": "towers sold",
          "Tour vendue": "Tower sold",
          "+# forme": "+# piece",
          "R\xE8gles du mode": "Mode rules",
          "Pas de construction pendant la vague": "No building during the wave",
          "Une fois la vague lanc\xE9e, tu ne peux plus poser, am\xE9liorer ni vendre de tour, ni poser de bloc. Pr\xE9pare tout":
            "Once the wave has started, you can no longer place, upgrade or sell towers, nor place blocks. Prepare everything",
          "de lancer, puis attends la mort du dernier monstre.": "before launching, then wait for the last monster to die.",
          "tours maximum par type": "towers maximum per type",
          "Tu ne peux pas avoir plus de": "You cannot have more than",
          "mages, etc. Varie tes tours !": "mages, etc. Mix up your towers!",
          bloc: "block",
          "par vague": "per wave",
          "Chaque vague repouss\xE9e te donne": "Each wave you repel gives you",
          forme: "piece",
          "de bloc au lieu de #. Place-les avec soin pour allonger le chemin.":
            "of block instead of #. Place them carefully to lengthen the path.",
          Compris: "Got it",
          "Les monstres passent en": "The monsters switch to",
          "et au-del\xE0": "and beyond",
          "Construction bloqu\xE9e pendant la vague": "Building locked during the wave",
          "entre en sc\xE8ne !": "enters the stage!",
          "approche !": "approaches!",
          Vague: "Wave",
          "Larme du dragon !": "Dragon's Tear!",
          "Embuscade !": "Ambush!",
          "Ex\xE9cut\xE9 !": "Executed!",
          "Pouf !": "Poof!",
          "finie : +": "done: +",
          "repouss\xE9e ! +": "repelled! +",
          Souffle: "Breath",
          "Souffle du dragon": "Dragon's Breath",
          "Br\xFBle les monstres dans la zone : d\xE9g\xE2ts magiques et br\xFBlure # s.":
            "Burns the monsters in the area: magic damage and burn for # s.",
          Gel: "Freeze",
          "G\xE8le tous les monstres sur la carte.": "Freezes all monsters on the map.",
          Foudre: "Lightning",
          "Foudre divine": "Divine Lightning",
          "Frappe les # monstres les plus costauds : gros d\xE9g\xE2ts magiques et \xE9tourdissement # s.":
            "Strikes the # toughest monsters: heavy magic damage and # s stun.",
          Mur: "Wall",
          "Mur de pierre": "Stone Wall",
          "Dresse un mur de pierre pendant # s : les monstres, volants ou non, doivent le d\xE9truire pour avancer.":
            "Raises a stone wall for # s: monsters, flying or not, must destroy it to advance.",
          Renfort: "Reinforcement",
          "Toutes les tours tirent # % plus vite pendant quelques secondes.": "All towers fire # % faster for a few seconds.",
          "Deck de tours \xB7": "Tower deck \xB7",
          "tours au maximum pour un combat. Seules les tours du deck apparaissent dans la partie.":
            "towers maximum for a fight. Only the towers in the deck appear in the game.",
          "Bastion+ : # decks enregistr\xE9s, \xE0 changer en un clic.": "Bastion+: # saved decks, switch with one tap.",
          "Il faut au moins une tour dans le deck.": "You need at least one tower in the deck.",
          "Deck plein (": "Deck full (",
          ") : retire une tour avant d'en ajouter une.": "): remove a tower before adding another.",
          "Sort pour ce combat": "Spell for this fight",
          "\xB7 rang": "\xB7 rank",
          "\xB7 recharge": "\xB7 cooldown",
          "D\xE9g\xE2ts et br\xFBlure": "Damage and burn",
          "Dur\xE9e du gel": "Freeze duration",
          Dégâts: "Damage",
          "Points de vie du mur": "Wall health",
          "Dur\xE9e du renfort": "Reinforcement duration",
          "GEL !": "FREEZE!",
          "FOUDRE !": "LIGHTNING!",
          "MUR !": "WALL!",
          "RENFORT !": "BOOST!",
          "Le mur se dresse dans le cercle": "The wall rises inside the circle",
          "Vise le chemin des monstres": "Aim at the monsters' path",
          "Le souffle frappe dans le cercle": "The breath strikes inside the circle",
          "Vise la zone du souffle": "Aim at the breath zone",
          "Touche un emplacement :": "Tap a spot:",
          "Choisis une tour en bas": "Pick a tower below",
          "Touche une forme pour la retirer": "Tap a piece to remove it",
          "Plus de forme : ach\xE8tes-en une": "No pieces left: buy one",
          "Touche une case pour placer la forme": "Tap a tile to place the piece",
          "Touche \u2713 Poser, ou la m\xEAme case": "Tap \u2713 Place, or the same tile",
          "\xC7a bloquerait le chemin": "That would block the path",
          "Un monstre est sur la case": "A monster is on the tile",
          "Touche un mur, un d\xE9cor ou un bloc pour poser :": "Tap a wall, decoration or block to build:",
          "Choisis une tour": "Pick a tower",
          "Tiens bon jusqu'au dernier ennemi.": "Hold on until the last enemy.",
          "Touche \xAB Pr\xEAt \xBB quand tu as fini (la vague part quand vous \xEAtes pr\xEAts tous les deux) : tes monstres attaquent ton adversaire et te rapportent un revenu \xE0 la fin de chaque vague (# s pour tes tours, puis # s pour choisir).":
            'Tap "Ready" when you are done (the wave starts when you are both ready): your monsters attack your opponent and earn you income at the end of each wave (# s for your towers, then # s to choose).',
          "Derni\xE8re vague": "Final wave",
          Blocs: "Blocks",
          "en r\xE9serve": "in reserve",
          "+ Forme": "+ Piece",
          "\u27F3 Tourner": "\u27F3 Rotate",
          "\u2713 Poser": "\u2713 Place",
          "Plus de forme. Ach\xE8te-en une ou attends la fin de la vague.": "No pieces left. Buy one or wait for the end of the wave.",
          "\xB7 D\xE9g\xE2ts": "\xB7 Damage",
          "\xB7 Port\xE9e": "\xB7 Range",
          "\xB7 Touche les volants": "\xB7 Hits flying enemies",
          "Le cristal frappe tout seul le monstre le plus proche. S'il tombe \xE0 # PV, la partie est perdue.":
            "The crystal strikes the nearest monster by itself. If it drops to # HP, the game is lost.",
          "B\xE2tir une tour": "Build a tower",
          "\u2715 Retirer la forme": "\u2715 Remove piece",
          "\u25BC Autres tours": "\u25BC More towers",
          Coût: "Cost",
          "Niv.": "Lv.",
          "\xE9lim.": "kills",
          dégâts: "damage",
          "Vise :": "Target:",
          "Vendre +": "Sell +",
          "Niv. # : bats l'Antre": "Lv. #: beat the Lair",
          "Niveau max": "Max level",
          "Niveau #": "Level #",
          Améliorer: "Upgrade",
          "le + fort": "the strongest",
          "le #er": "the first",
          "\u2715 Forme": "\u2715 Piece",
          "Tour de ton partenaire": "Your partner's tower",
          "Nouvelle forme :": "New piece:",
          Niveau: "Level",
          Fin: "End",
          "En cours": "In progress",
          "Lancer \u25B6": "Launch \u25B6",
          Fini: "Done",
          "Fini \u2713": "Done \u2713",
          ": touche puis vise le terrain": ": tap, then aim at the field",
          "Lancement automatique": "Auto-launch",
          "D\xE9lai avant le lancement :": "Delay before launch:",
          "Activ\xE9 \xB7 touche pour couper": "On \xB7 tap to turn off",
          "Coup\xE9 \xB7 touche pour activer": "Off \xB7 tap to turn on",
          "\u2605 R\xE9glable avec Bastion+ (# s sans abonnement)": "\u2605 Adjustable with Bastion+ (# s without a subscription)",
          "Astuce : touche les fl\xE8ches sur Lancer pour le lancement automatique": "Tip: tap the arrows on Launch for auto-launch",
          "Vitesse fixe en coop\xE9ration": "Fixed speed in co-op",
          "Vitesse fixe pendant un duel": "Fixed speed during a duel",
          "Vitesse \xD7# : r\xE9serv\xE9e \xE0 l'abonnement Bastion+": "Speed \xD7#: reserved for the Bastion+ subscription",
          "Sort automatique activ\xE9": "Auto spell on",
          "Sort automatique d\xE9sactiv\xE9": "Auto spell off",
          "Pas une forme pos\xE9e": "Not a placed piece",
          "Plus de blocs": "No more blocks",
          "Choisis d'abord une tour": "Pick a tower first",
          "Pose un bloc ici": "Place a block here",
          "Pas ici": "Not here",
          "Hors du terrain": "Outside the field",
          "Vaincre # monstres": "Defeat # monsters",
          "Abattre # monstres volants": "Shoot down # flying monsters",
          "Repousser # vagues": "Repel # waves",
          "Gagner # niveaux": "Win # levels",
          "Construire # tours": "Build # towers",
          "Am\xE9liorer # tours en partie": "Upgrade # towers in a game",
          "Poser # blocs": "Place # blocks",
          "Utiliser # fois un sort": "Use a spell # times",
          "Vaincre un boss": "Defeat a boss",
          "Gagner un niveau avec # \xE9toiles": "Win a level with # stars",
          "Repousser # vagues en mode infini": "Repel # waves in infinite mode",
          "Faire un tirage au coffre des reliques": "Open a relic chest",
          Chasseur: "Hunter",
          Vaincre: "Defeat",
          monstres: "monsters",
          "Briseur de vagues": "Wave Breaker",
          Repousser: "Repel",
          vagues: "waves",
          Conquérant: "Conqueror",
          Gagner: "Win",
          "niveaux diff\xE9rents (toutes difficult\xE9s)": "different levels (all difficulties)",
          Perfectionniste: "Perfectionist",
          "Obtenir # \xE9toiles sur": "Get # stars on",
          "niveaux diff\xE9rents": "different levels",
          "Tueur de boss": "Boss Slayer",
          Explorateur: "Explorer",
          Terminer: "Complete",
          "biomes en": "biomes on",
          "Ma\xEEtre du bastion": "Master of the Bastion",
          "biomes en Difficile": "biomes on Hard",
          Intouchable: "Untouchable",
          niveau: "level",
          différent: "different",
          "en Difficile sans que le cristal perde un PV": "on Hard without the crystal losing a single HP",
          Survivant: "Survivor",
          "Atteindre la vague": "Reach wave",
          "en mode infini": "in infinite mode",
          Poser: "Place",
          blocs: "blocks",
          Bâtisseur: "Builder",
          tours: "towers",
          Forgeron: "Blacksmith",
          "tours en partie": "towers in a game",
          "Sorts du dragon": "Dragon Spells",
          Utiliser: "Use",
          "fois un sort": "times a spell",
          Posséder: "Own",
          "reliques diff\xE9rentes": "different relics",
          "Ma\xEEtre des reliques": "Relic Master",
          Monter: "Raise",
          relique: "relic",
          "au niveau max": "to max level",
          "Re\xE7u \u2713": "Claimed \u2713",
          "Finir les # qu\xEAtes du jour": "Finish the # daily quests",
          "Toutes les \xE9tapes sont termin\xE9es": "All steps completed",
          Quêtes: "Quests",
          "Qu\xEAtes du jour": "Daily quests",
          "nouvelles dans": "new in",
          Succès: "Achievements",
          terminés: "completed",
          "Les qu\xEAtes du jour changent chaque jour \xE0 minuit. Chaque succ\xE8s a # \xE9tapes, de plus en plus difficiles.":
            "Daily quests change every day at midnight. Each achievement has # steps, getting harder each time.",
          Accueil: "Home",
          Boutique: "Shop",
          Savoir: "Lore",
          Tours: "Towers",
          Sorts: "Spells",
          Reliques: "Relics",
          Talents: "Skills",
          BÊTA: "BETA",
          "Jouer \u25B6": "Play \u25B6",
          "Ton \xE9quipe": "Your team",
          "Modifier \u203A": "Edit \u203A",
          "Effacer toute la progression": "Erase all progress",
          "Mode infini": "Infinite mode",
          "Partie en cours \xB7 reprendre": "Game in progress \xB7 resume",
          "Record :": "Record:",
          vague: "wave",
          "Les vagues ne s'arr\xEAtent jamais": "The waves never stop",
          "Finis le mode Facile": "Finish Easy mode",
          "En ligne": "Online",
          "(b\xEAta)": "(beta)",
          "Mode test : tout d\xE9bloquer (biomes, niveaux, difficult\xE9s)": "Test mode: unlock everything (biomes, levels, difficulties)",
          ") pour la d\xE9bloquer.": ") to unlock it.",
          Rang: "Rank",
          "% de d\xE9g\xE2ts": "% damage",
          "Voir les stats \u203A": "See stats \u203A",
          "Rang max": "Max rank",
          "Rang +": "Rank +",
          "\u21BA Retirer": "\u21BA Remove",
          "\xAB Retirer \xBB remet une tour au rang # et te rend toutes les \xE9cailles d\xE9pens\xE9es pour ses rangs, contre des gemmes : # sous le rang #, # sous le rang #, # au-del\xE0.":
            '"Remove" resets a tower to rank # and gives back all the scales spent on its ranks, in exchange for gems: # below rank #, # below rank #, # beyond.',
          ") pour le d\xE9bloquer.": ") to unlock it.",
          "Tu choisis ton sort avant chaque niveau. Chaque rang renforce son effet principal. \xAB Retirer \xBB remet un sort au rang # et te rend toutes les \xE9cailles d\xE9pens\xE9es, contre des gemmes : # sous le rang #, # sous le rang #, # sous le rang #, # sous le rang #, # au-del\xE0.":
            'You choose your spell before each level. Each rank strengthens its main effect. "Remove" resets a spell to rank # and gives back all the scales spent, in exchange for gems: # below rank #, # below rank #, # below rank #, # below rank #, # beyond.',
          "Le deck est aussi modifiable avant chaque niveau et avant une partie du mode infini. Une tour qui n'est pas dans le deck ne peut pas \xEAtre construite pendant le combat.":
            "The deck can also be changed before each level and before an infinite-mode game. A tower that is not in the deck cannot be built during the fight.",
          "D\xE9g\xE2ts de base": "Base damage",
          "# + # par vague": "# + # per wave",
          Brûlure: "Burn",
          Cibles: "Targets",
          "Tous les monstres": "All monsters",
          Ralentissement: "Slow",
          Aucun: "None",
          "# monstres les plus costauds": "# toughest monsters",
          Étourdissement: "Stun",
          Durée: "Duration",
          Rayon: "Radius",
          "Vie de base": "Base health",
          Bloque: "Blocks",
          "Monstres au sol et volants": "Ground and flying monsters",
          "Cadence des tours": "Tower fire rate",
          "\u2190 Sorts": "\u2190 Spells",
          "Co\xFBt du rang suivant :": "Next rank cost:",
          ". Le co\xFBt monte \xE0 chaque rang.": ". The cost rises with each rank.",
          "Rang suivant": "Next rank",
          écailles: "scales",
          "Tirs par seconde": "Shots per second",
          "Tirs/s": "Shots/s",
          Portée: "Range",
          "Armure ignor\xE9e": "Armor ignored",
          Perce: "Pierces",
          "Niveau # : une sp\xE9cialisation au choix": "Level #: a specialization of your choice",
          "Bats le boss de l'Antre du dragon en Facile pour d\xE9bloquer le niveau #.":
            "Beat the boss of the Dragon's Lair on Easy to unlock level #.",
          "Malus :": "Penalty:",
          Choisie: "Chosen",
          "En vert": "In green",
          ": tes bonus (rang, comp\xE9tences, reliques": ": your bonuses (rank, skills, relics",
          "). Le co\xFBt des niveaux # \xE0 #, c'est le prix de l'am\xE9lioration.": "). The cost of levels # to # is the upgrade price.",
          Partie: "Game",
          Physique: "Physical",
          Magique: "Magic",
          "Volants : oui": "Flying: yes",
          "Volants : non": "Flying: no",
          ", emplacement": ", slot",
          "Niveau # : stats avant la sp\xE9cialisation.": "Level #: stats before specialization.",
          "\u2190 Partie": "\u2190 Game",
          ": choisis une sp\xE9cialisation. Ce choix est d\xE9finitif pour cette tour.":
            ": choose a specialization. This choice is final for this tower.",
          "Il te manque": "You are missing",
          "pi\xE8ces.": "pieces.",
          Commun: "Common",
          "Peu commun": "Uncommon",
          Épique: "Epic",
          Légendaire: "Legendary",
          "Insigne :": "Badge:",
          "+# % de d\xE9g\xE2ts pour": "+# % damage for",
          "par niveau": "per level",
          "Fiole de soin": "Healing Vial",
          "Le cristal r\xE9cup\xE8re # % de ses PV max par seconde, par niveau":
            "The crystal recovers # % of its max HP per second, per level",
          "Mortier sacr\xE9": "Sacred Mortar",
          "+# PV au cristal par niveau": "+# HP to the crystal per level",
          Sablier: "Hourglass",
          "Tes sorts se rechargent # % plus vite par niveau": "Your spells recharge # % faster per level",
          "Pierre \xE0 aiguiser": "Whetstone",
          "+# % de d\xE9g\xE2ts pour les tours physiques (archers, catapulte, baliste) par niveau":
            "+# % damage for physical towers (archers, catapult, ballista) per level",
          "Encre arcanique": "Arcane Ink",
          "+# % de d\xE9g\xE2ts pour les tours magiques (mage, givre, \xE9clair, alchimie) par niveau":
            "+# % damage for magic towers (mage, frost, lightning, alchemy) per level",
          "Plume de faucon": "Falcon Feather",
          "+# % de d\xE9g\xE2ts contre les volants par niveau": "+# % damage against flying enemies per level",
          "Lunette d'or": "Golden Scope",
          "+# % de port\xE9e pour toutes les tours par niveau": "+# % range for all towers per level",
          "C\u0153ur du cristal": "Crystal Heart",
          "Le cristal fait +# % de d\xE9g\xE2ts par niveau": "The crystal deals +# % damage per level",
          "Pierre de givre": "Frost Stone",
          "Les monstres avancent # % moins vite par niveau": "Monsters move # % slower per level",
          "Braise \xE9ternelle": "Eternal Ember",
          "Br\xFBlures et poisons font +# % de d\xE9g\xE2ts par niveau": "Burns and poisons deal +# % damage per level",
          "\xC9gide du cristal": "Crystal Aegis",
          "Le cristal subit # % de d\xE9g\xE2ts en moins par niveau": "The crystal takes # % less damage per level",
          "Cha\xEEnes lourdes": "Heavy Chains",
          "Les ralentissements sont # % plus forts par niveau": "Slows are # % stronger per level",
          "Banni\xE8re royale": "Royal Banner",
          "+# % de d\xE9g\xE2ts et +# % de vitesse de tir pour toutes les tours par niveau":
            "+# % damage and +# % fire rate for all towers per level",
          "Cor de guerre": "War Horn",
          "Le Renfort donne +# % de cadence de tir en plus par niveau": "Reinforcement gives +# % more fire rate per level",
          "Lame du chasseur": "Hunter's Blade",
          "+# % de d\xE9g\xE2ts contre les boss par niveau": "+# % damage against bosses per level",
          "Orbe de flammes": "Flame Orb",
          "Le Souffle du dragon et la Foudre divine font +# % de d\xE9g\xE2ts par niveau":
            "Dragon's Breath and Divine Lightning deal +# % damage per level",
          "C\u0153ur de dragon": "Dragon Heart",
          "+# % de d\xE9g\xE2ts pour toutes les tours par niveau": "+# % damage for all towers per level",
          "\u0152il du dragon": "Dragon Eye",
          "# % de chance par niveau que chaque tir fasse double d\xE9g\xE2ts": "# % chance per level that each shot deals double damage",
          "Larme du dragon": "Dragon's Tear",
          "Une fois par niveau jou\xE9, le cristal bris\xE9 revient avec # % de ses PV par niveau de la relique":
            "Once per level played, the broken crystal comes back with # % of its HP per relic level",
          "Griffe du dragon": "Dragon Claw",
          "+# % de d\xE9g\xE2ts par niveau contre les ennemis sous # % de PV": "+# % damage per level against enemies below # % HP",
          "Glace du p\xF4le": "Polar Ice",
          "Le Gel dure # % plus longtemps par niveau": "Freeze lasts # % longer per level",
          "Pointe de foudre": "Lightning Tip",
          "La Foudre divine fait +# % de d\xE9g\xE2ts par niveau": "Divine Lightning deals +# % damage per level",
          "Mortier de roche": "Rock Mortar",
          "Le Mur de pierre a +# % de points de vie par niveau": "The Stone Wall has +# % health per level",
          "\xC9tendard de renfort": "Reinforcement Banner",
          "Le Renfort dure # % plus longtemps par niveau": "Reinforcement lasts # % longer per level",
          "Marteau du tonnerre": "Thunder Hammer",
          "La Foudre divine \xE9tourdit # % plus longtemps par niveau": "Divine Lightning stuns # % longer per level",
          "Rempart de pierre": "Stone Rampart",
          "Le Mur de pierre dure # % plus longtemps par niveau": "The Stone Wall lasts # % longer per level",
          "Grimoire du dragon": "Dragon Grimoire",
          "Tous les sorts sont # % plus puissants par niveau (d\xE9g\xE2ts, dur\xE9e, points de vie du mur) et se rechargent # % plus vite":
            "All spells are # % more powerful per level (damage, duration, wall health) and recharge # % faster",
          chacun: "each",
          "Am\xE9liorer (+": "Upgrade (+",
          "Toutes les tours": "All towers",
          "Bonus acquis": "Bonuses gained",
          "Aucune comp\xE9tence pour l'instant. Touche un rond de l'arbre pour voir ce qu'il apporte.":
            "No skills yet. Tap a circle in the tree to see what it brings.",
          "R\xE9cap de tes reliques": "Your relics summary",
          "Nouveau !": "New!",
          "+# doublon": "+# duplicate",
          "% de chance": "% chance",
          "Coffre des reliques": "Relic Chest",
          "Des reliques permanentes. Les doublons font monter leur niveau.": "Permanent relics. Duplicates raise their level.",
          "L\xE9gendaire garanti dans": "Guaranteed Legendary in",
          "tirages \xB7 le tirage \xD7# contient au moins un Rare.": "draws \xB7 the \xD7# draw contains at least one Rare.",
          "\u2605 Bastion+ \xB7 tirage gratuit du jour": "\u2605 Bastion+ \xB7 free draw of the day",
          "Ouvrir le coffre gratuitement": "Open the chest for free",
          "D\xE9j\xE0 ouvert \xB7 reviens demain": "Already opened \xB7 come back tomorrow",
          "Serveur de test local : les comptes sont enregistr\xE9s dans ce navigateur.":
            "Local test server: accounts are stored in this browser.",
          "Adresse e-mail invalide.": "Invalid e-mail address.",
          "Mot de passe : # caract\xE8res minimum.": "Password: # characters minimum.",
          "Pseudo : de # \xE0 # caract\xE8res.": "Username: # to # characters.",
          "Un compte existe d\xE9j\xE0 avec cet e-mail.": "An account already exists with this e-mail.",
          "Ce pseudo est d\xE9j\xE0 pris.": "This username is already taken.",
          "E-mail ou mot de passe incorrect.": "Incorrect e-mail or password.",
          "Mode test : un e-mail de r\xE9initialisation serait envoy\xE9 \xE0 cette adresse.":
            "Test mode: a reset e-mail would be sent to this address.",
          "Non connect\xE9.": "Not logged in.",
          "Entre un code ami ou un pseudo.": "Enter a friend code or a username.",
          "Joueur introuvable.": "Player not found.",
          "C'est toi !": "That's you!",
          "Vous \xEAtes d\xE9j\xE0 amis.": "You are already friends.",
          "est maintenant ton ami.": "is now your friend.",
          "Demande d\xE9j\xE0 envoy\xE9e.": "Request already sent.",
          "Demande envoy\xE9e \xE0": "Request sent to",
          "Salon introuvable.": "Room not found.",
          "Ce salon est complet.": "This room is full.",
          "La partie a d\xE9j\xE0 commenc\xE9.": "The game has already started.",
          "Les deux joueurs doivent \xEAtre pr\xEAts.": "Both players must be ready.",
          "Serveur injoignable. V\xE9rifie ta connexion et r\xE9essaie.": "Server unreachable. Check your connection and try again.",
          "Nouveau mot de passe (# caract\xE8res minimum) :": "New password (# characters minimum):",
          "Impossible de changer le mot de passe.": "Unable to change the password.",
          "Mot de passe chang\xE9.": "Password changed.",
          "Serveur en ligne : tes donn\xE9es sont enregistr\xE9es sur ton compte.": "Online server: your data is saved to your account.",
          "Mot de passe trop faible (# caract\xE8res minimum).": "Password too weak (# characters minimum).",
          "Trop d'essais : r\xE9essaie dans quelques minutes.": "Too many attempts: try again in a few minutes.",
          "Cr\xE9ation impossible :": "Could not create:",
          "Compte cr\xE9\xE9 ! Un e-mail de confirmation t'a \xE9t\xE9 envoy\xE9 : clique sur le lien, puis connecte-toi.":
            "Account created! A confirmation e-mail has been sent: click the link, then log in.",
          "Confirme d'abord ton e-mail (lien re\xE7u par message).": "Confirm your e-mail first (link received by message).",
          "Entre ton adresse e-mail.": "Enter your e-mail address.",
          "Si un compte existe avec cette adresse, un e-mail de r\xE9initialisation vient d'\xEAtre envoy\xE9.":
            "If an account exists with this address, a reset e-mail has just been sent.",
          "Le matchmaking n'est pas encore activ\xE9 sur le serveur.": "Matchmaking is not yet enabled on the server.",
          Plaine: "Plain",
          Château: "Castle",
          Grottes: "Caves",
          Désert: "Desert",
          Antre: "Lair",
          "D\xE9part\u2026": "Starting\u2026",
          "Vague en cours": "Wave in progress",
          "\u23F3 Annuler \xB7": "\u23F3 Cancel \xB7",
          "\u2714 Pr\xEAt \xB7": "\u2714 Ready \xB7",
          "\u{1F441} Terrain": "\u{1F441} Field",
          "\u2694 Monstres": "\u2694 Monsters",
          "\u2694 Duel contre": "\u2694 Duel against",
          "D\xE9part dans": "Starting in",
          "D\xE9fends-toi : tours \xB7": "Defend yourself: towers \xB7",
          "Choisis tes monstres \xB7": "Choose your monsters \xB7",
          "\xB7 cristal": "\xB7 crystal",
          "/ vague": "/ wave",
          "\xB7 revenu +": "\xB7 income +",
          "\xB7 adversaire pr\xEAt \u2714": "\xB7 opponent ready \u2714",
          lancée: "launched",
          monstre: "monster",
          envoyé: "sent",
          "termin\xE9e : +": "finished: +",
          "Duel : # s pour tes tours !": "Duel: # s for your towers!",
          "Choisis les monstres \xE0 envoyer !": "Choose the monsters to send!",
          "Ton adversaire s'est d\xE9connect\xE9.": "Your opponent disconnected.",
          "envoy\xE9 par": "sent by",
          "Les deux cristaux sont tomb\xE9s.": "Both crystals have fallen.",
          "a abandonn\xE9.": "gave up.",
          "Le cristal de": "The crystal of",
          "est d\xE9truit.": "is destroyed.",
          "de revenu par vague": "income per wave",
          "Monstres \xE0 envoyer chez": "Monsters to send to",
          "Les monstres choisis partent chez ton adversaire quand la vague se lance, dans":
            "The chosen monsters go to your opponent when the wave launches, in",
          "s : apr\xE8s, plus d'envoi. Chaque monstre te rapporte un revenu \xE0 la fin de chaque vague. Ton revenu :":
            "s: after that, no more sending. Each monster earns you income at the end of each wave. Your income:",
          "\u266A Musique : coup\xE9e": "\u266A Music: off",
          "\u266A Musique : activ\xE9e": "\u266A Music: on",
          "\u21A9 Retour": "\u21A9 Back",
          "Ton cristal est d\xE9truit.": "Your crystal is destroyed.",
          Réglages: "Settings",
          "Reprendre la partie": "Resume game",
          "La partie continue pendant que ce menu est ouvert.": "The game keeps running while this menu is open.",
          "Quitter le test ?": "Quit the test?",
          "Abandonner le duel ?": "Give up the duel?",
          "Tu reviens au salon, sans r\xE9sultat.": "You go back to the lobby, with no result.",
          "Ce sera une d\xE9faite.": "It will count as a defeat.",
          "Continuer la partie": "Continue game",
          Quitter: "Quit",
          "Tu as abandonn\xE9.": "You gave up.",
          "Monstres envoy\xE9s": "Monsters sent",
          "Revenu final": "Final income",
          "Vagues termin\xE9es": "Waves completed",
          "Retour au salon": "Back to lobby",
          "Victoire !": "Victory!",
          "D\xE9faite\u2026": "Defeat\u2026",
          Égalité: "Draw",
          "Les Deux Portes": "The Two Gates",
          "Le D\xE9fil\xE9": "The Pass",
          "Le Col du Dragon": "The Dragon's Col",
          Partenaire: "Partner",
          "\u{1F91D} Coop\xE9ration avec": "\u{1F91D} Co-op with",
          "\xB7 tes tours :": "\xB7 your towers:",
          "\xB7 vague": "\xB7 wave",
          "\u23F3 En attente\u2026": "\u23F3 Waiting\u2026",
          "Partenaire pr\xEAt \u25B6": "Partner ready \u25B6",
          "Construisez, puis lancez la vague !": "Build, then launch the wave!",
          "Connexion perdue avec ton partenaire.": "Connection lost with your partner.",
          "Connexion perdue avec l'h\xF4te.": "Connection lost with the host.",
          "a quitt\xE9 la partie.": "left the game.",
          "Le cristal a tenu jusqu'au bout !": "The crystal held to the end!",
          "Le cristal est tomb\xE9.": "The crystal has fallen.",
          Coopération: "Co-op",
          "Quitter la partie ? Ton partenaire sera pr\xE9venu et vous ne gagnerez pas d'\xE9cailles.":
            "Leave the game? Your partner will be notified and you will not earn any scales.",
          Continuer: "Continue",
          "Tu as quitt\xE9 la partie.": "You left the game.",
          "Partie termin\xE9e": "Game over",
          "\xC9cailles gagn\xE9es": "Scales earned",
          "R\xE9ponds dans": "Answer within",
          "Tu n'as pas r\xE9pondu \xE0 temps.": "You did not answer in time.",
          "Aucun joueur trouv\xE9 pour le moment.": "No player found for now.",
          "Cr\xE9er un compte": "Create an account",
          "Cr\xE9er mon compte": "Create my account",
          "Se connecter": "Log in",
          "Mot de passe oubli\xE9": "Forgot password",
          Profil: "Profile",
          Amis: "Friends",
          "Ton code ami": "Your friend code",
          "Record mode infini": "Infinite mode record",
          "Niveaux \xE0 # \xE9toiles": "#-star levels",
          "Se d\xE9connecter": "Log out",
          "Personne pour l'instant.": "Nobody yet.",
          Ajouter: "Add",
          "Mes amis (": "My friends (",
          "Demandes re\xE7ues": "Requests received",
          "Ajoute un ami avec son code ou son pseudo.": "Add a friend with their code or username.",
          "En attente :": "Pending:",
          "M\xEAme carte, qui tient le plus de vagues.": "Same map, who survives the most waves.",
          "\u{1F3B2} Partie rapide (joueur al\xE9atoire)": "\u{1F3B2} Quick match (random player)",
          "Cr\xE9er un salon": "Create a room",
          Rejoindre: "Join",
          "\xC0 deux sur le m\xEAme terrain.": "Two players on the same field.",
          "Bient\xF4t disponible.": "Coming soon.",
          "Jouer contre un bot (test)": "Play against a bot (test)",
          "Partie en cours": "Game in progress",
          "Une partie est en cours dans ce salon.": "A game is in progress in this room.",
          "Quitter le salon": "Leave the room",
          "Partie rapide \xB7": "Quick match \xB7",
          "Recherche d'un joueur\u2026": "Searching for a player\u2026",
          "Annuler la recherche": "Cancel search",
          "Joueur trouv\xE9 !": "Player found!",
          Joueur: "Player",
          Prêt: "Ready",
          "En attente de l'autre joueur\u2026": "Waiting for the other player\u2026",
          "\u2714 Accepter": "\u2714 Accept",
          Refuser: "Decline",
          "En attente d'un joueur\u2026": "Waiting for a player\u2026",
          Salon: "Room",
          "Code \xE0 donner \xE0 ton ami": "Code to give your friend",
          "(h\xF4te)": "(host)",
          "Je ne suis plus pr\xEAt": "I am no longer ready",
          "Je suis pr\xEAt": "I am ready",
          "Lancer la partie": "Start the game",
          "Tout le monde est pr\xEAt.": "Everyone is ready.",
          "En attente du lancement par l'h\xF4te.": "Waiting for the host to start.",
          "La partie se lance quand les deux joueurs sont pr\xEAts.": "The game starts when both players are ready.",
          "Abonnement Bastion+": "Bastion+ subscription",
          "/ mois": "/ month",
          "Vitesse \xD7#": "Speed \xD7#",
          "d\xE9bloqu\xE9e en partie": "unlocked in game",
          "gemmes par jour": "gems per day",
          "\xE0 r\xE9cup\xE9rer": "to collect",
          "+# % d'\xE9cailles": "+# % scales",
          "sur toutes les sources": "from all sources",
          "# tirage gratuit": "# free draw",
          "du coffre des reliques par jour": "from the relic chest per day",
          "# qu\xEAte du jour": "# extra daily",
          "en plus": "quest",
          "D\xE9lai du lancement auto": "Auto-launch delay",
          "r\xE9glable (# \xE0 # s)": "adjustable (# to # s)",
          "enregistr\xE9s, changeables en un clic": "saved, switch with one tap",
          "Palier de d\xE9part tous les # vagues": "Starting tier every # waves",
          "Cadre et titre": "Frame and title",
          "Bient\xF4t : mode chrono en acc\xE8s anticip\xE9, classement r\xE9serv\xE9":
            "Coming soon: timed mode in early access, reserved leaderboard",
          "Prototype : aucun paiement r\xE9el n'est branch\xE9, l'abonnement s'active et se r\xE9silie librement pour tester.":
            "Prototype: no real payment is connected, the subscription can be turned on and off freely for testing.",
          "Abonnement actif": "Subscription active",
          Résilier: "Cancel",
          Récupérer: "Collect",
          "du jour": "of the day",
          "Gemmes du jour r\xE9cup\xE9r\xE9es \xB7 reviens demain": "Daily gems collected \xB7 come back tomorrow",
          "S'abonner \xB7": "Subscribe \xB7",
          Gemmes: "Gems",
          "la monnaie premium": "the premium currency",
          "Le paiement r\xE9el n'est pas branch\xE9 dans ce prototype : les packs sont affich\xE9s pour la maquette.":
            "Real payment is not connected in this prototype: packs are shown for the mockup.",
          "Voir mes reliques et le coffre": "See my relics and the chest",
          offertes: "offered",
          "Mode test : +# gemmes": "Test mode: +# gems",
          "Forge commune": "Common Forge",
          "+# % de d\xE9g\xE2ts pour toutes les tours, par point": "+# % damage for all towers, per point",
          "-# % sur le prix de construction de toutes les tours, par point": "-# % on the building price of all towers, per point",
          "Longues-vues": "Spyglasses",
          "+# % de port\xE9e pour toutes les tours, par point": "+# % range for all towers, per point",
          "Cristal renforc\xE9": "Reinforced Crystal",
          "+# PV pour le cristal, par point": "+# HP for the crystal, per point",
          Entraînement: "Training",
          "+# % de vitesse de tir pour toutes les tours, par point": "+# % fire rate for all towers, per point",
          Récupération: "Recovery",
          "D\xE9molir un bloc sans tour le rend dans ta r\xE9serve (en bloc simple)":
            "Demolishing a block with no tower returns it to your reserve (as a single block)",
          Rempart: "Rampart",
          "Le cristal subit # % de d\xE9g\xE2ts en moins, par point": "The crystal takes # % less damage, per point",
          "Coup critique": "Critical Hit",
          "# % de chance par point que chaque tir fasse double d\xE9g\xE2ts": "# % chance per point that each shot deals double damage",
          "Perce-armure": "Armor Piercer",
          "Les tours ignorent # % de l'armure des monstres, par point": "Towers ignore # % of monsters' armor, per point",
          Atelier: "Workshop",
          "-# % sur le prix du niveau # et -# % sur le prix du niveau # des tours, par point":
            "-# % on the level # price and -# % on the level # price of towers, per point",
          Revente: "Resale",
          "Vendre une tour rend # % de plus de ce qu'elle a co\xFBt\xE9, par point (# % de base)":
            "Selling a tower returns # % more of what it cost, per point (# % base)",
          "\u0152il de faucon": "Falcon Eye",
          "+# % de d\xE9g\xE2ts contre les volants, par point": "+# % damage against flying enemies, per point",
          "Tir de zone": "Area Shot",
          "+# % de rayon pour les d\xE9g\xE2ts de zone, par point": "+# % radius for area damage, per point",
          Régénération: "Regeneration",
          "Le cristal r\xE9cup\xE8re # PV par seconde, par point": "The crystal recovers # HP per second, per point",
          "Cristal vengeur": "Avenging Crystal",
          "Le cristal fait +# % de d\xE9g\xE2ts et a +# % de port\xE9e, par point":
            "The crystal deals +# % damage and has +# % range, per point",
          "Premier sang": "First Blood",
          "+# % de d\xE9g\xE2ts contre les monstres encore au-dessus de # % de leurs PV, par point":
            "+# % damage against monsters still above # % of their HP, per point",
          "Incantation rapide": "Quick Casting",
          "Tous les sorts (souffle, gel, foudre, mur, renfort) se rechargent # % plus vite, par point":
            "All spells (breath, freeze, lightning, wall, reinforcement) recharge # % faster, per point",
          "Les tours pos\xE9es sur tes blocs font +# % de d\xE9g\xE2ts, par point":
            "Towers placed on your blocks deal +# % damage, per point",
          Hauteurs: "High Ground",
          "Les tours pos\xE9es sur les murs et le d\xE9cor ont +# % de port\xE9e, par point":
            "Towers placed on walls and decorations have +# % range, per point",
          "Sanctuaire glac\xE9": "Frozen Sanctuary",
          "Les monstres \xE0 port\xE9e du cristal avancent # % moins vite, par point":
            "Monsters within range of the crystal move # % slower, per point",
          "Dernier rempart": "Last Stand",
          "Quand le cristal est sous # % de ses PV, les tours font +# % de d\xE9g\xE2ts, par point":
            "When the crystal is below # % of its HP, towers deal +# % damage, per point",
          "C\u0153ur du bastion": "Heart of the Bastion",
          "Le centre de l'arbre. Les comp\xE9tences autour du cristal profitent \xE0 toutes les tours.":
            "The center of the tree. The skills around the crystal benefit all towers.",
          "Tour pas encore d\xE9bloqu\xE9e :": "Tower not yet unlocked:",
          "). Ses comp\xE9tences se d\xE9bloqueront en m\xEAme temps.": "). Its skills will unlock at the same time.",
          "/# runes dans cette branche. Monte le rang dans l'\xE9cran des tours.":
            "/# runes in this branch. Raise the rank in the towers screen.",
          "Bonus pour toutes les tours": "Bonus for all towers",
          "\xB7 un seul choix": "\xB7 only one choice",
          "Il faut que la tour soit au niveau": "The tower must be level",
          "(elle est au niveau": "(it is level",
          "Il faut": "You need",
          "dans \xAB": 'in "',
          "Prends d'abord \xAB Puissance \xBB de cette tour.": `Take this tower's "Power" first.`,
          "Il faut # points dans les trois premi\xE8res comp\xE9tences de cette tour.":
            "You need # points in this tower's first three skills.",
          "Il faut # points dans les comp\xE9tences du palier #.": "You need # points in the tier # skills.",
          "Tu as d\xE9j\xE0 choisi l'autre comp\xE9tence finale de cette tour.": "You have already chosen this tower's other final skill.",
          "Maximum atteint": "Maximum reached",
          Verrouillé: "Locked",
          "\u21BA Retirer \xB7 +": "\u21BA Remove \xB7 +",
          "Retire aussi :": "Also removes:",
          "blocs au d\xE9part et par vague \xB7 cristal": "blocks at start and per wave \xB7 crystal",
          "PV \xB7 r\xE9compenses \xD7#": "HP \xB7 rewards \xD7#",
          "tours de chaque type \xB7 vagues": "towers of each type \xB7 waves",
          "\xB7 monstres": "\xB7 monsters",
          "\xB7 vitesse": "\xB7 speed",
          "\xB7 vie": "\xB7 health",
          "\xB7 # blocs au d\xE9part,": "\xB7 # blocks at start,",
          "par vague \xB7 or": "per wave \xB7 gold",
          "PV \xB7 r\xE9compenses \xD7": "HP \xB7 rewards \xD7",
          "vagues \xB7": "waves \xB7",
          portail: "portal",
          Nouveau: "New",
          "Termine tous les biomes en Facile pour d\xE9bloquer Normal, puis tous les biomes en Normal pour d\xE9bloquer Difficile. Dans chaque difficult\xE9, un biome s'ouvre apr\xE8s avoir termin\xE9 le pr\xE9c\xE9dent.":
            "Finish all biomes on Easy to unlock Normal, then all biomes on Normal to unlock Hard. In each difficulty, a biome opens after finishing the previous one.",
          Termine: "Finish",
          "en Facile pour d\xE9bloquer": "on Easy to unlock",
          "\u2190 Carte": "\u2190 Map",
          "pi\xE8ces au d\xE9part": "pieces at start",
          "Lancer le niveau": "Start level",
          "Meilleur :": "Best:",
          "/# \xE9toiles": "/# stars",
          "# \xE9toiles : +# gemmes": "# stars: +# gems",
          repoussée: "repelled",
          Reprendre: "Resume",
          Recommencer: "Restart",
          "Revoir le tuto": "Replay the tutorial",
          "Mode infini \xB7": "Infinite mode \xB7",
          "Quitter et reprendre plus tard": "Quit and resume later",
          "Abandonner la partie": "Give up the game",
          "Abandonner le niveau": "Give up the level",
          "Revoir les r\xE8gles": "Review the rules",
          "Ta partie est sauvegard\xE9e telle quelle.": "Your game is saved as it is.",
          "Une vague est en cours : tu reprendras au d\xE9but de cette vague, avec ce que tu avais \xE0 ce moment-l\xE0.":
            "A wave is in progress: you will resume at the start of this wave, with what you had at that time.",
          "Abandonner ou recommencer ne donne aucune r\xE9compense.": "Giving up or restarting gives no reward.",
          "Touche encore : +": "Tap again: +",
          "Touche encore pour tout effacer": "Tap again to erase everything",
          "Tous les biomes et niveaux sont d\xE9bloqu\xE9s": "All biomes and levels are unlocked",
          "Pas de bot en coop\xE9ration : choisis Duel.": "No bots in co-op: choose Duel.",
          "Touche encore : la partie en cours sera perdue": "Tap again: the game in progress will be lost",
          "Touche encore pour recommencer": "Tap again to restart",
          "Touche encore : la partie sauvegard\xE9e sera perdue": "Tap again: the saved game will be lost",
          "Difficile +": "Hard +",
          "Mode infini \xB7 d\xE9part vague": "Infinite mode \xB7 starting wave",
          "Reprise \xB7 vague": "Resume \xB7 wave",
          "repouss\xE9e !": "repelled!",
          "Tu peux t'arr\xEAter ici et r\xE9cup\xE9rer tes \xE9cailles, ou continuer : la partie est sauvegard\xE9e.":
            "You can stop here and collect your scales, or keep going: the game is saved.",
          "\xC9cailles si tu t'arr\xEAtes": "Scales if you stop",
          "Terminer et r\xE9cup\xE9rer": "Finish and collect",
          "Prochaine occasion de t'arr\xEAter : apr\xE8s la vague": "Next chance to stop: after wave",
          Fantassin: "Footman",
          Blindé: "Armored",
          Colosse: "Colossus",
          Volant: "Flying",
          Grotte: "Cave",
          Vitesse: "Speed",
          Armure: "Armor",
          Attaque: "Attack",
          Régénère: "Regenerates",
          "PV/s": "HP/s",
          Monstre: "Monster",
          "Valeurs de base (vague #, mode Facile). Les monstres gagnent de la vie et de l'attaque \xE0 chaque vague. L'armure r\xE9duit tous les d\xE9g\xE2ts re\xE7us. L'attaque, ce sont les d\xE9g\xE2ts port\xE9s au cristal \xE0 chaque coup.":
            "Base values (wave #, Easy mode). Monsters gain health and attack each wave. Armor reduces all damage taken. Attack is the damage dealt to the crystal with each hit.",
          "Dans la vague": "In the wave",
          Encyclopédie: "Encyclopedia",
          "Valeurs de base (vague #, mode Facile). Les monstres gagnent de la vie et de l'attaque \xE0 chaque vague, et la difficult\xE9 augmente leur vie, leur nombre et leur vitesse. L'armure r\xE9duit tous les d\xE9g\xE2ts re\xE7us, physiques comme magiques. L'attaque, ce sont les d\xE9g\xE2ts port\xE9s au cristal \xE0 chaque coup.":
            "Base values (wave #, Easy mode). Monsters gain health and attack each wave, and difficulty increases their health, number and speed. Armor reduces all damage taken, physical and magic alike. Attack is the damage dealt to the crystal with each hit.",
          "Une carte au hasard parmi les": "A random map among the",
          "niveaux du jeu. Les vagues ne s'arr\xEAtent jamais : un mini-boss toutes les # vagues, un boss toutes les #.":
            "levels of the game. The waves never stop: a mini-boss every # waves, a boss every #.",
          "Vagues # \xE0 #": "Waves # to #",
          "D\xE8s la vague #": "From wave #",
          "Apr\xE8s la vague #, \xE0 chaque vague": "After wave #, every wave",
          "Vie des monstres": "Monster health",
          "Nombre de monstres": "Number of monsters",
          "Vitesse des monstres": "Monster speed",
          "Partie en cours :": "Game in progress:",
          "Nouvelle carte au hasard": "New random map",
          "Une nouvelle partie remplace celle qui est sauvegard\xE9e. Tu reprends avec le deck de cette partie :":
            "A new game replaces the saved one. You resume with the deck of that game:",
          "Lancer une carte au hasard": "Start a random map",
          "Palier de d\xE9part": "Starting tier",
          Début: "Start",
          "Tu commences apr\xE8s le palier": "You start after tier",
          "(premi\xE8re vague :": "(first wave:",
          "), avec": "), with",
          "pi\xE8ces et": "pieces and",
          "formes de blocs. \xC9cailles gagn\xE9es \xD7": "block shapes. Scales earned \xD7",
          "\xB7 niveau des monstres atteint :": "\xB7 monster level reached:",
          "Vagues repouss\xE9es": "Waves repelled",
          "\xC9cailles de dragon": "Dragon scales",
          Rejouer: "Play again",
          "Am\xE9liorer les tours": "Upgrade towers",
          "Nouveau record !": "New record!",
          "Partie abandonn\xE9e": "Game abandoned",
          "Le cristal est bris\xE9\u2026": "The crystal is shattered\u2026",
          "(d\xE9part vague": "(start wave",
          "Biome termin\xE9 !": "Biome completed!",
          "Nouveau biome :": "New biome:",
          "est d\xE9bloqu\xE9 en": "is unlocked on",
          "Tous les biomes sont termin\xE9s en": "All biomes are completed on",
          ": la difficult\xE9": ": the difficulty",
          "est d\xE9bloqu\xE9e !": "is unlocked!",
          "Tous les biomes sont termin\xE9s dans toutes les difficult\xE9s !": "All biomes are completed on all difficulties!",
          "Nouvelle tour :": "New tower:",
          "Les tours peuvent maintenant passer au niveau #, et le mode infini est d\xE9bloqu\xE9 !":
            "Towers can now reach level #, and infinite mode is unlocked!",
          "est vaincu !": "is defeated!",
          "Niveau abandonn\xE9": "Level abandoned",
          "Niveau suivant": "Next level",
          "Biome suivant :": "Next biome:",
          "vagues repouss\xE9es \xB7": "waves repelled \xB7",
          "Carte du biome": "Biome map",
          "Menu principal": "Main menu",
          "Gemmes (# \xE9toiles)": "Gems (# stars)",
          "Voici le": "Here is the",
          "cristal du dragon": "dragon crystal",
          ". Les monstres veulent le d\xE9truire : s'il tombe \xE0 # PV, la partie est perdue.":
            ". The monsters want to destroy it: if it drops to # HP, the game is lost.",
          "Les monstres sortent des": "The monsters come out of the",
          "et suivent le chemin en pointill\xE9s jusqu'au cristal.": "and follow the dotted path to the crystal.",
          "Ici, tu vois les monstres de la": "Here you see the monsters of the",
          "prochaine vague": "next wave",
          ". Touche un nom pour voir sa fiche.": ". Tap a name to see its sheet.",
          "Pose ta premi\xE8re tour : choisis l'": "Place your first tower: pick the",
          "dans ta barre de tours, en bas.": "in your tower bar, at the bottom.",
          "Touche maintenant un": "Now tap a",
          décor: "decoration",
          "(buisson, rocher\u2026) ou un": "(bush, rock\u2026) or a",
          "pr\xE8s du chemin pour y b\xE2tir l'Archer.": "near the path to build the Archer there.",
          "Le cercle, c'est la": "The circle is the tower's",
          portée: "range",
          "de la tour : elle tire toute seule sur les monstres qui passent dedans.":
            ": it shoots by itself at the monsters passing through it.",
          Les: "The",
          "servent \xE0 allonger le chemin : plus il est long, plus tes tours ont le temps de tirer. Touche":
            "are used to lengthen the path: the longer it is, the more time your towers have to shoot. Tap",
          "Touche l'": "Tap the",
          "pour placer la forme. Le trait jaune montre le nouveau chemin. Tu ne peux pas fermer compl\xE8tement le passage.":
            "to place the piece. The yellow line shows the new path. You cannot close the passage completely.",
          "Si l'emplacement te pla\xEEt, touche": "If you like the spot, tap",
          "ou touche encore au m\xEAme endroit.": "or tap the same place again.",
          Tourner: "Rotate",
          "change le sens de la forme.": "changes the direction of the piece.",
          "Bien jou\xE9 ! Astuce : tu peux aussi": "Well done! Tip: you can also",
          "b\xE2tir une tour sur un bloc": "build a tower on a block",
          ", comme sur un d\xE9cor.": ", just like on a decoration.",
          "Pr\xEAt ? Touche": "Ready? Tap",
          Lancer: "Launch",
          "pour envoyer la premi\xE8re vague.": "to send the first wave.",
          Ton: "Your",
          "est pr\xEAt ! Touche-le\u2026": "is ready! Tap it\u2026",
          "\u2026puis touche la carte, sur les monstres, pour les br\xFBler.": "\u2026then tap the map, on the monsters, to burn them.",
          "Vague repouss\xE9e ! Chaque monstre tu\xE9 rapporte de l'": "Wave repelled! Each monster killed earns",
          ". Touche ta tour pour l'": ". Tap your tower to",
          améliorer: "upgrade it",
          "ou changer sa": "or change its",
          ". Tu gagnes aussi de nouvelles formes de blocs \xE0 chaque vague.": ". You also get new block shapes every wave.",
          "Dernier conseil : le bouton": "Last tip: the",
          "acc\xE9l\xE8re le jeu et le bouton \u2699\uFE0F met en pause. Bonne chance, d\xE9fenseur !":
            "button speeds up the game and the \u2699\uFE0F button pauses. Good luck, defender!",
          "Tuto \xB7": "Tutorial \xB7",
          Suivant: "Next",
          "Choisir un niveau": "Choose a level",
          "Finis un biome en Facile pour d\xE9bloquer le suivant. Quand tous les biomes sont finis en Facile, Normal s'ouvre (biome par biome), puis Difficile apr\xE8s Normal. Plus c'est dur, plus les r\xE9compenses sont grosses.":
            "Finish a biome on Easy to unlock the next one. When all biomes are finished on Easy, Normal opens (biome by biome), then Hard after Normal. The harder it is, the bigger the rewards.",
          Récompenses: "Rewards",
          "Les \xE9toiles d\xE9pendent de la vie restante du cristal : # \xE9toiles si tu en gardes au moins # %. Tu gagnes des \xE9cailles (pour les tours), des runes (pour les comp\xE9tences) et des gemmes la premi\xE8re fois que tu fais # \xE9toiles.":
            "Stars depend on the crystal's remaining health: # stars if you keep at least # %. You earn scales (for towers), runes (for skills) and gems the first time you get # stars.",
          "D\xE9pense tes \xE9cailles pour monter le rang de tes tours : chaque rang donne plus de d\xE9g\xE2ts. Les nouvelles tours se d\xE9bloquent en battant les boss des biomes.":
            "Spend your scales to raise your towers' rank: each rank gives more damage. New towers are unlocked by beating the biome bosses.",
          Compétences: "Skills",
          "Les runes, gagn\xE9es en finissant des niveaux, d\xE9bloquent des comp\xE9tences : des bonus pour une tour pr\xE9cise ou pour toutes les tours.":
            "Runes, earned by finishing levels, unlock skills: bonuses for a specific tower or for all towers.",
          "# qu\xEAtes changent chaque jour, et chaque succ\xE8s a # \xE9tapes. Elles rapportent des \xE9cailles et des gemmes.":
            "# quests change every day, and each achievement has # steps. They earn scales and gems.",
          "Ici, tu t'abonnes \xE0 Bastion+ et tu ach\xE8tes des gemmes. Tes reliques et le coffre se trouvent dans Collection, onglet Reliques.":
            "Here you subscribe to Bastion+ and buy gems. Your relics and the chest are in Collection, Relics tab.",
          "Utilise tes gemmes ou tes \xE9cailles pour ouvrir le coffre : des reliques, bonus permanents qui montent de niveau quand tu en trouves en double.":
            "Use your gems or scales to open the chest: relics, permanent bonuses that level up when you find duplicates.",
          "D\xE9lai du lancement auto :": "Auto-launch delay:",
          "Points de vie du cristal": "Crystal health points",
          "Vitesse du jeu": "Game speed",
          "R\xE9glages et pause": "Settings and pause",
          "Sort du dragon : touche puis vise le terrain": "Dragon spell: tap, then aim at the field",
          "Sort automatique": "Auto spell",
          "Poser ou retirer des blocs": "Place or remove blocks",
          "Choisir une tour \xE0 poser": "Choose a tower to build",
          "Lancer la vague suivante": "Launch the next wave",
          "Lancement automatique des vagues": "Automatic wave launch",
          "R\xE9glage du lancement automatique": "Auto-launch settings",
          "R\xE9serv\xE9 \xE0 Bastion+": "Reserved for Bastion+",
          "Fiche du monstre": "Monster sheet",
          "Acheter une forme au hasard": "Buy a random piece",
          Fermer: "Close",
          "Voir la rang\xE9e du dessus": "See the row above",
          "Voir la rang\xE9e du dessous": "See the row below",
          "Monstres \xE9limin\xE9s par cette tour": "Monsters killed by this tower",
          "D\xE9g\xE2ts inflig\xE9s par cette tour": "Damage dealt by this tower",
          "Fiche compl\xE8te de la tour": "Full tower sheet",
          "Change la cible de la tour": "Changes the tower's target",
          "Bats le boss de l'Antre du dragon en Facile pour d\xE9bloquer le niveau #":
            "Beat the boss of the Dragon's Lair on Easy to unlock level #",
          "Vend les tours pos\xE9es dessus et retire toute la forme": "Sells the towers on it and removes the whole piece",
          "D\xE9lai du lancement automatique des vagues": "Delay of the automatic wave launch",
          "Abonn\xE9 Bastion+": "Bastion+ subscriber",
          "Version de test": "Test version",
          "Modifier ton \xE9quipe": "Edit your team",
          "Finis le mode Facile (boss de l'Antre du dragon) pour le d\xE9bloquer": "Finish Easy mode (Dragon's Lair boss) to unlock it",
          "Volume de la musique": "Music volume",
          "toi@exemple.fr": "you@example.com",
          "# caract\xE8res minimum": "# characters minimum",
          "Ton pseudo": "Your username",
          "Code ami ou pseudo": "Friend code or username",
          Retirer: "Remove",
          "Code du salon": "Room code",
          Zoomer: "Zoom in",
          Dézoomer: "Zoom out",
          Recentrer: "Recenter",
          "Passer le tuto": "Skip tutorial",
          "Mot de passe": "Password",
          "Pseudo (# \xE0 # caract\xE8res)": "Username (# to # characters)",
          "Adresse e-mail": "E-mail address",
          Connexion: "Log in",
          Classement: "Leaderboard",
          Mondial: "World",
          "Mes amis": "My friends",
          Départ: "Start",
          Tu: "You",
          "Inviter un ami": "Invite a friend",
          Inviter: "Invite",
          Renvoyer: "Resend",
          "Invit\xE9 \u2713": "Invited \u2713",
          "Invitations re\xE7ues": "Received invitations",
          "t'invite \xE0 jouer (": "invites you to play (",
          "Ajoute des amis dans l'onglet Amis pour pouvoir les inviter.": "Add friends in the Friends tab to invite them.",
          "Cr\xE9e d'abord un salon.": "Create a room first.",
          "Ton salon est d\xE9j\xE0 complet.": "Your room is already full.",
          "Ce joueur n'est pas dans tes amis.": "This player is not in your friends.",
          "Invitation expir\xE9e.": "Invitation expired.",
          "Les invitations ne sont pas encore activ\xE9es sur le serveur.": "Invitations are not enabled on the server yet.",
          "Rejoindre le Discord": "Join the Discord",
          "Exporter ma progression": "Export my progress",
          "Importer une progression": "Import progress",
          Exporter: "Export",
          Importer: "Import",
          "Copier le code": "Copy code",
          "Code copi\xE9.": "Code copied.",
          "S\xE9lectionne le code ci-dessus et copie-le \xE0 la main.": "Select the code above and copy it manually.",
          "Touche encore pour remplacer ta progression": "Tap again to replace your progress",
          "Code invalide. V\xE9rifie que tu as copi\xE9 le code en entier.": "Invalid code. Make sure you copied the whole code.",
          "Copie ce code, puis colle-le dans \xAB Importer une progression \xBB sur l'autre version du jeu (par exemple le site).":
            'Copy this code, then paste it into "Import progress" on the other version of the game (for example the website).',
          "Colle ici le code obtenu avec \xAB Exporter ma progression \xBB depuis l'autre version du jeu. Ta progression actuelle sera remplac\xE9e.":
            'Paste here the code you got from "Export my progress" in the other version of the game. Your current progress will be replaced.',
          "Sauvegarde du compte": "Account save",
          "Ton compte contient une progression plus avanc\xE9e que celle de cet appareil.":
            "Your account has more progress than this device.",
          "Sur ton compte": "On your account",
          "Sur cet appareil": "On this device",
          "Charger la sauvegarde du compte": "Load the account save",
          "Garder cet appareil et remplacer le compte": "Keep this device and replace the account save",
          "Cr\xE9e ton compte pour sauvegarder ta progression et jouer en ligne avec tes amis.":
            "Create your account to save your progress and play online with your friends.",
          "Continuer sans compte": "Continue without an account",
          Musique: "Music",
          Langue: "Language",
          "Termine le biome pr\xE9c\xE9dent": "Finish the previous biome",
          Histoire: "Story",
          "Voir les avantages": "See the benefits",
          "\xB7 finis le mode Facile": "\xB7 finish Easy mode",
          "Boss du biome": "Biome boss",
          "Une tour qui n'est pas dans le deck ne peut pas \xEAtre construite pendant le combat.":
            "A tower that is not in your deck cannot be built during a battle.",
          "tours de chaque type \xB7 monstres": "towers of each type \xB7 monsters",
          "D\xE9g\xE2ts +": "Damage +",
          "la Plaine de Verval": "the Plain of Verval",
          "la ferme du vallon": "the Valley Farm",
          "les champs de bl\xE9": "the Wheat Fields",
          "le vieux moulin": "the Old Mill",
          "le gu\xE9 du ruisseau": "the Stream Ford",
          "la route du village": "the Village Road",
          "le soir sur la plaine": "evening on the Plain",
          "les champs pi\xE9tin\xE9s": "the Trampled Fields",
          "la nuit du si\xE8ge": "the Night of the Siege",
          "le camp de Varek": "varek's Camp",
          "le Ch\xE2teau de Corvin": "corvin Castle",
          "la route du ch\xE2teau": "the Castle Road",
          "les douves": "the Moat",
          "le pont-levis": "the Drawbridge",
          "la basse-cour": "the Courtyard",
          "les remparts": "the Ramparts",
          "la forge": "the Forge",
          "la grande salle": "the Great Hall",
          "les cachots": "the Dungeons",
          "la salle du tr\xF4ne": "the Throne Room",
          "les Grottes de Morn": "the Caves of Morn",
          "la sortie des cachots": "the Dungeon Exit",
          "les galeries": "the Galleries",
          "la mine abandonn\xE9e": "the Abandoned Mine",
          "le lac souterrain": "the Underground Lake",
          "la for\xEAt de champignons": "the Mushroom Forest",
          "la caverne de cristal": "the Crystal Cavern",
          "les toiles": "the Webs",
          "le gouffre": "the Chasm",
          "le nid de la reine": "the Queen's Nest",
          "le D\xE9sert d'Ambre": "the Amber Desert",
          "le bout du tunnel": "the End of the Tunnel",
          "le canyon rouge": "the Red Canyon",
          "les dunes": "the Dunes",
          "l'oasis": "the Oasis",
          "la caravane pill\xE9e": "the Plundered Caravan",
          "les ruines englouties": "the Sunken Ruins",
          "la temp\xEAte de sable": "the Sandstorm",
          "la vall\xE9e des os": "the Valley of Bones",
          "le repaire du ver": "the Worm's Lair",
          "l'Antre du Dragon": "the Dragon's Lair",
          "le pied du volcan": "the Foot of the Volcano",
          "les coul\xE9es de lave": "the Lava Flows",
          "la for\xEAt p\xE9trifi\xE9e": "the Petrified Forest",
          "le pont d'obsidienne": "the Obsidian Bridge",
          "les nids de wyvernes": "the Wyvern Nests",
          "le cimeti\xE8re des dragons": "the Dragon Graveyard",
          "le tr\xE9sor du dragon": "the Dragon's Treasure",
          "le c\u0153ur du volcan": "the Heart of the Volcano",
          "l'antre du Dragon noir": "the Black Dragon's Lair",
          facile: "easy",
          difficile: "hard",
          "tour d'archers": "archer Tower",
          rapide: "fast",
          "tour de mage": "mage Tower",
          polyvalent: "versatile",
          catapulte: "catapult",
          zone: "area",
          "tour de givre": "frost Tower",
          givre: "frost",
          ralentit: "slows",
          "tour \xE9lectrique": "lightning Tower",
          éclair: "lightning",
          baliste: "ballista",
          "longue port\xE9e": "long range",
          "tour d'alchimiste": "alchemist Tower",
          alchimie: "alchemy",
          rafale: "barrage",
          embuscade: "ambush",
          "onde de givre": "frost Wave",
          "sillage gel\xE9": "frozen Wake",
          téléportation: "teleportation",
          "boulet roulant": "rolling Boulder",
          "tir de barrage": "barrage Fire",
          exécution: "execution",
          "carreau explosif": "explosive Bolt",
          "n'ignore plus l'armure": "no longer ignores armor",
          "fiole de faiblesse": "weakness Vial",
          "champ statique": "static Field",
          "battre le boss du biome": "defeat the boss of biome",
          gobelin: "goblin",
          gobelins: "goblins",
          loup: "wolf",
          loups: "wolves",
          "orc cuirass\xE9": "armored Orc",
          "orcs cuirass\xE9s": "armored Orcs",
          wyverne: "wyvern",
          wyvernes: "wyverns",
          "dragon noir": "black Dragon",
          "dragons noirs": "black Dragons",
          cavalier: "horseman",
          cavaliers: "horsemen",
          soldat: "soldier",
          soldats: "soldiers",
          chevalier: "knight",
          "faucon de guerre": "war Falcon",
          "faucons de guerre": "war Falcons",
          capitaine: "captain",
          garde: "guard",
          gardes: "guards",
          "chien de garde": "guard Dog",
          "chiens de garde": "guard Dogs",
          "homme d'armes": "man-at-arms",
          "hommes d'armes": "men-at-arms",
          "chevalier noir": "black Knight",
          "chevaliers noirs": "black Knights",
          "chauve-souris": "bat",
          "chauves-souris": "bats",
          bourreau: "executioner",
          bourreaux: "executioners",
          araignée: "spider",
          araignées: "spiders",
          "golem de pierre": "stone Golem",
          "golems de pierre": "stone Golems",
          "ogre des cavernes": "cave Ogre",
          basilic: "basilisk",
          basilics: "basilisks",
          "la reine araign\xE9e": "the Spider Queen",
          reines: "queens",
          pillard: "raider",
          pillards: "raiders",
          hyène: "hyena",
          hyènes: "hyenas",
          "scorpion g\xE9ant": "giant Scorpion",
          "scorpions g\xE9ants": "giant Scorpions",
          "golem de sable": "sand Golem",
          "golems de sable": "sand Golems",
          vautour: "vulture",
          vautours: "vultures",
          "momie royale": "royal Mummy",
          "momies royales": "royal Mummies",
          "le ver des sables": "the Sand Worm",
          "vers des sables": "sand Worms",
          "le baron Corvin": "baron Corvin",
          puissance: "power",
          "longue vue": "spyglass",
          "fl\xE8ches per\xE7antes": "piercing Arrows",
          "ignore # % de l'armure par point": "ignores # % of armor per point",
          "\u0153il de lynx": "lynx Eye",
          volée: "volley",
          "tire sur # cibles \xE0 la fois": "shoots # targets at once",
          "fl\xE8ches de feu": "fire Arrows",
          "arcane instable": "unstable Arcana",
          économie: "thrift",
          "cha\xEEne d'\xE9clairs": "chain Lightning",
          malédiction: "curse",
          "gros calibre": "heavy Caliber",
          sonné: "stunned",
          "poix enflamm\xE9e": "burning Pitch",
          "froid mordant": "biting Cold",
          "gel durable": "lasting Frost",
          "gel total": "deep Freeze",
          fragilité: "fragility",
          surtension: "surge",
          électrocution: "electrocution",
          orage: "storm",
          paratonnerre: "lightning Rod",
          "carreaux lourds": "heavy Bolts",
          "chasseur de g\xE9ants": "giant Hunter",
          perforation: "piercing",
          "tir assommant": "stunning Shot",
          "chaque tir \xE9tourdit la cible # s": "each shot stuns the target for # s",
          "toxine durable": "lasting Toxin",
          acide: "acid",
          "brume toxique": "toxic Mist",
          "attends la fin de la vague": "wait until the end of the wave",
          "barre de #": "bar of #",
          coin: "corner",
          carré: "square",
          "chemin bloqu\xE9 !": "path blocked!",
          "un monstre passe": "a monster is passing",
          "place occup\xE9e": "spot taken",
          "limite :": "limit:",
          "pas assez d'or": "not enough gold",
          "pas \xE0 toi": "not yours",
          "tour vendue": "tower sold",
          "r\xE8gles du mode": "mode rules",
          "tu ne peux pas avoir plus de": "you cannot have more than",
          "chaque vague repouss\xE9e te donne": "each wave you repel gives you",
          compris: "got it",
          "les monstres passent en": "the monsters switch to",
          "larme du dragon !": "dragon's Tear!",
          "embuscade !": "ambush!",
          "ex\xE9cut\xE9 !": "executed!",
          "pouf !": "poof!",
          souffle: "breath",
          "souffle du dragon": "dragon's Breath",
          gel: "freeze",
          foudre: "lightning",
          "foudre divine": "divine Lightning",
          mur: "wall",
          "mur de pierre": "stone Wall",
          renfort: "reinforcement",
          "deck de tours \xB7": "tower deck \xB7",
          "deck plein (": "deck full (",
          "sort pour ce combat": "spell for this fight",
          "d\xE9g\xE2ts et br\xFBlure": "damage and burn",
          "dur\xE9e du gel": "freeze duration",
          "points de vie du mur": "wall health",
          "dur\xE9e du renfort": "reinforcement duration",
          "gEL !": "fREEZE!",
          "fOUDRE !": "lIGHTNING!",
          "mUR !": "wALL!",
          "rENFORT !": "bOOST!",
          "le mur se dresse dans le cercle": "the wall rises inside the circle",
          "vise le chemin des monstres": "aim at the monsters' path",
          "le souffle frappe dans le cercle": "the breath strikes inside the circle",
          "vise la zone du souffle": "aim at the breath zone",
          "touche un emplacement :": "tap a spot:",
          "choisis une tour en bas": "pick a tower below",
          "touche une forme pour la retirer": "tap a piece to remove it",
          "plus de forme : ach\xE8tes-en une": "no pieces left: buy one",
          "touche \u2713 Poser, ou la m\xEAme case": "tap \u2713 Place, or the same tile",
          "\xE7a bloquerait le chemin": "that would block the path",
          "un monstre est sur la case": "a monster is on the tile",
          "choisis une tour": "pick a tower",
          "derni\xE8re vague": "final wave",
          "b\xE2tir une tour": "build a tower",
          coût: "cost",
          "niv.": "lv.",
          "vise :": "target:",
          "vendre +": "sell +",
          "niv. # : bats l'Antre": "lv. #: beat the Lair",
          "niveau max": "max level",
          "niveau #": "level #",
          "tour de ton partenaire": "your partner's tower",
          "nouvelle forme :": "new piece:",
          fin: "end",
          "en cours": "in progress",
          "lancer \u25B6": "launch \u25B6",
          fini: "done",
          "fini \u2713": "done \u2713",
          "lancement automatique": "auto-launch",
          "d\xE9lai avant le lancement :": "delay before launch:",
          "activ\xE9 \xB7 touche pour couper": "on \xB7 tap to turn off",
          "coup\xE9 \xB7 touche pour activer": "off \xB7 tap to turn on",
          "vitesse fixe en coop\xE9ration": "fixed speed in co-op",
          "vitesse fixe pendant un duel": "fixed speed during a duel",
          "sort automatique activ\xE9": "auto spell on",
          "sort automatique d\xE9sactiv\xE9": "auto spell off",
          "pas une forme pos\xE9e": "not a placed piece",
          "plus de blocs": "no more blocks",
          "choisis d'abord une tour": "pick a tower first",
          "pose un bloc ici": "place a block here",
          "pas ici": "not here",
          "hors du terrain": "outside the field",
          "vaincre # monstres": "defeat # monsters",
          "abattre # monstres volants": "shoot down # flying monsters",
          "repousser # vagues": "repel # waves",
          "gagner # niveaux": "win # levels",
          "construire # tours": "build # towers",
          "am\xE9liorer # tours en partie": "upgrade # towers in a game",
          "poser # blocs": "place # blocks",
          "utiliser # fois un sort": "use a spell # times",
          "vaincre un boss": "defeat a boss",
          "gagner un niveau avec # \xE9toiles": "win a level with # stars",
          chasseur: "hunter",
          vaincre: "defeat",
          "briseur de vagues": "wave Breaker",
          repousser: "repel",
          conquérant: "conqueror",
          gagner: "win",
          perfectionniste: "perfectionist",
          "obtenir # \xE9toiles sur": "get # stars on",
          "tueur de boss": "boss Slayer",
          explorateur: "explorer",
          terminer: "complete",
          "ma\xEEtre du bastion": "master of the Bastion",
          intouchable: "untouchable",
          survivant: "survivor",
          "atteindre la vague": "reach wave",
          poser: "place",
          bâtisseur: "builder",
          forgeron: "blacksmith",
          "sorts du dragon": "dragon Spells",
          utiliser: "use",
          posséder: "own",
          "ma\xEEtre des reliques": "relic Master",
          monter: "raise",
          "re\xE7u \u2713": "claimed \u2713",
          "finir les # qu\xEAtes du jour": "finish the # daily quests",
          "toutes les \xE9tapes sont termin\xE9es": "all steps completed",
          quêtes: "quests",
          "qu\xEAtes du jour": "daily quests",
          succès: "achievements",
          accueil: "home",
          boutique: "shop",
          savoir: "lore",
          sorts: "spells",
          reliques: "relics",
          talents: "skills",
          bÊTA: "bETA",
          "jouer \u25B6": "play \u25B6",
          "ton \xE9quipe": "your team",
          "modifier \u203A": "edit \u203A",
          "effacer toute la progression": "erase all progress",
          "mode infini": "infinite mode",
          "partie en cours \xB7 reprendre": "game in progress \xB7 resume",
          "record :": "record:",
          "les vagues ne s'arr\xEAtent jamais": "the waves never stop",
          "finis le mode Facile": "finish Easy mode",
          "en ligne": "online",
          rang: "rank",
          "voir les stats \u203A": "see stats \u203A",
          "rang max": "max rank",
          "rang +": "rank +",
          "d\xE9g\xE2ts de base": "base damage",
          brûlure: "burn",
          cibles: "targets",
          "tous les monstres": "all monsters",
          ralentissement: "slow",
          aucun: "none",
          étourdissement: "stun",
          durée: "duration",
          rayon: "radius",
          "vie de base": "base health",
          bloque: "blocks",
          "monstres au sol et volants": "ground and flying monsters",
          "cadence des tours": "tower fire rate",
          "co\xFBt du rang suivant :": "next rank cost:",
          "rang suivant": "next rank",
          "tirs par seconde": "shots per second",
          "tirs/s": "shots/s",
          "armure ignor\xE9e": "armor ignored",
          perce: "pierces",
          "malus :": "penalty:",
          choisie: "chosen",
          "en vert": "in green",
          partie: "game",
          physique: "physical",
          magique: "magic",
          "volants : oui": "flying: yes",
          "volants : non": "flying: no",
          "il te manque": "you are missing",
          commun: "common",
          "peu commun": "uncommon",
          épique: "epic",
          légendaire: "legendary",
          "insigne :": "badge:",
          "fiole de soin": "healing Vial",
          "mortier sacr\xE9": "sacred Mortar",
          sablier: "hourglass",
          "pierre \xE0 aiguiser": "whetstone",
          "encre arcanique": "arcane Ink",
          "plume de faucon": "falcon Feather",
          "lunette d'or": "golden Scope",
          "c\u0153ur du cristal": "crystal Heart",
          "pierre de givre": "frost Stone",
          "braise \xE9ternelle": "eternal Ember",
          "\xE9gide du cristal": "crystal Aegis",
          "cha\xEEnes lourdes": "heavy Chains",
          "banni\xE8re royale": "royal Banner",
          "cor de guerre": "war Horn",
          "lame du chasseur": "hunter's Blade",
          "orbe de flammes": "flame Orb",
          "c\u0153ur de dragon": "dragon Heart",
          "\u0153il du dragon": "dragon Eye",
          "larme du dragon": "dragon's Tear",
          "griffe du dragon": "dragon Claw",
          "glace du p\xF4le": "polar Ice",
          "pointe de foudre": "lightning Tip",
          "mortier de roche": "rock Mortar",
          "\xE9tendard de renfort": "reinforcement Banner",
          "marteau du tonnerre": "thunder Hammer",
          "rempart de pierre": "stone Rampart",
          "grimoire du dragon": "dragon Grimoire",
          "am\xE9liorer (+": "upgrade (+",
          "toutes les tours": "all towers",
          "bonus acquis": "bonuses gained",
          "r\xE9cap de tes reliques": "your relics summary",
          "nouveau !": "new!",
          "coffre des reliques": "relic Chest",
          "l\xE9gendaire garanti dans": "guaranteed Legendary in",
          "ouvrir le coffre gratuitement": "open the chest for free",
          "d\xE9j\xE0 ouvert \xB7 reviens demain": "already opened \xB7 come back tomorrow",
          "adresse e-mail invalide.": "invalid e-mail address.",
          "pseudo : de # \xE0 # caract\xE8res.": "username: # to # characters.",
          "ce pseudo est d\xE9j\xE0 pris.": "this username is already taken.",
          "non connect\xE9.": "not logged in.",
          "entre un code ami ou un pseudo.": "enter a friend code or a username.",
          "joueur introuvable.": "player not found.",
          "c'est toi !": "that's you!",
          "vous \xEAtes d\xE9j\xE0 amis.": "you are already friends.",
          "demande d\xE9j\xE0 envoy\xE9e.": "request already sent.",
          "demande envoy\xE9e \xE0": "request sent to",
          "salon introuvable.": "room not found.",
          "ce salon est complet.": "this room is full.",
          "la partie a d\xE9j\xE0 commenc\xE9.": "the game has already started.",
          "mot de passe chang\xE9.": "password changed.",
          "cr\xE9ation impossible :": "could not create:",
          "entre ton adresse e-mail.": "enter your e-mail address.",
          plaine: "plain",
          château: "castle",
          grottes: "caves",
          désert: "desert",
          antre: "lair",
          "d\xE9part\u2026": "starting\u2026",
          "vague en cours": "wave in progress",
          "d\xE9part dans": "starting in",
          "d\xE9fends-toi : tours \xB7": "defend yourself: towers \xB7",
          "choisis tes monstres \xB7": "choose your monsters \xB7",
          "duel : # s pour tes tours !": "duel: # s for your towers!",
          "choisis les monstres \xE0 envoyer !": "choose the monsters to send!",
          "ton adversaire s'est d\xE9connect\xE9.": "your opponent disconnected.",
          "les deux cristaux sont tomb\xE9s.": "both crystals have fallen.",
          "le cristal de": "the crystal of",
          "monstres \xE0 envoyer chez": "monsters to send to",
          "ton cristal est d\xE9truit.": "your crystal is destroyed.",
          réglages: "settings",
          "reprendre la partie": "resume game",
          "quitter le test ?": "quit the test?",
          "abandonner le duel ?": "give up the duel?",
          "ce sera une d\xE9faite.": "it will count as a defeat.",
          "continuer la partie": "continue game",
          quitter: "quit",
          "tu as abandonn\xE9.": "you gave up.",
          "monstres envoy\xE9s": "monsters sent",
          "revenu final": "final income",
          "vagues termin\xE9es": "waves completed",
          "retour au salon": "back to lobby",
          "victoire !": "victory!",
          "d\xE9faite\u2026": "defeat\u2026",
          égalité: "draw",
          "les Deux Portes": "the Two Gates",
          "le D\xE9fil\xE9": "the Pass",
          "le Col du Dragon": "the Dragon's Col",
          partenaire: "partner",
          "partenaire pr\xEAt \u25B6": "partner ready \u25B6",
          "connexion perdue avec l'h\xF4te.": "connection lost with the host.",
          "le cristal est tomb\xE9.": "the crystal has fallen.",
          coopération: "co-op",
          continuer: "continue",
          "tu as quitt\xE9 la partie.": "you left the game.",
          "partie termin\xE9e": "game over",
          "\xE9cailles gagn\xE9es": "scales earned",
          "r\xE9ponds dans": "answer within",
          "tu n'as pas r\xE9pondu \xE0 temps.": "you did not answer in time.",
          "cr\xE9er un compte": "create an account",
          "cr\xE9er mon compte": "create my account",
          "se connecter": "log in",
          "mot de passe oubli\xE9": "forgot password",
          profil: "profile",
          amis: "friends",
          "ton code ami": "your friend code",
          "record mode infini": "infinite mode record",
          "se d\xE9connecter": "log out",
          "personne pour l'instant.": "nobody yet.",
          ajouter: "add",
          "mes amis (": "my friends (",
          "demandes re\xE7ues": "requests received",
          "en attente :": "pending:",
          "cr\xE9er un salon": "create a room",
          rejoindre: "join",
          "\xE0 deux sur le m\xEAme terrain.": "two players on the same field.",
          "bient\xF4t disponible.": "coming soon.",
          "jouer contre un bot (test)": "play against a bot (test)",
          "partie en cours": "game in progress",
          "quitter le salon": "leave the room",
          "partie rapide \xB7": "quick match \xB7",
          "recherche d'un joueur\u2026": "searching for a player\u2026",
          "annuler la recherche": "cancel search",
          "joueur trouv\xE9 !": "player found!",
          joueur: "player",
          prêt: "ready",
          "en attente de l'autre joueur\u2026": "waiting for the other player\u2026",
          refuser: "decline",
          "en attente d'un joueur\u2026": "waiting for a player\u2026",
          salon: "room",
          "code \xE0 donner \xE0 ton ami": "code to give your friend",
          "je ne suis plus pr\xEAt": "i am no longer ready",
          "je suis pr\xEAt": "i am ready",
          "lancer la partie": "start the game",
          "tout le monde est pr\xEAt.": "everyone is ready.",
          "abonnement Bastion+": "bastion+ subscription",
          "vitesse \xD7#": "speed \xD7#",
          "d\xE9lai du lancement auto": "auto-launch delay",
          "cadre et titre": "frame and title",
          "abonnement actif": "subscription active",
          résilier: "cancel",
          récupérer: "collect",
          "s'abonner \xB7": "subscribe \xB7",
          gemmes: "gems",
          "voir mes reliques et le coffre": "see my relics and the chest",
          "mode test : +# gemmes": "test mode: +# gems",
          "forge commune": "common Forge",
          "longues-vues": "spyglasses",
          "cristal renforc\xE9": "reinforced Crystal",
          entraînement: "training",
          récupération: "recovery",
          rempart: "rampart",
          "coup critique": "critical Hit",
          "perce-armure": "armor Piercer",
          atelier: "workshop",
          revente: "resale",
          "\u0153il de faucon": "falcon Eye",
          "tir de zone": "area Shot",
          régénération: "regeneration",
          "cristal vengeur": "avenging Crystal",
          "premier sang": "first Blood",
          "incantation rapide": "quick Casting",
          hauteurs: "high Ground",
          "sanctuaire glac\xE9": "frozen Sanctuary",
          "dernier rempart": "last Stand",
          "c\u0153ur du bastion": "heart of the Bastion",
          "tour pas encore d\xE9bloqu\xE9e :": "tower not yet unlocked:",
          "bonus pour toutes les tours": "bonus for all towers",
          "il faut": "you need",
          "maximum atteint": "maximum reached",
          verrouillé: "locked",
          "retire aussi :": "also removes:",
          "pV \xB7 r\xE9compenses \xD7#": "hP \xB7 rewards \xD7#",
          "pV \xB7 r\xE9compenses \xD7": "hP \xB7 rewards \xD7",
          nouveau: "new",
          termine: "finish",
          "lancer le niveau": "start level",
          "meilleur :": "best:",
          reprendre: "resume",
          recommencer: "restart",
          "revoir le tuto": "replay the tutorial",
          "mode infini \xB7": "infinite mode \xB7",
          "quitter et reprendre plus tard": "quit and resume later",
          "abandonner la partie": "give up the game",
          "abandonner le niveau": "give up the level",
          "revoir les r\xE8gles": "review the rules",
          "touche encore : +": "tap again: +",
          "touche encore pour tout effacer": "tap again to erase everything",
          "touche encore pour recommencer": "tap again to restart",
          "difficile +": "hard +",
          "mode infini \xB7 d\xE9part vague": "infinite mode \xB7 starting wave",
          "reprise \xB7 vague": "resume \xB7 wave",
          "\xE9cailles si tu t'arr\xEAtes": "scales if you stop",
          "terminer et r\xE9cup\xE9rer": "finish and collect",
          fantassin: "footman",
          blindé: "armored",
          colosse: "colossus",
          volant: "flying",
          grotte: "cave",
          vitesse: "speed",
          armure: "armor",
          attaque: "attack",
          régénère: "regenerates",
          "pV/s": "hP/s",
          "dans la vague": "in the wave",
          encyclopédie: "encyclopedia",
          "une carte au hasard parmi les": "a random map among the",
          "vagues # \xE0 #": "waves # to #",
          "d\xE8s la vague #": "from wave #",
          "apr\xE8s la vague #, \xE0 chaque vague": "after wave #, every wave",
          "vie des monstres": "monster health",
          "nombre de monstres": "number of monsters",
          "vitesse des monstres": "monster speed",
          "partie en cours :": "game in progress:",
          "nouvelle carte au hasard": "new random map",
          "lancer une carte au hasard": "start a random map",
          "palier de d\xE9part": "starting tier",
          début: "start",
          "tu commences apr\xE8s le palier": "you start after tier",
          "vagues repouss\xE9es": "waves repelled",
          "\xE9cailles de dragon": "dragon scales",
          rejouer: "play again",
          "am\xE9liorer les tours": "upgrade towers",
          "nouveau record !": "new record!",
          "partie abandonn\xE9e": "game abandoned",
          "le cristal est bris\xE9\u2026": "the crystal is shattered\u2026",
          "biome termin\xE9 !": "biome completed!",
          "nouveau biome :": "new biome:",
          "tous les biomes sont termin\xE9s en": "all biomes are completed on",
          "nouvelle tour :": "new tower:",
          "niveau abandonn\xE9": "level abandoned",
          "niveau suivant": "next level",
          "biome suivant :": "next biome:",
          "carte du biome": "biome map",
          "menu principal": "main menu",
          "gemmes (# \xE9toiles)": "gems (# stars)",
          "voici le": "here is the",
          "les monstres sortent des": "the monsters come out of the",
          "ici, tu vois les monstres de la": "here you see the monsters of the",
          "touche maintenant un": "now tap a",
          "le cercle, c'est la": "the circle is the tower's",
          les: "the",
          "touche l'": "tap the",
          tourner: "rotate",
          "pr\xEAt ? Touche": "ready? Tap",
          lancer: "launch",
          ton: "your",
          "dernier conseil : le bouton": "last tip: the",
          "tuto \xB7": "tutorial \xB7",
          suivant: "next",
          "choisir un niveau": "choose a level",
          récompenses: "rewards",
          compétences: "skills",
          "d\xE9lai du lancement auto :": "auto-launch delay:",
          "points de vie du cristal": "crystal health points",
          "vitesse du jeu": "game speed",
          "r\xE9glages et pause": "settings and pause",
          "sort automatique": "auto spell",
          "poser ou retirer des blocs": "place or remove blocks",
          "choisir une tour \xE0 poser": "choose a tower to build",
          "lancer la vague suivante": "launch the next wave",
          "lancement automatique des vagues": "automatic wave launch",
          "r\xE9glage du lancement automatique": "auto-launch settings",
          "r\xE9serv\xE9 \xE0 Bastion+": "reserved for Bastion+",
          "fiche du monstre": "monster sheet",
          "acheter une forme au hasard": "buy a random piece",
          fermer: "close",
          "voir la rang\xE9e du dessus": "see the row above",
          "voir la rang\xE9e du dessous": "see the row below",
          "monstres \xE9limin\xE9s par cette tour": "monsters killed by this tower",
          "d\xE9g\xE2ts inflig\xE9s par cette tour": "damage dealt by this tower",
          "fiche compl\xE8te de la tour": "full tower sheet",
          "change la cible de la tour": "changes the tower's target",
          "abonn\xE9 Bastion+": "bastion+ subscriber",
          "version de test": "test version",
          "modifier ton \xE9quipe": "edit your team",
          "volume de la musique": "music volume",
          "ton pseudo": "your username",
          "code ami ou pseudo": "friend code or username",
          retirer: "remove",
          "code du salon": "room code",
          zoomer: "zoom in",
          dézoomer: "zoom out",
          recentrer: "recenter",
          "passer le tuto": "skip tutorial",
          "mot de passe": "password",
          "pseudo (# \xE0 # caract\xE8res)": "username (# to # characters)",
          "adresse e-mail": "e-mail address",
          connexion: "log in",
          classement: "leaderboard",
          mondial: "world",
          "mes amis": "my friends",
          départ: "start",
          tu: "you",
          "inviter un ami": "invite a friend",
          inviter: "invite",
          renvoyer: "resend",
          "invit\xE9 \u2713": "invited \u2713",
          "invitations re\xE7ues": "received invitations",
          "cr\xE9e d'abord un salon.": "create a room first.",
          "ton salon est d\xE9j\xE0 complet.": "your room is already full.",
          "invitation expir\xE9e.": "invitation expired.",
          "rejoindre le Discord": "join the Discord",
          "exporter ma progression": "export my progress",
          "importer une progression": "import progress",
          exporter: "export",
          importer: "import",
          "copier le code": "copy code",
          "code copi\xE9.": "code copied.",
          "sauvegarde du compte": "account save",
          "sur ton compte": "on your account",
          "sur cet appareil": "on this device",
          "charger la sauvegarde du compte": "load the account save",
          "continuer sans compte": "continue without an account",
          musique: "music",
          langue: "language",
          "termine le biome pr\xE9c\xE9dent": "finish the previous biome",
          histoire: "story",
          "voir les avantages": "see the benefits",
          "boss du biome": "biome boss",
          "d\xE9g\xE2ts +": "damage +",
        },
        s = /\d+(?:[  ]\d{3})*(?:[.,]\d+)?/g,
        a = new Map(Object.entries(e)),
        t = new Map(),
        r = (h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        l = [...a.keys()].filter((h) => h.length >= 2).sort((h, c) => c.length - h.length),
        n = new Map();
      function o(h) {
        const c = [];
        let p = h;
        for (const y of l) {
          if (p.indexOf(y) < 0) continue;
          let b = n.get(y);
          (b ||
            ((b = new RegExp(
              (/^[\p{L}\p{N}]/u.test(y) ? "(?<![\\p{L}\\p{N}\\uE000\\uE001])" : "") +
                r(y) +
                (/\p{L}$/u.test(y) ? "(?=s?(?![\\p{L}]))" : ""),
              "gu",
            )),
            n.set(y, b)),
            (p = p.replace(b, () => (c.push(a.get(y).replace(/\{\d+\}/g, "#")), "\uE000" + (c.length - 1) + "\uE001"))));
        }
        return p.replace(/\uE000(\d+)\uE001/g, (y, b) => c[+b]);
      }
      const d = (h) => (/[  ]/.test(h) ? h.replace(/[  ]/g, ",") : h.replace(",", "."));
      function u(h) {
        const c = /^(\s*)([\s\S]*?)(\s*)$/.exec(h),
          p = c[2];
        if (!/[A-Za-zÀ-ÿ]{2}/.test(p)) return h;
        const y = p.match(s) || [],
          b = p.replace(s, "#"),
          w = a.get(b);
        let T;
        if (
          (w !== void 0 ? (T = w.replace(/#|\{(\d+)\}/g, (M, C) => (C !== void 0 ? (y[+C] !== void 0 ? d(y[+C]) : "") : ""))) : (T = o(b)),
          (w !== void 0 && !/\{\d+\}/.test(w)) || w === void 0)
        ) {
          let M = 0;
          T = T.replace(/#|\u0001/g, () => (y[M] !== void 0 ? d(y[M++]) : "#"));
        } else T = T.replace(/\u0001/g, "#");
        return c[1] + T + c[3];
      }
      return (h) => {
        if (!h) return h;
        let c = t.get(h);
        return (c === void 0 && ((c = u(h)), t.size > 4e3 && t.clear(), t.set(h, c)), c);
      };
    })();
    if (ws === "en") {
      const e = ["title", "aria-label", "placeholder"],
        s = (a) => {
          if (a.nodeType === 3) {
            const t = a.parentNode;
            if (t && /^(SCRIPT|STYLE|TEXTAREA)$/.test(t.nodeName)) return;
            const r = a.data;
            if (a.__t === r) return;
            const l = Is(r);
            (l !== r && (a.data = l), (a.__t = a.data));
          } else if (a.nodeType === 1) {
            for (const t of e) {
              const r = a.getAttribute(t);
              if (r) {
                const l = Is(r);
                l !== r && a.setAttribute(t, l);
              }
            }
            for (let t = a.firstChild; t; t = t.nextSibling) s(t);
          }
        };
      new MutationObserver((a) => {
        for (const t of a)
          if (t.type === "childList") t.addedNodes.forEach(s);
          else if (t.type === "characterData") s(t.target);
          else if (t.target.getAttribute) {
            const r = t.target.getAttribute(t.attributeName);
            if (r) {
              const l = Is(r);
              l !== r && t.target.setAttribute(t.attributeName, l);
            }
          }
      }).observe(document.documentElement, { childList: !0, subtree: !0, characterData: !0, attributes: !0, attributeFilter: e });
      {
        const a = CanvasRenderingContext2D.prototype;
        for (const t of ["fillText", "strokeText", "measureText"]) {
          const r = a[t];
          a[t] = function (l, ...n) {
            return r.call(this, typeof l == "string" ? Is(l) : l, ...n);
          };
        }
      }
      try {
        ((document.title = Is(document.title)), s(document.body));
      } catch {}
    }
    document.addEventListener("click", (e) => {
      const s = e.target.closest && e.target.closest("[data-lang]");
      if (s) {
        try {
          localStorage.setItem(tn, s.dataset.lang);
        } catch {}
        location.reload();
      }
    });
    const Ar = () =>
        `<div class="langrow"><button class="btn small${ws === "fr" ? " go" : ""}" data-lang="fr">\u{1F310} Fran\xE7ais</button><button class="btn small${ws === "en" ? " go" : ""}" data-lang="en">\u{1F310} English</button></div>`,
      Y = (e) => document.querySelector(e),
      $ = 30,
      Re = 18,
      et = 24,
      de = Re * $,
      ge = et * $,
      Be = Re * et,
      Q = "#2f1d12",
      De = Y("#game"),
      f = De.getContext("2d"),
      Qt = Y("#stage"),
      $t = Y("#panel"),
      xs = Y("#power"),
      Rr = matchMedia("(prefers-reduced-motion: reduce)").matches,
      Lt = [
        [
          "#####AA#####",
          "#..........#",
          "#.t......t.#",
          "#..........#",
          "#.hh#..#hh.#",
          "#..........#",
          "#..........#",
          "#t....w....#",
          "#..........#",
          "#.#tt.##tt.#",
          "#..........#",
          "#..........#",
          "#.h......h.#",
          "#..........#",
          "#.t..XX..t.#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "############",
          "B..........#",
          "B..........#",
          "#.h........#",
          "#hhh#h.hhh.#",
          "#..........#",
          "#........h.#",
          "#.hhh..hhhh#",
          "#..........#",
          "#.h........#",
          "#hhh.hh..hh#",
          "#..........#",
          "#......h...#",
          "#.##.......#",
          "#.......XX.#",
          "#.h.....XX.#",
          "#..........#",
          "############",
        ],
        [
          "##AA########",
          "#..........#",
          "#.b......b.#",
          "#..........#",
          "#..........C",
          "#..........C",
          "#bb..#bb..b#",
          "#..........#",
          "#.t.....h..#",
          "#..........#",
          "#.hh.##..hh#",
          "#..........#",
          "#.b...XX...#",
          "#.....XX.t.#",
          "#..........#",
          "#.##.b..##.#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#.t......t.#",
          "#..........#",
          "B.tt#..#tt.#",
          "B..........#",
          "#..........#",
          "#..........#",
          "#~~..~~~..~#",
          "#~~..~~~..~#",
          "#..........#",
          "#.t.......t#",
          "#.##h..h##.#",
          "#..........#",
          "#....XX....#",
          "#.t..XX..t.#",
          "#..........#",
          "############",
        ],
        [
          "########AA##",
          "#..........#",
          "#.w........#",
          "#..........#",
          "#sss.ss..ss#",
          "#..........C",
          "#..........C",
          "#.b..s.....#",
          "#ss..ssss.s#",
          "#..........#",
          "#.......b..#",
          "#s.sss..sss#",
          "#..........#",
          "#.XX.....w.#",
          "#.XX.......#",
          "#..........#",
          "#..b....b..#",
          "############",
        ],
        [
          "############",
          "#....XX....#",
          "#....XX....#",
          "#.t......t.#",
          "#tt#..h.#tt#",
          "#..........#",
          "B..........C",
          "B..........C",
          "#..........#",
          "#h#tt..tt#h#",
          "#..........#",
          "#..........#",
          "#.t..hh..t.#",
          "#..........#",
          "#..........#",
          "#.h......h.#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#.h......h.#",
          "#..........#",
          "B..........C",
          "B..........C",
          "#tt.##..##.#",
          "#..........#",
          "#.h.....h..#",
          "#..........#",
          "#.##tt.##t.#",
          "#..........#",
          "#..........#",
          "#h.##..##.h#",
          "#....XX....#",
          "#.t..XX..t.#",
          "#..........#",
          "############",
        ],
        [
          "#AA######CC#",
          "#..........#",
          "#.b......b.#",
          "#..........#",
          "#ss..s~~s..#",
          "B..........#",
          "B..........#",
          "#.b.....b..#",
          "#..ss~~ss..#",
          "#..........#",
          "#..........#",
          "#ss.~~ss.ss#",
          "#..........#",
          "#.b.......b#",
          "#.......XX.#",
          "#.s.....XX.#",
          "#..........#",
          "############",
        ],
        [
          "####AAAA####",
          "#..........#",
          "#.n......n.#",
          "B..........C",
          "B..........C",
          "#b##..##..b#",
          "#..........#",
          "#.n......n.#",
          "#..........#",
          "#.##b..b##.#",
          "#..........#",
          "#~~..~~..~~#",
          "#..........#",
          "#.n..XX..n.#",
          "#....XX....#",
          "#.b......b.#",
          "#..........#",
          "############",
        ],
      ],
      Pt = [
        [
          "#####AA#####",
          "#....dd....#",
          "#.t..dd..t.#",
          "#....dd....#",
          "#t##.dd###t#",
          "#....dd....#",
          "#....dd....#",
          "#h...dd...h#",
          "#.###dd##..#",
          "#....dd....#",
          "#..........#",
          "#t#t.dd.t#t#",
          "#....dd....#",
          "#....dd....#",
          "#.t..XX..t.#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#.t......t.#",
          "#..........#",
          "B.hh#..#hh.#",
          "B..........#",
          "#..........#",
          "#~~..~~~..~#",
          "#~~..~~~..~#",
          "#.s.cccc.s.#",
          "#ss.c##c.ss#",
          "#...cccc...#",
          "#.b.cccc.b.#",
          "#...cccc...#",
          "#.s.cXXc.s.#",
          "#...cXXc...#",
          "#...cccc...#",
          "############",
        ],
        [
          "##AA########",
          "#..........#",
          "#.t...h..t.#",
          "#..........C",
          "#....t.....C",
          "#~~~~..~~~~#",
          "#~~~~dd~~~~#",
          "#ssss..ssss#",
          "#.cccccccc.#",
          "#.ss.f..ss.#",
          "#.cccccccc.#",
          "#s.ssc.ss.s#",
          "#...cccc...#",
          "#.b.cccc.b.#",
          "#...cXXc...#",
          "#.f.cXXc.f.#",
          "#...cccc...#",
          "############",
        ],
        [
          "####AA######",
          "#..........#",
          "#.h......w.#",
          "#..........#",
          "B..........#",
          "B..........#",
          "#ss.bbs.sss#",
          "#..........#",
          "#.h.....h..#",
          "#..........#",
          "#s.sshh.ss.#",
          "#..........#",
          "#..........#",
          "#bb.s..s.bb#",
          "#....XX....#",
          "#.h..XX..b.#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#.p......p.#",
          "B..........C",
          "B..........C",
          "#.###..###.#",
          "#..........#",
          "#.f......f.#",
          "#..........#",
          "##.###.###.#",
          "#..........#",
          "#..........#",
          "#.p.##.##p.#",
          "#..........#",
          "#.p..XX..p.#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "######AA####",
          "#..........#",
          "#.a..f...a.#",
          "#..........#",
          "B..........#",
          "B..........#",
          "#ssa.ss.ass#",
          "#..........#",
          "#.f......f.#",
          "#..........#",
          "#a.ss.fss.a#",
          "#..........#",
          "#..........#",
          "#.f.s..s.f.#",
          "#....XX....#",
          "#.a..XX..a.#",
          "#..........#",
          "############",
        ],
        [
          "#AA######CC#",
          "#..........#",
          "#.p..rr..p.#",
          "#....rr....#",
          "#kkk.rr.kkk#",
          "B....rr....#",
          "B....rr....#",
          "#.p..rr..p.#",
          "#....rr....#",
          "#.kkkrr.kk.#",
          "#....rr....#",
          "#....rr....#",
          "#pkk.rr.kkp#",
          "#....rr....#",
          "#.f..XX..f.#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#.##.##.##.#",
          "#..........#",
          "B.~~....~~.C",
          "B..........C",
          "#.#..##..#.#",
          "#.#......#.#",
          "#....~~....#",
          "#.##.##.##.#",
          "#..........#",
          "#.f.#..#.f.#",
          "#...#..#...#",
          "#..........#",
          "#.##.XX.##.#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "####AAAA####",
          "#...rrrr...#",
          "#.p.rrrr.p.#",
          "B...rrrr...C",
          "B.f.rrrr.f.C",
          "#pkp.rr.pkp#",
          "#...rrrr...#",
          "#.p.rrrr.p.#",
          "#...rrrr...#",
          "#.kkk..kkk.#",
          "#...rrrr...#",
          "#.p.rrrr.p.#",
          "#ffp.rr.pff#",
          "#...rXXr...#",
          "#.p.rXXr.p.#",
          "#...rrrr...#",
          "#.p..oo..p.#",
          "############",
        ],
      ],
      Ct = [
        [
          "#####AA#####",
          "#cccccccccc#",
          "#cccccccccc#",
          "#cccbcccccc#",
          "#b#c##f#ccc#",
          "#cccccccccc#",
          "#cccccccccc#",
          "#..........#",
          "#s...#bbs#s#",
          "#..........#",
          "#b.........#",
          "#sb...#...##",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#f......m..#",
          "#####bb##..#",
          "B....b.....#",
          "B.........m#",
          "#........m.#",
          "#####.m.#fb#",
          "#..........#",
          "#..........#",
          "#..........#",
          "#b###.bb.b.#",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#AA#########",
          "#b.....b.b.#",
          "#..........#",
          "#..m.......#",
          "#m...#b##m#B",
          "#.....b....B",
          "#..........#",
          "#....m.....#",
          "###....b####",
          "#..........#",
          "#..........#",
          "#..b..######",
          "#..........#",
          "#.....XX...#",
          "#.....XX...#",
          "#..........#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#..........#",
          "#..........#",
          "#u.#m...mmm#",
          "#..........#",
          "#~~.......u#",
          "B~~...~~..m#",
          "B.....~~...#",
          "#...u..~~..#",
          "#......~~..#",
          "###..##...##",
          "#..........#",
          "#..........#",
          "#u...XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#.........y#",
          "##....#u#u##",
          "#.......~~.B",
          "#.....u.~~.B",
          "#..........#",
          "#y.#.##u##u#",
          "#...y......#",
          "#..........#",
          "#..........#",
          "###...uuy#y#",
          "#..........#",
          "#..........#",
          "#....XX...u#",
          "#....XX....#",
          "#y.........#",
          "############",
        ],
        [
          "############",
          "#...y......#",
          "#..........#",
          "#m#mm....#.#",
          "A...~~.....B",
          "A...~~.....B",
          "#..........#",
          "#yy#m...####",
          "#...m......#",
          "#..........#",
          "#..........#",
          "#.#y.....#m#",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#....j.....#",
          "#..jj#.##.##",
          "B..........C",
          "B.j........C",
          "#.....j..m.#",
          "#..........#",
          "#j..j#mj#j##",
          "#..........#",
          "#.........j#",
          "#....#jjmm##",
          "#..j.......#",
          "#..........#",
          "#.j..XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#AA######BB#",
          "#j.........#",
          "#..........#",
          "#......j...#",
          "#jyjy....m.#",
          "#..m.....~~#",
          "#..~~~~..~~#",
          "C..~~~~..y.#",
          "C...j...mym#",
          "#........~~#",
          "#........~~#",
          "##..###..###",
          "#..........#",
          "#..........#",
          "#....XX...y#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "####AAAA####",
          "#...j......#",
          "#v.........#",
          "#....#v#vv##",
          "B...~......C",
          "B.v.~......C",
          "#..........#",
          "#..#...#vj##",
          "#..........#",
          "#......v...#",
          "##v#j.#.j###",
          "#.j........#",
          "#........j.#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "#..........#",
          "############",
        ],
      ],
      qt = [
        [
          "#####AA#####",
          "#iiiiiiiiii#",
          "#iimiiiiiii#",
          "#iiiiiiiiii#",
          "#iii#qqm#m##",
          "#iiiqiiiiii#",
          "#iiiiiiiiiq#",
          "#iiiiiiiiii#",
          "##m#q..##..#",
          "#q.........#",
          "#..........#",
          "#####..###.#",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#......s...#",
          "#..........#",
          "##s.#q##..##",
          "B.......s..#",
          "B..s..qs...#",
          "#..........#",
          "###q....s###",
          "#..........#",
          "#..........#",
          "#..........#",
          "##qq.####..#",
          "#........s.#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#AA#########",
          "#..........#",
          "#..........#",
          "#..........#",
          "#xq...#####B",
          "#..q.....q.B",
          "#.....x....#",
          "#.....x....#",
          "#q...#...###",
          "#..........#",
          "#..........#",
          "#..###.....#",
          "#.q.......q#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..q.......#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#........l.#",
          "#.....l....#",
          "#...#...lll#",
          "#..........#",
          "#....~~....#",
          "B....~~....#",
          "B...~~.....#",
          "#...~~.....#",
          "#...~~...l.#",
          "####....#.l#",
          "#........l.#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#l.........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#..........#",
          "###...#.####",
          "#.....l....B",
          "#....n.....B",
          "#..........#",
          "#b.b###..b##",
          "#...l......#",
          "#..........#",
          "#..........#",
          "#nl#b.....l#",
          "#.......n..#",
          "#..........#",
          "#....XX...b#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "############",
          "#..........#",
          "#..........#",
          "#.###pgg.#p#",
          "A....p.....B",
          "A..........B",
          "#.p........#",
          "###pp...gg##",
          "#..........#",
          "#..........#",
          "#..........#",
          "#..g#gpp...#",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#....XX...p#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#........x.#",
          "##g#..#g####",
          "B.........qC",
          "B.....q....C",
          "#..........#",
          "#..........#",
          "##q.###x..##",
          "#...q......#",
          "#..........#",
          "##x.#...gx##",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#.g..XX....#",
          "#..........#",
          "############",
        ],
        [
          "#AA######BB#",
          "#..........#",
          "#..........#",
          "#....q.....#",
          "##q...####q#",
          "#.........q#",
          "#..........#",
          "C..........#",
          "Cx..###..xx#",
          "#.x..~~....#",
          "#....~~....#",
          "##..x#q#x###",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#..q.XX....#",
          "#........x.#",
          "############",
        ],
        [
          "####AAAA####",
          "#......g...#",
          "#..........#",
          "#.....x#gpp#",
          "B..........C",
          "B..........C",
          "#..........#",
          "##...g#..gx#",
          "#..........#",
          "#p........g#",
          "#..g.#####.#",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "#..........#",
          "############",
        ],
      ],
      At = [
        [
          "#####AA#####",
          "#exeeeeeeee#",
          "#eeeeeeeeee#",
          "#eeeeeeeeee#",
          "###eemmemm##",
          "#eeeeeeeeee#",
          "#eeeeeeeeee#",
          "#meeexeeeee#",
          "#x##xmx..#.#",
          "#.x........#",
          "#..........#",
          "#..x#m.m..##",
          "#.........m#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#.......m..#",
          "#........~~#",
          "#....m...~~#",
          "B#m#...x####",
          "B.~~..~~...#",
          "#.~~..~~...#",
          "#..........#",
          "#.##.#xxx.##",
          "#......~~..#",
          "#......~~..#",
          "#.....m##m##",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#AA#########",
          "#..........#",
          "#..........#",
          "#t#t#t#t..##",
          "#..txx.....B",
          "#..........B",
          "#.........t#",
          "#.##.ttt####",
          "#....t...~~#",
          "#........~~#",
          "#..........#",
          "###...tx.#.#",
          "#..........#",
          "#.x........#",
          "#..x.XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#...x......#",
          "#..~~~..~~~#",
          "#..~~~..~~~#",
          "#..##x.x...#",
          "#..........#",
          "#~~~.......#",
          "B~~~.....x.#",
          "B.......~~~#",
          "#..~~~.x~~~#",
          "#..~~~.....#",
          "#x####..#.##",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#.v........#",
          "#mm...v#v.##",
          "#~~........B",
          "#~~.~~..m..B",
          "#...~~.....#",
          "#v.......###",
          "#....v.....#",
          "#..........#",
          "#..........#",
          "##mv...v.#v#",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "############",
          "#..x.......#",
          "#.........v#",
          "#.#...##vxx#",
          "A.........xB",
          "A.....~~...B",
          "#.....~~.v.#",
          "#vv####..###",
          "#..~~......#",
          "#..~~......#",
          "#..........#",
          "#.v#x#....##",
          "#..........#",
          "#..........#",
          "#....XX....#",
          "#....XX....#",
          "#.x.....x..#",
          "############",
        ],
        [
          "#####AA#####",
          "#..........#",
          "#..........#",
          "#.##.z#...z#",
          "B....~~....C",
          "B....~~....C",
          "#..........#",
          "#..........#",
          "##zz..z#z#.#",
          "#..........#",
          "#..........#",
          "#....yz##z##",
          "#..........#",
          "#..........#",
          "#....XX..z.#",
          "#....XX....#",
          "#y.........#",
          "############",
        ],
        [
          "#AA######BB#",
          "#..........#",
          "#~~....z...#",
          "#~~........#",
          "####m#..##.#",
          "#...~~.....#",
          "#...~~...~~#",
          "C......m.~~#",
          "Cz.zx...#mz#",
          "#m~~....~~.#",
          "#.~~....~~.#",
          "##xx#z..zxx#",
          "#..........#",
          "#..........#",
          "#....XX.x..#",
          "#....XX....#",
          "#..........#",
          "############",
        ],
        [
          "####AAAA####",
          "#..........#",
          "#..........#",
          "###z#...#.##",
          "B......~~..C",
          "B...v..~~..C",
          "#z.........#",
          "#.....v#####",
          "#z...~~.~~.#",
          "#....~~.~~.#",
          "##..x#xvx###",
          "#..........#",
          "#.........z#",
          "#....XX....#",
          "#....XX....#",
          "#..........#",
          "#..........#",
          "############",
        ],
      ],
      ue = [
        {
          id: "plaine",
          tier: 0,
          name: "La Plaine de Verval",
          intro:
            "Le seigneur de guerre Varek et son arm\xE9e envahissent la plaine. Les fermes tombent une \xE0 une, et le cristal est leur prochaine cible.",
          roster: { gob: "bandit", loup: "rider", orc: "soldier", troll: "knight", wyv: "hawk", dragon: "captain", drake: "warlord" },
          levels: [
            {
              name: "La ferme du vallon",
              story: "Une bande de brigands sort des haies. Ils en veulent au cristal de la ferme.",
              th: {
                g: ["#86d05a", "#7cc850"],
                tuft: "#5aa83c",
                fl: 0.15,
                flc: ["#ff6f91", "#ffffff", "#ffe066", "#9fd3ff"],
                wall: "hedge",
                deco: "none",
                amb: "petals",
                tint: null,
              },
              map: Lt[0],
              waves: 6,
            },
            {
              name: "Les champs de bl\xE9",
              story: "Les brigands reviennent, plus nombreux. Des cavaliers galopent \xE0 travers les bl\xE9s.",
              th: {
                g: ["#b5d35a", "#a8c950"],
                edge: "#4a7a2a",
                tuft: "#c9a23a",
                fl: 0.05,
                flc: ["#ffe066", "#ffffff"],
                wall: "hedge",
                deco: "wheat",
                amb: "none",
                tint: null,
              },
              map: Lt[1],
              waves: 6,
            },
            {
              name: "Le vieux moulin",
              story: "Des soldats portent les couleurs de Varek. Ce n'est plus une simple bande de voleurs.",
              th: {
                g: ["#9fd060", "#95c757"],
                tuft: "#6aa83c",
                fl: 0.06,
                flc: ["#ffffff", "#ffe066"],
                wall: "hedge",
                deco: "hay",
                amb: "none",
                tint: null,
              },
              map: Lt[2],
              waves: 7,
            },
            {
              name: "Le gu\xE9 du ruisseau",
              story: "L'arm\xE9e traverse le ruisseau par les gu\xE9s. Il faut tenir la rive.",
              th: {
                g: ["#7cc06a", "#72b660"],
                tuft: "#4f9a45",
                fl: 0.04,
                flc: ["#9fd3ff", "#ffffff"],
                wall: "rock",
                rock: ["#a0a4b4", "#787c8e"],
                moss: 1,
                deco: "reeds",
                amb: "none",
                tint: "rgba(120,150,190,.06)",
              },
              map: Lt[3],
              waves: 7,
            },
            {
              name: "La route du village",
              story: "Les soldats marchent sur le village. Ses murets de pierre sont ta meilleure d\xE9fense.",
              th: {
                g: ["#8fc260", "#86b858"],
                tuft: "#5f9a42",
                fl: 0.03,
                flc: ["#ffffff"],
                wall: "ruin",
                rock: ["#e0d3b8", "#b3a387"],
                deco: "stones",
                amb: "none",
                tint: "rgba(255,210,140,.06)",
              },
              map: Lt[4],
              waves: 8,
            },
            {
              name: "Le soir sur la plaine",
              story: "Le soleil se couche. Des faucons de guerre tournent au-dessus des champs.",
              th: {
                g: ["#a6c45a", "#9cba52"],
                tuft: "#7a8f3a",
                fl: 0.03,
                flc: ["#ffb36b"],
                wall: "hedge",
                tree: "#e0913a",
                edge: "#4f6a2a",
                deco: "hay",
                amb: "none",
                tint: "rgba(255,120,60,.18)",
              },
              map: Lt[5],
              waves: 8,
            },
            {
              name: "Les champs pi\xE9tin\xE9s",
              story: "L'arm\xE9e a tout pi\xE9tin\xE9 et br\xFBl\xE9 les meules. La fum\xE9e cache l'horizon.",
              th: {
                g: ["#a9b067", "#9fa65e"],
                tuft: "#7f7f45",
                fl: 0,
                flc: [],
                wall: "hedge",
                hedgeDry: 1,
                tree: "#9a9a48",
                edge: "#5a5a32",
                deco: "burnt",
                amb: "smoke",
                tint: "rgba(120,90,60,.16)",
              },
              map: Lt[6],
              waves: 9,
            },
            {
              name: "La nuit du si\xE8ge",
              story: "Les feux du camp ennemi brillent dans la nuit. Les chevaliers chargent vers le cristal.",
              th: {
                g: ["#6fa65a", "#679d53"],
                tuft: "#4a7a3c",
                fl: 0,
                flc: [],
                wall: "ruin",
                rock: ["#b8b0c4", "#8a8299"],
                deco: "torches",
                amb: "fireflies",
                tint: "rgba(20,30,90,.32)",
                night: 1,
              },
              map: Lt[7],
              waves: 10,
            },
            {
              name: "Le camp de Varek",
              story: "Le seigneur de guerre Varek sort de sa tente. Bats-le pour lib\xE9rer la plaine.",
              boss: 1,
              th: {
                g: ["#689a52", "#60914b"],
                tuft: "#44703a",
                fl: 0,
                flc: [],
                wall: "palisade",
                deco: "torches",
                amb: "fireflies",
                tint: "rgba(30,20,80,.34)",
                night: 1,
              },
              map: Lt[8],
              waves: 12,
            },
          ],
        },
        {
          id: "chateau",
          tier: 1,
          name: "Le Ch\xE2teau de Corvin",
          intro:
            "Les derniers soldats de Varek se replient dans le ch\xE2teau du baron Corvin. Il faut quitter la plaine et entrer dans la forteresse.",
          roster: {
            gob: "guard",
            loup: "hound",
            orc: "manatarms",
            troll: "blackknight",
            wyv: "bat",
            dragon: "executioner",
            drake: "baron",
          },
          levels: [
            {
              name: "La route du ch\xE2teau",
              story: "Varek est vaincu. Ses soldats fuient vers le ch\xE2teau du baron. La route quitte la plaine.",
              th: {
                g: ["#9fd060", "#95c757"],
                tuft: "#6aa83c",
                fl: 0.05,
                flc: ["#ffffff", "#ffe066"],
                wall: "hedge",
                deco: "none",
                amb: "none",
                tint: "rgba(255,220,160,.05)",
              },
              map: Pt[0],
              waves: 7,
            },
            {
              name: "Les douves",
              story: "Le ch\xE2teau se dresse devant toi. Des gardes patrouillent le long des douves.",
              th: {
                g: ["#8cc65c", "#83bd54"],
                tuft: "#5f9a42",
                fl: 0.03,
                flc: ["#ffffff"],
                wall: "hedge",
                rock: ["#c9c2d4", "#9c94aa"],
                deco: "reeds",
                amb: "none",
                tint: null,
              },
              map: Pt[1],
              waves: 7,
            },
            {
              name: "Le pont-levis",
              story: "Le pont-levis est baiss\xE9. Force l'entr\xE9e sans laisser tomber le cristal.",
              th: {
                g: ["#86bd58", "#7db450"],
                tuft: "#5a9440",
                fl: 0.02,
                flc: ["#ffffff"],
                wall: "ruin",
                rock: ["#c9c2d4", "#9c94aa"],
                deco: "none",
                amb: "none",
                tint: "rgba(120,130,160,.06)",
              },
              map: Pt[2],
              waves: 8,
            },
            {
              name: "La basse-cour",
              story: "\xC9curies, puits et chiens de garde : la cour du ch\xE2teau se r\xE9veille.",
              th: {
                g: ["#cfc6b2", "#c6bda9"],
                floor: "cobble",
                edgeStyle: "wall",
                wall: "ruin",
                rock: ["#c9c2d4", "#9c94aa"],
                deco: "none",
                amb: "none",
                tint: null,
              },
              map: Pt[3],
              waves: 8,
            },
            {
              name: "Les remparts",
              story: "Sur le chemin de ronde, le vent siffle. Des chauves-souris quittent les tours.",
              th: {
                g: ["#bdb7c8", "#b4aebf"],
                floor: "flag",
                edgeStyle: "wall",
                wall: "ruin",
                rock: ["#d6d0e0", "#a49cb4"],
                deco: "none",
                amb: "dust",
                tint: "rgba(150,180,230,.1)",
              },
              map: Pt[4],
              waves: 9,
            },
            {
              name: "La forge",
              story: "Les forgerons du baron \xE9quipent ses chevaliers noirs. Les braises volent.",
              th: {
                g: ["#7d6c63", "#75645b"],
                floor: "flag",
                edgeStyle: "wall",
                wall: "ruin",
                rock: ["#9a8a8a", "#6e6262"],
                deco: "none",
                amb: "embers",
                tint: "rgba(255,120,40,.14)",
              },
              map: Pt[5],
              waves: 9,
            },
            {
              name: "La grande salle",
              story: "Les tables du festin sont renvers\xE9es. La garde du baron t'attend.",
              th: {
                g: ["#b8814a", "#ae7843"],
                floor: "wood",
                edgeStyle: "wall",
                wall: "ruin",
                rock: ["#c9c2d4", "#9c94aa"],
                deco: "none",
                amb: "dust",
                tint: "rgba(255,190,110,.08)",
              },
              map: Pt[6],
              waves: 10,
            },
            {
              name: "Les cachots",
              story: "Sous le ch\xE2teau, l'eau suinte des murs. Le bourreau r\xF4de dans le noir.",
              th: {
                g: ["#646b75", "#5e656f"],
                floor: "dungeon",
                edgeStyle: "wall",
                wall: "ruin",
                rock: ["#8a8f9e", "#5f6474"],
                deco: "none",
                amb: "none",
                tint: "rgba(20,40,70,.3)",
                night: 1,
              },
              map: Pt[7],
              waves: 10,
            },
            {
              name: "La salle du tr\xF4ne",
              story: "Le baron Corvin se l\xE8ve de son tr\xF4ne. C'est lui qui a arm\xE9 Varek.",
              boss: 1,
              th: {
                g: ["#9a8cb0", "#9185a8"],
                floor: "flag",
                edgeStyle: "wall",
                wall: "ruin",
                rock: ["#d8cfe6", "#a497bc"],
                deco: "none",
                amb: "dust",
                tint: "rgba(90,30,110,.16)",
                vig: 1,
              },
              map: Pt[8],
              waves: 12,
            },
          ],
        },
        {
          id: "grotte",
          tier: 2,
          name: "Les Grottes de Morn",
          intro:
            "Sous le ch\xE2teau, un passage descend dans la roche. Les cr\xE9atures des profondeurs se r\xE9veillent et gardent le chemin.",
          roster: { gob: "kobold", loup: "spider", orc: "golem", troll: "ogre", wyv: "bat", dragon: "basilisk", drake: "queen" },
          levels: [
            {
              name: "La sortie des cachots",
              story: "Les derniers pav\xE9s du ch\xE2teau laissent place \xE0 la roche brute. Des kobolds r\xF4dent dans le noir.",
              th: {
                g: ["#6c6476", "#665e70"],
                floor: "cave",
                edgeStyle: "cave",
                wall: "rock",
                rock: ["#8a8299", "#5f5870"],
                deco: "none",
                amb: "dust",
                tint: "rgba(20,10,40,.18)",
                vig: 1,
              },
              map: Ct[0],
              waves: 7,
            },
            {
              name: "Les galeries",
              story: "Des torches \xE9teintes jalonnent les galeries. Des araign\xE9es filent entre les rochers.",
              th: {
                g: ["#6a6270", "#645c6a"],
                floor: "cave",
                edgeStyle: "cave",
                wall: "rock",
                rock: ["#8a8299", "#5f5870"],
                deco: "none",
                amb: "dust",
                tint: "rgba(20,10,40,.22)",
                vig: 1,
              },
              map: Ct[1],
              waves: 7,
            },
            {
              name: "La mine abandonn\xE9e",
              story: "Des wagonnets rouill\xE9s et des tonneaux oubli\xE9s. Les golems gardent les filons.",
              th: {
                g: ["#71655a", "#6b5f54"],
                floor: "cave",
                edgeStyle: "cave",
                wall: "rock",
                rock: ["#9a8a7a", "#6e6050"],
                deco: "none",
                amb: "dust",
                tint: "rgba(40,20,10,.2)",
                vig: 1,
              },
              map: Ct[2],
              waves: 8,
            },
            {
              name: "Le lac souterrain",
              story: "Une eau noire et immobile. Quelque chose bouge \xE0 la surface.",
              th: {
                g: ["#5c6878", "#566272"],
                floor: "cave",
                edgeStyle: "cave",
                wall: "rock",
                rock: ["#7f8aa0", "#56607a"],
                deco: "none",
                amb: "none",
                tint: "rgba(10,30,60,.24)",
                vig: 1,
              },
              map: Ct[3],
              waves: 8,
            },
            {
              name: "La for\xEAt de champignons",
              story: "Des champignons g\xE9ants brillent dans l'obscurit\xE9. Leurs spores flottent dans l'air.",
              th: {
                g: ["#5a5070", "#544a6a"],
                floor: "cave",
                edgeStyle: "cave",
                wall: "rock",
                rock: ["#7a6e96", "#544a70"],
                deco: "none",
                amb: "spores",
                tint: "rgba(40,10,60,.2)",
                vig: 1,
              },
              map: Ct[4],
              waves: 9,
            },
            {
              name: "La caverne de cristal",
              story: "Des cristaux bleus \xE9clairent la caverne. Leur lumi\xE8re attire les ogres.",
              th: {
                g: ["#4e5a78", "#485472"],
                floor: "cave",
                edgeStyle: "cave",
                wall: "rock",
                rock: ["#7a8ab0", "#52607e"],
                deco: "none",
                amb: "dust",
                tint: "rgba(40,90,180,.14)",
                vig: 1,
              },
              map: Ct[5],
              waves: 9,
            },
            {
              name: "Les toiles",
              story: "Des toiles couvrent les parois. Il ne faut pas r\xE9veiller ce qui les a tiss\xE9es.",
              th: {
                g: ["#5e5866", "#585260"],
                floor: "cave",
                edgeStyle: "cave",
                wall: "rock",
                rock: ["#8a8496", "#5e586a"],
                deco: "none",
                amb: "dust",
                tint: "rgba(30,20,30,.28)",
                vig: 1,
              },
              map: Ct[6],
              waves: 10,
            },
            {
              name: "Le gouffre",
              story: "Le sol s'ouvre sur un vide sans fond. Le basilic remonte des profondeurs.",
              th: {
                g: ["#4a4458", "#443e52"],
                floor: "cave",
                edgeStyle: "cave",
                wall: "rock",
                rock: ["#6e6888", "#4a4460"],
                deco: "none",
                liquid: "abyss",
                amb: "none",
                tint: "rgba(10,0,30,.32)",
                night: 1,
              },
              map: Ct[7],
              waves: 10,
            },
            {
              name: "Le nid de la reine",
              story: "La reine araign\xE9e garde ses \u0153ufs. Il faut la vaincre pour revoir le jour.",
              boss: 1,
              th: {
                g: ["#4e4250", "#483c4a"],
                floor: "cave",
                edgeStyle: "cave",
                wall: "rock",
                rock: ["#7a6a80", "#54465a"],
                deco: "none",
                amb: "spores",
                tint: "rgba(50,0,40,.3)",
                night: 1,
              },
              map: Ct[8],
              waves: 12,
            },
          ],
        },
        {
          id: "desert",
          tier: 3,
          name: "Le D\xE9sert d'Ambre",
          intro: "Au bout des grottes, la lumi\xE8re revient : un d\xE9sert br\xFBlant s'\xE9tend jusqu'aux montagnes du dragon.",
          roster: { gob: "raider", loup: "hyena", orc: "scorpion", troll: "sandgolem", wyv: "vulture", dragon: "mummy", drake: "worm" },
          levels: [
            {
              name: "Le bout du tunnel",
              story: "La roche laisse place au sable. Des pillards guettent la sortie des grottes.",
              th: {
                g: ["#e8c27a", "#e0b970"],
                floor: "sand",
                edgeStyle: "dune",
                wall: "rock",
                rock: ["#d29a62", "#a8703e"],
                deco: "none",
                amb: "none",
                tint: "rgba(255,220,150,.06)",
              },
              map: qt[0],
              waves: 7,
            },
            {
              name: "Le canyon rouge",
              story: "Les parois du canyon br\xFBlent au soleil. Les hy\xE8nes chassent en meute.",
              th: {
                g: ["#e2b06a", "#daa762"],
                floor: "sand",
                edgeStyle: "dune",
                wall: "rock",
                rock: ["#c9744a", "#9a5230"],
                deco: "none",
                amb: "none",
                tint: "rgba(255,140,80,.08)",
              },
              map: qt[1],
              waves: 7,
            },
            {
              name: "Les dunes",
              story: "Le vent sculpte les dunes. Des scorpions g\xE9ants s'y enfouissent.",
              th: {
                g: ["#f0cc84", "#e8c47a"],
                floor: "sand",
                edgeStyle: "dune",
                wall: "rock",
                rock: ["#d8a56a", "#ae7c46"],
                deco: "none",
                amb: "sand",
                tint: null,
              },
              map: qt[2],
              waves: 8,
            },
            {
              name: "L'oasis",
              story: "Une oasis, enfin. Mais l'eau attire aussi les monstres.",
              th: {
                g: ["#e6c47e", "#dfbc74"],
                floor: "sand",
                edgeStyle: "dune",
                wall: "rock",
                rock: ["#d8a56a", "#ae7c46"],
                deco: "none",
                amb: "none",
                tint: null,
              },
              map: qt[3],
              waves: 8,
            },
            {
              name: "La caravane pill\xE9e",
              story: "Les tentes de la caravane sont vides. Les vautours tournent au-dessus.",
              th: {
                g: ["#e8c27a", "#e0b970"],
                floor: "sand",
                edgeStyle: "dune",
                wall: "rock",
                rock: ["#d8a56a", "#ae7c46"],
                deco: "none",
                amb: "none",
                tint: "rgba(255,190,110,.08)",
              },
              map: qt[4],
              waves: 9,
            },
            {
              name: "Les ruines englouties",
              story: "Les colonnes d'un temple oubli\xE9 sortent du sable. Des golems de sable s'y rel\xE8vent.",
              th: {
                g: ["#e2bf80", "#dab776"],
                floor: "sand",
                edgeStyle: "dune",
                wall: "ruin",
                rock: ["#f0d6a0", "#c8a670"],
                deco: "none",
                amb: "none",
                tint: null,
              },
              map: qt[5],
              waves: 9,
            },
            {
              name: "La temp\xEAte de sable",
              story: "Le ciel devient orange. La temp\xEAte cache les ennemis jusqu'au dernier moment.",
              th: {
                g: ["#e0b26a", "#d8aa62"],
                floor: "sand",
                edgeStyle: "dune",
                wall: "rock",
                rock: ["#c98a52", "#9e6434"],
                deco: "none",
                amb: "sand",
                tint: "rgba(230,140,50,.22)",
              },
              map: qt[6],
              waves: 10,
            },
            {
              name: "La vall\xE9e des os",
              story: "Des squelettes g\xE9ants dorment dans la vall\xE9e. La momie royale s'\xE9veille.",
              th: {
                g: ["#d8b07a", "#d0a872"],
                floor: "sand",
                edgeStyle: "dune",
                wall: "rock",
                rock: ["#c9a07a", "#9e7852"],
                deco: "none",
                amb: "none",
                tint: "rgba(120,60,40,.16)",
              },
              map: qt[7],
              waves: 10,
            },
            {
              name: "Le repaire du ver",
              story: "Le sol tremble. Le ver des sables surgit pour d\xE9fendre son territoire.",
              boss: 1,
              th: {
                g: ["#d8a868", "#d0a060"],
                floor: "sand",
                edgeStyle: "dune",
                wall: "rock",
                rock: ["#b8784a", "#8e5430"],
                deco: "none",
                amb: "sand",
                tint: "rgba(150,60,30,.2)",
                vig: 1,
              },
              map: qt[8],
              waves: 12,
            },
          ],
        },
        {
          id: "antre",
          tier: 4,
          name: "L'Antre du Dragon",
          intro: "Au-del\xE0 du d\xE9sert se dresse le volcan. C'est l\xE0 que dort le Dragon noir, entour\xE9 de ses enfants.",
          roster: {},
          levels: [
            {
              name: "Le pied du volcan",
              story: "Le sable devient cendre noire. Les gobelins du dragon gardent la mont\xE9e.",
              th: {
                g: ["#5a4e4c", "#544846"],
                floor: "basalt",
                edgeStyle: "basalt",
                wall: "rock",
                rock: ["#6e5e66", "#4a3e46"],
                deco: "none",
                amb: "ash",
                tint: "rgba(80,20,10,.12)",
              },
              map: At[0],
              waves: 7,
            },
            {
              name: "Les coul\xE9es de lave",
              story: "La lave coule entre les rochers. Les loups du volcan courent sur la pierre br\xFBlante.",
              th: {
                g: ["#584a48", "#524442"],
                floor: "basalt",
                edgeStyle: "basalt",
                wall: "rock",
                rock: ["#6e5e66", "#4a3e46"],
                deco: "none",
                liquid: "lava",
                amb: "embers",
                tint: "rgba(120,30,10,.14)",
              },
              map: At[1],
              waves: 7,
            },
            {
              name: "La for\xEAt p\xE9trifi\xE9e",
              story: "Des arbres chang\xE9s en pierre par le souffle du dragon. Rien ne pousse plus ici.",
              th: {
                g: ["#5e5450", "#584e4a"],
                floor: "basalt",
                edgeStyle: "basalt",
                wall: "rock",
                rock: ["#7a6a6a", "#54484a"],
                tree: "#5a5654",
                deco: "none",
                liquid: "lava",
                amb: "ash",
                tint: "rgba(60,40,40,.18)",
              },
              map: At[2],
              waves: 8,
            },
            {
              name: "Le pont d'obsidienne",
              story: "Un \xE9troit passage de pierre noire au-dessus de la lave. Les orcs le gardent.",
              th: {
                g: ["#4a3e44", "#44383e"],
                floor: "basalt",
                edgeStyle: "basalt",
                wall: "rock",
                rock: ["#5e4e66", "#3e3248"],
                deco: "none",
                liquid: "lava",
                amb: "embers",
                tint: "rgba(140,30,20,.16)",
              },
              map: At[3],
              waves: 8,
            },
            {
              name: "Les nids de wyvernes",
              story: "Des \u0153ufs chauds reposent dans les cendres. Les wyvernes d\xE9fendent leurs nids.",
              th: {
                g: ["#5a4a46", "#544440"],
                floor: "basalt",
                edgeStyle: "basalt",
                wall: "rock",
                rock: ["#6e5e66", "#4a3e46"],
                deco: "none",
                liquid: "lava",
                amb: "embers",
                tint: "rgba(120,40,20,.16)",
              },
              map: At[4],
              waves: 9,
            },
            {
              name: "Le cimeti\xE8re des dragons",
              story: "Les os des anciens dragons couvrent la vall\xE9e. Les trolls y font leur repaire.",
              th: {
                g: ["#544a4c", "#4e4446"],
                floor: "basalt",
                edgeStyle: "basalt",
                wall: "rock",
                rock: ["#6e6470", "#4a404c"],
                deco: "none",
                liquid: "lava",
                amb: "ash",
                tint: "rgba(40,20,40,.24)",
                vig: 1,
              },
              map: At[5],
              waves: 9,
            },
            {
              name: "Le tr\xE9sor du dragon",
              story: "Des montagnes d'or brillent dans la lueur de la lave. Un dragon veille sur le tr\xE9sor.",
              th: {
                g: ["#5e4a3e", "#58443a"],
                floor: "basalt",
                edgeStyle: "basalt",
                wall: "rock",
                rock: ["#7a5e4e", "#54402e"],
                deco: "none",
                liquid: "lava",
                amb: "embers",
                tint: "rgba(255,170,60,.1)",
                vig: 1,
              },
              map: At[6],
              waves: 10,
            },
            {
              name: "Le c\u0153ur du volcan",
              story: "La chaleur est insoutenable. Le Dragon noir est tout proche.",
              th: {
                g: ["#4a3438", "#442e32"],
                floor: "basalt",
                edgeStyle: "basalt",
                wall: "rock",
                rock: ["#5e4450", "#3e2a34"],
                deco: "none",
                liquid: "lava",
                amb: "embers",
                tint: "rgba(150,20,20,.24)",
                night: 1,
              },
              map: At[7],
              waves: 10,
            },
            {
              name: "L'antre du Dragon noir",
              story: "Le Dragon noir ouvre les yeux. Prot\xE8ge le cristal jusqu'au bout.",
              boss: 1,
              th: {
                g: ["#40303a", "#3a2a34"],
                floor: "basalt",
                edgeStyle: "basalt",
                wall: "rock",
                rock: ["#5a4466", "#3a2a48"],
                deco: "none",
                liquid: "lava",
                amb: "embers",
                tint: "rgba(90,0,50,.28)",
                night: 1,
              },
              map: At[8],
              waves: 12,
            },
          ],
        },
      ],
      Kt = "thwbsnpfkaomuyjqlxgzv";
    function Br(e, s) {
      const a = e[0].length,
        t = e.length,
        r = 3,
        l = a + 2 * r,
        n = t + 2 * r,
        o = (b, w, T) => (b < w ? w : b > T ? T : b),
        d = (b) => b >= "A" && b <= "Z" && b !== "X",
        u = (b) => b === "#" || b === "~" || Kt.includes(b),
        h = e
          .join("")
          .split("")
          .filter((b) => Kt.includes(b)),
        c = (b) => {
          let w = (s * 7919 + 13) % 2147483647 || 1;
          const T = () => (w = (w * 16807) % 2147483647) / 2147483647,
            M = [],
            C = new Set(),
            V = (L, B) => B * l + L;
          for (let L = 0; L < n; L++) {
            const B = [];
            for (let O = 0; O < l; O++) {
              const I = e[o(L - r, 1, t - 2)][o(O - r, 1, a - 2)];
              B.push("dcrei".includes(I) ? I : ".");
            }
            M.push(B);
          }
          for (let L = 1; L < t - 1; L++) for (let B = 1; B < a - 1; B++) ((M[L + r][B + r] = e[L][B]), C.add(V(B + r, L + r)));
          for (let L = 0; L < t; L++)
            for (let B = 0; B < a; B++) {
              if (L > 0 && L < t - 1 && B > 0 && B < a - 1) continue;
              const O = e[L][B],
                I = B === 0 ? -1 : B === a - 1 ? 1 : 0,
                K = L === 0 ? -1 : L === t - 1 ? 1 : 0;
              if (I && K) continue;
              let ee = B + r,
                pe = L + r;
              if (d(O)) {
                for (; ee > 0 && ee < l - 1 && pe > 0 && pe < n - 1; ) (C.add(V(ee, pe)), (ee += I), (pe += K));
                ((M[pe][ee] = O), C.add(V(ee, pe)));
                continue;
              }
              const P = e[L - K][B - I];
              if (u(P)) {
                const W = P === "~" ? "~" : "#";
                for (; ee >= 0 && ee < l && pe >= 0 && pe < n; ) ((M[pe][ee] = W), C.add(V(ee, pe)), (ee += I), (pe += K));
              }
            }
          for (let L = 0; L < n; L++)
            for (let B = 0; B < l; B++)
              (L === 0 || B === 0 || L === n - 1 || B === l - 1) && !d(M[L][B]) && M[L][B] !== "~" && (M[L][B] = "#");
          for (let L = 1; L < n - 1; L++)
            for (let B = 1; B < l - 1; B++) {
              if (C.has(V(B, L))) continue;
              let O = !1;
              for (const [I, K] of [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
              ]) {
                const ee = M[L + K][B + I];
                d(ee) && (O = !0);
              }
              !O && T() < b && (M[L][B] = h.length && T() < 0.75 ? h[(T() * h.length) | 0] : "#");
            }
          return M;
        },
        p = (b) => {
          const w = new Set(),
            T = [];
          for (let V = 0; V < n; V++) for (let L = 0; L < l; L++) d(b[V][L]) && (T.push([L, V]), w.add(V * l + L));
          let M = !1;
          for (; T.length; ) {
            const [V, L] = T.pop();
            if (b[L][V] === "X") {
              M = !0;
              continue;
            }
            for (const [B, O] of [
              [1, 0],
              [-1, 0],
              [0, 1],
              [0, -1],
            ]) {
              const I = V + B,
                K = L + O;
              if (I < 0 || K < 0 || I >= l || K >= n) continue;
              const ee = K * l + I,
                pe = b[K][I];
              w.has(ee) || u(pe) || (w.add(ee), T.push([I, K]));
            }
          }
          const C = {};
          for (let V = 0; V < n; V++) for (let L = 0; L < l; L++) d(b[V][L]) && (C[b[V][L]] = C[b[V][L]] || []).push([L, V]);
          return M && Object.values(C).every((V) => V.some(([L, B]) => y(b, L, B)));
        },
        y = (b, w, T) => {
          const M = new Set([T * l + w]),
            C = [[w, T]];
          for (; C.length; ) {
            const [V, L] = C.pop();
            if (b[L][V] === "X") return !0;
            for (const [B, O] of [
              [1, 0],
              [-1, 0],
              [0, 1],
              [0, -1],
            ]) {
              const I = V + B,
                K = L + O;
              if (I < 0 || K < 0 || I >= l || K >= n) continue;
              const ee = K * l + I;
              M.has(ee) || u(b[K][I]) || (M.add(ee), C.push([I, K]));
            }
          }
          return !1;
        };
      for (let b = 0; b < 12; b++) {
        const w = c(0.1);
        if (p(w)) return w.map((T) => T.join(""));
        s += 101;
      }
      return c(0).map((b) => b.join(""));
    }
    const xi = [
        ["base", "H", "BL", "BR", "H", "base", "L", "V", "TL"],
        ["V", "V", "V", "BL", "TR", "BR", "V", "R", "base"],
        ["BL", "V", "R", "TR", "TL", "L", "BR", "V", "TR"],
        ["BR", "L", "V", "TL", "TR", "BL", "R", "TL", "V"],
        ["BL", "TR", "TL", "R", "V", "L", "BR", "TR", "V"],
      ],
      Dr = 16,
      Er = {
        base: {},
        H: { fh: 1 },
        V: { fv: 1 },
        BL: { cry: [3, 18] },
        BR: { cry: [13, 18] },
        L: { cry: [2, 10] },
        R: { cry: [14, 10] },
        TL: { fv: 1, cry: [3, 3] },
        TR: { fv: 1, cry: [13, 3] },
      };
    function Ti(e, s, a) {
      const t = Er[s] || {};
      for (const [r, l] of [
        [0, 0],
        [0, -2],
        [0, 2],
        [-2, 0],
        [2, 0],
        [-2, -2],
        [2, 2],
        [0, -4],
      ]) {
        const n = Object.assign({}, t);
        if (n.cry) n.cry = [n.cry[0] + r, n.cry[1] + l];
        else if (r || l) break;
        const o = jr(e, n, a);
        if (o) return o;
      }
      return e;
    }
    function jr(e, s, a) {
      const t = e[0].length,
        r = e.length;
      let l = (a * 48271 + 11) % 2147483647 || 1;
      const n = () => (l = (l * 16807) % 2147483647) / 2147483647,
        o = (L) => L >= "A" && L <= "Z" && L !== "X",
        d = (L) => L === "#" || L === "~" || Kt.includes(L);
      let u = e.map((L) => [...L]);
      (s.fv && u.reverse(), s.fh && (u = u.map((L) => L.reverse())));
      const h = () => {
        for (let L = 0; L < r; L++) for (let B = 0; B < t; B++) if (u[L][B] === "X") return [B, L];
      };
      if (s.cry) {
        const [L, B] = h(),
          [O, I] = s.cry,
          K = (G, N, se) => (G < N ? N : G > se ? se : G),
          ee = K(L - 2, 1, t - 7),
          pe = K(B - 2, 1, r - 7),
          P = K(O - 2, 1, t - 7),
          W = K(I - 2, 1, r - 7),
          q = [],
          z = [];
        for (let G = 0; G < 6; G++) (q.push(u[pe + G].slice(ee, ee + 6)), z.push(u[W + G].slice(P, P + 6)));
        for (let G = 0; G < 6; G++) for (let N = 0; N < 6; N++) u[pe + G][ee + N] = z[G][N];
        for (let G = 0; G < 6; G++) for (let N = 0; N < 6; N++) u[W + G][P + N] = q[G][N];
        for (let G = 0; G < r; G++) for (let N = 0; N < t; N++) u[G][N] === "X" && (u[G][N] = ".");
        for (let G = -1; G < 3; G++)
          for (let N = -1; N < 3; N++) {
            const se = O + N,
              U = I + G;
            se < 1 ||
              U < 1 ||
              se > t - 2 ||
              U > r - 2 ||
              (N >= 0 && N < 2 && G >= 0 && G < 2 ? (u[U][se] = "X") : d(u[U][se]) && (u[U][se] = "."));
          }
      }
      const [c, p] = h(),
        y = (L, B) => Math.abs(L - c - 0.5) + Math.abs(B - p - 0.5),
        b = {};
      for (let L = 0; L < r; L++) for (let B = 0; B < t; B++) o(u[L][B]) && (b[u[L][B]] = b[u[L][B]] || []).push([B, L]);
      const w = Object.keys(b).sort(),
        T = [],
        M = (L, B) => {
          const O = [];
          if (!B || B === "T")
            for (let I = 2; I <= t - 2 - L; I++) O.push({ e: "T", cells: [...Array(L)].map((K, ee) => [I + ee, 0]), dx: 0, dy: 1 });
          if (!B || B === "B")
            for (let I = 2; I <= t - 6 - L; I++) O.push({ e: "B", cells: [...Array(L)].map((K, ee) => [I + ee, r - 1]), dx: 0, dy: -1 });
          if (!B || B === "L")
            for (let I = 2; I <= r - 2 - L; I++) O.push({ e: "L", cells: [...Array(L)].map((K, ee) => [0, I + ee]), dx: 1, dy: 0 });
          if (!B || B === "R")
            for (let I = 2; I <= r - 5 - L; I++) O.push({ e: "R", cells: [...Array(L)].map((K, ee) => [t - 1, I + ee]), dx: -1, dy: 0 });
          return O;
        },
        C = (L) => L.reduce((B, [O, I]) => [B[0] + O / L.length, B[1] + I / L.length], [0, 0]);
      return (
        w.forEach((L, B) => {
          const O = b[L],
            [I, K] = C(O),
            ee = s.bottom && B === w.length - 1 && w.length > 1;
          if (y(I, K) >= Dr && T.every(([q, z]) => Math.abs(q - I) + Math.abs(z - K) >= 5) && !ee) {
            T.push([I, K]);
            return;
          }
          let P = null,
            W = -1e9;
          for (const q of M(O.length, ee ? (s.fv ? "T" : "B") : null)) {
            const [z, G] = C(q.cells);
            let N = ee ? -Math.abs(z - c) + n() * 4 : y(z, G) + n() * 3;
            (T.some(([se, U]) => Math.abs(se - z) + Math.abs(U - G) < 6) && (N -= 100), N > W && ((W = N), (P = q)));
          }
          for (const [q, z] of O) u[z][q] = "#";
          for (const [q, z] of P.cells) {
            u[z][q] = L;
            for (let G = 1; G <= 2; G++) {
              const N = q + P.dx * G,
                se = z + P.dy * G;
              d(u[se][N]) && (u[se][N] = ".");
            }
          }
          T.push(C(P.cells));
        }),
        (() => {
          const L = {};
          for (let B = 0; B < r; B++) for (let O = 0; O < t; O++) o(u[B][O]) && (L[u[B][O]] = L[u[B][O]] || []).push([O, B]);
          return Object.values(L).every((B) => {
            const O = new Set(),
              I = [B[0]];
            for (O.add(B[0][1] * t + B[0][0]); I.length; ) {
              const [K, ee] = I.pop();
              if (u[ee][K] === "X") return !0;
              for (const [pe, P] of [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
              ]) {
                const W = K + pe,
                  q = ee + P;
                if (W < 0 || q < 0 || W >= t || q >= r) continue;
                const z = q * t + W;
                O.has(z) || d(u[q][W]) || (O.add(z), I.push([W, q]));
              }
            }
            return !1;
          });
        })()
          ? u.map((L) => L.join(""))
          : null
      );
    }
    const va = {
      plaine: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      chateau: [1, 1, 1, 0, 0, 0, 0, 0, 0],
      grotte: [],
      desert: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      antre: [],
    };
    function Wr(e, s, a) {
      const t = e[0].length,
        r = e.length,
        l = e.map((w) => [...w]),
        n = (w) => w >= "A" && w <= "Z" && w !== "X",
        o = (w) => w === "#" || w === "~" || Kt.includes(w),
        d = (w) => w === "." || "dcrei".includes(w);
      let u = -1,
        h = -1;
      for (let w = 0; w < r && u < 0; w++)
        for (let T = 0; T < t; T++)
          if (l[w][T] === "X") {
            ((u = T), (h = w));
            break;
          }
      const c = {};
      for (let w = 0; w < r; w++) for (let T = 0; T < t; T++) n(l[w][T]) && (c[l[w][T]] = c[l[w][T]] || []).push([T, w]);
      const p = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      if (va[s] && va[s][a])
        for (const w of Object.values(c)) {
          const T = w[Math.floor(w.length / 2)],
            M = new Map(),
            C = new Map(),
            V = [[0, T[0], T[1], -1]];
          M.set(T[1] * t + T[0] + "|-1", 0);
          let L = null;
          for (; V.length; ) {
            V.sort((pe, P) => pe[0] - P[0]);
            const [O, I, K, ee] = V.shift();
            if (l[K][I] === "X") {
              L = [I, K, ee];
              break;
            }
            p.forEach(([pe, P], W) => {
              const q = I + pe,
                z = K + P;
              if (q < 0 || z < 0 || q >= t || z >= r || o(l[z][q])) return;
              const G = O + 1 + (ee >= 0 && ee !== W ? 0.6 : 0),
                N = z * t + q + "|" + W;
              (M.has(N) && M.get(N) <= G) || (M.set(N, G), C.set(N, [I, K, ee]), V.push([G, q, z, W]));
            });
          }
          if (!L) continue;
          let B = L;
          for (; B; ) {
            const [O, I, K] = B;
            (l[I][O] === "." && (l[I][O] = "d"), (B = C.get(I * t + O + "|" + K)));
          }
        }
      if (va[s] && va[s][a])
        for (let w = -1; w < 3; w++)
          for (let T = -1; T < 3; T++) {
            const M = u + T,
              C = h + w;
            M < 1 || C < 1 || M > t - 2 || C > r - 2 || (d(l[C][M]) && l[C][M] !== "r" && (l[C][M] = "c"));
          }
      const y = l.map((w) => w.slice());
      for (const w of Object.values(c)) {
        const [T, M] = w[0],
          [C, V] = w[w.length - 1],
          L =
            M === 0
              ? [
                  [T - 1, 1],
                  [C + 1, 1],
                ]
              : M === r - 1
                ? [
                    [T - 1, r - 2],
                    [C + 1, r - 2],
                  ]
                : T === 0
                  ? [
                      [1, M - 1],
                      [1, V + 1],
                    ]
                  : [
                      [t - 2, M - 1],
                      [t - 2, V + 1],
                    ];
        for (const [B, O] of L) B > 0 && O > 0 && B < t - 1 && O < r - 1 && d(l[O][B]) && (l[O][B] = "#");
      }
      return (
        Object.values(c).every((w) => {
          const T = new Set(),
            M = [w[0]];
          for (T.add(w[0][1] * t + w[0][0]); M.length; ) {
            const [C, V] = M.pop();
            if (l[V][C] === "X") return !0;
            for (const [L, B] of p) {
              const O = C + L,
                I = V + B;
              if (O < 0 || I < 0 || O >= t || I >= r) continue;
              const K = I * t + O;
              T.has(K) || o(l[I][O]) || (T.add(K), M.push([O, I]));
            }
          }
          return !1;
        })
          ? l
          : y
      ).map((w) => w.join(""));
    }
    const Vr = 18,
      Fr = 24,
      Ir = { B: [8, 19], BL: [3, 19], BR: [13, 19], T: [8, 3], TL: [3, 3], TR: [13, 3], L: [2, 10], R: [14, 10] },
      Xr = [
        [
          ["islands", "B"],
          ["rows", "TL"],
          ["cross", "R"],
          ["river", "BL"],
          ["rooms", "T"],
          ["diagonals", "BR"],
          ["forest", "L"],
          ["chevrons", "TR"],
          ["rings", "B"],
        ],
        [
          ["funnel", "T"],
          ["moat", "B"],
          ["cols", "L"],
          ["checker", "TR"],
          ["comb", "BR"],
          ["bastions", "TL"],
          ["pillars", "T"],
          ["corrals", "R"],
          ["quadrants", "B"],
        ],
        [
          ["zigzag", "BL"],
          ["maze", "T"],
          ["ribs", "BR"],
          ["lakes", "L"],
          ["checker", "B"],
          ["arcs", "TR"],
          ["stripes", "R"],
          ["causeway", "T"],
          ["spiral", "B"],
        ],
        [
          ["funnel", "BR"],
          ["diagonals", "L"],
          ["chevrons", "T"],
          ["lakes", "BL"],
          ["islands", "R"],
          ["pillars", "TL"],
          ["stripes", "B"],
          ["maze", "TR"],
          ["rings", "T"],
        ],
        [
          ["rows", "TR"],
          ["river", "B"],
          ["forest", "TL"],
          ["causeway", "R"],
          ["corrals", "BL"],
          ["cross", "T"],
          ["arcs", "BR"],
          ["spiral", "L"],
          ["bastions", "B"],
        ],
      ],
      Or = { "2,0": "c", "3,0": "i", "4,0": "e" },
      zr = { "1,6": 1, "1,8": 1 },
      Gr = [];
    function Nr(e, s, a) {
      const [t, r] = Xr[e][s];
      for (let l = 0; l < 40; l++) {
        const n = Hr(e, s, a, t, r, e * 977 + s * 131 + 17 + l * 7919);
        if (n) return n;
      }
      return (Gr.push(e + "," + s), Br(a, e * 100 + s + 7));
    }
    function Hr(e, s, a, t, r, l) {
      let n = l % 2147483647 || 1;
      const o = () => (n = (n * 16807) % 2147483647) / 2147483647,
        d = (k, v) => k + Math.floor(o() * (v - k + 1)),
        u = Vr,
        h = Fr,
        c = (k, v) => v * u + k,
        p = [];
      for (let k = 0; k < h; k++) {
        p.push([]);
        for (let v = 0; v < u; v++) p[k].push(k === 0 || v === 0 || k === h - 1 || v === u - 1 ? "#" : ".");
      }
      const y = a.join(""),
        b = y.split("").filter((k) => Kt.includes(k)),
        w = y.includes("~"),
        T = (k, v) => k > 0 && v > 0 && k < u - 1 && v < h - 1,
        M = (k) => k >= "A" && k <= "Z" && k !== "X",
        C = (k) => k === "#" || k === "~" || Kt.includes(k),
        [V, L] = Ir[r],
        B = V + 0.5,
        O = L + 0.5,
        I = new Set();
      for (let k = -1; k < 3; k++) for (let v = -1; v < 3; v++) I.add(c(V + v, L + k));
      const K = {};
      for (const k of y) M(k) && (K[k] = (K[k] || 0) + 1);
      const ee = Object.keys(K).sort(),
        pe = [];
      for (const k of ee) {
        const v = K[k],
          x = [];
        for (let R = 2; R <= u - 2 - v; R++) x.push({ cells: [...Array(v)].map((X, H) => [R + H, 0]), dx: 0, dy: 1 });
        for (let R = 2; R <= u - 6 - v; R++) x.push({ cells: [...Array(v)].map((X, H) => [R + H, h - 1]), dx: 0, dy: -1 });
        for (let R = 2; R <= h - 2 - v; R++) x.push({ cells: [...Array(v)].map((X, H) => [0, R + H]), dx: 1, dy: 0 });
        for (let R = 2; R <= h - 5 - v; R++) x.push({ cells: [...Array(v)].map((X, H) => [u - 1, R + H]), dx: -1, dy: 0 });
        let S = null,
          E = -1e9;
        for (const R of x) {
          const X = R.cells.reduce((ie, it) => ie + it[0], 0) / v,
            H = R.cells.reduce((ie, it) => ie + it[1], 0) / v,
            Z = Math.abs(X - B) + Math.abs(H - O);
          if (Z < 17 || pe.some((ie) => Math.abs(ie.x - X) + Math.abs(ie.y - H) < 8)) continue;
          const _ = Z + o() * 10;
          _ > E && ((E = _), (S = Object.assign(R, { x: X, y: H })));
        }
        if (!S) return null;
        pe.push(S);
        for (const [R, X] of S.cells) {
          p[X][R] = k;
          for (let H = 1; H <= 3; H++) {
            const Z = R + S.dx * H,
              _ = X + S.dy * H;
            (I.add(c(Z, _)), H <= 2 && (I.add(c(Z + S.dy, _ + S.dx)), I.add(c(Z - S.dy, _ - S.dx))));
          }
        }
      }
      const P = (k, v) => {
          !T(k, v) || I.has(c(k, v)) || p[v][k] !== "." || (p[v][k] = b.length && o() < 0.3 ? b[d(0, b.length - 1)] : "#");
        },
        W = (k, v) => {
          !T(k, v) || I.has(c(k, v)) || ((p[v][k] === "." || C(p[v][k])) && (p[v][k] = "~"));
        },
        q = (k, v, x, S, E = P) => {
          for (let R = 0; R < S; R++) for (let X = 0; X < x; X++) E(k + X, v + R);
        },
        z = (k, v, x, S, E, R = P) => {
          for (let X = 0; X < E; X++) R(k + x * X, v + S * X);
        },
        G = (k, v) => {
          for (let x = 1; x < u - 1; x++) v.some(([S, E]) => x >= S && x < S + E) || P(x, k);
        },
        N = (k, v) => {
          for (let x = 1; x < h - 1; x++) v.some(([S, E]) => x >= S && x < S + E) || P(k, x);
        },
        se = (k, v = 3) => {
          for (let x = 0; x < k; x++) {
            const S = d(1, v),
              E = d(1, 2),
              R = d(2, u - 3 - S),
              X = d(2, h - 3 - E);
            (q(R, X, S, E),
              S > 1 && E > 1 && o() < 0.5 && (p[X][R + (o() < 0.5 ? 0 : S - 1)] = p[X][R] === "#" || Kt.includes(p[X][R]) ? "." : p[X][R]));
          }
        },
        U = (k, v, x, S, E) => {
          for (let R = -Math.ceil(S); R <= Math.ceil(S); R++)
            for (let X = -Math.ceil(x); X <= Math.ceil(x); X++)
              (X * X) / (x * x) + (R * R) / (S * S) <= 1 && E(Math.round(k + X), Math.round(v + R));
        },
        Me = (k, v, x = P) => {
          const S = Math.round(B - k),
            E = Math.round(B + k),
            R = Math.round(O - k),
            X = Math.round(O + k),
            H = [];
          for (let _ = S; _ <= E; _++) (H.push([_, R, "N"]), H.push([_, X, "S"]));
          for (let _ = R + 1; _ < X; _++) (H.push([S, _, "W"]), H.push([E, _, "E"]));
          const Z = v
            .map((_) => {
              const ie = H.filter((nt) => nt[2] === _ && T(nt[0], nt[1]));
              if (!ie.length) return null;
              const it = ie[d(0, ie.length - 1)];
              return [it[0], it[1], _];
            })
            .filter(Boolean);
          for (const [_, ie, it] of H) Z.some(([nt, Je, dt]) => dt === it && Math.abs(nt - _) + Math.abs(Je - ie) <= 1) || x(_, ie);
        },
        Ae = ["N", "E", "S", "W"];
      switch (t) {
        case "islands":
          se(e === 0 && s === 0 ? 9 : 15);
          break;
        case "rows": {
          let k = d(3, 4),
            v = 0;
          for (; k < h - 2; ) {
            if (Math.abs(k - O) > 2.5) {
              const x = v % 2 === 0,
                S = d(2, 3),
                R = [[x ? d(1, 4) : d(u - 5 - S, u - 2 - S), S]];
              (o() < 0.35 && R.push([d(7, 10), 2]), G(k, R), v++);
            }
            k += d(4, 5);
          }
          break;
        }
        case "cols": {
          let k = d(3, 4),
            v = 0;
          for (; k < u - 2; ) {
            if (Math.abs(k - B) > 2.5) {
              const x = v % 2 === 0,
                S = d(2, 3),
                E = x ? d(1, 4) : d(h - 5 - S, h - 2 - S);
              (N(k, [
                [E, S],
                [d(9, 13), 2],
              ]),
                v++);
            }
            k += d(3, 4);
          }
          se(4, 2);
          break;
        }
        case "cross": {
          const k = d(10, 13),
            v = d(7, 10);
          (G(k, [
            [d(2, 4), 2],
            [d(12, 14), 2],
          ]),
            N(v, [
              [d(3, 6), 2],
              [d(16, 19), 2],
            ]));
          for (const [x, S] of [
            [3, 4],
            [12, 4],
            [3, 16],
            [12, 16],
          ])
            o() < 0.8 && q(x + d(-1, 1), S + d(-1, 1), 2, 2);
          se(4, 2);
          break;
        }
        case "river": {
          if (V < 4 || V > 13) {
            let v = d(7, 10);
            for (let x = 1; x < h - 1; x++)
              (o() < 0.3 && (v = Math.max(5, Math.min(u - 7, v + (o() < 0.5 ? -1 : 1)))), W(v, x), W(v + 1, x));
            for (let x = 0; x < 3; x++) {
              const S = d(2, h - 4);
              for (let E = 1; E < u - 1; E++) for (let R = S; R < S + 2; R++) p[R][E] === "~" && (p[R][E] = ".");
            }
          } else {
            let v = d(9, 13);
            Math.abs(v - O) < 4 && (v = O < 12 ? 16 : 7);
            for (let x = 1; x < u - 1; x++)
              (o() < 0.3 && (v = Math.max(5, Math.min(h - 7, v + (o() < 0.5 ? -1 : 1)))), W(x, v), W(x, v + 1));
            for (let x = 0; x < 3; x++) {
              const S = d(2, u - 4);
              for (let E = 1; E < h - 1; E++) for (let R = S; R < S + 2; R++) p[E][R] === "~" && (p[E][R] = ".");
            }
          }
          se(9, 2);
          break;
        }
        case "rooms": {
          const k = [d(5, 7), d(11, 12)],
            v = [d(7, 8), d(15, 16)];
          for (const x of k)
            N(x, [
              [d(2, 5), 2],
              [d(10, 13), 2],
              [d(18, 20), 2],
            ]);
          for (const x of v)
            G(x, [
              [d(2, 3), 2],
              [d(k[0] + 1, k[1] - 3), 2],
              [d(k[1] + 1, 15), 2],
            ]);
          break;
        }
        case "diagonals": {
          for (let k = 0; k < 5; k++) {
            const v = o() < 0.5 ? 1 : -1,
              x = 1,
              S = d(6, 9),
              E = v > 0 ? d(1, u - S - 1) : d(S, u - 2),
              R = d(2, h - S - 2);
            z(E, R, v, x, S);
          }
          se(3, 2);
          break;
        }
        case "forest": {
          for (let k = 2; k < h - 2; k++) for (let v = 2; v < u - 2; v++) o() < 0.17 && P(v, k);
          for (let k = 0; k < 4; k++) {
            const v = d(3, u - 5),
              x = d(3, h - 5);
            q(v, x, 2, 2);
          }
          break;
        }
        case "chevrons": {
          const k = O > 12;
          for (let v = 0; v < 4; v++) {
            const x = k ? 3 + v * 4 + d(0, 1) : h - 4 - v * 4 - d(0, 1),
              S = d(5, 12),
              E = d(3, 5),
              R = k ? 1 : -1;
            Math.abs(x - O) < 3 || (P(S, x), z(S - 1, x + R, -1, R, E), z(S + 1, x + R, 1, R, E));
          }
          se(4, 2);
          break;
        }
        case "rings":
          for (const [k, v] of [
            [3, [Ae[d(0, 3)], Ae[d(0, 3)]]],
            [6, [Ae[d(0, 3)], Ae[d(0, 3)]]],
            [9, [Ae[d(0, 3)], Ae[d(0, 3)]]],
          ])
            Me(k, v);
          se(3, 2);
          break;
        case "spiral": {
          let k = d(0, 3);
          for (const v of [3, 5, 7, 9, 11]) (Me(v, [Ae[k % 4]]), k++);
          break;
        }
        case "funnel": {
          const k = O > 12,
            v = k ? 2 : h - 3,
            x = k ? 1 : -1,
            S = Math.abs(O - v) - 4;
          (z(1, v, 1, x, Math.min(S, 7)), z(u - 2, v, -1, x, Math.min(S, 7)));
          const E = v + x * Math.min(S, 7);
          (G(Math.round(E), [[Math.round(B) - 2, 4]]), se(7, 2));
          break;
        }
        case "moat":
          (Me(3, ["N", "S"], W), Me(4, ["E", "W"], W), se(10, 3));
          break;
        case "maze": {
          const k = (v, x, S, E, R) => {
            const X = S - v,
              H = E - x;
            if (!(R > 3 || (X < 6 && H < 6)))
              if (X >= H) {
                const Z = d(v + 3, S - 3),
                  _ = d(x, E - 2);
                for (let ie = x; ie <= E; ie++) (ie < _ || ie > _ + 1) && P(Z, ie);
                (k(v, x, Z - 1, E, R + 1), k(Z + 1, x, S, E, R + 1));
              } else {
                const Z = d(x + 3, E - 3),
                  _ = d(v, S - 2);
                for (let ie = v; ie <= S; ie++) (ie < _ || ie > _ + 1) && P(ie, Z);
                (k(v, x, S, Z - 1, R + 1), k(v, Z + 1, S, E, R + 1));
              }
          };
          k(1, 1, u - 2, h - 2, 0);
          for (let v = 1; v < h - 1; v++)
            for (let x = 1; x < u - 1; x++) !I.has(c(x, v)) && C(p[v][x]) && p[v][x] !== "~" && o() < 0.18 && (p[v][x] = ".");
          break;
        }
        case "pillars": {
          const k = d(2, 3),
            v = d(2, 3);
          for (let x = v; x < h - 3; x += 4) for (let S = k; S < u - 3; S += 4) o() < 0.85 && q(S, x, 2, 2);
          break;
        }
        case "lakes": {
          for (let k = 0; k < 5; k++) U(d(3, u - 4), d(3, h - 4), 1 + o() * 1.8, 1 + o() * 1.5, W);
          se(6, 2);
          break;
        }
        case "causeway": {
          for (const k of [5, 11, 17]) {
            if (Math.abs(k - O) < 3) continue;
            for (let S = k; S < k + 3; S++) for (let E = 1; E < u - 1; E++) W(E, S);
            const v = d(2, 6),
              x = d(10, 14);
            for (let S = k; S < k + 3; S++) for (const E of [v, x]) for (let R = E; R < E + 2; R++) p[S][R] === "~" && (p[S][R] = ".");
          }
          se(6, 2);
          break;
        }
        case "checker": {
          for (let k = 3, v = 0; k < h - 2; k += 3, v++)
            for (let x = v % 2 ? 2 : 4; x < u - 2; x += 4) (P(x, k), o() < 0.35 && P(x + 1, k));
          break;
        }
        case "comb": {
          const k = d(7, 10),
            v = d(4, 8),
            x = d(14, 18);
          for (let S = 2; S < h - 2; S++) !(S >= v && S < v + 2) && !(S >= x && S < x + 2) && P(k, S);
          for (let S = 3, E = 0; S < h - 2; S += 3, E++) {
            const R = E % 2 === 0,
              X = d(3, 5);
            z(R ? k - 1 : k + 1, S, R ? -1 : 1, 0, X);
          }
          break;
        }
        case "corrals": {
          for (let k = 0; k < 7; k++) {
            const v = d(3, 4),
              x = 3,
              S = d(2, u - 2 - v),
              E = d(2, h - 2 - x),
              R = d(0, 3);
            for (let X = 0; X < v; X++) ((R === 0 && X === 1) || P(S + X, E), (R === 1 && X === 1) || P(S + X, E + x - 1));
            for (let X = 1; X < x - 1; X++) (R !== 2 && P(S, E + X), R !== 3 && P(S + v - 1, E + X));
          }
          break;
        }
        case "quadrants": {
          for (const [k, v] of [
            [2, 3],
            [10, 3],
            [2, 13],
            [10, 13],
          ]) {
            const x = k + d(0, 2),
              S = v + d(0, 2),
              E = d(3, 4),
              R = d(4, 5);
            (q(x, S, E, R), (p[S + d(1, R - 2)][x + (o() < 0.5 ? 0 : E - 1)] = "."));
          }
          se(4, 2);
          break;
        }
        case "zigzag": {
          for (let k = 0; k < 4; k++) {
            let v = d(1, 6),
              x = d(2, h - 8);
            const S = o() < 0.5 ? 1 : -1;
            S < 0 && (v = d(u - 7, u - 2));
            for (let E = 0; E < 5; E++) (P(v, x), P(v + S, x), (v += S * 2), P(v, x), x++, P(v, x));
          }
          se(3, 2);
          break;
        }
        case "ribs": {
          for (let k = 3, v = 0; k < h - 4; k += 6, v++) for (let x = v % 2 ? 2 : 3; x < u - 2; x += 3) z(x, k, 0, 1, 3);
          break;
        }
        case "arcs": {
          const k = B < u / 2 ? u - 1 : 0,
            v = O < h / 2 ? h - 1 : 0;
          for (const x of [6, 10, 14]) {
            const S = [];
            for (let X = 0; X <= 90; X += 2) {
              const H = (X * Math.PI) / 180,
                Z = Math.round(k + (k ? -1 : 1) * Math.cos(H) * x),
                _ = Math.round(v + (v ? -1 : 1) * Math.sin(H) * x);
              S.some((ie) => ie[0] === Z && ie[1] === _) || S.push([Z, _]);
            }
            const E = d(2, S.length - 3),
              R = (E + Math.floor(S.length / 2)) % S.length;
            S.forEach(([X, H], Z) => {
              Math.abs(Z - E) > 1 && Math.abs(Z - R) > 1 && P(X, H);
            });
          }
          se(3, 2);
          break;
        }
        case "stripes": {
          const k = o() < 0.5 ? 1 : -1;
          for (let v = -16; v < h; v += 6) {
            const x = [];
            for (let E = 1; E < u - 1; E++) {
              const R = v + (k > 0 ? E : u - 1 - E);
              R > 0 && R < h - 1 && x.push([E, R]);
            }
            if (x.length < 4) continue;
            const S = d(1, x.length - 3);
            x.forEach(([E, R], X) => {
              (X < S || X > S + 1) && P(E, R);
            });
          }
          break;
        }
        case "bastions": {
          for (let k = 0; k < 8; k++) {
            const v = d(2, u - 6),
              x = d(2, h - 6),
              S = d(0, 2);
            S === 0
              ? (z(v, x, 1, 0, 4), z(v + 1, x + 1, 0, 1, 2))
              : S === 1
                ? (z(v, x, 0, 1, 4), z(v + 1, x + 3, 1, 0, 2))
                : (z(v, x, 1, 0, 3), z(v + 2, x, 0, 1, 3));
          }
          break;
        }
      }
      if (w && !["river", "moat", "lakes", "causeway"].includes(t))
        for (let k = 0; k < 3; k++) {
          const v = d(2, 3),
            x = 2;
          q(d(2, u - 3 - v), d(2, h - 3 - x), v, x, W);
        }
      for (let k = 0; k < 2; k++) for (let v = 0; v < 2; v++) p[L + k][V + v] = "X";
      for (let k = -1; k < 3; k++)
        for (let v = -1; v < 3; v++) {
          const x = V + v,
            S = L + k;
          T(x, S) && p[S][x] !== "X" && (p[S][x] = ".");
        }
      const Ye = (k, v) => {
        const x = new Set([c(k, v)]),
          S = [[k, v]];
        for (; S.length; ) {
          const [E, R] = S.pop();
          if (p[R][E] === "X") return !0;
          for (const [X, H] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ]) {
            const Z = E + X,
              _ = R + H;
            if (Z < 0 || _ < 0 || Z >= u || _ >= h) continue;
            const ie = c(Z, _);
            x.has(ie) || C(p[_][Z]) || (x.add(ie), S.push([Z, _]));
          }
        }
        return !1;
      };
      for (const k of pe) {
        const [v, x] = k.cells[0];
        if (Ye(v, x)) continue;
        const S = new Map([[c(v, x), 0]]),
          E = new Map(),
          R = [[0, v, x]];
        let X = null;
        for (; R.length; ) {
          R.sort((it, nt) => it[0] - nt[0]);
          const [Z, _, ie] = R.shift();
          if (p[ie][_] === "X") {
            X = [_, ie];
            break;
          }
          for (const [it, nt] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ]) {
            const Je = _ + it,
              dt = ie + nt;
            if ((!T(Je, dt) && !M(p[dt] && p[dt][Je])) || !T(Je, dt)) continue;
            const qr = p[dt][Je],
              wi = qr === "~" ? 8 : C(qr) ? 5 : 1,
              en = Z + wi;
            en < (S.get(c(Je, dt)) ?? 1e9) && (S.set(c(Je, dt), en), E.set(c(Je, dt), [_, ie]), R.push([en, Je, dt]));
          }
        }
        if (!X) return null;
        let H = X;
        for (; H; ) {
          const [Z, _] = H;
          (C(p[_][Z]) && (p[_][Z] = "."), (H = E.get(c(Z, _))));
        }
      }
      if (!pe.every((k) => Ye(k.cells[0][0], k.cells[0][1]))) return null;
      const St = () => {
        const k = new Set();
        for (const v of pe) {
          const [x, S] = v.cells[0],
            E = new Map([[c(x, S), -1]]),
            R = [[x, S]];
          let X = null;
          for (let H = 0; H < R.length; H++) {
            const [Z, _] = R[H];
            if (p[_][Z] === "X") {
              X = c(Z, _);
              break;
            }
            for (const [ie, it] of [
              [1, 0],
              [-1, 0],
              [0, 1],
              [0, -1],
            ]) {
              const nt = Z + ie,
                Je = _ + it;
              if (nt < 0 || Je < 0 || nt >= u || Je >= h) continue;
              const dt = c(nt, Je);
              E.has(dt) || C(p[Je][nt]) || (E.set(dt, c(Z, _)), R.push([nt, Je]));
            }
          }
          for (let H = X; H != null && H >= 0; H = E.get(H)) k.add(H);
        }
        return k;
      };
      {
        const k = St(),
          v = () => {
            let E = 0;
            for (let R = 1; R < h - 1; R++)
              for (let X = 1; X < u - 1; X++) {
                if (!C(p[R][X]) || p[R][X] === "~") continue;
                let H = !1;
                for (let Z = -2; Z <= 2 && !H; Z++)
                  for (let _ = -2; _ <= 2; _++)
                    if (k.has(c(X + _, R + Z))) {
                      H = !0;
                      break;
                    }
                H && E++;
              }
            return E;
          };
        let x = v(),
          S = 0;
        for (; x < 16 && S++ < 80; ) {
          const E = [...k][d(0, k.size - 1)],
            R = E % u,
            X = (E / u) | 0,
            H = R + d(-2, 2),
            Z = X + d(-2, 2);
          if (!T(H, Z) || I.has(c(H, Z)) || k.has(c(H, Z)) || p[Z][H] !== ".") continue;
          const _ = p[Z][H];
          if ((P(H, Z), !pe.every((ie) => Ye(ie.cells[0][0], ie.cells[0][1])))) {
            p[Z][H] = _;
            continue;
          }
          x = v();
        }
      }
      let Yt = 0;
      for (let k = 1; k < h - 1; k++) for (let v = 1; v < u - 1; v++) C(p[k][v]) && Yt++;
      const It = Yt / ((u - 2) * (h - 2));
      if (It < 0.08 || It > 0.42) return null;
      const Xt = Or[e + "," + s];
      if (Xt)
        for (let k = 1; k < h - 1; k++)
          for (let v = 1; v < u - 1; v++) p[k][v] === "." && pe.some((x) => Math.abs(x.x - v) + Math.abs(x.y - k) < 9) && (p[k][v] = Xt);
      if (zr[e + "," + s]) {
        const v = pe.reduce((x, S) => (Math.abs(S.x - B) < Math.abs(x.x - B) ? S : x)).y < O ? -1 : 1;
        for (let x = L + (v < 0 ? -1 : 2); x > 0 && x < h - 1; x += v) for (let S = V; S < V + 2; S++) p[x][S] === "." && (p[x][S] = "r");
      }
      return p.map((k) => k.join(""));
    }
    ue.forEach((e, s) =>
      e.levels.forEach((a, t) => {
        a.map = Wr(Nr(s, t, a.map), e.id, t);
      }),
    );
    let le = ue[0],
      We = le.levels;
    const J = {
        facile: {
          label: "Facile",
          maxPer: 0,
          waves: 1,
          hp: 0.4675,
          count: 1,
          blocks: 3,
          buy: [20, 10],
          gold: 1,
          kill: 0.7,
          cry: 1,
          speed: 1,
        },
        normal: {
          label: "Normal",
          maxPer: 5,
          waves: 1.25,
          hp: 1.2,
          count: 1.5,
          blocks: 2,
          buy: [30, 15],
          gold: 0.85,
          kill: 0.85,
          cry: 0.8,
          speed: 1.15,
        },
        difficile: {
          label: "Difficile",
          maxPer: 3,
          waves: 1.5,
          hp: 1.6,
          count: 2,
          blocks: 1,
          buy: [40, 20],
          gold: 0.7,
          kill: 0.7,
          cry: 0.6,
          speed: 1.3,
        },
      },
      Ot = ["facile", "normal", "difficile"];
    let we = { x: 6 * $, y: 15 * $ },
      Rt = 0,
      ya = We[0].th;
    const tt = (e, s) => s * Re + e,
      Pe = (e) => e % Re,
      Ce = (e) => (e / Re) | 0,
      oe = (e) => Pe(e) * $ + $ / 2,
      ae = (e) => Ce(e) * $ + $ / 2;
    let sn = [],
      an = [],
      ht = [],
      Ee = new Uint8Array(Be),
      vt = new Int32Array(Be),
      Bt = {},
      ka = 0,
      Ve = new Float32Array(Be),
      Ts = [],
      ut = {};
    function wa(e) {
      const s = [],
        a = {},
        t = [],
        r = [];
      let l = null;
      for (let n = 0; n < et; n++)
        for (let o = 0; o < Re; o++) {
          const d = e[n][o],
            u = tt(o, n),
            h = n === 0 || o === 0 || n === et - 1 || o === Re - 1;
          d === "#"
            ? (s[u] = h ? "edge" : "wall")
            : "thwbsnpfkaomuyjqlxgzv".includes(d)
              ? ((s[u] = "wall"), (t[u] = d))
              : d === "."
                ? (s[u] = "ground")
                : "dcrei".includes(d)
                  ? ((s[u] = "ground"), (r[u] = d))
                  : d === "~"
                    ? (s[u] = "liquid")
                    : d === "X"
                      ? ((s[u] = "crystal"), l || (l = { x: (o + 1) * $, y: (n + 1) * $ }))
                      : ((s[u] = "portal"), (a[d] = a[d] || []).push(u));
        }
      return { base: s, portalCells: a, cry: l, deco: t, gv: r };
    }
    function Ur(e) {
      const s = wa(We[e].map);
      ((ht = s.base),
        (ut = s.portalCells),
        (we = s.cry),
        (sn = s.deco),
        (an = s.gv),
        (Ee = new Uint8Array(Be)),
        (vt = new Int32Array(Be)),
        (Bt = {}),
        (ka = 0),
        (Ve = xa(-1)),
        Xs());
    }
    const Dt = (e, s = -1) =>
        e >= 0 && e < Be && (Array.isArray(s) ? !s.includes(e) : e !== s) && (ht[e] === "ground" || ht[e] === "portal") && !Ee[e],
      Ms = (e) => ht[e] === "wall" || !!Ee[e],
      _r = [
        [1, 0, 1],
        [-1, 0, 1],
        [0, 1, 1],
        [0, -1, 1],
        [1, 1, 1.414],
        [1, -1, 1.414],
        [-1, 1, 1.414],
        [-1, -1, 1.414],
      ];
    function on(e, s) {
      const a = Pe(e),
        t = Ce(e),
        r = [];
      for (const [l, n, o] of _r) {
        const d = a + l,
          u = t + n;
        if (d < 0 || u < 0 || d >= Re || u >= et) continue;
        const h = tt(d, u);
        Dt(h, s) && ((l && n && (!Dt(tt(a + l, t), s) || !Dt(tt(a, t + n), s))) || r.push([h, o]));
      }
      return r;
    }
    function xa(e) {
      const s = new Float32Array(Be).fill(1 / 0),
        a = [];
      for (let r = 0; r < Be; r++)
        if (ht[r] === "crystal") {
          const l = Pe(r),
            n = Ce(r);
          for (const [o, d] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ]) {
            const u = l + o,
              h = n + d;
            if (u < 0 || h < 0 || u >= Re || h >= et) continue;
            const c = tt(u, h);
            Dt(c, e) && s[c] !== 0 && ((s[c] = 0), a.push(c));
          }
        }
      const t = new Uint8Array(Be);
      for (; a.length; ) {
        let r = 0;
        for (let n = 1; n < a.length; n++) s[a[n]] < s[a[r]] && (r = n);
        const l = a[r];
        if (((a[r] = a[a.length - 1]), a.pop(), !t[l])) {
          t[l] = 1;
          for (const [n, o] of on(l, e)) {
            const d = s[l] + o;
            d < s[n] && ((s[n] = d), a.push(n));
          }
        }
      }
      return s;
    }
    function Ta(e) {
      let s = -1,
        a = 1 / 0;
      for (const [t, r] of on(e, -1)) {
        const l = Ve[t] + r;
        l < a - 1e-6 && ((a = l), (s = t));
      }
      return s;
    }
    function Xs() {
      Ts = [];
      for (const e in ut) {
        const s = ut[e];
        let a = s[s.length > 1 ? 1 : 0];
        const t = [[oe(a), ae(a)]];
        let r = 0;
        for (; isFinite(Ve[a]) && Ve[a] > 0 && r++ < 400; ) {
          const l = Ta(a);
          if (l < 0) break;
          ((a = l), t.push([oe(a), ae(a)]));
        }
        (t.push([we.x + (oe(a) - we.x) * 0.45, we.y + (ae(a) - we.y) * 0.45]), Ts.push(t));
      }
    }
    const be = {
        archer: {
          name: "Tour d'archers",
          short: "Archers",
          role: "Rapide",
          cost: [70, 60, 100],
          dmg: [8, 13, 21],
          rate: [0.6, 0.5, 0.42],
          range: [95, 105, 115],
          kind: "phys",
          air: !0,
        },
        mage: {
          name: "Tour de mage",
          short: "Mage",
          role: "Polyvalent",
          cost: [100, 90, 150],
          dmg: [22, 38, 62],
          rate: [1.2, 1.1, 1],
          range: [88, 95, 104],
          kind: "magic",
          air: !0,
        },
        catapult: {
          name: "Catapulte",
          short: "Catapulte",
          role: "Zone",
          cost: [120, 110, 170],
          dmg: [28, 48, 80],
          rate: [2.2, 2, 1.8],
          range: [115, 125, 138],
          splash: [40, 46, 54],
          kind: "phys",
          air: !1,
        },
        frost: {
          name: "Tour de givre",
          short: "Givre",
          role: "Ralentit",
          cost: [90, 80, 120],
          dmg: [3, 5, 8],
          rate: [0.9, 0.8, 0.7],
          range: [85, 92, 100],
          slow: [0.35, 0.45, 0.55],
          splash: [28, 32, 38],
          kind: "magic",
          air: !0,
        },
        storm: {
          name: "Tour \xE9lectrique",
          short: "\xC9clair",
          role: "3 cibles",
          cost: [110, 100, 160],
          dmg: [16, 26, 42],
          rate: [1.3, 1.2, 1.05],
          range: [90, 98, 108],
          kind: "magic",
          air: !0,
        },
        ballista: {
          name: "Baliste",
          short: "Baliste",
          role: "Longue port\xE9e",
          cost: [130, 120, 180],
          dmg: [50, 85, 135],
          rate: [2.4, 2.2, 2],
          range: [165, 180, 195],
          kind: "phys",
          pen: 0.5,
          air: !0,
        },
        alchemist: {
          name: "Tour d'alchimiste",
          short: "Alchimie",
          role: "Poison",
          cost: [100, 90, 140],
          dmg: [9, 15, 24],
          rate: [1.6, 1.5, 1.4],
          range: [95, 102, 112],
          splash: [30, 34, 40],
          kind: "magic",
          air: !0,
        },
      },
      Qe = ["archer", "frost", "mage", "catapult", "ballista", "alchemist", "storm"];
    for (const e in be) {
      const s = be[e],
        a = s.cost[0];
      ((s.cost = [a, Math.round(a * 1.2), Math.round(a * 1.6), Math.round(a * 3)]),
        s.dmg.push(Math.round(s.dmg[2] * 1.25)),
        s.rate.push(+(s.rate[2] * 0.95).toFixed(3)),
        s.range.push(s.range[2] + 8),
        s.splash && s.splash.push(s.splash[2] + 5),
        s.slow && s.slow.push(s.slow[2] + 0.05));
    }
    const Ma = {
        archer: [
          {
            name: "Rafale",
            good: "Tous les 4 tirs, envoie 4 fl\xE8ches de plus sur des ennemis au hasard",
            bad: "-30 % de d\xE9g\xE2ts",
            dmg: 0.7,
          },
          {
            name: "Embuscade",
            good: "Le premier tir sur chaque nouvel ennemi fait 3 fois plus de d\xE9g\xE2ts",
            bad: "-30 % de vitesse de tir",
            rate: 1.43,
          },
        ],
        frost: [
          {
            name: "Onde de givre",
            good: "Toutes les 6 s, g\xE8le sur place tous les ennemis \xE0 port\xE9e pendant 1 s",
            bad: "-35 % de port\xE9e",
            range: 0.65,
          },
          {
            name: "Sillage gel\xE9",
            good: "Les ennemis touch\xE9s laissent derri\xE8re eux une tra\xEEn\xE9e de glace qui ralentit ceux qui suivent (30 %)",
            bad: "-30 % de port\xE9e",
            range: 0.7,
          },
        ],
        mage: [
          {
            name: "T\xE9l\xE9portation",
            good: "5 % de chance de renvoyer la cible au portail d'entr\xE9e (sauf boss)",
            bad: "-30 % de d\xE9g\xE2ts",
            dmg: 0.7,
          },
          {
            name: "Concentration",
            good: "+10 % de d\xE9g\xE2ts \xE0 chaque tir sur la m\xEAme cible (jusqu'\xE0 +100 %)",
            bad: "-20 % de port\xE9e",
            range: 0.8,
          },
        ],
        catapult: [
          {
            name: "Boulet roulant",
            good: "Apr\xE8s l'impact, le rocher roule sur le chemin vers les portails et \xE9crase les ennemis sur sa route (60 % des d\xE9g\xE2ts)",
            bad: "-25 % de vitesse de tir",
            rate: 1.33,
          },
          {
            name: "Tir de barrage",
            good: "Lance 3 rochers \xE0 la fois autour de la cible (45 % des d\xE9g\xE2ts chacun)",
            bad: "-25 % de port\xE9e",
            range: 0.75,
          },
        ],
        ballista: [
          {
            name: "Ex\xE9cution",
            good: "Ach\xE8ve tout ennemi touch\xE9 sous 8 % de vie (sauf boss)",
            bad: "-20 % de vitesse de tir",
            rate: 1.25,
          },
          {
            name: "Carreau explosif",
            good: "Le carreau explose et touche les ennemis autour (50 % des d\xE9g\xE2ts)",
            bad: "N'ignore plus l'armure",
            nopen: 1,
          },
        ],
        alchemist: [
          { name: "Catalyseur", good: "Le poison se cumule jusqu'\xE0 3 fois sur la m\xEAme cible", bad: "-30 % de poison", dmg: 0.7 },
          {
            name: "Fiole de faiblesse",
            good: "Les ennemis touch\xE9s font 40 % de d\xE9g\xE2ts en moins au cristal pendant 5 s",
            bad: "-25 % de port\xE9e",
            range: 0.75,
          },
        ],
        storm: [
          {
            name: "Champ statique",
            good: "Ne lance plus d'\xE9clair : blesse tous les ennemis \xE0 port\xE9e 2 fois par seconde",
            bad: "-35 % de port\xE9e, d\xE9g\xE2ts par coup \xD70,3",
            range: 0.65,
            rate: 0.5,
            dmg: 0.3,
          },
          {
            name: "Recharge",
            good: "Chaque monstre tu\xE9 par cette tour recharge le Souffle de 3 %",
            bad: "-20 % de d\xE9g\xE2ts",
            dmg: 0.8,
          },
        ],
      },
      oo = 4,
      Os = () => zs() || !!m.eSave,
      zs = () => m.prog[ue[oo].id].facile >= ue[oo].levels.length,
      no = (e, s) => (s ? Ma[e][s - 1] : null),
      Ke = (e, s, a) => !!e && e.type === s && e.spec === a && e.lvl >= 3,
      zt = { catapult: 0, ballista: 1, alchemist: 2, storm: 3 },
      ct = (e) => !(e in zt) || m.prog[ue[zt[e]].id].facile >= ue[zt[e]].levels.length,
      ro = (e) => `Battre le boss du biome ${zt[e] + 1}`,
      pt = {
        name: "Cristal du dragon",
        hp: 400,
        dmg: [20, 34, 55],
        rate: [0.7, 0.6, 0.5],
        range: [95, 110, 125],
        up: [0, 150, 250],
        repair: 50,
      },
      ce = {
        gob: { name: "Gobelin", pl: "Gobelins", hp: 40, sp: 44, armor: 0, gold: 6, r: 8, atk: 2 },
        loup: { name: "Loup", pl: "Loups", hp: 30, sp: 78, armor: 0, gold: 5, r: 9, atk: 1.5 },
        orc: { name: "Orc cuirass\xE9", pl: "Orcs cuirass\xE9s", hp: 110, sp: 32, armor: 0.45, gold: 12, r: 10, atk: 4 },
        troll: { name: "Troll", pl: "Trolls", hp: 400, sp: 22, armor: 0.2, regen: 6, gold: 28, r: 14, atk: 8 },
        wyv: { name: "Wyverne", pl: "Wyvernes", hp: 75, sp: 50, armor: 0, gold: 12, r: 10, fly: !0, atk: 3 },
        dragon: { name: "Dragon", pl: "Dragons", hp: 1800, sp: 17, armor: 0.3, gold: 220, r: 22, fly: !0, boss: !0, atk: 20 },
        drake: { name: "Dragon noir", pl: "Dragons noirs", hp: 5500, sp: 13, armor: 0.35, gold: 500, r: 28, fly: !0, boss: !0, atk: 35 },
        bandit: { name: "Brigand", pl: "Brigands", hp: 40, sp: 44, armor: 0, gold: 6, r: 8, atk: 2, human: 1 },
        rider: { name: "Cavalier", pl: "Cavaliers", hp: 30, sp: 78, armor: 0, gold: 5, r: 10, atk: 1.5, human: 1 },
        soldier: { name: "Soldat", pl: "Soldats", hp: 110, sp: 32, armor: 0.45, gold: 12, r: 10, atk: 4, human: 1 },
        knight: { name: "Chevalier", pl: "Chevaliers", hp: 400, sp: 22, armor: 0.3, gold: 28, r: 13, atk: 8, human: 1 },
        hawk: { name: "Faucon de guerre", pl: "Faucons de guerre", hp: 60, sp: 56, armor: 0, gold: 10, r: 9, fly: !0, atk: 3, human: 1 },
        captain: { name: "Capitaine", pl: "Capitaines", hp: 1800, sp: 17, armor: 0.35, gold: 220, r: 16, boss: !0, atk: 20, human: 1 },
        warlord: { name: "Varek", pl: "Varek", hp: 5500, sp: 13, armor: 0.4, gold: 500, r: 24, boss: !0, atk: 35, human: 1 },
        guard: { name: "Garde", pl: "Gardes", hp: 40, sp: 44, armor: 0, gold: 6, r: 8, atk: 2, human: 1 },
        hound: { name: "Chien de garde", pl: "Chiens de garde", hp: 30, sp: 80, armor: 0, gold: 5, r: 9, atk: 1.5, human: 1 },
        manatarms: { name: "Homme d'armes", pl: "Hommes d'armes", hp: 110, sp: 32, armor: 0.45, gold: 12, r: 10, atk: 4, human: 1 },
        blackknight: { name: "Chevalier noir", pl: "Chevaliers noirs", hp: 400, sp: 22, armor: 0.35, gold: 28, r: 13, atk: 8, human: 1 },
        bat: { name: "Chauve-souris", pl: "Chauves-souris", hp: 55, sp: 60, armor: 0, gold: 10, r: 9, fly: !0, atk: 3, human: 1 },
        executioner: { name: "Bourreau", pl: "Bourreaux", hp: 1900, sp: 16, armor: 0.3, gold: 230, r: 16, boss: !0, atk: 22, human: 1 },
        kobold: { name: "Kobold", pl: "Kobolds", hp: 40, sp: 46, armor: 0, gold: 6, r: 8, atk: 2, human: 1 },
        spider: { name: "Araign\xE9e", pl: "Araign\xE9es", hp: 30, sp: 82, armor: 0, gold: 5, r: 9, atk: 1.5, human: 1 },
        golem: { name: "Golem de pierre", pl: "Golems de pierre", hp: 110, sp: 28, armor: 0.5, gold: 12, r: 11, atk: 4, human: 1 },
        ogre: { name: "Ogre des cavernes", pl: "Ogres", hp: 420, sp: 21, armor: 0.2, gold: 28, r: 14, atk: 8, human: 1 },
        basilisk: { name: "Basilic", pl: "Basilics", hp: 1900, sp: 17, armor: 0.35, gold: 230, r: 16, boss: !0, atk: 22, human: 1 },
        queen: { name: "La reine araign\xE9e", pl: "Reines", hp: 6200, sp: 14, armor: 0.35, gold: 600, r: 24, boss: !0, atk: 38, human: 1 },
        raider: { name: "Pillard", pl: "Pillards", hp: 40, sp: 46, armor: 0, gold: 6, r: 8, atk: 2, human: 1 },
        hyena: { name: "Hy\xE8ne", pl: "Hy\xE8nes", hp: 32, sp: 84, armor: 0, gold: 5, r: 9, atk: 1.5, human: 1 },
        scorpion: { name: "Scorpion g\xE9ant", pl: "Scorpions g\xE9ants", hp: 110, sp: 32, armor: 0.5, gold: 12, r: 10, atk: 4, human: 1 },
        sandgolem: { name: "Golem de sable", pl: "Golems de sable", hp: 420, sp: 21, armor: 0.3, gold: 28, r: 13, atk: 8, human: 1 },
        vulture: { name: "Vautour", pl: "Vautours", hp: 60, sp: 58, armor: 0, gold: 10, r: 9, fly: !0, atk: 3, human: 1 },
        mummy: { name: "Momie royale", pl: "Momies royales", hp: 2e3, sp: 16, armor: 0.35, gold: 240, r: 16, boss: !0, atk: 22, human: 1 },
        worm: {
          name: "Le ver des sables",
          pl: "Vers des sables",
          hp: 6500,
          sp: 13,
          armor: 0.4,
          gold: 650,
          r: 26,
          boss: !0,
          atk: 40,
          human: 1,
        },
        baron: { name: "Le baron Corvin", pl: "Barons", hp: 6e3, sp: 13, armor: 0.4, gold: 600, r: 24, boss: !0, atk: 38, human: 1 },
      },
      Yr = [
        { hp: 1, ar: 0, sp: 1, atk: 1 },
        { hp: 1.08, ar: 0.015, sp: 1.01, atk: 1.1 },
        { hp: 1.18, ar: 0.03, sp: 1.025, atk: 1.25 },
        { hp: 1.3, ar: 0.045, sp: 1.04, atk: 1.4 },
        { hp: 1.45, ar: 0.06, sp: 1.06, atk: 1.6 },
      ],
      Qr = {},
      Kr = {},
      nn = [1, 1.15, 1.35, 1.6, 1.9];
    (function () {
      const e = new Set(),
        s = [];
      ue.forEach((a) => {
        const t = Object.values(a.roster).length ? Object.values(a.roster) : ["gob", "loup", "orc", "troll", "wyv", "dragon", "drake"];
        for (const r of t) {
          if (e.has(r)) continue;
          e.add(r);
          const l = ce[r],
            n = Yr[a.tier];
          l &&
            ((l.hp = Math.round(l.hp * n.hp)),
            l.armor > 0 && (l.armor = Math.min(0.7, +(l.armor + n.ar).toFixed(2))),
            (l.sp = Math.round(l.sp * n.sp)),
            (l.atk = +(l.atk * n.atk).toFixed(1)),
            (Qr[r] = n.hp),
            (Kr[r] = nn[a.tier]));
        }
      });
    })();
    const te = (e, s, a, t = 0) => ({ t: e, n: s, gap: a, delay: t }),
      lo = [
        [te("gob", 8, 0.9)],
        [te("gob", 12, 0.8)],
        [te("gob", 8, 0.8), te("loup", 5, 0.7, 5)],
        [te("orc", 5, 1.4), te("gob", 8, 0.7, 3)],
        [te("loup", 10, 0.6), te("wyv", 4, 1.5, 4)],
        [te("orc", 8, 1.1), te("gob", 10, 0.6, 2)],
        [te("troll", 2, 4), te("gob", 12, 0.6, 1)],
        [te("wyv", 8, 1), te("loup", 10, 0.5, 3)],
        [te("orc", 10, 0.9), te("troll", 3, 3, 4)],
        [te("gob", 12, 0.5), te("dragon", 1, 0, 6)],
        [te("loup", 16, 0.4), te("orc", 6, 1, 4)],
        [te("wyv", 12, 0.8), te("troll", 3, 3, 2)],
        [te("orc", 14, 0.7), te("loup", 10, 0.4, 5)],
        [te("troll", 6, 2), te("wyv", 8, 0.9, 3)],
        [te("dragon", 1, 0), te("orc", 10, 0.8, 2), te("wyv", 6, 1, 8)],
        [te("loup", 25, 0.3), te("troll", 4, 2.5, 4)],
        [te("orc", 18, 0.6), te("wyv", 12, 0.7, 3)],
        [te("troll", 10, 1.6), te("loup", 15, 0.4, 5)],
        [te("wyv", 20, 0.5), te("orc", 14, 0.6, 4)],
        [te("dragon", 2, 8), te("troll", 6, 2, 2), te("orc", 15, 0.6, 6)],
      ],
      Sa = (e) => 1 + 0.18 * (e - 1) + 0.012 * (e - 1) * (e - 1),
      Zt = [
        { id: "n0", name: "Puissance", desc: "+5 % de d\xE9g\xE2ts par point", max: 3, cost: 1 },
        { id: "n1", name: "Longue vue", desc: "+4 % de port\xE9e par point", max: 3, cost: 1 },
        { id: "n2", name: "Cadence", desc: "+6 % de vitesse de tir par point", max: 3, cost: 1 },
      ],
      Ss = {
        archer: [
          ...Zt,
          { id: "n3", name: "Fl\xE8ches per\xE7antes", desc: "Ignore 15 % de l'armure par point", max: 2, cost: 2 },
          { id: "n4", name: "\u0152il de lynx", desc: "2,5 % de chance par point de coup critique \xD72", max: 2, cost: 2 },
          { id: "n5", name: "Vol\xE9e", desc: "Tire sur 2 cibles \xE0 la fois", max: 1, cost: 3 },
          {
            id: "n6",
            name: "Fl\xE8ches de feu",
            desc: "Br\xFBle la cible : 30 % des d\xE9g\xE2ts par seconde pendant 3 s",
            max: 1,
            cost: 3,
          },
        ],
        mage: [
          ...Zt,
          { id: "n3", name: "Arcane instable", desc: "10 % de chance par point de doubler les d\xE9g\xE2ts", max: 2, cost: 2 },
          { id: "n4", name: "\xC9conomie", desc: "-10 % sur le prix de la tour et de ses niveaux par point", max: 2, cost: 2 },
          { id: "n5", name: "Cha\xEEne d'\xE9clairs", desc: "Rebondit sur 2 ennemis proches (60 % des d\xE9g\xE2ts)", max: 1, cost: 3 },
          {
            id: "n6",
            name: "Mal\xE9diction",
            desc: "La cible subit +20 % de d\xE9g\xE2ts de toutes les sources pendant 3 s",
            max: 1,
            cost: 3,
          },
        ],
        catapult: [
          ...Zt,
          { id: "n3", name: "Gros calibre", desc: "+12 % de zone par point", max: 2, cost: 2 },
          { id: "n4", name: "Sonn\xE9", desc: "8 % de chance par point d'\xE9tourdir 1 s", max: 2, cost: 2 },
          { id: "n5", name: "Fragmentation", desc: "L'impact projette 3 \xE9clats (35 % des d\xE9g\xE2ts)", max: 1, cost: 3 },
          { id: "n6", name: "Poix enflamm\xE9e", desc: "Laisse un sol br\xFBlant pendant 3 s", max: 1, cost: 3 },
        ],
        frost: [
          ...Zt,
          { id: "n3", name: "Froid mordant", desc: "+6 % de ralentissement par point", max: 2, cost: 2 },
          { id: "n4", name: "Gel durable", desc: "+0,5 s de ralentissement par point", max: 2, cost: 2 },
          { id: "n5", name: "Gel total", desc: "12 % de chance de geler la cible 1,5 s", max: 1, cost: 3 },
          { id: "n6", name: "Fragilit\xE9", desc: "Les ennemis ralentis subissent +15 % de d\xE9g\xE2ts", max: 1, cost: 3 },
        ],
        storm: [
          ...Zt,
          { id: "n3", name: "Surtension", desc: "L'\xE9clair rebondit sur 1 cible de plus par point", max: 2, cost: 2 },
          { id: "n4", name: "\xC9lectrocution", desc: "6 % de chance par point d'\xE9tourdir 0,4 s", max: 2, cost: 2 },
          { id: "n5", name: "Orage", desc: "20 % de chance de lancer un second \xE9clair", max: 1, cost: 3 },
          { id: "n6", name: "Paratonnerre", desc: "+50 % de d\xE9g\xE2ts contre les volants", max: 1, cost: 3 },
        ],
        ballista: [
          ...Zt,
          { id: "n3", name: "Carreaux lourds", desc: "Ignore 15 % d'armure de plus par point", max: 2, cost: 2 },
          { id: "n4", name: "Chasseur de g\xE9ants", desc: "+20 % de d\xE9g\xE2ts par point contre les boss", max: 2, cost: 2 },
          { id: "n5", name: "Perforation", desc: "Le carreau traverse et touche 2 ennemis derri\xE8re (60 %)", max: 1, cost: 3 },
          { id: "n6", name: "Tir assommant", desc: "Chaque tir \xE9tourdit la cible 0,8 s", max: 1, cost: 3 },
        ],
        alchemist: [
          ...Zt,
          { id: "n3", name: "Toxine durable", desc: "Le poison dure 1,5 s de plus par point", max: 2, cost: 2 },
          { id: "n4", name: "Acide", desc: "Malus : les cibles de l'alchimiste perdent 7,5 % de leur armure par point", max: 2, cost: 2 },
          { id: "n5", name: "Contagion", desc: "Un ennemi empoisonn\xE9 qui meurt contamine ses voisins", max: 1, cost: 3 },
          { id: "n6", name: "Brume toxique", desc: "La fiole laisse un nuage de poison pendant 3 s", max: 1, cost: 3 },
        ],
      },
      io = (e) => {
        const s = m.ranks[e] || 1;
        return s < 10 ? 1 : s < 20 ? 2 : 3;
      },
      rn = (e) => {
        let s = 0;
        for (let a = 1; a < (m.ranks[e] || 1); a++) s += $s[a];
        return s;
      },
      Jt = 30,
      $s = [0, 15, 30, 50, 75, 105, 140, 180, 225, 275],
      Mi = 0.03,
      $a = (e) => {
        let s = 0;
        for (let a = 2; a <= e; a++) s += a % 10 === 0 ? 4 : 3;
        return s;
      };
    {
      let e = 275,
        s = 50;
      for (; $s.length < Jt; ) ((s += 2), (e += s), $s.push(Math.round(e / 5) * 5));
    }
    const ln = { facile: 1, normal: 1.5, difficile: 2.2 },
      Zr = () => ({ n0: 0, n1: 0, n2: 0, n3: 0, n4: 0, n5: 0, n6: 0 });
    let m,
      Oe = null,
      dn = null,
      Se = null,
      Jr = null;
    const Gt = () => Jr || (Se && Se.me === "guest" ? "g" : "h");
    try {
      localStorage.getItem("bastion3-reset-1") || (localStorage.removeItem("bastion3-meta"), localStorage.setItem("bastion3-reset-1", "1"));
    } catch {}
    function uo(e) {
      let s = null;
      if (e !== void 0) s = e;
      else
        try {
          s = JSON.parse(localStorage.getItem("bastion3-meta") || "null");
        } catch {}
      ((m = Object.assign(
        {
          gems: 0,
          scales: 0,
          runes: 0,
          games: 0,
          ranks: {},
          spellRanks: {},
          tree: {},
          best: {},
          prog: {},
          stars: {},
          inv: {},
          relics: {},
          pity: 0,
        },
        s || {},
      )),
        m.deck && !m.decks && ((m.decks = [m.deck, null, null]), delete m.deck));
      {
        const a = { bag: 40, purse: 30, potion: 35, rage: 60, breath: 45, horn: 50 };
        for (const t in m.inv) m.scales += (a[t] || 0) * (m.inv[t] || 0);
        m.inv = {};
      }
      typeof m.prog.facile == "number" && ((m.prog = { plaine: m.prog }), (m.stars = { plaine: m.stars || {} }));
      for (const a of ue) {
        const t = (m.prog[a.id] = m.prog[a.id] || {}),
          r = (m.stars[a.id] = m.stars[a.id] || {});
        for (const l of ["facile", "normal", "difficile"]) ((t[l] = t[l] || 0), (r[l] = r[l] || []));
      }
      for (const a of Qe) ((m.ranks[a] = m.ranks[a] || 1), (m.tree[a] = Object.assign(Zr(), m.tree[a] || {})));
      if (
        ((m.tree.gen = Object.assign(
          {
            g1: 0,
            g2: 0,
            g3: 0,
            g4: 0,
            g5: 0,
            g6: 0,
            g7: 0,
            g1a: 0,
            g1b: 0,
            g2a: 0,
            g2b: 0,
            g3a: 0,
            g3b: 0,
            g4a: 0,
            g4b: 0,
            g5a: 0,
            g5b: 0,
            g6a: 0,
            g6b: 0,
            g7a: 0,
            g7b: 0,
          },
          m.tree.gen || {},
        )),
        !m.mig2)
      ) {
        m.mig2 = 1;
        for (const a of ["purse", "seal", "mason"]) {
          const t = m.relics[a];
          t && ((m.scales += 60 * (t.lvl + t.cp)), delete m.relics[a]);
        }
        ((m.runes += 2 * (m.tree.gen.g7 || 0)), (m.tree.gen.g7 = 0));
      }
      (m.tutoDone === void 0 &&
        ((m.tutoDone = m.games > 0 ? 1 : 0), m.games > 0 && (m.tips = { biome: 1, results: 1, armory: 1, tree: 1, quests: 1, shop: 1 })),
        (m.tips = m.tips || {}),
        m.tree.gen.g6 > 1 && ((m.runes += (m.tree.gen.g6 - 1) * 3), (m.tree.gen.g6 = 1)));
    }
    function he() {
      if (!(Oe || Se)) {
        try {
          localStorage.setItem("bastion3-meta", JSON.stringify(m));
        } catch {}
        try {
          cloudSched();
        } catch {}
      }
    }
    uo();
    const re = (e, s) => m.tree[e][s] || 0;
    function Gs(e, s, a, t) {
      const r = el(e, s);
      {
        const l = s >= 3 && no(e, t);
        l &&
          (l.dmg && (r.dmg *= l.dmg),
          l.range && (r.range *= l.range),
          l.rate && (r.rate *= l.rate),
          l.splash && (r.splash *= l.splash),
          l.slow && (r.slow = Math.min(0.85, r.slow + l.slow)),
          l.slowMul && (r.slow *= l.slowMul));
      }
      return (a !== void 0 && a >= 0 && (Ee[a] ? (r.dmg *= 1 + 0.04 * me("g6a")) : (r.range *= 1 + 0.03 * me("g6b"))), r);
    }
    function el(e, s) {
      const a = be[e],
        t = m.ranks[e],
        r = (n) => (m.tree.gen && m.tree.gen[n]) || 0,
        l = (n) => ke(n);
      return {
        dmg:
          a.dmg[s] *
          (1 + $a(t) / 100) *
          (1 + 0.05 * re(e, "n0") + 0.03 * r("g1")) *
          (1 + 0.01 * l("ins_" + e) + 0.01 * l("heart") + 0.005 * l("banner") + 0.005 * (a.kind === "phys" ? l("whet") : l("ink"))),
        range: a.range[s] * (1 + 0.04 * re(e, "n1") + 0.02 * r("g2") + 0.005 * l("lens")),
        rate: a.rate[s] / (1 + 0.06 * re(e, "n2") + 0.03 * r("g3") + 0.005 * l("banner")),
        splash: a.splash ? a.splash[s] * (1 + (e === "catapult" ? 0.12 * re(e, "n3") : 0) + 0.05 * r("g2b")) : 0,
        slow: a.slow ? Math.min(0.8, a.slow[s] + 0.06 * re(e, "n3")) : 0,
        slowDur: 1.6 + (e === "frost" ? 0.5 * re(e, "n4") : 0),
      };
    }
    function yt(e, s) {
      const a = (t) => (m.tree.gen && m.tree.gen[t]) || 0;
      return Math.round(
        be[e].cost[s] *
          (e === "mage" ? 1 - 0.1 * re("mage", "n4") : 1) *
          (s === 0 ? 1 - 0.03 * a("g4") : 1) *
          (s === 1 ? 1 - 0.03 * a("g4a") : s === 2 ? 1 - 0.025 * a("g4a") : 1),
      );
    }
    function un(e) {
      return Ss[e].reduce((s, a) => s + re(e, a.id) * a.cost, 0);
    }
    function co(e) {
      return e.id < "n3" ? 1 : e.id < "n5" ? 2 : 3;
    }
    function fo(e, s) {
      return Ss[e].filter((a) => co(a) === s).reduce((a, t) => a + re(e, t.id), 0);
    }
    const ho = (e) => (e === "n0" ? 0 : e < "n3" ? 5 : e < "n5" ? 15 : 25);
    function tl(e, s) {
      const a = re(e, s.id),
        t = co(s);
      return (a === 0 && (m.ranks[e] || 1) < ho(s.id)) || (t === 2 && fo(e, 1) < 3) || (t === 3 && fo(e, 2) < 2)
        ? "locked"
        : t === 3 && fo(e, 3) > 0 && a === 0
          ? "other"
          : a >= s.max
            ? "full"
            : m.runes >= s.cost
              ? "buy"
              : "poor";
    }
    function es(e) {
      return () => {
        ((e |= 0), (e = (e + 1831565813) | 0));
        let s = Math.imul(e ^ (e >>> 15), 1 | e);
        return ((s = (s + Math.imul(s ^ (s >>> 7), 61 | s)) ^ s), ((s ^ (s >>> 14)) >>> 0) / 4294967296);
      };
    }
    function g(e, s, a = 2) {
      ((e.fillStyle = s), e.fill(), (e.lineWidth = a), (e.strokeStyle = Q), (e.lineJoin = "round"), e.stroke());
    }
    function D(e, s, a, t) {
      (e.beginPath(), e.arc(s, a, t, 0, Math.PI * 2));
    }
    function A(e, s, a, t, r, l = 0) {
      (e.beginPath(), e.ellipse(s, a, t, r, l, 0, Math.PI * 2));
    }
    function j(e, s, a, t, r, l) {
      (e.beginPath(), e.roundRect ? e.roundRect(s, a, t, r, l) : e.rect(s, a, t, r));
    }
    function F(e, s) {
      (e.beginPath(), s.forEach((a, t) => (t ? e.lineTo(a[0], a[1]) : e.moveTo(a[0], a[1]))), e.closePath());
    }
    function rt(e, s, a, t, r, l = 0.55) {
      ((e.fillStyle = `rgba(255,255,255,${l})`), A(e, s, a, t, r, -0.5), e.fill());
    }
    function Nt(e, s, a, t, r) {
      e.beginPath();
      for (let l = 0; l < 10; l++) {
        const n = -Math.PI / 2 + (l * Math.PI) / 5,
          o = l % 2 ? t * 0.45 : t;
        e.lineTo(s + Math.cos(n) * o, a + Math.sin(n) * o);
      }
      (e.closePath(), g(e, r, 1.5));
    }
    function Fe(e, s, a, t, r = 1, l = !1) {
      (D(e, s, a, t),
        g(e, "#fff", 1.4),
        (e.fillStyle = "#111"),
        D(e, s + r * t * 0.35, a + t * 0.1, t * 0.5),
        e.fill(),
        (e.fillStyle = "#fff"),
        D(e, s + r * t * 0.2, a - t * 0.2, t * 0.18),
        e.fill(),
        l &&
          ((e.strokeStyle = Q),
          (e.lineWidth = 1.8),
          e.beginPath(),
          e.moveTo(s - t, a - t * 1.2),
          e.lineTo(s + t, a - t * 0.6),
          e.stroke()));
    }
    function Ns(e, s, a) {
      (j(e, s + 1.5, a + 1.5, $ - 3, $ - 3, 5),
        g(e, "#c48f4a", 2),
        j(e, s + 1.5, a + 1.5, $ - 3, $ - 10, 5),
        g(e, "#f3d08c", 2),
        (e.strokeStyle = "rgba(47,29,18,.35)"),
        (e.lineWidth = 1.1),
        e.beginPath(),
        e.moveTo(s + 4, a + 11),
        e.lineTo(s + $ - 4, a + 11),
        e.moveTo(s + 15, a + 3),
        e.lineTo(s + 15, a + 11),
        e.moveTo(s + 9, a + 11),
        e.lineTo(s + 9, a + 19),
        e.moveTo(s + 21, a + 11),
        e.lineTo(s + 21, a + 19),
        e.stroke(),
        rt(e, s + 7, a + 6, 3, 1.5, 0.6));
    }
    let kt = 1,
      Hs = 1,
      La = null,
      Te = 1,
      ft = 0,
      wt = 0;
    const cn = 2.6;
    function fn() {
      ((Te = Math.max(1, Math.min(cn, Te))),
        (ft = Math.max(0, Math.min(de - de / Te, ft))),
        (wt = Math.max(0, Math.min(ge - ge / Te, wt))));
    }
    function hn(e, s, a) {
      const t = (s - ft) * Te,
        r = (a - wt) * Te;
      ((Te = Math.max(1, Math.min(cn, e))), (ft = s - t / Te), (wt = a - r / Te), fn(), pn());
    }
    function pn() {
      const e = document.getElementById("zoomLbl");
      e && (e.textContent = "\xD7" + (Math.round(Te * 10) / 10).toString().replace(".", ","));
    }
    function sl(e, s, a, t, r) {
      const l = es(t);
      ((e.fillStyle = r.edge || "#2f6a33"), e.fillRect(s, a, $, $));
      for (let n = 0; n < 3; n++) {
        const o = s + 5 + l() * 20,
          d = a + 5 + l() * 20,
          u = 7 + l() * 5;
        (D(e, o, d, u), (e.fillStyle = n % 2 ? "rgba(0,0,0,.12)" : "rgba(255,255,255,.07)"), e.fill());
      }
    }
    function al(e, s, a, t, r, l) {
      const n = es(t),
        o = s + $ / 2,
        d = a + $ / 2;
      if (((e.fillStyle = "rgba(30,70,20,.3)"), A(e, o + 1, d + 10, 12, 4.5), e.fill(), l === "t")) {
        (j(e, o - 2.5, d + 1, 5, 10, 2), g(e, "#8a4f25", 1.8));
        const u = r.tree || "#45b649";
        for (const [h, c, p] of [
          [-5, -3, 7],
          [5, -3, 7],
          [0, -9, 8],
        ])
          (D(e, o + h, d + c, p), g(e, u, 2));
        ((e.fillStyle = u), A(e, o, d - 4, 7, 5), e.fill(), rt(e, o - 3, d - 11, 3, 1.8, 0.45));
      } else if (l === "h")
        (A(e, o, d + 2, 12, 9),
          g(e, "#e8c24a", 2),
          (e.strokeStyle = "#b8902e"),
          (e.lineWidth = 1.4),
          e.beginPath(),
          e.arc(o - 2, d + 2, 5, 0, 5.2),
          e.stroke(),
          e.beginPath(),
          e.arc(o - 2, d + 2, 2, 0, 5),
          e.stroke(),
          rt(e, o - 5, d - 3, 3, 1.5, 0.5));
      else if (l === "w")
        (A(e, o, d + 5, 11, 6),
          g(e, "#a0a4b4", 2),
          A(e, o, d + 3, 8, 4),
          g(e, "#2a4a6a", 1.6),
          (e.strokeStyle = Q),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(o - 9, d + 4),
          e.lineTo(o - 9, d - 9),
          e.moveTo(o + 9, d + 4),
          e.lineTo(o + 9, d - 9),
          e.stroke(),
          F(e, [
            [o - 13, d - 8],
            [o + 13, d - 8],
            [o, d - 16],
          ]),
          g(e, "#c9502b", 2));
      else if (l === "b") {
        for (const [u, h] of [
          [-5, 2],
          [5, 3],
        ])
          (j(e, o + u - 5, d + h - 9, 10, 13, 4),
            g(e, "#b06d36", 1.8),
            (e.strokeStyle = "#5a5a6a"),
            (e.lineWidth = 1.5),
            e.beginPath(),
            e.moveTo(o + u - 5, d + h - 5),
            e.lineTo(o + u + 5, d + h - 5),
            e.moveTo(o + u - 5, d + h + 1),
            e.lineTo(o + u + 5, d + h + 1),
            e.stroke());
        (A(e, o - 5, d - 7, 5, 1.8), g(e, "#d99a5c", 1.2));
      } else if (l === "s") {
        const u = r.rock || ["#e0d3b8", "#b3a387"];
        (j(e, s + 2, a + 4, $ - 4, $ - 6, 4),
          g(e, u[1], 2),
          j(e, s + 2, a + 4, $ - 4, $ - 13, 4),
          g(e, u[0], 2),
          (e.strokeStyle = "rgba(47,29,18,.35)"),
          (e.lineWidth = 1.1),
          e.beginPath(),
          e.moveTo(s + 4, a + 10),
          e.lineTo(s + $ - 4, a + 10),
          e.moveTo(s + 12, a + 4),
          e.lineTo(s + 12, a + 10),
          e.moveTo(s + 19, a + 10),
          e.lineTo(s + 19, a + 16),
          e.stroke(),
          n() < 0.5 && ((e.fillStyle = "#5cc24a"), A(e, s + 8 + n() * 14, a + 5, 4, 1.8), e.fill()));
      } else if (l === "p") {
        (A(e, o, d + 9, 10, 4),
          g(e, r.rock ? r.rock[1] : "#9c94aa", 1.8),
          j(e, o - 7, d - 14, 14, 24, 3),
          g(e, r.rock ? r.rock[0] : "#c9c2d4", 2),
          (e.strokeStyle = "rgba(47,29,18,.3)"),
          (e.lineWidth = 1.2),
          e.beginPath());
        for (const u of [-3, 1, 4]) (e.moveTo(o + u, d - 12), e.lineTo(o + u, d + 8));
        (e.stroke(), j(e, o - 9, d - 17, 18, 5, 2), g(e, r.rock ? r.rock[1] : "#9c94aa", 1.8), rt(e, o - 4, d - 8, 1.5, 4, 0.4));
      } else if (l === "f") {
        ((e.strokeStyle = Q),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(o - 6, d + 10),
          e.lineTo(o - 3, d),
          e.moveTo(o + 6, d + 10),
          e.lineTo(o + 3, d),
          e.moveTo(o, d + 10),
          e.lineTo(o, d),
          e.stroke(),
          e.beginPath(),
          e.moveTo(o - 9, d - 3),
          e.lineTo(o + 9, d - 3),
          e.lineTo(o + 6, d + 2),
          e.lineTo(o - 6, d + 2),
          e.closePath(),
          g(e, "#4a4a5a", 1.8));
        const u = e.createRadialGradient(o, d - 8, 0, o, d - 8, 16);
        (u.addColorStop(0, "rgba(255,190,80,.55)"),
          u.addColorStop(1, "rgba(255,190,80,0)"),
          (e.fillStyle = u),
          D(e, o, d - 8, 16),
          e.fill(),
          F(e, [
            [o - 7, d - 3],
            [o - 4, d - 12],
            [o - 1, d - 6],
            [o + 2, d - 15],
            [o + 5, d - 7],
            [o + 7, d - 3],
          ]),
          g(e, "#ff9a3c", 1.4),
          F(e, [
            [o - 3, d - 3],
            [o, d - 9],
            [o + 3, d - 3],
          ]),
          (e.fillStyle = "#ffe066"),
          e.fill());
      } else if (l === "k")
        (j(e, o - 12, d - 6, 24, 12, 3),
          g(e, "#9a5b2c", 2),
          j(e, o - 12, d - 6, 24, 7, 3),
          g(e, "#c98547", 1.8),
          (e.strokeStyle = Q),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(o - 9, d + 6),
          e.lineTo(o - 9, d + 10),
          e.moveTo(o + 9, d + 6),
          e.lineTo(o + 9, d + 10),
          e.stroke(),
          A(e, o - 5, d - 3, 3.5, 2),
          g(e, "#e6e2ee", 1.2),
          j(e, o + 3, d - 7, 4, 5, 1.5),
          g(e, "#ffc93c", 1.2));
      else if (l === "a")
        (j(e, o - 4, d - 1, 8, 10, 2),
          g(e, "#5a5a6a", 1.8),
          e.beginPath(),
          e.moveTo(o - 12, d - 7),
          e.lineTo(o + 8, d - 7),
          e.quadraticCurveTo(o + 13, d - 6, o + 13, d - 3),
          e.lineTo(o + 5, d - 3),
          e.lineTo(o + 5, d),
          e.lineTo(o - 8, d),
          e.lineTo(o - 8, d - 3),
          e.lineTo(o - 12, d - 4),
          e.closePath(),
          g(e, "#6e7080", 2),
          rt(e, o - 4, d - 6, 4, 1, 0.5),
          (e.strokeStyle = "#ff9a3c"),
          (e.lineWidth = 1.4),
          e.beginPath(),
          e.moveTo(o + 2, d - 10),
          e.lineTo(o + 4, d - 13),
          e.moveTo(o - 2, d - 10),
          e.lineTo(o - 4, d - 14),
          e.stroke());
      else if (l === "o") {
        (j(e, o - 12, d - 16, 24, 28, 5),
          g(e, "#ffc93c", 2.2),
          j(e, o - 8, d - 12, 16, 14, 4),
          g(e, "#7a3fb0", 1.8),
          j(e, o - 12, d + 2, 24, 8, 3),
          g(e, "#e0a82a", 2));
        for (const u of [-8, 0, 8]) Nt(e, o + u, d - 17, 3.2, "#ffe066");
      } else if (l === "m") {
        const u = r.rock || ["#8a8299", "#5f5870"];
        (F(e, [
          [o - 10, d + 9],
          [o - 4, d - 14],
          [o + 1, d + 9],
        ]),
          g(e, u[0], 2),
          F(e, [
            [o - 1, d + 9],
            [o + 5, d - 6],
            [o + 10, d + 9],
          ]),
          g(e, u[1], 2),
          rt(e, o - 5, d - 4, 1.4, 4, 0.35));
      } else if (l === "u") {
        (j(e, o - 3, d - 2, 6, 12, 2),
          g(e, "#e6dccb", 1.6),
          e.beginPath(),
          e.ellipse(o, d - 3, 12, 8, 0, Math.PI, 0),
          e.closePath(),
          g(e, "#b07cff", 2));
        for (const [h, c] of [
          [-5, -6],
          [3, -8],
          [6, -4],
        ])
          (D(e, o + h, d + c, 1.6), (e.fillStyle = "#fff7e0"), e.fill());
        const u = e.createRadialGradient(o, d - 4, 0, o, d - 4, 16);
        (u.addColorStop(0, "rgba(200,150,255,.35)"),
          u.addColorStop(1, "rgba(200,150,255,0)"),
          (e.fillStyle = u),
          D(e, o, d - 4, 16),
          e.fill());
      } else if (l === "y") {
        const u = e.createRadialGradient(o, d - 4, 0, o, d - 4, 17);
        (u.addColorStop(0, "rgba(120,200,255,.45)"),
          u.addColorStop(1, "rgba(120,200,255,0)"),
          (e.fillStyle = u),
          D(e, o, d - 4, 17),
          e.fill(),
          F(e, [
            [o - 9, d + 9],
            [o - 8, d - 4],
            [o - 5, d - 9],
            [o - 3, d + 9],
          ]),
          g(e, "#7fc8ff", 1.8),
          F(e, [
            [o - 3, d + 9],
            [o - 1, d - 10],
            [o + 2, d - 15],
            [o + 4, d + 9],
          ]),
          g(e, "#9fe0ff", 2),
          F(e, [
            [o + 4, d + 9],
            [o + 6, d - 2],
            [o + 9, d - 5],
            [o + 10, d + 9],
          ]),
          g(e, "#6fb4f0", 1.8),
          rt(e, o, d - 6, 1, 4, 0.7));
      } else if (l === "j") {
        ((e.strokeStyle = "rgba(255,255,255,.75)"), (e.lineWidth = 1));
        for (let u = 0; u < 8; u++) {
          const h = (u / 8) * Math.PI * 2;
          (e.beginPath(), e.moveTo(o, d - 2), e.lineTo(o + Math.cos(h) * 14, d - 2 + Math.sin(h) * 14), e.stroke());
        }
        for (const u of [5, 9, 13]) {
          e.beginPath();
          for (let h = 0; h <= 8; h++) {
            const c = (h / 8) * Math.PI * 2;
            e.lineTo(o + Math.cos(c) * u, d - 2 + Math.sin(c) * u);
          }
          e.stroke();
        }
        (D(e, o + 4, d - 5, 2.4), (e.fillStyle = "#2a2236"), e.fill());
      } else if (l === "q")
        (j(e, o - 4, d - 14, 8, 24, 4),
          g(e, "#5cae4a", 2),
          j(e, o - 11, d - 6, 6, 9, 3),
          g(e, "#5cae4a", 1.8),
          j(e, o + 5, d - 10, 6, 9, 3),
          g(e, "#5cae4a", 1.8),
          (e.strokeStyle = "rgba(47,29,18,.35)"),
          (e.lineWidth = 1),
          e.beginPath(),
          e.moveTo(o, d - 12),
          e.lineTo(o, d + 8),
          e.stroke(),
          D(e, o, d - 15, 2),
          (e.fillStyle = "#ff6f91"),
          e.fill());
      else if (l === "l") {
        ((e.strokeStyle = Q),
          (e.lineWidth = 5),
          e.beginPath(),
          e.moveTo(o - 2, d + 10),
          e.quadraticCurveTo(o + 2, d - 2, o, d - 12),
          e.stroke(),
          (e.strokeStyle = "#a0703c"),
          (e.lineWidth = 3),
          e.stroke());
        for (const u of [-2.6, -1.9, -1.2, -0.5, 0.2])
          (e.beginPath(),
            e.moveTo(o, d - 12),
            e.quadraticCurveTo(o + Math.cos(u) * 10, d - 12 + Math.sin(u) * 10 - 3, o + Math.cos(u) * 15, d - 12 + Math.sin(u) * 15 + 4),
            (e.strokeStyle = Q),
            (e.lineWidth = 5),
            e.stroke(),
            (e.strokeStyle = "#5cc24a"),
            (e.lineWidth = 3),
            e.stroke());
        (D(e, o - 2, d - 10, 2), (e.fillStyle = "#8a5a2b"), e.fill(), D(e, o + 2, d - 10, 2), e.fill());
      } else if (l === "x")
        (A(e, o, d + 4, 11, 5),
          g(e, "#f0e6d0", 1.8),
          e.beginPath(),
          e.arc(o - 2, d - 2, 7, Math.PI, 0),
          e.lineTo(o + 5, d + 3),
          e.lineTo(o - 9, d + 3),
          e.closePath(),
          g(e, "#fff7e0", 2),
          D(e, o - 5, d - 2, 1.8),
          (e.fillStyle = Q),
          e.fill(),
          D(e, o + 1, d - 2, 1.8),
          e.fill(),
          (e.strokeStyle = Q),
          (e.lineWidth = 1.4),
          e.beginPath(),
          e.moveTo(o + 6, d + 6),
          e.lineTo(o + 12, d + 2),
          e.moveTo(o - 10, d + 7),
          e.lineTo(o - 14, d + 3),
          e.stroke());
      else if (l === "g") {
        const u = r.rock || ["#f0d6a0", "#c8a670"];
        (F(e, [
          [o - 7, d + 10],
          [o - 5, d - 12],
          [o, d - 18],
          [o + 5, d - 12],
          [o + 7, d + 10],
        ]),
          g(e, u[0], 2),
          (e.strokeStyle = "rgba(47,29,18,.35)"),
          (e.lineWidth = 1.2));
        for (const h of [-6, 0, 6]) (e.beginPath(), e.moveTo(o - 2, d + h), e.lineTo(o + 2, d + h), e.stroke());
        (D(e, o, d - 9, 1.8), (e.fillStyle = "#4fb4ec"), e.fill());
      } else if (l === "z") {
        (A(e, o, d + 5, 13, 6),
          g(e, "#e0a82a", 2),
          A(e, o - 1, d + 1, 9, 5),
          g(e, "#ffc93c", 1.8),
          A(e, o + 1, d - 3, 5, 3),
          g(e, "#ffe066", 1.6));
        for (const [u, h] of [
          [-6, 3],
          [5, 2],
          [-1, -3],
        ])
          Nt(e, o + u, d + h, 2, "#fff7e0");
      } else if (l === "v") {
        (A(e, o, d + 7, 12, 4), g(e, "#5a3a20", 1.8));
        for (const [u, h] of [
          [-5, "#e8433a"],
          [4, "#b07cff"],
        ])
          (e.beginPath(),
            e.ellipse(o + u, d, 5, 7, 0, 0, Math.PI * 2),
            g(e, h, 1.8),
            (e.fillStyle = "rgba(255,255,255,.5)"),
            A(e, o + u - 1.5, d - 3, 1.5, 2.4),
            e.fill());
      } else if (l === "n") {
        (F(e, [
          [o - 13, d + 10],
          [o + 13, d + 10],
          [o, d - 13],
        ]),
          g(e, "#fff7e0", 2),
          e.save(),
          e.clip(),
          (e.fillStyle = "#ef5a3c"));
        for (let u = -12; u < 14; u += 8) e.fillRect(o + u, d - 14, 4, 26);
        (e.restore(),
          F(e, [
            [o - 13, d + 10],
            [o + 13, d + 10],
            [o, d - 13],
          ]),
          (e.strokeStyle = Q),
          (e.lineWidth = 2),
          e.stroke(),
          F(e, [
            [o - 3, d + 10],
            [o + 3, d + 10],
            [o, d],
          ]),
          g(e, "#2a1d14", 1.4),
          (e.strokeStyle = Q),
          (e.lineWidth = 1.6),
          e.beginPath(),
          e.moveTo(o, d - 13),
          e.lineTo(o, d - 19),
          e.stroke(),
          F(e, [
            [o, d - 19],
            [o + 6, d - 17],
            [o, d - 15],
          ]),
          g(e, "#ffc93c", 1));
      }
    }
    function mn(e, s, a, t, r = ya) {
      const l = es(t),
        n = r.wall || "rock";
      if (n === "hedge") {
        const o = r.hedgeDry;
        (j(e, s + 1, a + 3, $ - 2, $ - 4, 7), g(e, o ? "#6f7a3a" : "#2f7a3a", 2));
        for (const [d, u, h] of [
          [7, 10, 7],
          [15, 7, 8],
          [23, 10, 7],
          [11, 15, 7],
          [20, 15, 7],
        ])
          (D(e, s + d, a + u, h), g(e, o ? "#8f9a48" : "#4caf50", 1.8));
        if (
          ((e.fillStyle = o ? "#8f9a48" : "#4caf50"),
          j(e, s + 4, a + 8, $ - 8, 10, 4),
          e.fill(),
          rt(e, s + 10, a + 6, 3.5, 1.8, 0.45),
          !o && l() < 0.45)
        )
          for (let d = 0; d < 2; d++)
            (D(e, s + 6 + l() * 18, a + 8 + l() * 8, 1.6), (e.fillStyle = l() < 0.5 ? "#ff5a5a" : "#fff"), e.fill());
        o && l() < 0.3 && ((e.fillStyle = "rgba(40,25,20,.35)"), A(e, s + 10 + l() * 10, a + 12, 5, 3), e.fill());
        return;
      }
      if (n === "palisade") {
        for (let o = 0; o < 3; o++) {
          const d = s + 2 + o * 9,
            u = l() * 3;
          (e.beginPath(),
            e.moveTo(d, a + $ - 1),
            e.lineTo(d, a + 6 + u),
            e.lineTo(d + 4, a + 1 + u),
            e.lineTo(d + 8, a + 6 + u),
            e.lineTo(d + 8, a + $ - 1),
            e.closePath(),
            g(e, o % 2 ? "#9a5b2c" : "#b06d36", 2),
            (e.strokeStyle = "rgba(47,29,18,.35)"),
            (e.lineWidth = 1),
            e.beginPath(),
            e.moveTo(d + 4, a + 9 + u),
            e.lineTo(d + 4, a + $ - 4),
            e.stroke());
        }
        ((e.strokeStyle = "#e0c37a"),
          (e.lineWidth = 2.4),
          e.beginPath(),
          e.moveTo(s + 1, a + 16),
          e.lineTo(s + $ - 1, a + 16),
          e.stroke(),
          (e.strokeStyle = Q),
          (e.lineWidth = 1),
          e.stroke());
        return;
      }
      if (
        (j(e, s + 1, a + 1, $ - 2, $ - 2, 6),
        g(e, r.rock[1], 2),
        j(e, s + 1, a + 1, $ - 2, $ - 9, 6),
        g(e, r.rock[0], 2),
        (e.strokeStyle = "rgba(47,29,18,.35)"),
        (e.lineWidth = 1.2),
        e.beginPath(),
        n === "ruin")
      ) {
        (e.moveTo(s + 3, a + 8), e.lineTo(s + $ - 3, a + 8), e.moveTo(s + 3, a + 15), e.lineTo(s + $ - 3, a + 15));
        const o = l() * 8;
        (e.moveTo(s + 8 + o, a + 2),
          e.lineTo(s + 8 + o, a + 8),
          e.moveTo(s + 14 + o * 0.5, a + 8),
          e.lineTo(s + 14 + o * 0.5, a + 15),
          e.moveTo(s + 5 + o, a + 15),
          e.lineTo(s + 5 + o, a + 21));
      } else {
        const o = s + 6 + l() * 12;
        (e.moveTo(o, a + 5), e.lineTo(o + 3, a + 11), e.lineTo(o + 1, a + 16));
      }
      (e.stroke(),
        rt(e, s + 9, a + 7, 4, 2, 0.4),
        (r.moss || n === "ruin") && l() < 0.4 && ((e.fillStyle = "#5cc24a"), A(e, s + 8 + l() * 14, a + 3, 4, 2), e.fill()));
    }
    function ol(e, s, a, t, r, l) {
      const n = Pe(s) * $,
        o = Ce(s) * $,
        d = (Pe(s) + Ce(s)) % 2;
      if (a === "i" || (!a && t.floor === "cave")) {
        const c = a === "i" ? ["#6c6476", "#665e70"] : t.g;
        ((e.fillStyle = c[d]), e.fillRect(n, o, $, $));
        for (let p = 0; p < 3; p++)
          (A(e, n + 4 + r() * 22, o + 4 + r() * 22, 1.5 + r() * 2, 1 + r() * 1.4), (e.fillStyle = "rgba(0,0,0,.18)"), e.fill());
        r() < 0.15 && (A(e, n + 8 + r() * 14, o + 8 + r() * 14, 3, 1.6), (e.fillStyle = "rgba(255,255,255,.08)"), e.fill());
        return;
      }
      if (a === "e" || (!a && t.floor === "sand")) {
        const c = a === "e" ? ["#e8c27a", "#e0b970"] : t.g;
        ((e.fillStyle = c[d]), e.fillRect(n, o, $, $), (e.strokeStyle = "rgba(160,110,40,.22)"), (e.lineWidth = 1.2), e.beginPath());
        const p = r() * 8;
        (e.moveTo(n + 2, o + 9 + p),
          e.quadraticCurveTo(n + 15, o + 5 + p, n + 28, o + 9 + p),
          e.moveTo(n + 2, o + 19 + p * 0.5),
          e.quadraticCurveTo(n + 15, o + 15 + p * 0.5, n + 28, o + 19 + p * 0.5),
          e.stroke(),
          r() < 0.12 && (D(e, n + 5 + r() * 20, o + 5 + r() * 20, 1.2), (e.fillStyle = "rgba(120,80,30,.4)"), e.fill()));
        return;
      }
      if (!a && t.floor === "basalt") {
        if (
          ((e.fillStyle = t.g[d]),
          e.fillRect(n, o, $, $),
          (e.strokeStyle = "rgba(0,0,0,.25)"),
          (e.lineWidth = 1.2),
          e.beginPath(),
          e.moveTo(n, o + 15),
          e.lineTo(n + 10, o + 12),
          e.lineTo(n + 20, o + 17),
          e.lineTo(n + $, o + 14),
          e.stroke(),
          r() < 0.18)
        ) {
          const c = n + 5 + r() * 12,
            p = o + 6 + r() * 14;
          ((e.strokeStyle = "rgba(255,120,40,.35)"),
            (e.lineWidth = 3.5),
            e.beginPath(),
            e.moveTo(c, p),
            e.lineTo(c + 5, p + 3),
            e.lineTo(c + 9, p + 1),
            e.stroke(),
            (e.strokeStyle = "#ffb347"),
            (e.lineWidth = 1.2),
            e.stroke());
        }
        return;
      }
      if (a === "d") {
        ((e.fillStyle = d ? "#d2a865" : "#c99f5e"), e.fillRect(n, o, $, $));
        for (let c = 0; c < 2; c++) (A(e, n + 5 + r() * 20, o + 5 + r() * 20, 2, 1.4), (e.fillStyle = "#a87f45"), e.fill());
        return;
      }
      if (a === "r") {
        ((e.fillStyle = "#b8323a"), e.fillRect(n, o, $, $), (e.fillStyle = "rgba(255,201,60,.55)"), D(e, n + 15, o + 15, 2.2), e.fill());
        const c = (b, w) => l[tt(b, w)] === "r" || (b >= 0 && w >= 0 && b < Re && w < et && nl(e) && !1),
          p = Pe(s),
          y = Ce(s);
        ((e.strokeStyle = "#ffc93c"),
          (e.lineWidth = 2.5),
          e.beginPath(),
          p > 0 && l[tt(p - 1, y)] !== "r" && !gn(p - 1, y) && (e.moveTo(n + 2, o), e.lineTo(n + 2, o + $)),
          p < Re - 1 && l[tt(p + 1, y)] !== "r" && !gn(p + 1, y) && (e.moveTo(n + $ - 2, o), e.lineTo(n + $ - 2, o + $)),
          e.stroke());
        return;
      }
      let u = t.g;
      (a === "c" && t.floor !== "cobble" && (u = ["#cfc6b2", "#c6bda9"]), (e.fillStyle = u[d]), e.fillRect(n, o, $, $));
      const h = a === "c" ? "cobble" : t.floor || "grass";
      if (h === "cobble") {
        ((e.strokeStyle = "rgba(47,29,18,.22)"), (e.lineWidth = 1.2));
        const c = Ce(s) % 2 ? 7 : 0;
        for (const [p, y, b, w] of [
          [1 + c, 1, 13, 9],
          [15 + c, 1, 13, 9],
          [1, 11, 9, 8],
          [11, 11, 9, 8],
          [21, 11, 8, 8],
          [1 + c, 20, 13, 9],
          [15 + c, 20, 13, 9],
        ])
          (j(e, n + Math.min(p, 29 - b), o + y, b, w, 3), e.stroke());
      } else if (h === "flag") {
        if (((e.strokeStyle = "rgba(47,29,18,.2)"), (e.lineWidth = 1.2), e.strokeRect(n + 1.5, o + 1.5, $ - 3, $ - 3), r() < 0.3)) {
          e.beginPath();
          const c = n + 5 + r() * 15;
          (e.moveTo(c, o + 4), e.lineTo(c + 4, o + 12), e.lineTo(c + 2, o + 18), e.stroke());
        }
      } else if (h === "wood") {
        ((e.strokeStyle = "rgba(47,29,18,.25)"), (e.lineWidth = 1.2), e.beginPath());
        for (const p of [10, 20]) (e.moveTo(n, o + p), e.lineTo(n + $, o + p));
        const c = (Ce(s) * 7) % $;
        (e.moveTo(n + c, o),
          e.lineTo(n + c, o + 10),
          e.moveTo(n + ((c + 15) % $), o + 10),
          e.lineTo(n + ((c + 15) % $), o + 20),
          e.moveTo(n + ((c + 8) % $), o + 20),
          e.lineTo(n + ((c + 8) % $), o + $),
          e.stroke());
      } else
        h === "dungeon" &&
          ((e.strokeStyle = "rgba(0,0,0,.2)"),
          (e.lineWidth = 1.2),
          e.strokeRect(n + 1.5, o + 1.5, $ - 3, $ - 3),
          r() < 0.25 && ((e.fillStyle = "rgba(60,110,70,.35)"), A(e, n + 8 + r() * 14, o + 8 + r() * 14, 4, 2.5), e.fill()));
    }
    let po = null;
    const gn = (e, s) => po && po[tt(e, s)] === "crystal";
    function nl() {
      return !1;
    }
    function rl(e, s, a, t, r) {
      const l = es(t);
      if (r === "cave") {
        ((e.fillStyle = "#2e2838"), e.fillRect(s, a, $, $));
        for (let n = 0; n < 3; n++) {
          const o = s + 4 + l() * 22,
            d = a + 4 + l() * 22,
            u = 6 + l() * 6;
          (D(e, o, d, u), (e.fillStyle = n % 2 ? "#3a3346" : "#251f2e"), e.fill());
        }
        l() < 0.35 &&
          (F(e, [
            [s + 8 + l() * 10, a],
            [s + 14 + l() * 10, a],
            [s + 12 + l() * 8, a + 10 + l() * 8],
          ]),
          (e.fillStyle = "#4a4258"),
          e.fill());
      } else if (r === "dune") {
        ((e.fillStyle = "#c9944e"), e.fillRect(s, a, $, $));
        for (let n = 0; n < 2; n++) (A(e, s + 8 + l() * 14, a + 10 + l() * 12, 12, 7), (e.fillStyle = n ? "#d8a85e" : "#b98446"), e.fill());
        ((e.strokeStyle = "rgba(120,70,20,.3)"),
          (e.lineWidth = 1.2),
          e.beginPath(),
          e.moveTo(s + 3, a + 20),
          e.quadraticCurveTo(s + 15, a + 15, s + 27, a + 20),
          e.stroke());
      } else {
        ((e.fillStyle = "#2a2024"), e.fillRect(s, a, $, $));
        for (let n = 0; n < 3; n++) {
          const o = s + 4 + l() * 22,
            d = a + 4 + l() * 22;
          (D(e, o, d, 6 + l() * 5), (e.fillStyle = n % 2 ? "#3a2c30" : "#221a1e"), e.fill());
        }
        if (l() < 0.3) {
          ((e.strokeStyle = "#ff7a2f"), (e.lineWidth = 1.6), e.beginPath());
          const n = s + 6 + l() * 16;
          (e.moveTo(n, a + 6), e.lineTo(n + 4, a + 14), e.lineTo(n + 1, a + 22), e.stroke());
        }
      }
    }
    function ll(e, s, a, t) {
      const r = es(t);
      ((e.fillStyle = "#6e6880"), e.fillRect(s, a, $, $), (e.strokeStyle = "rgba(30,20,40,.35)"), (e.lineWidth = 1.2), e.beginPath());
      for (const n of [8, 16, 24]) (e.moveTo(s, a + n), e.lineTo(s + $, a + n));
      const l = (Math.floor(a / $) % 2) * 7;
      for (const [n, o] of [
        [0, 10],
        [8, 4],
        [16, 18],
        [24, 8],
      ]) {
        const d = s + ((o + l) % $);
        (e.moveTo(d, a + n), e.lineTo(d, a + n + 8));
      }
      (e.stroke(), r() < 0.25 && ((e.fillStyle = "rgba(92,194,74,.4)"), A(e, s + 6 + r() * 18, a + 4 + r() * 20, 3, 1.8), e.fill()));
    }
    function bn(e, s, a, t, r = [], l = []) {
      po = e;
      const n = document.createElement("canvas");
      ((n.width = Math.max(1, Math.round(de * t))), (n.height = Math.max(1, Math.round(ge * t))));
      const o = n.getContext("2d");
      o.setTransform(t, 0, 0, t, 0, 0);
      const d = es(5),
        u = (c, p) => c >= 0 && p >= 0 && c < Re && p < et && e[tt(c, p)] === "liquid";
      for (let c = 0; c < Be; c++) ol(o, c, (e[c] === "ground" && l[c]) || "", s, d, l);
      for (let c = 0; c < Be; c++) {
        if (e[c] !== "ground" || l[c] || (s.floor && s.floor !== "grass")) continue;
        const p = Pe(c) * $,
          y = Ce(c) * $,
          b = Pe(c),
          w = Ce(c);
        if (d() < 0.5) {
          const M = p + 5 + d() * 20,
            C = y + 8 + d() * 18;
          ((o.strokeStyle = s.tuft),
            (o.lineWidth = 1.5),
            (o.lineCap = "round"),
            o.beginPath(),
            o.moveTo(M - 3, C - 4),
            o.lineTo(M - 1, C),
            o.lineTo(M + 1, C - 5),
            o.lineTo(M + 2, C),
            o.lineTo(M + 4, C - 4),
            o.stroke());
        }
        if (s.fl && d() < s.fl) {
          const M = p + 6 + d() * 18,
            C = y + 6 + d() * 18,
            V = s.flc[(d() * s.flc.length) | 0];
          for (let L = 0; L < 5; L++) {
            const B = (L / 5) * Math.PI * 2;
            (D(o, M + Math.cos(B) * 2.2, C + Math.sin(B) * 2.2, 1.6), (o.fillStyle = V), o.fill());
          }
          (D(o, M, C, 1.2), (o.fillStyle = "#ffb000"), o.fill());
        }
        const T = s.deco;
        if (T === "wheat" && d() < 0.4) {
          const M = p + 8 + d() * 14,
            C = y + 20 + d() * 6;
          for (let V = -1; V <= 1; V++)
            ((o.strokeStyle = "#b8902e"),
              (o.lineWidth = 1.3),
              o.beginPath(),
              o.moveTo(M + V * 3, C),
              o.lineTo(M + V * 4, C - 11),
              o.stroke(),
              A(o, M + V * 4, C - 12, 1.6, 3),
              (o.fillStyle = "#f0cd55"),
              o.fill());
        }
        if ((T === "leaves" || T === "autumn") && d() < (T === "autumn" ? 0.6 : 0.3))
          for (let M = 0; M < 2; M++)
            (A(o, p + 4 + d() * 22, y + 4 + d() * 22, 2.6, 1.5, d() * 3),
              (o.fillStyle = ["#e2873a", "#c9502b", "#e8b53a", "#8fbf3a"][(d() * (T === "autumn" ? 3 : 4)) | 0]),
              o.fill());
        if (T === "reeds" && (u(b, w - 1) || u(b, w + 1)) && d() < 0.7) {
          const M = p + 6 + d() * 18,
            C = y + (u(b, w + 1) ? 26 : 12);
          for (let V = 0; V < 3; V++)
            ((o.strokeStyle = "#3f8a3a"),
              (o.lineWidth = 1.4),
              o.beginPath(),
              o.moveTo(M + V * 3, C),
              o.lineTo(M + V * 3 + 1, C - 12),
              o.stroke());
          (A(o, M + 4, C - 12, 1.6, 3), (o.fillStyle = "#8a5a2b"), o.fill());
        }
        if (
          (T === "stones" && d() < 0.3 && (A(o, p + 6 + d() * 18, y + 8 + d() * 16, 3, 2), g(o, "#b9b3a4", 1.2)),
          (T === "burnt" || T === "autumn") &&
            d() < (T === "burnt" ? 0.3 : 0.1) &&
            (A(o, p + 15, y + 15, 9 + d() * 5, 5 + d() * 3, d()), (o.fillStyle = "rgba(40,25,20,.28)"), o.fill()),
          T === "burnt" && d() < 0.1)
        ) {
          const M = p + 15,
            C = y + 20;
          (j(o, M - 4, C - 9, 8, 9, 2), g(o, "#5a3d2a", 1.6), A(o, M, C - 9, 4, 1.6), g(o, "#2a1d14", 1.2));
        }
        if (T === "hay" && d() < 0.1) {
          const M = p + 15,
            C = y + 17;
          (A(o, M, C, 8, 6),
            g(o, "#e8c24a", 1.8),
            (o.strokeStyle = "#b8902e"),
            (o.lineWidth = 1.2),
            o.beginPath(),
            o.arc(M - 1, C, 3.5, 0, 5),
            o.stroke());
        }
        if (T === "torches" && d() < 0.07) {
          const M = p + 15,
            C = y + 24;
          ((o.strokeStyle = Q),
            (o.lineWidth = 3),
            o.beginPath(),
            o.moveTo(M, C),
            o.lineTo(M, C - 14),
            o.stroke(),
            (o.strokeStyle = "#9a5b2c"),
            (o.lineWidth = 1.6),
            o.stroke());
          const V = o.createRadialGradient(M, C - 17, 0, M, C - 17, 14);
          (V.addColorStop(0, "rgba(255,200,90,.6)"),
            V.addColorStop(1, "rgba(255,200,90,0)"),
            (o.fillStyle = V),
            D(o, M, C - 17, 14),
            o.fill(),
            F(o, [
              [M - 3.5, C - 14],
              [M + 3.5, C - 14],
              [M, C - 23],
            ]),
            g(o, "#ffb347", 1.4));
        }
        if (T === "cracks" && d() < 0.22) {
          const M = p + 5 + d() * 10,
            C = y + 8 + d() * 12;
          ((o.strokeStyle = "rgba(255,120,40,.35)"),
            (o.lineWidth = 4),
            o.beginPath(),
            o.moveTo(M, C),
            o.lineTo(M + 6, C + 3),
            o.lineTo(M + 10, C + 1),
            o.lineTo(M + 15, C + 6),
            o.stroke(),
            (o.strokeStyle = "#ffb347"),
            (o.lineWidth = 1.4),
            o.stroke());
        }
      }
      ((o.strokeStyle = "rgba(47,29,18,.07)"), (o.lineWidth = 1));
      for (let c = 1; c < Re; c++) (o.beginPath(), o.moveTo(c * $, 0), o.lineTo(c * $, ge), o.stroke());
      for (let c = 1; c < et; c++) (o.beginPath(), o.moveTo(0, c * $), o.lineTo(de, c * $), o.stroke());
      const h = s.liquid === "lava";
      for (let c = 0; c < Be; c++) {
        if (e[c] !== "liquid") continue;
        const p = Pe(c) * $,
          y = Ce(c) * $,
          b = Pe(c),
          w = Ce(c),
          T = s.liquid === "abyss";
        if (((o.fillStyle = T ? "#120a1c" : h ? "#ff6a2a" : "#4aa8e0"), o.fillRect(p, y, $, $), T))
          for (let M = 0; M < 3; M++)
            (D(o, p + 4 + d() * 22, y + 4 + d() * 22, 0.8 + d()), (o.fillStyle = "rgba(200,170,255,.6)"), o.fill());
        else if (h) {
          for (let M = 0; M < 3; M++)
            (A(o, p + 5 + d() * 20, y + 5 + d() * 20, 3 + d() * 3, 2 + d() * 2),
              (o.fillStyle = d() < 0.5 ? "#ffd23f" : "#ff9a3c"),
              o.fill());
          ((o.strokeStyle = "rgba(90,20,10,.45)"),
            (o.lineWidth = 1.5),
            o.beginPath(),
            o.moveTo(p + 3, y + 18),
            o.lineTo(p + 12, y + 14),
            o.lineTo(p + 20, y + 20),
            o.stroke());
        } else {
          ((o.strokeStyle = "rgba(255,255,255,.55)"), (o.lineWidth = 1.6), (o.lineCap = "round"));
          for (let M = 0; M < 2; M++) {
            const C = p + 5 + d() * 14,
              V = y + 8 + M * 11;
            (o.beginPath(),
              o.moveTo(C, V),
              o.quadraticCurveTo(C + 3, V - 3, C + 6, V),
              o.quadraticCurveTo(C + 9, V + 3, C + 12, V),
              o.stroke());
          }
        }
        ((o.strokeStyle = Q),
          (o.lineWidth = 2.2),
          o.beginPath(),
          u(b, w - 1) || (o.moveTo(p, y), o.lineTo(p + $, y)),
          u(b, w + 1) || (o.moveTo(p, y + $), o.lineTo(p + $, y + $)),
          u(b - 1, w) || (o.moveTo(p, y), o.lineTo(p, y + $)),
          u(b + 1, w) || (o.moveTo(p + $, y), o.lineTo(p + $, y + $)),
          o.stroke());
      }
      for (let c = 0; c < Be; c++)
        e[c] === "edge" &&
          (s.edgeStyle === "wall"
            ? ll(o, Pe(c) * $, Ce(c) * $, c * 17 + 3)
            : s.edgeStyle
              ? rl(o, Pe(c) * $, Ce(c) * $, c * 17 + 3, s.edgeStyle)
              : sl(o, Pe(c) * $, Ce(c) * $, c * 17 + 3, s));
      for (let c = 0; c < Be; c++)
        e[c] === "wall" && (r[c] ? al(o, Pe(c) * $, Ce(c) * $, c * 31 + 7, s, r[c]) : mn(o, Pe(c) * $, Ce(c) * $, c * 31 + 7, s));
      (A(o, a.x, a.y + 12, 30, 14), g(o, "#9b8fb0", 2.5), A(o, a.x, a.y + 8, 24, 10), g(o, "#c2b8d6", 2));
      for (let c = 0; c < 8; c++) {
        const p = (c / 8) * Math.PI * 2;
        ((o.fillStyle = "rgba(63,224,197,.55)"), D(o, a.x + Math.cos(p) * 19, a.y + 8 + Math.sin(p) * 7.5, 1.6), o.fill());
      }
      return n;
    }
    function vn() {
      La = bn(ht, ya, we, Math.min(kt * Hs * 2.2, 3200 / ge), sn, an);
    }
    const ts = ["#ffc93c", "#ef5a3c", "#a46cf0"];
    function Ls(e, s, a, t, r, l, n, o = 0, d = 1, u = 0) {
      const h = Math.cos(l) >= 0 ? 1 : -1;
      if (
        (e.save(),
        e.translate(t, r),
        e.scale(d, d),
        (e.fillStyle = "rgba(30,70,20,.3)"),
        A(e, 0, 2, 18, 6),
        e.fill(),
        a >= 3 &&
          (e.save(),
          (e.globalAlpha = 0.55 + 0.25 * Math.sin(n * 3)),
          A(e, 0, 0, 20, 8),
          (e.lineWidth = 3.5),
          (e.strokeStyle = ts[u] || ts[0]),
          e.stroke(),
          e.restore()),
        A(e, 0, 0, 16, 6),
        g(e, ["#c98a4b", "#d3dae8", "#ffd34d", "#ffd34d"][Math.min(3, a)] || "#b9b4c4", 2),
        s === "archer")
      ) {
        (F(e, [
          [-13, -2],
          [13, -2],
          [10, -28],
          [-10, -28],
        ]),
          g(e, "#c98547", 2.2),
          (e.strokeStyle = "rgba(47,29,18,.5)"),
          (e.lineWidth = 1.3));
        for (const p of [-9, -16, -23]) (e.beginPath(), e.moveTo(-12, p), e.lineTo(12, p), e.stroke());
        ((e.strokeStyle = Q),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(-11, -4),
          e.lineTo(9, -26),
          e.moveTo(11, -4),
          e.lineTo(-9, -26),
          e.stroke(),
          j(e, -16, -34, 32, 8, 3),
          g(e, "#9a5b2c", 2.2),
          (e.strokeStyle = Q),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(-13, -34),
          e.lineTo(-13, -52),
          e.stroke());
        const c = Math.sin(n * 6) * 2;
        (F(e, [
          [-13, -52],
          [-1, -49 + c],
          [-13, -45],
        ]),
          g(e, ["#6cc04a", "#4fb4ec", "#ef5a3c", ts[u] || "#a46cf0"][a], 1.6),
          e.save(),
          e.translate(3, -40),
          e.scale(h, 1),
          D(e, 0, 0, 7.5),
          g(e, "#ffd8a8", 2),
          e.beginPath(),
          e.arc(0, -1, 8, Math.PI * 1.05, Math.PI * 1.95),
          e.lineTo(5, -3),
          e.lineTo(-6, -3),
          e.closePath(),
          g(e, "#3fa45b", 2),
          Fe(e, 3, 1, 2.4, 1),
          (e.strokeStyle = "#7a3d12"),
          (e.lineWidth = 2.6),
          e.beginPath(),
          e.arc(6, 1, 9, -1.1, 1.1),
          e.stroke(),
          (e.strokeStyle = "#fff"),
          (e.lineWidth = 0.9),
          e.beginPath(),
          e.moveTo(6 + 9 * Math.cos(-1.1) - o * 3, 1 + 9 * Math.sin(-1.1)),
          e.lineTo(6 - o * 3, 1),
          e.lineTo(6 + 9 * Math.cos(1.1) - o * 3, 1 + 9 * Math.sin(1.1)),
          e.stroke(),
          e.restore());
      } else if (s === "mage") {
        (j(e, -12, -30, 24, 30, 4), g(e, "#9b7be0", 2.2), (e.strokeStyle = "rgba(47,29,18,.35)"), (e.lineWidth = 1.2));
        for (const [y, b] of [
          [-8, 0],
          [-16, 6],
          [-24, 0],
        ])
          (e.beginPath(),
            e.moveTo(-11, y),
            e.lineTo(11, y),
            e.stroke(),
            e.beginPath(),
            e.moveTo(-3 + b, y),
            e.lineTo(-3 + b, y + 8),
            e.stroke());
        (e.beginPath(),
          e.moveTo(-5, 0),
          e.lineTo(-5, -8),
          e.arc(0, -8, 5, Math.PI, 0),
          e.lineTo(5, 0),
          g(e, "#3b2752", 1.8),
          D(e, 0, -19, 3.2),
          g(e, "#ffe066", 1.6),
          A(e, 0, -29, 17, 4.5),
          g(e, "#3556c8", 2),
          F(e, [
            [-14, -30],
            [14, -30],
            [2, -62],
            [-1, -58],
          ]),
          g(e, "#4f74e8", 2.2),
          Nt(e, -3, -40, 2.6, "#ffe066"),
          Nt(e, 4, -49, 2, "#ffe066"));
        const c = Math.sin(n * 3) * 2.5,
          p = e.createRadialGradient(1, -70 + c, 0, 1, -70 + c, 13);
        (p.addColorStop(0, "rgba(255,240,150,.85)"),
          p.addColorStop(1, "rgba(200,150,255,0)"),
          (e.fillStyle = p),
          D(e, 1, -70 + c, 13),
          e.fill(),
          D(e, 1, -70 + c, 5 + a * 0.8),
          g(e, "#d6b3ff", 1.8),
          rt(e, -0.5, -72 + c, 1.8, 1.2, 0.9));
      } else if (s === "catapult") {
        (e.save(),
          e.scale(h, 1),
          j(e, -18, -13, 36, 7, 3),
          g(e, "#c98547", 2.2),
          F(e, [
            [-7, -12],
            [-1, -28],
            [5, -12],
          ]),
          g(e, "#9a5b2c", 2));
        const c = -0.9 + o * 1.6;
        (e.save(),
          e.translate(-1, -25),
          e.rotate(-c),
          j(e, -24, -2.5, 26, 5, 2),
          g(e, "#d99a5c", 1.8),
          e.beginPath(),
          e.arc(-24, -2, 6, 0, Math.PI),
          g(e, "#7a4520", 1.8),
          o < 0.3 && (D(e, -24, -5, 4), g(e, "#a7a7b8", 1.6)),
          e.restore(),
          D(e, -1, -25, 2.5),
          g(e, "#555", 1.4));
        for (const p of [-11, 11])
          (D(e, p, -5, 6.5),
            g(e, "#8a4f25", 2),
            (e.strokeStyle = Q),
            (e.lineWidth = 1.2),
            e.beginPath(),
            e.moveTo(p - 5, -5),
            e.lineTo(p + 5, -5),
            e.moveTo(p, -10),
            e.lineTo(p, 0),
            e.stroke(),
            D(e, p, -5, 1.8),
            g(e, "#ffc93c", 1));
        e.restore();
      } else if (s === "frost") {
        (j(e, -12, -28, 24, 28, 4), g(e, "#bfe9ff", 2.2), (e.strokeStyle = "rgba(47,29,18,.3)"), (e.lineWidth = 1.2));
        for (const p of [-9, -18]) (e.beginPath(), e.moveTo(-11, p), e.lineTo(11, p), e.stroke());
        for (const p of [-10, -2, 6]) (j(e, p, -34, 6, 7, 1.5), g(e, "#e6f7ff", 1.8));
        for (const p of [-8, -1, 7])
          (F(e, [
            [p - 2, -28],
            [p + 2, -28],
            [p, -22],
          ]),
            g(e, "#fff", 1.2));
        (j(e, -4, -9, 8, 9, 3), g(e, "#4fb4ec", 1.6));
        const c = Math.sin(n * 2.5) * 2;
        (e.save(),
          e.translate(0, -47 + c),
          e.rotate(Math.sin(n) * 0.15),
          F(e, [
            [0, -13 - a],
            [8, 0],
            [0, 10],
            [-8, 0],
          ]),
          g(e, "#6fd3ff", 2),
          F(e, [
            [0, -13 - a],
            [3, 0],
            [0, 10],
            [-2, 0],
          ]),
          (e.fillStyle = "rgba(255,255,255,.6)"),
          e.fill(),
          e.restore());
        for (let p = 0; p < 3; p++) {
          const y = n * 1.5 + p * 2.1;
          ((e.fillStyle = "#fff"), D(e, Math.cos(y) * 14, -46 + Math.sin(y) * 6 + c, 1.3), e.fill());
        }
      } else if (s === "ballista")
        (j(e, -13, -14, 26, 14, 4),
          g(e, "#a59ebd", 2.2),
          (e.strokeStyle = "rgba(47,29,18,.3)"),
          (e.lineWidth = 1.2),
          e.beginPath(),
          e.moveTo(-12, -7),
          e.lineTo(12, -7),
          e.stroke(),
          j(e, -15, -19, 30, 6, 3),
          g(e, "#9a5b2c", 2),
          e.save(),
          e.translate(0, -24),
          e.scale(h, 1),
          e.rotate(Math.max(-0.6, Math.min(0.6, Math.sin(l) * h * 0.5))),
          (e.strokeStyle = Q),
          (e.lineWidth = 2.4),
          e.beginPath(),
          e.moveTo(-2, 4),
          e.lineTo(-2, 0),
          e.stroke(),
          j(e, -12, -3, 26, 6, 2),
          g(e, "#c98547", 2),
          (e.strokeStyle = "#7a4520"),
          (e.lineWidth = 3.2),
          e.beginPath(),
          e.moveTo(12, -13),
          e.quadraticCurveTo(18, 0, 12, 13),
          e.stroke(),
          (e.strokeStyle = Q),
          (e.lineWidth = 1),
          e.stroke(),
          (e.strokeStyle = "#fff7e0"),
          (e.lineWidth = 1),
          e.beginPath(),
          e.moveTo(12, -13),
          e.lineTo(-8 + o * 6, 0),
          e.lineTo(12, 13),
          e.stroke(),
          o < 0.3 &&
            ((e.strokeStyle = Q),
            (e.lineWidth = 2.6),
            e.beginPath(),
            e.moveTo(-8, 0),
            e.lineTo(20, 0),
            e.stroke(),
            F(e, [
              [24, 0],
              [19, -3],
              [19, 3],
            ]),
            g(e, "#e0e4ee", 1.2)),
          e.restore());
      else if (s === "alchemist") {
        (j(e, -12, -24, 24, 24, 6),
          g(e, "#8fa36a", 2.2),
          (e.strokeStyle = "rgba(47,29,18,.3)"),
          (e.lineWidth = 1.2),
          e.beginPath(),
          e.moveTo(-11, -12),
          e.lineTo(11, -12),
          e.stroke(),
          j(e, -4, -10, 8, 10, 3),
          g(e, "#5a3a20", 1.6),
          A(e, 0, -25, 14, 5),
          g(e, "#3b3348", 2),
          e.beginPath(),
          e.ellipse(0, -27, 13, 9, 0, Math.PI, 0),
          e.lineTo(13, -25),
          e.lineTo(-13, -25),
          g(e, "#3b3348", 2),
          A(e, 0, -31, 10, 3.5),
          g(e, "#7ed957", 1.6));
        for (let c = 0; c < 3; c++) {
          const p = (n * 1.2 + c * 0.33) % 1;
          ((e.globalAlpha = 1 - p),
            D(e, -5 + c * 5 + Math.sin(n * 3 + c) * 2, -34 - p * 16, 2.5 + p * 3),
            (e.fillStyle = "#a8f07a"),
            e.fill(),
            (e.globalAlpha = 1));
        }
        (D(e, -4, -31, 1.5), (e.fillStyle = "#d6ffb3"), e.fill());
      } else if (s === "storm") {
        (F(e, [
          [-12, -1],
          [12, -1],
          [8, -34],
          [-8, -34],
        ]),
          g(e, "#5b6b8c", 2.2),
          (e.strokeStyle = "rgba(255,255,255,.25)"),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(-6, -4),
          e.lineTo(-4, -31),
          e.stroke());
        for (const p of [-10, -19, -28]) {
          const y = 12 - (p + 10) * -0.12;
          (j(e, -y, p - 2.5, y * 2, 5, 2.5), g(e, "#e0904a", 1.8));
        }
        (j(e, -3, -9, 6, 7, 2),
          g(e, "#ffe066", 1.4),
          (e.strokeStyle = Q),
          (e.lineWidth = 2.4),
          e.beginPath(),
          e.moveTo(0, -34),
          e.lineTo(0, -46),
          e.stroke());
        const c = e.createRadialGradient(0, -52, 0, 0, -52, 14);
        (c.addColorStop(0, "rgba(190,250,255,.9)"),
          c.addColorStop(1, "rgba(120,220,255,0)"),
          (e.fillStyle = c),
          D(e, 0, -52, 14),
          e.fill(),
          D(e, 0, -52, 6.5 + a * 0.6),
          g(e, "#9ff3ff", 2),
          rt(e, -2, -54, 2, 1.3, 0.9),
          (e.strokeStyle = "#ffe066"),
          (e.lineWidth = 1.6));
        for (let p = 0; p < 2; p++) {
          const y = n * 7 + p * 3.1 + Math.sin(n * 13) * 0.5;
          (e.beginPath(),
            e.moveTo(Math.cos(y) * 7, -52 + Math.sin(y) * 7),
            e.lineTo(Math.cos(y + 0.3) * 11, -52 + Math.sin(y + 0.4) * 10),
            e.lineTo(Math.cos(y + 0.1) * 14, -52 + Math.sin(y) * 13),
            e.stroke());
        }
      }
      {
        const c = (a + 1) * 11 + 4;
        ((e.fillStyle = "rgba(47,29,18,.72)"), j(e, -c / 2, 3, c, 12, 6), e.fill());
        for (let p = 0; p <= a; p++) Nt(e, -(a * 11) / 2 + p * 11, 9, 5.3, p === 3 ? ts[u] || ts[0] : "#ffd34d");
      }
      e.restore();
    }
    const il = { archer: 40, mage: 70, catapult: 24, frost: 47, storm: 52, ballista: 26, alchemist: 34 },
      yn = 0.72;
    function Pa(e, s, a = we.x, t = we.y + 6, r = i.crystal.lvl, l = i.crystal.hp / i.crystal.max, n = i.crystal.flash > 0, o = !0) {
      const d = Math.sin(s * 2.2) * 0.5 + 0.5,
        u = e.createRadialGradient(a, t - 26, 0, a, t - 26, 46);
      (u.addColorStop(0, `rgba(120,255,230,${0.35 + 0.25 * d})`),
        u.addColorStop(1, "rgba(120,255,230,0)"),
        (e.fillStyle = u),
        D(e, a, t - 26, 46),
        e.fill());
      const h = n ? "#ff8a7a" : "#3fe0c5",
        c = n ? "#ff6b8a" : "#b07cff";
      (F(e, [
        [a - 17, t],
        [a - 23, t - 18],
        [a - 17, t - 30],
        [a - 11, t - 16],
      ]),
        g(e, c, 2),
        F(e, [
          [a - 17, t - 30],
          [a - 15, t - 16],
          [a - 17, t],
        ]),
        (e.fillStyle = "rgba(255,255,255,.35)"),
        e.fill(),
        F(e, [
          [a + 15, t],
          [a + 11, t - 14],
          [a + 18, t - 26],
          [a + 23, t - 12],
        ]),
        g(e, c, 2));
      const p = Math.sin(s * 1.6) * 1.5;
      (F(e, [
        [a - 10, t],
        [a - 13, t - 30 + p],
        [a, t - 54 + p],
        [a + 13, t - 30 + p],
        [a + 10, t],
      ]),
        g(e, h, 2.4),
        F(e, [
          [a, t - 54 + p],
          [a + 4, t - 30 + p],
          [a + 2, t],
        ]),
        (e.fillStyle = "rgba(255,255,255,.45)"),
        e.fill(),
        F(e, [
          [a, t - 54 + p],
          [a - 13, t - 30 + p],
          [a - 6, t - 28 + p],
        ]),
        (e.fillStyle = "rgba(255,255,255,.6)"),
        e.fill(),
        (e.strokeStyle = "rgba(47,29,18,.35)"),
        (e.lineWidth = 1.2),
        e.beginPath(),
        e.moveTo(a - 13, t - 30 + p),
        e.lineTo(a + 13, t - 30 + p),
        e.stroke());
      for (let w = 0; w < 3; w++) {
        const T = s * 1.2 + w * 2.1;
        ((e.fillStyle = "#fff"), D(e, a + Math.cos(T) * 20, t - 34 + Math.sin(T) * 8, 1.4 + d * 0.6), e.fill());
      }
      for (let w = 0; w < r + 1; w++) Nt(e, a - (r * 9) / 2 + w * 9, t + 12, 4.5, "#ffc93c");
      if (!o) return;
      const y = 56,
        b = t - 70;
      (j(e, a - y / 2 - 2, b - 2, y + 4, 9, 4.5),
        (e.fillStyle = Q),
        e.fill(),
        l > 0 && (j(e, a - y / 2, b, y * l, 5, 2.5), (e.fillStyle = l > 0.5 ? "#3fe0c5" : l > 0.25 ? "#ffc93c" : "#ef5a3c"), e.fill()));
    }
    function xt(e, s, a, t = 2.4) {
      (A(e, -3, 0, t, 1.6), g(e, a, 1.2), A(e, 3 + s, 0, t, 1.6), g(e, a, 1.2));
    }
    function Us(e, s, a, t) {
      const r = s.state === "atk" ? Math.sin(Math.max(0, s.atkT) * Math.PI) : 0;
      (t.cape &&
        (e.beginPath(), e.moveTo(-6, -20), e.quadraticCurveTo(-16 + a, -8, -12, 0), e.lineTo(-2, -2), e.closePath(), g(e, t.cape, 1.8)),
        xt(e, a, "#5a5a6a", 3),
        j(e, -9, -21, 18, 19, 5),
        g(e, t.armor, 2.2),
        j(e, -3, -20, 6, 17, 2),
        (e.fillStyle = t.trim),
        e.fill(),
        rt(e, -5, -17, 2.5, 1.5, 0.5),
        j(e, -6, -33, 13, 13, 5),
        g(e, t.armor, 2.2),
        (e.strokeStyle = Q),
        (e.lineWidth = 2),
        e.beginPath(),
        e.moveTo(-1, -27),
        e.lineTo(6, -27),
        e.stroke(),
        (e.fillStyle = "#fff"),
        D(e, 4, -27, 1),
        e.fill(),
        t.crown
          ? (e.beginPath(),
            e.moveTo(-6, -33),
            e.lineTo(-6, -39),
            e.lineTo(-3, -36),
            e.lineTo(0.5, -41),
            e.lineTo(4, -36),
            e.lineTo(7, -39),
            e.lineTo(7, -33),
            e.closePath(),
            g(e, "#ffc93c", 1.6),
            D(e, 0.5, -35.5, 1.3),
            (e.fillStyle = "#ef5a3c"),
            e.fill())
          : t.horns
            ? (F(e, [
                [-6, -30],
                [-12, -38],
                [-4, -33],
              ]),
              g(e, "#fff7e0", 1.5),
              F(e, [
                [6, -30],
                [11, -39],
                [4, -33],
              ]),
              g(e, "#fff7e0", 1.5))
            : (e.beginPath(),
              e.moveTo(0, -33),
              e.quadraticCurveTo(-8, -42, -12, -34),
              e.quadraticCurveTo(-6, -37, 0, -33),
              g(e, t.plume, 1.6)),
        e.save(),
        e.translate(8, -14),
        e.rotate(-1.1 + r * 1.6),
        t.axe
          ? (j(e, -1.5, -24, 3, 26, 1.5),
            g(e, "#7a4520", 1.6),
            e.beginPath(),
            e.moveTo(1, -22),
            e.quadraticCurveTo(12, -20, 10, -10),
            e.lineTo(1, -12),
            e.closePath(),
            g(e, "#c3cad6", 1.8))
          : (j(e, -1.5, -20, 3, 20, 1), g(e, "#e0e4ee", 1.6), j(e, -4, -2, 8, 2.5, 1), g(e, "#c98547", 1.2)),
        e.restore(),
        j(e, 2, -19, 11, 15, 4),
        g(e, t.shield, 2),
        (e.strokeStyle = t.emblem),
        (e.lineWidth = 2.2),
        e.beginPath(),
        e.moveTo(7.5, -16),
        e.lineTo(7.5, -7),
        e.moveTo(4.5, -12.5),
        e.lineTo(10.5, -12.5),
        e.stroke());
    }
    function dl(e, s, a) {
      for (const t of [-6, -2, 4, 8])
        ((e.strokeStyle = Q), (e.lineWidth = 2.4), e.beginPath(), e.moveTo(t, -4), e.lineTo(t + s * (t % 4 ? 1.5 : -1.5), 1), e.stroke());
      if (
        (e.beginPath(),
        e.moveTo(-9, -8),
        e.quadraticCurveTo(-15, -13 + s * 2, -14, -7),
        e.lineTo(-9, -6),
        g(e, a.dark, 1.6),
        A(e, 0, -7, 10, 5.5),
        g(e, a.body, 2),
        A(e, 0, -5, 7, 2.5),
        (e.fillStyle = a.belly),
        e.fill(),
        a.spot)
      )
        for (const [t, r] of [
          [-4, -9],
          [2, -10],
          [5, -7],
        ])
          (D(e, t, r, 1.4), (e.fillStyle = a.dark), e.fill());
      (D(e, 9, -11, 5.5),
        g(e, a.body, 2),
        F(e, [
          [5, -15],
          [6, -11],
          [9, -14],
        ]),
        g(e, a.dark, 1.4),
        A(e, 14, -9.5, 3.5, 2.5),
        g(e, a.belly, 1.5),
        D(e, 17, -10, 1.3),
        (e.fillStyle = Q),
        e.fill(),
        Fe(e, 10, -12.5, 2, 1, !0));
    }
    function kn(e, s, a, t) {
      const r = a.state === "atk" ? Math.sin(Math.max(0, a.atkT) * Math.PI) : 0;
      (j(e, -8, -3, 6, 5, 2),
        g(e, t.dark, 1.6),
        j(e, 3 + s, -3, 6, 5, 2),
        g(e, t.dark, 1.6),
        j(e, -10, -20, 20, 18, 5),
        g(e, t.body, 2.2),
        j(e, -7, -29, 14, 10, 4),
        g(e, t.body, 2),
        (e.fillStyle = t.glow),
        j(e, -4, -26, 3, 3, 1),
        e.fill(),
        j(e, 2, -26, 3, 3, 1),
        e.fill(),
        (e.strokeStyle = t.glow),
        (e.lineWidth = 1.6),
        e.beginPath(),
        e.moveTo(-5, -16),
        e.lineTo(-1, -12),
        e.lineTo(-4, -7),
        e.moveTo(4, -17),
        e.lineTo(2, -11),
        e.stroke(),
        e.save(),
        e.translate(10, -16),
        e.rotate(-0.3 - r * 1.2),
        j(e, -3, 0, 7, 12, 3),
        g(e, t.body, 2),
        e.restore(),
        j(e, -15, -16, 6, 12, 3),
        g(e, t.body, 2));
    }
    function wn(e, s, a, t, r) {
      const l = r.s || 1;
      e.scale(l, l);
      for (let n = 0; n < 4; n++)
        for (const o of [-1, 1]) {
          const d = Math.sin(s * 14 + n + a.seed) * (o > 0 ? 1 : -1);
          ((e.strokeStyle = Q),
            (e.lineWidth = 2.2),
            e.beginPath(),
            e.moveTo(-2 + n * 3, -6),
            e.quadraticCurveTo(-6 + n * 4 + d * 2, -14, -10 + n * 6 + d * 3, 1),
            e.stroke());
        }
      (A(e, -5, -7, 8, 6.5), g(e, r.body, 2), A(e, 5, -7, 5, 4.5), g(e, r.head, 2), (e.fillStyle = "#ff3b3b"));
      for (const [n, o] of [
        [7, -9],
        [9, -8],
        [7, -6],
      ])
        (D(e, n, o, 1.2), e.fill());
      (r.mark &&
        ((e.fillStyle = r.mark),
        F(e, [
          [-5, -11],
          [-3, -7],
          [-5, -3],
          [-7, -7],
        ]),
        e.fill()),
        r.crown &&
          (e.beginPath(),
          e.moveTo(1, -11),
          e.lineTo(1, -16),
          e.lineTo(3.5, -13.5),
          e.lineTo(5, -17),
          e.lineTo(6.5, -13.5),
          e.lineTo(9, -16),
          e.lineTo(9, -11),
          e.closePath(),
          g(e, "#ffc93c", 1.2)));
    }
    function ul(e, s, a, t) {
      const r = Math.sin(s * 12 + a.seed);
      (e.beginPath(),
        e.moveTo(-2, -2),
        e.lineTo(-8, -15 - r * 7),
        e.lineTo(5, -4),
        g(e, t.wing, 1.6),
        A(e, 0, 0, 9, 4.5),
        g(e, t.body, 2),
        F(e, [
          [-8, 0],
          [-14, -3],
          [-14, 3],
        ]),
        g(e, t.wing, 1.4),
        A(e, 8, -3, 3, 4),
        g(e, t.neck, 1.4),
        D(e, 9, -6, 3.4),
        g(e, t.head, 1.6),
        F(e, [
          [12, -7],
          [16, -5],
          [12, -4],
        ]),
        g(e, "#ffc93c", 1.2),
        Fe(e, 9.5, -7, 1.4, 1, !0),
        e.beginPath(),
        e.moveTo(-1, 0),
        e.lineTo(-6, 13 + r * 7),
        e.lineTo(5, 2),
        g(e, t.wing, 1.6));
    }
    function cl(e, s, a, t) {
      const r = s.type;
      if (r === "bandit")
        (xt(e, a, "#3b2752"),
          j(e, -6, -12, 12, 11, 4),
          g(e, "#a0703c", 2),
          (e.fillStyle = "#5a3a20"),
          e.fillRect(-6, -5, 12, 2),
          D(e, 1, -16, 5.5),
          g(e, "#ffd8a8", 2),
          e.beginPath(),
          e.arc(1, -17, 6, Math.PI * 1.02, Math.PI * 1.98),
          e.lineTo(7, -16),
          e.lineTo(-5, -16),
          e.closePath(),
          g(e, "#c9502b", 1.8),
          F(e, [
            [-5, -18],
            [-10, -16],
            [-5, -15],
          ]),
          g(e, "#c9502b", 1.3),
          Fe(e, 3.5, -15, 2, 1, !0),
          (e.strokeStyle = Q),
          (e.lineWidth = 1.2),
          e.beginPath(),
          e.moveTo(2, -11.5),
          e.lineTo(5, -11.5),
          e.stroke(),
          (e.strokeStyle = "#c3cad6"),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(6, -6),
          e.lineTo(11, -11),
          e.stroke());
      else if (r === "rider") {
        for (const l of [-7, -3, 4, 8])
          ((e.strokeStyle = Q), (e.lineWidth = 2.6), e.beginPath(), e.moveTo(l, -6), e.lineTo(l + a * (l % 4 ? 1.6 : -1.6), 1), e.stroke());
        (e.beginPath(),
          e.moveTo(-10, -11),
          e.quadraticCurveTo(-17, -8 + a, -15, -2),
          e.lineTo(-11, -8),
          g(e, "#3b2a1a", 1.4),
          A(e, 0, -9, 11, 6),
          g(e, "#9a5b2c", 2),
          e.beginPath(),
          e.moveTo(7, -12),
          e.lineTo(12, -20),
          e.lineTo(16, -17),
          e.lineTo(10, -8),
          e.closePath(),
          g(e, "#9a5b2c", 1.8),
          A(e, 15, -17, 5, 3.2, 0.4),
          g(e, "#9a5b2c", 1.8),
          D(e, 16, -18, 0.9),
          (e.fillStyle = Q),
          e.fill(),
          (e.strokeStyle = "#3b2a1a"),
          (e.lineWidth = 3),
          e.beginPath(),
          e.moveTo(8, -14),
          e.lineTo(12, -20),
          e.stroke(),
          j(e, -4, -23, 9, 10, 3),
          g(e, "#4f74e8", 1.8),
          D(e, 0, -26, 4.5),
          g(e, "#ffd8a8", 1.8),
          e.beginPath(),
          e.arc(0, -27, 5, Math.PI, 0),
          e.closePath(),
          g(e, "#c3cad6", 1.6),
          Fe(e, 2, -25.5, 1.6, 1),
          (e.strokeStyle = "#7a4520"),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(-6, -16),
          e.lineTo(18, -30),
          e.stroke(),
          F(e, [
            [18, -30],
            [14, -30],
            [17, -27],
          ]),
          g(e, "#e0e4ee", 1));
      } else if (r === "soldier")
        (xt(e, a, "#3b2752"),
          (e.strokeStyle = "#7a4520"),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(-6, -1),
          e.lineTo(-6, -28),
          e.stroke(),
          F(e, [
            [-6, -32],
            [-8.5, -27],
            [-3.5, -27],
          ]),
          g(e, "#e0e4ee", 1.2),
          j(e, -7, -15, 14, 14, 4),
          g(e, "#4f74e8", 2),
          (e.fillStyle = "#ffe066"),
          e.fillRect(-1.5, -14, 3, 12),
          D(e, 1, -19, 5.5),
          g(e, "#ffd8a8", 2),
          A(e, 1, -23, 8, 2.2),
          g(e, "#c3cad6", 1.6),
          e.beginPath(),
          e.arc(1, -23, 5.5, Math.PI, 0),
          g(e, "#c3cad6", 1.8),
          Fe(e, 3.5, -18.5, 2, 1, !0),
          D(e, 7, -8, 6.5),
          g(e, "#c98547", 2),
          D(e, 7, -8, 2),
          g(e, "#c3cad6", 1.2));
      else if (r === "knight") Us(e, s, a, { armor: "#c3cad6", trim: "#ef5a3c", plume: "#ef5a3c", shield: "#ef5a3c", emblem: "#ffe066" });
      else if (r === "captain")
        (e.scale(1.25, 1.25),
          Us(e, s, a, { armor: "#ffd66b", trim: "#4f74e8", plume: "#4f74e8", shield: "#4f74e8", emblem: "#ffe066", cape: "#ef5a3c" }));
      else if (r === "warlord")
        (e.scale(1.75, 1.75),
          Us(e, s, a, { armor: "#4a4258", trim: "#ef5a3c", shield: "#2a2236", emblem: "#ef5a3c", cape: "#b0302a", horns: 1, axe: 1 }));
      else if (r === "guard")
        (xt(e, a, "#3b2752"),
          j(e, -6, -13, 12, 12, 4),
          g(e, "#c9502b", 2),
          (e.fillStyle = "#ffe066"),
          e.fillRect(-1.5, -12, 3, 10),
          D(e, 1, -17, 5.3),
          g(e, "#ffd8a8", 2),
          e.beginPath(),
          e.arc(1, -18, 5.6, Math.PI, 0),
          e.closePath(),
          g(e, "#c3cad6", 1.8),
          j(e, 0, -23, 2, 3, 1),
          g(e, "#c3cad6", 1),
          Fe(e, 3.4, -16.5, 1.9, 1, !0),
          (e.strokeStyle = "#7a4520"),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(-6, 0),
          e.lineTo(-6, -27),
          e.stroke(),
          F(e, [
            [-6, -31],
            [-8.5, -26],
            [-3.5, -26],
          ]),
          g(e, "#e0e4ee", 1.2));
      else if (r === "hound") {
        for (const l of [-6, -2, 4, 8])
          ((e.strokeStyle = Q), (e.lineWidth = 2.4), e.beginPath(), e.moveTo(l, -4), e.lineTo(l + a * (l % 4 ? 1.5 : -1.5), 1), e.stroke());
        (e.beginPath(),
          e.moveTo(-9, -8),
          e.quadraticCurveTo(-15, -13 + a * 2, -14, -7),
          e.lineTo(-9, -6),
          g(e, "#7a4f2a", 1.6),
          A(e, 0, -7, 10, 5.5),
          g(e, "#9a6a3a", 2),
          A(e, 0, -5, 7, 2.5),
          (e.fillStyle = "#c9a06a"),
          e.fill(),
          D(e, 9, -11, 5.5),
          g(e, "#9a6a3a", 2),
          F(e, [
            [5, -15],
            [6, -11],
            [9, -14],
          ]),
          g(e, "#5a3a20", 1.4),
          A(e, 14, -9.5, 3.5, 2.5),
          g(e, "#c9a06a", 1.5),
          D(e, 17, -10, 1.3),
          (e.fillStyle = Q),
          e.fill(),
          j(e, 5, -9, 4, 4, 1),
          g(e, "#ef5a3c", 1.2),
          Fe(e, 10, -12.5, 2, 1, !0));
      } else if (r === "manatarms") {
        (xt(e, a, "#3b2752"),
          (e.strokeStyle = "#7a4520"),
          (e.lineWidth = 2.2),
          e.beginPath(),
          e.moveTo(-7, 0),
          e.lineTo(-7, -30),
          e.stroke(),
          e.beginPath(),
          e.moveTo(-7, -30),
          e.quadraticCurveTo(-1, -28, -2, -22),
          e.lineTo(-7, -23),
          g(e, "#e0e4ee", 1.4),
          j(e, -7, -15, 14, 14, 4),
          g(e, "#9aa0ad", 2),
          (e.strokeStyle = "rgba(47,29,18,.3)"),
          (e.lineWidth = 1));
        for (const l of [-11, -7, -3]) (e.beginPath(), e.moveTo(-6, l), e.lineTo(6, l), e.stroke());
        (D(e, 1, -19, 5.5),
          g(e, "#9aa0ad", 2),
          (e.fillStyle = "#ffd8a8"),
          j(e, 0, -21, 6, 5, 2),
          e.fill(),
          Fe(e, 3.5, -18.5, 1.8, 1, !0),
          e.beginPath(),
          e.moveTo(3, -15),
          e.lineTo(12, -15),
          e.lineTo(12, -6),
          e.lineTo(7.5, 0),
          e.lineTo(3, -6),
          e.closePath(),
          g(e, "#4f74e8", 2),
          (e.strokeStyle = "#ffe066"),
          (e.lineWidth = 1.6),
          e.beginPath(),
          e.moveTo(7.5, -13),
          e.lineTo(7.5, -4),
          e.stroke());
      } else if (r === "blackknight")
        Us(e, s, a, { armor: "#4a4258", trim: "#9b7be0", plume: "#9b7be0", shield: "#2a2236", emblem: "#9b7be0" });
      else if (r === "baron")
        (e.scale(1.75, 1.75),
          Us(e, s, a, {
            armor: "#7a5ab0",
            trim: "#ffc93c",
            plume: "#ffc93c",
            shield: "#4a3a6e",
            emblem: "#ffc93c",
            cape: "#3a2f6e",
            crown: 1,
          }));
      else if (r === "executioner") {
        e.scale(1.3, 1.3);
        const l = s.state === "atk" ? Math.sin(Math.max(0, s.atkT) * Math.PI) : 0;
        (xt(e, a, "#3b2a1a", 3),
          A(e, 0, -12, 10, 11),
          g(e, "#e0a878", 2.2),
          j(e, -8, -10, 16, 10, 3),
          g(e, "#6a4a2a", 1.8),
          e.beginPath(),
          e.arc(1, -24, 7, Math.PI * 1.05, Math.PI * 1.95),
          e.lineTo(8, -17),
          e.lineTo(-6, -17),
          e.closePath(),
          g(e, "#2a2236", 2),
          (e.fillStyle = "#fff"),
          A(e, 2, -21, 1.6, 1.2),
          e.fill(),
          A(e, 6, -21, 1.6, 1.2),
          e.fill(),
          (e.fillStyle = "#ef5a3c"),
          D(e, 2.3, -21, 0.7),
          e.fill(),
          D(e, 6.3, -21, 0.7),
          e.fill(),
          e.save(),
          e.translate(9, -12),
          e.rotate(-1 + l * 1.6),
          j(e, -1.5, -24, 3, 26, 1.5),
          g(e, "#7a4520", 1.6),
          e.beginPath(),
          e.moveTo(1, -24),
          e.quadraticCurveTo(14, -22, 12, -10),
          e.lineTo(1, -13),
          e.closePath(),
          g(e, "#c3cad6", 2),
          e.restore());
      } else if (r === "bat") {
        const l = Math.sin(t * 16 + s.seed);
        for (const n of [-1, 1])
          (e.beginPath(),
            e.moveTo(0, -2),
            e.lineTo(-4, n * (8 + l * 6)),
            e.lineTo(-9, n * (5 + l * 4)),
            e.lineTo(-13, n * (9 + l * 5)),
            e.lineTo(-11, n * 2),
            e.closePath(),
            g(e, "#4a3a6e", 1.6));
        (A(e, 1, 0, 6, 4.5),
          g(e, "#5d4a86", 2),
          F(e, [
            [3, -4],
            [4, -8],
            [6, -4],
          ]),
          g(e, "#5d4a86", 1.2),
          (e.fillStyle = "#ffe066"),
          D(e, 5, -1, 1.4),
          e.fill(),
          F(e, [
            [4, 2],
            [5, 4],
            [6, 2],
          ]),
          (e.fillStyle = "#fff"),
          e.fill());
      } else if (r === "kobold")
        (xt(e, a, "#5a3a20"),
          e.beginPath(),
          e.moveTo(-5, -6),
          e.quadraticCurveTo(-14, -4 + a, -15, -10),
          e.lineTo(-5, -9),
          g(e, "#c9502b", 1.4),
          A(e, 0, -8, 6.5, 7),
          g(e, "#d9663f", 2),
          A(e, 4, -15, 6, 4.5, 0.2),
          g(e, "#d9663f", 2),
          F(e, [
            [-1, -18],
            [-4, -23],
            [1, -19],
          ]),
          g(e, "#fff7e0", 1.2),
          Fe(e, 5, -16, 1.8, 1, !0),
          (e.strokeStyle = "#7a4520"),
          (e.lineWidth = 1.8),
          e.beginPath(),
          e.moveTo(6, -2),
          e.lineTo(12, -16),
          e.stroke(),
          F(e, [
            [12, -16],
            [10, -19],
            [14, -19],
          ]),
          g(e, "#c3cad6", 1));
      else if (r === "spider") wn(e, t, s, a, { body: "#4a3a5a", head: "#5d4a6e" });
      else if (r === "queen") (e.scale(1.9, 1.9), wn(e, t, s, a, { body: "#3a2448", head: "#5d3a6e", mark: "#ef5a3c", crown: 1 }));
      else if (r === "golem") kn(e, a, s, { body: "#8a8299", dark: "#5f5870", glow: "#7fe8ff" });
      else if (r === "sandgolem") kn(e, a, s, { body: "#d8a56a", dark: "#a8703e", glow: "#ffe066" });
      else if (r === "ogre") {
        const l = s.state === "atk" ? Math.sin(Math.max(0, s.atkT) * Math.PI) : 0;
        (xt(e, a, "#3a4a6a", 4),
          A(e, 0, -14, 13, 14),
          g(e, "#7a8fb0", 2.4),
          A(e, 1, -10, 8, 8),
          (e.fillStyle = "#a2b4d0"),
          e.fill(),
          Fe(e, 4, -21, 2.6, 1, !0),
          F(e, [
            [1, -12],
            [3, -15],
            [5, -12],
          ]),
          g(e, "#fff7e0", 1),
          F(e, [
            [6, -12],
            [8, -15],
            [10, -12],
          ]),
          g(e, "#fff7e0", 1),
          e.save(),
          e.translate(12, -12),
          e.rotate(-0.6 + a * 0.15 - l * 0.9),
          j(e, -2, -18, 5, 18, 2),
          g(e, "#8a8299", 1.8),
          A(e, 0.5, -19, 6, 6),
          g(e, "#8a8299", 1.8),
          e.restore());
      } else if (r === "basilisk") {
        (e.scale(1.3, 1.3),
          e.beginPath(),
          e.moveTo(-8, -5),
          e.quadraticCurveTo(-20, -2 + a * 2, -24, -8),
          e.lineTo(-8, -9),
          g(e, "#3f8a4d", 1.6));
        for (const l of [-6, 4])
          ((e.strokeStyle = Q), (e.lineWidth = 2.6), e.beginPath(), e.moveTo(l, -4), e.lineTo(l + a * 2, 1), e.stroke());
        (A(e, 0, -8, 11, 6), g(e, "#4caf50", 2.2), A(e, 0, -6, 8, 2.5), (e.fillStyle = "#bff59a"), e.fill());
        for (const l of [-6, -1, 4])
          (F(e, [
            [l - 2, -13],
            [l + 2, -13],
            [l, -17],
          ]),
            g(e, "#ffc93c", 1.2));
        (A(e, 12, -11, 6, 4.5),
          g(e, "#4caf50", 2),
          Fe(e, 13, -12.5, 2.2, 1, !0),
          (e.strokeStyle = "#ef5a3c"),
          (e.lineWidth = 1.4),
          e.beginPath(),
          e.moveTo(17, -10),
          e.lineTo(21, -11),
          e.lineTo(20, -9),
          e.stroke());
      } else if (r === "raider")
        (xt(e, a, "#5a3a20"),
          j(e, -6, -12, 12, 11, 4),
          g(e, "#e0c37a", 2),
          (e.fillStyle = "#c9502b"),
          e.fillRect(-6, -5, 12, 2),
          D(e, 1, -16, 5.5),
          g(e, "#c98547", 2),
          e.beginPath(),
          e.arc(1, -17, 6, Math.PI * 1.02, Math.PI * 1.98),
          e.lineTo(7, -15),
          e.lineTo(-5, -15),
          e.closePath(),
          g(e, "#4f74e8", 1.8),
          j(e, -4, -15, 10, 3, 1),
          (e.fillStyle = "#4f74e8"),
          e.fill(),
          Fe(e, 3.5, -16.5, 1.9, 1, !0),
          (e.strokeStyle = "#c3cad6"),
          (e.lineWidth = 2.2),
          e.beginPath(),
          e.moveTo(6, -6),
          e.quadraticCurveTo(12, -10, 10, -15),
          e.stroke());
      else if (r === "hyena") dl(e, a, { body: "#c9a06a", belly: "#e8d0a0", dark: "#7a5a30", spot: 1 });
      else if (r === "scorpion") {
        for (const l of [-6, -2, 2, 6])
          ((e.strokeStyle = Q), (e.lineWidth = 2), e.beginPath(), e.moveTo(l, -4), e.lineTo(l + a * 1.5 - 2, 1), e.stroke());
        (A(e, 0, -6, 10, 5), g(e, "#8a4f25", 2.2));
        for (const l of [-4, 1])
          ((e.strokeStyle = "rgba(47,29,18,.4)"), (e.lineWidth = 1.2), e.beginPath(), e.moveTo(l, -10), e.lineTo(l, -2), e.stroke());
        (e.beginPath(),
          e.moveTo(-8, -7),
          e.quadraticCurveTo(-16, -12, -14, -20),
          e.quadraticCurveTo(-10, -24, -6, -20),
          (e.strokeStyle = Q),
          (e.lineWidth = 5),
          e.stroke(),
          (e.strokeStyle = "#9a5b2c"),
          (e.lineWidth = 3),
          e.stroke(),
          F(e, [
            [-6, -20],
            [-2, -21],
            [-5, -17],
          ]),
          g(e, "#ef5a3c", 1.2));
        for (const l of [-1, 1])
          (e.beginPath(), e.moveTo(8, -6 + l * 2), e.lineTo(13, -6 + l * 5), e.stroke(), A(e, 15, -6 + l * 5, 3, 2), g(e, "#9a5b2c", 1.6));
        Fe(e, 8, -9, 1.6, 1, !0);
      } else if (r === "vulture") ul(e, t, s, { body: "#5a4a40", wing: "#3a2e28", neck: "#e0b0a0", head: "#e8c0b0" });
      else if (r === "mummy") {
        (e.scale(1.3, 1.3),
          xt(e, a, "#c9bfa8", 3),
          j(e, -8, -20, 16, 19, 5),
          g(e, "#e8dfc8", 2.2),
          (e.strokeStyle = "rgba(47,29,18,.35)"),
          (e.lineWidth = 1.2));
        for (const l of [-17, -12, -7]) (e.beginPath(), e.moveTo(-8, l), e.lineTo(8, l + 2), e.stroke());
        (j(e, -6, -31, 12, 12, 5),
          g(e, "#e8dfc8", 2),
          (e.fillStyle = "#4fb4ec"),
          D(e, -1, -25, 1.8),
          e.fill(),
          D(e, 3.5, -25, 1.8),
          e.fill(),
          e.beginPath(),
          e.moveTo(-6, -31),
          e.lineTo(-9, -34),
          e.lineTo(0, -36),
          e.lineTo(9, -34),
          e.lineTo(6, -31),
          g(e, "#ffc93c", 1.6),
          j(e, 7, -17, 10, 4, 2),
          g(e, "#e8dfc8", 1.6));
      } else if (r === "worm") {
        e.scale(1.6, 1.6);
        const l = Math.sin(t * 3 + s.seed);
        (A(e, -4, 0, 16, 4), (e.fillStyle = "rgba(160,110,40,.5)"), e.fill());
        for (let n = 3; n >= 0; n--) {
          const o = -4 - n * 5,
            d = -n * 3 + l * n;
          (A(e, d, o, 9 - n * 0.6, 5), g(e, n % 2 ? "#c98a52" : "#d89a62", 2));
        }
        (e.save(),
          e.translate(2 + l * 0, -26),
          A(e, 0, 0, 9, 8),
          g(e, "#d89a62", 2.2),
          e.beginPath(),
          e.arc(3, 1, 6, -0.9, 0.9),
          e.closePath(),
          g(e, "#5a1a20", 1.6));
        for (let n = -2; n <= 2; n++)
          (F(e, [
            [5 + Math.cos(n * 0.4) * 5, 1 + Math.sin(n * 0.4) * 5],
            [3 + Math.cos(n * 0.4) * 3, 1 + Math.sin(n * 0.4) * 3 - 1],
            [3 + Math.cos(n * 0.4) * 3, 1 + Math.sin(n * 0.4) * 3 + 1],
          ]),
            (e.fillStyle = "#fff7e0"),
            e.fill());
        (Fe(e, -2, -4, 2, 1, !0), e.restore());
      } else if (r === "hawk") {
        const l = Math.sin(t * 14 + s.seed);
        (e.beginPath(),
          e.moveTo(-2, -2),
          e.lineTo(-6, -14 - l * 7),
          e.lineTo(4, -4),
          g(e, "#7a4520", 1.6),
          A(e, 0, 0, 9, 4.5),
          g(e, "#a0703c", 2),
          F(e, [
            [-8, 0],
            [-14, -3],
            [-14, 3],
          ]),
          g(e, "#7a4520", 1.4),
          D(e, 8, -2, 4),
          g(e, "#fff7e0", 1.6),
          F(e, [
            [11, -3],
            [15, -1],
            [11, 0],
          ]),
          g(e, "#ffc93c", 1.2),
          Fe(e, 8.5, -3, 1.6, 1, !0),
          e.beginPath(),
          e.moveTo(-1, 0),
          e.lineTo(-4, 12 + l * 7),
          e.lineTo(5, 2),
          g(e, "#8a5a2b", 1.6));
      }
    }
    const fl = (e) => (e.target && !e.target.dead ? st(e.target) : 0),
      st = (e) => (ce[e.type].fly ? (e.type === "drake" ? 38 : ce[e.type].boss ? 30 : 20) : 6);
    function Ps(e, s, a) {
      const t = ce[s.type],
        r = t.fly;
      let l = s.x + (r ? 0 : s.ox),
        n = s.y + (r ? 0 : s.oy) + 4;
      const o = s.face || 1;
      if (s.state === "atk") {
        const u = Math.sin(Math.max(0, s.atkT) * Math.PI) * 5,
          h = Math.atan2(we.y - s.y, we.x - s.x);
        ((l += Math.cos(h) * u), (n += Math.sin(h) * u));
      }
      ((e.fillStyle = "rgba(30,70,20,.3)"),
        A(e, l, n, t.r * 0.9, t.r * 0.35),
        e.fill(),
        r
          ? ((n -= s.type === "drake" ? 38 : t.boss ? 30 : 20), (n += Math.sin(a * 3 + s.seed) * 2))
          : (n -= Math.abs(Math.sin(a * (t.sp / 5) + s.seed)) * 2.2),
        e.save(),
        e.translate(l, n),
        e.scale(o, 1));
      const d = Math.sin(a * (t.sp / 4) + s.seed);
      if (s.type === "gob")
        (A(e, -3, 0, 2.5, 1.6),
          g(e, "#3b2752", 1.2),
          A(e, 3 + d, 0, 2.5, 1.6),
          g(e, "#3b2752", 1.2),
          F(e, [
            [-4, -12],
            [-15, -15],
            [-6, -8],
          ]),
          g(e, "#6cc04a", 1.6),
          F(e, [
            [3, -12],
            [12, -17],
            [5, -8],
          ]),
          g(e, "#6cc04a", 1.6),
          A(e, 0, -8, 7.5, 8),
          g(e, "#7ed957", 2),
          e.beginPath(),
          e.moveTo(-7, -5),
          e.quadraticCurveTo(0, 0, 7, -5),
          e.lineTo(7, -2),
          e.quadraticCurveTo(0, 2, -7, -2),
          g(e, "#9a5b2c", 1.4),
          Fe(e, 3.5, -10, 2.8, 1),
          (e.strokeStyle = Q),
          (e.lineWidth = 1.3),
          e.beginPath(),
          e.arc(3, -5.5, 2, 0.2, Math.PI - 0.2),
          e.stroke(),
          (e.strokeStyle = "#ccc"),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(7, -4),
          e.lineTo(11, -9),
          e.stroke());
      else if (s.type === "loup") {
        for (const u of [-6, -2, 4, 8])
          ((e.strokeStyle = Q), (e.lineWidth = 2.4), e.beginPath(), e.moveTo(u, -4), e.lineTo(u + d * (u % 4 ? 1.5 : -1.5), 1), e.stroke());
        (e.beginPath(),
          e.moveTo(-9, -8),
          e.quadraticCurveTo(-17, -14 + d * 2, -16, -6),
          e.quadraticCurveTo(-13, -6, -9, -6),
          g(e, "#8b95a6", 1.6),
          A(e, 0, -7, 10, 5.5),
          g(e, "#a3adbd", 2),
          A(e, 0, -5, 7, 2.5),
          (e.fillStyle = "#d8dde6"),
          e.fill(),
          F(e, [
            [6, -15],
            [8, -21],
            [10, -14],
          ]),
          g(e, "#8b95a6", 1.5),
          D(e, 9, -11, 5.5),
          g(e, "#a3adbd", 2),
          A(e, 14, -9.5, 3.5, 2.5),
          g(e, "#d8dde6", 1.5),
          D(e, 17, -10, 1.3),
          (e.fillStyle = Q),
          e.fill(),
          Fe(e, 10, -12.5, 2, 1, !0));
      } else if (s.type === "orc")
        (A(e, -3, 0, 3, 1.8),
          g(e, "#5a3a20", 1.2),
          A(e, 3 + d, 0, 3, 1.8),
          g(e, "#5a3a20", 1.2),
          D(e, 0, -10, 9.5),
          g(e, "#4f9a3c", 2),
          e.beginPath(),
          e.arc(0, -11, 10, Math.PI * 1.02, Math.PI * 1.98),
          e.lineTo(10, -8),
          e.lineTo(-10, -8),
          e.closePath(),
          g(e, "#c3cad6", 2),
          F(e, [
            [-7, -17],
            [-12, -25],
            [-4, -19],
          ]),
          g(e, "#fff7e0", 1.5),
          rt(e, -3, -16, 3, 1.6, 0.7),
          Fe(e, 4, -6, 2.4, 1, !0),
          F(e, [
            [2, -1],
            [3.5, -5],
            [5, -1],
          ]),
          g(e, "#fff7e0", 1.2),
          F(e, [
            [6, -1.5],
            [7.2, -5],
            [8.6, -1.5],
          ]),
          g(e, "#fff7e0", 1.2),
          j(e, -14, -14, 6, 13, 2),
          g(e, "#c3cad6", 1.8));
      else if (s.type === "troll")
        (A(e, -5, 0, 4, 2.2),
          g(e, "#5d6f8a", 1.4),
          A(e, 5 + d, 0, 4, 2.2),
          g(e, "#5d6f8a", 1.4),
          A(e, 0, -14, 13, 14),
          g(e, "#7fb3a5", 2.4),
          A(e, 1, -10, 8, 8),
          (e.fillStyle = "#a8d4c6"),
          e.fill(),
          D(e, -6, -22, 2),
          (e.fillStyle = "#5f9184"),
          e.fill(),
          D(e, -9, -14, 1.5),
          e.fill(),
          Fe(e, 2, -21, 2.2, 1),
          Fe(e, 8, -21, 2.2, 1),
          A(e, 7, -16, 3.5, 3),
          g(e, "#93c7b9", 1.6),
          (e.strokeStyle = Q),
          (e.lineWidth = 1.5),
          e.beginPath(),
          e.arc(5, -10, 3, 0.2, Math.PI - 0.2),
          e.stroke(),
          e.save(),
          e.translate(12, -12),
          e.rotate(-0.6 + d * 0.15 - (s.state === "atk" ? Math.sin(Math.max(0, s.atkT) * Math.PI) * 0.8 : 0)),
          j(e, -2, -18, 5, 18, 2),
          g(e, "#9a5b2c", 1.8),
          A(e, 0.5, -19, 5, 6),
          g(e, "#9a5b2c", 1.8),
          e.restore());
      else if (t.human) cl(e, s, d, a);
      else {
        const u = s.type === "drake",
          h = s.type !== "wyv",
          c = u ? 1.75 : h ? 1.3 : 0.62;
        e.scale(c, c);
        const p = Math.sin(a * (h ? 5 : 12) + s.seed),
          y = u ? "#2a1f3d" : h ? "#b0302a" : "#c24a6a",
          b = u ? "#4a3a6e" : h ? "#e8433a" : "#ff8a3d",
          w = u ? "#b07cff" : h ? "#ffd166" : "#ffd9a0";
        (e.beginPath(),
          e.moveTo(-2, -6),
          e.lineTo(-8, -26 - p * 8),
          e.quadraticCurveTo(-14, -14, -22, -14 - p * 6),
          e.quadraticCurveTo(-16, -6, -6, -2),
          g(e, y, 2),
          e.beginPath(),
          e.moveTo(-14, 0),
          e.quadraticCurveTo(-26, 4, -30, -4 + p * 2),
          e.lineTo(-25, -2),
          e.quadraticCurveTo(-22, -1, -14, -4),
          g(e, b, 2),
          F(e, [
            [-30, -4 + p * 2],
            [-36, -8 + p * 2],
            [-33, 0 + p * 2],
          ]),
          g(e, y, 1.6),
          A(e, -2, -2, 15, 9),
          g(e, b, 2.2),
          A(e, 0, 1, 10, 5),
          (e.fillStyle = w),
          e.fill(),
          e.beginPath(),
          e.moveTo(8, -4),
          e.quadraticCurveTo(12, -12, 14, -14),
          e.lineTo(18, -8),
          e.quadraticCurveTo(14, -4, 12, 0),
          g(e, b, 2),
          A(e, 18, -14, 9, 7),
          g(e, b, 2.2),
          A(e, 24, -11, 4.5, 3.5),
          g(e, b, 1.8),
          D(e, 26, -12, 0.9),
          (e.fillStyle = Q),
          e.fill(),
          h
            ? (F(e, [
                [13, -19],
                [9, -28],
                [16, -20],
              ]),
              g(e, "#fff7e0", 1.5),
              F(e, [
                [18, -20],
                [17, -29],
                [21, -20],
              ]),
              g(e, "#fff7e0", 1.5))
            : (F(e, [
                [13, -19],
                [11, -25],
                [16, -20],
              ]),
              g(e, "#fff7e0", 1.3)));
        for (const T of [-12, -6, 0, 6])
          (F(e, [
            [T - 2, -10],
            [T + 2, -10],
            [T, -14],
          ]),
            g(e, w, 1.2));
        if (
          (Fe(e, 19, -16, 3.2, 1, !0),
          e.beginPath(),
          e.moveTo(0, -4),
          e.lineTo(-4, -30 - p * 10),
          e.quadraticCurveTo(-8, -18, -18, -20 - p * 7),
          e.quadraticCurveTo(-10, -8, -4, 0),
          g(e, y, 2.2),
          (e.strokeStyle = "rgba(47,29,18,.5)"),
          (e.lineWidth = 1.2),
          e.beginPath(),
          e.moveTo(-2, -4),
          e.lineTo(-8, -20 - p * 6),
          e.stroke(),
          h && (s.state === "atk" || Math.sin(a * 1.3 + s.seed) > 0.85))
        )
          for (let T = 0; T < 5; T++)
            (D(e, 32 + T * 4, -11 + Math.sin(a * 20 + T) * 2, 3 - T * 0.4), (e.fillStyle = T % 2 ? "#ffd23f" : "#ff7a2f"), e.fill());
      }
      if ((e.restore(), s.slowT > 0)) {
        ((e.fillStyle = "rgba(111,211,255,.38)"),
          A(e, l, n - t.r * 0.8, t.r + 3, t.r + 1),
          e.fill(),
          (e.fillStyle = "#fff"),
          D(e, l - t.r * 0.6, n - t.r * 1.6, 1.4),
          e.fill(),
          D(e, l + t.r * 0.5, n - t.r * 1.3, 1.2),
          e.fill(),
          (e.strokeStyle = "rgba(190,235,255,.95)"),
          (e.lineWidth = 2),
          A(e, l, n + 1, t.r + 5, (t.r + 5) * 0.4),
          e.stroke());
        {
          const u = n - t.r * 2.7 - 2;
          ((e.strokeStyle = "#e8f8ff"), (e.lineWidth = 1.8));
          for (let h = 0; h < 3; h++) {
            const c = (h * Math.PI) / 3 + a * 0.8;
            (e.beginPath(),
              e.moveTo(l + Math.cos(c) * 4.5, u + Math.sin(c) * 4.5),
              e.lineTo(l - Math.cos(c) * 4.5, u - Math.sin(c) * 4.5),
              e.stroke());
          }
        }
      }
      if (s.poison && s.poison.t > 0) {
        ((e.fillStyle = "rgba(126,217,87,.28)"),
          A(e, l, n - t.r * 0.8, t.r + 3, t.r + 1),
          e.fill(),
          (e.strokeStyle = "rgba(110,200,70,.9)"),
          (e.lineWidth = 2),
          A(e, l, n + 1, t.r + 4, (t.r + 4) * 0.4),
          e.stroke());
        for (let u = 0; u < 3; u++) {
          const h = (a * 1.5 + u * 0.33 + s.seed) % 1;
          (D(e, l + (u - 1) * 5, n - t.r * 1.6 - h * 10, 2 + h * 1.8), (e.fillStyle = "rgba(150,235,100," + (1 - h) + ")"), e.fill());
        }
      }
      if (s.acid > 0) {
        const u = l - t.r - 7,
          h = n - t.r * 1.7;
        (F(e, [
          [u - 4, h - 4],
          [u + 4, h - 4],
          [u + 4, h + 1],
          [u, h + 6],
          [u - 4, h + 1],
        ]),
          g(e, "#9aa3b5", 1.4),
          (e.strokeStyle = "#ef5a3c"),
          (e.lineWidth = 1.8),
          e.beginPath(),
          e.moveTo(u - 3, h - 3),
          e.lineTo(u + 3, h + 4),
          e.stroke());
      }
      if (s.weak > 0) {
        const u = l + t.r + 7,
          h = n - t.r * 1.7;
        (F(e, [
          [u - 4, h - 4],
          [u + 4, h - 4],
          [u, h + 5],
        ]),
          g(e, "#ffa43c", 1.4));
      }
      if (s.burn && s.burn.t > 0) {
        ((e.fillStyle = "rgba(255,122,47,.28)"), A(e, l, n + 1, t.r + 5, (t.r + 5) * 0.42), e.fill());
        for (let u = 0; u < 3; u++) {
          const h = l + (u - 1) * t.r * 0.6,
            c = n - t.r * 1.2 - Math.abs(Math.sin(a * 12 + u)) * 5;
          (F(e, [
            [h - 4, c + 5],
            [h + 4, c + 5],
            [h, c - 6],
          ]),
            (e.fillStyle = u % 2 ? "#ffd23f" : "#ff7a2f"),
            e.fill());
        }
      }
      if (
        (s.curse > 0 &&
          ((e.fillStyle = "rgba(120,70,190,.3)"),
          A(e, l, n + 1, t.r + 5, (t.r + 5) * 0.42),
          e.fill(),
          (e.strokeStyle = "#b07cff"),
          (e.lineWidth = 2),
          e.beginPath(),
          e.ellipse(l, n - t.r * 2.4 - 4, t.r * 0.7, 2.5, 0, 0, Math.PI * 2),
          e.stroke()),
        s.stun > 0)
      )
        if (s.frozen)
          (j(e, l - t.r - 3, n - t.r * 2 - 4, t.r * 2 + 6, t.r * 2 + 6, 4),
            (e.fillStyle = "rgba(191,233,255,.6)"),
            e.fill(),
            (e.strokeStyle = "#4fb4ec"),
            (e.lineWidth = 2),
            e.stroke());
        else
          for (let u = 0; u < 3; u++) {
            const h = a * 6 + u * 2.1;
            Nt(e, l + Math.cos(h) * t.r * 0.9, n - t.r * 2.2 + Math.sin(h) * 2.5, 3, "#ffe066");
          }
      if (s.hp < s.max) {
        const u = t.r >= 24 ? 64 : t.boss ? 46 : Math.max(20, t.r * 2.4),
          h =
            n -
            (["warlord", "baron", "queen", "worm"].includes(s.type)
              ? 66
              : ["captain", "executioner", "basilisk", "mummy"].includes(s.type)
                ? 48
                : t.human && !r
                  ? t.r >= 13
                    ? 40
                    : 30
                  : t.r * (r ? 1.6 : 2) + 10);
        (j(e, l - u / 2 - 1.5, h - 1.5, u + 3, 7, 3.5), (e.fillStyle = Q), e.fill());
        const c = Math.max(0, s.hp / s.max);
        c > 0 && (j(e, l - u / 2, h, u * c, 4, 2), (e.fillStyle = c > 0.5 ? "#7ed957" : c > 0.25 ? "#ffc93c" : "#ef5a3c"), e.fill());
      }
    }
    let i,
      ne = "normal";
    const xn = 0.75,
      hl = (e) => {
        if (i && i.endless) {
          const s = e || i.wave + 1;
          return s <= 10 ? 0 : s <= 20 ? 0.2 : s <= 30 ? 0.5 : 0.5 + 0.2 * Math.min(1, (s - 30) / 70);
        }
        return ne === "normal" ? 0.2 : ne === "difficile" ? 0.5 : 0;
      },
      ss = (e, s) => {
        e.stun = Math.max(e.stun || 0, s * (1 - (e.res || 0)));
      },
      _s = () => (i && i.endless ? 10 : J[ne].maxPer),
      Cs = (e, s, a, t, r) => {
        const l = i.decals || (i.decals = []);
        (l.push({ x: e, y: s, r: a, kind: t, t: r, max: r }), l.length > 70 && l.shift());
      },
      as = () => !!(i && !i.endless && ne !== "facile" && !i.over && i.wave > 0 && (i.enemies.length > 0 || i.queue.length > 0)),
      Ca = (e, s) => fe(e, s, "Attends la fin de la vague", "#ffb3a3", 13),
      Tn = () => (!i.endless && ne === "facile" && le.id === "plaine" ? [1.4, 1.4, 1.3][Rt] || 1.3 : 1),
      Mn = () => le.tier >= 2 && !(i && i.endless),
      pl = { "2-1-facile": 0.872 },
      ml = () => (i && !i.endless && ne === "facile" ? 0.7 : 1),
      gl = (e) => (!i || i.endless || ne !== "facile" || !i.waves ? 1 : e > Math.ceil(i.waves.length / 2) ? 0.8 : 1),
      mo = (e = Rt, s = ne) => (i && i.endless ? 1 : pl[le.tier + "-" + e + "-" + s] || 1),
      Sn = (e, s) =>
        Math.round(
          (s === "facile" ? 160 + Ys(e) * 14 : (160 + e * 35 + le.tier * 80) * J[s].gold) *
            (le.tier >= 2 ? 0.7 : 1) *
            (s === "normal" && le.tier >= 2 ? 1.1 : 1) *
            mo(e, s),
        ),
      Ys = (e) => le.tier * 9 + e,
      $n = (e) => {
        const s = Ys(e);
        return 6 + Math.round((s * 5) / 44) + (We[e].boss ? 1 : 0);
      },
      bl = {
        5: 0.966,
        6: 0.915,
        7: 0.86,
        8: 0.72,
        9: 0.854,
        10: 0.86,
        11: 0.86,
        12: 0.82,
        13: 0.814,
        14: 0.74,
        15: 0.74,
        16: 0.722,
        17: 0.641,
        18: 0.758,
        19: 0.755,
        20: 0.72,
        21: 0.668,
        22: 0.668,
        23: 0.696,
        24: 0.71,
        25: 0.703,
        26: 0.745,
        27: 0.731,
        28: 0.677,
        29: 0.641,
        30: 0.641,
        31: 0.641,
        32: 0.672,
        33: 0.636,
        34: 0.691,
        35: 0.72,
        36: 0.748,
        37: 0.715,
        38: 0.701,
        39: 0.686,
        40: 0.686,
        41: 0.663,
        42: 0.663,
        43: 0.719,
        44: 0.611,
      },
      vl = [],
      yl = (e) => Math.round(Ys(e) * 0.78),
      qa = (e, s) =>
        s === "facile"
          ? $n(e)
          : s === "normal"
            ? Math.max(Math.round(We[e].waves * J.normal.waves), $n(e) + 1)
            : Math.max(Math.round(We[e].waves * J.difficile.waves), qa(e, "normal") + 1),
      kl = [
        3395, 6070, 10416, 13595, 29137, 41384, 45e3, 56e3, 62941, 29100, 33100, 37500, 42600, 48300, 54800, 62200, 70600, 80100, 48300,
        54800, 62200, 70600, 80100, 90900, 103100, 117e3, 132800, 80100, 90900, 103100, 117e3, 132800, 150700, 171e3, 194e3, 220200, 132800,
        150700, 171e3, 194e3, 220200, 249800, 283500, 321700, 365e3,
      ],
      wl = [
        3577, 6395, 17228, 22214, 43598, 50947, 57437, 101357, 111746, 43600, 49500, 56100, 63700, 72300, 82e3, 93100, 105600, 119800,
        72300, 82e3, 93100, 105600, 119800, 136e3, 154300, 175100, 198700, 119800, 136e3, 154300, 175100, 198700, 225500, 255800, 290300,
        329400, 198700, 225500, 255800, 290300, 329400, 373800, 424200, 481300, 546200,
      ];
    function Ln(e) {
      const s = qa(e, ne),
        a = ne === "facile" ? yl(e) : Math.round(e * 1.4) + le.tier * 4,
        t = [],
        r = (n) => le.roster[n] || n,
        l = (n) => n.map((o) => Object.assign({}, o, { t: r(o.t) }));
      for (let n = 0; n < s; n++) {
        let o = a + n;
        (o > 19 && (o = 10 + ((o - 10) % 10)),
          n < 4 && lo[o].some((d) => d.t === "dragon") && o--,
          t.push({ groups: l(lo[o]), str: a + n + 1 }));
      }
      if (
        (We[e].boss && (t[s - 1] = { groups: l([te("wyv", 8, 0.8), te("troll", 4, 2, 3), te("drake", 1, 0, 7)]), str: a + s + 2 }),
        ne === "facile" && le.tier === 2 && e === 2)
      ) {
        const n = J.facile.count;
        for (const o of t)
          o.groups = o.groups.map((d) =>
            d.t !== "golem" ? d : Object.assign({}, d, { n: Math.max(1, Math.round(Math.max(1, Math.round(d.n * n)) * 0.8)) / n }),
          );
        {
          const o = J.facile.count;
          t[0].groups = t[0].groups.map((d) =>
            d.t !== "golem" ? d : Object.assign({}, d, { n: Math.max(1, Math.max(1, Math.round(d.n * o)) - 6) / o }),
          );
        }
      }
      if (ne === "facile" && le.tier === 2 && e === 3) {
        const n = J.facile.count;
        t[0].groups = t[0].groups.map((o) => (o.t !== "golem" ? o : Object.assign({}, o, { n: Math.max(1, Math.round(o.n * n) - 8) / n })));
      }
      if (ne === "facile" && le.tier === 2 && e === 4) {
        const n = J.facile.count;
        t[0].groups = t[0].groups.map((o) => (o.t !== "ogre" ? o : Object.assign({}, o, { n: Math.max(1, Math.round(o.n * n) - 4) / n })));
      }
      if (ne === "facile" && le.tier === 2 && e === 6) {
        const n = J.facile.count;
        t[0].groups = t[0].groups.map((o) => (o.t !== "golem" ? o : Object.assign({}, o, { n: Math.max(1, Math.round(o.n * n) - 3) / n })));
      }
      if (ne === "facile" && le.tier === 3 && e === 7) {
        const n = J.facile.count;
        t[0].groups = t[0].groups.map((o) =>
          o.t !== "sandgolem" ? o : Object.assign({}, o, { n: Math.max(1, Math.round(o.n * n) - 2) / n }),
        );
      }
      if (ne === "normal" && le.id === "plaine") for (const n of t) n.hm = (n.hm || 1) * 1.35;
      if (ne === "facile") {
        const n = (bl[Ys(e)] / nn[le.tier] || 1) * 0.85 * (le.tier === 3 ? 0.93 : le.tier === 2 ? 0.95 : 1);
        if (n !== 1) for (const o of t) o.hm = (o.hm || 1) * n;
        t.forEach((o, d) => {
          const u = vl[d];
          u && (o.hm = (o.hm || 1) * u);
        });
      }
      if ((Pn(t, e), ne === "normal")) for (const n of t) n.hm = (n.hm || 1) * 1.25;
      if ((e > 0 && xl(t, e, ne === "facile" ? 1.05 : 1), ne === "facile" && le.tier === 2 && e === 4))
        for (const n of t) n.hm = (n.hm || 1) * 0.9;
      if (ne === "normal" && le.id === "plaine" && e >= 6 && e <= 8) {
        const n = t.length - (We[e].boss ? 1 : 0),
          o = [45e3, 56e3, 62941][e - 6];
        if (e === 6) {
          const u = [0.55, 0.62, 0.7, 0.8, 0.9];
          t.forEach((h, c) => {
            u[c] && (h.hm = (h.hm || 1) * u[c]);
          });
        }
        const d = o / qs(t, n);
        for (const u of t) u.hm = (u.hm || 1) * d;
      }
      if (ne === "normal" && le.id === "plaine" && e === 6) {
        t[0].hm = (t[0].hm || 1) * 0.9;
        const n = J.normal.count,
          o = { soldier: 3, knight: 1 };
        t[0].groups = t[0].groups.map((d) => (o[d.t] ? Object.assign({}, d, { n: Math.max(1, Math.round(d.n * n) - o[d.t]) / n }) : d));
      }
      if (ne === "facile" && le.tier === 0 && We[e].boss) {
        const n = t.length - 1,
          o = Qs(t[n]),
          d = Math.min(Qs(t[n - 1]) * 1.5, qs(t, n) * 4);
        o > d && (t[n].hm = ((t[n].hm || 1) * d) / o);
      }
      if (ne !== "facile") {
        const n = ne === "difficile",
          o = (n ? wl : kl)[Ys(e)],
          d = t.length - (We[e].boss ? 1 : 0),
          u = d >> 1,
          h = (b) => Qs(t[b]),
          c = n ? 0.28 : 0.22,
          p = n ? 2.3 : 2,
          y = (b) => (b <= u ? o * Math.pow(c, (u - b) / u) : o * Math.pow(p, (b - u) / Math.max(1, d - 1 - u)));
        for (let b = 0; b < d; b++) t[b].hm = ((t[b].hm || 1) * y(b)) / h(b);
        d < t.length && (t[d].hm = ((t[d].hm || 1) * (n ? 1.8 : 1.6) * h(d - 1)) / h(d));
      }
      if (ne === "normal" && le.tier === 2 && e === 6) {
        const cn = J.normal.count,
          b0 = Qs(t[0]);
        t[0].groups = t[0].groups.map((g) =>
          g.t === "golem" ? Object.assign({}, g, { n: Math.max(1, Math.round(g.n * cn) - 7) / cn }) : g,
        );
        const X = b0 - Qs(t[0]),
          mi = t.length >> 1;
        let S = 0;
        for (let i = 1; i < t.length; i++) if (i !== mi) S += Qs(t[i]);
        const f = 1 + X / S;
        for (let i = 1; i < t.length; i++) if (i !== mi) t[i].hm = (t[i].hm || 1) * f;
      }
      if (ne === "normal" && le.tier === 2 && e === 8) t[0].hm = (t[0].hm || 1) * 0.85;
      return t;
    }
    const qs = (e, s) => {
      const a = e
        .slice(0, s)
        .map(Qs)
        .sort((t, r) => t - r);
      return a[a.length >> 1];
    };
    function xl(e, s, a) {
      const t = Ln(s - 1),
        r = t.length - (We[s - 1].boss ? 1 : 0),
        l = e.length - (We[s].boss ? 1 : 0),
        n = qs(t, r) * a;
      if (qs(e, l) >= n || l < 2) return;
      const o = e.map((u) => u.hm || 1);
      let d = 1;
      for (let u = 0; u < 12; u++) {
        const h = qs(e, l);
        if (h >= n * 0.999) break;
        ((d *= Math.min(1.5, Math.max(1.02, n / h))),
          e.forEach((c, p) => {
            c.hm = o[p] * (1 + ((d - 1) * p) / (l - 1));
          }),
          Pn(e, s));
      }
      {
        const u = qs(e, l);
        if (u < n) for (const h of e) h.hm *= n / u;
      }
    }
    function Qs(e) {
      const s = e.ph || J[ne];
      let a = 0;
      for (const t of e.groups) {
        const r = ce[t.t],
          l = r.boss ? t.n : Math.max(1, Math.round(t.n * s.count));
        a += ((l * r.hp) / (1 - Math.min(0.8, r.armor || 0))) * Math.sqrt((r.sp || 44) / 44);
      }
      return a * Sa(e.str) * s.hp * (e.hm || 1);
    }
    function Pn(e, s) {
      const r = e.length,
        l = !!We[s].boss,
        n = l ? r - 1 : r,
        o = e.map(Qs),
        d = [];
      for (let c = 0; c < n; c++)
        for (d.push({ s: o[c], c: 1 }); d.length > 1 && d[d.length - 2].s / d[d.length - 2].c > d[d.length - 1].s / d[d.length - 1].c; ) {
          const p = d.pop();
          ((d[d.length - 1].s += p.s), (d[d.length - 1].c += p.c));
        }
      const u = [];
      for (const c of d) for (let p = 0; p < c.c; p++) u.push(c.s / c.c);
      let h = 0;
      for (let c = 0; c < r; c++) {
        let p = c < n ? u[c] : o[c];
        (c > 0 && ((p = Math.max(p, h * 1.05)), c < n && (p = Math.min(p, h * Math.min(1.7, 1.25 + 0.08 * (c - 1))))),
          c === 0 && (p = o[0]),
          Math.abs(p - o[c]) > 1e-6 && (e[c].hm = ((e[c].hm || 1) * p) / o[c]),
          (h = p));
      }
    }
    function As(e, s = 0) {
      ((ne = e),
        (Rt = s),
        (ya = We[s].th),
        Ur(s),
        (i = {
          gold: Sn(s, e),
          wave: 0,
          waves: Ln(s),
          enemies: [],
          towers: {},
          proj: [],
          parts: [],
          texts: [],
          queue: [],
          time: 0,
          speed: [1, 2, 3].includes(m.speed) || (m.speed === 5 && Xe()) ? m.speed : 1,
          paused: !1,
          sel: null,
          blockMode: !1,
          deck: ls(),
          power: { cd: 0, armed: !1 },
          over: !1,
          won: !1,
          shake: 0,
          sweep: null,
          cleared: {},
          started: !1,
          flash: null,
          zones: [],
          bolts: [],
          crystal: {
            hp: Math.round(pt.hp * J[e].cry) + 40 * me("g5") + Math.round(5 * ke("mortar")),
            max: Math.round(pt.hp * J[e].cry) + 40 * me("g5") + Math.round(5 * ke("mortar")),
            lvl: 0,
            cd: 0,
            flash: 0,
          },
          hand: [],
          pick: -1,
          buys: 0,
          ghost: null,
          done: {},
        }),
        Aa(3),
        (Te = 1),
        (ft = 0),
        (wt = 0),
        pn(),
        (Y("#speed").textContent = "\xD7" + i.speed),
        De.classList.remove("blockmode"),
        vn(),
        (ve = ""),
        je(),
        Ge(!0),
        (Y("#wtot").textContent = "/" + i.waves.length),
        os(We[s].name),
        typeof Tr == "function" && (Le && so(!1), !m.tutoDone && le.tier === 0 && s === 0 && Tr(Jo), (Jo = !1)));
    }
    function os(e) {
      const s = Y("#banner");
      ((s.textContent = e), (s.style.opacity = 1), clearTimeout(os.t), (os.t = setTimeout(() => (s.style.opacity = 0), 1800)));
    }
    function fe(e, s, a, t, r = 14) {
      i.texts.push({ x: e, y: s, txt: a, col: t, life: 1, size: r });
    }
    function at(e, s, a, t, r = 60, l = 2.5) {
      for (let n = 0; n < t; n++) {
        const o = Math.random() * 7,
          d = r * (0.3 + Math.random());
        i.parts.push({
          x: e,
          y: s,
          vx: Math.cos(o) * d,
          vy: Math.sin(o) * d - 20,
          life: 0.5 + Math.random() * 0.4,
          max: 0.9,
          col: a,
          size: l * (0.6 + Math.random() * 0.8),
        });
      }
    }
    function ot(e, s, a = 6) {
      for (let t = 0; t < a; t++) {
        const r = Math.random() * 7;
        i.parts.push({
          x: e,
          y: s,
          vx: Math.cos(r) * 40,
          vy: Math.sin(r) * 25 - 15,
          life: 0.5,
          max: 0.5,
          col: "#ffffff",
          size: 4 + Math.random() * 3,
          puff: !0,
        });
      }
    }
    const ns = {
      o1: { name: "Bloc", cells: [[0, 0]], w: 3 },
      i2: {
        name: "Duo",
        cells: [
          [0, 0],
          [1, 0],
        ],
        w: 3,
      },
      i3: {
        name: "Barre de 3",
        cells: [
          [0, 0],
          [1, 0],
          [2, 0],
        ],
        w: 2,
      },
      l3: {
        name: "Coin",
        cells: [
          [0, 0],
          [0, 1],
          [1, 1],
        ],
        w: 3,
      },
      o4: {
        name: "Carr\xE9",
        cells: [
          [0, 0],
          [1, 0],
          [0, 1],
          [1, 1],
        ],
        w: 1,
      },
      t4: {
        name: "T",
        cells: [
          [0, 0],
          [1, 0],
          [2, 0],
          [1, 1],
        ],
        w: 2,
      },
      l4: {
        name: "L",
        cells: [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 2],
        ],
        w: 2,
      },
      s4: {
        name: "Zigzag",
        cells: [
          [1, 0],
          [2, 0],
          [0, 1],
          [1, 1],
        ],
        w: 2,
      },
      i4: {
        name: "Barre de 4",
        cells: [
          [0, 0],
          [1, 0],
          [2, 0],
          [3, 0],
        ],
        w: 1,
      },
    };
    function go() {
      const e = Object.keys(ns),
        s = e.reduce((t, r) => t + ns[r].w, 0);
      let a = Math.random() * s;
      for (const t of e) if (((a -= ns[t].w), a <= 0)) return { k: t, cells: ns[t].cells.map((r) => r.slice()) };
      return { k: "o1", cells: [[0, 0]] };
    }
    function Cn(e) {
      const s = e.map(([r, l]) => [-l, r]),
        a = Math.min(...s.map((r) => r[0])),
        t = Math.min(...s.map((r) => r[1]));
      return s.map(([r, l]) => [r - a, l - t]);
    }
    function Tl(e, s, a) {
      const t = Math.round(e.cells.reduce((l, n) => l + n[0], 0) / e.cells.length - 0.01),
        r = Math.round(e.cells.reduce((l, n) => l + n[1], 0) / e.cells.length - 0.01);
      return e.cells.map(([l, n]) => [s + l - t, a + n - r]);
    }
    const bo = () => J[ne].buy[0] + J[ne].buy[1] * i.buys;
    function Aa(e) {
      for (let s = 0; s < e; s++) i.hand.push(go());
      (i.pick < 0 && (i.pick = 0), (ve = ""));
    }
    function qn(e) {
      const s = [];
      for (const [t, r] of e) {
        if (t < 0 || r < 0 || t >= Re || r >= et) return { ok: !1, why: "out" };
        const l = tt(t, r);
        if (ht[l] !== "ground" || Ee[l]) return { ok: !1, why: "no" };
        s.push(l);
      }
      for (const t of i.enemies) if (s.includes(t.cc) || s.includes(t.tc)) return { ok: !1, why: "busy", ids: s };
      const a = xa(s);
      for (const t in ut) if (!ut[t].some((r) => isFinite(a[r]))) return { ok: !1, why: "path", ids: s };
      for (const t of i.enemies) if (!isFinite(a[t.cc]) || (t.tc >= 0 && !isFinite(a[t.tc]))) return { ok: !1, why: "path", ids: s };
      return { ok: !0, ids: s, F: a };
    }
    function rs(e, s) {
      const a = i.hand[i.pick];
      if (!a) {
        i.ghost = null;
        return;
      }
      const t = Tl(a, e, s),
        r = qn(t);
      if (((i.ghost = { c: e, r: s, cells: t, res: r }), r.ok && r.F)) {
        const l = Ve,
          n = Ts,
          o = Ee.slice();
        for (const d of r.ids) Ee[d] = 1;
        ((Ve = r.F), Xs(), (i.ghost.routes = Ts), (Ve = l), (Ts = n), (Ee = o));
      }
    }
    function An() {
      const e = i.ghost,
        s = i.hand[i.pick];
      if (!e || !s) return;
      if (as()) {
        Ca(e.cells[0][0] * $ + $ / 2, e.cells[0][1] * $);
        return;
      }
      const a = qn(e.cells);
      if (!a.ok) {
        const [r, l] = e.cells[0],
          n = r * $ + $ / 2,
          o = l * $ + $ / 2;
        (fe(n, o - 4, a.why === "path" ? "Chemin bloqu\xE9 !" : a.why === "busy" ? "Un monstre passe" : "Place occup\xE9e", "#ef5a3c", 14),
          (e.res = a));
        return;
      }
      Se && Se.me === "guest" && coopCmd({ c: "place", pk: s.k, cells: e.cells.map((r) => r.slice()) });
      const t = ++ka;
      Bt[t] = { k: s.k, cells: s.cells.map((r) => r.slice()), o: Gt() };
      for (const r of a.ids) ((Ee[r] = 1), (vt[r] = t), ot(oe(r), ae(r), 3));
      ((Ve = a.F), Xs(), Ue("block"));
      {
        const r = s.k;
        i.hand.splice(i.pick, 1);
        const l = i.hand.findIndex((n) => n.k === r);
        l >= 0 ? (i.pick = l) : i.pick >= i.hand.length && (i.pick = i.hand.length - 1);
      }
      ((i.ghost = null), (ve = ""));
    }
    function Ks(e) {
      ((i.towerMode = e === void 0 ? !i.towerMode : e),
        i.towerMode && ((i.blockMode = !1), (i.ghost = null), (i.bdel = !1), De.classList.remove("blockmode")),
        (i.sel = null),
        (i.power.armed = !1),
        (ve = ""),
        je(),
        Ge(!0));
    }
    function Ml(e, s) {
      if (as()) return (Ca(oe(e), ae(e) - 6), !1);
      const a = yt(s, 0),
        t = _s();
      return t && aa(s) >= t
        ? (fe(oe(e), ae(e) - 6, "Limite : " + t + " " + be[s].short, "#ffb3a3", 13), !1)
        : i.gold < a
          ? (fe(oe(e), ae(e) - 6, "Pas assez d'or", "#ffb3a3", 13), !1)
          : (Ue("build"),
            (i.gold -= a),
            (i.towers[e] = { type: s, lvl: 0, cd: 0, ang: 0, invest: a, mode: "first", anim: 0, o: Gt() }),
            ot(oe(e), ae(e) - 8, 12),
            Se && Se.me === "guest" && coopCmd({ c: "build", i: e, type: s }),
            !0);
    }
    let Ra = { t: "", at: 0 };
    function vo() {
      ((i.towerMode = !1),
        (i.blockMode = !i.blockMode),
        (i.sel = null),
        (i.ghost = null),
        (i.bdel = !1),
        (i.power.armed = !1),
        i.pick < 0 && i.hand.length && (i.pick = 0),
        De.classList.toggle("blockmode", i.blockMode),
        (ve = ""),
        je(),
        Ge(!0));
    }
    const Sl = (e) => {
      if (e < 0 || !Ee[e]) return null;
      const s = vt[e],
        a = [];
      for (let t = 0; t < Be; t++) Ee[t] && (s ? vt[t] === s : t === e) && a.push(t);
      return a;
    };
    function Rn(e) {
      if (!Ee[e]) return;
      if (as()) {
        Ca(oe(e), ae(e));
        return;
      }
      const s = vt[e],
        a = [];
      for (let l = 0; l < Be; l++) Ee[l] && (s ? vt[l] === s : l === e) && a.push(l);
      if (Se) {
        const l = (Bt[s] || {}).o;
        if ((l && l !== Gt()) || a.some((n) => i.towers[n] && i.towers[n].o !== Gt())) {
          fe(oe(e), ae(e) - 10, "Pas \xE0 toi", "#ffb3a3", 13);
          return;
        }
        Se.me === "guest" && coopCmd({ c: "demo", i: e });
      }
      let t = 0,
        r = 0;
      for (const l of a) {
        const n = i.towers[l];
        n && ((t += Math.round(n.invest * (0.6 + 0.05 * me("g4b")))), delete i.towers[l], r++);
      }
      r && ((i.gold += t), fe(oe(e), ae(e) - 16, (r > 1 ? r + " tours vendues" : "Tour vendue") + " +" + t, "#ffc93c", 13));
      for (const l of a) ((Ee[l] = 0), (vt[l] = 0), ot(oe(l), ae(l), 5), i.sel && i.sel.i === l && (i.sel = null));
      if (((Ve = xa(-1)), Xs(), me("g6"))) {
        const l = s && Bt[s] ? { k: Bt[s].k, cells: Bt[s].cells.map((n) => n.slice()) } : { k: "o1", cells: [[0, 0]] };
        (i.hand.push(l), i.pick < 0 && (i.pick = 0), fe(oe(e), ae(e) - 6, "+1 forme", "#f3d08c", 13), (ve = ""));
      }
      s && delete Bt[s];
    }
    const Bn = (e) =>
      e < 1e3
        ? String(Math.round(e))
        : e < 1e6
          ? (Math.round(e / 100) / 10).toString().replace(".", ",") + " k"
          : (Math.round(e / 1e5) / 10).toString().replace(".", ",") + " M";
    function $l(e, s, a = "#f3d08c") {
      const t = e.getContext("2d"),
        r = e.width;
      (t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, r, r));
      const l = Math.max(...s.cells.map((h) => h[0])) + 1,
        n = Math.max(...s.cells.map((h) => h[1])) + 1,
        o = Math.min(r / (Math.max(l, n) + 0.6), r / 3.2),
        d = (r - l * o) / 2,
        u = (r - n * o) / 2;
      for (const [h, c] of s.cells)
        (j(t, d + h * o + 1, u + c * o + 1, o - 2, o - 2, o * 0.2),
          g(t, a, Math.max(1.5, o * 0.08)),
          (t.fillStyle = "rgba(196,143,74,.8)"),
          t.fillRect(d + h * o + 2, u + c * o + o * 0.68, o - 4, o * 0.22));
    }
    function Dn() {
      const e = J[ne],
        s = e.blocks,
        a = {
          lock: '<svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="3" fill="#ffc93c" stroke="#2f1d12" stroke-width="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="#2f1d12" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="15.5" r="1.8" fill="#2f1d12"/></svg>',
          tow: '<svg viewBox="0 0 24 24"><path d="M6 21V10l-2-3h16l-2 3v11z" fill="#c9a06a" stroke="#2f1d12" stroke-width="2" stroke-linejoin="round"/><path d="M4 7V4h3v2h3V4h4v2h3V4h3v3" fill="#c9a06a" stroke="#2f1d12" stroke-width="2" stroke-linejoin="round"/></svg>',
          blk: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="2" fill="#b7835a" stroke="#2f1d12" stroke-width="2"/><rect x="13" y="3" width="8" height="8" rx="2" fill="#b7835a" stroke="#2f1d12" stroke-width="2"/><rect x="3" y="13" width="8" height="8" rx="2" fill="#b7835a" stroke="#2f1d12" stroke-width="2"/></svg>',
        };
      Ie(
        `<h2>R\xE8gles du mode ${e.label}</h2><div class="rrow">${a.lock}<div><b>Pas de construction pendant la vague</b>Une fois la vague lanc\xE9e, tu ne peux plus poser, am\xE9liorer ni vendre de tour, ni poser de bloc. Pr\xE9pare tout <u>avant</u> de lancer, puis attends la mort du dernier monstre.</div></div><div class="rrow">${a.tow}<div><b>${e.maxPer} tours maximum par type</b>Tu ne peux pas avoir plus de ${e.maxPer} archers, ${e.maxPer} mages, etc. Varie tes tours !</div></div><div class="rrow">${a.blk}<div><b>${s} bloc${s > 1 ? "s" : ""} par vague</b>Chaque vague repouss\xE9e te donne ${s} forme${s > 1 ? "s" : ""} de bloc au lieu de 3. Place-les avec soin pour allonger le chemin.</div></div><div class="stack"><button class="btn go" data-act2="resume" data-focus>Compris</button></div>`,
        "pause",
      );
    }
    function En() {
      if (i.wave >= i.waves.length || i.over || (i.wave > 0 && (i.enemies.length > 0 || i.queue.length > 0))) return;
      const e = i.waves[i.wave],
        s = e.groups;
      (i.wave++, (i.started = !0));
      const a = Object.keys(ut);
      let t = i.wave;
      for (const l of s) {
        const n = e.ph || J[ne],
          o = ce[l.t].boss ? l.n : Math.max(1, Math.round(l.n * n.count));
        for (let d = 0; d < o; d++)
          i.queue.push({ type: l.t, at: i.time + l.delay + d * l.gap, w: e.str, hm: e.hm || 1, lw: i.wave, ph: n, p: a[t++ % a.length] });
      }
      (i.queue.sort((l, n) => l.at - n.at),
        i.endless &&
          [11, 21, 31].includes(i.wave) &&
          fe(
            de / 2,
            ge / 2 - 30,
            "Les monstres passent en " + e.ph.name.replace(" +1", "") + (i.wave === 31 ? " et au-del\xE0" : ""),
            "#ef5a3c",
            16,
          ),
        !i.endless &&
          ne !== "facile" &&
          ((ve = ""),
          fe(de / 2, ge / 2 + 10, "Construction bloqu\xE9e pendant la vague", "#ffb3a3", 15),
          (m.tips || {})["rules_" + ne] ||
            ((m.tips = m.tips || {}),
            (m.tips["rules_" + ne] = 1),
            he(),
            (i.paused = !0),
            (i.power.armed = !1),
            setTimeout(() => {
              i.over || Dn();
            }, 300))));
      const r = s.find((l) => ce[l.t].boss);
      (os(r ? (ce[r.t].hp > 3e3 ? ce[r.t].name + " entre en sc\xE8ne !" : ce[r.t].name + " approche !") : "Vague " + i.wave + " !"),
        (ve = ""));
    }
    function Ll(e) {
      const s = ce[e.type],
        a = e.ph || J[ne],
        t = Sa(e.w) * a.hp * (e.hm || 1),
        r = ut[e.p],
        l = r[(Math.random() * r.length) | 0],
        n = {
          type: e.type,
          hp: s.hp * t,
          max: s.hp * t,
          x: oe(l),
          y: ae(l),
          cc: l,
          tc: -1,
          state: "walk",
          armor: s.armor,
          gold: Math.max(
            1,
            Math.round(
              s.gold * (1 + 0.05 * (e.w - 1)) * (i.endless ? 0.55 : J[ne].kill) * xn * Tn() * (Mn() ? 0.8 : 1) * mo() * gl(e.lw) * ml(),
            ),
          ),
          atk: s.atk * (1 + 0.06 * (e.w - 1)),
          lw: e.lw,
          res: hl(e.lw),
          spm: a.speed,
          slowT: 0,
          slowF: 0,
          burn: null,
          seed: Math.random() * 10,
          dead: !1,
          face: 1,
          ox: (Math.random() - 0.5) * 8,
          oy: (Math.random() - 0.5) * 6,
          atkT: 0,
          vx: 0,
          vy: 0,
          rem: 999,
        };
      ((n.tc = Ta(l)), Oe && (n.gold *= 2.5), (n.id = i.eid = (i.eid || 0) + 1), i.enemies.push(n), ot(n.x, n.y, 4));
    }
    let ze = null;
    function lt(e, s, a, t = 0) {
      if (!e.dead) {
        ((t = Math.min(1, t + 0.02 * me("g1b"))),
          ce[e.type].fly && (s *= 1 + 0.04 * me("g2a")),
          e.hp >= e.max * 0.9 && (s *= 1 + 0.06 * me("g3a")),
          (s *= 1 - Math.min(1, e.armor * (e.acid > 0 ? 1 - 0.075 * re("alchemist", "n4") : 1)) * (1 - t)),
          e.curse > 0 && (s *= 1.2));
        {
          const r = ce[e.type];
          (r.fly && (s *= 1 + 0.005 * ke("feather")),
            r.boss && (s *= 1 + 0.01 * ke("hunter")),
            e.hp < e.max * 0.3 && (s *= 1 + 0.02 * ke("claw")));
        }
        if (
          (re("frost", "n6") && e.slowT > 0 && (s *= 1.15),
          ze && (ze.dmg = (ze.dmg || 0) + Math.max(0, Math.min(s, e.hp))),
          (e.hp -= s),
          e.hp <= 0)
        ) {
          ((e.dead = !0),
            Ke(ze, "storm", 2) && i.power.cd > 0 && (i.power.cd = Math.max(0, i.power.cd - yo * 0.03)),
            (i.gold += e.gold),
            i.coop && (i.p2.gold += e.gold),
            ze && (ze.kills = (ze.kills || 0) + 1));
          {
            const n = ce[e.type];
            (Ue("kill"), n.fly && Ue("fly"), n.boss && Ue("boss"));
          }
          if (e.poison && e.poison.t > 0 && re("alchemist", "n5"))
            for (const n of i.enemies)
              n.dead ||
                n === e ||
                Math.hypot(n.x - e.x, n.y - e.y) > 45 ||
                ((n.poison = { t: 3, dps: e.poison.dps }), (n.acid = Math.max(n.acid || 0, 3)));
          const r = ce[e.type],
            l = e.y - st(e);
          (fe(e.x, l - 10, "+" + (e.gold < 1 ? +e.gold.toFixed(2) : e.gold), "#ffc93c", r.boss ? 22 : 14),
            ot(e.x, l, r.boss ? 16 : 6),
            at(e.x, l, "#ffc93c", r.boss ? 30 : 5, r.boss ? 140 : 60, 2.5));
        }
      }
    }
    function Pl(e) {
      e *= (1 - 0.03 * me("g7")) * (1 - Math.min(0.5, 0.005 * ke("cshield")));
      const s = i.crystal;
      if (
        (e > 0 && (i.hit = 1),
        (s.hp -= e),
        (s.flash = 0.15),
        (i.shake = Math.max(i.shake, 2)),
        fe(we.x + (Math.random() - 0.5) * 30, we.y - 40, "-" + Math.round(e), "#ef5a3c", 13),
        s.hp <= 0)
      ) {
        if (ke("tear") && !i.revived) {
          ((i.revived = 1),
            (s.hp = Math.max(1, s.max * 0.01 * ke("tear"))),
            fe(we.x, we.y - 70, "Larme du dragon !", "#7fe8ff", 16),
            at(we.x, we.y - 30, "#7fe8ff", 24, 90, 3));
          return;
        }
        ((s.hp = 0), Ka(!1));
      }
    }
    function Cl(e) {
      for (i.time += e; i.queue.length && i.queue[0].at <= i.time; ) Ll(i.queue.shift());
      for (const t of i.enemies) {
        if (t.dead) continue;
        const r = ce[t.type];
        let l = r.sp * (t.spm || J[ne].speed) * (1 - 0.004 * ke("frostst"));
        if (
          (me("g7a") && Math.hypot(t.x - we.x, t.y - we.y) <= pt.range[i.crystal.lvl] && (l *= 1 - 0.04 * me("g7a")),
          t.slowT > 0 && ((t.slowT -= e), (l *= 1 - t.slowF)),
          r.regen && (t.hp = Math.min(t.max, t.hp + r.regen * Sa(i.wave) * e * 0.5)),
          (t.burn &&
            t.burn.t > 0 &&
            ((t.burn.t -= e), (ze = t.burn.src || null), lt(t, t.burn.dps * e * (1 + 0.01 * ke("ember")), "magic"), t.dead)) ||
            (t.poison &&
              t.poison.t > 0 &&
              ((t.poison.t -= e), (ze = t.poison.src || null), lt(t, t.poison.dps * e * (1 + 0.01 * ke("ember")), "magic"), t.dead)))
        )
          continue;
        if (
          (t.acid > 0 && (t.acid -= e),
          t.weak > 0 && (t.weak -= e),
          t.trail > 0 &&
            ((t.trail -= e),
            (t.trT = (t.trT || 0) - e),
            t.trT <= 0 && ((t.trT = 0.3), i.zones.push({ x: t.x, y: t.y, r: 13, t: 1.6, dps: 0, kind: "slow", sf: 0.3 }))),
          t.curse > 0 && (t.curse -= e),
          t.stun > 0)
        ) {
          ((t.stun -= e), t.stun <= 0 && (t.frozen = !1), (t.vx = 0), (t.vy = 0));
          continue;
        }
        if (t.wall) {
          const d = t.wall;
          if (d.gone || d.hp <= 0 || d.t <= 0) t.wall = null;
          else {
            ((t.vx = 0),
              (t.vy = 0),
              (t.wAtk = (t.wAtk || 0) - e * (t.slowT > 0 ? 1 - t.slowF : 1)),
              t.wAtk <= 0 && ((t.wAtk = 1), (d.hp -= t.atk * 10 * (t.weak > 0 ? 0.6 : 1)), (d.flash = 0.12)));
            continue;
          }
        }
        const n = t.x,
          o = t.y;
        if (t.state === "atk") {
          if (((t.atkT -= e * (t.slowT > 0 ? 1 - t.slowF : 1)), t.atkT <= 0 && ((t.atkT = 1), Pl(t.atk * (t.weak > 0 ? 0.6 : 1)), i.over)))
            return;
          t.rem = 0;
        } else if (Ve[t.cc] === 0) ((t.state = "atk"), (t.atkT = 0.5), (t.rem = 0));
        else if (((t.tc < 0 || !Dt(t.tc)) && (t.tc = Ta(t.cc)), t.tc >= 0)) {
          const d = oe(t.tc),
            u = ae(t.tc),
            h = d - t.x,
            c = u - t.y,
            p = Math.hypot(h, c),
            y = l * e;
          (p <= y
            ? ((t.x = d),
              (t.y = u),
              (t.cc = t.tc),
              (t.tc = Ve[t.cc] === 0 ? -1 : Ta(t.cc)),
              Ve[t.cc] === 0 && ((t.state = "atk"), (t.atkT = 0.5)))
            : ((t.x += (h / p) * y), (t.y += (c / p) * y)),
            (t.rem = (t.tc >= 0 ? Ve[t.tc] * $ : 0) + p));
        }
        ((t.vx = (t.x - n) / Math.max(e, 1e-4)),
          (t.vy = (t.y - o) / Math.max(e, 1e-4)),
          (t.curSp = l),
          Math.abs(t.vx) > l * 0.3 && (t.face = t.vx > 0 ? 1 : -1),
          t.state === "atk" && (t.face = we.x >= t.x ? 1 : -1));
      }
      ((ze = null), (i.enemies = i.enemies.filter((t) => !t.dead)));
      const s = i.enemies.length > 0 || i.queue.length > 0,
        a = i.crystal;
      if (
        ((a.cd -= e),
        s && ke("vial") && a.hp > 0 && (a.hp = Math.min(a.max, a.hp + a.max * 5e-4 * ke("vial") * e)),
        s && me("g5a") && a.hp > 0 && (a.hp = Math.min(a.max, a.hp + 0.25 * me("g5a") * e)),
        (a.flash = Math.max(0, a.flash - e)),
        a.cd <= 0)
      ) {
        let t = null,
          r = pt.range[a.lvl] * (1 + 0.03 * me("g5b"));
        for (const l of i.enemies) {
          const n = Math.hypot(l.x - we.x, l.y - we.y);
          n <= r && ((r = n), (t = l));
        }
        t &&
          ((a.cd = pt.rate[a.lvl]),
          i.proj.push({
            k: "crystal",
            x: we.x,
            y: we.y - 46,
            target: t,
            tx: t.x,
            ty: t.y,
            speed: 320,
            dmg: pt.dmg[a.lvl] * (1 + 0.02 * ke("crycore") + 0.08 * me("g5b")),
          }));
      }
      for (const t in i.towers) {
        const r = i.towers[t],
          l = be[r.type],
          n = oe(+t),
          o = ae(+t),
          d = r.lvl,
          u = Gs(r.type, d, +t, r.spec);
        (i.crystal.hp < i.crystal.max * 0.4 && (u.dmg *= 1 + 0.06 * me("g7b")),
          (r.cd -= e * (i.buffT > 0 ? 1.5 + 0.005 * ke("warhorn") : 1)),
          (r.anim = Math.max(0, (r.anim || 0) - e * 3)));
        const h = [];
        for (const c of i.enemies) (ce[c.type].fly && !l.air) || (Math.hypot(c.x - n, c.y - o) <= u.range && h.push(c));
        if (Ke(r, "frost", 1) && ((r.pulse = (r.pulse || 0) - e), r.pulse <= 0 && h.length)) {
          r.pulse = 6;
          for (const c of h) (ss(c, 1), (c.frozen = !0));
          for (let c = 0; c < 18; c++) {
            const p = (c / 18) * Math.PI * 2;
            i.parts.push({
              x: n + Math.cos(p) * 12,
              y: o + Math.sin(p) * 8,
              vx: Math.cos(p) * u.range * 1.6,
              vy: Math.sin(p) * u.range * 1.1,
              life: 0.5,
              max: 0.5,
              col: "#bfe9ff",
              size: 4,
              puff: !0,
            });
          }
        }
        if (Ke(r, "storm", 1)) {
          if (h.length && r.cd <= 0) {
            ((r.cd = u.rate), (r.anim = 1), (ze = r));
            for (const c of h)
              (lt(c, u.dmg, "magic"), i.bolts.push({ a: { x: n, y: o - 30 }, b: { x: c.x, y: c.y - st(c) }, t: 0.12, c: "#9ff3ff" }));
            ze = null;
          }
          continue;
        }
        if (h.length) {
          h.sort((p, y) => (r.mode === "strong" ? y.hp - p.hp : p.rem - y.rem));
          let c = h[0];
          if (
            (Ke(r, "mage", 2) && r.ft && !r.ft.dead && h.includes(r.ft) && (c = r.ft), (r.ang = Math.atan2(c.y - o, c.x - n)), r.cd <= 0)
          ) {
            ((r.cd = u.rate), (r.anim = 1));
            const p = o + 4 - il[r.type] * yn,
              y = Math.random() < 0.005 * ke("eye") + 0.02 * me("g1a") ? 2 : 1;
            if (r.type === "storm") ((ze = r), ql(n, p, h, Object.assign({}, u, { dmg: u.dmg * y })), (ze = null));
            else if (r.type === "catapult") {
              const b = c.x + c.vx * 0.85,
                w = c.y + c.vy * 0.85;
              if (Ke(r, "catapult", 2))
                for (let T = 0; T < 3; T++) {
                  const M = T * 2.09 + Math.random(),
                    C = T ? 28 : 0;
                  i.proj.push({
                    k: "rock",
                    src: r,
                    sx: n,
                    sy: p,
                    tx: b + Math.cos(M) * C,
                    ty: w + Math.sin(M) * C,
                    t: 0,
                    dur: 0.85 + T * 0.12,
                    dmg: u.dmg * y * 0.45,
                    splash: u.splash * 0.8,
                  });
                }
              else i.proj.push({ k: "rock", src: r, sx: n, sy: p, tx: b, ty: w, t: 0, dur: 0.85, dmg: u.dmg * y, splash: u.splash });
            } else {
              let b = r.type === "archer" && re("archer", "n5") ? h.slice(0, 2) : [c];
              if (Ke(r, "archer", 1) && ((r.ct = (r.ct || 0) + 1), r.ct % 4 === 0)) {
                const T = h.slice();
                for (let M = T.length - 1; M > 0; M--) {
                  const C = (Math.random() * (M + 1)) | 0;
                  [T[M], T[C]] = [T[C], T[M]];
                }
                for (let M = 0; M < 4; M++) b.push(T[M % T.length]);
              }
              let w = 1;
              Ke(r, "mage", 2) &&
                (r.ft === c ? (r.stack = Math.min(10, (r.stack || 0) + 1)) : ((r.ft = c), (r.stack = 0)), (w = 1 + 0.1 * r.stack));
              for (const T of b) {
                let M = 1;
                (Ke(r, "archer", 2) && ((T.amb = T.amb || new Set()), T.amb.has(r) || (T.amb.add(r), (M = 3))),
                  i.proj.push({
                    k: r.type,
                    src: r,
                    amb: M > 1,
                    x: n,
                    y: p,
                    sx0: n,
                    sy0: o,
                    target: T,
                    tx: T.x,
                    ty: T.y,
                    speed: { archer: 430, mage: 260, ballista: 620, alchemist: 230 }[r.type] || 300,
                    dmg: u.dmg * y * w * M,
                    lvl: d,
                    slow: u.slow,
                    slowDur: u.slowDur,
                    splash: u.splash,
                  }));
              }
            }
          }
        }
      }
      for (const t of i.proj) {
        if (((ze = t.src || null), t.k === "roll")) {
          const d = t.cells[t.i],
            u = oe(d),
            h = ae(d),
            c = u - t.x,
            p = h - t.y,
            y = Math.hypot(c, p),
            b = 110 * e;
          ((t.rot += e * 9),
            y <= b
              ? ((t.x = u), (t.y = h), t.i++, t.i >= t.cells.length && ((t.done = !0), ot(t.x, t.y, 6)))
              : ((t.x += (c / y) * b), (t.y += (p / y) * b)));
          for (const w of i.enemies)
            w.dead ||
              t.hit.has(w) ||
              ce[w.type].fly ||
              (Math.hypot(w.x - t.x, w.y - t.y) <= 15 && (t.hit.add(w), lt(w, t.dmg, "phys"), ot(w.x, w.y, 3)));
          continue;
        }
        if (t.k === "rock") {
          if (((t.t += e), t.t >= t.dur)) {
            t.done = !0;
            const d = (u, h, c, p) => {
              for (const y of i.enemies)
                ce[y.type].fly ||
                  (Math.hypot(y.x - u, y.y - h) <= c &&
                    (lt(y, p, "phys"), !y.dead && Math.random() < 0.08 * re("catapult", "n4") && ss(y, 1)));
            };
            if ((d(t.tx, t.ty, t.splash, t.dmg), Cs(t.tx, t.ty, t.splash, "crater", 1.8), re("catapult", "n5")))
              for (let u = 0; u < 3; u++) {
                const h = u * 2.09 + Math.random(),
                  c = t.tx + Math.cos(h) * t.splash * 0.75,
                  p = t.ty + Math.sin(h) * t.splash * 0.75;
                (d(c, p, 22, t.dmg * 0.35), ot(c, p, 3));
              }
            if (
              (re("catapult", "n6") && i.zones.push({ x: t.tx, y: t.ty, r: t.splash * 0.8, t: 3, dps: t.dmg * 0.25, src: t.src }),
              Ke(t.src, "catapult", 1))
            ) {
              let u = tt(Math.max(0, Math.min(Re - 1, Math.floor(t.tx / $))), Math.max(0, Math.min(et - 1, Math.floor(t.ty / $))));
              if (!(Dt(u) && Ve[u] > 0 && Ve[u] < 1e8)) {
                let h = 1e9;
                const c = u;
                for (let p = -1; p <= 1; p++)
                  for (let y = -1; y <= 1; y++) {
                    const b = Pe(c) + y,
                      w = Ce(c) + p;
                    if (b < 0 || w < 0 || b >= Re || w >= et) continue;
                    const T = tt(b, w);
                    if (!(Dt(T) && Ve[T] > 0 && Ve[T] < 1e8)) continue;
                    const M = Math.hypot(oe(T) - t.tx, ae(T) - t.ty);
                    M < h && ((h = M), (u = T));
                  }
              }
              if (Dt(u) && Ve[u] > 0 && Ve[u] < 1e8) {
                const h = [];
                for (let c = 0; c < 6; c++) {
                  const p = Pe(u),
                    y = Ce(u);
                  let b = -1;
                  for (const [w, T] of [
                    [1, 0],
                    [-1, 0],
                    [0, 1],
                    [0, -1],
                  ]) {
                    const M = p + w,
                      C = y + T;
                    if (M < 0 || C < 0 || M >= Re || C >= et) continue;
                    const V = tt(M, C);
                    if (Dt(V) && Ve[V] === Ve[u] + 1) {
                      b = V;
                      break;
                    }
                  }
                  if (b < 0) break;
                  (h.push(b), (u = b));
                }
                h.length &&
                  i.proj.push({ k: "roll", src: t.src, x: t.tx, y: t.ty, cells: h, i: 0, hit: new Set(), dmg: t.dmg * 0.6, rot: 0 });
              }
            }
            (ot(t.tx, t.ty, 8),
              at(t.tx, t.ty, "#c9a06a", 10, 70, 3),
              i.texts.push({ x: t.tx, y: t.ty - 8, txt: "BAM!", col: "#fff7e0", life: 0.6, size: 13 }),
              (i.shake = Math.max(i.shake, 1.5)));
          }
          continue;
        }
        t.target && !t.target.dead && ((t.tx = t.target.x), (t.ty = t.target.y - st(t.target) - 2));
        const r = t.tx - t.x,
          l = t.ty - t.y,
          n = Math.hypot(r, l),
          o = t.speed * e;
        if (n <= o + 4) {
          if (((t.done = !0), t.k === "alchemist")) {
            const d = be.alchemist;
            for (const u of i.enemies) {
              if (Math.hypot(u.x - t.tx, u.y - st(u) - t.ty) > t.splash + 8) continue;
              const h = t.dmg;
              if (Ke(t.src, "alchemist", 1)) {
                const c = u.poison && u.poison.t > 0 && u.poison.src === t.src,
                  p = c ? Math.min(3, (u.poison.stk || 1) + 1) : 1;
                u.poison = {
                  t: 4 + 1.5 * re("alchemist", "n3"),
                  dps: Math.max(h * p, u.poison && u.poison.t > 0 ? u.poison.dps : 0),
                  src: t.src,
                  stk: p,
                };
              } else
                u.poison = {
                  t: 4 + 1.5 * re("alchemist", "n3"),
                  dps: Math.max(h, u.poison && u.poison.t > 0 ? u.poison.dps : 0),
                  src: t.src,
                };
              ((u.acid = Math.max(u.acid || 0, 4)), Ke(t.src, "alchemist", 2) && (u.weak = 5));
            }
            (Cs(t.tx, t.ty, t.splash, "acid", 1.6),
              re("alchemist", "n6") &&
                i.zones.push({ x: t.tx, y: t.ty + fl(t), r: t.splash * 0.8, t: 3, dps: t.dmg * 0.6, kind: "poison", src: t.src }));
            for (let u = 0; u < 8; u++) {
              const h = Math.random() * 7;
              i.parts.push({
                x: t.tx,
                y: t.ty,
                vx: Math.cos(h) * 45,
                vy: Math.sin(h) * 30 - 20,
                life: 0.6,
                max: 0.6,
                col: u % 2 ? "#7ed957" : "#c8ff9a",
                size: 3 + Math.random() * 2,
                puff: !0,
              });
            }
          } else if (t.k === "frost") {
            for (const d of i.enemies)
              if (Math.hypot(d.x - t.tx, d.y - st(d) - t.ty) <= t.splash + 10) {
                if ((lt(d, t.dmg, "magic"), d.dead)) continue;
                const u = Math.min(0.85, t.slow * (1 + 0.005 * ke("chain"))) * (1 - (d.res || 0));
                ((d.slowT > 0 && d.slowF > u) || (d.slowF = u),
                  (d.slowT = Math.max(d.slowT, t.slowDur)),
                  d === t.target && re("frost", "n5") && Math.random() < 0.12 && (ss(d, 1.5), (d.frozen = !0)),
                  Ke(t.src, "frost", 2) && !ce[d.type].fly && (d.trail = 3));
              }
            (at(t.tx, t.ty, "#bfe9ff", 8, 40), Cs(t.tx, t.ty, t.splash, "ice", 1.3));
          } else if (t.target && !t.target.dead) {
            const d = t.target;
            let u = t.dmg,
              h = 0;
            if (
              (t.k === "archer" &&
                ((h = 0.15 * re("archer", "n3")),
                t.amb && fe(t.tx, t.ty - 10, "Embuscade !", "#ffb347", 11),
                Math.random() < 0.025 * re("archer", "n4") && ((u *= 2), fe(t.tx, t.ty - 8, "CRIT!", "#ffe066", 11))),
              t.k === "ballista" &&
                ((h = Ke(t.src, "ballista", 2) ? 0 : be.ballista.pen + 0.15 * re("ballista", "n3")),
                ce[d.type].boss && (u *= 1 + 0.2 * re("ballista", "n4")),
                re("ballista", "n6") && ss(d, 0.8),
                re("ballista", "n5")))
            ) {
              const c = Math.atan2(d.y - t.sy0, d.x - t.sx0);
              let p = 0;
              for (const y of i.enemies) {
                if (y === d || y.dead || p >= 2) continue;
                const b = y.x - d.x,
                  w = y.y - d.y,
                  T = b * Math.cos(c) + w * Math.sin(c),
                  M = Math.abs(-b * Math.sin(c) + w * Math.cos(c));
                T > 0 && T < 90 && M < 14 && (lt(y, u * 0.6, "phys", h), p++);
              }
            }
            if (
              (t.k === "mage" && Math.random() < 0.1 * re("mage", "n3") && ((u *= 2), fe(t.tx, t.ty - 8, "\xD72", "#d6b3ff", 12)),
              lt(d, u, t.k === "crystal" ? "magic" : be[t.k].kind, h),
              t.k === "ballista" &&
                (Ke(t.src, "ballista", 1) &&
                  !d.dead &&
                  !ce[d.type].boss &&
                  d.hp < d.max * 0.08 &&
                  (fe(t.tx, t.ty - 10, "Ex\xE9cut\xE9 !", "#ff7a5c", 12), lt(d, d.hp * 1e3 + 1e6, "phys", 1)),
                Ke(t.src, "ballista", 2)))
            ) {
              for (const c of i.enemies) c === d || c.dead || Math.hypot(c.x - t.tx, c.y - st(c) - t.ty) > 36 || lt(c, u * 0.5, "phys", 0);
              (ot(t.tx, t.ty, 6), at(t.tx, t.ty, "#ffb347", 10, 70, 3));
            }
            if (t.k === "mage" && Ke(t.src, "mage", 1) && !d.dead && !ce[d.type].boss && Math.random() < 0.05) {
              const c = Object.keys(ut),
                p = ut[c[(Math.random() * c.length) | 0]],
                y = p[(Math.random() * p.length) | 0];
              (at(d.x, d.y, "#d6b3ff", 12, 70, 3),
                (d.x = oe(y)),
                (d.y = ae(y)),
                (d.cc = y),
                (d.tc = -1),
                (d.state = "walk"),
                at(d.x, d.y, "#d6b3ff", 12, 70, 3),
                fe(d.x, d.y - 14, "Pouf !", "#d6b3ff", 12));
            }
            if (t.k === "archer" && re("archer", "n6") && !d.dead) {
              const c = t.dmg * 0.3;
              !d.burn || d.burn.t <= 0 || d.burn.dps < c ? (d.burn = { t: 3, dps: c, src: t.src }) : (d.burn.t = 3);
            }
            if (t.k === "mage") {
              if ((re("mage", "n6") && !d.dead && (d.curse = 3), re("mage", "n5"))) {
                let c = { x: t.tx, y: t.ty };
                const p = new Set([d]);
                for (let y = 0; y < 2; y++) {
                  let b = null,
                    w = 70;
                  for (const M of i.enemies) {
                    if (M.dead || p.has(M)) continue;
                    const C = Math.hypot(M.x - c.x, M.y - st(M) - c.y);
                    C < w && ((w = C), (b = M));
                  }
                  if (!b) break;
                  p.add(b);
                  const T = { x: b.x, y: b.y - st(b) };
                  (i.bolts.push({ a: c, b: T, t: 0.2 }), lt(b, t.dmg * 0.6, "magic"), (c = T));
                }
              }
              (at(t.tx, t.ty, "#d6b3ff", 6, 50), Cs(t.tx, t.ty, 16, "arcane", 0.5));
            }
            t.k === "crystal" && at(t.tx, t.ty, "#8ff5e3", 7, 55);
          }
        } else ((t.x += (r / n) * o), (t.y += (l / n) * o), (t.ang = Math.atan2(l, r)));
      }
      ((ze = null), (i.proj = i.proj.filter((t) => !t.done)));
      for (const t of i.parts)
        ((t.life -= e), (t.x += t.vx * e), (t.y += t.vy * e), (t.vx *= 0.92), (t.vy = t.vy * 0.92 + (t.puff ? 0 : 60 * e)));
      i.parts = i.parts.filter((t) => t.life > 0);
      for (const t of i.texts) ((t.life -= e * 0.9), (t.y -= 20 * e));
      if (
        ((i.texts = i.texts.filter((t) => t.life > 0)),
        i.power.cd > 0 && s && (i.power.cd = Math.max(0, i.power.cd - e)),
        i.coop && i.p2.power.cd > 0 && s && (i.p2.power.cd = Math.max(0, i.p2.power.cd - e)),
        i.buffT > 0 && (i.buffT -= e),
        i.tint && ((i.tint.t -= e), i.tint.t <= 0 && (i.tint = null)),
        i.walls)
      ) {
        for (const t of i.walls) {
          if (((t.t -= e), (t.flash = Math.max(0, t.flash - e)), t.hp > 0 && t.t > 0))
            for (const r of i.enemies) !r.dead && !r.wall && Math.hypot(r.x - t.x, r.y - t.y) <= t.r && (r.wall = t);
          (t.hp <= 0 || t.t <= 0) && !t.gone && ((t.gone = !0), ot(t.x, t.y, 12), at(t.x, t.y, "#c9a06a", 14, 70, 3));
        }
        i.walls = i.walls.filter((t) => !t.gone);
      }
      if (
        (m.autoWave &&
          !Le &&
          i.started &&
          i.wave > 0 &&
          !i.over &&
          i.wave < i.waves.length &&
          (s
            ? (i.autoWaveT = null)
            : ((i.autoWaveT = (i.autoWaveT == null ? Na() : i.autoWaveT) - e),
              i.autoWaveT <= 0 && ((i.autoWaveT = null), En(), (ve = ""), Ge(!0)))),
        m.autoPower && i.started && !i.over && i.power.cd <= 0 && s && ((i.autoT = (i.autoT || 0) - e), i.autoT <= 0))
      ) {
        i.autoT = 0.3;
        const t = Et(),
          r = i.enemies.filter((c) => !c.dead);
        let l = null;
        for (const c of r) ce[c.type].boss && (!l || ce[c.type].hp > ce[l.type].hp) && (l = c);
        const n = He[t].r || Ba,
          o = r;
        let d = 0,
          u = 0,
          h = 0;
        for (const c of o) {
          let p = 0;
          for (const y of o) Math.hypot(y.x - c.x, y.y - c.y) <= n && p++;
          p > h && ((h = p), (d = c.x), (u = c.y));
        }
        if (((i.power.armed = !1), t === "souffle")) (h >= 4 || l) && fs(t, h >= 4 ? d : l.x, h >= 4 ? u : l.y);
        else if (t === "mur") {
          let c = null;
          for (const p of r) (!p.r0 && p.rem < 999 && (p.r0 = p.rem), !p.wall && p.r0 && (!c || p.rem < c.rem) && (c = p));
          c && (r.length >= 3 || l) && c.rem < c.r0 * 0.6 && fs(t, c.x, c.y);
        } else
          t === "gel"
            ? (r.length >= 6 || l) && fs(t)
            : t === "foudre"
              ? (r.length >= 3 || l) && fs(t)
              : t === "renfort" && (r.length >= 6 || l) && !(i.buffT > 0) && fs(t);
      }
      (i.sweep && ((i.sweep.t += e), i.sweep.t > 1.2 && (i.sweep = null)),
        i.flash && ((i.flash.t -= e), i.flash.t <= 0 && (i.flash = null)));
      for (const t of i.zones) {
        t.t -= e;
        for (const r of i.enemies)
          if (!((ce[r.type].fly && t.kind !== "poison") || Math.hypot(r.x - t.x, r.y - t.y) > t.r))
            if (t.kind === "slow") {
              const l = (t.sf || 0.4) * (1 - (r.res || 0));
              ((r.slowT > 0 && r.slowF > l) || (r.slowF = l), (r.slowT = Math.max(r.slowT, 0.3)));
            } else
              t.kind === "poison"
                ? ((!r.poison || r.poison.t < 0.6) && (r.poison = { t: 0.8, dps: t.dps, src: t.src }),
                  (r.acid = Math.max(r.acid || 0, 0.8)))
                : (!r.burn || r.burn.t <= 0 || r.burn.dps <= t.dps) && (r.burn = { t: 0.6, dps: t.dps, src: t.src });
      }
      if (((i.zones = i.zones.filter((t) => t.t > 0)), i.decals)) {
        for (const t of i.decals) t.t -= e;
        i.decals = i.decals.filter((t) => t.t > 0);
      }
      for (const t of i.bolts) t.t -= e;
      ((i.bolts = i.bolts.filter((t) => t.t > 0)), (i.shake = Math.max(0, i.shake - e * 20)));
      for (let t = 1; t <= i.wave; t++)
        if (
          !i.done[t] &&
          !(i.queue.some((r) => r.lw === t) || i.enemies.some((r) => r.lw === t)) &&
          ((i.done[t] = !0), i.over || (Ue("wave"), i.endless && Ue("ewave")), t < i.waves.length && !i.over)
        ) {
          const r = i.endless ? 1 : J[ne].blocks;
          if ((Aa(r), i.coop)) {
            for (let l = 0; l < r; l++) i.p2.hand.push(go());
            i.p2.hv++;
          }
          fe(de / 2, 92, "Vague " + t + " finie : +" + r + " bloc" + (r > 1 ? "s" : ""), "#f3d08c", 15);
        }
      if (i.wave > (i.estart || 0) && !i.cleared[i.wave] && !i.queue.length && !i.enemies.length && !i.over) {
        i.cleared[i.wave] = !0;
        const t = Math.round((6 + 2 * i.wave) * (i.endless ? 0.55 : 1) * Tn() * (Mn() ? 0.8 : 1) * mo());
        ((i.gold += t),
          i.coop && (i.p2.gold += t),
          i.wave >= i.waves.length
            ? Ka(!0)
            : (os("Vague " + i.wave + " repouss\xE9e ! +" + t),
              (ve = ""),
              i.endless && (Qo(), i.wave % (Xe() ? 25 : 50) === 0 && ((i.paused = !0), setTimeout(hi, 700)))));
      }
    }
    function ql(e, s, a, t) {
      const r = 3 + re("storm", "n3"),
        l = Math.random() < 0.2 * re("storm", "n5") ? 2 : 1;
      for (let n = 0; n < l; n++) {
        let o = a[n] || a[0],
          d = { x: e, y: s },
          u = t.dmg;
        const h = new Set();
        for (let c = 0; c < r && o; c++) {
          h.add(o);
          const p = { x: o.x, y: o.y - st(o) };
          (i.bolts.push({ a: d, b: p, t: 0.22, c: "#9ff3ff" }),
            lt(o, u * (re("storm", "n6") && ce[o.type].fly ? 1.5 : 1), "magic"),
            !o.dead && Math.random() < 0.06 * re("storm", "n4") && ss(o, 0.4),
            at(p.x, p.y, "#bff6ff", 4, 45, 2),
            Cs(o.x, o.y, 12, "spark", 0.45),
            (d = p),
            (u *= 0.85));
          let y = null,
            b = 75;
          for (const w of i.enemies) {
            if (w.dead || h.has(w)) continue;
            const T = Math.hypot(w.x - d.x, w.y - st(w) - d.y);
            T < b && ((b = T), (y = w));
          }
          o = y;
        }
      }
    }
    const yo = 40,
      Ba = 58,
      He = {
        souffle: {
          name: "Souffle",
          full: "Souffle du dragon",
          cd: 40,
          aim: !0,
          r: 58,
          desc: "Br\xFBle les monstres dans la zone : d\xE9g\xE2ts magiques et br\xFBlure 3 s.",
          ico: '<path fill="#ffe066" stroke="#2f1d12" stroke-width="1.8" stroke-linejoin="round" d="M12 2c1 4 5.5 5.5 5.5 11.5a5.5 5.5 0 0 1-11 0c0-2.7 1.3-4.3 2.6-5.6.2 1.8 1 2.9 2.2 3.4C10.8 8.5 11.2 5 12 2z"/><path fill="#fff" d="M12 12.5c1.2 1.4 2 2.3 2 3.5a2 2 0 0 1-4 0c0-1.2.9-2.1 2-3.5z"/>',
        },
        gel: {
          name: "Gel",
          full: "Gel",
          cd: 50,
          aim: !1,
          desc: "G\xE8le tous les monstres sur la carte.",
          ico: '<g stroke="#2f1d12" stroke-width="3.4" stroke-linecap="round"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7"/></g><g stroke="#bfe9ff" stroke-width="1.8" stroke-linecap="round"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7"/></g>',
        },
        foudre: {
          name: "Foudre",
          full: "Foudre divine",
          cd: 45,
          aim: !1,
          desc: "Frappe les 6 monstres les plus costauds : gros d\xE9g\xE2ts magiques et \xE9tourdissement 1 s.",
          ico: '<path fill="#ffe066" stroke="#2f1d12" stroke-width="1.8" stroke-linejoin="round" d="M13.5 2L5 13.5h5.5L9 22l9.5-12H13z"/>',
        },
        mur: {
          name: "Mur",
          full: "Mur de pierre",
          cd: 60,
          aim: !0,
          r: 40,
          desc: "Dresse un mur de pierre pendant 8 s : les monstres, volants ou non, doivent le d\xE9truire pour avancer.",
          ico: '<g stroke="#2f1d12" stroke-width="1.8" stroke-linejoin="round"><rect x="2" y="4" width="9" height="6" rx="1.5" fill="#c9a06a"/><rect x="13" y="4" width="9" height="6" rx="1.5" fill="#b7835a"/><rect x="6" y="12" width="9" height="6" rx="1.5" fill="#b7835a"/><rect x="17" y="12" width="5" height="6" rx="1.5" fill="#c9a06a"/><rect x="2" y="12" width="3" height="6" rx="1.2" fill="#c9a06a"/></g>',
        },
        renfort: {
          name: "Renfort",
          full: "Renfort",
          cd: 75,
          aim: !1,
          desc: "Toutes les tours tirent 50 % plus vite pendant quelques secondes.",
          ico: '<path fill="#6cc04a" stroke="#2f1d12" stroke-width="1.8" stroke-linejoin="round" d="M12 2l8 9h-5v10H9V11H4z"/>',
        },
      },
      jn = ["souffle", "gel", "foudre", "mur", "renfort"],
      Zs = { gel: 0, foudre: 1, mur: 2, renfort: 3 },
      Da = (e) => !(e in Zs) || m.prog[ue[Zs[e]].id].facile >= ue[Zs[e]].levels.length,
      Et = () => (Da(m.spell) && He[m.spell] ? m.spell : "souffle"),
      jt = 5,
      Js = () => (Xe() ? Math.min(2, m.deckIdx || 0) : 0);
    function ls() {
      const e = Qe.filter(ct),
        s = (m.decks || [])[Js()];
      let a = Array.isArray(s) ? s.filter((t) => e.includes(t)) : null;
      if (!a || !a.length) return e.slice(0, jt);
      for (const t of e) !(m.deckSeen || []).includes(t) && a.length < jt && !a.includes(t) && a.push(t);
      return Qe.filter((t) => a.includes(t)).slice(0, jt);
    }
    const ko = () => (i && i.deck ? Qe.filter((e) => i.deck.includes(e)) : Qe);
    let is = !1;
    try {
      is = localStorage.getItem("bdd-deckfold") === "1";
    } catch {}
    const wo = (e) => {
        const s = ls(),
          a = Xe(),
          t = Js();
        return `${e ? `<button class="qh dkhead${is ? " fold" : ""}" data-act2="deckfold" aria-expanded="${!is}">Deck de tours \xB7 <span id="deckCnt">${s.length}/${jt}</span><svg class="chev" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>` : `<h3 class="qh">Deck de tours \xB7 <span id="deckCnt">${s.length}/${jt}</span></h3>`}<div class="dkbody"${e && is ? " hidden" : ""}><div class="seg small decks">${[0, 1, 2].map((r) => `<button class="${r === t ? "on" : ""}" data-act2="deckslot" data-i="${r}" ${r > 0 && !a ? 'disabled title="R\xE9serv\xE9 \xE0 Bastion+"' : ""}>${r > 0 && !a ? "\u2605 " : ""}Deck ${r + 1}</button>`).join("")}</div><div class="deck" id="deckBox">${Qe.map((r) => (ct(r) ? `<button class="dk${s.includes(r) ? " on" : ""}" data-act2="deck" data-id="${r}" aria-label="${be[r].name}"><canvas data-mini="${r}" data-lvl="0" width="64" height="64"></canvas><span>${be[r].short}</span></button>` : `<button class="dk" disabled title="${ro(r)}">${gt}<span>${be[r].short}</span></button>`)).join("")}</div><p class="note" id="deckNote"></p>${e ? Ea() : ""}</div>`;
      },
      xo = (e) => `<div id="deckWrap"${e ? ' data-fo="1"' : ""}>${wo(!!e)}</div>`;
    function Al(e) {
      const s = Qe.filter(ct);
      if (!s.includes(e)) return;
      let a = ls(),
        t = "";
      (a.includes(e)
        ? a.length <= 1
          ? (t = "Il faut au moins une tour dans le deck.")
          : (a = a.filter((o) => o !== e))
        : a.length >= jt
          ? (t = `Deck plein (${jt}/${jt}) : retire une tour avant d'en ajouter une.`)
          : a.push(e),
        (m.decks = m.decks || [null, null, null]),
        (m.decks[Js()] = Qe.filter((o) => a.includes(o))),
        (m.deckSeen = s),
        he());
      const r = Y("#deckBox");
      r && r.querySelectorAll(".dk[data-id]").forEach((o) => o.classList.toggle("on", m.decks[Js()].includes(o.dataset.id)));
      const l = Y("#deckCnt");
      l && (l.textContent = m.decks[Js()].length + "/" + jt);
      const n = Y("#deckNote");
      n && ((n.textContent = t || ""), (n.style.color = t ? "var(--red)" : ""));
    }
    const Ea = () => {
        const e = Et();
        return `<h3 class="qh">Sort pour ce combat</h3><div class="estart spells">${jn
          .map((s) => {
            const a = He[s];
            return Da(s)
              ? `<button class="tab spl${s === e ? " on" : ""}" data-act2="spell" data-id="${s}" aria-label="${a.full}"><svg viewBox="0 0 24 24" width="22" height="22">${a.ico}</svg><span>${a.name}</span></button>`
              : `<button class="tab spl" disabled title="Battre le boss du biome ${Zs[s] + 1}">${gt}<span>${a.name}</span></button>`;
          })
          .join(
            "",
          )}</div><p class="note" id="spellDesc"><b>${He[e].full}</b> \xB7 rang ${Tt(e)} \xB7 recharge ${He[e].cd} s. ${He[e].desc} ${ds[e].lab} : <b>${Bs(e)}</b>.</p>`;
      },
      Rs = 50,
      Tt = (e) => Math.min(Rs, (m.spellRanks && m.spellRanks[e]) || 1),
      ea = (e) => Math.round((20 + 0.6 * e * e) / 5) * 5,
      To = (e) => {
        let s = 0;
        for (let a = 1; a < Tt(e); a++) s += ea(a);
        return s;
      },
      ta = (e) => Math.min(5, Math.floor(Tt(e) / 10) + 1),
      Wn = (e) => String(Math.round(e * 100) / 100).replace(".", ","),
      Mo = (e) => "+" + Math.round((e - 1) * 100) + " %",
      ds = {
        souffle: { lab: "D\xE9g\xE2ts et br\xFBlure", v: (e) => 1 + 0.04 * (e - 1), t: Mo },
        gel: { lab: "Dur\xE9e du gel", v: (e) => 1.5 + 0.03 * (e - 1), t: (e) => Wn(e) + " s" },
        foudre: { lab: "D\xE9g\xE2ts", v: (e) => 1 + 0.04 * (e - 1), t: Mo },
        mur: { lab: "Points de vie du mur", v: (e) => 1 + 0.05 * (e - 1), t: Mo },
        renfort: { lab: "Dur\xE9e du renfort", v: (e) => 8 + 0.1 * (e - 1), t: (e) => Wn(e) + " s" },
      },
      us = (e) =>
        (1 + 0.01 * ke("grimoire")) *
        ({
          gel: 1 + 0.01 * ke("glacier"),
          foudre: 1 + 0.02 * ke("thunder"),
          mur: 1 + 0.02 * ke("masonry"),
          renfort: 1 + 0.01 * ke("rallystd"),
          souffle: 1,
        }[e] || 1),
      Vn = () => 1 - Math.min(0.6, 0.002 * ke("hourglass") + 0.003 * ke("grimoire") + 0.04 * me("g3b")),
      cs = (e, s = Tt(e)) => ds[e].v(s),
      Bs = (e, s = Tt(e)) => ds[e].t(ds[e].v(s)),
      Rl = () => He[Et()].r || Ba;
    function fs(e, s, a) {
      if (Se && Se.me === "guest") {
        (coopCmd({ c: "spell", id: e, x: s, y: a }), (i.power.armed = !1), (i.aim = null));
        return;
      }
      if (e === "souffle") {
        Bl(s, a);
        return;
      }
      const t = He[e];
      if (((i.aim = null), e === "gel")) {
        for (const r of i.enemies) r.dead || (ss(r, cs("gel") * us("gel")), (r.frozen = !0), at(r.x, r.y - st(r), "#bfe9ff", 6, 45));
        ((i.tint = { c: "rgba(120,200,255,1)", t: 0.9, max: 0.9 }), fe(de / 2, ge / 2 - 20, "GEL !", "#bfe9ff", 22));
      } else if (e === "foudre") {
        const r = (100 + 30 * i.wave) * (1 + 0.02 * ke("orb")) * cs("foudre") * us("foudre");
        ((ze = null),
          i.enemies
            .filter((n) => !n.dead)
            .sort((n, o) => o.hp - n.hp)
            .slice(0, 6)
            .forEach((n, o) => {
              (i.bolts.push({ a: { x: n.x + (o % 2 ? 18 : -18), y: -10 }, b: { x: n.x, y: n.y - st(n) }, t: 0.35, c: "#fff3a0" }),
                lt(n, r, "magic"),
                n.dead || ss(n, 1 * (1 + 0.005 * ke("stormhammer"))),
                at(n.x, n.y - st(n), "#fff3a0", 8, 60, 2),
                Cs(n.x, n.y, 16, "spark", 0.6));
            }),
          (i.tint = { c: "rgba(255,245,170,1)", t: 0.35, max: 0.35 }),
          (i.shake = 6),
          fe(de / 2, ge / 2 - 20, "FOUDRE !", "#ffe066", 22));
      } else if (e === "mur")
        ((i.walls = i.walls || []).push({
          x: s,
          y: a,
          r: t.r,
          t: 8 * (1 + 0.01 * ke("bulwark")),
          max: 8 * (1 + 0.01 * ke("bulwark")),
          hp: (600 + 100 * i.wave) * cs("mur") * us("mur"),
          hpMax: (600 + 100 * i.wave) * cs("mur") * us("mur"),
          flash: 0,
        }),
          ot(s, a, 10),
          fe(s, a - 24, "MUR !", "#e6d3b0", 18),
          (i.shake = 3));
      else if (e === "renfort") {
        ((i.buffT = cs("renfort") * us("renfort")), fe(de / 2, ge / 2 - 20, "RENFORT !", "#bff59a", 22));
        for (const r in i.towers) ot(oe(+r), ae(+r) - 10, 6);
      }
      (Ue("power"), (i.power.cd = t.cd * Vn()), (i.power.max = i.power.cd), (i.power.armed = !1));
    }
    function Bl(e, s) {
      i.aim = null;
      const a = (60 + 20 * i.wave) * (1 + 0.02 * ke("orb")) * cs("souffle") * us("souffle"),
        t = (8 + 2 * i.wave) * cs("souffle") * us("souffle");
      ze = null;
      for (const r of i.enemies) Math.hypot(r.x - e, r.y - s) <= Ba && (lt(r, a, "magic"), r.dead || (r.burn = { t: 3, dps: t }));
      for (let r = 0; r < 70; r++) {
        const l = Math.random() * 7,
          n = Math.random() * 55;
        i.parts.push({
          x: e + Math.cos(l) * n,
          y: s + Math.sin(l) * n,
          vx: (Math.random() - 0.5) * 30,
          vy: -30 - Math.random() * 40,
          life: 0.6 + Math.random() * 0.7,
          max: 1.3,
          col: ["#ffe066", "#ff9a3c", "#ef5a3c"][r % 3],
          size: 3 + Math.random() * 4,
          puff: !0,
        });
      }
      (i.texts.push({ x: e, y: s - 20, txt: "FWOOSH!", col: "#ffe066", life: 1, size: 20 }),
        Ue("power"),
        (i.sweep = { t: 0, y: s }),
        (i.shake = 8),
        (i.power.cd = yo * Vn()),
        (i.power.max = i.power.cd),
        (i.power.armed = !1));
    }
    function Fn(e, s, a, t = de, r = ge) {
      if ((a.tint && ((e.fillStyle = a.tint), e.fillRect(0, 0, t, r)), a.night || a.vig)) {
        const o = e.createRadialGradient(t / 2, r / 2, r * 0.3, t / 2, r / 2, r * 0.75);
        (o.addColorStop(0, "rgba(20,0,20,0)"), o.addColorStop(1, "rgba(20,0,20,.45)"), (e.fillStyle = o), e.fillRect(0, 0, t, r));
      }
      const l = a.amb;
      if (!l || l === "none") return;
      const n =
        l === "embers"
          ? a.night
            ? 34
            : 22
          : l === "smoke"
            ? 6
            : l === "fireflies"
              ? 16
              : l === "dust"
                ? 22
                : l === "spores"
                  ? 20
                  : l === "sand"
                    ? 26
                    : 18;
      for (let o = 0; o < n; o++) {
        const d = 12 + ((o * 37) % 23),
          u = o * 97.3;
        if (l === "smoke") {
          const y = ((u + s * 6) % (t + 80)) - 40,
            b = 40 + ((o * 61) % 5) * 30;
          ((e.fillStyle = "rgba(70,60,70,.12)"), A(e, y, b, 40, 14), e.fill());
          continue;
        }
        const h = l === "embers",
          c = ((((u + s * d * (l === "leaves" ? 0.9 : 0.35) + Math.sin(s + o) * 8) % (t + 20)) + t + 20) % (t + 20)) - 10,
          p =
            ((((o * 53.1 + (h ? -1 : 1) * s * d * (l === "ash" ? 0.6 : l === "petals" ? 0.7 : 1.1)) % (r + 20)) + r + 20) % (r + 20)) - 10;
        if (l === "embers")
          ((e.fillStyle = o % 3 ? "#ffb347" : "#ffe066"),
            (e.globalAlpha = 0.55 + 0.45 * Math.sin(s * 5 + o)),
            D(e, c, p, 1.4 + (o % 3) * 0.5),
            e.fill(),
            (e.globalAlpha = 1));
        else if (l === "ash") ((e.fillStyle = "rgba(230,225,220,.7)"), D(e, c, p, 1.3 + (o % 2)), e.fill());
        else if (l === "petals") ((e.fillStyle = o % 2 ? "#ffb3c8" : "#fff"), A(e, c, p, 2.6, 1.5, s * 2 + o), e.fill());
        else if (l === "dust") {
          const y = (o * 61.7 + s * 6 + Math.sin(s * 0.4 + o) * 20 + t) % t,
            b = (o * 89.3 + Math.cos(s * 0.3 + o) * 30 + s * 3 + r) % r;
          ((e.fillStyle = `rgba(255,250,230,${0.25 + 0.2 * Math.sin(s * 2 + o)})`), D(e, y, b, 1.6), e.fill());
        } else if (l === "spores") {
          const y = (o * 61.7 + Math.sin(s * 0.5 + o) * 20 + t) % t,
            b = (((o * 89.3 - s * 8) % r) + r) % r;
          ((e.fillStyle = `rgba(200,160,255,${0.35 + 0.3 * Math.sin(s * 2 + o)})`), D(e, y, b, 2), e.fill());
        } else if (l === "sand") {
          const y = ((o * 61.7 + s * 120) % (t + 60)) - 30,
            b = (o * 37.3) % r;
          ((e.strokeStyle = "rgba(255,230,180,.45)"),
            (e.lineWidth = 1.4),
            e.beginPath(),
            e.moveTo(y, b),
            e.lineTo(y + 18, b + 2),
            e.stroke());
        } else if (l === "fireflies") {
          const y = (o * 61.7 + Math.sin(s * 0.7 + o) * 30 + t) % t,
            b = (o * 89.3 + Math.cos(s * 0.5 + o * 1.3) * 25 + r) % r,
            w = e.createRadialGradient(y, b, 0, y, b, 6);
          (w.addColorStop(0, `rgba(230,255,130,${0.5 + 0.4 * Math.sin(s * 3 + o)})`),
            w.addColorStop(1, "rgba(230,255,130,0)"),
            (e.fillStyle = w),
            D(e, y, b, 6),
            e.fill());
        } else l === "leaves" && ((e.fillStyle = ["#e2873a", "#c9502b", "#e8b53a"][o % 3]), A(e, c, p, 3, 1.7, s * 3 + o), e.fill());
      }
    }
    function Dl(e) {
      const s = kt * Hs;
      (f.setTransform(1, 0, 0, 1, 0, 0),
        f.clearRect(0, 0, De.width, De.height),
        f.setTransform(s * Te, 0, 0, s * Te, -ft * s * Te, -wt * s * Te),
        f.save(),
        i.shake > 0 && !Rr && f.translate((Math.random() - 0.5) * i.shake, (Math.random() - 0.5) * i.shake),
        La && f.drawImage(La, 0, 0, de, ge));
      for (const n in ut)
        for (const o of ut[n]) {
          const d = oe(o),
            u = ae(o);
          (A(f, d, u, 12, 12), g(f, "#2b1747", 2.2), f.save(), f.translate(d, u));
          for (let h = 0; h < 3; h++)
            (f.rotate(e * 2 + h * 2.1),
              (f.strokeStyle = ["#c77dff", "#ff7ad9", "#7b5cff"][h]),
              (f.lineWidth = 2),
              f.beginPath(),
              f.arc(0, 0, 4 + h * 2.5, 0, 3.6),
              f.stroke());
          f.restore();
        }
      ((f.lineJoin = "round"), (f.lineCap = "round"));
      const a = i.blockMode && i.ghost && i.ghost.routes ? i.ghost.routes : null;
      a && (f.globalAlpha = 0.35);
      for (const n of Ts)
        (f.beginPath(),
          n.forEach((o, d) => (d ? f.lineTo(o[0], o[1]) : f.moveTo(o[0], o[1]))),
          (f.strokeStyle = "rgba(47,29,18,.18)"),
          (f.lineWidth = 6),
          f.stroke(),
          f.setLineDash([2, 9]),
          (f.lineDashOffset = -e * 25),
          (f.strokeStyle = "rgba(255,255,255,.85)"),
          (f.lineWidth = 3),
          f.stroke(),
          f.setLineDash([]));
      if (((f.globalAlpha = 1), a))
        for (const n of a)
          (f.beginPath(),
            n.forEach((o, d) => (d ? f.lineTo(o[0], o[1]) : f.moveTo(o[0], o[1]))),
            (f.strokeStyle = "rgba(47,29,18,.45)"),
            (f.lineWidth = 8),
            f.stroke(),
            f.setLineDash([5, 8]),
            (f.lineDashOffset = -e * 25),
            (f.strokeStyle = "#ffe066"),
            (f.lineWidth = 4),
            f.stroke(),
            f.setLineDash([]));
      for (let n = 0; n < Be; n++) Ee[n] && Ns(f, Pe(n) * $, Ce(n) * $);
      if (i.decals)
        for (const n of i.decals) {
          const o = Math.max(0, n.t / n.max),
            d = 1 - o;
          if ((f.save(), n.kind === "crater")) {
            ((f.globalAlpha = 0.5 * o),
              A(f, n.x, n.y, n.r * 0.75, n.r * 0.42),
              (f.fillStyle = "#4a3524"),
              f.fill(),
              (f.globalAlpha = 0.7 * o),
              A(f, n.x, n.y, n.r * 0.75, n.r * 0.42),
              (f.strokeStyle = "#8a6a45"),
              (f.lineWidth = 2.5),
              f.stroke());
            for (let u = 0; u < 6; u++) {
              const h = u * 1.05 + n.x;
              (f.beginPath(),
                f.moveTo(n.x + Math.cos(h) * n.r * 0.5, n.y + Math.sin(h) * n.r * 0.28),
                f.lineTo(n.x + Math.cos(h) * n.r * 0.95, n.y + Math.sin(h) * n.r * 0.55),
                f.stroke());
            }
          } else if (n.kind === "ice") {
            ((f.globalAlpha = 0.55 * o),
              A(f, n.x, n.y, n.r * (0.5 + 0.5 * d), n.r * (0.5 + 0.5 * d) * 0.55),
              (f.fillStyle = "#cfefff"),
              f.fill(),
              (f.globalAlpha = 0.9 * o),
              (f.strokeStyle = "#ffffff"),
              (f.lineWidth = 2.5),
              f.stroke());
            for (let u = 0; u < 5; u++) {
              const h = u * 1.26 + n.x,
                c = n.r * 0.55;
              (F(f, [
                [n.x + Math.cos(h) * c - 2, n.y + Math.sin(h) * c * 0.55],
                [n.x + Math.cos(h) * c + 2, n.y + Math.sin(h) * c * 0.55],
                [n.x + Math.cos(h) * c, n.y + Math.sin(h) * c * 0.55 - 7],
              ]),
                (f.fillStyle = "#e8f8ff"),
                f.fill());
            }
          } else if (n.kind === "acid") {
            ((f.globalAlpha = 0.5 * o),
              A(f, n.x, n.y, n.r * 0.9, n.r * 0.5),
              (f.fillStyle = "#7ed957"),
              f.fill(),
              (f.globalAlpha = 0.8 * o),
              (f.strokeStyle = "#3f8f2a"),
              (f.lineWidth = 2),
              f.stroke());
            for (let u = 0; u < 4; u++) {
              const h = u * 1.57 + 0.6;
              (D(f, n.x + Math.cos(h) * n.r * 0.45, n.y + Math.sin(h) * n.r * 0.25 - d * 8, 2.4), (f.fillStyle = "#c8ff9a"), f.fill());
            }
          } else
            n.kind === "arcane"
              ? ((f.globalAlpha = 0.8 * o),
                A(f, n.x, n.y, n.r * (0.4 + d), n.r * (0.4 + d) * 0.55),
                (f.strokeStyle = "#d6b3ff"),
                (f.lineWidth = 2.5),
                f.stroke())
              : ((f.globalAlpha = 0.8 * o),
                A(f, n.x, n.y + 4, n.r * (0.5 + d * 0.7), n.r * (0.5 + d * 0.7) * 0.5),
                (f.strokeStyle = "#bff6ff"),
                (f.lineWidth = 2),
                f.stroke());
          f.restore();
        }
      if (i.walls)
        for (const n of i.walls) {
          const o = Math.min(1, n.t / 1.2);
          (f.save(), (f.globalAlpha = o));
          for (let d = 0; d < 7; d++) {
            const u = (d / 7) * Math.PI * 2,
              h = n.x + Math.cos(u) * n.r * 0.62,
              c = n.y + Math.sin(u) * n.r * 0.34;
            (j(f, h - 9, c - 12, 18, 14, 3),
              (f.fillStyle = d % 2 ? "#b7835a" : "#c9a06a"),
              f.fill(),
              (f.strokeStyle = Q),
              (f.lineWidth = 2),
              f.stroke());
          }
          (f.setLineDash([5, 6]),
            (f.globalAlpha = o * 0.5),
            A(f, n.x, n.y, n.r, n.r * 0.55),
            (f.strokeStyle = "#e6d3b0"),
            (f.lineWidth = 2),
            f.stroke(),
            f.setLineDash([]),
            (f.globalAlpha = 1),
            n.flash > 0 &&
              ((f.globalAlpha = n.flash * 5), A(f, n.x, n.y, n.r * 0.7, n.r * 0.4), (f.fillStyle = "#fff"), f.fill(), (f.globalAlpha = 1)));
          {
            const d = Math.max(0, n.hp / n.hpMax);
            (j(f, n.x - 22, n.y - 30, 44, 7, 3.5),
              (f.fillStyle = Q),
              f.fill(),
              d > 0 &&
                (j(f, n.x - 20.5, n.y - 28.5, 41 * d, 4, 2),
                (f.fillStyle = d > 0.5 ? "#7ed957" : d > 0.25 ? "#ffc93c" : "#ef5a3c"),
                f.fill()));
          }
          f.restore();
        }
      for (const n of i.zones) {
        if (
          ((f.globalAlpha = Math.min(1, n.t) * 0.55),
          A(f, n.x, n.y, n.r, n.r * 0.6),
          (f.fillStyle = n.kind === "poison" ? "#7ed957" : n.kind === "slow" ? "#bfe9ff" : "#ff7a2f"),
          f.fill(),
          (f.globalAlpha = Math.min(1, n.t)),
          n.kind === "slow")
        ) {
          f.globalAlpha = 1;
          continue;
        }
        if (n.kind === "poison") {
          for (let o = 0; o < 5; o++) {
            const d = (e * 0.8 + o * 0.2) % 1;
            (D(f, n.x + Math.cos(o * 1.26) * n.r * 0.5, n.y + Math.sin(o * 1.26) * n.r * 0.3 - d * 10, 2 + d * 3),
              (f.fillStyle = "rgba(200,255,150," + (1 - d) + ")"),
              f.fill());
          }
          f.globalAlpha = 1;
          continue;
        }
        for (let o = 0; o < 5; o++) {
          const d = o * 1.26,
            u = n.x + Math.cos(d) * n.r * 0.5,
            h = n.y + Math.sin(d) * n.r * 0.3,
            c = 4 + Math.abs(Math.sin(e * 10 + o)) * 4;
          (F(f, [
            [u - 3, h],
            [u + 3, h],
            [u, h - c],
          ]),
            (f.fillStyle = o % 2 ? "#ffd23f" : "#ef5a3c"),
            f.fill());
        }
        f.globalAlpha = 1;
      }
      if (i.blockMode && i.bdel && i.delHover >= 0) {
        const n = Sl(i.delHover);
        if (n) {
          const o = new Set(n),
            d = 0.35 + 0.15 * Math.sin(e * 6);
          for (const u of n) {
            const h = Pe(u) * $,
              c = Ce(u) * $;
            ((f.fillStyle = `rgba(239,90,60,${d})`),
              f.fillRect(h, c, $, $),
              (f.strokeStyle = "#ef5a3c"),
              (f.lineWidth = 3),
              f.beginPath(),
              o.has(u - Re) || (f.moveTo(h, c), f.lineTo(h + $, c)),
              o.has(u + Re) || (f.moveTo(h, c + $), f.lineTo(h + $, c + $)),
              (Pe(u) === 0 || !o.has(u - 1)) && (f.moveTo(h, c), f.lineTo(h, c + $)),
              (Pe(u) === Re - 1 || !o.has(u + 1)) && (f.moveTo(h + $, c), f.lineTo(h + $, c + $)),
              f.stroke());
          }
        }
      }
      if (i.blockMode && i.ghost) {
        const n = i.ghost.res.ok;
        for (const [o, d] of i.ghost.cells)
          o < 0 ||
            d < 0 ||
            o >= Re ||
            d >= et ||
            ((f.globalAlpha = 0.75),
            Ns(f, o * $, d * $),
            (f.globalAlpha = 1),
            j(f, o * $ + 2, d * $ + 2, $ - 4, $ - 4, 5),
            (f.fillStyle = n ? "rgba(108,192,74,.35)" : "rgba(239,90,60,.45)"),
            f.fill(),
            (f.strokeStyle = n ? "#4fa83a" : "#ef5a3c"),
            (f.lineWidth = 2.5),
            f.stroke());
      }
      if (i.towerMode && i.tpick) {
        ((f.fillStyle = "rgba(126,217,87,.35)"), (f.strokeStyle = "rgba(47,120,30,.7)"), (f.lineWidth = 1.5));
        for (let o = 0; o < Be; o++) Ms(o) && !i.towers[o] && (D(f, oe(o), ae(o), 5), f.fill(), f.stroke());
        const n = i.hover;
        if (n >= 0 && n !== void 0 && Ms(n) && !i.towers[n]) {
          const o = Gs(i.tpick, 0, n).range;
          ((f.fillStyle = "rgba(255,255,255,.15)"),
            D(f, oe(n), ae(n), o),
            f.fill(),
            f.setLineDash([8, 6]),
            (f.strokeStyle = "#fff"),
            (f.lineWidth = 2.5),
            f.stroke(),
            f.setLineDash([]));
        }
      }
      if (i.flash) {
        const n = i.flash.i;
        ((f.fillStyle = `rgba(239,90,60,${i.flash.t})`),
          j(f, Pe(n) * $ + 2, Ce(n) * $ + 2, $ - 4, $ - 4, 5),
          f.fill(),
          (f.strokeStyle = Q),
          (f.lineWidth = 2),
          f.stroke());
      }
      if (i.sel) {
        const n = (o, d, u) => {
          ((f.fillStyle = "rgba(255,255,255,.15)"),
            D(f, o, d, u),
            f.fill(),
            f.setLineDash([8, 6]),
            (f.lineDashOffset = -e * 20),
            (f.strokeStyle = "#fff"),
            (f.lineWidth = 2.5),
            f.stroke(),
            f.setLineDash([]));
        };
        if (i.sel.kind === "crystal") n(we.x, we.y, pt.range[i.crystal.lvl] * (1 + 0.03 * me("g5b")));
        else {
          const o = i.sel.i,
            d = i.towers[o];
          (d && n(oe(o), ae(o), Gs(d.type, d.lvl, o, d.spec).range),
            j(f, Pe(o) * $ + 1, Ce(o) * $ + 1, $ - 2, $ - 2, 6),
            (f.strokeStyle = "#ffc93c"),
            (f.lineWidth = 3),
            f.stroke());
        }
      }
      const t = [{ y: we.y + 16, cr: !0 }];
      for (const n of i.enemies) ce[n.type].fly || t.push({ y: n.y + n.oy, e: n });
      for (const n in i.towers) t.push({ y: ae(+n) + 6, k: +n });
      t.sort((n, o) => n.y - o.y);
      for (const n of t)
        if (n.cr) Pa(f, e);
        else if (n.e) Ps(f, n.e, e);
        else {
          const o = i.towers[n.k];
          (i.buffT > 0 &&
            (f.save(),
            (f.globalAlpha = 0.45 + 0.25 * Math.sin(e * 8)),
            A(f, oe(n.k), ae(n.k) + 4, 22, 9),
            (f.strokeStyle = "#8bf06a"),
            (f.lineWidth = 3),
            f.stroke(),
            f.restore()),
            i.coop && coopMark(f, oe(n.k), ae(n.k) + 4, o.o),
            Ls(f, o.type, o.lvl, oe(n.k), ae(n.k) + 4, o.ang || 0, e, o.anim || 0, yn, o.spec || 0));
        }
      for (const n of i.proj) {
        if (n.k === "roll") {
          ((f.fillStyle = "rgba(30,70,20,.3)"),
            A(f, n.x, n.y + 6, 7, 3),
            f.fill(),
            f.save(),
            f.translate(n.x, n.y - 2),
            f.rotate(n.rot),
            D(f, 0, 0, 7),
            g(f, "#a7a7b8", 2),
            (f.strokeStyle = "rgba(47,29,18,.45)"),
            (f.lineWidth = 1.4),
            f.beginPath(),
            f.moveTo(-4, -1),
            f.lineTo(3, 2),
            f.moveTo(0, -5),
            f.lineTo(1, 0),
            f.stroke(),
            f.restore());
          continue;
        }
        if (n.k === "rock") {
          const o = n.t / n.dur,
            d = n.sx + (n.tx - n.sx) * o,
            u = n.sy + (n.ty - n.sy) * o,
            h = Math.sin(o * Math.PI) * 40;
          ((f.fillStyle = "rgba(30,70,20,.3)"),
            A(f, d, u + 18 * (1 - o), 4, 2),
            f.fill(),
            D(f, d, u - h, 4 + h / 25),
            g(f, "#a7a7b8", 2),
            rt(f, d - 1.5, u - h - 1.5, 1.8, 1.2, 0.8));
        } else if (n.k === "ballista")
          (f.save(),
            f.translate(n.x, n.y),
            f.rotate(n.ang || 0),
            (f.strokeStyle = Q),
            (f.lineWidth = 4.4),
            f.beginPath(),
            f.moveTo(-13, 0),
            f.lineTo(8, 0),
            f.stroke(),
            (f.strokeStyle = "#8a4f25"),
            (f.lineWidth = 2.4),
            f.stroke(),
            F(f, [
              [13, 0],
              [7, -4],
              [7, 4],
            ]),
            g(f, "#e0e4ee", 1.4),
            f.restore());
        else if (n.k === "alchemist")
          (f.save(),
            f.translate(n.x, n.y),
            f.rotate(e * 10),
            D(f, 0, 2, 5),
            g(f, "#7ed957", 1.6),
            j(f, -2, -6, 4, 5, 1),
            g(f, "#c9c2d4", 1.2),
            f.restore());
        else if (n.k === "archer")
          (f.save(),
            f.translate(n.x, n.y),
            f.rotate(n.ang || 0),
            (f.strokeStyle = Q),
            (f.lineWidth = 3.4),
            f.beginPath(),
            f.moveTo(-8, 0),
            f.lineTo(5, 0),
            f.stroke(),
            (f.strokeStyle = "#e9b86a"),
            (f.lineWidth = 1.6),
            f.stroke(),
            F(f, [
              [9, 0],
              [4, -3],
              [4, 3],
            ]),
            g(f, "#e0e4ee", 1.2),
            F(f, [
              [-8, 0],
              [-11, -3],
              [-6, 0],
              [-11, 3],
            ]),
            g(f, "#ef5a3c", 1),
            f.restore());
        else if (n.k === "mage") {
          const o = f.createRadialGradient(n.x, n.y, 0, n.x, n.y, 10);
          (o.addColorStop(0, "rgba(255,240,150,.8)"),
            o.addColorStop(1, "rgba(200,150,255,0)"),
            (f.fillStyle = o),
            D(f, n.x, n.y, 10),
            f.fill(),
            Nt(f, n.x, n.y, 5.5, "#ffe066"));
        } else if (n.k === "crystal") {
          const o = f.createRadialGradient(n.x, n.y, 0, n.x, n.y, 11);
          (o.addColorStop(0, "rgba(200,255,245,.9)"),
            o.addColorStop(1, "rgba(63,224,197,0)"),
            (f.fillStyle = o),
            D(f, n.x, n.y, 11),
            f.fill(),
            f.save(),
            f.translate(n.x, n.y),
            f.rotate(e * 6),
            F(f, [
              [0, -6],
              [4, 0],
              [0, 6],
              [-4, 0],
            ]),
            g(f, "#3fe0c5", 1.5),
            f.restore());
        } else
          n.k === "frost" &&
            (f.save(),
            f.translate(n.x, n.y),
            f.rotate(e * 8),
            F(f, [
              [0, -5],
              [4, 0],
              [0, 5],
              [-4, 0],
            ]),
            g(f, "#bfe9ff", 1.5),
            f.restore());
      }
      for (const n of i.bolts) {
        (f.beginPath(), f.moveTo(n.a.x, n.a.y));
        for (let o = 1; o < 5; o++) {
          const d = o / 5;
          f.lineTo(n.a.x + (n.b.x - n.a.x) * d + (Math.random() - 0.5) * 8, n.a.y + (n.b.y - n.a.y) * d + (Math.random() - 0.5) * 8);
        }
        (f.lineTo(n.b.x, n.b.y),
          (f.strokeStyle = Q),
          (f.lineWidth = 4),
          f.stroke(),
          (f.strokeStyle = n.c || "#ffe066"),
          (f.lineWidth = 2),
          f.stroke());
      }
      for (const n of i.enemies.filter((o) => ce[o.type].fly).sort((o, d) => o.y - d.y)) Ps(f, n, e);
      for (const n of i.parts)
        ((f.globalAlpha = Math.max(0, Math.min(1, (n.life / n.max) * 1.4))),
          D(f, n.x, n.y, n.puff ? n.size * (1.4 - (n.life / n.max) * 0.6) : n.size),
          (f.fillStyle = n.col),
          f.fill(),
          n.puff || ((f.lineWidth = 1), (f.strokeStyle = Q), f.stroke()));
      if (((f.globalAlpha = 1), Fn(f, e, ya), i.sweep)) {
        const n = i.sweep.t / 1.2,
          o = -60 + n * (de + 120),
          d = i.sweep.y - 30 + n * 40;
        (f.save(),
          (f.globalAlpha = 0.3 * (1 - Math.abs(n - 0.5))),
          (f.fillStyle = "#1b1026"),
          f.translate(o, d),
          f.rotate(0.15),
          A(f, 0, 0, 26, 9),
          f.fill());
        const u = Math.sin(i.sweep.t * 14) * 10;
        (F(f, [
          [-4, 0],
          [-14, -48 - u],
          [10, -6],
        ]),
          f.fill(),
          F(f, [
            [-4, 0],
            [-14, 48 + u],
            [10, 6],
          ]),
          f.fill(),
          F(f, [
            [-24, 0],
            [-56, 6],
            [-24, 4],
          ]),
          f.fill(),
          f.restore());
      }
      ((f.textAlign = "center"), (f.lineJoin = "round"));
      for (const n of i.texts) {
        const o = Math.min(1, (1 - n.life) * 8);
        f.globalAlpha = Math.min(1, n.life * 2);
        const d = (n.size * 1.05) / Math.max(0.35, kt * Te);
        ((f.font = `${Math.round(d * (0.6 + 0.4 * o))}px "Lilita One","Trebuchet MS",sans-serif`), (f.lineWidth = Math.max(3, d * 0.28)));
        const u = f.measureText(n.txt).width / 2 + 3,
          h = Math.max(ft + u, Math.min(ft + de / Te - u, n.x));
        ((f.strokeStyle = Q), f.strokeText(n.txt, h, n.y), (f.fillStyle = n.col), f.fillText(n.txt, h, n.y));
      }
      if (((f.globalAlpha = 1), i.power.armed && i.aim)) {
        const { x: n, y: o } = i.aim;
        ((f.fillStyle = "rgba(255,120,40,.22)"),
          D(f, n, o, Rl()),
          f.fill(),
          f.setLineDash([7, 5]),
          (f.lineDashOffset = -e * 30),
          (f.strokeStyle = "#ffe066"),
          (f.lineWidth = 3),
          f.stroke(),
          f.setLineDash([]));
        for (const d of i.enemies)
          Et() === "souffle" &&
            Math.hypot(d.x - n, d.y - o) <= Ba &&
            (D(f, d.x, d.y - st(d) - 2, ce[d.type].r + 4), (f.strokeStyle = "#ff6b3c"), (f.lineWidth = 2.5), f.stroke());
      }
      (f.restore(), f.setTransform(s, 0, 0, s, 0, 0));
      const r = 1 / kt,
        l = (n, o, d, u) => {
          f.font = `${d * r}px "Lilita One","Trebuchet MS",sans-serif`;
          let h = f.measureText(n).width;
          (h > de * 0.9 &&
            ((d *= (de * 0.9) / h), (f.font = `${d * r}px "Lilita One","Trebuchet MS",sans-serif`), (h = f.measureText(n).width)),
            (f.textAlign = "center"),
            (f.lineJoin = "round"),
            j(f, de / 2 - h / 2 - 10 * r, o - d * r * 0.95, h + 20 * r, d * r * 1.35, 9 * r),
            (f.fillStyle = "rgba(47,29,18,.82)"),
            f.fill(),
            (f.fillStyle = u),
            f.fillText(n, de / 2, o));
        };
      if (
        (i.tint &&
          (f.save(),
          (f.globalAlpha = Math.max(0, i.tint.t / i.tint.max) * 0.4),
          (f.fillStyle = i.tint.c),
          f.fillRect(0, 0, de, ge),
          f.restore()),
        i.power.armed)
      )
        ((f.fillStyle = "rgba(255,120,40,.10)"),
          f.fillRect(0, 0, de, ge),
          l(
            Et() === "mur"
              ? i.aim
                ? "Le mur se dresse dans le cercle"
                : "Vise le chemin des monstres"
              : i.aim
                ? "Le souffle frappe dans le cercle"
                : "Vise la zone du souffle",
            26 * r,
            16,
            "#ffe066",
          ));
      else if (i.towerMode)
        ((f.strokeStyle = "rgba(126,217,87,.95)"),
          (f.lineWidth = 5 * r),
          f.strokeRect(2, 2, de - 4, ge - 4),
          l(
            i.tpick ? "Touche un emplacement : " + be[i.tpick].short : "Choisis une tour en bas",
            26 * r,
            16,
            i.tpick ? "#bff59a" : "#f3d08c",
          ));
      else if (i.blockMode) {
        ((f.strokeStyle = "rgba(243,208,140,.95)"), (f.lineWidth = 5 * r), f.strokeRect(2, 2, de - 4, ge - 4));
        const n = i.ghost,
          o = i.bdel
            ? ["Touche une forme pour la retirer", "#ffb3a3"]
            : i.hand.length
              ? n
                ? n.res.ok
                  ? ["Touche \u2713 Poser, ou la m\xEAme case", "#bff59a"]
                  : [
                      n.res.why === "path"
                        ? "\xC7a bloquerait le chemin"
                        : n.res.why === "busy"
                          ? "Un monstre est sur la case"
                          : "Place occup\xE9e",
                      "#ffb3a3",
                    ]
                : ["Touche une case pour placer la forme", "#f3d08c"]
              : ["Plus de forme : ach\xE8tes-en une", "#ffb3a3"];
        l(o[0], 26 * r, 16, o[1]);
      }
      if (Te > 1.01) {
        const n = 58 * r,
          o = (n * ge) / de,
          d = de - n - 8 * r,
          u = 8 * r;
        ((f.globalAlpha = 0.85),
          f.drawImage(La, d, u, n, o),
          (f.globalAlpha = 1),
          (f.strokeStyle = Q),
          (f.lineWidth = 2 * r),
          f.strokeRect(d, u, n, o),
          (f.strokeStyle = "#ffe066"),
          (f.lineWidth = 2.2 * r),
          f.strokeRect(d + (ft / de) * n, u + (wt / ge) * o, n / Te, o / Te));
      }
    }
    let ve = "";
    const sa = '<span class="coin"></span>',
      Si = '<span class="blk"></span>';
    function El(e) {
      if (e >= i.waves.length) return "";
      const s = {};
      for (const a of i.waves[e].groups)
        s[a.t] = (s[a.t] || 0) + (ce[a.t].boss ? a.n : Math.max(1, Math.round(a.n * (i.waves[e].ph || J[ne]).count)));
      return Object.entries(s)
        .map(([a, t]) => {
          const r = ce[a];
          return `<button class="chip echip${r.boss ? " boss" : r.fly ? " fly" : ""}" data-act="einfo" data-t="${a}" title="Fiche du monstre">${t} ${t > 1 ? r.pl : r.name}</button>`;
        })
        .join("");
    }
    function ja(e) {
      e.querySelectorAll("canvas[data-mini]").forEach((s) => {
        const a = s.getContext("2d");
        (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, s.width, s.height));
        const t = s.width / 84;
        (a.setTransform(t, 0, 0, t, 0, 0),
          Ls(a, s.dataset.mini, +s.dataset.lvl, 42, s.dataset.mini === "mage" ? 70 : 62, 0, 0, 0, 1, +(s.dataset.spec || 0)));
      });
    }
    const aa = (e) => Object.values(i.towers).filter((s) => s.type === e && (!i.coop || s.o === Gt())).length;
    function jl(e) {
      e.querySelectorAll(".cards,.bhand").forEach((s) => {
        const a = s.parentElement,
          t = a.querySelector(".sarr.l"),
          r = a.querySelector(".sarr.r"),
          l = s.classList.contains("cards"),
          n = () => (l ? s.scrollTop : s.scrollLeft),
          o = () => (l ? s.scrollHeight - s.clientHeight : s.scrollWidth - s.clientWidth),
          d = () => {
            (t && (t.hidden = n() < 14), r && (r.hidden = n() >= o() - 14));
          };
        (s.addEventListener("scroll", d, { passive: !0 }),
          requestAnimationFrame(d),
          l ||
            s.addEventListener(
              "wheel",
              (c) => {
                o() <= 0 || (c.preventDefault(), (s.scrollLeft += Math.abs(c.deltaY) > Math.abs(c.deltaX) ? c.deltaY : c.deltaX));
              },
              { passive: !1 },
            ));
        let u = null;
        (s.addEventListener("pointerdown", (c) => {
          c.pointerType === "mouse" && (u = { x: c.clientX, y: c.clientY, s: n(), m: 0 });
        }),
          s.addEventListener("pointermove", (c) => {
            if (!u) return;
            const p = l ? c.clientY - u.y : c.clientX - u.x;
            ((u.m = Math.max(u.m, Math.abs(p))), u.m > 6 && (l ? (s.scrollTop = u.s - p) : (s.scrollLeft = u.s - p)));
          }));
        const h = () => {
          (u && u.m > 6 && ((s.dataset.dragged = "1"), setTimeout(() => delete s.dataset.dragged, 0)), (u = null));
        };
        (s.addEventListener("pointerup", h),
          s.addEventListener("pointerleave", () => {
            u = null;
          }),
          s.addEventListener(
            "click",
            (c) => {
              s.dataset.dragged && (c.stopPropagation(), c.preventDefault());
            },
            !0,
          ));
      });
    }
    const In = () => {
      const e = _s(),
        s = !!i.towerMode,
        a = i.wave >= i.waves.length,
        t =
          s && i.tpick
            ? `<span class="dkhint">Touche un mur, un d\xE9cor ou un bloc pour poser : ${be[i.tpick].short}</span>`
            : s
              ? '<span class="dkhint">Choisis une tour</span>'
              : a
                ? `<span class="dkhint">Tiens bon jusqu'au dernier ennemi.</span>`
                : Oe
                  ? '<span class="dkhint">Touche \xAB Pr\xEAt \xBB quand tu as fini (la vague part quand vous \xEAtes pr\xEAts tous les deux) : tes monstres attaquent ton adversaire et te rapportent un revenu \xE0 la fin de chaque vague (20 s pour tes tours, puis 10 s pour choisir).</span>'
                  : El(i.wave);
      return (
        `<div class="dock"><div class="info"><b>${Oe ? "Duel" : a ? "Derni\xE8re vague" : "Vague " + (i.wave + 1)}</b>${i.endless && !a && !s && !Oe ? `<span class="chip${i.wave >= 20 ? " boss" : ""}">${i.waves[i.wave].ph.name}</span>` : ""}${t}</div><div class="deck5" style="--n:${ko().length}">` +
        ko()
          .map((l) => {
            const n = be[l],
              o = yt(l, 0),
              d = aa(l),
              u = e && d >= e,
              h = i.gold < o || u || as();
            return `<button class="c5${i.tpick === l && s ? " on" : ""}${h ? " poor" : ""}" data-act="tpick" data-type="${l}" title="${n.name} \xB7 ${n.role}"><canvas data-mini="${l}" data-lvl="0" width="64" height="64"></canvas><span class="n">${n.short}</span><span class="c"><i class="dot"></i>${o}</span>${e ? `<span class="r lim${u ? " full" : ""}">${d}/${e}</span>` : ""}</button>`;
          })
          .join("") +
        "</div></div>"
      );
    };
    function je() {
      const e = i.sel,
        s = e && e.kind === "cell" ? e.i : -1,
        a = s >= 0 ? i.towers[s] : null,
        t = [
          Object.keys(i.towers).length,
          e && e.kind,
          s,
          a && a.type,
          a && a.lvl,
          a && a.spec,
          a && a.mode,
          i.crystal.lvl,
          i.wave,
          i.over,
          i.blockMode,
          s >= 0 && Ee[s],
          i.hand.length,
          i.pick,
          i.hand[i.pick] && i.hand[i.pick].cells.join(";"),
          i.buys,
          i.bdel,
          i.towerMode,
          i.tpick,
          i.ghost ? i.ghost.c + "," + i.ghost.r + ":" + i.ghost.res.ok : "",
          i.hand.map((r) => r.k).join(""),
        ].join("|");
      if (t !== ve) {
        ve = t;
        let r = "";
        if (i.towerMode) r = In();
        else if (i.blockMode) {
          const l = [];
          (i.hand.forEach((n, o) => {
            let d = l.find((u) => u.k === n.k);
            (d || l.push((d = { k: n.k, ids: [] })), d.ids.push(o));
          }),
            (r = `<div class="p-head"><div class="p-title">Blocs</div><div class="p-sub">${i.hand.length} forme${i.hand.length > 1 ? "s" : ""} en r\xE9serve</div></div><div class="bhand">${l
              .map((n) => {
                const o = n.ids.includes(i.pick) && !i.bdel,
                  d = o ? i.pick : n.ids[0];
                return `<button class="bp${o ? " on" : ""}" data-pick="${d}" title="${ns[n.k].name}" aria-label="${ns[n.k].name}"><canvas data-piece="${d}" width="88" height="88"></canvas>${n.ids.length > 1 ? `<span class="cnt">\xD7${n.ids.length}</span>` : ""}</button>`;
              })
              .join("")}
          <button class="bp buy" data-act="buy" data-cost="${bo()}" title="Acheter une forme au hasard"><span>+ Forme</span><span class="c">${sa}${bo()}</span></button>${l.length ? "" : '<p class="bempty">Plus de forme. Ach\xE8te-en une ou attends la fin de la vague.</p>'}</div><div class="bacts"><button class="btn" data-act="rot" ${i.pick < 0 || i.bdel || !i.hand.length ? "disabled" : ""}>\u27F3 Tourner</button><button class="btn${i.bdel ? " on" : ""}" data-act="bdel">\u2715 Retirer</button><button class="btn green" data-act="place" ${i.ghost && i.ghost.res.ok && !i.bdel ? "" : "disabled"}>\u2713 Poser</button></div>`));
        } else if (!e) r = In();
        else if (e.kind === "crystal") {
          const l = i.crystal,
            n = l.lvl,
            o = Math.round(pt.dmg[n] * (1 + 0.02 * ke("crycore") + 0.08 * me("g5b"))),
            d = Math.round(pt.range[n] * (1 + 0.03 * me("g5b")));
          r = `<div class="p-head"><div class="p-title">${pt.name}</div><button class="x" data-act="close" aria-label="Fermer">\u2715</button></div><div class="t-stats">PV <b>${Math.ceil(l.hp)} / ${l.max}</b> \xB7 D\xE9g\xE2ts <b>${o}</b> \xB7 Port\xE9e <b>${d}</b> \xB7 Touche les volants</div><p class="hint">Le cristal frappe tout seul le monstre le plus proche. S'il tombe \xE0 0 PV, la partie est perdue.</p>`;
        } else if (!a)
          r =
            `<div class="p-head"><div class="p-title">B\xE2tir une tour</div>${Ee[s] ? `<button class="btn mini" data-act="demolish">\u2715 Retirer la forme${me("g6") ? " (+1)" : ""}</button>` : ""}<button class="x" data-act="close" aria-label="Fermer">\u2715</button></div><div class="cardwrap"><button class="sarr l" data-scroll="-1" aria-label="Voir la rang\xE9e du dessus" hidden>\u25B2</button><div class="cards">` +
            ko()
              .map((l) => {
                const n = be[l],
                  o = yt(l, 0),
                  d = _s(),
                  u = aa(l),
                  h = d && u >= d;
                return `<button class="card" data-act="build" data-type="${l}" data-cost="${o}" data-full="${h ? 1 : 0}" title="${n.name} \xB7 ${n.role}"><canvas data-mini="${l}" data-lvl="0" width="64" height="64"></canvas><span class="n">${n.short}</span><span class="c">${sa}${o}</span>${d ? `<span class="r lim${h ? " full" : ""}">${u}/${d}</span>` : ""}</button>`;
              })
              .join("") +
            '</div><button class="sarr r" data-scroll="1" aria-label="Voir la rang\xE9e du dessous" hidden>\u25BC Autres tours</button></div>';
        else {
          const l = be[a.type],
            n = a.lvl,
            o = n === 2 && !zs(),
            d = n >= 3 || o,
            u = d ? 0 : yt(a.type, n + 1),
            h = Math.round(a.invest * (0.6 + 0.05 * me("g4b"))),
            c = n >= 3 && no(a.type, a.spec),
            p = Do(a.type, n, s, a.spec).filter((w) => w[0] !== "Co\xFBt"),
            y = d ? [] : Do(a.type, n + 1, s, 0),
            b = (w) => {
              const T = y.find((M) => M[0] === w);
              return T ? T[3] : null;
            };
          r = `<div class="tw-head"><canvas data-mini="${a.type}" data-lvl="${n}" data-spec="${a.spec || 0}" width="100" height="100"></canvas><div class="tw-id"><div class="tw-t"><span class="p-title">${l.short}</span><span class="lvchip">Niv. ${n + 1}</span></div>${c ? `<span class="spchip sp${a.spec}">${c.name}</span>` : ""}
            <div class="tw-k"><span title="Monstres \xE9limin\xE9s par cette tour"><b id="tkK">${a.kills || 0}</b> \xE9lim.</span><span title="D\xE9g\xE2ts inflig\xE9s par cette tour"><b id="tkD">${Bn(a.dmg || 0)}</b> d\xE9g\xE2ts</span></div></div><button class="btn mini" data-act="tinfo" title="Fiche compl\xE8te de la tour">Stats</button><button class="x" data-act="close" aria-label="Fermer">\u2715</button></div><div class="tw-tiles${p.length > 4 ? " n5" : ""}" style="grid-template-columns:repeat(${p.length},1fr)">${p
              .map((w) => {
                const T = b(w[0]),
                  M = T !== null && w[4](T) !== w[4](w[3]);
                return `<div class="tile"><span class="tl">${w[1]}</span><span class="tv">${Jn(w[2], w[3], w[4])}</span>${d ? "" : `<span class="tnx${M ? "" : " same"}">${M ? `\u2192 ${w[4](T)}` : "="}</span>`}</div>`;
              })
              .join(
                "",
              )}</div><div class="t-actions"><button class="btn green" data-act="up" ${d ? "disabled" : `data-cost="${u}"`}${o ? ` title="Bats le boss de l'Antre du dragon en Facile pour d\xE9bloquer le niveau 4"` : ""}>${o ? `${gt} Niv. 4 : bats l'Antre` : d ? "Niveau max" : n === 2 ? `Niveau 4 ${sa}${u}` : `Am\xE9liorer ${sa}${u}`}</button><button class="btn" data-act="mode" title="Change la cible de la tour">Vise : ${a.mode === "strong" ? "le + fort" : "le 1er"}</button><button class="btn" data-act="sell">Vendre +${h}</button>${Ee[s] ? '<button class="btn" data-act="demolish" title="Vend les tours pos\xE9es dessus et retire toute la forme">\u2715 Forme</button>' : ""}</div>`;
        }
        ($t.classList.toggle("towerp", !!(a && !i.blockMode && e && e.kind === "cell")),
          ($t.innerHTML = r),
          ja($t),
          jl($t),
          $t.querySelectorAll("canvas[data-piece]").forEach((l) => $l(l, i.hand[+l.dataset.piece])));
      }
      ($t.querySelectorAll("[data-cost]").forEach((r) => {
        r.disabled = i.gold < +r.dataset.cost || i.over || r.dataset.full === "1";
      }),
        $t.querySelectorAll("[data-act=tpick]").forEach((r) => {
          const l = r.dataset.type,
            n = _s();
          r.classList.toggle("poor", i.gold < yt(l, 0) || !!(n && aa(l) >= n) || as());
        }),
        $t
          .querySelectorAll("[data-act=build],[data-act=up],[data-act=sell],[data-act=demolish],[data-act=place]")
          .forEach((r) => r.classList.toggle("locked", as())));
    }
    $t.addEventListener("click", (e) => {
      const s = e.target.closest("[data-scroll]");
      if (s) {
        s.parentElement.querySelector(".cards").scrollBy({ top: +s.dataset.scroll * 102, behavior: "smooth" });
        return;
      }
      const a = e.target.closest("[data-act],[data-pick]");
      if (!a || a.disabled) return;
      const t = a.dataset.act || "pick",
        r = i.sel && i.sel.i;
      if (as() && ["build", "up", "sell"].includes(t)) {
        Ca(de / 2, ge / 2);
        return;
      }
      if (Se && ["up", "sell", "mode"].includes(t)) {
        const l = i.towers[r];
        if (l && l.o !== Gt()) {
          fe(oe(r), ae(r) - 16, "Tour de ton partenaire", "#ffb3a3", 13);
          return;
        }
      }
      if (Se && Se.me === "guest")
        if (t === "build") coopCmd({ c: "build", i: r, type: a.dataset.type });
        else if (t === "up") {
          const l = i.towers[r];
          l && l.lvl < 2 && coopCmd({ c: "up", i: r });
        } else
          t === "mode" ? coopCmd({ c: "mode", i: r }) : t === "sell" ? coopCmd({ c: "sell", i: r }) : t === "buy" && coopCmd({ c: "buy" });
      if (t === "close") i.sel = null;
      else if (t === "einfo") {
        gi(a.dataset.t);
        return;
      } else if (t === "tinfo") {
        const l = i.towers[r];
        if (l) {
          Eo(l.type, r);
          return;
        }
      } else if (t === "blocks") vo();
      else if (t === "tpick") {
        const l = a.dataset.type;
        if (!ct(l)) return;
        const n = performance.now();
        if (Ra.t === l && n - Ra.at < 450) {
          ((Ra = { t: "", at: 0 }), Eo(l, void 0, !0));
          return;
        }
        if (((Ra = { t: l, at: n }), i.towerMode && i.tpick === l)) {
          (Ks(!1), (i.tpick = null));
          return;
        }
        (i.towerMode || Ks(!0), (i.tpick = l));
      } else if (t === "pick") ((i.pick = +a.dataset.pick), (i.bdel = !1), i.ghost && rs(i.ghost.c, i.ghost.r));
      else if (t === "place") An();
      else if (t === "bdel") ((i.bdel = !i.bdel), (i.ghost = null));
      else if (t === "rot") {
        const l = i.hand[i.pick];
        l && ((l.cells = Cn(l.cells)), i.ghost && rs(i.ghost.c, i.ghost.r));
      } else if (t === "buy") {
        const l = bo();
        i.gold >= l &&
          ((i.gold -= l),
          i.buys++,
          i.hand.push(go()),
          (i.pick = i.hand.length - 1),
          i.ghost && rs(i.ghost.c, i.ghost.r),
          fe(de / 2, 92, "Nouvelle forme : " + ns[i.hand[i.pick].k].name, "#f3d08c", 14));
      } else if (t === "build") {
        const l = yt(a.dataset.type, 0),
          n = _s();
        if (n && aa(a.dataset.type) >= n) return;
        i.gold >= l &&
          (Ue("build"),
          (i.gold -= l),
          (i.towers[r] = { type: a.dataset.type, lvl: 0, cd: 0, ang: 0, invest: l, mode: "first", anim: 0, o: Gt() }),
          ot(oe(r), ae(r) - 8, 12));
      } else if (t === "demolish") (Rn(r), (i.sel = null));
      else if (t === "up") {
        const l = i.towers[r];
        if (l && l.lvl === 2) {
          zs() && Ql(r);
          return;
        }
        const n = yt(l.type, l.lvl + 1);
        l.lvl < 2 &&
          i.gold >= n &&
          (Ue("up"),
          (i.gold -= n),
          l.lvl++,
          (l.invest += n),
          at(oe(r), ae(r) - 20, "#ffc93c", 16, 80, 3),
          fe(oe(r), ae(r) - 50, "Niveau " + (l.lvl + 1) + " !", "#7ed957", 15));
      } else if (t === "mode") {
        const l = i.towers[r];
        l.mode = l.mode === "strong" ? "first" : "strong";
      } else if (t === "sell") {
        const l = i.towers[r];
        ((i.gold += Math.round(l.invest * (0.6 + 0.05 * me("g4b")))), ot(oe(r), ae(r) - 10, 10), delete i.towers[r], (i.sel = null));
      }
      ((ve = ""), je(), Ge(!0));
    });
    const So = { hp: Y("#hp"), gold: Y("#gold"), wave: Y("#wave"), next: Y("#next"), cd: Y("#powerCd") };
    let Mt = {};
    function Ge(e) {
      const s = (u, h) => {
        (e || Mt[u] !== h) && ((Mt[u] = h), (So[u].textContent = h));
      };
      (s("hp", String(Math.ceil(i.crystal.hp))), s("gold", String(Math.floor(i.gold))), s("wave", String(Oe ? Oe.round + 1 : i.wave)));
      const a = i.wave > 0 && (i.enemies.length || i.queue.length),
        t = m.autoWave && !a && i.wave > 0 && i.autoWaveT != null ? Math.max(1, Math.ceil(i.autoWaveT)) : 0,
        r = Se ? coopLabel() : Oe ? duelLabel() : i.wave >= i.waves.length ? "Fin" : a ? "En cours" : "Lancer \u25B6" + (t ? " " + t : "");
      Mt.next !== r && ((Mt.next = r), (Y("#nextLbl").textContent = r));
      {
        const u = Y("#hpBar"),
          h = Y("#waveBar");
        if (u) {
          const c = Math.max(0, Math.min(1, i.crystal.hp / i.crystal.max));
          ((u.style.width = (c * 100).toFixed(0) + "%"), (u.className = c < 0.3 ? "low" : ""));
        }
        h && (h.style.width = i.endless ? "0%" : Math.min(100, (i.wave / i.waves.length) * 100).toFixed(0) + "%");
      }
      (Y("#autoWave").classList.toggle("on", !!m.autoWave),
        (So.next.disabled = Se ? coopDis() : Oe ? !!i.over || !Oe.go || Oe.ph === "wave" : i.wave >= i.waves.length || i.over || !!a),
        Y("#twBtn").classList.toggle("on", !!i.towerMode));
      const l = (i.blockMode ? "Fini" : "Blocs") + "|" + i.hand.length;
      Mt.bl !== l &&
        ((Mt.bl = l),
        (Y("#blkLbl").textContent = i.blockMode ? "Fini \u2713" : "Blocs"),
        (Y("#blkCnt").textContent = i.hand.length),
        (Y("#blkCnt").hidden = i.blockMode),
        Y("#blkBtn").classList.toggle("on", i.blockMode));
      const n = i.sel && i.sel.kind === "cell" && i.towers[i.sel.i];
      if (n) {
        const u = String(n.kills || 0),
          h = Bn(n.dmg || 0),
          c = Y("#tkK"),
          p = Y("#tkD");
        (c && c.textContent !== u && (c.textContent = u), p && p.textContent !== h && (p.textContent = h));
      }
      {
        const u = Et();
        Mt.sp !== u &&
          ((Mt.sp = u),
          (Y("#powerIco").innerHTML = He[u].ico),
          (Y("#powerLbl").textContent = He[u].name),
          (xs.title = He[u].full + (He[u].aim ? " : touche puis vise le terrain" : "")));
      }
      const o = i.power.cd / (i.power.max || yo);
      ((xs.disabled = !i.started || i.power.cd > 0 || i.over),
        xs.classList.toggle("armed", i.power.armed),
        typeof Lo == "function" && Lo(),
        (So.cd.style.background =
          o > 0 ? `conic-gradient(rgba(47,29,18,.7) ${o * 360}deg, transparent 0)` : i.started ? "none" : "rgba(47,29,18,.5)"));
      const d = Math.floor(i.gold) + "|" + (i.sel && i.sel.kind === "crystal" ? Math.ceil(i.crystal.hp) : "");
      Mt.gk !== d && ((Mt.gk = d), i.sel && i.sel.kind === "crystal" && (ve = ""), je());
    }
    function $o() {
      const e = document.getElementById("autoPop");
      e && e.remove();
    }
    function Xn() {
      $o();
      const e = Y("#next").getBoundingClientRect(),
        s = !!m.autoWave,
        a = document.createElement("div");
      ((a.id = "autoPop"),
        (a.innerHTML = `<div class="aph">Lancement automatique</div><button class="btn small ${s ? "green" : ""}" id="apT">${s ? "Activ\xE9 \xB7 touche pour couper" : "Coup\xE9 \xB7 touche pour activer"}</button><div class="apd"><div class="apl">D\xE9lai avant le lancement : <b id="adlV">${Na()} s</b></div><input type="range" class="adly" min="1" max="10" step="1" value="${Na()}" ${Xe() ? "" : "disabled"} aria-label="D\xE9lai du lancement automatique des vagues">${Xe() ? "" : '<div class="apn">\u2605 R\xE9glable avec Bastion+ (10 s sans abonnement)</div>'}</div>`),
        document.body.appendChild(a));
      const t = Math.min(300, innerWidth - 16);
      ((a.style.width = t + "px"),
        (a.style.left = Math.max(8, Math.min(innerWidth - t - 8, e.left + e.width / 2 - t / 2)) + "px"),
        (a.style.bottom = innerHeight - e.top + 10 + "px"),
        a.addEventListener("pointerdown", (r) => r.stopPropagation()),
        Y("#apT").addEventListener("click", () => {
          Oe || ((m.autoWave = !m.autoWave), he(), (i.autoWaveT = null), Ge(!0), Xn());
        }));
    }
    document.addEventListener(
      "pointerdown",
      (e) => {
        const s = document.getElementById("autoPop");
        s && !s.contains(e.target) && !e.target.closest("#autoWave") && $o();
      },
      !0,
    );
    {
      const e = Y("#autoWave");
      (e.addEventListener("pointerdown", (s) => {
        (s.stopPropagation(), s.preventDefault(), !i.over && (document.getElementById("autoPop") ? $o() : Xn()));
      }),
        e.addEventListener("click", (s) => {
          (s.stopPropagation(), s.preventDefault());
        }));
    }
    (Y("#next").addEventListener("click", () => {
      if (Se) {
        coopLaunch();
        return;
      }
      if (Oe) {
        duelReady();
        return;
      }
      (En(),
        m.tips &&
          !m.tips.lp &&
          !Le &&
          ((m.tips.lp = 1),
          he(),
          fe(de / 2, ge * 0.35, "Astuce : touche les fl\xE8ches sur Lancer pour le lancement automatique", "#ffe066", 15)),
        Ge(!0),
        je());
    }),
      Y("#blkBtn").addEventListener("click", () => {
        i.over || vo();
      }),
      Y("#speed").addEventListener("click", (e) => {
        if (Se) {
          fe(de / 2, ge / 2, "Vitesse fixe en coop\xE9ration", "#ffe066", 15);
          return;
        }
        if (Oe) {
          fe(de / 2, ge / 2, "Vitesse fixe pendant un duel", "#ffe066", 15);
          return;
        }
        (i.speed === 3 && !Xe()
          ? ((i.speed = 1), fe(de / 2, ge / 2, "Vitesse \xD75 : r\xE9serv\xE9e \xE0 l'abonnement Bastion+", "#ffe066", 15))
          : (i.speed = i.speed === 1 ? 2 : i.speed === 2 ? 3 : i.speed === 3 ? 5 : 1),
          (e.currentTarget.textContent = "\xD7" + i.speed),
          (m.speed = i.speed),
          he());
      }),
      Y("#pause").addEventListener("click", () => {
        if (Se) {
          i.over || coopMenu();
          return;
        }
        if (Oe) {
          i.over || duelSettings();
          return;
        }
        i.over || !xe.hidden || ((i.paused = !0), (i.power.armed = !1), di());
      }));
    const On = Y("#autoPow");
    function Lo() {
      On.classList.toggle("on", !!m.autoPower);
    }
    (On.addEventListener("click", (e) => {
      (e.stopPropagation(),
        (m.autoPower = !m.autoPower),
        he(),
        Lo(),
        (i.power.armed = !1),
        fe(de / 2, ge / 2, m.autoPower ? "Sort automatique activ\xE9" : "Sort automatique d\xE9sactiv\xE9", "#ffe066", 16),
        Ge(!0));
    }),
      xs.addEventListener("click", () => {
        if (xs.disabled) return;
        const e = Et();
        (He[e].aim ? ((i.power.armed = !i.power.armed), (i.aim = null)) : fs(e), Ge(!0));
      }));
    function oa(e) {
      const s = De.getBoundingClientRect();
      return { x: ft + (((e.clientX - s.left) / s.width) * de) / Te, y: wt + (((e.clientY - s.top) / s.height) * ge) / Te };
    }
    function na(e) {
      const { x: s, y: a } = oa(e),
        t = Math.floor(s / $),
        r = Math.floor(a / $);
      return { x: s, y: a, i: t >= 0 && t < Re && r >= 0 && r < et ? tt(t, r) : -1 };
    }
    function Wl(e) {
      if (i.over || !xe.hidden) return;
      const { x: s, y: a, i: t } = na(e);
      if (t < 0) return;
      if (i.power.armed) {
        (fs(Et(), s, a), Ge(!0));
        return;
      }
      if (i.blockMode) {
        if (i.bdel) {
          (Ee[t] ? Rn(t) : fe(oe(t), ae(t), "Pas une forme pos\xE9e", "#ffb3a3", 13), (ve = ""), je(), Ge(!0));
          return;
        }
        if (!i.hand.length) {
          fe(s, a, "Plus de blocs", "#ef5a3c", 13);
          return;
        }
        const l = Pe(t),
          n = Ce(t);
        (i.ghost && i.ghost.c === l && i.ghost.r === n ? An() : rs(l, n), (ve = ""), je(), Ge(!0));
        return;
      }
      if (i.towerMode) {
        let l = t;
        const n = t + Re;
        if ((!i.towers[t] && !Ms(t) && n < Be && i.towers[n] && (l = n), i.tpick && !ct(i.tpick) && (i.tpick = null), i.towers[l])) {
          ((i.towerMode = !1), (i.sel = { kind: "cell", i: l }), (ve = ""), je(), Ge(!0));
          return;
        }
        if (Ms(l)) {
          (i.tpick ? Ml(l, i.tpick) : fe(oe(l), ae(l) - 6, "Choisis d'abord une tour", "#f3d08c", 13), (ve = ""), je(), Ge(!0));
          return;
        }
        fe(oe(t), ae(t), ht[t] === "ground" ? "Pose un bloc ici" : "Pas ici", "#f3d08c", 13);
        return;
      }
      let r = null;
      if (ht[t] === "crystal" || Math.hypot(s - we.x, a - (we.y - 20)) < 30) r = { kind: "crystal" };
      else {
        let l = t;
        const n = t + Re;
        if ((!i.towers[t] && !Ms(t) && n < Be && i.towers[n] && (l = n), i.towers[l])) r = { kind: "cell", i: l };
        else if (Ms(l)) {
          Ks(!0);
          return;
        } else
          ht[t] === "ground"
            ? fe(oe(t), ae(t), "Pose un bloc ici", "#f3d08c", 13)
            : ht[t] === "edge" && fe(oe(t), ae(t), "Hors du terrain", "#f3d08c", 13);
      }
      (r && i.sel && r.kind === i.sel.kind && r.i === i.sel.i && (r = null), (i.sel = r), (ve = ""), je());
    }
    const Ze = new Map();
    let Ne = null;
    function Vl() {
      if (!i.blockMode || i.bdel || i.over) return;
      const e = i.hand[i.pick];
      e && ((e.cells = Cn(e.cells)), i.ghost && rs(i.ghost.c, i.ghost.r), (ve = ""), je());
    }
    (De.addEventListener("contextmenu", (e) => e.preventDefault()),
      De.addEventListener("pointerdown", (e) => {
        if (xe.hidden) {
          if (e.button === 2) {
            (e.preventDefault(), Vl());
            return;
          }
          try {
            De.setPointerCapture(e.pointerId);
          } catch {}
          if ((Ze.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY }), i.power.armed)) {
            const s = oa(e);
            i.aim = { x: s.x, y: s.y };
          }
          if (Ze.size === 1) Ne = { moved: 0, pinch: !1 };
          else if (Ze.size === 2) {
            const [s, a] = [...Ze.values()];
            Ne = { moved: 99, pinch: !0, d: Math.hypot(s.x - a.x, s.y - a.y) || 1, z: Te };
          }
        }
      }),
      De.addEventListener("pointermove", (e) => {
        if (i.power.armed) {
          const l = oa(e);
          if (((i.aim = { x: l.x, y: l.y }), Ze.has(e.pointerId))) {
            const n = Ze.get(e.pointerId);
            ((n.x = e.clientX), (n.y = e.clientY));
          }
          return;
        }
        if (!Ze.has(e.pointerId) && i.towerMode && e.pointerType === "mouse") {
          const { i: l } = na(e);
          i.hover = l;
          return;
        }
        if (!Ze.has(e.pointerId) && i.blockMode && i.bdel && e.pointerType === "mouse") {
          const { i: l } = na(e);
          i.delHover = l;
          return;
        }
        if (!Ze.has(e.pointerId)) {
          if (i.blockMode && !i.bdel && e.pointerType === "mouse" && i.hand.length) {
            const { i: l } = na(e);
            if (l >= 0) {
              const n = Pe(l),
                o = Ce(l);
              (!i.ghost || i.ghost.c !== n || i.ghost.r !== o) && (rs(n, o), (ve = ""), je());
            }
          }
          return;
        }
        const s = Ze.get(e.pointerId),
          a = e.clientX - s.x,
          t = e.clientY - s.y;
        ((s.x = e.clientX), (s.y = e.clientY));
        const r = De.getBoundingClientRect();
        if (Ne && Ne.pinch && Ze.size >= 2) {
          const [l, n] = [...Ze.values()],
            o = (l.x + n.x) / 2,
            d = (l.y + n.y) / 2,
            u = oa({ clientX: o, clientY: d });
          hn((Ne.z * Math.hypot(l.x - n.x, l.y - n.y)) / Ne.d, u.x, u.y);
          return;
        }
        if (Ne) {
          if (((Ne.moved += Math.abs(a) + Math.abs(t)), i.blockMode && !i.bdel && i.hand.length && !Ne.pinch)) {
            if (Ne.moved > 6) {
              const { i: l } = na(e);
              if (l >= 0) {
                const n = Pe(l),
                  o = Ce(l);
                (!i.ghost || i.ghost.c !== n || i.ghost.r !== o) && (rs(n, o), (ve = ""), je());
              }
            }
            return;
          }
          Ne.moved > 10 && Te > 1 && ((ft -= ((a / r.width) * de) / Te), (wt -= ((t / r.height) * ge) / Te), fn());
        }
      }));
    const zn = (e) => {
      const s = Ze.has(e.pointerId);
      (Ze.delete(e.pointerId),
        s && Ne && !Ne.pinch && e.type === "pointerup" && (Ne.moved <= 10 || i.power.armed) && Wl(e),
        Ze.size ? Ne && Ne.pinch && Ze.size === 1 && (Ne = { moved: 99, pinch: !1 }) : (Ne = null));
    };
    (De.addEventListener("pointerleave", () => {
      i.delHover = -1;
    }),
      De.addEventListener("pointerup", zn),
      De.addEventListener("pointercancel", zn),
      De.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
          const s = oa(e);
          hn(Te * (e.deltaY < 0 ? 1.15 : 0.87), s.x, s.y);
        },
        { passive: !1 },
      ),
      Y("#twBtn").addEventListener("click", () => {
        i.over || Ks();
      }),
      addEventListener("keydown", (e) => {
        e.code === "Space" && e.target === document.body && (e.preventDefault(), hs === "pause" ? _o() : Y("#pause").click());
      }));
    const xe = Y("#overlay"),
      $e = Y("#sheet"),
      ye = {
        scale:
          '<svg class="ic" viewBox="0 0 24 24"><path d="M12 2c4 3 8 4 8 9 0 6-5 10-8 11-3-1-8-5-8-11 0-5 4-6 8-9z" fill="#ef5a3c" stroke="#000" stroke-width="2"/><path d="M8 10.5c2 2 6 2 8 0M9 15c2 1.5 4 1.5 6 0" fill="none" stroke="#7a1d10" stroke-width="1.6" stroke-linecap="round"/></svg>',
        gem: '<svg class="ic" viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 13L2 9z" fill="#ff5fa8" stroke="#000" stroke-width="2" stroke-linejoin="round"/><path d="M2 9h20M8 3l-2 6 6 13 6-13-2-6" fill="none" stroke="#000" stroke-width="1.2" opacity=".5"/><path d="M8 5l-1.5 4" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>',
        rune: '<svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5" fill="#9b7be0" stroke="#000" stroke-width="2"/><path d="M12 6v12M8 9l4 3 4-3" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      };
    let hs = null,
      $i = "archer";
    const Wt = () =>
        `<div class="cur">${Xe() ? '<div class="pill subpill" title="Abonn\xE9 Bastion+">\u2605 Bastion+</div>' : ""}<div class="pill" title="\xC9cailles de dragon"><span class="ico">${ye.scale}</span>${m.scales}</div><div class="pill" title="Runes"><span class="ico">${ye.rune}</span>${m.runes}</div><div class="pill" title="Gemmes"><span class="ico">${ye.gem}</span>${m.gems || 0}</div></div>`,
      ps = [
        { id: "kill", stat: "kill", n: 300, txt: "Vaincre 300 monstres", sc: 80 },
        { id: "fly", stat: "fly", n: 40, txt: "Abattre 40 monstres volants", sc: 80 },
        { id: "wave", stat: "wave", n: 15, txt: "Repousser 15 vagues", sc: 80 },
        { id: "win", stat: "win", n: 2, txt: "Gagner 2 niveaux", sc: 100 },
        { id: "build", stat: "build", n: 15, txt: "Construire 15 tours", sc: 60 },
        { id: "up", stat: "up", n: 10, txt: "Am\xE9liorer 10 tours en partie", sc: 70 },
        { id: "block", stat: "block", n: 10, txt: "Poser 10 blocs", sc: 60 },
        { id: "power", stat: "power", n: 4, txt: "Utiliser 4 fois un sort", sc: 60 },
        { id: "boss", stat: "boss", n: 1, txt: "Vaincre un boss", sc: 120 },
        { id: "star3", stat: "star3", n: 1, txt: "Gagner un niveau avec 3 \xE9toiles", sc: 100 },
        { id: "ewave", stat: "ewave", n: 10, txt: "Repousser 10 vagues en mode infini", sc: 100 },
        { id: "pull", stat: "pull", n: 1, txt: "Faire un tirage au coffre des reliques", sc: 50 },
      ],
      Gn = 15,
      Nn = (e) => {
        let s = 0;
        for (const a of ue) for (const t of Ot) for (const r of m.stars[a.id][t] || []) (r || 0) >= e && s++;
        return s;
      },
      Hn = (e) => ue.filter((s) => m.prog[s.id][e] >= s.levels.length).length,
      Un = ["facile", "facile", "normal", "normal"],
      ra = [
        {
          id: "kill",
          name: "Chasseur",
          stat: "kill",
          tiers: [2e3, 15e3, 75e3, 25e4],
          txt: (e) => `Vaincre ${e.toLocaleString("fr-FR")} monstres`,
        },
        {
          id: "wave",
          name: "Briseur de vagues",
          stat: "wave",
          tiers: [100, 500, 2e3, 6e3],
          txt: (e) => `Repousser ${e.toLocaleString("fr-FR")} vagues`,
        },
        {
          id: "win",
          name: "Conqu\xE9rant",
          get: () => Nn(1),
          tiers: [15, 45, 90, 135],
          txt: (e) => `Gagner ${e} niveaux diff\xE9rents (toutes difficult\xE9s)`,
        },
        {
          id: "star3",
          name: "Perfectionniste",
          get: () => Nn(3),
          tiers: [15, 45, 90, 135],
          txt: (e) => `Obtenir 3 \xE9toiles sur ${e} niveaux diff\xE9rents`,
        },
        { id: "boss", name: "Tueur de boss", stat: "boss", tiers: [10, 50, 200, 600], txt: (e) => `Vaincre ${e} boss` },
        {
          id: "biome",
          name: "Explorateur",
          get: (e) => Hn(Un[Math.min(e, 3)]),
          tiers: [3, 5, 3, 5],
          txt: (e, s) => `Terminer ${e} biomes en ${J[Un[Math.min(s, 3)]].label}`,
        },
        {
          id: "hard",
          name: "Ma\xEEtre du bastion",
          get: () => Hn("difficile"),
          tiers: [2, 3, 4, 5],
          txt: (e) => `Terminer ${e} biomes en Difficile`,
        },
        {
          id: "flaw",
          name: "Intouchable",
          get: () => Object.values(m.flaw || {}).reduce((e, s) => e + s.length, 0),
          tiers: [1, 5, 15, 45],
          txt: (e) => `Gagner ${e} niveau${e > 1 ? "x" : ""} diff\xE9rent${e > 1 ? "s" : ""} en Difficile sans que le cristal perde un PV`,
        },
        {
          id: "endless",
          name: "Survivant",
          get: () => (m.endless && m.endless.best) || 0,
          tiers: [25, 45, 70, 100],
          txt: (e) => `Atteindre la vague ${e} en mode infini`,
        },
        {
          id: "block",
          name: "Architecte",
          stat: "block",
          tiers: [200, 1e3, 4e3, 12e3],
          txt: (e) => `Poser ${e.toLocaleString("fr-FR")} blocs`,
        },
        {
          id: "build",
          name: "B\xE2tisseur",
          stat: "build",
          tiers: [200, 1e3, 4e3, 12e3],
          txt: (e) => `Construire ${e.toLocaleString("fr-FR")} tours`,
        },
        {
          id: "up",
          name: "Forgeron",
          stat: "up",
          tiers: [100, 500, 2500, 8e3],
          txt: (e) => `Am\xE9liorer ${e.toLocaleString("fr-FR")} tours en partie`,
        },
        {
          id: "power",
          name: "Sorts du dragon",
          stat: "power",
          tiers: [30, 150, 600, 2e3],
          txt: (e) => `Utiliser ${e.toLocaleString("fr-FR")} fois un sort`,
        },
        {
          id: "relic",
          name: "Collectionneur",
          get: () => Object.keys(m.relics).length,
          get tiers() {
            return [10, 18, 24, ms.length];
          },
          txt: (e) => `Poss\xE9der ${e} reliques diff\xE9rentes`,
        },
        {
          id: "relmax",
          name: "Ma\xEEtre des reliques",
          get: () => Object.entries(m.relics).filter(([e, s]) => s.lvl >= mt(e)).length,
          tiers: [1, 3, 8, 15],
          txt: (e) => `Monter ${e} relique${e > 1 ? "s" : ""} au niveau max`,
        },
      ],
      _n = [{ gems: 5 }, { gems: 8 }, { gems: 15 }, { gems: 25 }],
      la = () => {
        const e = new Date();
        return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
      };
    function Wa() {
      const e = la();
      let s = m.dq;
      if (!s || s.day !== e) {
        let a = 0;
        for (const l of e) a = (a * 31 + l.charCodeAt(0)) >>> 0;
        const t = ps.map((l) => l.id).filter((l) => l !== "ewave" || Os()),
          r = [];
        for (; r.length < 3; ) {
          a = (a * 1103515245 + 12345) >>> 0;
          const l = a % t.length;
          r.push(t.splice(l, 1)[0]);
        }
        s = m.dq = { day: e, ids: r, p: {}, claimed: [], bonus: !1 };
      }
      if (!Os() && s.ids.includes("ewave")) {
        const a = ps.map((t) => t.id).find((t) => t !== "ewave" && !s.ids.includes(t));
        a && (s.ids[s.ids.indexOf("ewave")] = a);
      }
      if (Xe() && !s.x) {
        const a = ps.map((r) => r.id).filter((r) => !s.ids.includes(r) && (r !== "ewave" || Os()));
        let t = 0;
        for (const r of s.day + "x") t = (t * 31 + r.charCodeAt(0)) >>> 0;
        a.length && (s.x = a[t % a.length]);
      }
      return s;
    }
    const Po = (e) => e.ids.filter((s) => e.claimed.includes(s)).length;
    function Ue(e, s = 1) {
      ((m.st = m.st || {}), (m.st[e] = (m.st[e] || 0) + s));
      const a = Wa();
      a.p[e] = (a.p[e] || 0) + s;
    }
    const Va = (e, s = Ds(e)) => (e.get ? e.get(s) : (m.st || {})[e.stat] || 0),
      Ds = (e) => (m.ach || {})[e.id] || 0;
    function Yn() {
      const e = Wa();
      let s = 0;
      for (const a of e.ids) {
        const t = ps.find((r) => r.id === a);
        !e.claimed.includes(a) && (e.p[t.stat] || 0) >= t.n && s++;
      }
      if ((!e.bonus && Po(e) === 3 && s++, Xe() && e.x)) {
        const a = ps.find((t) => t.id === e.x);
        a && !e.claimed.includes(e.x) && (e.p[a.stat] || 0) >= a.n && s++;
      }
      for (const a of ra) {
        const t = Ds(a);
        t < a.tiers.length && Va(a) >= a.tiers[t] && s++;
      }
      return s;
    }
    const Li = () => {
      const e = Yn();
      return e ? `<span class="qbadge">${e}</span>` : "";
    };
    function Fl(e) {
      const s = Wa();
      if (e === "bonus") {
        if (s.bonus || Po(s) < 3) return;
        ((s.bonus = !0), (m.gems = (m.gems || 0) + Gn));
      } else {
        const t = ps.find((r) => r.id === e);
        if (!t || s.claimed.includes(e) || (s.p[t.stat] || 0) < t.n) return;
        (s.claimed.push(e), (m.scales += Es(t.sc)));
      }
      he();
      const a = xe.scrollTop;
      (Fa(), (xe.scrollTop = a));
    }
    function Il(e) {
      const s = ra.find((r) => r.id === e),
        a = Ds(s);
      if (a >= s.tiers.length || Va(s) < s.tiers[a]) return;
      ((m.ach = m.ach || {}), (m.ach[e] = a + 1), (m.gems = (m.gems || 0) + _n[a].gems), he());
      const t = xe.scrollTop;
      (Fa(), (xe.scrollTop = t));
    }
    const Co = (e, s) =>
      `<div class="qbar"><i style="width:${Math.min(100, (e / s) * 100)}%"></i><span>${Math.min(e, s)} / ${s}</span></div>`;
    let Ht = 0;
    const ia = 5;
    function Fa() {
      const e = Wa(),
        s = new Date(),
        a = new Date(s.getFullYear(), s.getMonth(), s.getDate() + 1),
        t = Math.floor((a - s) / 36e5),
        r = Math.floor((a - s) / 6e4) % 60,
        l = e.ids
          .concat(Xe() && e.x ? [e.x] : [])
          .map((y) => {
            const b = ps.find((C) => C.id === y),
              w = e.p[b.stat] || 0,
              T = e.claimed.includes(y),
              M = w >= b.n;
            return `<div class="qcard${T ? " done" : ""}"><div class="qb"><div class="qn">${y === e.x ? "\u2605 Bastion+ \xB7 " : ""}${b.txt}</div>${Co(w, b.n)}</div><button class="btn ${M && !T ? "green" : ""}" data-qd="${y}" ${M && !T ? "" : "disabled"}>${T ? "Re\xE7u \u2713" : `${ye.scale}${Es(b.sc)}`}</button></div>`;
          })
          .join(""),
        n = Po(e),
        o = `<div class="qcard bonus${e.bonus ? " done" : ""}"><div class="qb"><div class="qn">Finir les 3 qu\xEAtes du jour</div>${Co(n, 3)}</div><button class="btn ${n >= 3 && !e.bonus ? "green" : ""}" data-qd="bonus" ${n >= 3 && !e.bonus ? "" : "disabled"}>${e.bonus ? "Re\xE7u \u2713" : `${ye.gem}${Gn}`}</button></div>`,
        d = (y) => {
          const b = Ds(y);
          return b >= y.tiers.length ? 2 : Va(y, b) >= y.tiers[b] ? 0 : 1;
        },
        u = ra
          .map((y, b) => [y, b])
          .sort((y, b) => d(y[0]) - d(b[0]) || y[1] - b[1])
          .map((y) => y[0]),
        h = Math.ceil(u.length / ia);
      (Ht >= h && (Ht = h - 1), Ht < 0 && (Ht = 0));
      const c =
          h > 1
            ? `<div class="seg small qpages">${Array.from({ length: h }, (y, b) => {
                const w = u.slice(b * ia, (b + 1) * ia).some((T) => d(T) === 0);
                return `<button class="${b === Ht ? "on" : ""}" data-act2="qpage" data-p="${b}">Page ${b + 1}${w ? '<i class="bang">!</i>' : ""}</button>`;
              }).join("")}</div>`
            : "",
        p = u
          .slice(Ht * ia, (Ht + 1) * ia)
          .map((y) => {
            const b = Ds(y),
              w = b >= y.tiers.length,
              T = y.tiers[Math.min(b, y.tiers.length - 1)],
              M = Va(y, b),
              C = !w && M >= T,
              V = _n[Math.min(b, 3)];
            return `<div class="qcard${w ? " done" : ""}"><div class="qb"><div class="qn">${y.name} <span class="qstars">${y.tiers.map((L, B) => `<i class="${B < b ? "on" : ""}"></i>`).join("")}</span></div><div class="qs">${w ? "Toutes les \xE9tapes sont termin\xE9es" : y.txt(T, b)}</div>${w ? "" : Co(M, T)}</div><button class="btn ${C ? "green" : ""} qrw" data-qa="${y.id}" ${C ? "" : "disabled"}>${w ? "Fini \u2713" : `<span>${ye.gem}${V.gems}</span>`}</button></div>`;
          })
          .join("");
      Ie(
        `<div class="top"><button class="btn back" data-nav="home">\u2190 Menu</button><h2>Qu\xEAtes</h2></div>${Wt()}
    <h3 class="qh">Qu\xEAtes du jour <small>nouvelles dans ${t} h ${r} min</small></h3><div class="stack">${l}${o}</div><h3 class="qh">Succ\xE8s <small>${ra.filter((y) => Ds(y) >= y.tiers.length).length}/${ra.length} termin\xE9s</small></h3>${c}<div class="stack">${p}</div>
    `,
        "quests",
      );
    }
    const Xl = {
        online: "home",
        home: "home",
        options: "home",
        armory: "col",
        spells: "col",
        deck: "col",
        relics: "col",
        tree: "col",
        quests: "q",
        shop: "shop",
        ency: "book",
      },
      Ol = [
        ["home", "home", "Accueil", '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3z"/></svg>'],
        [
          "col",
          "armory",
          "Collection",
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z"/></svg>',
        ],
        ["q", "quests", "Qu\xEAtes", '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14v18l-7-4-7 4z"/></svg>'],
        [
          "shop",
          "shop",
          "Boutique",
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9h18l-2 11H5zM7 9a5 5 0 0 1 10 0h-2a3 3 0 0 0-6 0z"/></svg>',
        ],
        [
          "book",
          "ency",
          "Savoir",
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h7a2 2 0 0 1 1 .3A2 2 0 0 1 13 4h7v15h-7a2 2 0 0 0-1 1 2 2 0 0 0-1-1H4z"/></svg>',
        ],
      ],
      zl = (e) =>
        `<nav class="tabbar" aria-label="Navigation">${Ol.map(([s, a, t, r]) => `<button class="${s === e ? "on" : ""}" data-nav="${a}" data-bd="${s}" aria-label="${t}">${r}<span>${t}</span></button>`).join("")}</nav>`,
      da = (e) =>
        `<div class="seg stick">${[
          ["armory", "Tours"],
          ["spells", "Sorts"],
          ["deck", "Deck"],
          ["relics", "Reliques"],
          ["tree", "Talents"],
        ]
          .map(([s, a]) => `<button class="${s === e ? "on" : ""}" data-nav="${s}" data-bd="${s}">${a}</button>`)
          .join("")}</div>`,
      ua = {
        armory: () => !1,
        spells: () => !1,
        relics: () =>
          Ha() ||
          ms.some((e) => {
            const s = m.relics[e.id];
            return !!s && s.lvl < mt(e.id) && s.cp >= bs(s.lvl, e.id);
          }),
        tree: () => !1,
        deck: () => !1,
        quests: () => Yn() > 0,
        shop: () => Ua(),
        home: () => !1,
        book: () => !1,
      };
    ((ua.col = () => ua.relics()), (ua.q = ua.quests));
    function Qn() {
      $e.querySelectorAll("[data-bd]").forEach((e) => {
        const s = e.dataset.bd,
          a = ua[s];
        let t = !1;
        try {
          t = !!(a && a());
        } catch {}
        const r = e.querySelector(".bang");
        if (t && !r) {
          const l = document.createElement("i");
          ((l.className = "bang"), (l.textContent = "!"), e.appendChild(l));
        } else !t && r && r.remove();
      });
    }
    function Gl() {
      const e = $e.querySelector(":scope>.seg.stick");
      if (!e) return;
      const s = e.getBoundingClientRect().top - $e.getBoundingClientRect().top;
      e.classList.toggle("stuck", $e.scrollTop > 4 && s <= $e.clientTop + (parseFloat(getComputedStyle($e).paddingTop) || 0) + 3);
    }
    $e.addEventListener("scroll", Gl, { passive: !0 });
    function qo() {
      if ((($e.style.zoom = ""), ($e.style.height = ""), xe.hidden)) return;
      const e = $e.classList.contains("hastabs"),
        s = Math.max(1, Math.min((innerWidth - 34) / 370, (innerHeight - 20) / 740, 1.5));
      (s > 1.03 && ($e.style.zoom = s.toFixed(3)), e && ($e.style.height = Math.min(740, (innerHeight - 24) / (s > 1.03 ? s : 1)) + "px"));
    }
    (new MutationObserver(() => qo()).observe($e, { childList: !0 }),
      new MutationObserver(() => qo()).observe(xe, { attributes: !0, attributeFilter: ["hidden"] }),
      addEventListener("resize", qo));
    function Ie(e, s) {
      hs = s;
      const a = Xl[s];
      (($e.className = "sheet" + (["armory", "tree", "biome", "level"].includes(s) ? " wide" : "") + (a ? " hastabs" : "")),
        ($e.innerHTML = e + (a ? zl(a) : "")));
      {
        const r = typeof $r == "function" ? $r(s) : "";
        if (r) {
          const l = $e.querySelector(".seg") || $e.querySelector(".top");
          l ? l.insertAdjacentHTML("afterend", r) : $e.insertAdjacentHTML("afterbegin", r);
        }
      }
      ((xe.hidden = !1), (xe.scrollTop = 0), ja($e), Qn());
      const t = $e.querySelector("[data-focus]");
      t && t.focus();
    }
    function Vt() {
      ((xe.hidden = !0), (hs = null));
    }
    const Pi = !0,
      Ci = () => !1,
      Kn = "https://discord.gg/j7pwGATpMr",
      Nl = () => {
        const e = document.getElementById("pause");
        return e ? e.innerHTML : "\u2699";
      };
    function Hl() {
      const e = document.getElementById("optPop");
      e && e.remove();
      const s = document.createElement("div");
      ((s.id = "optPop"),
        (s.innerHTML = `<div class="optc" role="dialog" aria-label="Options"><h3>Options</h3><div class="optl">Musique</div>${Lr()}<div class="optl">Langue</div>${Ar()}<button class="danger" data-optreset>Effacer toute la progression</button><button class="btn small go" data-optx>Fermer</button></div>`),
        s.addEventListener("click", (a) => {
          if (a.target === s || a.target.closest("[data-optx]")) {
            s.remove();
            return;
          }
          const t = a.target.closest("[data-optreset]");
          if (t) {
            if (!t.classList.contains("armed")) {
              (t.classList.add("armed"), (t.textContent = "Touche encore pour tout effacer"));
              return;
            }
            try {
              localStorage.removeItem("bastion3-meta");
            } catch {}
            (uo(), he());
            try {
              cloudReset();
            } catch {}
            ((_e = "facile"), s.remove(), Ia());
            return;
          }
          const r = a.target.closest("[data-act2=mtoggle]");
          r &&
            ((m.musicOn = m.musicOn === !1),
            he(),
            ao.applyVol(),
            (r.textContent = m.musicOn === !1 ? "\u266A Musique : coup\xE9e" : "\u266A Musique : activ\xE9e"));
        }),
        document.body.appendChild(s));
    }
    function Ia() {
      const e = ls(),
        s = He[Et()],
        a = (() => {
          const t = m.endless || {};
          return Math.max(t.best || 0, t.facile || 0, t.normal || 0, t.difficile || 0);
        })();
      Ie(
        `<div class="titlewrap"><h1>Bastion du Dragon</h1><span class="beta" title="Version de test">B\xCATA</span></div><canvas class="hero" id="hero" width="600" height="300"></canvas>${Wt()
          .replace('<div class="cur">', '<div class="cur homecur">')
          .replace(
            /<\/div>$/,
            '<button class="btn small gearbtn homegear" data-nav="options" title="Options" aria-label="Options">' +
              Nl() +
              "</button></div>",
          )}
  <div class="stack"><button class="btn go bigplay" data-nav="biomes" data-focus>Jouer \u25B6</button>${Os() ? `<button class="btn bigendless" data-nav="endless"><span>Mode infini<small>${m.eSave ? "Partie en cours \xB7 reprendre" : a ? "Record : " + a + " vague" + (a > 1 ? "s" : "") : "Les vagues ne s'arr\xEAtent jamais"}</small></span><i>\u221E</i></button>` : `<button class="btn lockbtn slim" disabled title="Finis le mode Facile (boss de l'Antre du dragon) pour le d\xE9bloquer">${gt} Mode infini<small>\xB7 finis le mode Facile</small></button>`}</div><button class="btn discordbtn" data-act2="discord"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M20.3 4.4A19.5 19.5 0 0 0 15.5 3l-.2.5a18 18 0 0 0-6.6 0L8.5 3a19.5 19.5 0 0 0-4.8 1.4C.7 8.9-.1 13.3.3 17.6A19.7 19.7 0 0 0 6.3 20.6l1.2-2a12.800 12.800 0 0 1-1.900-.9l.5-.4a14 14 0 0 0 12 0l.5.4c-.6.4-1.200.7-1.900.9l1.200 2a19.700 19.700 0 0 0 6-3c.5-5-.8-9.300-3.600-13.200zM8.500 14.900c-1.100 0-2-1-2-2.200s.9-2.200 2-2.200 2 1 2 2.200-.9 2.200-2 2.200zm7 0c-1.100 0-2-1-2-2.200s.9-2.200 2-2.200 2 1 2 2.200-.9 2.200-2 2.200z"/></svg><span>Rejoindre le Discord</span></button>
  `,
        "home",
      );
    }
    function Ao() {
      const e = Qe.map((s) => {
        const a = be[s],
          t = m.ranks[s],
          r = t >= Jt,
          l = $s[t],
          n = un(s);
        return ct(s)
          ? `<div class="tcard click" data-tower="${s}" role="button" tabindex="0" aria-label="Voir les stats de ${a.name}"><canvas data-mini="${s}" data-lvl="${Math.min(2, Math.floor((t - 1) / 4))}" width="112" height="112"></canvas>
      ${ls().includes(s) ? '<span class="dkchip">DECK</span>' : ""}<div class="tb"><div class="tn">${a.short}</div><div class="rbar"><i style="width:${Math.round((t / Jt) * 100)}%"></i></div><div class="ts">Rang <b>${t}/${Jt}</b></div><div class="ts gain">D\xE9g\xE2ts +${$a(t)}&nbsp;%${r ? "" : ` \u203A <b>+${$a(t + 1)}&nbsp;%</b>`}</div></div><div class="ta"><button class="btn green" data-rank="${s}" ${r || m.scales < l ? "disabled" : ""}>${r ? "Rang max" : `Rang + ${ye.scale}${l}`}</button>${t > 1 ? `<button class="btn rkreset" data-rreset="${s}" ${(m.gems || 0) < io(s) ? "disabled" : ""} title="Remet la tour au rang 1 et rend ${rn(s)} \xE9cailles">\u21BA Retirer ${ye.gem}${io(s)}</button>` : ""}</div></div>`
          : `<div class="tcard locked slim"><div class="lkbig">${gt}</div><div class="tb"><div class="tn">${a.name}</div><div class="ts">Boss du biome ${zt[s] + 1}</div></div></div>`;
      }).join("");
      Ie(
        `<div class="top"><button class="btn back" data-nav="home" data-focus>\u2190 Menu</button><h2>Collection</h2></div>${Wt()}${da("armory")}
    <div class="stack col2">${e}</div>`,
        "armory",
      );
    }
    function Ro() {
      const e = jn
        .map((s) => {
          const a = He[s];
          if (!Da(s))
            return `<div class="tcard locked slim"><div class="lkbig">${gt}</div><div class="tb"><div class="tn">${a.full}</div><div class="ts">Boss du biome ${Zs[s] + 1}</div></div></div>`;
          const t = Tt(s),
            r = t >= Rs,
            l = ea(t);
          return `<div class="tcard click" data-spellcard="${s}" role="button" tabindex="0" aria-label="Voir les stats de ${a.full}"><div class="sico"><svg viewBox="0 0 24 24">${a.ico}</svg></div><div class="tb"><div class="tn">${a.full}</div><div class="ts">Rang <b>${t}/${Rs}</b></div><div class="ts gain">${ds[s].lab} ${Bs(s)}${r ? "" : ` \u203A <b>${Bs(s, t + 1)}</b>`}</div></div><div class="ta"><button class="btn green" data-srank="${s}" ${r || m.scales < l ? "disabled" : ""}>${r ? "Rang max" : `Rang + ${ye.scale}${l}`}</button>${t > 1 ? `<button class="btn rkreset" data-sreset="${s}" ${(m.gems || 0) < ta(s) ? "disabled" : ""} title="Remet le sort au rang 1 et rend ${To(s)} \xE9cailles">\u21BA Retirer ${ye.gem}${ta(s)}</button>` : ""}</div></div>`;
        })
        .join("");
      Ie(
        `<div class="top"><button class="btn back" data-nav="home" data-focus>\u2190 Menu</button><h2>Collection</h2></div>${Wt()}${da("spells")}
    <div class="stack">${e}</div>`,
        "spells",
      );
    }
    function Ul() {
      Ie(
        `<div class="top"><button class="btn back" data-nav="home" data-focus>\u2190 Menu</button><h2>Collection</h2></div>${Wt()}${da("deck")}
    ${xo()}${Ea()}`,
        "deck",
      );
    }
    function Bo(e) {
      const s = He[e],
        a = Tt(e),
        t = a >= Rs,
        r = ea(a),
        l = {
          souffle: [
            ["Zone", s.r + " px"],
            ["D\xE9g\xE2ts de base", "60 + 20 par vague"],
            ["Br\xFBlure", "3 s"],
          ],
          gel: [
            ["Cibles", "Tous les monstres"],
            ["Ralentissement", "Aucun"],
          ],
          foudre: [
            ["Cibles", "6 monstres les plus costauds"],
            ["\xC9tourdissement", "1 s"],
            ["D\xE9g\xE2ts de base", "100 + 30 par vague"],
          ],
          mur: [
            ["Dur\xE9e", "8 s"],
            ["Rayon", s.r + " px"],
            ["Vie de base", "600 + 100 par vague"],
            ["Bloque", "Monstres au sol et volants"],
          ],
          renfort: [["Cadence des tours", "+50 %"]],
        }[e];
      Ie(
        `<div class="top"><button class="btn back" data-nav="spells" data-focus>\u2190 Sorts</button><h2>${s.name}</h2></div><div class="spinfo"><div class="sico big"><svg viewBox="0 0 24 24">${s.ico}</svg></div><p>${s.desc}</p></div><div class="rewards"><div class="rw">Rang <b>${a}/${Rs}</b></div><div class="rw">Recharge <b>${s.cd} s</b></div><div class="rw">${ds[e].lab} <b class="bon">${Bs(e)}</b></div>${t ? "" : `<div class="rw">Rang suivant <b class="bon">${Bs(e, a + 1)}</b></div>`}
      ${l.map(([n, o]) => `<div class="rw">${n} <b>${o}</b></div>`).join("")}</div><div class="stack"><button class="btn green" data-srank="${e}" data-info="1" ${t || m.scales < r ? "disabled" : ""}>${t ? "Rang max" : `Rang + ${ye.scale}${r}`}</button>${a > 1 ? `<button class="btn rkreset" data-sreset="${e}" data-info="1" ${(m.gems || 0) < ta(e) ? "disabled" : ""}>\u21BA Retirer ${ye.gem}${ta(e)} (rend ${To(e)} ${ye.scale})</button>` : ""}</div><p class="note">Co\xFBt du rang suivant : ${t ? "\u2014" : r + " \xE9cailles"}. Le co\xFBt monte \xE0 chaque rang.</p>`,
        "spellinfo",
      );
    }
    const _l = (e) => String(Math.round(e * 10) / 10).replace(".", ","),
      Yl = (e) => String(Math.round(e * 100) / 100).replace(".", ","),
      Xa = (e) => String(Math.round(e)),
      Zn = (e) => Math.round(e) + "&nbsp;%";
    function Do(e, s, a, t) {
      const r = be[e],
        l = Gs(e, s, a, s >= 3 ? t : 0),
        n = [];
      t = s >= 3 ? t : 0;
      const o = no(e, t) || {};
      return (
        n.push(["D\xE9g\xE2ts", "D\xE9g\xE2ts", r.dmg[s] * (o.dmg || 1), l.dmg, _l]),
        n.push(["Tirs par seconde", "Tirs/s", 1 / (r.rate[s] * (o.rate || 1)), 1 / l.rate, Yl]),
        n.push(["Port\xE9e", "Port\xE9e", r.range[s] * (o.range || 1), l.range, Xa]),
        r.splash && n.push(["Zone", "Zone", r.splash[s] * (o.splash || 1), l.splash, Xa]),
        r.slow && n.push(["Ralentit", "Ralentit", Math.min(0.85, r.slow[s] + (o.slow || 0)) * 100, l.slow * 100, Zn]),
        e === "storm" && t !== 1 && n.push(["Cibles", "Cibles", 3, 3 + re("storm", "n3"), Xa]),
        r.pen &&
          n.push([
            "Armure ignor\xE9e",
            "Perce",
            (t === 2 ? 0 : r.pen) * 100,
            (t === 2 ? 0 : Math.min(1, r.pen + 0.15 * re("ballista", "n3"))) * 100,
            Zn,
          ]),
        n.push(["Co\xFBt", "Co\xFBt", r.cost[s], yt(e, s), Xa]),
        n
      );
    }
    const Jn = (e, s, a) => {
      const t = s - e,
        r = /^0(&nbsp;%)?$/.test(a(Math.abs(t)));
      return `<b>${a(e)}</b><span class="bon${r ? " zero" : ""}">${r ? "+0" : (t > 0 ? "+" : "\u2212") + a(Math.abs(t))}</span>`;
    };
    function Eo(e, s, a) {
      const t = be[e],
        r = m.ranks[e],
        l = s !== void 0 || !!a,
        n = l && i.towers[s] ? i.towers[s].lvl : -1;
      l && ((i.paused = !0), (i.power.armed = !1));
      const o = (l && i.towers[s] && i.towers[s].spec) || 0,
        d = [0, 1, 2, 3],
        u = d.map((y) => Do(e, y, s, o)),
        h = u[0].map((y) => [
          y[0],
          u.map((b) => {
            const w = b.find((T) => T[0] === y[0]);
            return w ? Jn(w[2], w[3], w[4]) : "\u2014";
          }),
        ]),
        c = zs(),
        p = `<h3 class="qh">Niveau 4 : une sp\xE9cialisation au choix</h3>${c ? "" : `<div class="splock">${gt} Bats le boss de l'Antre du dragon en Facile pour d\xE9bloquer le niveau 4.</div>`}
    <div class="stack">${Ma[e].map((y, b) => `<div class="spcard sp${b + 1}${o === b + 1 ? " on" : ""}${c ? "" : " off"}"><canvas data-mini="${e}" data-lvl="3" data-spec="${b + 1}" width="120" height="120"></canvas><div class="tb"><div class="tn">${y.name}${o === b + 1 ? ' <span class="chip">Choisie</span>' : ""}</div><div class="ts">${y.good}</div><div class="ts mal">Malus : ${y.bad}</div></div></div>`).join("")}</div>`;
      Ie(
        `<div class="top"><button class="btn back" ${l ? 'data-act2="resume"' : 'data-nav="armory"'} data-focus>\u2190 ${l ? "Partie" : "Tours"}</button><h2>${t.short}</h2></div><div class="tihead"><canvas data-mini="${e}" data-lvl="${Math.max(n, 2)}" width="160" height="160"></canvas><div class="tb"><div class="tn">${t.name}</div><div class="etags"><span class="chip">${t.role}</span><span class="chip">${t.kind === "phys" ? "Physique" : "Magique"}</span><span class="chip${t.air ? " fly" : ""}">${t.air ? "Volants : oui" : "Volants : non"}</span></div><div class="ts">Rang <b>${r}/${Jt}</b> \xB7 +${$a(r)}&nbsp;% de d\xE9g\xE2ts</div></div></div><table class="tistats n4"><thead><tr><th></th>${d.map((y) => `<th${y === n ? ' class="cur"' : ""}>Niv. ${y + 1}</th>`).join("")}</tr></thead><tbody>${h.map(([y, b]) => `<tr><th>${y}</th>${b.map((w, T) => `<td${T === n ? ' class="cur"' : ""}>${w}</td>`).join("")}</tr>`).join("")}</tbody></table>
    ${p}`,
        "towerinfo",
      );
    }
    function Ql(e) {
      const s = i.towers[e];
      if (!s) return;
      const a = s.type,
        t = yt(a, 3);
      (Se || (i.paused = !0),
        (i.power.armed = !1),
        Ie(
          `<div class="top"><button class="btn back" data-act2="resume" data-focus>\u2190 Partie</button><h2>Niveau 4</h2></div><p class="hint">${be[a].name} : choisis une sp\xE9cialisation. Ce choix est d\xE9finitif pour cette tour.</p><div class="stack">${Ma[a].map((r, l) => `<div class="spcard sp${l + 1}"><canvas data-mini="${a}" data-lvl="3" data-spec="${l + 1}" width="120" height="120"></canvas><div class="tb"><div class="tn">${r.name}</div><div class="ts">${r.good}</div><div class="ts mal">Malus : ${r.bad}</div><button class="btn green" data-act2="spec" data-i="${e}" data-s="${l + 1}" ${i.gold < t ? "disabled" : ""}>Choisir ${sa}${t}</button></div></div>`).join("")}</div>
    ${i.gold < t ? `<p class="note">Il te manque ${t - i.gold} pi\xE8ces.</p>` : ""}`,
          "spec",
        ));
    }
    const Ft = [
        { name: "Commun", col: "#bdb5a6", w: 56.2, conv: 5 },
        { name: "Peu commun", col: "#6cc04a", w: 28, conv: 10 },
        { name: "Rare", col: "#4fb4ec", w: 11, conv: 20 },
        { name: "\xC9pique", col: "#b07cff", w: 4, conv: 40 },
        { name: "L\xE9gendaire", col: "#ffb347", w: 0.8, conv: 80 },
      ],
      ms = [
        ...Qe.map((e) => ({
          id: "ins_" + e,
          r: 0,
          name: "Insigne : " + be[e].short,
          desc: `+1 % de d\xE9g\xE2ts pour ${be[e].name.toLowerCase().startsWith("tour") ? "la " + be[e].name.toLowerCase() : "la " + be[e].short.toLowerCase()} par niveau`,
          ic: "tower",
          tp: e,
        })),
        {
          id: "vial",
          r: 1,
          name: "Fiole de soin",
          desc: "Le cristal r\xE9cup\xE8re 0,05 % de ses PV max par seconde, par niveau",
          ic: "cry",
        },
        { id: "mortar", r: 1, name: "Mortier sacr\xE9", desc: "+5 PV au cristal par niveau", ic: "cry" },
        { id: "hourglass", r: 1, name: "Sablier", desc: "Tes sorts se rechargent 0,2 % plus vite par niveau", ic: "hour" },
        {
          id: "whet",
          r: 1,
          name: "Pierre \xE0 aiguiser",
          desc: "+0,5 % de d\xE9g\xE2ts pour les tours physiques (archers, catapulte, baliste) par niveau",
          ic: "whet",
        },
        {
          id: "ink",
          r: 1,
          name: "Encre arcanique",
          desc: "+0,5 % de d\xE9g\xE2ts pour les tours magiques (mage, givre, \xE9clair, alchimie) par niveau",
          ic: "ink",
        },
        { id: "feather", r: 1, name: "Plume de faucon", desc: "+0,5 % de d\xE9g\xE2ts contre les volants par niveau", ic: "wing" },
        { id: "lens", r: 2, name: "Lunette d'or", desc: "+0,5 % de port\xE9e pour toutes les tours par niveau", ic: "lens" },
        { id: "crycore", r: 2, name: "C\u0153ur du cristal", desc: "Le cristal fait +2 % de d\xE9g\xE2ts par niveau", ic: "seal" },
        { id: "frostst", r: 2, name: "Pierre de givre", desc: "Les monstres avancent 0,4 % moins vite par niveau", ic: "snow" },
        {
          id: "ember",
          r: 2,
          name: "Braise \xE9ternelle",
          desc: "Br\xFBlures et poisons font +1 % de d\xE9g\xE2ts par niveau",
          ic: "flame",
        },
        {
          id: "cshield",
          r: 2,
          name: "\xC9gide du cristal",
          desc: "Le cristal subit 0,5 % de d\xE9g\xE2ts en moins par niveau",
          ic: "shield",
        },
        { id: "chain", r: 2, name: "Cha\xEEnes lourdes", desc: "Les ralentissements sont 0,5 % plus forts par niveau", ic: "chain" },
        {
          id: "banner",
          r: 3,
          name: "Banni\xE8re royale",
          desc: "+0,5 % de d\xE9g\xE2ts et +0,5 % de vitesse de tir pour toutes les tours par niveau",
          ic: "brick",
        },
        { id: "warhorn", r: 3, name: "Cor de guerre", desc: "Le Renfort donne +0,5 % de cadence de tir en plus par niveau", ic: "horn" },
        { id: "hunter", r: 3, name: "Lame du chasseur", desc: "+1 % de d\xE9g\xE2ts contre les boss par niveau", ic: "hunt" },
        {
          id: "orb",
          r: 3,
          name: "Orbe de flammes",
          desc: "Le Souffle du dragon et la Foudre divine font +2 % de d\xE9g\xE2ts par niveau",
          ic: "orb",
        },
        { id: "heart", r: 4, name: "C\u0153ur de dragon", desc: "+1 % de d\xE9g\xE2ts pour toutes les tours par niveau", ic: "heart" },
        {
          id: "eye",
          r: 4,
          name: "\u0152il du dragon",
          desc: "0,5 % de chance par niveau que chaque tir fasse double d\xE9g\xE2ts",
          ic: "eye",
        },
        {
          id: "tear",
          r: 4,
          name: "Larme du dragon",
          desc: "Une fois par niveau jou\xE9, le cristal bris\xE9 revient avec 1 % de ses PV par niveau de la relique",
          ic: "tear",
        },
        {
          id: "claw",
          r: 4,
          name: "Griffe du dragon",
          desc: "+2 % de d\xE9g\xE2ts par niveau contre les ennemis sous 30 % de PV",
          ic: "claw",
        },
        { id: "glacier", r: 2, name: "Glace du p\xF4le", desc: "Le Gel dure 1 % plus longtemps par niveau", ic: "snow" },
        { id: "thunder", r: 2, name: "Pointe de foudre", desc: "La Foudre divine fait +2 % de d\xE9g\xE2ts par niveau", ic: "bolt" },
        { id: "masonry", r: 2, name: "Mortier de roche", desc: "Le Mur de pierre a +2 % de points de vie par niveau", ic: "brick" },
        { id: "rallystd", r: 2, name: "\xC9tendard de renfort", desc: "Le Renfort dure 1 % plus longtemps par niveau", ic: "flag" },
        {
          id: "stormhammer",
          r: 3,
          name: "Marteau du tonnerre",
          desc: "La Foudre divine \xE9tourdit 0,5 % plus longtemps par niveau",
          ic: "hammer",
        },
        { id: "bulwark", r: 3, name: "Rempart de pierre", desc: "Le Mur de pierre dure 1 % plus longtemps par niveau", ic: "shield" },
        {
          id: "grimoire",
          r: 4,
          name: "Grimoire du dragon",
          desc: "Tous les sorts sont 1 % plus puissants par niveau (d\xE9g\xE2ts, dur\xE9e, points de vie du mur) et se rechargent 0,3 % plus vite",
          ic: "book",
        },
      ];
    var Oa = [100, 100, 80, 80, 50],
      za = 50,
      gs = {};
    ms.forEach((e) => {
      gs[e.id] = e;
      const s = za / Oa[e.r],
        a = (l) => String(+l.toFixed(3)).replace(".", ",");
      let t = null,
        r = 0;
      ((e.desc = e.desc.replace(/(\d+(?:,\d+)?) (%|PV)/g, (l, n, o) => {
        const d = parseFloat(n.replace(",", "."));
        return (t === null && (t = [d, o]), d === t[0] && o === t[1] && r++, a(d * s) + " " + o);
      })),
        t && (e.desc += ` (niv. ${Oa[e.r]} : ${a(t[0] * za)} ${t[1]}${r > 1 ? " chacun" : ""})`));
    });
    function mt(e) {
      return Oa[gs[e] ? gs[e].r : 0];
    }
    if (!m.mig3) {
      m.mig3 = 1;
      for (const e in m.relics) {
        const s = m.relics[e];
        gs[e] && (s.lvl = Math.min(mt(e), Math.round((s.lvl * mt(e)) / za)));
      }
      he();
    }
    const jo = 300,
      Wo = 2700,
      Vo = 30,
      Fo = 270,
      er = 80;
    function ke(e) {
      const s = m.relics && m.relics[e];
      return s ? (gs && gs[e] ? (s.lvl * za) / Oa[gs[e].r] : s.lvl) : 0;
    }
    const bs = (e, s) => 1 + Math.floor(e / (mt(s) / 10));
    function Kl(e, s) {
      const a = mt(s);
      let t = e.lvl,
        r = e.cp,
        l = 0;
      for (; t < a && r >= bs(t, s); ) ((r -= bs(t, s)), t++, l++);
      return l;
    }
    function tr(e) {
      const s = Ft[e.r].col,
        a = {
          bolt: '<path d="M13 2L5 13h6l-1 9 8-12h-6z" fill="#ffe066" stroke="#000" stroke-width="2" stroke-linejoin="round"/>',
          book: '<path d="M4 4h7a2 2 0 0 1 1 .5A2 2 0 0 1 13 4h7v15h-7a2 2 0 0 0-1 1 2 2 0 0 0-1-1H4z" fill="#b07cff" stroke="#000" stroke-width="2" stroke-linejoin="round"/><path d="M12 5v14" stroke="#000" stroke-width="2"/>',
          flag: '<path d="M5 3v18" stroke="#000" stroke-width="2.5" stroke-linecap="round"/><path d="M6 4h13l-3 4 3 4H6z" fill="#bff59a" stroke="#000" stroke-width="2" stroke-linejoin="round"/>',
          hammer:
            '<path d="M4 20l9-9" stroke="#000" stroke-width="3.5" stroke-linecap="round"/><rect x="10" y="3" width="11" height="7" rx="1.5" transform="rotate(35 15.5 6.5)" fill="#9aa3b5" stroke="#000" stroke-width="2"/>',
          coin: '<circle cx="12" cy="12" r="8" fill="#ffc93c" stroke="#000" stroke-width="2"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="#d68a12" stroke-width="2"/>',
          cry: '<path d="M12 2l6 7-6 13-6-13z" fill="#3fe0c5" stroke="#000" stroke-width="2" stroke-linejoin="round"/>',
          hour: '<path d="M6 3h12M6 21h12M7 3c0 6 10 6 10 9s-10 3-10 9M17 3c0 6-10 6-10 9s10 3 10 9" fill="none" stroke="#000" stroke-width="2"/><path d="M9 19h6l-3-4z" fill="#ffc93c"/>',
          lens: '<circle cx="10" cy="10" r="6" fill="#bfe9ff" stroke="#000" stroke-width="2"/><path d="M14.5 14.5l6 6" stroke="#000" stroke-width="3" stroke-linecap="round"/>',
          seal: '<circle cx="12" cy="11" r="7" fill="#ef5a3c" stroke="#000" stroke-width="2"/><path d="M8 18l-2 4 3-1 1 2 2-5M16 18l2 4-3-1-1 2-2-5" fill="#ef5a3c" stroke="#000" stroke-width="1.5"/><path d="M12 7v8M9 11h6" stroke="#ffe066" stroke-width="2"/>',
          snow: '<path d="M12 3v18M4 7.5l16 9M4 16.5l16-9" stroke="#4fb4ec" stroke-width="2.6" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" fill="#fff" stroke="#000" stroke-width="1.5"/>',
          brick:
            '<rect x="3" y="6" width="18" height="12" rx="2" fill="#f3d08c" stroke="#000" stroke-width="2"/><path d="M3 12h18M10 6v6M15 12v6M7 12v6" stroke="#000" stroke-width="1.5"/>',
          horn: '<path d="M3 15c6 0 10-6 15-10l2 2c-3 4-5 11-12 12z" fill="#e0c37a" stroke="#000" stroke-width="2" stroke-linejoin="round"/><path d="M8 15l1 4" stroke="#000" stroke-width="2"/>',
          heart:
            '<path d="M12 21s-8-5-9.5-10C1.5 7 4 4 7 4c2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 3 0 5.5 3 4.5 7-1.5 5-9.5 10-9.5 10z" fill="#e8433a" stroke="#000" stroke-width="2"/><path d="M8 9l2 2 2-3 2 3 2-2" fill="none" stroke="#ffd166" stroke-width="1.8"/>',
          whet: '<path d="M5 19L17 7l2-4-4 2L3 17z" fill="#c3cad6" stroke="#000" stroke-width="2" stroke-linejoin="round"/><path d="M4 16l4 4" stroke="#7a4520" stroke-width="3"/>',
          ink: '<path d="M9 3h6v4l3 5a6 6 0 0 1-12 0l3-5z" fill="#9b7be0" stroke="#000" stroke-width="2" stroke-linejoin="round"/><circle cx="10" cy="14" r="1.5" fill="#fff"/>',
          wing: '<path d="M4 20C6 10 12 4 20 3c-1 8-6 14-16 17z" fill="#e0c37a" stroke="#000" stroke-width="2" stroke-linejoin="round"/><path d="M7 17l9-10" stroke="#000" stroke-width="1.5"/>',
          flame:
            '<path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 1.5-5 3-6 .3 2 1 3 2.4 3.6C11 8 11.3 5 12 2z" fill="#ff9a3c" stroke="#000" stroke-width="2" stroke-linejoin="round"/>',
          shield:
            '<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z" fill="#4fb4ec" stroke="#000" stroke-width="2" stroke-linejoin="round"/><path d="M12 6l3 4-3 7-3-7z" fill="#3fe0c5" stroke="#000" stroke-width="1.4"/>',
          chain:
            '<rect x="2" y="9" width="9" height="6" rx="3" fill="none" stroke="#5a5a6a" stroke-width="3"/><rect x="13" y="9" width="9" height="6" rx="3" fill="none" stroke="#5a5a6a" stroke-width="3"/><path d="M9 12h6" stroke="#5a5a6a" stroke-width="3"/>',
          hunt: '<path d="M12 2l5 10-5 10-5-10z" fill="#c3cad6" stroke="#000" stroke-width="2" stroke-linejoin="round"/><path d="M12 6v12" stroke="#000" stroke-width="1.4"/>',
          orb: '<circle cx="12" cy="12" r="8" fill="#ef5a3c" stroke="#000" stroke-width="2"/><path d="M12 6c1 3 4 4 4 7a4 4 0 0 1-8 0c0-2 1-3 2-4 .2 1.5.8 2 1.6 2.4C11 9 11.4 7.5 12 6z" fill="#ffe066"/>',
          tear: '<path d="M12 2c4 6 7 9 7 13a7 7 0 0 1-14 0c0-4 3-7 7-13z" fill="#7fe8ff" stroke="#000" stroke-width="2"/><ellipse cx="9.5" cy="14" rx="1.5" ry="3" fill="#fff"/>',
          claw: '<path d="M5 20c2-6 2-11 0-16 4 4 5 10 4 16zM11 20c2-6 2-11 0-16 4 4 5 10 4 16zM17 20c2-6 2-11 0-16 4 4 5 10 4 16z" fill="#fff7e0" stroke="#000" stroke-width="1.8" stroke-linejoin="round"/>',
          eye: '<path d="M2 12c4-6 16-6 20 0-4 6-16 6-20 0z" fill="#ffd166" stroke="#000" stroke-width="2"/><ellipse cx="12" cy="12" rx="2" ry="4.5" fill="#000"/>',
        }[e.ic];
      return e.ic === "tower"
        ? `<canvas data-mini="${e.tp}" data-lvl="1" width="72" height="72"></canvas>`
        : `<svg viewBox="0 0 24 24">${a}</svg>`;
    }
    function sr(e = 0) {
      let s;
      if (m.pity >= er - 1) s = 4;
      else {
        const n = Ft.map((u, h) => (h < e ? 0 : u.w)),
          o = n.reduce((u, h) => u + h, 0);
        let d = Math.random() * o;
        s = 0;
        for (let u = 0; u < 5; u++)
          if (((d -= n[u]), d <= 0)) {
            s = u;
            break;
          }
      }
      m.pity = s === 4 ? 0 : (m.pity || 0) + 1;
      const a = ms.filter((n) => n.r === s),
        t = a[(Math.random() * a.length) | 0],
        r = m.relics[t.id];
      let l;
      return (
        r
          ? r.lvl >= mt(t.id) && r.cp >= 0
            ? ((m.scales += Es(Ft[s].conv)), (l = "conv"))
            : (r.cp++, (l = "dup"))
          : ((m.relics[t.id] = { lvl: 1, cp: 0 }), (l = "new")),
        { rl: t, res: l }
      );
    }
    function Zl(e, s = "scales") {
      const a = s === "gems" ? (e === 10 ? Fo : Vo) : e === 10 ? Wo : jo;
      if ((m[s] || 0) < a) return;
      ((m[s] -= a), Ue("pull", e));
      const t = [];
      for (let r = 0; r < e; r++) t.push(sr(e === 10 && r === e - 1 && !t.some((l) => l.rl.r >= 2) ? 2 : 0));
      (he(), Ga(t));
    }
    function Jl(e) {
      const s = m.relics[e.id],
        a = Ft[e.r].col;
      if (!s)
        return `<div class="relic unk" style="--rc:${a}"><div class="ricon"><span>?</span></div><div class="rname">???</div><div class="rsub">${Ft[e.r].name}</div></div>`;
      const t = bs(s.lvl, e.id),
        r = s.lvl >= mt(e.id),
        l = !r && s.cp >= t;
      return `<div class="relic" style="--rc:${a}" title="${e.desc}"><div class="ricon">${tr(e)}</div><div class="rname">${e.name}</div><div class="rsub">Niv. ${s.lvl}/${mt(e.id)}</div><div class="rdesc">${e.desc}</div>
    ${r ? "" : `<div class="rbar"><i style="width:${Math.min(100, (s.cp / t) * 100)}%"></i><span>${s.cp}/${t}</span></div>`}
    ${l ? `<button class="btn green" data-relup="${e.id}">Am\xE9liorer (+${Kl(s, e.id)} niv.)</button>` : ""}</div>`;
    }
    const ei = [
      { n: 80, price: "0,99 \u20AC" },
      { n: 420, bonus: 20, price: "4,99 \u20AC" },
      { n: 880, bonus: 80, price: "9,99 \u20AC" },
      { n: 1850, bonus: 250, price: "19,99 \u20AC" },
      { n: 4800, bonus: 800, price: "49,99 \u20AC" },
      { n: 1e4, bonus: 2e3, price: "99,99 \u20AC" },
    ];
    function Io(e, s) {
      let a = e.replace(/\s*\(niv\. [^)]*\)\s*$/, "");
      if (!/par (point|niveau)/.test(a)) return a;
      const t = (r) => String(Math.round(r * 100) / 100).replace(".", ",");
      return (
        (a = a.replace(/(?<!sous )(?<!au-dessus de )([+-]?)(\d+(?:,\d+)?)(\s?)(%|PV|s\b|cible)(?! de base)/g, (r, l, n, o, d) => {
          const u = parseFloat(n.replace(",", ".")) * s;
          return l + t(u) + o + (d === "cible" && u > 1 ? "cibles" : d);
        })),
        a
          .replace(/,? par (point|niveau)(?! joué)( de la relique)?/g, "")
          .replace(/\s+/g, " ")
          .trim()
      );
    }
    function Xo(e, s, a) {
      return `<div class="rcp"><div class="rcp-n">${e} <small>${s}</small></div><div class="rcp-t">${a}</div></div>`;
    }
    function qi() {
      const e = [],
        s = Ut.filter((a) => me(a.id) > 0).map((a) => Xo(a.name, me(a.id) + "/" + a.max, Io(a.desc, me(a.id))));
      s.length && e.push('<div class="rcp-h">Toutes les tours</div>' + s.join(""));
      for (const a of Qe) {
        const t = Ss[a].filter((r) => re(a, r.id) > 0).map((r) => Xo(r.name, re(a, r.id) + "/" + r.max, Io(r.desc, re(a, r.id))));
        t.length && e.push(`<div class="rcp-h">${be[a].name}</div>` + t.join(""));
      }
      return e.length
        ? `<div class="tn">Bonus acquis</div><div class="rcp-list">${e.join("")}</div>`
        : `<div class="tn">Bonus acquis</div><p class="hint">Aucune comp\xE9tence pour l'instant. Touche un rond de l'arbre pour voir ce qu'il apporte.</p>`;
    }
    function Ai() {
      const e = ms.filter((s) => m.relics[s.id] && m.relics[s.id].lvl > 0).sort((s, a) => a.r - s.r);
      return e.length
        ? `<details class="recap" open><summary>R\xE9cap de tes reliques <small>${e.length}/${ms.length}</small></summary><div class="rcp-list">${e
            .map((s) => {
              const a = m.relics[s.id];
              return Xo(
                `<span style="color:${Ft[s.r].col};-webkit-text-stroke:.5px var(--ink)">\u25CF</span> ${s.name}`,
                "niv. " + a.lvl + "/" + mt(s.id),
                Io(s.desc, a.lvl),
              );
            })
            .join("")}</div></details>`
        : "";
    }
    function Ga(e) {
      const s = e
          ? `<div class="pull-res">${e.map((t, r) => `<div class="pcard" style="--rc:${Ft[t.rl.r].col};animation-delay:${r * 0.09}s"><div class="ricon">${tr(t.rl)}</div><div class="rname">${t.rl.name}</div><div class="ptag">${t.res === "new" ? "Nouveau !" : t.res === "dup" ? "+1 doublon" : "+" + Es(Ft[t.rl.r].conv) + " \xE9cailles"}</div></div>`).join("")}</div>`
          : "",
        a = Ft.map(
          (t, r) =>
            `<div class="rsec"><div class="tier-h"><span class="tier-b" style="--rc:${t.col}">${t.name}</span><small>${String(t.w).replace(".", ",")} % de chance</small></div><div class="rgrid">${ms
              .filter((l) => l.r === r)
              .map(Jl)
              .join("")}</div></div>`,
        ).join("");
      Ie(
        `<div class="top"><button class="btn back" data-nav="home" data-focus>\u2190 Menu</button><h2>Collection</h2></div>${Wt()}${da("relics")}
    <div class="gacha"><svg viewBox="0 0 64 48" class="chest"><rect x="6" y="20" width="52" height="24" rx="4" fill="#b06d36" stroke="#2f1d12" stroke-width="3"/><path d="M6 22c0-12 10-18 26-18s26 6 26 18z" fill="#c98547" stroke="#2f1d12" stroke-width="3"/><rect x="4" y="19" width="56" height="6" rx="2" fill="#ffc93c" stroke="#2f1d12" stroke-width="2.5"/><rect x="27" y="22" width="10" height="12" rx="2" fill="#ffc93c" stroke="#2f1d12" stroke-width="2.5"/><circle cx="32" cy="28" r="2" fill="#2f1d12"/></svg><div class="g-txt"><div class="tn">Coffre des reliques</div><div class="g-btns"><button class="btn go" data-pull="1" ${m.scales < jo ? "disabled" : ""}>\xD71 \xB7 ${ye.scale}${jo}</button><button class="btn go" data-pull="10" ${m.scales < Wo ? "disabled" : ""}>\xD710 \xB7 ${ye.scale}${Wo}</button></div><div class="g-btns"><button class="btn gem" data-pull="1" data-cur="gems" ${(m.gems || 0) < Vo ? "disabled" : ""}>\xD71 \xB7 ${ye.gem}${Vo}</button><button class="btn gem" data-pull="10" data-cur="gems" ${(m.gems || 0) < Fo ? "disabled" : ""}>\xD710 \xB7 ${ye.gem}${Fo}</button></div><div class="ts">L\xE9gendaire garanti dans ${er - (m.pity || 0)} tirages \xB7 le tirage \xD710 contient au moins un Rare.</div></div></div>
    ${Xe() ? `<div class="subfree"><span>\u2605 Bastion+ \xB7 tirage gratuit du jour</span><button class="btn go" data-act2="subpull" ${Ha() ? "" : "disabled"}>${Ha() ? "Ouvrir le coffre gratuitement" : "D\xE9j\xE0 ouvert \xB7 reviens demain"}</button></div>` : ""}
    ${s}
    <div class="stack">${a}</div>`,
        "relics",
      );
    }
    const Oo = 80,
      ar = "5,00 \u20AC",
      Es = (e) => (Xe() ? Math.round(e * 1.15) : e),
      Na = () => (Xe() ? Math.max(1, Math.min(10, m.autoDelay || 5)) : 10),
      Ha = () => Xe() && m.sub.relic !== la(),
      Xe = () => !!(m.sub && m.sub.on),
      Ua = () => Xe() && m.sub.claim !== la();
    function ti() {
      const e = Xe();
      return `<div class="subcard${e ? " on" : ""}"><div class="subh"><div class="subic"><svg viewBox="0 0 24 24" width="30" height="30"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.1 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" fill="#ffc93c" stroke="#2f1d12" stroke-width="2" stroke-linejoin="round"/></svg></div><div><div class="subt">Abonnement Bastion+</div><div class="subp">${ar} <small>/ mois</small></div></div></div><details class="subdet"><summary>Voir les avantages</summary><ul class="subl"><li><b>Vitesse \xD75</b> d\xE9bloqu\xE9e en partie</li><li><b>${Oo} gemmes par jour</b> \xE0 r\xE9cup\xE9rer</li><li><b>+15 % d'\xE9cailles</b> sur toutes les sources</li><li><b>1 tirage gratuit</b> du coffre des reliques par jour</li><li><b>1 qu\xEAte du jour</b> en plus</li><li><b>D\xE9lai du lancement auto</b> r\xE9glable (1 \xE0 10 s)</li><li><b>3 decks</b> enregistr\xE9s, changeables en un clic</li><li><b>Palier de d\xE9part tous les 25 vagues</b> en mode infini</li><li><b>Cadre et titre</b> Bastion+</li></ul></details>
    ${e ? `<button class="btn gem" data-act2="subclaim" ${Ua() ? "" : "disabled"}>${Ua() ? `R\xE9cup\xE9rer ${Oo} ${ye.gem} du jour` : "Gemmes du jour r\xE9cup\xE9r\xE9es \xB7 reviens demain"}</button><div class="subs">Abonnement actif</div><button class="btn small" data-act2="subtoggle">R\xE9silier</button>` : `<button class="btn go" data-act2="subtoggle">S'abonner \xB7 ${ar} / mois</button>`}
    <p class="note">Prototype : aucun paiement r\xE9el n'est branch\xE9, l'abonnement s'active et se r\xE9silie librement pour tester.</p></div>`;
    }
    function zo() {
      Ie(
        `<div class="top"><button class="btn back" data-nav="home" data-focus>\u2190 Menu</button><h2>Boutique</h2></div>${Wt()}
    ${ti()}
    <div class="gemshop"><div class="tier-h">Gemmes <small>la monnaie premium</small></div><div class="gempacks">${ei.map((e) => `<div class="gp"><div class="gpi">${ye.gem}</div><b>${e.n}</b><span>${e.bonus ? "+" + e.bonus + " offertes" : "&nbsp;"}</span><button class="btn" disabled>${e.price}</button></div>`).join("")}</div></div><div class="stack"><button class="btn" data-nav="relics">Voir mes reliques et le coffre</button></div>`,
        "shop",
      );
    }
    const Ut = [
        { id: "g1", name: "Forge commune", desc: "+3 % de d\xE9g\xE2ts pour toutes les tours, par point", max: 5, cost: 1, ic: "dmg" },
        {
          id: "g4",
          name: "Architecte",
          desc: "-3 % sur le prix de construction de toutes les tours, par point",
          max: 5,
          cost: 1,
          ic: "gold",
        },
        { id: "g2", name: "Longues-vues", desc: "+2 % de port\xE9e pour toutes les tours, par point", max: 5, cost: 1, ic: "rng" },
        { id: "g5", name: "Cristal renforc\xE9", desc: "+40 PV pour le cristal, par point", max: 5, cost: 1, ic: "cry" },
        { id: "g3", name: "Entra\xEEnement", desc: "+3 % de vitesse de tir pour toutes les tours, par point", max: 5, cost: 1, ic: "rate" },
        {
          id: "g6",
          name: "R\xE9cup\xE9ration",
          desc: "D\xE9molir un bloc sans tour le rend dans ta r\xE9serve (en bloc simple)",
          max: 1,
          cost: 3,
          ic: "blk",
        },
        { id: "g7", name: "Rempart", desc: "Le cristal subit 3 % de d\xE9g\xE2ts en moins, par point", max: 5, cost: 1, ic: "loot" },
        {
          id: "g1a",
          par: "g1",
          name: "Coup critique",
          desc: "2 % de chance par point que chaque tir fasse double d\xE9g\xE2ts",
          max: 5,
          cost: 2,
          ic: "star",
        },
        {
          id: "g1b",
          par: "g1",
          name: "Perce-armure",
          desc: "Les tours ignorent 2 % de l'armure des monstres, par point",
          max: 5,
          cost: 2,
          ic: "spec",
        },
        {
          id: "g4a",
          par: "g4",
          name: "Atelier",
          desc: "-3 % sur le prix du niveau 2 et -2,5 % sur le prix du niveau 3 des tours, par point",
          max: 5,
          cost: 2,
          ic: "gold",
        },
        {
          id: "g4b",
          par: "g4",
          name: "Revente",
          desc: "Vendre une tour rend 5 % de plus de ce qu'elle a co\xFBt\xE9, par point (60 % de base)",
          max: 4,
          cost: 2,
          ic: "gold",
        },
        {
          id: "g2a",
          par: "g2",
          name: "\u0152il de faucon",
          desc: "+4 % de d\xE9g\xE2ts contre les volants, par point",
          max: 5,
          cost: 2,
          ic: "rng",
        },
        {
          id: "g2b",
          par: "g2",
          name: "Tir de zone",
          desc: "+5 % de rayon pour les d\xE9g\xE2ts de zone, par point",
          max: 5,
          cost: 2,
          ic: "spec",
        },
        {
          id: "g5a",
          par: "g5",
          name: "R\xE9g\xE9n\xE9ration",
          desc: "Le cristal r\xE9cup\xE8re 0,25 PV par seconde, par point",
          max: 5,
          cost: 2,
          ic: "cry",
        },
        {
          id: "g5b",
          par: "g5",
          name: "Cristal vengeur",
          desc: "Le cristal fait +8 % de d\xE9g\xE2ts et a +3 % de port\xE9e, par point",
          max: 5,
          cost: 2,
          ic: "cry",
        },
        {
          id: "g3a",
          par: "g3",
          name: "Premier sang",
          desc: "+6 % de d\xE9g\xE2ts contre les monstres encore au-dessus de 90 % de leurs PV, par point",
          max: 5,
          cost: 2,
          ic: "dmg",
        },
        {
          id: "g3b",
          par: "g3",
          name: "Incantation rapide",
          desc: "Tous les sorts (souffle, gel, foudre, mur, renfort) se rechargent 4 % plus vite, par point",
          max: 5,
          cost: 2,
          ic: "rate",
        },
        {
          id: "g6a",
          par: "g6",
          name: "Fortification",
          desc: "Les tours pos\xE9es sur tes blocs font +4 % de d\xE9g\xE2ts, par point",
          max: 5,
          cost: 2,
          ic: "blk",
        },
        {
          id: "g6b",
          par: "g6",
          name: "Hauteurs",
          desc: "Les tours pos\xE9es sur les murs et le d\xE9cor ont +3 % de port\xE9e, par point",
          max: 5,
          cost: 2,
          ic: "rng",
        },
        {
          id: "g7a",
          par: "g7",
          name: "Sanctuaire glac\xE9",
          desc: "Les monstres \xE0 port\xE9e du cristal avancent 4 % moins vite, par point",
          max: 5,
          cost: 2,
          ic: "loot",
        },
        {
          id: "g7b",
          par: "g7",
          name: "Dernier rempart",
          desc: "Quand le cristal est sous 40 % de ses PV, les tours font +6 % de d\xE9g\xE2ts, par point",
          max: 5,
          cost: 2,
          ic: "star",
        },
      ],
      _a = (e) => {
        const s = Ut.find((a) => a.id === e.par);
        return Math.min(3, s.max);
      },
      me = (e) => (m.tree.gen && m.tree.gen[e]) || 0;
    let _t = [],
      Ya = [],
      qe = { x: 0, y: 0, z: 0.62 },
      ca = null;
    (function () {
      _t.push({ key: "hub", hub: 1, x: 0, y: 0 });
      const s = Qe.length;
      (Qe.forEach((t, r) => {
        const l = -Math.PI / 2 + (r * 2 * Math.PI) / s,
          n = Math.cos(l),
          o = Math.sin(l),
          d = -o,
          u = n,
          h = (p, y) => ({ x: n * p + d * y, y: o * p + u * y });
        _t.push(Object.assign({ key: t + "|label", label: 1, tp: t }, h(150, 0)));
        const c = (p, y, b, w) => {
          (_t.push(Object.assign({ key: t + "|" + p, tp: t, id: p, def: Ss[t].find((T) => T.id === p) }, h(y, b))),
            Ya.push([w, t + "|" + p]));
        };
        (c("n0", 225, 0, "hub"),
          c("n1", 300, -54, t + "|n0"),
          c("n2", 300, 54, t + "|n0"),
          c("n3", 382, -54, t + "|n1"),
          c("n4", 382, 54, t + "|n2"),
          c("n5", 468, -60, t + "|n3"),
          c("n6", 468, 60, t + "|n4"));
      }),
        Ut.filter((t) => !t.par).forEach((t, r) => {
          const l = -Math.PI / 2 + ((r + 0.5) * 2 * Math.PI) / s,
            n = r % 2 ? 132 : 112;
          (_t.push({ key: "gen|" + t.id, gen: 1, id: t.id, def: t, x: Math.cos(l) * n, y: Math.sin(l) * n }),
            Ya.push(["hub", "gen|" + t.id]),
            Ut.filter((o) => o.par === t.id).forEach((o, d) => {
              const u = l + (d ? 0.14 : -0.14),
                h = r % 2 ? 212 : 196;
              (_t.push({ key: "gen|" + o.id, gen: 1, id: o.id, def: o, x: Math.cos(u) * h, y: Math.sin(u) * h }),
                Ya.push(["gen|" + t.id, "gen|" + o.id]));
            }));
        }));
    })();
    const js = (e) => _t.find((s) => s.key === e),
      fa = (e) => (e.gen ? me(e.id) : e.hub || e.label ? 0 : re(e.tp, e.id));
    function Qa(e) {
      if (e.hub) return "full";
      if (e.gen) {
        const s = me(e.id);
        return e.def.par && me(e.def.par) < _a(e.def) ? "locked" : s >= e.def.max ? "full" : m.runes >= e.def.cost ? "buy" : "poor";
      }
      return !ct(e.tp) || ((e.id === "n1" || e.id === "n2") && re(e.tp, "n0") < 1) ? "locked" : tl(e.tp, e.def);
    }
    function Ri() {
      return Ut.reduce((e, s) => e + me(s.id) * s.cost, 0);
    }
    function si(e, s, a, t, r) {
      if (
        (e.save(),
        e.translate(a, t),
        (e.strokeStyle = r),
        (e.fillStyle = r),
        (e.lineWidth = 2.4),
        (e.lineCap = "round"),
        (e.lineJoin = "round"),
        s === "dmg")
      )
        (e.beginPath(),
          e.moveTo(-6, 6),
          e.lineTo(6, -6),
          e.moveTo(2, -6),
          e.lineTo(6, -6),
          e.lineTo(6, -2),
          e.moveTo(-6, 2),
          e.lineTo(-2, 6),
          e.stroke());
      else if (s === "rng") (e.beginPath(), e.arc(0, 0, 6, 0, 7), e.stroke(), D(e, 0, 0, 2), e.fill());
      else if (s === "rate")
        (e.beginPath(), e.moveTo(-6, -5), e.lineTo(-1, 0), e.lineTo(-6, 5), e.moveTo(1, -5), e.lineTo(6, 0), e.lineTo(1, 5), e.stroke());
      else if (s === "gold") (e.beginPath(), e.arc(0, 0, 6, 0, 7), e.stroke(), e.beginPath(), e.moveTo(0, -3), e.lineTo(0, 3), e.stroke());
      else if (s === "cry")
        (F(e, [
          [0, -7],
          [5, 0],
          [0, 7],
          [-5, 0],
        ]),
          e.stroke());
      else if (s === "blk") e.strokeRect(-5, -5, 10, 10);
      else if (s === "loot")
        (e.beginPath(),
          e.moveTo(-5, -2),
          e.lineTo(5, -2),
          e.lineTo(4, 6),
          e.lineTo(-4, 6),
          e.closePath(),
          e.stroke(),
          e.beginPath(),
          e.moveTo(-2, -2),
          e.lineTo(0, -6),
          e.lineTo(2, -2),
          e.stroke());
      else if (s === "star") {
        e.beginPath();
        for (let l = 0; l < 10; l++) {
          const n = -Math.PI / 2 + (l * Math.PI) / 5,
            o = l % 2 ? 3 : 7;
          e.lineTo(Math.cos(n) * o, Math.sin(n) * o);
        }
        (e.closePath(), e.fill());
      } else
        s === "spec" &&
          (e.beginPath(),
          e.arc(0, 0, 5, 0, 7),
          e.stroke(),
          e.beginPath(),
          e.moveTo(0, -8),
          e.lineTo(0, 8),
          e.moveTo(-8, 0),
          e.lineTo(8, 0),
          e.stroke());
      e.restore();
    }
    function Ws(e, s = 0) {
      if (!e.isConnected) return;
      const a = e.getContext("2d"),
        t = e.width,
        r = e.height,
        l = e._dpr || 1,
        n = qe.z;
      a.setTransform(1, 0, 0, 1, 0, 0);
      const o = a.createRadialGradient(t / 2, r / 2, 0, t / 2, r / 2, Math.max(t, r) * 0.8);
      (o.addColorStop(0, "#4a3368"),
        o.addColorStop(1, "#1e1430"),
        (a.fillStyle = o),
        a.fillRect(0, 0, t, r),
        a.setTransform(l * n, 0, 0, l * n, t / 2 - qe.x * n * l, r / 2 - qe.y * n * l));
      const d = es(9);
      for (let u = 0; u < 140; u++) {
        const h = d() * 7,
          c = 60 + d() * 520;
        ((a.fillStyle = `rgba(255,240,200,${0.15 + d() * 0.35})`), D(a, Math.cos(h) * c, Math.sin(h) * c, 1 + d() * 1.4), a.fill());
      }
      for (const u of [225, 382])
        ((a.strokeStyle = "rgba(255,220,150,.08)"), (a.lineWidth = 2), a.beginPath(), a.arc(0, 0, u, 0, 7), a.stroke());
      for (const [u, h] of Ya) {
        const c = js(u),
          p = js(h),
          y = Qa(p),
          b = fa(p) > 0;
        ((a.strokeStyle = Q),
          (a.lineWidth = b ? 9 : 7),
          a.beginPath(),
          a.moveTo(c.x, c.y),
          a.lineTo(p.x, p.y),
          a.stroke(),
          (a.strokeStyle = b ? "#ffc93c" : y === "locked" || y === "other" ? "#4b3e5e" : "#c9b993"),
          (a.lineWidth = b ? 5 : 3),
          a.stroke());
      }
      for (const u of _t) {
        if (u.label) {
          const V = ct(u.tp);
          (a.save(),
            V || (a.globalAlpha = 0.35),
            Ls(a, u.tp, 2, u.x, u.y + 14, 0, s, 0, 0.62),
            a.restore(),
            V ||
              (D(a, u.x, u.y - 6, 13),
              g(a, "#5d5070", 2.4),
              j(a, u.x - 6, u.y - 8, 12, 9, 2),
              g(a, "#e6dccb", 1.6),
              (a.strokeStyle = Q),
              (a.lineWidth = 2),
              a.beginPath(),
              a.arc(u.x, u.y - 8, 4, Math.PI, 0),
              a.stroke()));
          const L = V ? be[u.tp].short : "Boss " + (zt[u.tp] + 1);
          ((a.font = '900 14px "Nunito",sans-serif'),
            (a.textAlign = "center"),
            (a.lineWidth = 4),
            (a.lineJoin = "round"),
            (a.strokeStyle = Q),
            a.strokeText(L, u.x, u.y + 34),
            (a.fillStyle = V ? "#fff4dc" : "#b9adc9"),
            a.fillText(L, u.x, u.y + 34));
          continue;
        }
        if (u.hub) {
          (D(a, 0, 0, 36),
            g(a, "#2c1d3f", 3),
            a.save(),
            a.translate(0, 14),
            a.scale(0.62, 0.62),
            Pa(a, s, 0, 0, 2, 1, !1, !1),
            a.restore());
          continue;
        }
        const h = Qa(u),
          c = fa(u),
          p = u.def.max,
          y = u.id === "n5" || u.id === "n6",
          b = u.gen ? 17 : 19,
          w = !u.gen && !ct(u.tp);
        w && (a.save(), (a.globalAlpha = 0.45));
        const T = c >= p ? "#ffc93c" : c > 0 ? "#ffe9a6" : h === "buy" ? "#fff7e0" : h === "poor" ? "#d8ccb4" : "#5d5070";
        (ca === u.key &&
          ((a.strokeStyle = "#4fb4ec"),
          (a.lineWidth = 5),
          y
            ? F(a, [
                [u.x, u.y - b - 7],
                [u.x + b + 7, u.y],
                [u.x, u.y + b + 7],
                [u.x - b - 7, u.y],
              ])
            : D(a, u.x, u.y, b + 6),
          a.stroke()),
          y
            ? F(a, [
                [u.x, u.y - b - 3],
                [u.x + b + 3, u.y],
                [u.x, u.y + b + 3],
                [u.x - b - 3, u.y],
              ])
            : D(a, u.x, u.y, b),
          g(a, T, 2.6),
          u.gen && (D(a, u.x, u.y, b - 4), (a.strokeStyle = "rgba(47,29,18,.35)"), (a.lineWidth = 1.2), a.stroke()));
        const M = u.gen ? u.def.ic : u.id === "n0" ? "dmg" : u.id === "n1" ? "rng" : u.id === "n2" ? "rate" : y ? "star" : "spec";
        si(a, M, u.x, u.y, h === "locked" || h === "other" ? "#a99cbc" : Q);
        const C = c + "/" + p;
        ((a.font = '900 12px "Nunito",sans-serif'),
          (a.textAlign = "center"),
          (a.lineWidth = 3.5),
          (a.strokeStyle = Q),
          a.strokeText(C, u.x, u.y + b + 14),
          (a.fillStyle = c > 0 ? "#ffc93c" : "#e6dccb"),
          a.fillText(C, u.x, u.y + b + 14),
          w && a.restore());
      }
    }
    const or = () => {
      const e = document.getElementById("treeCv") || document.querySelector("#sheet canvas.tree") || null,
        s = document.getElementById("sheet");
      return parseFloat(s && s.style.zoom) || 1;
    };
    function Go() {
      const e = document.getElementById("tinfo");
      if (!e) return;
      const s = ca && js(ca);
      if (!s) {
        e.innerHTML = "";
        return;
      }
      if (s.hub) {
        e.innerHTML = `<div class="tn">C\u0153ur du bastion</div><p class="hint">Le centre de l'arbre. Les comp\xE9tences autour du cristal profitent \xE0 toutes les tours.</p>`;
        return;
      }
      if (s.label && !ct(s.tp)) {
        e.innerHTML = `<div class="tn">${be[s.tp].name}</div><p class="hint" style="color:var(--red)">Tour pas encore d\xE9bloqu\xE9e : ${ro(s.tp).toLowerCase()} (${ue[zt[s.tp]].name}). Ses comp\xE9tences se d\xE9bloqueront en m\xEAme temps.</p>`;
        return;
      }
      if (s.label) {
        const h = m.ranks[s.tp];
        e.innerHTML = `<div class="tn">${be[s.tp].name}</div><p class="hint">Rang ${h}/${Jt} \xB7 ${un(s.tp)}/20 runes dans cette branche. Monte le rang dans l'\xE9cran des tours.</p>`;
        return;
      }
      const a = Qa(s),
        t = fa(s),
        r = s.def,
        l = s.id === "n5" || s.id === "n6",
        n = s.gen ? "Bonus pour toutes les tours" : be[s.tp].name + (l ? " \xB7 un seul choix" : ""),
        o =
          a === "locked"
            ? !s.gen && !ct(s.tp)
              ? `Tour pas encore d\xE9bloqu\xE9e : ${ro(s.tp).toLowerCase()}.`
              : !s.gen && (m.ranks[s.tp] || 1) < ho(s.id) && fa(s) === 0
                ? `Il faut que la tour soit au niveau ${ho(s.id)} (elle est au niveau ${m.ranks[s.tp] || 1}).`
                : s.gen
                  ? `Il faut ${_a(s.def)} point${_a(s.def) > 1 ? "s" : ""} dans \xAB ${Ut.find((h) => h.id === s.def.par).name} \xBB.`
                  : s.id === "n1" || s.id === "n2"
                    ? "Prends d'abord \xAB Puissance \xBB de cette tour."
                    : s.id === "n3" || s.id === "n4"
                      ? "Il faut 3 points dans les trois premi\xE8res comp\xE9tences de cette tour."
                      : "Il faut 2 points dans les comp\xE9tences du palier 2."
            : a === "other"
              ? "Tu as d\xE9j\xE0 choisi l'autre comp\xE9tence finale de cette tour."
              : "",
        d =
          a === "buy"
            ? `<button class="btn green" data-buyn="${s.key}">+1 point \xB7 ${ye.rune} ${r.cost}</button>`
            : a === "poor"
              ? `<button class="btn" disabled>${ye.rune} ${r.cost} runes</button>`
              : a === "full"
                ? '<button class="btn" disabled>Maximum atteint</button>'
                : '<button class="btn" disabled>Verrouill\xE9</button>';
      let u = "";
      if (t > 0) {
        const h = rr(s),
          c = nr(h.runes),
          p = h.names.filter((y) => y !== r.name);
        u = `<button class="btn tremove" data-tremove="${s.key}" ${(m.gems || 0) < c ? "disabled" : ""}>\u21BA Retirer \xB7 +${h.runes} ${ye.rune} \xB7 ${ye.gem}${c}</button>${p.length ? `<p class="hint small">Retire aussi : ${p.join(", ")}.</p>` : ""}`;
      }
      e.innerHTML = `<div class="tn">${r.name} <small>${t}/${r.max}</small></div><div class="ts">${n}</div><p class="hint">${r.desc}</p>${o ? `<p class="hint" style="color:var(--red)">${o}</p>` : ""}<div class="tbtns2">${d}${u}</div>`;
    }
    function ai(e) {
      if (e && Qe.includes(e)) {
        const t = js(e + "|label");
        ((qe.x = t.x * 1.9), (qe.y = t.y * 1.9), (qe.z = 0.85), (ca = null));
      }
      Ie(
        `<div class="top"><button class="btn back" data-nav="home">\u2190 Menu</button><h2>Collection</h2></div><div class="cur-wrap">${Wt()}</div>${da("tree")}
    <div class="treewrap"><canvas id="treecv"></canvas><div class="zoom"><button class="btn small" data-z="1" aria-label="Zoomer">+</button><button class="btn small" data-z="-1" aria-label="D\xE9zoomer">\u2212</button><button class="btn small" data-z="0" aria-label="Recentrer">\u25CE</button></div></div><div class="tinfo" id="tinfo"></div>`,
        "tree",
      );
      const s = document.getElementById("treecv"),
        a = Math.min(window.devicePixelRatio || 1, 2);
      ((s._dpr = a), (s.width = Math.round(s.clientWidth * a)), (s.height = Math.round(s.clientHeight * a)), oi(s), Ws(s), Go());
    }
    function oi(e) {
      const s = new Map();
      let a = 0,
        t = null;
      const r = (o, d, u) => Math.max(d, Math.min(u, o)),
        l = () => {
          const d = Math.hypot(qe.x, qe.y);
          d > 560 && ((qe.x *= 560 / d), (qe.y *= 560 / d));
        };
      (e.addEventListener("pointerdown", (o) => {
        try {
          e.setPointerCapture(o.pointerId);
        } catch {}
        if ((s.set(o.pointerId, { x: o.clientX, y: o.clientY }), (a = 0), s.size === 2)) {
          const [d, u] = [...s.values()];
          t = { d: Math.hypot(d.x - u.x, d.y - u.y) || 1, z: qe.z };
        }
      }),
        e.addEventListener("pointermove", (o) => {
          if (!s.has(o.pointerId)) return;
          const d = s.get(o.pointerId),
            u = or(),
            h = (o.clientX - d.x) / u,
            c = (o.clientY - d.y) / u;
          if ((s.set(o.pointerId, { x: o.clientX, y: o.clientY }), s.size === 2 && t)) {
            const [p, y] = [...s.values()];
            ((qe.z = r((t.z * Math.hypot(p.x - y.x, p.y - y.y)) / t.d, 0.35, 1.7)), (a = 99));
          } else ((qe.x -= h / qe.z), (qe.y -= c / qe.z), (a += Math.abs(h) + Math.abs(c)), l());
          Ws(e);
        }));
      const n = (o) => {
        if (s.size === 1 && a < 8 && s.has(o.pointerId)) {
          const d = e.getBoundingClientRect(),
            u = or(),
            h = qe.x + (o.clientX - d.left - d.width / 2) / u / qe.z,
            c = qe.y + (o.clientY - d.top - d.height / 2) / u / qe.z;
          let p = null,
            y = 30 / Math.min(1, qe.z);
          for (const b of _t) {
            const w = Math.hypot(b.x - h, b.y - (b.label ? b.y + 0 : b.y) - c + b.y),
              T = Math.hypot(b.x - h, b.y - c);
            T < y && ((y = T), (p = b));
          }
          ((ca = p ? p.key : null), Ws(e), Go());
        }
        (s.delete(o.pointerId), s.size < 2 && (t = null));
      };
      (e.addEventListener("pointerup", n),
        e.addEventListener("pointercancel", (o) => {
          (s.delete(o.pointerId), (t = null));
        }),
        e.addEventListener(
          "wheel",
          (o) => {
            (o.preventDefault(), (qe.z = r(qe.z * (o.deltaY < 0 ? 1.12 : 0.89), 0.35, 1.7)), Ws(e));
          },
          { passive: !1 },
        ));
    }
    const nr = (e) => e * 2;
    function rr(e) {
      const s = [];
      let a = 0;
      if (e.gen) {
        const n = Object.assign({}, m.tree.gen);
        n[e.id] = 0;
        let o = !0;
        for (; o; ) {
          o = !1;
          for (const d of Ut) d.par && n[d.id] > 0 && n[d.par] < _a(d) && ((n[d.id] = 0), (o = !0));
        }
        for (const d of Ut) {
          const u = me(d.id) - n[d.id];
          u > 0 && (s.push(d.name), (a += u * d.cost));
        }
        return { runes: a, names: s, apply: () => Object.assign(m.tree.gen, n) };
      }
      const t = e.tp,
        r = Object.assign({}, m.tree[t]);
      r[e.id] = 0;
      const l = (n) => Ss[t].filter((o) => co(o) === n).reduce((o, d) => o + r[d.id], 0);
      (r.n0 < 1 && ((r.n1 = 0), (r.n2 = 0)), l(1) < 3 && ((r.n3 = 0), (r.n4 = 0)), l(2) < 2 && ((r.n5 = 0), (r.n6 = 0)));
      for (const n of Ss[t]) {
        const o = re(t, n.id) - r[n.id];
        o > 0 && (s.push(n.name), (a += o * n.cost));
      }
      return { runes: a, names: s, apply: () => Object.assign(m.tree[t], r) };
    }
    function lr() {
      const e = document.getElementById("treecv");
      (e && Ws(e), Go(), Qn());
      const s = $e.querySelector(".cur-wrap");
      s && (s.innerHTML = Wt());
    }
    const ha = () => m.prog[le.id],
      pa = () => m.stars[le.id],
      vs = (e) => e === 0 || m.prog[ue[e - 1].id].facile >= ue[e - 1].levels.length;
    function ma(e) {
      ((le = ue[e]), (We = le.levels), (m.lastBiome = e), ys(_e) || (_e = "facile"));
    }
    const gt =
        '<svg class="ic" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="3" fill="#8a6a48" stroke="#000" stroke-width="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="#000" stroke-width="2.2"/></svg>',
      No = (e) => ue.every((s) => m.prog[s.id][e] >= s.levels.length),
      ir = (e) => {
        const s = ue.indexOf(le);
        return s <= 0 || m.prog[ue[s - 1].id][e] >= ue[s - 1].levels.length;
      };
    let _e = m.lastDiff && ys(m.lastDiff) ? m.lastDiff : "facile";
    function ys(e) {
      return e === "facile" || (e === "normal" && No("facile") && ir("normal")) || (e === "difficile" && No("normal") && ir("difficile"));
    }
    const ni = (e, s) => ys(e) && s <= ha()[e],
      dr = (e) =>
        `<span class="stars">${[0, 1, 2].map((s) => `<svg class="st${s < e ? " on" : ""}" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" stroke="#000" stroke-width="2" stroke-linejoin="round"/></svg>`).join("")}</span>`;
    function Ho(e, s, a = le) {
      const t = a.levels[s],
        r = wa(t.map),
        l = e.getContext("2d"),
        n = e.width / de;
      (l.setTransform(1, 0, 0, 1, 0, 0), l.drawImage(bn(r.base, t.th, r.cry, n, r.deco, r.gv), 0, 0), l.setTransform(n, 0, 0, n, 0, 0));
      for (const o in r.portalCells) for (const d of r.portalCells[o]) (A(l, oe(d), ae(d), 12, 12), g(l, "#2b1747", 2.5));
      if ((Pa(l, 0, r.cry.x, r.cry.y + 6, 0, 1, !1, !1), t.boss)) {
        const o = {
          type: a.roster.drake || "drake",
          x: r.cry.x + 10,
          y: r.cry.y - 110,
          face: -1,
          seed: 1,
          hp: 1,
          max: 1,
          state: "walk",
          ox: 0,
          oy: 0,
          slowT: 0,
          atkT: 0,
        };
        Ps(l, o, 0);
      }
      Fn(l, 0, t.th);
    }
    function ri(e) {
      const s = J[e],
        a = (t) => (t > 1 ? "+" : "") + Math.round((t - 1) * 100) + " %";
      return e === "facile"
        ? `${s.blocks} blocs au d\xE9part et par vague \xB7 cristal ${Math.round(pt.hp * s.cry)} PV \xB7 r\xE9compenses \xD71`
        : `Max ${s.maxPer} tours de chaque type \xB7 monstres ${a(s.count)} \xB7 vie ${a(s.hp / J.facile.hp)} \xB7 r\xE9compenses \xD7${String(ln[e]).replace(".", ",")}`;
    }
    function Uo() {
      ys(_e) || (_e = "facile");
      const e = _e,
        s = We.map((a, t) => {
          const r = ni(e, t),
            l = t < ha()[e],
            n = (pa()[e] || [])[t] || 0,
            o = Object.keys(wa(a.map).portalCells).length;
          return `<button class="lvl${r ? "" : " locked"}${a.boss ? " boss" : ""}" data-level="${t}" ${r ? "" : "disabled"}><canvas data-thumb="${t}" width="72" height="96"></canvas><span class="lt"><span class="lnum">${a.boss ? "Boss" : "Niveau " + (t + 1)}</span><span class="ln">${a.name}</span><span class="ls">${qa(t, e)} vagues \xB7 ${o} portail${o > 1 ? "s" : ""}</span></span><span class="lr">${r ? (l ? dr(n) : '<span class="new">Nouveau</span>') : gt}</span></button>`;
        }).join("");
      (Ie(
        `<div class="top"><button class="btn back" data-nav="biomes">\u2190 Biomes</button><h2>${le.name}</h2></div><details class="lore"><summary>Histoire</summary><p class="hint">${le.intro}</p></details><div class="tabs">${Ot.map((a) => `<button class="tab${a === e ? " on" : ""}" data-seld="${a}" ${ys(a) ? "" : "disabled"}>${ys(a) ? "" : gt}${J[a].label}</button>`).join("")}</div>
    ${e === "facile" ? "" : `<p class="note">${ri(e)}</p>`}
    <div class="trail">${s}</div>
    ${(() => {
      const a = Ot.findIndex((t) => !ys(t));
      return a > 0 ? `<p class="note">Termine tous les biomes en ${J[Ot[a - 1]].label} pour d\xE9bloquer ${J[Ot[a]].label}.</p>` : "";
    })()}`,
        "biome",
      ),
        $e.querySelectorAll("canvas[data-thumb]").forEach((a) => Ho(a, +a.dataset.thumb)));
    }
    function li() {
      const e = ue
        .map((s, a) => {
          const t = vs(a),
            r = m.prog[s.id],
            l = s.levels.length;
          return `<button class="lvl biome${t ? "" : " locked"}" data-biome="${a}" ${t ? "" : "disabled"}><canvas data-bthumb="${a}" width="72" height="96"></canvas><span class="lt"><span class="lnum">Biome ${a + 1}</span><span class="ln">${s.name}</span><span class="ls">${t ? `<span style="color:#c98a00">\u2605</span> ${Ot.reduce((n, o) => n + (m.stars[s.id][o] || []).reduce((d, u) => d + (u || 0), 0), 0)}/${l * 9}` : "Termine le biome pr\xE9c\xE9dent"}</span></span><span class="lr">${t ? "" : gt}</span></button>`;
        })
        .join("");
      (Ie(
        `<div class="top"><button class="btn back" data-nav="home">\u2190 Menu</button><h2>Biomes</h2></div><div class="trail">${e}</div>`,
        "biomes",
      ),
        $e.querySelectorAll("canvas[data-bthumb]").forEach((s) => {
          const a = +s.dataset.bthumb;
          Ho(s, vs(a) ? Math.min(m.prog[ue[a].id].facile, ue[a].levels.length - 1) : 0, ue[a]);
        }));
    }
    function ii(e) {
      const s = We[e],
        a = Object.keys(wa(s.map).portalCells).length,
        t = (pa()[_e] || [])[e] || 0;
      (Ie(
        `<div class="top"><button class="btn back" data-nav="biome">\u2190 Carte</button><h2>${s.boss ? "Boss" : "Niveau " + (e + 1)}</h2></div><canvas class="thumb-big" data-thumb="${e}" width="360" height="480"></canvas><h2 style="font-size:28px;color:${s.boss ? "var(--red)" : "var(--gold)"}">${s.name}</h2><p>${s.story}</p><div class="enemy-list"><span class="chip">${J[_e].label}</span><span class="chip">${qa(e, _e)} vagues</span><span class="chip">${a} portail${a > 1 ? "s" : ""}</span><span class="chip">${Sn(e, _e)} pi\xE8ces au d\xE9part</span><span class="chip">${J[_e].blocks} bloc${J[_e].blocks > 1 ? "s" : ""} par vague</span>${e < ha()[_e] ? `<span class="chip">Meilleur : ${t}/3 \xE9toiles</span>` : ""}${t < 3 ? '<span class="chip">3 \xE9toiles : +5 gemmes</span>' : ""}</div>
    ${xo()}
    ${Ea()}
    <button class="btn go big" data-play="${e}" data-focus>Lancer le niveau</button>`,
        "level",
      ),
        $e.querySelectorAll("canvas[data-thumb]").forEach((r) => Ho(r, +r.dataset.thumb)));
    }
    function di() {
      const e = Object.keys(i.cleared).length;
      Ie(
        `<h2>Pause</h2><p>${i.endless ? "Mode infini \xB7 " : ""}${We[Rt].name} \xB7 vague ${i.wave}${i.endless ? "" : "/" + i.waves.length} \xB7 ${e} vague${e > 1 ? "s" : ""} repouss\xE9e${e > 1 ? "s" : ""}.</p><div class="stack"><button class="btn go" data-act2="resume" data-focus>Reprendre</button><button class="btn" data-act2="restart">Recommencer</button>${i.endless ? '<button class="btn green" data-act2="esave">Quitter et reprendre plus tard</button>' : ""}<button class="btn" data-act2="quit">${i.endless ? "Abandonner la partie" : "Abandonner le niveau"}</button><button class="btn" data-act2="tuto">Revoir le tuto</button>${!i.endless && ne !== "facile" ? '<button class="btn" data-act2="rules">Revoir les r\xE8gles</button>' : ""}</div>
  ${Lr()}
  <p class="note">${i.endless ? (mr() ? "Ta partie est sauvegard\xE9e telle quelle." : "Une vague est en cours : tu reprendras au d\xE9but de cette vague, avec ce que tu avais \xE0 ce moment-l\xE0.") + " Abandonner ou recommencer ne donne aucune r\xE9compense." : "Abandonner ou recommencer ne donne aucune r\xE9compense."}</p>`,
        "pause",
      );
    }
    function _o() {
      (Vt(), (i.paused = !1));
    }
    $e.addEventListener("click", async (e) => {
      const s = e.target.closest("[data-tower]");
      if (s && !e.target.closest("button")) {
        Eo(s.dataset.tower);
        return;
      }
      const a = e.target.closest("[data-spellcard]");
      if (a && !e.target.closest("button")) {
        Bo(a.dataset.spellcard);
        return;
      }
      const t = e.target.closest("button");
      if (!t || t.disabled) return;
      if (t.dataset.nav) {
        const l = t.dataset.nav;
        l === "home"
          ? Ia()
          : l === "options"
            ? Hl()
            : l === "biomes"
              ? li()
              : l === "diff" || l === "biome"
                ? Uo()
                : l === "armory"
                  ? Ao()
                  : l === "spells"
                    ? Ro()
                    : l === "deck"
                      ? Ul()
                      : l === "endless"
                        ? Os() && Ko()
                        : l === "shop"
                          ? zo()
                          : l === "relics"
                            ? Ga()
                            : l === "quests"
                              ? Fa()
                              : l === "ency"
                                ? yr()
                                : l === "tree" && ai(t.dataset.type);
        return;
      }
      if (t.dataset.biome) {
        (ma(+t.dataset.biome), he(), Uo());
        return;
      }
      if (t.dataset.seld) {
        ((_e = t.dataset.seld), (m.lastDiff = _e), he(), Uo());
        return;
      }
      if (t.dataset.level) {
        ii(+t.dataset.level);
        return;
      }
      if (t.dataset.endless) {
        (Vt(), Yo(null, bt));
        return;
      }
      if (t.dataset.play) {
        (Vt(), As(_e, +t.dataset.play));
        return;
      }
      if (t.dataset.qd) {
        Fl(t.dataset.qd);
        return;
      }
      if (t.dataset.qa) {
        Il(t.dataset.qa);
        return;
      }
      if (t.dataset.pull) {
        Zl(+t.dataset.pull, t.dataset.cur || "scales");
        return;
      }
      if (t.dataset.relup) {
        const l = t.dataset.relup,
          n = m.relics[l],
          o = mt(l);
        if (n && n.lvl < o && n.cp >= bs(n.lvl, l)) {
          for (; n.lvl < o && n.cp >= bs(n.lvl, l); ) ((n.cp -= bs(n.lvl, l)), n.lvl++);
          he();
          const d = xe.scrollTop;
          (Ga(), (xe.scrollTop = d));
        }
        return;
      }
      if (t.dataset.tremove) {
        const l = js(t.dataset.tremove);
        if (!l || fa(l) <= 0) return;
        const n = rr(l),
          o = nr(n.runes);
        if ((m.gems || 0) < o) return;
        if (!t.classList.contains("armed")) {
          (t.classList.add("armed"), (t.innerHTML = `Touche encore : +${n.runes} ${ye.rune}`));
          return;
        }
        (n.apply(), (m.gems -= o), (m.runes += n.runes), he(), lr());
        return;
      }
      if (t.dataset.srank) {
        const l = t.dataset.srank;
        if (!Da(l)) return;
        const n = Tt(l);
        if (n < Rs && m.scales >= ea(n)) {
          ((m.scales -= ea(n)), (m.spellRanks[l] = n + 1), he());
          const o = xe.scrollTop;
          (t.dataset.info ? Bo(l) : Ro(), (xe.scrollTop = o));
        }
        return;
      }
      if (t.dataset.sreset) {
        const l = t.dataset.sreset,
          n = To(l),
          o = ta(l);
        if (Tt(l) <= 1 || (m.gems || 0) < o) return;
        if (!t.classList.contains("armed")) {
          (t.classList.add("armed"), (t.innerHTML = `Touche encore : +${n} ${ye.scale}`));
          return;
        }
        ((m.gems -= o), (m.scales += n), (m.spellRanks[l] = 1), he());
        const d = xe.scrollTop;
        (t.dataset.info ? Bo(l) : Ro(), (xe.scrollTop = d));
        return;
      }
      if (t.dataset.rreset) {
        const l = t.dataset.rreset,
          n = rn(l),
          o = io(l);
        if (m.ranks[l] <= 1 || (m.gems || 0) < o) return;
        if (!t.classList.contains("armed")) {
          (t.classList.add("armed"), (t.innerHTML = `Touche encore : +${n} ${ye.scale}`));
          return;
        }
        ((m.gems -= o), (m.scales += n), (m.ranks[l] = 1), he());
        const d = xe.scrollTop;
        (Ao(), (xe.scrollTop = d));
        return;
      }
      if (t.dataset.rank) {
        const l = t.dataset.rank;
        if (!ct(l)) return;
        const n = m.ranks[l];
        n < Jt && m.scales >= $s[n] && ((m.scales -= $s[n]), m.ranks[l]++, he(), Ao());
        return;
      }
      if (t.dataset.buyn) {
        const l = js(t.dataset.buyn);
        l && Qa(l) === "buy" && ((m.runes -= l.def.cost), l.gen ? m.tree.gen[l.id]++ : m.tree[l.tp][l.id]++, he(), lr());
        return;
      }
      if (t.dataset.z !== void 0) {
        const l = +t.dataset.z;
        l === 0 ? (qe = { x: 0, y: 0, z: 0.62 }) : (qe.z = Math.max(0.35, Math.min(1.7, qe.z * (l > 0 ? 1.25 : 0.8))));
        const n = document.getElementById("treecv");
        n && Ws(n);
        return;
      }
      const r = t.dataset.act2;
      if (r === "discord")
        try {
          window.open(Kn, "_blank", "noopener");
        } catch {
          location.href = Kn;
        }
      else if (r === "reset") {
        if (!t.classList.contains("armed")) {
          (t.classList.add("armed"), (t.textContent = "Touche encore pour tout effacer"));
          return;
        }
        try {
          localStorage.removeItem("bastion3-meta");
        } catch {}
        (uo(), he());
        try {
          cloudReset();
        } catch {}
        ((_e = "facile"), Ia());
      } else if (r === "resume") _o();
      else if (r === "subtoggle") {
        ((m.sub = m.sub || {}), (m.sub.on = !m.sub.on), !m.sub.on && m.speed === 5 && (m.speed = 1), he());
        const l = xe.scrollTop;
        (zo(), (xe.scrollTop = l));
      } else if (r === "subpull") {
        if (Ha()) {
          ((m.sub.relic = la()), Ue("pull", 1));
          const l = [sr(0)];
          (he(), Ga(l));
        }
      } else if (r === "subclaim") {
        if (Ua()) {
          ((m.sub.claim = la()), (m.gems = (m.gems || 0) + Oo), he());
          const l = xe.scrollTop;
          (zo(), (xe.scrollTop = l));
        }
      } else if (r === "qpage") {
        Ht = +t.dataset.p;
        const l = xe.scrollTop;
        (Fa(), (xe.scrollTop = l));
      } else if (r === "deckfold") {
        is = !is;
        try {
          localStorage.setItem("bdd-deckfold", is ? "1" : "0");
        } catch {}
        const l = document.getElementById("deckWrap");
        l && ((l.innerHTML = wo(l.dataset.fo === "1")), ja(l));
      } else if (r === "deckslot") {
        if (Xe()) {
          ((m.deckIdx = +t.dataset.i), he());
          const l = document.getElementById("deckWrap");
          l && ((l.innerHTML = wo(l.dataset.fo === "1")), ja(l));
        }
      } else if (r === "deck") Al(t.dataset.id);
      else if (r === "spell") {
        ((m.spell = t.dataset.id), he(), t.parentElement.querySelectorAll(".spl").forEach((o) => o.classList.toggle("on", o === t)));
        const l = Y("#spellDesc"),
          n = He[t.dataset.id];
        l &&
          (l.innerHTML = `<b>${n.full}</b> \xB7 rang ${Tt(t.dataset.id)} \xB7 recharge ${n.cd} s. ${n.desc} ${ds[t.dataset.id].lab} : <b>${Bs(t.dataset.id)}</b>.`);
      } else if (r === "mtoggle")
        ((m.musicOn = m.musicOn === !1),
          he(),
          ao.applyVol(),
          (t.textContent = m.musicOn === !1 ? "\u266A Musique : coup\xE9e" : "\u266A Musique : activ\xE9e"));
      else if (r === "rules") Dn();
      else if (r === "tipok") {
        ((m.tips[t.dataset.k] = 1), he());
        const l = t.closest(".tip");
        l && l.remove();
      } else if (r === "tuto") {
        if (!t.classList.contains("armed")) {
          (t.classList.add("armed"), (t.textContent = "Touche encore : la partie en cours sera perdue"));
          return;
        }
        (Vt(), (m.tutoDone = 0), (Jo = !0), ma(0), As("facile", 0));
      } else if (r === "spec") {
        const l = +t.dataset.i,
          n = i.towers[l];
        if (!n || n.lvl !== 2 || !zs()) return;
        const o = yt(n.type, 3);
        if (i.gold < o || (Se && n.o !== Gt())) return;
        (Se && Se.me === "guest" && coopCmd({ c: "spec", i: l, s: +t.dataset.s }),
          Ue("up"),
          (i.gold -= o),
          (n.lvl = 3),
          (n.spec = +t.dataset.s),
          (n.invest += o),
          _o(),
          (ve = ""),
          je(),
          Ge(!0),
          at(oe(l), ae(l) - 20, ts[n.spec], 24, 90, 3),
          fe(oe(l), ae(l) - 50, Ma[n.type][n.spec - 1].name + " !", ts[n.spec], 15));
      } else if (r === "restart") {
        if (!t.classList.contains("armed")) {
          (t.classList.add("armed"), (t.textContent = "Touche encore pour recommencer"));
          return;
        }
        (Vt(), i.endless ? Yo([ue.indexOf(le), Rt], i.estart || 0) : As(ne, Rt));
      } else if (r === "quit") (Vt(), Ka(!1, !0));
      else if (r === "esave") (mr() && Qo(), (i.paused = !0), Ko());
      else if (r === "eresume") fi();
      else if (r === "ency") {
        ga = +t.dataset.k;
        const l = xe.scrollTop;
        (yr(), (xe.scrollTop = l));
      } else if (r === "ecash") (Vt(), Ka(!1, !1, !0));
      else if (r === "estart") ((bt = +t.dataset.w), Ko());
      else if (r === "enew") {
        if (!t.classList.contains("armed")) {
          (t.classList.add("armed"), (t.textContent = "Touche encore : la partie sauvegard\xE9e sera perdue"));
          return;
        }
        (delete m.eSave, he(), Vt(), Yo());
      }
    });
    function ui(e) {
      const s = ci(e);
      return ((s.hp *= 1.25), s);
    }
    function ci(e) {
      if (e <= 10) return { name: "Facile", hp: 0.85, count: J.facile.count, speed: J.facile.speed, rw: 1 };
      if (e <= 20) return { name: "Normal", hp: J.normal.hp, count: J.normal.count, speed: J.normal.speed, rw: 1.5 };
      if (e <= 30) return { name: "Difficile", hp: J.difficile.hp, count: J.difficile.count, speed: J.difficile.speed, rw: 2.2 };
      const s = e - 30;
      return {
        name: "Difficile +" + s,
        hp: J.difficile.hp * Math.pow(1.06, s),
        count: Math.min(4, J.difficile.count * (1 + 0.02 * s)),
        speed: Math.min(2.5, J.difficile.speed + ((2.5 - J.difficile.speed) * s) / 70),
        rw: 2.2 + 0.03 * s,
      };
    }
    function ur() {
      const e = (t) => le.roster[t] || t,
        s = (t) => t.map((r) => Object.assign({}, r, { t: e(r.t) })),
        a = [];
      for (let t = 1; t <= 400; t++) {
        const r = lo[(t - 1) % 20].filter((l) => l.t !== "dragon" && l.t !== "drake").map((l) => Object.assign({}, l));
        (t % 10 === 0
          ? r.push(te("drake", 1 + Math.floor(t / 50), 6, 6))
          : t % 5 === 0 && r.push(te("dragon", 1 + Math.floor(t / 30), 4, 4)),
          r.length || r.push(te("gob", 10, 0.6)),
          a.push({ groups: s(r), str: 1 + Math.round(t * 0.6), ph: ui(t) }));
      }
      return a;
    }
    const cr = (e) => 200 + 60 * e,
      fr = (e) => Math.max(0.5, 1 - e / 200),
      hr = () => {
        const e = m.endless || {};
        return Math.max(e.best || 0, e.facile || 0, e.normal || 0, e.difficile || 0);
      };
    let bt = 0;
    function Yo(e, s = 0) {
      const a = [];
      ue.forEach((l, n) => l.levels.forEach((o, d) => a.push([n, d])));
      const [t, r] = e || a[(Math.random() * a.length) | 0];
      if (
        (ma(t),
        As("facile", r),
        (i.endless = !0),
        (i.estart = s),
        (i.hand = []),
        (i.pick = -1),
        Aa(2),
        (i.waves = ur()),
        (i.gold = cr(s)),
        s > 0)
      ) {
        ((i.wave = s), (i.started = !0));
        for (let l = 1; l <= s; l++) i.done[l] = !0;
        Aa(s);
      }
      ((Y("#wtot").textContent = "/\u221E"),
        (ve = ""),
        je(),
        Ge(!0),
        os(s ? "Mode infini \xB7 d\xE9part vague " + (s + 1) : "Mode infini \xB7 " + We[r].name),
        Qo());
    }
    const pr = () => {
        let e = 0;
        for (const s of Object.keys(i.cleared)) {
          const a = i.waves[+s - 1];
          a && (e += (4 + a.str) * a.ph.rw);
        }
        return Es(Math.round(e * 0.6 * fr(i.estart || 0)));
      },
      mr = () => !i.enemies.length && !i.queue.length;
    function Qo() {
      if (Oe || !i.endless || i.over) return;
      const e = [];
      for (let s = 0; s < Be; s++) Ee[s] && e.push([s, vt[s]]);
      ((m.eSave = {
        bi: ue.indexOf(le),
        L: Rt,
        gold: Math.floor(i.gold),
        wave: i.wave,
        cleared: Object.keys(i.cleared).length,
        start: i.estart || 0,
        cry: { hp: Math.ceil(i.crystal.hp), max: i.crystal.max, lvl: i.crystal.lvl },
        towers: Object.entries(i.towers).map(([s, a]) => [
          +s,
          a.type,
          a.lvl,
          a.invest,
          a.mode,
          Math.round(a.dmg || 0),
          a.kills || 0,
          a.spec || 0,
        ]),
        deck: (i.deck || ls()).slice(),
        blocks: e,
        pieces: Bt,
        pn: ka,
        hand: i.hand,
        buys: i.buys,
        at: Date.now(),
      }),
        he());
    }
    function fi() {
      const e = m.eSave;
      if (e) {
        (Vt(),
          ma(e.bi),
          As("facile", e.L),
          (i.endless = !0),
          (i.waves = ur()),
          (i.gold = e.gold),
          (i.wave = e.wave),
          (i.started = e.wave > 0),
          Array.isArray(e.deck) && e.deck.length && (i.deck = Qe.filter((s) => e.deck.includes(s))),
          (i.estart = e.start || 0));
        for (let s = 1; s <= e.cleared; s++) i.cleared[i.estart + s] = !0;
        for (let s = 1; s <= e.wave; s++) i.done[s] = !0;
        Object.assign(i.crystal, { hp: e.cry.hp, max: e.cry.max, lvl: e.cry.lvl });
        for (const [s, a, t, r, l, n, o, d] of e.towers)
          i.towers[s] = { type: a, lvl: t, cd: 0, ang: 0, invest: r, mode: l, anim: 0, dmg: n, kills: o, spec: d || 0 };
        ((Ee = new Uint8Array(Be)), (vt = new Int32Array(Be)));
        for (const s of e.blocks) {
          const [a, t] = Array.isArray(s) ? s : [s, 0];
          ((Ee[a] = 1), (vt[a] = t));
        }
        ((Bt = e.pieces || {}),
          (ka = e.pn || 0),
          (Ve = xa(-1)),
          Xs(),
          (i.hand = e.hand.map((s) => ({ k: s.k, cells: s.cells.map((a) => a.slice()) }))),
          (i.pick = i.hand.length ? 0 : -1),
          (i.buys = e.buys || 0),
          (Y("#wtot").textContent = "/\u221E"),
          (ve = ""),
          je(),
          Ge(!0),
          os("Reprise \xB7 vague " + (e.wave + 1)));
      }
    }
    function hi() {
      if (i.over || !i.endless || Oe) return;
      const e = pr();
      Ie(
        `<h2 style="color:var(--gold)">Vague ${i.wave} repouss\xE9e !</h2><p>Tu peux t'arr\xEAter ici et r\xE9cup\xE9rer tes \xE9cailles, ou continuer : la partie est sauvegard\xE9e.</p><div class="rewards"><div class="rw">${ye.scale} \xC9cailles si tu t'arr\xEAtes <b>+${e}</b></div></div><div class="stack"><button class="btn go" data-act2="resume" data-focus>Continuer</button><button class="btn green" data-act2="ecash">Terminer et r\xE9cup\xE9rer</button></div><p class="note">Prochaine occasion de t'arr\xEAter : apr\xE8s la vague ${i.wave + (Xe() ? 25 : 50)}.</p>`,
        "pause",
      );
    }
    let ga = 0;
    const gr = [
        ["gob", "Fantassin"],
        ["loup", "Rapide"],
        ["orc", "Blind\xE9"],
        ["troll", "Colosse"],
        ["wyv", "Volant"],
        ["dragon", "Mini-boss"],
        ["drake", "Boss"],
      ],
      pi = ["Plaine", "Ch\xE2teau", "Grotte", "D\xE9sert", "Antre"];
    function br(e, s) {
      const a = ce[s],
        t = e.getContext("2d"),
        r = e.width;
      (t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, r, r));
      const l = a.fly ? (s === "drake" ? 38 : a.boss ? 30 : 20) : 0,
        n = Math.max(a.r * 3.4 + l + 14, a.r * 2.8 + 16),
        o = r / n;
      (t.setTransform(o, 0, 0, o, 0, 0),
        Ps(
          t,
          { type: s, x: n / 2, y: n - a.r * 0.6 - 6, face: 1, seed: 1, hp: 1, max: 1, state: "walk", ox: 0, oy: 0, slowT: 0, atkT: 0 },
          0.35,
        ));
    }
    function vr(e, s, a = "") {
      const t = ce[e],
        r = (l) => String(l).replace(".", ",");
      return `<div class="ecard${t.boss ? " boss" : ""}"><canvas data-enemy="${e}" width="150" height="150"></canvas><div class="eb"><div class="en">${t.name}</div><div class="etags"><span class="chip${t.boss ? " boss" : t.fly ? " fly" : ""}">${s}</span>${t.fly && !t.boss ? "" : t.fly ? '<span class="chip fly">Volant</span>' : ""}${t.regen ? `<span class="chip">R\xE9g\xE9n\xE8re ${r(t.regen / 2)} PV/s</span>` : ""}</div><div class="estats"><span>PV <b>${t.hp}</b></span><span>Vitesse <b>${r((t.sp / $).toFixed(1))}</b> case/s</span><span>Armure <b>${Math.round(t.armor * 100)}&nbsp;%</b></span><span>Attaque <b>${r(t.atk)}</b></span><span>Or <b>${Math.max(1, Math.round(t.gold * xn * J.facile.kill))}</b></span></div>${a}</div></div>`;
    }
    const mi = (e) => {
      for (const s of [le, ...ue]) for (const [a, t] of gr) if ((s.roster[a] || a) === e) return t;
      return ce[e].boss ? "Boss" : "";
    };
    function gi(e) {
      const s = ce[e],
        a = i.waves[i.wave],
        t = (l) => String(l).replace(".", ",");
      ((i.paused = !0), (i.power.armed = !1));
      const r = a ? Math.round(s.hp * Sa(a.str) * (a.ph || J[ne]).hp * (a.hm || 1)) : s.hp;
      (Ie(
        `<div class="top"><button class="btn back" data-act2="resume" data-focus>\u2190 Partie</button><h2>Monstre</h2></div><div class="stack">${vr(e, mi(e), a ? `<div class="ts ewave">Dans la vague ${i.wave + 1} : <b>${r} PV</b> chacun</div>` : "")}</div>
    `,
        "enemyinfo",
      ),
        $e.querySelectorAll("canvas[data-enemy]").forEach((l) => br(l, l.dataset.enemy)));
    }
    function yr() {
      vs(ga) || (ga = 0);
      const e = ue[ga],
        s = (t) => String(t).replace(".", ","),
        a = gr
          .map(([t, r]) => {
            const l = e.roster[t] || t;
            return vr(l, r);
          })
          .join("");
      (Ie(
        `<div class="top"><button class="btn back" data-nav="home">\u2190 Menu</button><h2>Encyclop\xE9die</h2></div><div class="etabs">${ue.map((t, r) => `<button class="tab${r === ga ? " on" : ""}" data-act2="ency" data-k="${r}" ${vs(r) ? "" : "disabled"}>${vs(r) ? pi[r] : gt}</button>`).join("")}</div><p class="hint">${e.name}</p><div class="stack">${a}</div>
    `,
        "ency",
      ),
        $e.querySelectorAll("canvas[data-enemy]").forEach((t) => br(t, t.dataset.enemy)));
    }
    function Ko() {
      const e = m.endless || {},
        s = Math.max(e.best || 0, e.facile || 0, e.normal || 0, e.difficile || 0);
      Ie(
        `<div class="top"><button class="btn back" data-nav="home">\u2190 Menu</button><h2>Mode infini</h2></div>
    ${m.eSave ? `<div class="unlock" style="background:linear-gradient(#8ff5e3,#2bbfa5);color:#0f3b35;text-shadow:none">Partie en cours : ${ue[m.eSave.bi].levels[m.eSave.L].name} \xB7 vague ${m.eSave.wave + 1}</div><button class="btn go big" data-act2="eresume" data-focus>Reprendre la partie</button><button class="btn" data-act2="enew">Nouvelle carte au hasard</button><p class="note">Une nouvelle partie remplace celle qui est sauvegard\xE9e. Tu reprends avec le deck de cette partie : ${(m.eSave.deck || ls()).map((a) => be[a].short).join(", ")}.</p>` : ""}
    <p class="hint">Une carte au hasard parmi les ${ue.reduce((a, t) => a + t.levels.length, 0)} niveaux du jeu. Les vagues ne s'arr\xEAtent jamais : un mini-boss toutes les 5 vagues, un boss toutes les 10.</p><div class="rewards"><div class="rw">Vagues 1 \xE0 10 <b>Facile</b></div><div class="rw">Vagues 11 \xE0 20 <b>Normal</b></div><div class="rw">Vagues 21 \xE0 30 <b>Difficile</b></div><div class="rw">D\xE8s la vague 31 <b>Difficile +</b></div></div><h3 class="qh">Apr\xE8s la vague 30, \xE0 chaque vague</h3><div class="rewards"><div class="rw">Vie des monstres <b style="white-space:nowrap">+6&nbsp;%</b></div><div class="rw">Nombre de monstres <b style="white-space:nowrap">+4&nbsp;%</b></div><div class="rw">Vitesse des monstres <b style="white-space:nowrap">+1,7&nbsp;%</b></div></div><div class="rw">Record <b>${s} vague${s > 1 ? "s" : ""}</b></div>
    ${
      m.eSave
        ? ""
        : (() => {
            const a = Xe() ? 25 : 50,
              t = Math.floor(hr() / a) * a,
              r = [0];
            for (let l = a; l <= t; l += a) r.push(l);
            return (
              r.includes(bt) || (bt = 0),
              `${
                r.length > 1
                  ? `<h3 class="qh">Palier de d\xE9part</h3><div class="estart">${r.map((l) => `<button class="tab${l === bt ? " on" : ""}" data-act2="estart" data-w="${l}">${l || "D\xE9but"}</button>`).join("")}</div>
      ${bt ? `<p class="note">Tu commences apr\xE8s le palier ${bt} (premi\xE8re vague : ${bt + 1}), avec ${cr(bt)} pi\xE8ces et ${2 + bt} formes de blocs. \xC9cailles gagn\xE9es \xD7${Math.round(fr(bt) * 100)} %.</p>` : ""}`
                  : ""
              }
      ${xo()}
      ${Ea()}
      <button class="btn go big" data-endless="1" data-focus>Lancer une carte au hasard</button>`
            );
          })()
    }`,
        "endless",
      );
    }
    function bi(e, s) {
      const a = Object.keys(i.cleared).length,
        t = Math.max(0, ...Object.keys(i.cleared).map(Number));
      delete m.eSave;
      const r = e ? 0 : pr(),
        l = 0,
        n = hr(),
        o = t > n;
      ((m.endless = { best: Math.max(n, t) }), (m.scales += r), (m.runes += l), m.games++, he());
      const d = i.waves[Math.max(0, i.wave - 1)].ph.name;
      setTimeout(
        () =>
          Ie(
            `<h2 style="color:var(--gold)">${o && a ? "Nouveau record !" : e ? "Partie abandonn\xE9e" : s ? "Partie termin\xE9e" : "Le cristal est bris\xE9\u2026"}</h2><p>Mode infini \xB7 ${We[Rt].name} \xB7 niveau des monstres atteint : ${d}</p><div class="rw">Vagues repouss\xE9es <b>${a}${i.estart ? ` (d\xE9part vague ${i.estart + 1})` : ""}</b></div><div class="rw">Record <b>vague ${m.endless.best}</b></div><div class="rewards"><div class="rw">${ye.scale} \xC9cailles de dragon <b>+${r}</b></div></div><div class="stack"><button class="btn go" data-nav="endless" data-focus>Rejouer</button><button class="btn" data-nav="armory">Am\xE9liorer les tours</button><button class="btn" data-nav="home">Menu</button></div>`,
            "results",
          ),
        e ? 0 : 800,
      );
    }
    function Ka(e, s, a) {
      if (i.over) return;
      if (i.coop) {
        coopEnd(e, s);
        return;
      }
      if (i.endless) {
        if (((i.over = !0), (i.sel = null), (i.blockMode = !1), De.classList.remove("blockmode"), (ve = ""), je(), Oe)) {
          duelOver();
          return;
        }
        bi(s, a);
        return;
      }
      if (i.over) return;
      ((i.over = !0), (i.won = e), (i.sel = null), (i.blockMode = !1), De.classList.remove("blockmode"), (ve = ""), je());
      const t = Object.keys(i.cleared).length,
        r = ln[ne],
        l = Rt,
        n = We[l],
        o = ne;
      let d = 0;
      for (let C = 0; C < t; C++) d += 4 + i.waves[C].str;
      ((d = Math.round(d * r) + (e ? Math.round((30 + l * 10) * r) : 0)), s && (d = 0), (d = Es(d)));
      const u = e && l >= ha()[o],
        h = e ? (i.crystal.hp / i.crystal.max >= 0.8 ? 3 : i.crystal.hp / i.crystal.max >= 0.4 ? 2 : 1) : 0,
        c = e ? (u ? (n.boss ? 4 : 1) + 1 : Math.random() < 0.4 ? (n.boss ? 4 : 1) : 0) : 0;
      let p = "",
        y = 0;
      if ((e && h === 3 && ((pa()[o] || [])[l] || 0) < 3 && (y = 5), (m.gems = (m.gems || 0) + y), e)) {
        if (o === "difficile" && !i.hit) {
          m.flaw = m.flaw || {};
          const C = (m.flaw[le.id] = m.flaw[le.id] || []);
          C.includes(l) || C.push(l);
        }
        if (
          (Ue("win"),
          h === 3 && Ue("star3"),
          n.boss && Ue("bosswin"),
          (pa()[o][l] = Math.max(pa()[o][l] || 0, h)),
          u && ((ha()[o] = l + 1), n.boss))
        ) {
          const C = Ot[Ot.indexOf(o) + 1],
            V = No(o);
          p = "Biome termin\xE9 !";
          const L = ue.indexOf(le);
          if (
            (ue[L + 1] &&
              (p += o === "facile" ? ` Nouveau biome : ${ue[L + 1].name} !` : ` ${ue[L + 1].name} est d\xE9bloqu\xE9 en ${J[o].label}.`),
            V &&
              (C
                ? (p += ` Tous les biomes sont termin\xE9s en ${J[o].label} : la difficult\xE9 ${J[C].label} est d\xE9bloqu\xE9e !`)
                : (p += " Tous les biomes sont termin\xE9s dans toutes les difficult\xE9s !")),
            o === "facile")
          ) {
            const B = Qe.find((O) => zt[O] === L);
            (B && (p += ` Nouvelle tour : ${be[B].name} !`),
              L === oo && (p += " Les tours peuvent maintenant passer au niveau 4, et le mode infini est d\xE9bloqu\xE9 !"));
          }
        }
      }
      ((m.scales += d), (m.runes += c), m.games++, he());
      const b = e
          ? `<h2 style="color:var(--gold)">${n.boss ? ce[le.roster.drake || "drake"].name + " est vaincu !" : "Victoire !"}</h2>`
          : s
            ? "<h2>Niveau abandonn\xE9</h2>"
            : '<h2 style="color:var(--red)">Le cristal est bris\xE9\u2026</h2>',
        w = ue.indexOf(le),
        T = ue[w + 1],
        M =
          e && l + 1 < We.length
            ? `<button class="btn go" data-play="${l + 1}" data-focus>Niveau suivant</button>`
            : e && n.boss && T && vs(w + 1)
              ? `<button class="btn go" data-biome="${w + 1}" data-focus>Biome suivant : ${T.name}</button>`
              : "";
      setTimeout(
        () =>
          Ie(
            `${b}${e ? dr(h).replace('class="stars"', 'class="stars big"') : ""}<p>${n.name} \xB7 ${t}/${i.waves.length} vagues repouss\xE9es \xB7 ${J[o].label}.</p>
    ${p ? `<div class="unlock">${p}</div>` : ""}
    <div class="rewards"><div class="rw">${ye.scale} \xC9cailles de dragon <b>+${d}</b></div>${c ? `<div class="rw">${ye.rune} Runes <b>+${c}</b></div>` : ""}${y ? `<div class="rw">${ye.gem} Gemmes (3 \xE9toiles) <b>+${y}</b></div>` : ""}</div><div class="stack">${M}<button class="btn ${M ? "" : "go"}" data-play="${l}" ${M ? "" : "data-focus"}>Rejouer</button><button class="btn" data-nav="armory">Am\xE9liorer les tours</button><button class="btn" data-nav="biome">Carte du biome</button><button class="btn" data-nav="home">Menu principal</button></div>`,
            "results",
          ),
        s ? 0 : 800,
      );
    }
    const kr = { type: "dragon", x: 0, y: 62, face: 1, seed: 1, hp: 1, max: 1, state: "walk", ox: 0, oy: 0, slowT: 0, atkT: 0 },
      Zo = { type: "gob", x: 0, y: 76, face: 1, seed: 2, hp: 1, max: 1, state: "walk", ox: 0, oy: 0, slowT: 0, atkT: 0 };
    function vi(e, s) {
      const a = e.getContext("2d"),
        t = e.width / 240;
      a.setTransform(t, 0, 0, t, 0, 0);
      for (let r = 0; r < 4; r++)
        for (let l = 0; l < 8; l++) ((a.fillStyle = (r + l) % 2 ? "#7cc850" : "#86d05a"), a.fillRect(l * 30, r * 30, 30, 30));
      for (let r = 0; r < 8; r++) (r < 3 || r > 4) && mn(a, r * 30, 90, r * 13 + 3, ue[0].levels[0].th);
      (Ns(a, 0, 60),
        Ns(a, 210, 60),
        Ns(a, 30, 60),
        A(a, 120, 104, 30, 12),
        g(a, "#9b8fb0", 2.5),
        A(a, 120, 100, 24, 9),
        g(a, "#c2b8d6", 2),
        (Zo.x = ((s * 28) % 160) - 20),
        (Zo.face = 1),
        Ps(a, Zo, s),
        Pa(a, s, 120, 98, 2, 1, !1, !1),
        Ls(a, "archer", 2, 15, 80, 0, s, 0, 0.72),
        Ls(a, "mage", 2, 45, 80, 0, s, 0, 0.72),
        Ls(a, "frost", 1, 225, 80, Math.PI, s, 0, 0.72),
        (kr.x = ((s * 35) % 330) - 45),
        Ps(a, kr, s));
    }
    const ba = document.querySelector(".app");
    function wr() {
      const e = getComputedStyle(ba).display === "flex",
        s = [ba.querySelector(".hud"), ba.querySelector(".panel"), ba.querySelector(".actions")];
      ((Qt.style.flex = ""), (Qt.style.height = ""), s.forEach((t) => t && (t.style.zoom = "")));
      let a = Qt.getBoundingClientRect();
      if (e) {
        const t = Math.max(0.3, Math.min((a.width - 6) / de, (a.height - 12) / ge)),
          r = a.height - 12 - ge * t,
          l = s.reduce((o, d) => o + (d ? d.offsetHeight : 0), 0);
        if (r > 24 && l > 0) {
          const o = s[0],
            d = o ? [...o.children].reduce((c, p) => c + p.offsetWidth + 5, 0) : 0,
            u = d ? o.clientWidth / (d * 1.06 + 14) : 1.5,
            h = Math.min(1.5, u, 1 + (r * 0.9) / l);
          h > 1.03 && (s.forEach((c) => c && (c.style.zoom = h.toFixed(3))), (a = Qt.getBoundingClientRect()));
        }
        const n = innerWidth <= 560 ? (innerHeight >= 780 ? 1.3 : innerHeight >= 700 ? 1.15 : 1) : 1;
        n > 1 &&
          (parseFloat(s[1] && s[1].style.zoom) || 1) < n &&
          ([s[1], s[2]].forEach((d) => d && (d.style.zoom = n)), (a = Qt.getBoundingClientRect()));
      }
      ((Hs = Math.min(window.devicePixelRatio || 1, 2)),
        (kt = Math.max(0.3, Math.min((a.width - 6) / de, (a.height - 12) / ge))),
        (De.style.width = de * kt + "px"),
        (De.style.height = ge * kt + "px"),
        (De.width = Math.round(de * kt * Hs)),
        (De.height = Math.round(ge * kt * Hs)),
        e && ((Qt.style.flex = "none"), (Qt.style.height = Math.ceil(ge * kt + 12) + "px")),
        vn());
    }
    (new ResizeObserver(wr).observe(ba),
      document.fonts &&
        document.fonts.ready &&
        document.fonts.ready.then(() => {
          try {
            document.fonts.check('16px "Lilita One"') || document.documentElement.classList.add("nofont");
          } catch {}
          ((ve = ""), je());
        }));
    let Le = null;
    const Vs = Y("#tuto"),
      Za = Y("#tspot"),
      Fs = Y("#tbub");
    function Ja(e, s, a, t = a) {
      const r = De.getBoundingClientRect(),
        l = (r.width / de) * Te;
      return { left: r.left + (e - ft) * l - a * l, top: r.top + (s - wt) * l - t * l, width: a * 2 * l, height: t * 2 * l };
    }
    const ks = (e) => {
        const s = document.querySelector(e);
        if (!s || !s.offsetParent) return null;
        const a = s.getBoundingClientRect();
        return { left: a.left - 4, top: a.top - 4, width: a.width + 8, height: a.height + 8 };
      },
      xr = () => {
        let e = 0;
        for (let s = 0; s < Be; s++) Ee[s] && e++;
        return e;
      },
      eo = () => {
        const e = Object.keys(i.towers)[0];
        return e === void 0 ? -1 : +e;
      },
      to = [
        {
          txt: () => "Voici le <b>cristal du dragon</b>. Les monstres veulent le d\xE9truire : s'il tombe \xE0 0 PV, la partie est perdue.",
          at: () => Ja(we.x, we.y - 10, 42),
        },
        {
          txt: () => "Les monstres sortent des <b>portails</b> et suivent le chemin en pointill\xE9s jusqu'au cristal.",
          at: () => {
            const e = [].concat(...Object.values(ut));
            let s = 1e9,
              a = 1e9,
              t = -1e9,
              r = -1e9;
            for (const l of e) ((s = Math.min(s, oe(l))), (a = Math.min(a, ae(l))), (t = Math.max(t, oe(l))), (r = Math.max(r, ae(l))));
            return Ja((s + t) / 2, (a + r) / 2, (t - s) / 2 + 22, (r - a) / 2 + 22);
          },
        },
        {
          txt: () => "Ici, tu vois les monstres de la <b>prochaine vague</b>. Touche un nom pour voir sa fiche.",
          at: () => ks("#panel .enemy-list"),
        },
        {
          txt: () =>
            i.tpick
              ? "Touche maintenant un <b>d\xE9cor</b> (buisson, rocher\u2026) ou un <b>mur</b> pr\xE8s du chemin pour y b\xE2tir l'Archer."
              : "Pose ta premi\xE8re tour : choisis l'<b>Archer</b> dans ta barre de tours, en bas.",
          at: () => (i.tpick ? null : ks('#panel [data-type="archer"]')),
          light: () => i.towerMode && !!i.tpick,
          done: () => eo() >= 0,
        },
        {
          enter: () => {
            const e = eo();
            (i.towerMode && Ks(!1), (i.sel = { kind: "cell", i: e }), (ve = ""), je());
          },
          txt: () => "Le cercle, c'est la <b>port\xE9e</b> de la tour : elle tire toute seule sur les monstres qui passent dedans.",
          at: () => {
            const e = eo();
            if (e < 0) return null;
            const s = Gs(i.towers[e].type, i.towers[e].lvl, e).range;
            return Ja(oe(e), ae(e), s);
          },
          round: !0,
        },
        {
          enter: () => {
            ((i.sel = null), (ve = ""), je(), (Le.b0 = xr()));
          },
          txt: () =>
            i.blockMode
              ? i.ghost
                ? "Si l'emplacement te pla\xEEt, touche <b>Poser</b> ou touche encore au m\xEAme endroit. <b>Tourner</b> change le sens de la forme."
                : "Touche l'<b>herbe</b> pour placer la forme. Le trait jaune montre le nouveau chemin. Tu ne peux pas fermer compl\xE8tement le passage."
              : "Les <b>blocs</b> servent \xE0 allonger le chemin : plus il est long, plus tes tours ont le temps de tirer. Touche <b>Blocs</b>.",
          at: () => (i.blockMode ? (i.ghost ? ks("#panel .bacts") : null) : ks("#blkBtn")),
          light: () => i.blockMode && !i.ghost,
          done: () => xr() > Le.b0,
        },
        { txt: () => "Bien jou\xE9 ! Astuce : tu peux aussi <b>b\xE2tir une tour sur un bloc</b>, comme sur un d\xE9cor.", at: () => null },
        {
          enter: () => {
            (i.blockMode && vo(), (i.sel = null), (ve = ""), je());
          },
          txt: () => "Pr\xEAt ? Touche <b>Lancer</b> pour envoyer la premi\xE8re vague.",
          at: () => ks("#next"),
          done: () => i.wave >= 1,
        },
        {
          when: () => i.enemies.length > 0 && !xs.disabled,
          pause: !0,
          txt: () =>
            i.power.armed
              ? "\u2026puis touche la carte, sur les monstres, pour les br\xFBler."
              : "Ton <b>Souffle du dragon</b> est pr\xEAt ! Touche-le\u2026",
          at: () => (i.power.armed ? null : ks("#power")),
          light: () => i.power.armed,
          done: () => i.power.cd > 0,
          onTick: () => {
            i.power.armed && i.paused && ((i.paused = !1), (Le.paused = !1));
          },
        },
        {
          when: () => !!i.cleared[1],
          pause: !0,
          txt: () =>
            "Vague repouss\xE9e ! Chaque monstre tu\xE9 rapporte de l'<b>or</b>. Touche ta tour pour l'<b>am\xE9liorer</b>, la <b>vendre</b> ou changer sa <b>cible</b>. Tu gagnes aussi de nouvelles formes de blocs \xE0 chaque vague.",
          at: () => {
            const e = eo();
            return e < 0 ? null : Ja(oe(e), ae(e) - 6, 20);
          },
        },
        {
          pause: !0,
          txt: () =>
            "Dernier conseil : le bouton <b>\xD71</b> acc\xE9l\xE8re le jeu et le bouton \u2699\uFE0F met en pause. Bonne chance, d\xE9fenseur !",
          at: () => ks("#speed"),
        },
      ];
    let Jo = !1;
    function Tr(e) {
      ((Le = { i: 0, shown: !1, replay: !!e }), (Vs.hidden = !1), (Y("#tskip").style.display = e ? "" : "none"));
    }
    function so(e) {
      (Le && Le.paused && (i.paused = !1), (Le = null), (Vs.hidden = !0), e && ((m.tutoDone = 1), he()));
    }
    function Mr() {
      (Le.paused && ((i.paused = !1), (Le.paused = !1)), Le.i++, (Le.shown = !1), Le.i >= to.length && so(!0));
    }
    function yi() {
      if (!Le) return;
      if (i.over || i.endless) {
        so(!1);
        return;
      }
      const e = to[Le.i];
      if (!Le.shown) {
        if (e.when && !e.when()) {
          Vs.hidden = !0;
          return;
        }
        ((Le.shown = !0), e.enter && e.enter(), e.pause && ((i.paused = !0), (Le.paused = !0)));
      }
      if (!xe.hidden) {
        Vs.hidden = !0;
        return;
      }
      if (((Vs.hidden = !1), e.onTick && e.onTick(), e.done && e.done())) {
        Mr();
        return;
      }
      const s = e.txt();
      (Le.tx !== s && ((Le.tx = s), (Y("#ttxt").innerHTML = s)),
        (Y("#tstep").textContent = `Tuto \xB7 ${Le.i + 1}/${to.length}`),
        (Y("#tnext").style.display = e.done ? "none" : ""),
        (Y("#tnext").textContent = Le.i === to.length - 1 ? "Terminer" : "Suivant"),
        Vs.classList.toggle("light", !!(e.light && e.light())));
      const a = e.at && e.at(),
        t = innerWidth,
        r = innerHeight,
        l = Fs.offsetWidth,
        n = Fs.offsetHeight;
      if (a) {
        (Za.classList.remove("none"),
          (Za.style.borderRadius = e.round ? "50%" : ""),
          Object.assign(Za.style, { left: a.left + "px", top: a.top + "px", width: a.width + "px", height: a.height + "px" }));
        let o = a.top + a.height + 12;
        (o + n > r - 8 && (o = a.top - n - 12), o < 8 && (o = Math.min(r - n - 8, Math.max(8, a.top + a.height / 2 - n / 2))));
        const d = Math.max(12, Math.min(t - l - 12, a.left + a.width / 2 - l / 2));
        ((Fs.style.left = d + "px"), (Fs.style.top = o + "px"));
      } else {
        Za.classList.add("none");
        const o = e.light && e.light(),
          d = Y(o ? "#panel" : "#stage").getBoundingClientRect();
        ((Fs.style.left = Math.max(12, (t - l) / 2) + "px"),
          (Fs.style.top = Math.max(8, o ? Math.min(r - n - 8, d.top + 4) : d.top + 10) + "px"));
      }
    }
    (Y("#tnext").addEventListener("click", () => {
      Le && Mr();
    }),
      Y("#tskip").addEventListener("click", () => {
        Le && Le.replay && so(!0);
      }));
    const Sr = {
      biome: [
        "Choisir un niveau",
        "Finis un biome en Facile pour d\xE9bloquer le suivant. Quand tous les biomes sont finis en Facile, Normal s'ouvre (biome par biome), puis Difficile apr\xE8s Normal. Plus c'est dur, plus les r\xE9compenses sont grosses.",
      ],
      results: [
        "R\xE9compenses",
        "Les \xE9toiles d\xE9pendent de la vie restante du cristal : 3 \xE9toiles si tu en gardes au moins 80 %. Tu gagnes des \xE9cailles (pour les tours), des runes (pour les comp\xE9tences) et des gemmes la premi\xE8re fois que tu fais 3 \xE9toiles.",
      ],
      armory: [
        "Tours",
        "D\xE9pense tes \xE9cailles pour monter le rang de tes tours : chaque rang donne plus de d\xE9g\xE2ts. Les nouvelles tours se d\xE9bloquent en battant les boss des biomes.",
      ],
      tree: [
        "Comp\xE9tences",
        "Les runes, gagn\xE9es en finissant des niveaux, d\xE9bloquent des comp\xE9tences : des bonus pour une tour pr\xE9cise ou pour toutes les tours.",
      ],
      quests: [
        "Qu\xEAtes",
        "3 qu\xEAtes changent chaque jour, et chaque succ\xE8s a 4 \xE9tapes. Elles rapportent des \xE9cailles et des gemmes.",
      ],
      shop: [
        "Boutique",
        "Ici, tu t'abonnes \xE0 Bastion+ et tu ach\xE8tes des gemmes. Tes reliques et le coffre se trouvent dans Collection, onglet Reliques.",
      ],
      relics: [
        "Reliques",
        "Utilise tes gemmes ou tes \xE9cailles pour ouvrir le coffre : des reliques, bonus permanents qui montent de niveau quand tu en trouves en double.",
      ],
    };
    function $r(e) {
      if (!Sr[e] || (m.tips || {})[e]) return "";
      const [s, a] = Sr[e];
      return `<div class="tip"><b class="tt">\u{1F4A1} ${s}</b><p>${a}</p><button class="btn small go" data-act2="tipok" data-k="${e}">Compris</button></div>`;
    }
    const ao = (() => {
        const e = {
            maj: [0, 2, 4, 5, 7, 9, 11],
            min: [0, 2, 3, 5, 7, 8, 10],
            phr: [0, 1, 3, 5, 7, 8, 10],
            pdom: [0, 1, 4, 5, 7, 8, 10],
            hmin: [0, 2, 3, 5, 7, 8, 11],
          },
          s = (P, W, q) => P + e[W][((q % 7) + 7) % 7] + 12 * Math.floor(q / 7),
          a = (P) => 440 * Math.pow(2, (P - 69) / 12),
          t = (P) => P.trim().split(/\s+/),
          r = {
            flute: {
              L: [
                { t: "sine", g: 1 },
                { t: "triangle", m: 2, g: 0.12 },
              ],
              a: 0.05,
              d: 0.1,
              s: 0.8,
              r: 0.15,
              vib: [5, 0.006, 0.25],
              noise: 0.03,
              lp: 3500,
            },
            whistle: {
              L: [
                { t: "sine", g: 1 },
                { t: "sine", m: 2, g: 0.25 },
              ],
              a: 0.02,
              d: 0.06,
              s: 0.7,
              r: 0.08,
              vib: [6, 0.004, 0.15],
              lp: 5e3,
            },
            harp: {
              L: [
                { t: "triangle", g: 1 },
                { t: "sine", m: 2, g: 0.3 },
              ],
              a: 0.004,
              d: 0.4,
              s: 0,
              r: 0.3,
              lp: 4e3,
            },
            pluck: { L: [{ t: "sawtooth", g: 1 }], a: 0.003, d: 0.2, s: 0, r: 0.1, lp: 2200, lpEnv: 2.5 },
            strings: {
              L: [
                { t: "sawtooth", det: -7, g: 0.6 },
                { t: "sawtooth", det: 7, g: 0.6 },
              ],
              a: 0.22,
              d: 0.2,
              s: 0.8,
              r: 0.5,
              lp: 1900,
              vib: [4.5, 0.003, 0.4],
            },
            pad: {
              L: [
                { t: "triangle", det: -5, g: 0.7 },
                { t: "triangle", det: 5, g: 0.7 },
                { t: "sine", m: 0.5, g: 0.5 },
              ],
              a: 0.5,
              d: 0.3,
              s: 0.85,
              r: 0.8,
              lp: 1400,
            },
            bass: {
              L: [
                { t: "triangle", g: 1 },
                { t: "sine", m: 2, g: 0.2 },
              ],
              a: 0.01,
              d: 0.15,
              s: 0.7,
              r: 0.1,
              lp: 900,
            },
            sawbass: {
              L: [
                { t: "sawtooth", g: 0.8 },
                { t: "square", m: 0.5, g: 0.5 },
              ],
              a: 0.005,
              d: 0.1,
              s: 0.7,
              r: 0.06,
              lp: 800,
              lpEnv: 2,
            },
            brass: {
              L: [
                { t: "sawtooth", det: -4, g: 0.7 },
                { t: "sawtooth", det: 4, g: 0.7 },
              ],
              a: 0.07,
              d: 0.15,
              s: 0.75,
              r: 0.2,
              lp: 1500,
              lpEnv: 2.2,
            },
            organ: {
              L: [
                { t: "sine", g: 1 },
                { t: "sine", m: 2, g: 0.5 },
                { t: "sine", m: 3, g: 0.3 },
                { t: "square", m: 0.5, g: 0.15 },
              ],
              a: 0.08,
              d: 0.1,
              s: 0.9,
              r: 0.35,
              lp: 2500,
            },
            chip: {
              L: [
                { t: "square", g: 0.6 },
                { t: "sawtooth", det: 6, g: 0.4 },
              ],
              a: 0.004,
              d: 0.08,
              s: 0.7,
              r: 0.05,
              lp: 4500,
            },
            bell: {
              L: [
                { t: "sine", g: 1 },
                { t: "sine", m: 2.76, g: 0.35 },
                { t: "sine", m: 5.4, g: 0.15 },
              ],
              a: 0.003,
              d: 1.6,
              s: 0,
              r: 0.8,
              lp: 6e3,
            },
            ney: {
              L: [
                { t: "sine", g: 1 },
                { t: "triangle", m: 2, g: 0.1 },
              ],
              a: 0.06,
              d: 0.1,
              s: 0.8,
              r: 0.12,
              vib: [5.5, 0.01, 0.1],
              noise: 0.07,
              lp: 4e3,
            },
            sitar: {
              L: [
                { t: "sawtooth", g: 1 },
                { t: "square", m: 2, g: 0.2 },
              ],
              a: 0.002,
              d: 0.35,
              s: 0,
              r: 0.2,
              lp: 3e3,
              lpEnv: 3,
            },
          },
          l = new WeakMap();
        function n(P) {
          let W = l.get(P);
          if (!W) {
            const q = P.sampleRate;
            W = P.createBuffer(1, q, q);
            const z = W.getChannelData(0);
            let G = 12345;
            for (let N = 0; N < q; N++) ((G = (G * 1664525 + 1013904223) >>> 0), (z[N] = G / 2147483648 - 1));
            l.set(P, W);
          }
          return W;
        }
        function o(P, W, q, z, G, N, se) {
          const U = r[N];
          if (!U || !(G > 0)) return;
          const Me = P.createGain(),
            Ae = P.createBiquadFilter();
          ((Ae.type = "lowpass"), (Ae.Q.value = 0.7));
          const Ye = Math.min(U.lp || 3e3, P.sampleRate / 2 - 500),
            St = se * U.s,
            Yt = Math.max(q + z, q + U.a + U.d),
            It = Yt + U.r + 0.05;
          (Me.gain.setValueAtTime(0, q),
            Me.gain.linearRampToValueAtTime(se, q + U.a),
            Me.gain.linearRampToValueAtTime(St, q + U.a + U.d),
            Me.gain.setValueAtTime(St, Yt),
            Me.gain.linearRampToValueAtTime(0, Yt + U.r),
            Ae.frequency.setValueAtTime(Ye * (U.lpEnv || 1), q),
            U.lpEnv && Ae.frequency.exponentialRampToValueAtTime(Ye, q + 0.18),
            Ae.connect(Me),
            Me.connect(W));
          const Xt = [];
          for (const k of U.L) {
            const v = P.createOscillator(),
              x = P.createGain();
            ((v.type = k.t),
              (v.frequency.value = G * (k.m || 1)),
              k.det && (v.detune.value = k.det),
              (x.gain.value = k.g),
              v.connect(x),
              x.connect(Ae),
              v.start(q),
              v.stop(It),
              Xt.push(v));
          }
          if (U.vib) {
            const k = P.createOscillator(),
              v = P.createGain();
            ((k.frequency.value = U.vib[0]),
              v.gain.setValueAtTime(0, q),
              v.gain.linearRampToValueAtTime(G * U.vib[1], q + 0.2 + U.vib[2]),
              k.connect(v));
            for (const x of Xt) v.connect(x.frequency);
            (k.start(q), k.stop(It));
          }
          if (U.noise) {
            const k = P.createBufferSource(),
              v = P.createBiquadFilter(),
              x = P.createGain();
            ((k.buffer = n(P)),
              (k.loop = !0),
              (v.type = "bandpass"),
              (v.frequency.value = Math.min(G * 2, 9e3)),
              (v.Q.value = 1.2),
              (x.gain.value = U.noise),
              k.connect(v),
              v.connect(x),
              x.connect(Ae),
              k.start(q),
              k.stop(It));
          }
        }
        function d(P, W, q, z, G, N, se, U) {
          const Me = P.createBufferSource(),
            Ae = P.createBiquadFilter(),
            Ye = P.createGain();
          ((Me.buffer = n(P)),
            (Ae.type = G),
            (Ae.frequency.value = N),
            (Ae.Q.value = se),
            Ye.gain.setValueAtTime(U, q),
            Ye.gain.exponentialRampToValueAtTime(0.001, q + z),
            Me.connect(Ae),
            Ae.connect(Ye),
            Ye.connect(W),
            Me.start(q, Math.random() * 0.5),
            Me.stop(q + z + 0.02));
        }
        function u(P, W, q, z, G, N, se) {
          const U = P.createOscillator(),
            Me = P.createGain();
          (U.frequency.setValueAtTime(G, q),
            U.frequency.exponentialRampToValueAtTime(N, q + z * 0.6),
            Me.gain.setValueAtTime(se, q),
            Me.gain.exponentialRampToValueAtTime(0.001, q + z),
            U.connect(Me),
            Me.connect(W),
            U.start(q),
            U.stop(q + z + 0.02));
        }
        const h = {
            kick: (P, W, q, z) => u(P, W, q, 0.28, 150, 42, 0.95 * z),
            snare: (P, W, q, z) => {
              (d(P, W, q, 0.17, "bandpass", 1900, 0.8, 0.55 * z), u(P, W, q, 0.1, 200, 120, 0.3 * z));
            },
            hat: (P, W, q, z) => d(P, W, q, 0.045, "highpass", 7500, 0.7, 0.22 * z),
            shk: (P, W, q, z) => d(P, W, q, 0.08, "highpass", 5500, 0.9, 0.14 * z),
            tom: (P, W, q, z) => {
              (u(P, W, q, 0.45, 115, 62, 0.8 * z), d(P, W, q, 0.05, "lowpass", 900, 0.7, 0.2 * z));
            },
            tek: (P, W, q, z) => {
              d(P, W, q, 0.07, "bandpass", 3200, 1.5, 0.4 * z);
            },
            drip: null,
          },
          c = {
            menu: {
              bpm: 84,
              root: 55,
              mode: "maj",
              tk: 8,
              chords: [0, 4, 5, 3, 0, 4, 3, 4],
              lead: [
                "7 . 9 . 11 - 9 .",
                "8 . 11 . 13 - 11 .",
                "12 . 14 . 12 - 9 .",
                "10 . 12 . 14 - 12 .",
                "14 - 11 . 9 . 7 .",
                "8 . 11 . 8 . 6 .",
                "7 . 10 . 12 . 10 .",
                "11 - 9 . 8 - . .",
              ],
              vLead: "flute",
              lv: 0.2,
              vPad: "strings",
              pv: 0.07,
              vBass: "bass",
              bv: 0.22,
              bass: "r . . . r . f .",
              vArp: "harp",
              av: 0.1,
              arp: "0 1 2 3 2 1 2 1",
              arpOct: 1,
              kick: "x . . . x . . .",
              shk: "x x x x x x x x",
            },
            plaine: {
              bpm: 112,
              root: 48,
              mode: "maj",
              tk: 8,
              chords: [0, 4, 5, 3, 0, 3, 4, 0],
              lead: [
                "7 9 11 9 12 . 11 9",
                "11 13 11 8 11 . 13 .",
                "12 14 16 14 12 . 9 .",
                "10 12 14 12 10 . 12 .",
                "14 12 11 9 7 9 11 .",
                "10 . 12 14 12 10 12 .",
                "11 13 11 8 11 13 14 .",
                "14 . 11 . 7 - . .",
              ],
              vLead: "whistle",
              lv: 0.2,
              vPad: "pad",
              pv: 0.05,
              vBass: "bass",
              bv: 0.26,
              bass: "r . r . f . r .",
              vArp: "pluck",
              av: 0.05,
              arp: ". 1 . 2 . 1 . 2",
              arpOct: 1,
              kick: "x . . . x . x .",
              snare: ". . x . . . x .",
              hat: "x x x x x x x x",
            },
            chateau: {
              bpm: 92,
              root: 50,
              mode: "min",
              tk: 8,
              chords: [0, 5, 2, 6, 0, 5, 3, 4],
              lead: [
                "11 - - - 9 - 7 -",
                "12 - - . 11 . 9 .",
                "13 - 11 - 9 - . .",
                "13 . 10 . 8 - . .",
                "14 - 13 . 11 - 9 .",
                "12 . 14 . 16 - 14 .",
                "14 . 12 . 10 - 12 .",
                "15 - 13 . 11 - . .",
              ],
              vLead: "strings",
              lv: 0.2,
              vPad: "organ",
              pv: 0.05,
              vBass: "bass",
              bv: 0.24,
              bass: "r . . . r . . .",
              vArp: "harp",
              av: 0.1,
              arp: "0 2 1 2 0 2 1 2",
              arpOct: 1,
              tom: "x . . . . . x .",
              shk: ". . x . . . x .",
            },
            grotte: {
              bpm: 68,
              root: 45,
              mode: "phr",
              tk: 8,
              chords: [0, 1, 0, 6, 0, 1, 0, 6],
              lead: [
                "14 . . . 12 . . .",
                "13 . . . . . 12 .",
                "10 . . . 12 . 14 .",
                "13 . . . . . . .",
                "14 . . 12 . . 10 .",
                "8 . . . 9 . . .",
                "10 . . . 7 . . .",
                "13 . . . . . . .",
              ],
              vLead: "bell",
              lv: 0.14,
              vPad: "pad",
              pv: 0.09,
              vBass: "bass",
              bv: 0.26,
              bass: "r - - - - - - -",
              vArp: null,
              drip: 0.5,
              tom: "x . x . . . . .",
            },
            desert: {
              bpm: 100,
              root: 52,
              mode: "pdom",
              tk: 16,
              chords: [0, 0, 0, 1, 0, 0, 1, 0],
              lead: [
                "11 . . . 12 . 11 . 8 . . . 7 . . .",
                "8 . 9 . 11 . . . 12 . 11 . 9 . 8 .",
                "11 . 12 . 14 . . 12 11 . . . 9 . . .",
                "12 . . . 11 . 9 . 8 . . . 7 . . .",
                "7 . 8 9 11 . 9 8 7 . . . . . . .",
                "9 . 11 . 12 . . . 14 . 12 . 11 . . .",
                "12 . 11 . 9 . 8 . 7 . . . 8 . 9 .",
                "11 . . . 9 . . . 7 . . . . . . .",
              ],
              vLead: "ney",
              lv: 0.22,
              vPad: "pad",
              pv: 0.06,
              vBass: "bass",
              bv: 0.24,
              bass: "r . . . . . r . f . . . . . r .",
              vArp: "sitar",
              av: 0.08,
              arp: ". . 2 . . 1 . . . . 2 . . 1 . .",
              arpOct: 1,
              kick: "x . . . . . x . x . . . . . . .",
              snare: ". . . . . . . . . . x . . . . .",
              tek: ". . x . . x . . . . . . . x . .",
              hat: "x . x . x . x . x . x . x . x .",
            },
            antre: {
              bpm: 76,
              root: 48,
              mode: "hmin",
              tk: 8,
              chords: [0, 5, 4, 0, 0, 5, 4, 4],
              lead: [
                "7 - . . 7 . 8 .",
                "8 - 7 . 5 - . .",
                "6 - . . 6 . 4 .",
                "7 - - - . . . .",
                "7 . 7 . 9 - 7 .",
                "9 - 8 . 7 - 5 .",
                "4 - 6 . 8 - 6 .",
                "11 - - - 8 - - .",
              ],
              vLead: "brass",
              lv: 0.2,
              vPad: "organ",
              pv: 0.08,
              vBass: "sawbass",
              bv: 0.24,
              bass: "r . . r . . r .",
              vArp: null,
              kick: "x . . . . . . .",
              tom: "x . . x . . x .",
              snare: ". . . . x . . .",
            },
            infini: {
              bpm: 140,
              root: 50,
              mode: "min",
              tk: 16,
              chords: [0, 5, 2, 6, 0, 5, 3, 6],
              lead: [
                "7 . 9 . 11 . 9 . 14 . 11 . 9 . 11 .",
                "12 . 14 . 16 . 14 . 12 . 14 . 11 . 9 .",
                "13 . 11 . 9 . 11 . 13 . 16 . 14 . 13 .",
                "13 . 15 . 13 . 10 . 13 . 15 . 17 . 15 .",
                "14 . 14 . 11 . 14 . 16 . 14 . 11 . 9 .",
                "16 . 14 . 12 . 14 . 16 . 17 . 16 . 14 .",
                "14 . 12 . 10 . 12 . 14 . 12 . 10 . 12 .",
                "13 . 15 . 17 . 15 . 13 . 10 . 13 . 15 .",
              ],
              vLead: "chip",
              lv: 0.15,
              vPad: "strings",
              pv: 0.07,
              vBass: "sawbass",
              bv: 0.2,
              bass: "r . r . r . r . r . r . r . r .",
              vArp: "pluck",
              av: 0.05,
              arp: "0 . 2 . 1 . 2 . 0 . 2 . 1 . 2 .",
              arpOct: 1,
              kick: "x . . . x . . . x . . . x . . .",
              snare: ". . . . x . . . . . . . x . . .",
              hat: "x . x . x . x . x . x . x . x .",
              fill: ". . . . . . . . . . . . x x x x",
            },
          };
        for (const P in c) {
          const W = c[P];
          ((W.name = P), (W.sd = ((60 / W.bpm) * 4) / W.tk), (W._l = W.lead.map(t)));
          for (const q of ["bass", "arp", "kick", "snare", "hat", "tom", "shk", "tek", "fill"]) W[q] && (W["_" + q] = t(W[q]));
        }
        const p = (P) => {
          for (; P < 38; ) P += 12;
          for (; P > 52; ) P -= 12;
          return P;
        };
        function y(P, W, q, z, G) {
          const N = q.tk,
            se = Math.floor(z / N) % 8,
            U = z % N,
            Me = q.sd,
            Ae = q.chords[se],
            Ye = q.root,
            St = q.mode,
            Yt = se === 7,
            It = q._l[se],
            Xt = It[U];
          if (Xt !== "." && Xt !== "-") {
            let v = 1;
            for (; U + v < N && It[U + v] === "-"; ) v++;
            o(P, W, G, Me * v * 0.96, a(s(Ye, St, +Xt)), q.vLead, q.lv * (U % (N / 4) === 0 ? 1.1 : 1));
          }
          if (U === 0 && q.vPad) for (let v = 0; v < 3; v++) o(P, W, G, Me * N + 0.1, a(s(Ye, St, Ae + v * 2)), q.vPad, q.pv);
          if (q._bass) {
            const v = q._bass[U];
            if (v !== "." && v !== "-") {
              let x = 1;
              for (; U + x < N && q._bass[U + x] === "-"; ) x++;
              const S = v === "f" ? Ae + 4 : Ae;
              let E = p(s(Ye, St, S) - 12);
              (v === "o" && (E += 12), o(P, W, G, Me * x * 0.92, a(E), q.vBass, q.bv));
            }
          }
          if (q._arp && q.vArp) {
            const v = q._arp[U];
            if (v !== ".") {
              const x = Ae + [0, 2, 4, 7][+v];
              o(P, W, G, Me * 1.5, a(s(Ye, St, x) + 12 * (q.arpOct || 0)), q.vArp, q.av);
            }
          }
          const k = (v, x, S) => {
            v && v[U] && v[U] !== "." && x(P, W, G, v[U] === "X" ? 1.2 * S : S);
          };
          if (
            (k(q._kick, h.kick, 1),
            k(q._snare, h.snare, 1),
            k(q._hat, h.hat, U % 2 ? 0.6 : 1),
            k(q._shk, h.shk, 1),
            k(q._tek, h.tek, 1),
            k(Yt && q._fill ? q._fill : q._tom, h.tom, 1),
            q.drip && U % 2 === 1 && Math.random() < q.drip * 0.5)
          ) {
            const v = s(Ye + 12, St, Math.floor(Math.random() * 7));
            o(P, W, G + Math.random() * Me, 3, a(v), "bell", 0.05);
          }
        }
        let b = null,
          w = null,
          T = null,
          M = null,
          C = null;
        const V = () => {
          const P = m.musicOn !== !1,
            W = m.musicVol == null ? 0.7 : m.musicVol;
          return P ? W * W * 0.85 : 0;
        };
        function L() {
          w && w.gain.setTargetAtTime(V(), b.currentTime, 0.05);
        }
        function B() {
          if (b) return b;
          const P = window.AudioContext || window.webkitAudioContext;
          if (!P) return null;
          ((b = new P()), (w = b.createGain()));
          const W = b.createDynamicsCompressor();
          return ((W.threshold.value = -16), (W.ratio.value = 4), (w.gain.value = V()), w.connect(W), W.connect(b.destination), b);
        }
        function O(P) {
          if (!P.stop) for (; P.next < b.currentTime + 0.3; ) (y(b, P.tg, P.T, P.n, P.next), P.n++, (P.next += P.T.sd));
        }
        function I(P) {
          if (((M = P), !b || b.state !== "running" || (T && T.name === P))) return;
          if (T) {
            const N = T;
            N.stop = !0;
            const se = b.currentTime;
            (N.tg.gain.cancelScheduledValues(se),
              N.tg.gain.setValueAtTime(N.tg.gain.value, se),
              N.tg.gain.linearRampToValueAtTime(0, se + 1.2),
              setTimeout(() => {
                clearInterval(N.timer);
                try {
                  N.tg.disconnect();
                } catch {}
              }, 1600),
              (T = null));
          }
          if (!P || !c[P]) return;
          const W = c[P],
            q = b.createGain(),
            z = b.currentTime;
          (q.gain.setValueAtTime(0, z), q.gain.linearRampToValueAtTime(1, z + 1.8), q.connect(w));
          const G = { name: P, T: W, tg: q, n: 0, next: z + 0.08, stop: !1 };
          ((G.timer = setInterval(() => O(G), 80)), (T = G), O(G));
        }
        function K() {
          if (B() && b.state !== "running") {
            const P = b.resume();
            P &&
              P.then &&
              P.then(() => {
                M && I(M);
              }).catch(() => {});
          }
        }
        function ee(P) {
          C = P;
          for (const W of ["pointerdown", "keydown", "touchend"]) window.addEventListener(W, K, { passive: !0 });
          (setInterval(() => {
            C && I(C());
          }, 500),
            document.addEventListener("visibilitychange", () => {
              b && (document.hidden ? b.suspend() : b.resume());
            }));
        }
        async function pe(P, W, q = 22050) {
          const z = c[P],
            G = W * z.tk * z.sd + 2,
            N = new OfflineAudioContext(1, Math.ceil(q * G), q),
            se = N.createGain();
          se.connect(N.destination);
          for (let U = 0; U < W * z.tk; U++) y(N, se, z, U, U * z.sd);
          return N.startRendering();
        }
        return { play: I, init: ee, applyVol: L, render: pe, TRACKS: c, state: () => T && T.name, ready: () => !!b && b.state };
      })(),
      ki = [
        "home",
        "biomes",
        "biome",
        "level",
        "armory",
        "tree",
        "endless",
        "quests",
        "shop",
        "ency",
        "results",
        "spells",
        "spellinfo",
        "deck",
        "relics",
        "online",
      ];
    ao.init(() => (!i || i.over || (hs && ki.includes(hs)) || (hs === "towerinfo" && !i.paused) ? "menu" : i.endless ? "infini" : le.id));
    const Bi = () => {
      const e = Xe(),
        s = Na();
      return `<div class="mrow adrow"><span class="adl">D\xE9lai du lancement auto : <b id="adlV">${s} s</b>${e ? "" : " <em>\u2605 Bastion+</em>"}</span><input type="range" class="adly" min="1" max="10" step="1" value="${s}" ${e ? "" : "disabled"} aria-label="D\xE9lai du lancement automatique des vagues"></div>`;
    };
    document.addEventListener("input", (e) => {
      if (e.target.classList && e.target.classList.contains("adly") && Xe()) {
        ((m.autoDelay = +e.target.value), he());
        const s = document.getElementById("adlV");
        (s && (s.textContent = e.target.value + " s"), i && (i.autoWaveT = null));
      }
    });
    const Lr = () =>
      `<div class="mrow"><button class="btn small" data-act2="mtoggle">${m.musicOn === !1 ? "\u266A Musique : coup\xE9e" : "\u266A Musique : activ\xE9e"}</button><input type="range" class="mvol" min="0" max="100" step="5" value="${Math.round((m.musicVol == null ? 0.7 : m.musicVol) * 100)}" aria-label="Volume de la musique"></div>`;
    document.addEventListener("input", (e) => {
      e.target.classList && e.target.classList.contains("mvol") && ((m.musicVol = e.target.value / 100), he(), ao.applyVol());
    });
    let Pr = performance.now();
    function Cr(e) {
      const s = Math.min(0.05, (e - Pr) / 1e3);
      if (((Pr = e), Se && Se.me === "guest")) coopGuestStep(s);
      else if ((!i.paused || Se) && !i.over && (xe.hidden || Se)) for (let a = 0; a < i.speed && (Cl(s), !i.over); a++);
      if ((dn && Oe && Oe.view ? dn(e / 1e3) : Dl(e / 1e3), Ge(!1), yi(), hs === "home")) {
        const a = document.getElementById("hero");
        a && vi(a, e / 1e3);
      }
      requestAnimationFrame(Cr);
    }
    (m.lastBiome && ue[m.lastBiome] && vs(m.lastBiome) && ma(m.lastBiome), As("facile"), wr(), Ia(), requestAnimationFrame(Cr));
  })();
})();
