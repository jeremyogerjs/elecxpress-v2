<template>
    
    <div>
            <h1>Le solaire connecté aux reseaux</h1>
        <hr>
        <div class="rubrique15">

            <h2>Je veux mon installation ! Comment faire ?</h2>

            <ol class="description">
                <li><a href="mailto: info@elecxpress.net" class="contact">Contactez nous.</a><br>  

                    Nous conviendrons d'un rendez-vous chez vous, afin de définir les paramètres  
                    environnementaux de l'installation et écouter vos souhaits.<br> 
                    Nous aurons besoin de votre dernière facture d'électricité.<br>      
                    Nous vous conseillerons pour réduire votre consommation énergétique.
                </li><br>
                <li> Nous vous transmettrons ensuite une étude personnalisée regroupant une simulation 
                    de production d'énergie annuelle,<br> et les paramètres financiers 
                    (coût de production du KWH; amortissement,<br> gains estimés sur la durée de vie du générateur), 
                    un devis détaillé pour la fourniture<br> et l'installation du générateur photovoltaïque et si vous le souhaitez,<br> 
                    pour la mise en œuvre des mesures nécessaires à une réduction de votre consommation énergétique.
                </li><br>
                <li>Vous êtes satisfait de l'offre et décidez de donner votre "bon pour accord" pour la réalisation des travaux.</li><br>
                <li>Nous engageons les démarches administratives nécéssaires:
                    <ul style="list-style: none;">
                        <li>-Demande d'accord de raccordement au gestionnaire de réseau concerné (EEC ou ENERCAL selon la commune de résidence),</li>
                        <li>-Demande l’autorisation d’exploiter une centrale photovoltaïque auprés de la DIMENC.</li>
                        <li>-Nous prenons contact avec le COTSUEL pour fixer une date de contrôle.</li>
                    </ul> 
            </li><br>
                <li>Nous effectuons l'installation. Nous faisons contrôler notre installation par le COTSUEL.</li><br>
                <li>Nous vous fournissons une attestation COTSUEL de conformité de l'installation photovoltaïque,<br>
                    l'accord de raccordement (Enercal ou EEC), et l'autorisation d'exploiter de la DIMENC.
                </li><br>
                <li>Avec ces documents, vous demandez à votre gestionnaire de réseau (ENERCAL ou EEC)
                    d'établir,<br> et de signer les conditions particulières appliquées au rachat de  votre surplus d’électricité.
                </li><br>
                <li>Le gestionnaire réseau prend rendez-vous avec vous et remplace votre compteur actuel
                    par un compteur double flux,<br> (qui peut déterminer la quantité d'énergie consommée et produite par votre domicile).<br>
                    Vous n'aurez à payer que la main d'oeuvre et frais de déplacement. Le compteur est pris en charge par
                    le gestionnaire du réseau.
                </li><br>
                <li>Ayé! Fin prêt!Nous venons faire la mise en service et les contrôles inhérents.</li><br>
                <li>Tous les ans, nous faisons avec vous un bilan de la production d'énergie réelle par rapport aux prévisions initiales.</li><br>
            </ol>
        </div>

        <router-link to="/reseaux/Nous-faire-confiance" class="rubrique-suivante">
            <p>Suivant</p>
            <span class="fleche-haut"></span>
            <span class="fleche-bas"></span>
        
        </router-link>
        <router-link to="/reseaux/Rentable" class="rubrique-precedente">
            <span class="fleche-haut-Bis"></span>
            <span class="fleche-bas-Bis"></span>
            <p>Précédent</p>
        
        </router-link>
    </div>

</template>

<script>
export default {
    name:'Commentfaire',
}
</script>

<style scoped src="./CommentFaire.css">



</style>