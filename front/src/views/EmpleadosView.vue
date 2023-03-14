<template>
  <main class="container-md">
    <h1>Empleados</h1>
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
