<template>
  <table class="table table-bordered text-center">
    <thead class="table-dark">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Designation</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Actions</th>
      </tr>
    </thead>

```
<tbody>
  <tr v-for="emp in employees" :key="emp.id">
    <td>{{ emp.id }}</td>
    <td>{{ emp.name }}</td>
    <td>{{ emp.designation }}</td>
    <td>{{ emp.department }}</td>
    <td>{{ emp.salary }}</td>
    <td>
      <router-link :to="`/edit/${emp.id}`" class="btn btn-warning btn-sm me-2">
        Edit
      </router-link>

      <button class="btn btn-danger btn-sm" @click="$emit('delete', emp.id)">
        Delete
      </button>
    </td>
  </tr>
</tbody>
```

  </table>
</template>

<script>
export default {
  props: ['employees'],
  emits: ['delete']
}
</script>
