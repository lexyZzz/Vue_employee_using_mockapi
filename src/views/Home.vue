<template>
  <div>
    <h2 class="mb-3">Employee List</h2>

```
<EmployeeList
  :employees="employees"
  @delete="handleDelete"
/>
```

  </div>
</template>

<script>
import axios from 'axios'
import EmployeeList from '../components/EmployeeList.vue'

const API_URL = 'https://69f740b9dd0c226688ed903e.mockapi.io/api/employees'

export default {
  name: 'HomeView',

  components: {
    EmployeeList
  },

  data() {
    return {
      employees: []
    }
  },

  methods: {
    // GET all employees
    async fetchEmployees() {
      const res = await axios.get(API_URL)
      this.employees = res.data
    },

    // DELETE employee
    async handleDelete(id) {
      await axios.delete(`${API_URL}/${id}`)
      this.fetchEmployees()
    }
  },

  mounted() {
    this.fetchEmployees()
  }
}
</script>
