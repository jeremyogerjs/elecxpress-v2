<template>
    
    <div>
        <h1>Le solaire en site isolé</h1>
    <hr>
    <div class="rubrique5">
        <h2>Comment sa marche ?</h2>
        <div class="sous-rubrique5">
            <div class="description-rubrique5-1bis" style="margin-left:9px;">
                <p > 
                    <img class="batterie" src="../../assets/Photo-batterie-retouche.jpg" alt="batterie 12V" title="batterie 12V">
                    L'installation fonctionne comme un chargeur de batteries.<br>
                    Durant la journée, les modules photovoltaïques alimentent vos appareils électriques 
                    et stockent l’énergie dans des batteries pour la restituer la nuit ou les jours de temps couvert.<br> 
                    La capacité des batteries (c'est le réservoir d'énergie du domicile, tout comme un réservoir d'eau)
                    est généralement dimensionnée pour une autonomie de plusieurs jours (3 à 5 jours), 
                    de façon à passer quelques jours de ciel très couvert, sans encombres. 
                </p>
            </div>
            <div class="description-rubrique5-2">
                <p >
                    <img class ="onduleur" src="../../assets/PM-ATS-40A.jpg" alt="onduleur" title="onduleur">
                    L'emploi d'onduleurs permettant de transformer le courant continu des batteries en 230 volt 50hz se généralise.
                    Ceci permet d'utiliser des appareils classiques du commerce<br> (réfrigérateur, congélateur, télévision, micro onde ,
                    lave linge etc...) moins onéreux que des appareils spécifiques fonctionnant uniquement en 12, 24, ou 48 Volt DC
                    (courant continu).<br>
                    Ce procédé permet également de pouvoir alimenter ces appareils avec un groupe électrogène de secours si nécessaire,<br>
                    sans qu'il y ait besoin d'avoir 2 circuits électriques distincts, d'adaptateurs ou transformateurs.
                </p>
            </div>
            
        </div>
        <div class="sous-rubrique5Bis">

            <div class="description-rubrique5-3" style="margin-right: 9px;">
                <p>
                    <img class="regulateur" src="../../assets/regulateur-de-charge.jpg" alt="regulateur de charge" title="regulateur de charge">
                    Les batteries sont protégées par un "régulateur de charge", qui gère leur charge et décharge.<br> 
                    Il limite la charge quand la batterie atteint sa capacité maximale,
                    et déconnecte l'utilisation lorsque les batteries sont déchargées.
                </p>
            </div>

            <div class="description-rubrique5-4">
                <p>
                    <img class="panneaux" src="../../assets/ORIENTATIONS MODULES.png" alt="panneaux photovoltaique" title="panneaux photovoltaique">
                    Les modules photovoltaïques peuvent être associé à d'autre source de charge 
                    (éolienne, groupe électrogène + chargeur, hydro turbine, ...)<br> pour charger un même parc de batteries.
                    On dit alors que l'installation est hybride.<br>          
                    On peut également substituer une source à l'autre.            
                    Par exemple, vous décidez de démarrer votre groupe électrogène pour bricoler, souder, ou autre...<br> 
                    Le groupe via un inverseur de source automatique alimente la maison en lieu et place de l'onduleur 
                    et peut même recharger les batteries si  un chargeur est installé.
                </p> 
            </div>
            
            <div class="description-rubrique5-5">
                <p>
                    <img class="groupe-elec" src="../../assets/groupe-electrogene-retouche.jpg" alt="groupe electrogene" title="groupe electrogene">
                    Il y a également la possibilité de démarrer un groupe électrogène automatiquement lorsque le régulateur 
                    de charge détecte que vos batteries "sont dans le rouge".
                </p>
            </div>
        </div>
            <div class="sous-rubrique5_shema">   
                <p class="description-rubrique5-6Bis"  >
                    Les modules photovoltaiques (1) produisent de l'électricité quand il sont exposés au rayonnement solaire.<br> 
                    Ils doivent être orientés vers le nord avec un angle de 15 à 30°.<br>
                    Le régulateur de charge (2) régule la charge des batteries et les prévient de décharges trop importantes,<br> 
                    néfastes à leur durée de vie.<br>             
                    Les batteries (3) sont la réserve d’énergie de l'installation et doivent être dimensionnées           
                    selon vos besoins énergétiques <br>et pour assurer une autonomie de 3 à 5 jours en cas de mauvais temps.<br>           
                    Les constructeurs définissent le nombre de cycles charge/décharge que supporteront les batteries 
                    et donc leur durée de vie.<br> En pratique il faut éviter de les décharger profondément régulièrement. 
                    Leur durée de vie en dépend.<br>              
                    L'onduleur (4) transforme le courant des batteries en 230VAC 50HZ.
                    Sa sortie est raccordée sur le tableau électrique de la maison.
                </p>
                <div  class ="shema_sous-rubrique5"><img src="../../assets/Photo-panneaux-retouche.jpg" alt="shema circuit panneaux solaire" title="shema circuit panneaux solaire"></div>
            </div> 
            
            
    </div>


    <router-link to="/site-isole/Conseils" class="rubrique-suivante">
        <p>Suivant</p>
        <span class="fleche-haut"></span>
        <span class="fleche-bas"></span>
    
    </router-link>

    <router-link to="/site-isole/c'est-pour-qui" class="rubrique-precedente">
        <span class="fleche-haut-Bis"></span>
        <span class="fleche-bas-Bis"></span>
        <p>Précédent</p>
    
    </router-link>

    </div>

</template>

<script>
export default {
    name:'Commentmarche',

}
</script>

<style scoped src="./commentmarche.css">



</style>