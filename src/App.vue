<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-dark bg-dark px-3">
      <span class="navbar-brand">Employee Management</span>

```
  <div>
    <router-link to="/" class="btn btn-light me-2">Home</router-link>
    <router-link to="/add" class="btn btn-success">Add</router-link>
  </div>
</nav>

<!-- Page Content -->
<div class="container mt-4">
  <router-view />
</div>
```

  </div>
</template>
