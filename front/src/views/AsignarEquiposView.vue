<template>
  <main class="container-md my-4">
    <div class="d-flex justify-content-between align-content-center border-bottom p-3">
      <h1>{{ title }}</h1>
      <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Nuevo</button>
    </div>
    <Loader v-if="loader" />
    <Table v-else :asignProductsArr="asignProducts" @select-id="deleteId" @changeId="changeAsign" />
    <Form :title="title" />
    <FormPut :title="title" :obj="asignSelected" @submitUpdate="updateId" v-if="asignSelected" />
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
      title: "Asignar Equipo",
      asignProducts: [],
      loader: false,
      asignSelected: {},
    };
  },

  methods: {
    async getAsignProducts() {
      this.loader = true;
      let url = "http://localhost:3000/api/v1/assigns";
      const { data } = await fetchData(url);
      console.log(data);
      this.asignProducts = data;
      this.loader = false;
    },

    async deleteId(id) {
      let url = `http://localhost:3000/api/v1/assigns/${id}`;
      this.loader = true;
      const data = await fetchData(url, "delete");
      this.getAsignProducts();
      this.loader = false;
    },

    changeAsign(array) {
      console.log(array);
      const [{ _id, description }, { _id: id_employee, name: name_employee }, { name: name_product, _id: id_product }] = array;

      const objUpdate = {
        _id,
        description,
        id_employee,
        name_employee,
        name_product,
        id_product,
      };
      console.log(objUpdate);
      this.asignSelected = objUpdate;
    },

    async updateId(obj) {
      console.log(obj);
      let url = `http://localhost:3000/api/v1/assigns/${obj._id}`;
      this.loader = true;
      const data = await fetchData(url, "put", obj);
      console.log(data);
      this.$router.go(this.$router.currentRoute);
    },
  },

  created() {
    this.getAsignProducts();
  },
};
</script>

<style></style>
