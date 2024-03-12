<template>
  <div >
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="footer" >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Inicio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Catálogo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mis compras</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Perfil
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Editar perfil</a></li>
                <li><a class="dropdown-item" href="#">Ver</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
          <li class="nav-item">
            <a class="nav-link" href="#">Cerrar sesión</a>
          </li>
        </div>
      </div>
    </nav>
    <div id="contenido">
      <!-- Inicia carrusel -->
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../images/proto.jpg"  alt="..." id="discord">
                  </div>
                  <div class="carousel-item">
                    <img src="../images/critulina.jpg" alt="..." id="discord">
                  </div>
                  <div class="carousel-item">
                    <img src="../images/img2.jpg"  alt="..." id="discord">
                  </div>
                  <div class="carousel-item">
                    <img src="../images/creti/creatinauno.png"  alt="..." id="discord">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
      
    
      <!-- Termina carrusel -->
      <!-- Productos Desctacados -->
     <!-- Productos Destacados -->
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

          <div class="col-12 col-sm-4" id="target">
            <div class="card mb-4">
              <h5 class="card-title">Pre Entreno Dragon Pharma Venom Inferno 40 Servs Extreme Sabor Cotton candy</h5>
              <img src="../images/preentreno/venom.jpg" class="card-img-top" alt="" id="pd">
              <div class="card-body">
               <p class="card-text">El pre-entrenamiento Dragon Pharma Venom es el cóctel más explosivo de estimulantes de alta energía.</p>
                <a href="#" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-4" id="target">
            <div class="card mb-4">
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
                              <!-- Footer -->
                            <footer class="footer mt-auto py-3">
                              <div class="container">
                                <div class="row">
                                  <!-- Columnas a la izquierda -->
                                  <div class="col-md-4">
                                    <ul class="list-unstyled">
                                        <li><a href="#">Trabaja con nosotros</a></li>
                                        <li><a href="#">Términos y condiciones</a></li>
                                        <li><a href="#">Cómo cuidamos tu privacidad</a></li>
                                    </ul>
                                  </div>
                                  <div class="col-md-4">
                                    <ul class="list-unstyled">
                                        <li><a href="#">Accesibilidad</a></li>
                                        <li><a href="#">Ayuda</a></li>
                                        <li><a href="#">Contáctanos</a></li>
                                     </ul>
                                  </div>
                                  <div class="col-md-4">
                                    <ul class="list-unstyled">
                                        <li><a href="#">Preguntas frecuentes</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Servicios</a></li>
                                    </ul>
                                  </div>
                                  
                                 
                                </div>

                                <!-- Mensaje de Copyright -->
                                <div class="row mt-3">
                                  <div class="col-md-12 text-center">
                                    <p>Copyright © 2021-2024 El presente canal de instrucción o ambiente, es operado por DeRemate.Com de México, S. de R.L. de C.V. identificada bajo la marca comercial "Supletec".</p>
                                  </div>
                                </div>
                              </div>
                            </footer>
	
                </div>
              </div>
   
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
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
footer{

  background: conic-gradient(#D0D3D4, #ECF0F1);
  color: #1B2631;
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
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
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
