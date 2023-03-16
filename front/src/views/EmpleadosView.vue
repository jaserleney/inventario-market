<template>
  <main class="container-md my-4">
    <div class="d-flex justify-content-between align-content-center border-bottom p-3">
      <h1>{{ title }}</h1>
      <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Nuevo</button>
    </div>
    <Loader v-if="loader" />
    <Table v-else :employeesArr="employees" @select-id="deleteId" @changeId="changeEmployee" />
    <Form :title="title" />
    <FormPut :title="title" :obj="employeeSelected" @submitUpdate="updateId" v-if="employeeSelected" />
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
      title: "Empleados",
      employees: [],
      loader: false,
      employeeSelected: {},
    };
  },

  methods: {
    async getEmployess() {
      this.loader = true;
      let url = "http://localhost:3000/api/v1/employees";
      const { data } = await fetchData(url);
      console.log(data);
      this.employees = data;
      this.loader = false;
    },

    async deleteId(id) {
      let url = `http://localhost:3000/api/v1/employees/${id}`;
      this.loader = true;
      const data = await fetchData(url, "delete");
      this.getEmployess();
      this.loader = false;
    },

    changeEmployee(obj) {
      console.log(obj);
      this.employeeSelected = obj;
    },

    async updateId(obj) {
      let url = `http://localhost:3000/api/v1/employees/${obj._id}`;
      this.loader = true;
      const data = await fetchData(url, "put", obj);
      this.$router.go(this.$router.currentRoute);
    },
  },

  created() {
    this.getEmployess();
  },
};
</script>

<style></style>
