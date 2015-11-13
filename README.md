# app_meteo
Application mobile Cordova - Infos Météo

# Principe
Vous devez réaliser une application mobile destinée aux tablettes, fonctionnant en local et
permettant d’analyser les données météo récupérées. Les technologies choisies pour la réalisation
de ce projet sont Cordova ou Ionic. La société « France Météo» le laisse à votre appréciation. Pour la
réalisation des graphiques demandés, highchart.js a été privilégié.

# Contexte
La société « France Météo » fabrique des stations météo pour divers organismes telles que les
sociétés de météo de chaque pays (type « Météo France »). Elle a aujourd’hui à faire à un nouveau
type de clients avec de nouvelles problématiques: les militaires de diverses armées travaillant en
zone désertique.
Processus normale des stations météo : Les stations météo captent diverses informations telles que
la pluviométrie, la température, la vitesse du vent etc… Chaque jour, les informations des stations
sont envoyées en temps réel vers les centres météo qui analysent les données et fabriquent le
journal météo du moment.
Problématiques des militaires : Tout d’abord, on ne peut pas dire que le désert soit franchement
équipé en matière de réseaux internet… et le satellite pas exactement la manière la plus discrète de
transmettre des informations… Ils leur font donc aller chercher les données et les ramener au QG
pour les analyser. Hors l’analyse peut s’avérer inutile au moment de l’arrivée des militaires. En
quelques heures, le vent peut avoir tourné, un orage arrivé… Il leur faut analyser les données dès
qu’ils arrivent à la station.
A quoi leur servent les données météo : A garer les hélicoptères, faire voler les drones pour observer
un territoire… Hors sans donnée météo, un courant d’air désertique peut casser les hélices des
hélicoptères, détruire les drones, ensabler les moteurs… Les données de ses stations et leur analyse
rapide peut faire économiser plusieurs centaines de milliers d’euros/dollars/livres…

# Cahier des charges
## Interface d’upload
Lorsque les militaires téléchargent le fichier contenant les données météo, celui-ci est
automatiquement envoyé dans « téléchargements ». Vous devez donc proposer une interface
d’upload transférant le fichier météo de « téléchargements » à un dossier sûr où l’utilisateur ne
pourra supprimer les fichiers qu’à travers l’interface. Lors de l’upload, vous devrez renommer le nom
du fichier avec la date de la 1ère ligne d’information (d’un point de vue pratique, c’est la 2ème ligne). La
première étant le nom de la station). Si 2 fichiers correspondent à la même date, ils peuvent
représenter 2 stations météo différentes. « France Météo» souhaite écraser le premier fichier car il y
a normalement une tablette par station.

## Gestion des fichiers uploadés
Bien évidemment, les utilisateurs doivent pouvoir supprimer les fichiers inutiles (la durée de vie d’un
fichier est en général d’une semaine). C’est la seule action nécessaire pour la gestion des fichiers.


## Tableau récapitulatif des informations de la journée
Un fichier représente 1 journée. Il y a de nouvelles informations toutes les 5 secondes. En cliquant
sur le nom du fichier, celui-ci sera analysé pour fournir les informations suivantes :
(VOIR SUJET).

Dans le nom de l’analyse, il s’agit du nom de la colonne à analyser que vous retrouverez dans le
fichier. Les colonnes ne sont pas toujours toutes présentes. Notamment quand un capteur est en
remplacement.
Toutes les information de chaque ligne ne sont pas remplies. Si c’est le cas, il ne faut pas les prendre
en compte pour ce tableau.
Les informations sont séparées par des tabulations. S’il n’y a pas d’information, il a un espace pour la
remplacer.
Le LOCAL_WS_2MIN_MNM présente 2 informations. En premier, la vitesse (en nœuds) et en
deuxième, la direction (en degré) que vous devez récupérer dans la colonne LOCAL_WD_2MIN_MNM
et la concaténer à votre min et votre max.

## 1er graphique : Moyenne par heure
Pour chaque type de données, Il vous faudra présenter un graphique de type Basic line
(http://www.highcharts.com/demo/line-basic) avec :
- Le minimum pour chaque heure
- Le maximum pour chaque heure
- La moyenne pour chaque heure
- Une droite pour la moyenne de la journée
- Une droite pour le minimum de la journée
- Une droite pour le maximum de la journée
Ce graphique devra avoir la possibilité d’être téléchargé au format png au moins(option highchart) et
une légende. Si une donnée venait à manquer, elle sera considéré comme à 0 mais devra être prise
en compte tout de même.

## 2ème graphique: The full data graphic
Pour chaque type de donnée, il vous faudra proposer un graphique de type timeseries, zoomable
(http://www.highcharts.com/demo/line-time-series) représentant la totalité des données de la
journée et avec le zoom.

## 3ème graphique : La rose des vents
Pour la donnée LOCAL_WS_2MIN_MNM, vous devez fournir une rose des vents
(http://www.highcharts.com/demo/polar-wind-rose). Une rose des vents se construit de la manière
suivante : pour chaque direction (360/nombres de direction), vous devez récupérer le nombre de fois
où le vent a soufflé. Vous rapportez le nombre obtenu pour chaque direction en pourcent.
Les directions sont obtenues grâce à l’information LOCAL_WD_2MIN_MNM. Sur cette rose, on doit
pouvoir changer le nombre de direction. Par défaut, c’est 16 directions mais 8 directions et 32
directions sont pertinentes pour les milieux montagneux. Vous devrez donc également proposer ce
changement.
Attention, le nom des directions ne doit pas être numérique mais bien écrit comme dans l’exemple.

# Cahier des charges technique
Comme dit plus haut, vous devez utiliser Cordova ou Ionic pour réaliser ce projet ainsi que
highchart.js. Si vous voulez utiliser un framework css, c’est autorisé.
Pour tester votre application, des fichiers vous sont fournis. Pendant la soutenance, ce sont ces
mêmes fichiers qui seront utilisés.
Les unités :
- La température est en degré Celsius
- La pression est en hectopascal (hPa)
- La vitesse du vent en nœuds (nd)
- La direction du vent en degré
- L’humidité en %
