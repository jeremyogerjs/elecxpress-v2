<template>
    <div>
        <CarrouselAccueil></CarrouselAccueil>

    <div class="mini-description">
        <h1>Une entreprise 100% calédonienne !</h1>
        <p>Solaire photovoltaique en Nouvelle-Calédonie.</p>
        <p>Electricité général et industrielle.</p>
    </div>
    

    <div class="rubrique1">
       <p class="description-gris-1">
        <span class="ponctuation"> <img src="../../assets/citation-de-gauche.png" alt="symbole citation"></span>
           ElecXpress est une entreprise 100% calédonienne intervenant de Yaté a Poum en passant<br> par Nouméa,Bourail,Koumac,Poindimié 
           et Hienghène(sans oublier nos amis des îles) a tarif quasi égal.<br>
           Bien que le siège social soit à Koné, nous sommes présents à nouméa.
            <br>
            Crée en 2006 à Nouméa en tant qu'entreprise individuelle puis en SARL(2012), la société exerce son activité 
            dans pusieurs domaines : <br> 
                <router-link class="linkinsert" to="/Electricite-general">-L'électricité général et industrielle.</router-link><br>
                <span>-La maintenance industrielle.</span> <br>
                <span>-Le solaire photovoltaique en<router-link class="linkinsert" to="/site-isole/c'est-pour-qui"> site isolé</router-link> et/ou <router-link class="linkinsert" to="/reseaux/Qu'est-ce-que-c'est">connecté au réseau </router-link></span> <span class="ponctuation"> <img src="../../assets/signe-de-citation-droit.png" alt="symbole citation"></span><br>
        </p>
    </div>

    <div class="rubrique2">
        <p class="description-blanc">
            <span class="ponctuation"> <img src="../../assets/citation-de-gauche.png" alt="symbole citation"></span> ElecXpress installe et vend des générateurs photovoltaiques en Nouvelle-calédonie depuis plus de 10 ans.<br>
        Un temps réticents a développer notre activité dans le solaire <router-link class="linkinsert" to="/reseaux/Qu'est-ce-que-c'est">connecté au réseau </router-link> ( en mode production et consomation<br> 
        de sa propre énergie et revente du surplus au distributeur local ) ,à une époque ou les installations solaires n'étaient rentables<br> 
        qu'à grands coups d'argent public, nous avons aujourd'hui de bonnes raisons de croire a sa pertinence.<br>
                            Pour plusieurs raisons :<br>
                            -Le prix des modules photovolatiques a chuté de 75% en 8 ans.<br>
                            -La hausse et fluctuabilité du coût des énergies fossiles.<br>
                            -La Nouvelle-Calédonie bénéficie des conditions climatiques idéales   <span class="ponctuation"> <img src="../../assets/signe-de-citation-droit.png" alt="symbole citation"></span><br>
                            
        </p>
    </div>

    </div>
</template>



<script>
import CarrouselAccueil from '../Carousel/CarousselAccueil'
export default {
    name:'Accueil',

    data(){
        return{

        }
    },
    components:{
        'CarrouselAccueil':CarrouselAccueil
    }
}
</script>

<style scoped src="./Accueil.css">

</style>



