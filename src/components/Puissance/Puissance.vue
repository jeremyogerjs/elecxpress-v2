<template>
    
    <div >
            <h1>Le solaire en site isolé</h1>
        <hr>

        <div class="rubrique6">      
            <h2>Quelle puissance me faut-il ?</h2>
            <p class="description">
                Une installation photovoltaïque est dimensionnée en fonction de vos besoins énergétiques.Il faut donc en faire le bilan.<br>
                Un bilan de puissance permet de détailler les appareils que vous souhaitez faire fonctionner avec, 
                si vous la connaissez,<br> la puissance de chaque appareils et leur temps d'utilisation approximatif par jour.<br>
                N'oubliez pas d'y inclure ce que vous souhaitez y connecter ultérieurement.
                Une installation photovoltaïque est évolutive mais dans une certaine limite. <br>
                Si les composants sont dimensionnés correctement, vous n'aurez pas à les remplacer.
                Voici un exemple de <a href="../../assets/Bilan-de-puissance.pdf" target="_blank">bilan de puissance  </a>     
            </p>
        </div>
        <router-link to="/site-isole/Conseils" class="rubrique-precedente">
            <span class="fleche-haut-Bis"></span>
            <span class="fleche-bas-Bis"></span>
            <p>Précédent</p>
        
        </router-link>

    </div>

</template>

<script>
export default {
    name:'Puissance',

}
</script>

<style scoped src="./Puissance.css">



</style>