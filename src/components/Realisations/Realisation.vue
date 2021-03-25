<template>
    
    <div class="realisation">
        <h1>Nos realisations</h1>
        <hr>
        <p>Voici diférents travaux réalisés par nos soins.</p>
        <CarouselRea></CarouselRea>

    </div>

</template>

<script>
import CarouselRea from '../Carousel/CarouselRea'
export default {
    name:'Realisation',

    data(){
        return{

        }
    },
    components:{
        'CarouselRea':CarouselRea
    },
}
</script>

<style scoped src="./Realisation.css">



</style>