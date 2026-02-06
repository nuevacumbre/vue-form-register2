<template>
  <form @submit.prevent="handleSubmit" class="form">
    <!-- EMAIL -->
    <div class="field">
      <label>Email</label>
      <input 
        v-model="form.email"
        type="email"
        placeholder="usuario@ejemplo.com"
        :class="{ error: errors.email }"
        @blur="validateEmail"
      >
      <div v-if="errors.email" class="error">{{ errors.email }}</div>
    </div>

    <!-- PASSWORD -->
    <div class="field">
      <label>Password (≥6 caracteres)</label>
      <input 
        v-model="form.password"
        type="password"
        placeholder="••••••"
        :class="{ error: errors.password }"
        @blur="validatePassword"
      >
      <div v-if="errors.password" class="error">{{ errors.password }}</div>
    </div>

    <!-- CONFIRM PASSWORD -->
    <div class="field">
      <label>Confirmar Password</label>
      <input 
        v-model="form.confirmPassword"
        type="password"
        placeholder="••••••"
        :class="{ error: errors.confirmPassword }"
        @blur="validateConfirmPassword"
      >
      <div v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</div>
    </div>

    <!-- FULL NAME -->
    <div class="field">
      <label>Nombre Completo</label>
      <input 
        v-model="form.fullName"
        type="text"
        placeholder="Juan Pérez"
        :class="{ error: errors.fullName }"
        @blur="validateFullName"
      >
      <div v-if="errors.fullName" class="error">{{ errors.fullName }}</div>
    </div>

    <!-- AGE -->
    <div class="field">
      <label>Edad</label>
      <input 
        v-model.number="form.age"
        type="number"
        min="18"
        max="100"
        placeholder="25"
        :class="{ error: errors.age }"
        @blur="validateAge"
      >
      <div v-if="errors.age" class="error">{{ errors.age }}</div>
    </div>

    <!-- GENDER (RADIO) -->
    <div class="field">
      <label>Género</label>
      <div class="radio-group">
        <div class="radio-item">
          <input 
            type="radio" 
            id="male" 
            value="male" 
            v-model="form.gender"
          >
          <label for="male">Masculino</label>
        </div>
        <div class="radio-item">
          <input 
            type="radio" 
            id="female" 
            value="female" 
            v-model="form.gender"
          >
          <label for="female">Femenino</label>
        </div>
        <div class="radio-item">
          <input 
            type="radio" 
            id="other" 
            value="other" 
            v-model="form.gender"
          >
          <label for="other">Otro</label>
        </div>
      </div>
      <div v-if="errors.gender" class="error">{{ errors.gender }}</div>
    </div>

    <!-- SKILLS (MULTIPLE SELECT) -->
    <div class="field">
      <label>Habilidades (Selecciona múltiples)</label>
      <select 
        v-model="form.skills"
        multiple
        :class="{ error: errors.skills }"
        @change="validateSkills"
      >
        <option value="js">JavaScript</option>
        <option value="vue">Vue.js</option>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="node">Node.js</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
      <div v-if="errors.skills" class="error">{{ errors.skills }}</div>
      <div v-if="form.skills.length > 0" class="skills-selected">
        <small>Seleccionadas: {{ form.skills.length }}</small>
      </div>
    </div>

    <!-- COUNTRY (SIMPLE SELECT) -->
    <div class="field">
      <label>País</label>
      <select 
        v-model="form.country"
        :class="{ error: errors.country }"
        @change="validateCountry"
      >
        <option value="" disabled>Selecciona un país</option>
        <option value="es">España</option>
        <option value="mx">México</option>
        <option value="ar">Argentina</option>
        <option value="co">Colombia</option>
        <option value="us">Estados Unidos</option>
        <option value="uk">Reino Unido</option>
      </select>
      <div v-if="errors.country" class="error">{{ errors.country }}</div>
    </div>

    <!-- BIO -->
    <div class="field">
      <label>Biografía (Máx. 500 caracteres)</label>
      <textarea 
        v-model="form.bio"
        rows="4"
        placeholder="Cuéntanos sobre ti..."
        :class="{ error: errors.bio }"
        @input="validateBio"
      ></textarea>
      <div class="char-count" :class="{ 'near-limit': form.bio.length > 450 }">
        {{ form.bio.length }}/500
      </div>
      <div v-if="errors.bio" class="error">{{ errors.bio }}</div>
    </div>

    <!-- NEWSLETTER (CHECKBOX) -->
    <div class="field">
      <div class="checkbox-item">
        <input 
          type="checkbox" 
          id="newsletter" 
          v-model="form.newsletter"
        >
        <label for="newsletter">Suscribirme al newsletter</label>
      </div>
    </div>

    <!-- TERMS (CHECKBOX) -->
    <div class="field">
      <div class="terms">
        <div class="checkbox-item">
          <input 
            type="checkbox" 
            id="terms" 
            v-model="form.terms"
            :class="{ error: errors.terms }"
          >
          <label for="terms">
            Acepto los 
            <a href="#" class="terms-link">términos y condiciones</a>
          </label>
        </div>
        <div class="terms-text">
          Al marcar esta casilla, aceptas nuestra política de privacidad y términos de servicio.
        </div>
      </div>
      <div v-if="errors.terms" class="error">{{ errors.terms }}</div>
    </div>

    <!-- SUBMIT -->
    <button 
      type="submit" 
      class="submit-btn"
      :disabled="!isFormValid"
    >
      🚀 Registrar Cuenta
    </button>

    <!-- SUCCESS MESSAGE -->
    <div v-if="submitSuccess" class="success-message">
      ✅ ¡Registro exitoso! Revisa la consola para ver los datos.
    </div>
  </form>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

