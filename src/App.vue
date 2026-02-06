<template>
  <div class="container">
    <div class="form-card">
      <h1>🎯 Vue 3.6.0-alpha.2</h1>
      <h2>Lección 3: Binding Formularios</h2>
      <RegisterForm @submit="onSuccess" />
    </div>
  </div>
</template>

<script setup>
import RegisterForm from './components/RegisterForm.vue'

const onSuccess = (formData) => {
  console.log('✅ FORM ENVIADO:', formData)
  alert('¡Registro exitoso! Mira la consola.')
}
</script>