<template>
    
    <div>

        <h1>Le solaire en site isolé</h1>
    <hr>
    <div class="rubrique4">
        <h2 class="description-rubrique4">C'est pour qui ?</h2>
        <p class="description-rubrique4Bis"  style="padding-bottom: 0px;">Comme son nom l'indique, ce systeme d'electrification est principalement destiné aux habitations<br>
            ou structures éloignées des grands axes de distribution publique en basse tension.<br>
            Ce qui n'empeche pas certaines personnes de choisir de ne pas etre connecté au réseau<br>
            et de vivre en autonomie meme s'ils vivent a proximité des lignes de distribution.C'est mon cas.
        </p>    
        <p class="description-rubrique4Bis-list">
           <span> Pour les sites isolés il n'y a que peu d'alternatives:</span><br>
            -accepter de vivre sans électricité.<br>
            -Investire dans un raccordement au réseau le plus proche pour plusieurs millions, voire dizaines de millions.<br>
            -Attendre qu'un jour le réseau vienne a eux(renseignez-vous aupres de votre mairie).<br>
            -Le groupe electrogene.Mais peu pratique,bruyant et couteux pour une utilisation 24H/24
            (alimentation des réfrigérateur,congélateur par exemple).<br>
            -Le photovoltaique.Silencieux,idéal pour  alimenter les appareils de petites puissances 24H/24.<br>
        </p>

        
    </div>

    <router-link to="/site-isole/comment-sa-marche" class="rubrique-suivante">
            <p>Suivant</p>
            <span class="fleche-haut"></span>
            <span class="fleche-bas"></span>
        
        </router-link>


    </div>
</template>


<script>
export default {
    name:'Pour-qui',

}
</script>


<style src='./Pour-qui.css' scoped>


</style>