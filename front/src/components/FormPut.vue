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
              </template>
              <template v-if="title === 'Equipos'"> </template>
              <!-- <template v-if="title === 'Asignar Equipo'">
                <label for="name" class="form-label">{{ title }}</label>
                <input type="text" id="name" class="form-control my-2" placeholder="Descripcion" v-model="obj.description" />
                <input type="text" id="name" class="form-control my-2" placeholder="Creado" v-model="obj.createdAt" />
                <input type="text" id="name" class="form-control my-2" placeholder="Actualizado" v-model="obj.updatedAt" />
                <input type="text" id="name" class="form-control my-2" placeholder="ID Producto" v-model="obj.product_id._id" />
                <input type="text" id="name" class="form-control my-2" placeholder="Nombre Producto" v-model="obj.product_id.name" />
                <input type="text" id="name" class="form-control my-2" placeholder="Nombre De Referencia" v-model="obj.employee_id._id" />
                <input type="text" id="name" class="form-control my-2" placeholder="Nombre De Referencia" v-model="obj.employee_id.name" />
              </template> -->
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
