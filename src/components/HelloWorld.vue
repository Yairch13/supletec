<template>
  <div >
    <HeaderComponent />   
    <div id="contenido">
      <CarruselComponent />  
     <h1>PRODUCTOS DESTACADOS</h1>
      <div class="container">
        <!-- Primera fila de productos destacados -->
        <div class="row">
          <div class="col-12 col-sm-4">
            <div class="card mb-4" id="target">
              <h5 class="card-title">Suplemento En Polvo Birdman Performance Creatina Monohidratada</h5>
              <p class="card-price">Precio: $390.00 </p> 
              <img src="../images/creti/creatinauno.png" class="card-img-top" alt="" id="pd">
              <div class="card-body">
               <p class="card-text">Una nutrición balanceada juega un papel fundamental en la calidad de vida. Con el ritmo acelerado que llevan muchas personas.</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-4">
            <div class="card mb-4" id="target">
              <h5 class="card-title">Aminoácidos Bcaas + Glutamina Blu-e 1kg</h5>
              <img src="../images/creti/glutamina.jpg" class="card-img-top" alt="" id="pd">
              <div class="card-body">
               <p class="card-text">Es un componente clave en la síntesis de proteínas, ayudando en la construcción y reparación de tejidos.</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-4">
            <div class="card mb-4" id="target">
              <h5 class="card-title">Valara Creatina Monohidratada De Alta Pureza</h5>
              <img src="../images/creti/valara.jpg" class="card-img-top" alt="" id="pd">
              <div class="card-body">
               <p class="card-text">Este producto es un suplemento dietario, no es un medicamento. Suplementa dietas insuficientes.</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin de la primera fila -->

        <!-- Segunda fila de productos destacados preentreno -->
        <div class="row">
          <div class="col-12 col-sm-4">
            <div class="card mb-4" id="target">
              <h5 class="card-title">Pre Entreno Cbum Essential Pwo Raw Nutrition 30 Servicios Sabor Sour Watermelon</h5>
              <img src="../images/preentreno/sandia.jpg" class="card-img-top" alt="" id="pd">
              <div class="card-body">
               <p class="card-text"> El Essential Pre de RAW Nutrition es un preentrenamiento completo, ideal para todos los niveles de entrenamiento.</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-4" >
            <div class="card mb-4" id="target">
              <h5 class="card-title">Pre Entreno Dragon Pharma Venom Inferno 40 Servs Extreme Sabor Cotton candy</h5>
              <img src="../images/preentreno/venom.jpg" class="card-img-top" alt="" id="pd">
              <div class="card-body">
               <p class="card-text">El pre-entrenamiento Dragon Pharma Venom es el cóctel más explosivo de estimulantes de alta energía.</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-4" >
            <div class="card mb-4" id="target">
              <h5 class="card-title">Pre Workout Pre-xplode Primet Pre Entreno Piña</h5>
              <img src="../images/preentreno/piña.jpg" class="card-img-top" alt="" id="pd">
              <div class="card-body">
               <p class="card-text">Pre Entreno Pre-Xplode con precursor de testosterona es un precursor de óxido nítrico para lograr entrenamientos altos en energía fisica y mental.</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin de la segunda fila -->

        <!-- Tercera fila de productos destacados -->
        <div class="row">
          <div class="col-12 col-sm-4">
            <div class="card mb-4" id="target">
              <h5 class="card-title">Whey Protein Sabor Chocolate</h5>
              <img src="../images/protoinas/wheych.jpg" class="card-img-top" alt="" id="pd">
              <div class="card-body">
               <p class="card-text">Este producto es un suplemento dietario, no es un medicamento. Suplementa dietas insuficientes.</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-4">
            <div class="card mb-4" id="target">
              <h5 class="card-title">Proteina De Soya Calidad</h5>
              <img src="../images/protoinas/soya.jpg" class="card-img-top" alt="" id="pd">
              <div class="card-body">
               <p class="card-text">Una nutrición balanceada juega un papel fundamental en la calidad de vida.</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-4">
            <div class="card mb-4" id="target">
              <h5 class="card-title">Proteina Mutant Iso-surge 5 Lbs</h5>
              <img src="../images/protoinas/surge.jpg" class="card-img-top" alt="" id="pd">
              <div class="card-body">
               <p class="card-text">MUTANTE SURGE ISO es nuestra nueva proteína de acción rápida de suero hidrolizado y fórmula con deliciosos sabore.</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin de la tercera fila -->
      </div>
      <!-- Fin de Productos Destacados -->
      <FooterComponent />       
	
                </div>
              </div>
   
</template>
<script>
import FooterComponent from '../components/Footer';
import HeaderComponent from '../components/header';
import CarruselComponent from '../components/carrusel';
export default {
  name: 'HelloWorld',
  components: {
    FooterComponent,
    HeaderComponent,
    CarruselComponent,
  },
};
</script>


<!-- Agrega el atributo "scoped" para limitar el CSS a este componente -->
<style scoped>
h1{

  text-align: center;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
}

#target{
  background: linear-gradient(to top,#D0D3D4, #3a92a8);
   height: 480px;
   margin-bottom: 30px;
   border-radius: 10px; /* Aplica un borde redondeado */
   margin-top: 20px; /* Espacio entre el título y el margen */
   padding: 15px; /* Espacio interno dentro del margen */
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
}
#footer{
  background: conic-gradient(#154360, #1B2631 );
}
#contenido{
  margin-top: 50px;
}
h3 {
  margin: 40px 0 0;
}

#discord{

  width: 300px;
  height: 400px;
}
#pd{

width: 30%;
height: 200px;
display: block;
margin-left: 35%;
}



</style>
