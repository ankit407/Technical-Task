<template>
  <div>
   <div class="header">
    <div class="text-h6">Add User</div>
    <q-btn
      round
      color="primary"
      :icon="isFormOpen ? 'remove' : 'add'"
      @click="isFormOpen = !isFormOpen"
     class="addButton"
    />
   </div>
    <q-form @submit="addUser" v-if="isFormOpen">
      <q-input
        outlined
        class="q-mt-md"
        dense
        v-model="form.name"
        label="Full Name"
      />
      <q-input
        outlined
        class="q-mt-md"
        dense
        v-model="form.email"
        label="Email"
      />
      <q-input
        outlined
        class="q-mt-md"
        dense
        v-model="form.school"
        label="School Name"
      />
      <q-input
        outlined
        class="q-mt-md"
        dense
        v-model="form.collage"
        label="Collage Name"
      />
      <q-btn label="submit" type="submit" color="primary" class="q-mt-md"></q-btn>
    </q-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { userStore } from "@/store/userStore";

const store = userStore();
const isFormOpen = ref(false);

const form = ref({});
const addUser = () => {
  store.users.push(form.value);
};
</script>
<style  scoped>

.addButton{

  margin: 30px;
}
.header{
  width: 100%;
  padding: 1px;
  background: purple;
  display: flex;
  justify-content: space-between;
}
</style>
