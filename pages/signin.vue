<template>
  <div class="page">
    <div class="forms">
      <div class="form-login-wrapper">
        <h1>Sign In</h1>
        <form @submit.prevent>
          <input v-model="userData.email" placeholder="Email" />
          <input v-model="userData.password" placeholder="Password"/>
          <button>
            Sign In
          </button>
        </form>
        <NuxtLink :to="{ name: 'register' }">Sign Up</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

const userData = reactive({
  email: '',
  password: ''
})

</script>

<style lang="scss" scoped>

.forms {
  display: flex;
  gap: 40px;
  max-width: 940px;
  margin: 0 auto;
}

.form-login-wrapper {
  width: 100%;
}

.form-login-wrapper h1 {
  font-family: Audiowide;
  font-size: 32px;
  text-align: center;
}

.form-login-wrapper form {
  width: 100%;
}

.form-login-wrapper form input {
  display: block;
  width: 100%;
}
</style>