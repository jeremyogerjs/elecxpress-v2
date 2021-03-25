<template>
    <div class="SlideRea">

        <div id="CarouselRea" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#CarouselRea" data-slide-to="0" class="active"></li>
                    <li data-target="#CarouselRea" data-slide-to="1"></li>
                    <li data-target="#CarouselRea" data-slide-to="2"></li>
                </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-40" src="../../assets/par-sportif_edited.jpg" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>parc sportif de la commune de Pouembout</h5>
                        <p>Rénovation de l'éclairage (Projecteur led forte puissance) du parc sportif de la commune de Pouembout 
                            (deux courts de tennis, un terrain de basket,un terrain de pétanque, une salle omnisport). 
                        </p>

                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-40" src="../../assets/Nepoui-tirroir_edited.jpg" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Centrale de Népoui</h5>
                        <p>Réfection complète de "tirroirs 400v " de protection et commande des moteurs électriques de la centrale de Népoui ( ENERCAL ).
                        </p>

                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-40" src="../../assets/Tgbt_edited.jpg" alt="Third slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Salle omnisport de Pouembout</h5>
                        <p>Remplacement du TGBT de la salle omnisports de la commune de Pouembout.
                        </p>

                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#CarouselRea" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#CarouselRea" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

    </div>
</template>


<script>

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' 
export default {
    name:'CarouselRea',

    data(){
        return{

        }
    },
}
</script>


<style scoped>

.SlideRea{
    width: 900px;
    margin: 0 auto;
}
.carousel-item img{
    object-fit: cover;
    width: max-content;
}

@media screen and (max-width:1540px){

    .SlideRea{
        height: 100%;
    }
    .carousel,.carousel-inner,.carousel-item,.carousel-item img{
        height: 100%;
    }

}

@media only screen and (max-width:770px){

    .SlideRea{
        width: 100%;
        height:50%;
    }

    .carousel-caption{
        color:#333;
        display: block !important;
        position: unset !important;
        
    }
   
}

@media only screen and (max-width:415px){

    .carousel-item img{
        object-fit: cover;
        width: 100%;
        
    }
    
    .carousel-caption{
        color:#333;
        display: block !important;
        position: unset !important;
        
    }
    

}

</style>