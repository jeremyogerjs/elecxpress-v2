<template >
    <div class="header">
            <div v-if="display" class="bg2" @click.prevent="ToggleMenu"></div>
            <div v-if="displayMenu" class="bg1" @click.prevent="showMenu"></div>
        <div class="en-tete">
            <router-link to="/" class="titre" exact title="Elecxpress"><img src="../../assets/GIFlogoColorSmall-edited.jpg" alt="logo elecxpress"></router-link>
            <div class="coord">

                <a href="mailto:info@elecxpress.net" class="email">info@elecxpress.net</a>
                <p class="tel"> +687 75 61 67</p>
            </div>
        </div>
        
        <section class="menu">
            
            <div class="menu-container"><router-link to="/" title="Accueil" exact>Accueil</router-link></div>
            <div @click="ToggleMenu" class="menu-container-item"><p title="photovoltaique">Le photovoltaique</p>
                <div class="sous-menu" :class="{active : display}">
                    <div class="sous-menu-item-titre"><p>En Site isolé</p></div>
                    <div class="sous-menu-item"><router-link to="/site-isole/c'est-pour-qui" title="C'est pour qui">C'est pour qui ?</router-link></div>
                    <div class="sous-menu-item"><router-link to="/site-isole/comment-sa-marche"  title="Comment sa marche">Comment sa marche ?</router-link></div>
                    <div class="sous-menu-item"><router-link to="/site-isole/Conseils" title="Nos conseils">Nos conseils</router-link></div>
                    <div class="sous-menu-item"><router-link to="/site-isole/Quelle-Puissance-me-faut-il" title="Mes besoins">Mes besoins</router-link></div>
                    <div class="sous-menu-item-titre"><p> Connecté aux reseaux</p></div>
                    <div class="sous-menu-item"><router-link to="/reseaux/Qu'est-ce-que-c'est" title="Qu'est-ce que c'est"> Qu'est-ce que c'est ?</router-link></div>
                    <div class="sous-menu-item"><router-link to="/reseaux/Comment-sa-marche" title="Comment sa marche"> Comment sa marche ?</router-link></div>
                    <div class="sous-menu-item"><router-link to="/reseaux/Mes-besoins" title="Mes besoins"> Mes besoins</router-link></div>
                    <div class="sous-menu-item"><router-link to="/reseaux/Rentable" title="C'est rentable"> C'est rentable ?</router-link></div>
                    <div class="sous-menu-item"><router-link to="/reseaux/Comment-faire" title="Comment faire"> Comment faire ?</router-link></div>
                    <div class="sous-menu-item"><router-link to="/reseaux/Nous-faire-confiance" title="Pourquoi Nous"> Pourquoi Nous ?</router-link></div>
                </div>
            </div>
            <div class="menu-container"><router-link to="/Electricite-general" title="L'électricité générale">L'électricité générale</router-link></div>
            <div class="menu-container"><router-link to="/Nos-Realisations" title="Nos Réalisations">Nos Réalisations</router-link></div>
        
        </section>
        <div id="menu-mobile" @click.prevent="showMenu">
            <span></span>

        </div>
        
        
    </div>
</template>


<script>

export default{
    name:'header-top',
    
    data(){
        return{
            display:false,
            displayMenu:false,  
        }
    },
    methods:{
        showMenu(){
            this.$el.lastElementChild.classList.toggle('active');
            this.$el.lastElementChild.previousElementSibling.classList.toggle('active');
            this.displayMenu = !this.displayMenu; 
        },
        ToggleMenu(){
            this.display = !this.display;
        },
        hiddenMenu(){
            this.display = false;
        }
    },
}
</script>

<style scoped src='./Header.css'>

</style>
