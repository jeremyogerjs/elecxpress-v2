import Accueil from './components/Accueil/Accueil'
import pourqui from './components/Pour-qui/Pour-qui'
import Commentmarche from './components/Commentsamarche/Commentmarche'
import Conseils from './components/Conseils/Conseil'
import Puissance from './components/Puissance/Puissance'
import Questce from './components/Questce/Questce'
import Commentmarchereseaux from './components/Commentsamarchereseaux/Commentmarchereseaux'
import Besoin from './components/Besoin/Besoin'
import Rentable from './components/rentable/Rentable'
import Commentfaire from './components/CommentFaire/CommentFaire'
import Confiance from './components/Confiance/Confiance'
import Elec from './components/Elecgeneral/Elecgeneral'
import Realisations from './components/Realisations/Realisation'
import Contact from './components/contactForm/Contact'
export default[

    {path:'/', component: Accueil},
    {path:"/site-isole/c'est-pour-qui", component: pourqui},
    {path:"/site-isole/comment-sa-marche", component: Commentmarche},
    {path:"/site-isole/Conseils", component: Conseils},
    {path:"/site-isole/Quelle-Puissance-me-faut-il", component: Puissance},
    {path:"/reseaux/Qu'est-ce-que-c'est", component: Questce},
    {path:"/reseaux/Comment-sa-marche", component: Commentmarchereseaux},
    {path:"/reseaux/Mes-besoins", component: Besoin},
    {path:"/reseaux/Rentable", component: Rentable},
    {path:"/reseaux/Comment-faire", component: Commentfaire},
    {path:"/reseaux/Nous-faire-confiance", component: Confiance},
    {path:"/Electricite-general", component: Elec},
    {path:"/Nos-Realisations", component: Realisations},
    {path:"/Nous-Contacter", component: Contact},
]
    
    
    
    