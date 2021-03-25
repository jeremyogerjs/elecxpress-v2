<template>
  <div id="app">
    <header-top></header-top>

        <router-view></router-view>

    <footer-bottom></footer-bottom>
  </div>
</template>

<script>

import Header from './components/navigation/Header.vue'

import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    'header-top':Header,
    'footer-bottom':Footer,
  }
}
</script>

<style >

body{
    font-family:  'Open Sans', sans-serif !important;
    font-size: 18px !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow-x: hidden !important;
    background-color: #ffffff !important;
    height: 100% !important;  
}


.ponctuation img{
    height: 20px !important;
    width: 20px !important;
}
a{
    cursor: pointer !important;
}

hr{
    height: 0 !important;
    
    color: #eeeeee !important;
    border-top: 1px solid rgba(0, 0, 0, .2) !important;
}
h1{
    font-size: 3rem !important;
    align-items: center !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    margin: 0 auto !important;
    padding: 0.1rem 0;
    
}

/*----------------------style All component----------------------------------- */

 h2{
    margin: 0 auto !important;
    width: max-content !important;
    align-items: center !important;   
    font-size: 1.75rem !important;
    font-weight: bold !important;
}

.description,.description-blanc,.description-rubrique5-1,.description-rubrique5-1bis,.description-rubrique5-2,.description-rubrique5-3,.description-rubrique5-4,.description-rubrique5-5,.description-rubrique5-6,.description-rubrique5-6Bis{
    margin-left: 10px !important;
    padding: 20px !important;
    line-height: 2rem !important;
    font-size: 1rem !important;  
}
.description-rubrique5-6Bis{
    margin-left: 15rem !important;
}

.description-rubrique5-1bis,.description-rubrique5-2,.description-rubrique5-3,.description-rubrique5-4,.description-rubrique5-5{
    display: flex !important;
    justify-content: space-evenly !important;
    width: 480px !important;
    height: 600px;
}

.description a,.description-gris-1 a, .description-rubrique11-1 a,.description-blanc a{
    text-decoration: underline;
    color: black;
    transition: color .3s;
}

.description a:hover, .description-gris-1 a:hover, .description-rubrique11-1 a:hover,.description-blanc a:hover{
    color:#b1c700;

}

/*---------------------------- bouton Next and previous-----------------------------------------*/

.rubrique-suivante{
    width: max-content;
    height: 40px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    text-decoration: none;
    color: black;
    position: relative;
    float: right;
    transition: color .3s;
    right: 50px;
}
.rubrique-suivante p {
    position: relative;
    align-items: center;
    margin-top: 15px ;
    
}
.rubrique-suivante:hover, .rubrique-precedente:hover{
    color: #b1c700;
    text-decoration: none;

}
.fleche-haut{
   width: 40px;
   height: 4px;
   position: absolute;
   background-color: #b1c700;
   opacity: 0.3;
   transform: rotate(45deg);
   margin-top: 10px;
   margin-left: 66px;
}


.rubrique-suivante .fleche-bas{
    width: 40px;
    height: 4px;
    position: absolute;
    background-color: #b1c700;
    opacity: 0.3;
    transform: rotate(-45deg);
    margin-left: 66px;
    margin-top: 37px;
}

.rubrique-precedente p {
    position: relative;
    align-items: center;
    margin-top: 15px ;
    margin-left: 35px;
    font-size: 18px;
}
.rubrique-precedente{
    width: max-content;
    height: 40px;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    color: black;
    float: left;
    display: flex;
    flex-direction: row;
    justify-content: right;
    transition: color .3s;
    left: 10px;
}   

.fleche-haut-Bis{
    width: 40px;
    height: 4px;
    position: absolute;
    background-color: #b1c700;
    opacity: 0.3;
    transform: rotate(-45deg);
    margin-top: 10px;
    margin-right: 80px;
}



.fleche-bas-Bis{

    width: 40px;
    height: 4px;
    position: absolute;
    background-color: #b1c700;
    opacity: 0.3;
    transform: rotate(45deg);
    margin-right: 80px;
    margin-top: 37px;
}

/*-------------------------------Responsive------------------------------ */

@media only screen and (max-width:1540px){

    .apres{
        left: 92rem;
    }
    .avant,.apres{
        bottom: 350px;
    }


}

@media only screen and (max-width:770px){

    body{
        height: 1024px;
    }
    h2,h1,h3{
        width: 100% !important;
        text-align: center !important;

    }

    .footer p {
        margin-bottom: 0;
        margin-block-end: 0;
    }
}

@media only screen and (max-width: 415px )  {

    body{
        font-size: 16px !important;
    }
    h2{
       text-align: center;
    }

    h1{
      text-align: center;
    }

    .description{
       font-size: 1rem;
       line-height: 1.5rem;
   }

    .avant,.apres{
        bottom: 15%;
        margin: 0 0;
    }

    .apres{
        left: 18rem;
    }

}


</style>
