<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="d-flex justify-content-between flex-wrap flex-column flex-md-row container-md">
      <router-link :to="{ name: 'home' }"><i class="bi bi-pc-display"></i> Equipos</router-link>
      <router-link :to="{ name: 'empleados' }"><i class="bi bi-people-fill"></i> Empleados</router-link>
      <router-link :to="{ name: 'asignados' }"><i class="bi bi-database-fill-lock"></i> Asignar Equipos</router-link>
      <router-link :to="{ name: 'marcas' }"><i class="bi bi-apple"></i> Marcas</router-link>
      <router-link :to="{ name: 'referencias' }"><i class="bi bi-boxes"></i> Referencias</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav a {
  margin: 0.5rem 0rem;
  padding: 0.5rem;
  color: white;
  text-align: center;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: 0.3s ease-in-out;
  opacity: 0.95;
  font-weight: 700;
}

nav a:hover {
  border-bottom: 1px solid white;
  scale: 1.1;
  opacity: 1;
}
</style>
