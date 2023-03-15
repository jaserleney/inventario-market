<template>
  <main class="container-md my-4">
    <div class="d-flex justify-content-between align-content-center border-bottom p-3">
      <h1>{{ title }}</h1>
      <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Nuevo</button>
    </div>
    <Loader v-if="loader" />
    <Table v-else :brandsArr="brands" @select-id="deleteId" />
    <Form :title="title" />
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
import fetchData from "../helpers/fetchData.js";

export default {
  components: {
    Table: defineAsyncComponent(() => import("../components/Table.vue")),
    Loader: defineAsyncComponent(() => import("../components/Loader.vue")),
    Form: defineAsyncComponent(() => import("../components/Form.vue")),
  },

  data() {
    return {
      title: "Marcas",
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

    async deleteId(id) {
      let url = `http://localhost:3000/api/v1/brands/${id}`;
      this.loader = true;
      const data = await fetchData(url, "delete");
      this.getBrands();
      this.loader = false;
    },
  },

  created() {
    this.getBrands();
  },
};
</script>

<style></style>
