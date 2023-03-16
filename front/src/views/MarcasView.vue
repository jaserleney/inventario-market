<template>
  <main class="container-md my-4">
    <div class="d-flex justify-content-between align-content-center border-bottom p-3">
      <h1>{{ title }}</h1>
      <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Nuevo</button>
    </div>
    <Loader v-if="loader" />
    <Table v-else :brandsArr="brands" @select-id="deleteId" @changeId="changeBrand" />
    <Form :title="title" />
    <FormPut :title="title" :obj="brandsSelected" @submitUpdate="updateId" />
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
    FormPut: defineAsyncComponent(() => import("../components/FormPut.vue")),
  },

  data() {
    return {
      title: "Marcas",
      brands: [],
      loader: false,
      brandsSelected: {},
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

    changeBrand(obj) {
      console.log(obj);
      this.brandsSelected = obj;
    },

    async updateId(obj) {
      let url = `http://localhost:3000/api/v1/brands/${obj._id}`;
      this.loader = true;
      const data = await fetchData(url, "put", obj);
      this.$router.go(this.$router.currentRoute);
    },
  },

  created() {
    this.getBrands();
  },
};
</script>

<style></style>
