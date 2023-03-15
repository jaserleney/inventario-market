<template>
  <main class="container-md my-4">
    <div class="d-flex justify-content-between align-content-center">
      <h1>Marcas</h1>
      <button type="button" class="btn btn-dark">Nuevo</button>
    </div>
    <Loader v-if="loader" />
    <Table v-else :brandsArr="brands" />
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
      brands: [],
      loader: false,
    };
  },

  methods: {
    async getBrands() {
      this.loader = true;
      let url = "http://localhost:3000/api/v1/brands";
      const { data } = await fetchData(url);
      console.log(data);
      this.brands = data;
      this.loader = false;
    },
  },

  created() {
    this.getBrands();
  },
};
</script>

<style></style>
