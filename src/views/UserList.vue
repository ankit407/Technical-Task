<template>
  <div class="q-pa-md">
    <q-table
      title="User List"
      :rows="store.users"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script setup>
import { userStore } from '@/store/userStore'
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Full Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
  { name: 'school', label: 'School', field: 'school', sortable: true },
  { name: 'collage', label: 'collage', field: 'collage' },

]

const store = userStore();


</script>