// Reactive form data
const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  age: null,
  gender: 'male',
  skills: [],
  country: '',
  bio: '',
  newsletter: false,
  terms: false
})

const errors = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  age: '',
  gender: '',
  skills: '',
  country: '',
  bio: '',
  terms: ''
})

const submitSuccess = ref(false)

// Validaciones individuales
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email) {
    errors.email = 'El email es requerido'
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Por favor ingresa un email válido'
  } else {
    errors.email = ''
  }
}

const validatePassword = () => {
  if (!form.password) {
    errors.password = 'La contraseña es requerida'
  } else if (form.password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres'
  } else {
    errors.password = ''
  }
}

const validateConfirmPassword = () => {
  if (!form.confirmPassword) {
    errors.confirmPassword = 'Confirma tu contraseña'
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden'
  } else {
    errors.confirmPassword = ''
  }
}

const validateFullName = () => {
  if (!form.fullName) {
    errors.fullName = 'El nombre es requerido'
  } else if (form.fullName.length < 3) {
    errors.fullName = 'El nombre debe tener al menos 3 caracteres'
  } else {
    errors.fullName = ''
  }
}

const validateAge = () => {
  if (!form.age) {
    errors.age = 'La edad es requerida'
  } else if (form.age < 18 || form.age > 100) {
    errors.age = 'La edad debe estar entre 18 y 100 años'
  } else {
    errors.age = ''
  }
}

const validateSkills = () => {
  if (form.skills.length === 0) {
    errors.skills = 'Por favor selecciona al menos una habilidad'
  } else {
    errors.skills = ''
  }
}

const validateCountry = () => {
  if (!form.country) {
    errors.country = 'Por favor selecciona un país'
  } else {
    errors.country = ''
  }
}

const validateBio = () => {
  if (!form.bio) {
    errors.bio = 'La biografía es requerida'
  } else if (form.bio.length > 500) {
    errors.bio = 'La biografía no debe exceder 500 caracteres'
  } else {
    errors.bio = ''
  }
}

const validateTerms = () => {
  if (!form.terms) {
    errors.terms = 'Debes aceptar los términos y condiciones'
  } else {
    errors.terms = ''
  }
}

// Validación completa del formulario
const isFormValid = computed(() => {
  return (
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword &&
    !errors.fullName &&
    !errors.age &&
    !errors.skills &&
    !errors.country &&
    !errors.bio &&
    form.terms &&
    form.email &&
    form.password &&
    form.confirmPassword &&
    form.fullName &&
    form.age &&
    form.country &&
    form.bio
  )
})

// Handle form submission
const emit = defineEmits(['submit'])

const handleSubmit = () => {
  // Validar todo antes de enviar
  validateEmail()
  validatePassword()
  validateConfirmPassword()
  validateFullName()
  validateAge()
  validateSkills()
  validateCountry()
  validateBio()
  validateTerms()

  // Verificar si hay errores
  const hasErrors = Object.values(errors).some(error => error !== '')
  
  if (hasErrors) {
    console.log('❌ Errores de validación:', errors)
    return
  }

  // Prepare data for submission
  const formData = {
    ...form,
    submitDate: new Date().toISOString()
  }
  
  console.log('✅ FORM ENVIADO:', formData)
  emit('submit', formData)
  
  // Show success message
  submitSuccess.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    submitSuccess.value = false
    Object.assign(form, {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      age: null,
      gender: 'male',
      skills: [],
      country: '',
      bio: '',
      newsletter: false,
      terms: false
    })
    
    // Limpiar errores
    Object.keys(errors).forEach(key => {
      errors[key] = ''
    })
  }, 3000)
}
</script>

<style scoped>
.char-count {
  text-align: right;
  font-size: 0.875rem;
  color: #718096;
  margin-top: 4px;
}

.char-count.near-limit {
  color: #e53e3e;
  font-weight: 500;
}

.skills-selected {
  margin-top: 8px;
  font-size: 0.875rem;
  color: #667eea;
  font-weight: 500;
}

select[multiple] {
  height: 140px;
  padding: 12px;
}

select[multiple] option {
  padding: 8px 12px;
  margin: 4px 0;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

select[multiple] option:hover {
  background: #edf2f7;
}

select[multiple] option:checked {
  background: #667eea;
  color: white;
}
</style>