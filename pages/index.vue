<template>
    <main>
        <p>Esta é a home</p>
    </main>
</template>

<script setup lang="ts">
const { registerUser } = useFirebaseAuth() // auto-imported

const creds = reactive({
  email: "",
  password: ""
})

async function handleRegistration() {
  await registerUser(creds.email, creds.password)
}
</script>