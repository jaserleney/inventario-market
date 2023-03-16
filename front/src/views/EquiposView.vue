<template>
  <main class="container-md my-4">
    <div class="d-flex justify-content-between align-content-center border-bottom p-3">
      <h1>{{ title }}</h1>
      <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Nuevo</button>
    </div>
    <Loader v-if="loader" />
    <Table v-else :productsArr="products" @select-id="deleteId" @changeId="changeProduct" />
    <Form :title="title" />
    <FormPut :title="title" :obj="productsSelected" @submitUpdate="updateId" v-if="productsSelected" />
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
      title: "Equipos",
      products: [],
      loader: false,
      productsSelected: {},
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

    async deleteId(id) {
      let url = `http://localhost:3000/api/v1/products/${id}`;
      this.loader = true;
      const data = await fetchData(url, "delete");
      this.getProducts();
      this.loader = false;
    },

    changeProduct(arr) {
      console.log(arr);
      const [{ _id, name, description, serial, status }, { _id: id_brand, name: name_brand }, { _id: id_ref, name: name_ref }] = arr;
      const objUp = {
        _id,
        name,
        description,
        serial,
        status,
        id_brand,
        name_brand,
        name_brand,
        id_ref,
        name_ref,
      };
      this.productsSelected = objUp;
    },

    async updateId(obj) {
      const { _id, name, description, serial, status, id_brand, name_brand, id_ref, name_ref } = obj;
      const objUp = {
        _id,
        name,
        serial,
        description,
        status,
        brand_id: {
          _id: id_brand,
          name: name_brand,
        },
        ref_id: {
          _id: id_ref,
          name: name_ref,
        },
      };

      let url = `http://localhost:3000/api/v1/products/${obj._id}`;
      this.loader = true;
      const data = await fetchData(url, "put", objUp);
      this.$router.go(this.$router.currentRoute);
    },
  },

  created() {
    this.getProducts();
  },
};
</script>

<style></style>
