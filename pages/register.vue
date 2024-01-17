<template>
  <div class="page">
    <div class="forms">
      <div class="form-login-wrapper">
        <h1>Register</h1>
        <form @submit.prevent="registerUser">
          <input v-model="registerData.email" placeholder="Email" />
          <input type="password" v-model="registerData.password" placeholder="Password"/>
          <input type="password" v-model="registerData.passwordConfirm" placeholder="Password Confirm" />
          <input v-model="registerData.firstName" placeholder="First Name" />
          <input v-model="registerData.lastName" placeholder="Last Name" />

          <button type="submit">
            Register
          </button>
        </form>
        <NuxtLink :to="{ name: 'signin' }">Already Registered?</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

const registerData = reactive({
  email: '',
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: '',
})

const registerUser = async ()=> {
  try {
    const result = await $fetch('/api/customer/register', {
      method: 'post',
      body: registerData
    })
    console.log( result )
  } catch (err) {
    console.log( err )
  }
}

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