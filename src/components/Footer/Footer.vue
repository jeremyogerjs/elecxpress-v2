<template>
    <div >

        <Contact :revele="revele" :toggleForm='toggleForm'></Contact>
        <div class="footer">

            <p @click="toggleForm" >Contactez-nous !</p>
            <a href="https://www.facebook.com/ElecxpressNC/?ref=page_internal" target="_blank">Notre Facebook</a>

        </div>
    </div>
</template>


<script>

import Contact from '../contactForm/Contact'
export default{
    name:'footer-bottom',

    data(){
        return{
            revele:false,
        }
    },
   
    methods:{
        toggleForm(){
            this.revele = !this.revele;
        }
    },
    components:{
        'Contact':Contact
    },
}
</script>


<style src="./Footer.css" scoped>

</style>