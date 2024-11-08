<template>
    <main>
        <p>Esta é a view principal do usuário</p>
    </main>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: 'auth'
})
</script>
