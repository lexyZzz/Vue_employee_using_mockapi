<template>
  <div>
    <h2 class="mb-3">
      {{ isEditMode ? 'Edit Employee' : 'Add Employee' }}
    </h2>

```
<EmployeeForm
  :initial-data="employeeData"
  :is-edit-mode="isEditMode"
  :saving="saving"
  @submit="handleSubmit"
  @cancel="goHome"
/>
```

  </div>
</template>

<script>
import axios from 'axios'
import EmployeeForm from '../components/EmployeeForm.vue'

const API_URL = 'https://69f740b9dd0c226688ed903e.mockapi.io/api/employees'

export default {
  name: 'AddEditView',

  components: {
    EmployeeForm
  },

  data() {
    return {
      employeeData: {
        name: '',
        designation: '',
        department: '',
        salary: ''
      },
      saving: false
    }
  },

  computed: {
    // check if editing
    isEditMode() {
      return !!this.$route.params.id
    },

    employeeId() {
      return this.$route.params.id
    }
  },

  methods: {
    // GET one employee (for edit)
    async fetchEmployee() {
      const res = await axios.get(`${API_URL}/${this.employeeId}`)
      this.employeeData = res.data
    },

    // CREATE or UPDATE
    async handleSubmit(formData) {
      this.saving = true

      if (this.isEditMode) {
        await axios.put(`${API_URL}/${this.employeeId}`, formData)
      } else {
        await axios.post(API_URL, formData)
      }

      this.goHome()
      this.saving = false
    },

    goHome() {
      this.$router.push('/')
    }
  },

  mounted() {
    if (this.isEditMode) {
      this.fetchEmployee()
    }
  }
}
</script>
