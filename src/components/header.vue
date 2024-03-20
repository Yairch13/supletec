<template>
   
   <nav class="navbar navbar-expand-lg bg-body-tertiary" id="footer" >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Inicio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
    <router-link to="/page" class="nav-link active" aria-current="page">Catálogo</router-link>
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
              
     
  </template>

<script>
export default {
  name: 'HeaderComponent', // Cambio del nombre del componente
};
</script>


<style scoped>

footer{

  background: linear-gradient(to top,#D0D3D4, #144d5b);
  color: #1B2631;
}




</style>