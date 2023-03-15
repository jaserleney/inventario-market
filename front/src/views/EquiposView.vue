<template>
  <main class="container-md my-4">
    <div class="d-flex justify-content-between align-content-center">
      <h1>Equipos</h1>
      <button type="button" class="btn btn-dark">Nuevo</button>
    </div>
    <Loader v-if="loader" />
    <Table v-else :productsArr="products" />
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
      products: [],
      loader: false,
    };
  },

  methods: {
    async getProducts() {
      this.loader = true;
      let url = "http://localhost:3000/api/v1/products";
      const { data } = await fetchData(url);
      console.log(data);
      this.products = data;
      this.loader = false;
    },
  },

  created() {
    this.getProducts();
  },
};
</script>

<style></style>
