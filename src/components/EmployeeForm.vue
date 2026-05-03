<template>
  <div class="d-flex justify-content-center">
    <div class="card p-3" style="width: 400px;">


  <h5 class="text-center mb-3">Employee Details</h5>

  <form @submit.prevent="saveEmployee">

    <input
      v-model="form.name"
      placeholder="Name"
      class="form-control mb-2"
      required
    />

    <input
      v-model="form.designation"
      placeholder="Designation"
      class="form-control mb-2"
      required
    />

    <input
      v-model="form.department"
      placeholder="Department"
      class="form-control mb-2"
      required
    />

    <input
      v-model="form.salary"
      type="number"
      placeholder="Salary"
      class="form-control mb-3"
      required
    />

    <button class="btn btn-primary w-100">
      {{ isEditMode ? 'Update' : 'Add' }}
    </button>

  </form>
</div>


  </div>
</template>

<script>
export default {
  props: ['initialData', 'isEditMode', 'saving'],
  emits: ['submit', 'cancel'],

  data() {
    return {
      form: {
        name: '',
        designation: '',
        department: '',
        salary: ''
      }
    }
  },

  watch: {
    initialData: {
      immediate: true,
      handler(val) {
        this.form = { ...val }
      }
    }
  },

  methods: {
    saveEmployee() {
      this.$emit('submit', this.form)
    }
  }
}
</script>
