<template>
  <main class="container-md my-4">
    <div class="d-flex justify-content-between align-content-center">
      <h1>Empleados</h1>
      <button type="button" class="btn btn-dark">Nuevo</button>
    </div>
    <Loader v-if="loader" />
    <Table v-else :employeesArr="employees" />
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
import fetchData from "../helpers/fetchData.js";

export default {
  components: {
    Table: defineAsyncComponent(() => import("../components/Table.vue")),
    Loader: defineAsyncComponent(() => import("../components/Loader.vue")),
  },

  data() {
    return {
      employees: [],
      loader: false,
    };
  },

  methods: {
    async getEmpleados() {
      this.loader = true;
      let url = "http://localhost:3000/api/v1/employees";
      const { data } = await fetchData(url);
      console.log(data);
      this.employees = data;
      this.loader = false;
    },
  },

  created() {
    this.getEmpleados();
  },
};
</script>

<style></style>
