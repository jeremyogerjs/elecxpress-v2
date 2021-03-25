<template>
    
    <div>
        <h1>Le solaire connecté aux reseaux</h1>
        <hr>
        <div class="rubrique11">

            <h2 class = "description-rubrique11-1Bis"> Qu'est-ce que c'est ?</h2>

            <p class="description-rubrique11-1">Il s'agit de produire et de consommer sa propre énergie électrique générée
                à partir de ressources naturelles renouvelables.<br>
                Plus concrètement, on vous pose des panneaux solaires sur le toit, et on les raccordent, via des appareils électroniques 
                (onduleurs de couplage) sur votre tableau électrique.<br>      
                Il faut déjà être raccordé au réseau et titulaire d'un abonnement auprés d'un fournisseur d'énergie local (Enercal, EEC). 
                Note: Si vous n'êtes pas raccordé au réseau on dit alors que vous êtes
                <router-link class="linkinsert" to="/site-isole/c'est-pour-qui">"en site isolé"</router-link> (cliquez sur le lien pour en savoir plus).<br>   
                1) Vous consommez en priorité l'énergie produite par vos modules photovoltaïques. <br>  
                2) Vous revendez ce que vous ne consommez pas à votre fournisseur d'énergie à 21CFP le kilo wattheure 
                (Enercal ou EEC suivant votre commune de résidence). <br>
                3) Vous n'utilisez (et donc n'achetez) l'énergie issue de votre compteur électrique que la nuit*,
                ou les jours où il n'y a pas ou peu de soleil.<br>
                Idéalement il faut privilégier l'usage des appareils électriques les plus énergivores en journée. <br>
                <span style="font-size: small;">*Il existe également des systèmes, un peu plus onéreux, équipés de batteries qui permettent de stocker l'énergie 
                durant la journée pour la restituer la nuit. 
                </span>  </p>
        </div>

        <router-link to="/reseaux/Comment-sa-marche" class="rubrique-suivante">
            <p>Suivant</p>
            <span class="fleche-haut"></span>
            <span class="fleche-bas"></span>
        
        </router-link>

    </div>

</template>

<script>
export default {
    name:'Quest-ce',

}
</script>

<style scoped src="./Questce.css">



</style>