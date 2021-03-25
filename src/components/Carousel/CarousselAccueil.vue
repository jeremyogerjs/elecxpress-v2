<template>
    

        <div class="SlideAccueil">
            <div id="carousselAccueil" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators mx-auto">
                    <li data-target="#carousselAccueil" data-slide-to="0" class="active"></li>
                    <li data-target="#carousselAccueil" data-slide-to="1"></li>
                    <li data-target="#carousselAccueil" data-slide-to="2"></li>
                    <li data-target="#carousselAccueil" data-slide-to="3"></li>
                    <li data-target="#carousselAccueil" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-40" src="../../assets/20170504_151134_edited.jpg" alt="panneaux solaires sur pied">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-40" src="../../assets/20170804_101935_edited.jpg" alt="panneaux solaires posé sur toiture">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-40" src="../../assets/DSCN1132.JPG_edited.jpg" alt="double panneaux solaire monté sur une cabane">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-40" src="../../assets/DSCN1322.JPG_edited.jpg" alt="installations de panneaux solaires raccordé au reseaux">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-40" src="../../assets/20170504_151134_edited.jpg" alt="panneaux solaires sur pied">
                    </div>
                </div>
            </div>
        </div>
        
    
    
</template>


<script>

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' 
export default {
    name:'CarousselAccueil',

    data(){
        return{

        }
    },
}
</script>


<style scoped>

.SlideAccueil{
    width: 960px;
    margin: 0 auto;
    
}
img{
    width: 100%;
}



</style>