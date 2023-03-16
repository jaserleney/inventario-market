<template>
  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="form">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cambiar {{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="$emit('submitUpdate', obj)">
          <div class="modal-body">
            <div class="form-group my-3">
              <template v-if="title === 'Marcas'">
                <label for="name" class="form-label">{{ title }}</label>
                <input type="text" id="name" class="form-control" placeholder="Nombre De Referencia" v-model="obj.name" />
              </template>
              <template v-if="title === 'Referencias'">
                <label for="name" class="form-label">{{ title }}</label>
                <input type="text" id="name" class="form-control" placeholder="Nombre De Referencia" v-model="obj.name" />
              </template>
              <template v-if="title === 'Empleados'">
                <label for="name" class="form-label">{{ title }}</label>
                <input type="text" id="name" class="form-control my-2" placeholder="Nombre" v-model="obj.name" />
                <input type="text" id="name" class="form-control my-2" placeholder="Apellido" v-model="obj.lastname" />
                <input type="text" id="name" class="form-control my-2" placeholder="Direccion" v-model="obj.address" />
                <input type="text" id="name" class="form-control my-2" placeholder="Telefono" v-model="obj.phone" />
                <input type="text" id="name" class="form-control my-2" placeholder="Email" v-model="obj.email" />
              </template>
              <template v-if="title === 'Equipos'">
                <label for="name" class="form-label">Nombre Equipo</label>
                <input type="text" id="name" class="form-control mb-1" placeholder="Nombre" v-model="obj.name" />
                <label for="serial" class="form-label">Serial</label>
                <input type="text" id="serial" class="form-control mb-1" placeholder="Serial" v-model="obj.serial" />
                <label for="des" class="form-label">Descripcion</label>
                <input type="text" id="des" class="form-control mb-1" placeholder="Descripcion" v-model="obj.description" />
                <label for="status" class="form-label">Estado</label>
                <input type="text" id="status" class="form-control mb-1" placeholder="Estado" v-model="obj.status" />
              </template>
              <template v-if="title === 'Asignar Equipo'">
                <label for="des" class="form-label">Descripcion</label>
                <input type="text" id="des" class="form-control mb-2" placeholder="Descripcion" v-model="obj.description" />
                <label for="id_empleado" class="form-label">ID Empleado</label>
                <input type="text" id="id_empleado" class="form-control mb-2" placeholder="ID Empleado" v-model="obj.id_employee" />
                <label for="name_empleado" class="form-label">Nombre Empleado</label>
                <input
                  type="text"
                  id="name_empleado"
                  class="form-control mb-2"
                  placeholder=" Nombre Empleado"
                  v-model="obj.name_employee"
                />
                <label for="id_product" class="form-label">ID Producto</label>
                <input type="text" id="id_product" class="form-control mb-2" placeholder="ID Producto" v-model="obj.id_product" />
                <label for="name_product" class="form-label">Nombre Producto</label>
                <input type="text" id="name_product" class="form-control mb-2" placeholder="Nombre Producto" v-model="obj.name_product" />
              </template>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },

    obj: {
      type: Object,
    },
  },
};
</script>

<style></style>
