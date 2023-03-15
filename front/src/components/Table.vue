<template>
  <table class="table table-dark table-hover my-4 text-center">
    <thead>
      <tr v-if="employeesArr">
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Direccion</th>
        <th scope="col">Tel</th>
        <th scope="col">Email</th>
        <th scope="col">Acciones</th>
      </tr>
      <tr v-if="productsArr">
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Serial</th>
        <th scope="col">Marca</th>
        <th scope="col">Referencia</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Estado</th>
        <th scope="col">Acciones</th>
      </tr>
      <tr v-if="asignProductsArr">
        <th scope="col">ID</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Producto ID</th>
        <th scope="col">Producto</th>
        <th scope="col">Empleado ID</th>
        <th scope="col">Empleado</th>
        <th scope="col">Creado</th>
        <th scope="col">Actualizado</th>
        <th scope="col">Acciones</th>
      </tr>
      <tr v-if="brandsArr">
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Acciones</th>
      </tr>
      <tr v-if="refsArr">
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="employeesArr">
        <tr v-for="{ _id, name, lastname, address, phone, email } in employeesArr" :key="_id">
          <td>{{ _id }}</td>
          <td>{{ name }}</td>
          <td>{{ lastname }}</td>
          <td>{{ address }}</td>
          <td>{{ phone }}</td>
          <td>{{ email }}</td>
          <td>
            <div class="d-flex justify-content-center gap-2 flex-column flex-md-row fs-6">
              <button class="btn btn-primary"><i class="bi bi-pen-fill"></i></button>
              <button class="btn btn-danger" @click="$emit('select-id', _id)"><i class="bi bi-trash3-fill"></i></button>
            </div>
          </td>
        </tr>
      </template>
      <template v-if="productsArr">
        <tr v-for="{ _id, name, serial, brand_id, ref_id, description, status } in productsArr" :key="_id">
          <td>{{ _id }}</td>
          <td>{{ name }}</td>
          <td>{{ serial }}</td>
          <td>{{ brand_id.name }}</td>
          <td>{{ ref_id.name }}</td>
          <td>{{ description }}</td>
          <td>{{ status }}</td>
          <td>
            <div class="d-flex justify-content-center gap-2 flex-column flex-md-row fs-6">
              <button class="btn btn-primary"><i class="bi bi-pen-fill"></i></button>
              <button class="btn btn-danger" @click="$emit('select-id', _id)"><i class="bi bi-trash3-fill"></i></button>
            </div>
          </td>
        </tr>
      </template>
      <template v-if="brandsArr">
        <tr v-for="{ _id, name } in brandsArr" :key="_id">
          <td>{{ _id }}</td>
          <td>{{ name }}</td>
          <td>
            <div class="d-flex justify-content-center gap-2 flex-column flex-md-row fs-6">
              <button class="btn btn-primary"><i class="bi bi-pen-fill"></i></button>
              <button class="btn btn-danger" @click="$emit('select-id', _id)"><i class="bi bi-trash3-fill"></i></button>
            </div>
          </td>
        </tr>
      </template>
      <template v-if="refsArr">
        <tr v-for="{ _id, name } in refsArr" :key="_id">
          <td>{{ _id }}</td>
          <td>{{ name }}</td>
          <td>
            <div class="d-flex justify-content-center gap-2 flex-column flex-md-row fs-6">
              <button class="btn btn-primary"><i class="bi bi-pen-fill"></i></button>
              <button class="btn btn-danger" @click="$emit('select-id', _id)"><i class="bi bi-trash3-fill"></i></button>
            </div>
          </td>
        </tr>
      </template>
      <template v-if="asignProductsArr">
        <tr v-for="{ _id, description, createdAt, updatedAt, employee_id, product_id } in asignProductsArr" :key="_id">
          <td>{{ _id }}</td>
          <td>{{ description }}</td>
          <td>{{ product_id._id }}</td>
          <td>{{ product_id.name }}</td>
          <td>{{ employee_id._id }}</td>
          <td>{{ employee_id.name }}</td>
          <td>{{ createdAt }}</td>
          <td>{{ updatedAt }}</td>
          <td>
            <div class="d-flex justify-content-center gap-2 flex-column flex-md-row fs-6">
              <button class="btn btn-primary"><i class="bi bi-pen-fill"></i></button>
              <button class="btn btn-danger" @click="$emit('select-id', _id)"><i class="bi bi-trash3-fill"></i></button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    employeesArr: {
      type: Array,
    },
    productsArr: {
      type: Array,
    },
    asignProductsArr: {
      type: Array,
    },
    brandsArr: {
      type: Array,
    },
    refsArr: {
      type: Array,
    },
  },
};
</script>

<style></style>
