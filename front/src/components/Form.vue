<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Nueva {{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group my-3">
              <label class="form-label" for="brand">{{ title }}</label>
              <input type="text" class="form-control" id="brand" :v-model="brand || product" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" @click.prevent="postNew">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import fetchData from "../helpers/fetchData.js";

export default {
  props: {
    title: {
      type: String,
    },
  },

  data() {
    brand: "";
    product: "";
  },

  methods: {
    async postNew() {
      if (this.$route.fullPath === "/marcas") {
        const url = "http://localhost:3000/api/v1/brands";
        const data = await fetchData(url, "post", { name: this.brand });
        Swal.fire("Exito", "Se registro con exito!", "success");
        this.brand = "";
        this.$router.go(this.$router.currentRoute);
      }

      if (this.$route.fullPath === "/") {
        const url = "http://localhost:3000/api/v1/products";
        const data = await fetchData(url, "post", { name: this.product });
        Swal.fire("Exito", "Se registro con exito!", "success");
        this.product = "";
        this.$router.go(this.$router.currentRoute);
      }
    },
  },

  created() {
    console.log(this.$route.fullPath);
  },
};
</script>

<style></style>
