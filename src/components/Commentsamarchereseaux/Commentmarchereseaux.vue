<template>
    
    <div>
            <h1>Le solaire connecté aux reseaux</h1>
        <hr>

        <div class="rubrique12">
            <h2> Comment sa marche ?</h2>
            <div class="description1">
                La journée, les modules photovoltaïques (1) vont fournir de l'électricité en courant continu.<br>
                Pour pouvoir être utilisé, ce courant continu doit être convertie selon les standards de la distribution
                publique basse tension: 230 Volt AC (courant alternatif) 50 Hertz (Hz).<br>
                C'est le rôle de l'onduleur (2).
                L'onduleur assure également la fonction de synchronisation et de couplage (connexion) au réseau.
            
        
                <div class="shema_rubrique12"><img src="../../assets/schéma_didactique-page-001_edited.jpg"></div>
            </div>
            <p class="description2">
                Cette électricité transformée est ensuite envoyée vers le tableau électrique du domicile 
                ou elle est répartie et distribuée dans les différent circuits de la maison.
                Le tableau électrique est également raccordé au réseau de distribution publique.
                Il a donc 2 sources d'énergie, mais votre énergie solaire sera consommée en priorité.<br>
                Suivant les conditions climatiques, il y a plusieurs cas de figure:<br><br>
                <span>A) La production solaire est égale à votre consommation.</span><br>
                Tous les appareils du domicile sont alimentés par le solaire donc pas de consommation d'énergie issue du compteur.<br><br>
                <span>B) La production solaire est supérieure à votre consommation.</span><br><br>
                Vous êtes excédentaire. Le surplus d'énergie "s'écoule" naturellement vers la seule sortie possible:<br> 
                le compteur d'électricité puis le réseau basse tension. Vous devenez producteur d'énergie,
                et vous vendez cette énergie  21cfp du kilo wattheure à votre distributeur d'énergie.<br><br>
                <span>C) La production solaire est inférieure à votre consommation.</span><br>
                C'est le cas par temps couvert. Cette énergie est tout de même utilisée mais le réseau,
                via votre  compteur électrique, vient combler le déficit.<br>
                Votre facture d'électricité est tout de même soulagée par l’énergie solaire produite.<br><br>
                <span>D) La nuit.</span><br>
                1) La totalité de la consommation énergétique du foyer est fournie par le réseau.
                Dans cette configuration, et afin de limiter l'achat d'énergie via votre compteur, 
                il faut privilégier au maximum l'emploi des appareils électriques durant la journée.<br>
                2) Des batteries "tampons"  se chargeant durant la journée avec l’excédent<br>
                énergétique et restituant cette énergie la nuit peuvent être installées. Ce dispositif
                est un plus onéreux.<br><br>
                <span>Attention:</span> Lors de coupures de courant du réseau, votre générateur photovoltaïque cessera  de produire
                (conformément aux normes en vigueur).<br>
                Il ne doit donc pas être considéré comme une alimentation de secours.
            </p>
        </div>

        <router-link to="/reseaux/Mes-besoins" class="rubrique-suivante">
            <p>Suivant</p>
            <span class="fleche-haut"></span>
            <span class="fleche-bas"></span>
        
        </router-link>
        <router-link to="/reseaux/Qu'est-ce-que-c'est" class="rubrique-precedente">
            <span class="fleche-haut-Bis"></span>
            <span class="fleche-bas-Bis"></span>
            <p>Précédent</p>
        
        </router-link>

    </div>

</template>

<script>
export default {
    name:'Comment-marche-reseaux',

}
</script>

<style scoped src="./Commentsamarchereseaux.css">



</style>