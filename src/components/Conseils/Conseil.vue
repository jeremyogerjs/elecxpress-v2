<template>
    
    <div>
            <h1>Le solaire en site isolé</h1>
        <hr>

        <div class="rubrique7">

            <h2>Nos conseils</h2>
            <p class="description" style="font-style: italic; margin: 0 auto;">
                "En pratique, on peux tout faire fonctionner en solaire.
                La seule limite sera celle de votre portefeuille.<br>
                ELECXPRESS est à l'écoute de vos besoins et afin de prévenir tout malentendus , 
                nous trouvons avec vous ,<br> la solution la plus adaptée à vos attentes et votre budget. En toute transparence."<br>
            </p>    
                <h3>Les recepteurs électriques les plus adaptés:</h3><br><br>
            <p class="description">   
                ELECXPRESS propose des générateurs équipés d'onduleurs permettant de connecter des appareils 
                d'usage standard 230 Volt 50hz tel que ceux que l'on peut trouver dans n'importe quel domicile connecté au réseau.<br><br>
                Il faut privilégier l'utilisation d'appareils électroménagers de classe A ou A+ ou A++.<br>
                De lampes LED ou LBC (lampes basse consommation) pour l'éclairage.<br>
                Des télévisions à écrans plats.<br>
                Il est moins couteux de remplacer vos appareils énergivores que d'alimenter des gouffres énergétiques.<br><br>
                Les appareils les plus voraces en énergie sont les appareils qui produisent de la chaleur: Bouilloire; 
                Four et plaque de cuisson électrique; Fer à repasser; Lave linge(1) ou lave vaisselle(1) 
                (à eau chaude =  la machine chauffe l'eau); et les climatiseurs.<br><br>
                Alimenter de tels récepteurs électriques avec du solaire fera rapidement doubler voire tripler la facture.<br>
                Il est préférable et moins onéreux d'avoir recours au gaz pour la cuisine et de revoir l'isolation 
                et repenser la ventilation naturelle de la maison plutôt que de systématiquement s'en remettre à la clim.<br><br>
                (1)Les laves linges ou Lave vaisselle s'il fonctionnent à l'eau froide 
                (ou s'ils sont remplis d'eau chaude issu d'un chauffe eau), peuvent être alimentés par du solaire sans énormes surcoût.<br><br>
            </p>     
                <h3>Le groupe électrogéne de secours</h3><br>
            <p class="description">    
                Nous avons l’habitude d'inciter nos client à garder ou investir dans un groupe électrogène de secours. Pour plusieurs raisons:<br><br>
                1.Pour ne pas surdimensionner l'onduleur et le parc batterie (diminution du coût de l'installation).<br><br>
                L'usage temporaire du groupe pour alimenter les récepteurs les plus puissants
                (pour faire tourner un lave linge à chaud, pour passer l'aspirateur, utiliser un four
                ou des plaques de cuissons électriques pour les irréductibles, ou pour souder ...) permettra
                de se passer d'un onduleur surpuissant qui fonctionnerait à 10% de sa capacité 95% du
                temps.<br>
                Ceci réduit également le coût du parc batterie, puisqu'elle n'auront pas à "débourser" l'énergie
                que prend en charge temporairement le groupe électrogène.<br><br>
                2. Pour palier aux imprévus.<br><br>
                Nous avons vu ici que l' installation photovoltaïque est dimensionnée pour une consommation 
                énergétique journalière définie.<br>
                Mais voilà, arrive le jour ou vous organisez une fête avec 3000 invités et une sono de
                10 000 watt à alimenter pendant 24H (c'est peut-être un peu exagéré...)...et çà, c'était pas
                franchement prévu dans le "bilan de puissance" initial...<br>
                Pas sur que vos batteries aient suffisamment la boulette pour étaler çà!
                Bref, une source énergétique de secours est toujours utile, voire indispensable en site isolé.<br><br>

                3. Pour passer une période de temps très nuageux.<br>

                De Novembre à  Avril, il n'est pas rare dans certains endroits de la Nouvelle Calédonie de
                ne pas voir le soleil durant plusieurs jours consécutifs voire des semaines.<br>
                Là encore, le groupe électrogène couplé à un chargeur de batteries trouvera toute son utilité.<br>
                Nous avons l'habitude d'équiper nos installations d'inverseurs de source automatiques* et de chargeur de batterie puissants.
                <a href="mailto:info@elecxpress.net">Contactez nous</a> pour en savoir plus.
            </p>
        </div>

        <router-link to="/site-isole/Quelle-Puissance-me-faut-il" class="rubrique-suivante">
            <p>Suivant</p>
            <span class="fleche-haut"></span>
            <span class="fleche-bas"></span>
        
        </router-link>

        <router-link to="/site-isole/comment-sa-marche" class="rubrique-precedente">
            <span class="fleche-haut-Bis"></span>
            <span class="fleche-bas-Bis"></span>
            <p>Précédent</p>
        
        </router-link>
    </div>

</template>

<script>
export default {
    name:'Conseil',
}
</script>

<style scoped src="./Conseil.css">



</style>