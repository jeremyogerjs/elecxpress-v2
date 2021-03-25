<template>
    <div>
        <h1>Le solaire connecté aux reseaux</h1>
        <hr />
        <div class="rubrique14">
            <h2>Financièrement ? C'est Rentable ?</h2>

            <p class="description-special" style="font-style: italic">
                Comme la majorité des Calédoniens vous êtes attachés à cette nature
                généreuse,<br />
                vous souhaitez léguer à vos enfants un environnement vivable en
                réduisant votre empreinte carbone et l'idée d'être autonome vous séduit.
            </p>

        <div class="description6">
            <h3>OK, mais à quel prix?</h3>
            <p class="description">
            Pour commencer, je vous invite à comprendre votre facture
            d’électricité sur ce fascicule édité par la société ENERCAL
            <a
                href="https://www.enercal.nc/sites/portail/files/atoms/files/flyer_comprendre_ma_facture_-_ok.pdf"
                target="_blank"
                >"Comprendre ma facture d'électricité".</a
            ><br />
            La "prime fixe" est immuable. Pour faire simple, c'est l'équivalent un
            loyer pour la location du compteur.<br />
            La partie "consommation sur la période" est la somme que vous payez
            pour votre consommation de KWH (Kilo Watt Heure).<br />
            Pour les producteurs d'énergie photovoltaïque, une autre ligne
            détaillera la production vendu.<br /><br />
            Une installation photovoltaïque est conçue pour une durée de 20 à 25
            ans (ELECXPRESS garantit ses produits 10 ans par défaut et possibilité
            d'extention de garantie jusqu'à 20 ans ).<br />
            Suivant les conditions environnementales , nos installations
            permettent de produire le KWH (Kilo watt heure) entre 6,8 et 9 cfp
            pendant 25 ans.<br />
            Pour comparaison 1KWH (kilo watt heure) issu de votre compteur vous
            coûte 32,24 cfp.<br /><br />
            <span style="font-size: small">*Prix d'achat du générateur photovoltaïque / Production estimée de
                KWH sur 20 ans.</span>
            </p>
        </div>

      <div class="description7">
        <h3>Economie réalisée par KWH et consommé.</h3>
        <p class="description">
          L'économie moyenne par KWH produit et consommé est donc de 19,24cfp
          par KWH. Tarif d'achat KWH compteur - coût de production KWH solaire =
          32,24cfp - 9cfp = 23,24cfp<br /><br />
          Sachant qu'un abonné basse tension Calédonien consomme en moyenne 3950
          kwh par an (source: Enercal "rapport d'activité 2014/2015") l'économie
          réalisée est, pour un consommateur moyen, de 3950 X 19,24 = 91 798 cfp
          par an.
        </p>
      </div>

      <div class="description8">
        <h3>Bénéfice réalisée par la revente du surplus d'énergie solaire</h3>
        <p class="description">
          Le prix d'achat du KWH vert est fixé à 21 cfp.<br />
          Bénéfice = Prix de revente - coût de production = 21-9= 12cfp
        </p>
      </div>

      <div class="description9">
        <h3>Conclusion</h3>
        <p class="description">
            Dans les conditions actuelles, il est plus rentable de consommer sa
            propre électricité (économie: 23,24cfp/KWH), que de la revendre
            (Bénéfice: 12cfp/KWH).<br />
            Surdimensionner un générateur photovoltaïque ne fera que retarder le
            retour sur investissement.<br />
            Pour être le plus rentable possible (financièrement), Il doit être
            dimensionné pour, au maximum, couvrir vos besoins.<br /><br />
        <span style= "font-size: 1.5rem">Note: </span> Le coût de 
            l'installation photovoltaïque d'autoconsommation est déductibles de
            votre déclaration fiscale au titre de "travaux ou achat d'équipement
            dits "vert" (propriétaires et locataires)" (plafonnée à 1 000 000 cfp
            par an pour les particuliers).<br />
            Les éventuelles extensions, si elle sont réalisées, dans les années
            ultérieures seraient également déductibles.
        </p>
      </div>
    </div>
    <router-link to="/reseaux/Comment-faire" class="rubrique-suivante">
      <p>Suivant</p>
      <span class="fleche-haut"></span>
      <span class="fleche-bas"></span>
    </router-link>
    <router-link to="/reseaux/Mes-besoins" class="rubrique-precedente">
      <span class="fleche-haut-Bis"></span>
      <span class="fleche-bas-Bis"></span>
      <p>Précédent</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Rentable",
};
</script>

<style scoped src="./Rentable.css">
</style>