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
              <template v-if="title === 'Marcas'">
                <label class="form-label" for="brand">{{ title }}</label>
                <input type="text" class="form-control" id="brand" v-model="brand" placeholder="Nombre Marca" />
              </template>
              <template v-if="title === 'Referencias'">
                <label class="form-label" for="ref">{{ title }}</label>
                <input type="text" class="form-control" id="ref" v-model="ref" placeholder="Nombre Refencia" />
              </template>
              <template v-if="title === 'Empleados'">
                <label class="form-label" for="employee">{{ title }}</label>
                <input type="text" class="form-control my-2" id="employee" v-model="employee.name" placeholder="Nombre" />
                <input type="text" class="form-control my-2" id="employee" v-model="employee.lastname" placeholder="Apellidos" />
                <input type="text" class="form-control my-2" id="employee" v-model="employee.address" placeholder="Direccion" />
                <input type="text" class="form-control my-2" id="employee" v-model="employee.phone" placeholder="Telefono" />
                <input type="email" class="form-control my-2" id="employee" v-model="employee.email" placeholder="Email" />
              </template>
              <template v-if="title === 'Equipos'">
                <label class="form-label" for="employee">{{ title }}</label>
                <input type="text" class="form-control my-2" id="employee" v-model="product.name" placeholder="Nombre" />
                <input type="number" class="form-control my-2" id="employee" v-model="product.serial" placeholder="Serial" />
                <input type="text" class="form-control my-2" id="employee" v-model="product.brand_id" placeholder="ID Marca" />
                <input type="text" class="form-control my-2" id="employee" v-model="product.ref_id" placeholder="ID Refencia" />
                <input type="text" class="form-control my-2" id="employee" v-model="product.description" placeholder="Descripcion" />
                <input type="text" class="form-control my-2" id="employee" v-model="product.status" placeholder="Estado" />
              </template>
              <template v-if="title === 'Asignar Equipo'">
                <label class="form-label" for="employee">{{ title }}</label>
                <input type="text" class="form-control my-2" id="employee" v-model="asign.employee_id" placeholder="ID Empleado" />
                <input type="text" class="form-control my-2" id="employee" v-model="asign.product_id" placeholder="ID Producto" />
                <input type="text" class="form-control my-2" id="employee" v-model="asign.description" placeholder="Descripcion" />
              </template>
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
    return {
      brand: "",
      ref: "",
      employee: {
        name: "",
        lastname: "",
        address: "",
        phone: "",
        email: "",
      },
      product: {
        name: "",
        serial: "",
        brand_id: "",
        ref_id: "",
        description: "",
        status: "",
      },
      asign: {
        employee_id: "",
        product_id: "",
        description: "",
      },
    };
  },

  methods: {
    async postNew() {
      if (this.$route.fullPath === "/marcas") {
        const url = "http://localhost:3000/api/v1/brands";
        const data = await fetchData(url, "post", { name: this.brand });
        // console.log(data);
        this.brand = "";
        Swal.fire("Exito", "Se registro con exito!", "success");
        this.$router.go(this.$router.currentRoute);
      }

      if (this.$route.fullPath === "/") {
        const url = "http://localhost:3000/api/v1/products";
        const data = await fetchData(url, "post", this.product);
        // console.log(data);
        this.product = {
          name: "",
          serial: "",
          brand_id: "",
          ref_id: "",
          description: "",
          status: "",
        };
        Swal.fire("Exito", "Se registro con exito!", "success");
        this.$router.go(this.$router.currentRoute);
      }

      if (this.$route.fullPath === "/referencias") {
        const url = "http://localhost:3000/api/v1/refs";
        const data = await fetchData(url, "post", { name: this.ref });
        console.log(data);
        this.ref = "";
        Swal.fire("Exito", "Se registro con exito!", "success");
        this.$router.go(this.$router.currentRoute);
      }

      if (this.$route.fullPath === "/empleados") {
        const url = "http://localhost:3000/api/v1/employees";
        const data = await fetchData(url, "post", this.employee);
        console.log(data);
        this.employee = {
          name: "",
          lastname: "",
          address: "",
          phone: "",
          email: "",
        };
        Swal.fire("Exito", "Se registro con exito!", "success");
        this.$router.go(this.$router.currentRoute);
      }
      if (this.$route.fullPath === "/asignados") {
        const url = "http://localhost:3000/api/v1/assigns";
        const data = await fetchData(url, "post", this.asign);
        console.log(data);
        this.asign = {
          employee_id: "",
          product_id: "",
          description: "",
        };
        Swal.fire("Exito", "Se registro con exito!", "success");
        this.$router.go(this.$router.currentRoute);
      }
    },
  },
};
</script>

<style></style>
