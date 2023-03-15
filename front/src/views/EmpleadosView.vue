<template>
  <main class="container-md my-4">
    <div class="d-flex justify-content-between align-content-center">
      <h1>Empleados</h1>
      <button type="button" class="btn btn-dark">Nuevo</button>
    </div>
    <Table />
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Table: defineAsyncComponent(() => import("../components/Table.vue")),
  },
};
</script>

<style></style>
