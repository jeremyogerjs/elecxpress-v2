<template>
    <div class="contact" v-if="revele">
        <div class="bg" @click="toggleForm"></div>
        <form>
            <div class="btn-exit" @click="toggleForm">X</div>
            <label for="name" required>Prenom</label>
            <input type="text" id="name" name="name" v-model="name" placeholder="Votre prénom">

            <label for="email" required>Email</label>
            <input type="text" id="email" name="Email" v-model="email" placeholder="example@example.com">

            <label for="message">Votre message</label>
            <textarea v-model="message" name="message" id="message" cols="30" rows="5" placeholder="Votre message..."></textarea>

            <input type="submit" value="Envoyer" >
        </form>
    </div>
</template>

<script>


export default {
    name:'Contact',

    data(){
        return{
            name:'',
            email:'',
            message:'',
        }
    },
    props:['revele','toggleForm'],

    methods:{


        
    },
}
</script>

<style scoped src="./Contact.css">

</style>