<template>
    <main class="flex m-4 items-center flex-col gap-4">
        <span class="flex p-2 bg-yellow-400 rounded-lg"> Pagina de login </span>
        <button class="flex w-fit rounded-lg p-2 bg-violet-500" @click="authenticated('validate'), redirectUser.push('/explore')">Autenticar</button> 
        <button class="flex w-fit rounded-lg p-2 bg-violet-500" @click="clearAuthentication(),redirectUser.push('/')">Desautenticar</button>
    </main>
</template>

<script setup lang="ts">

const redirectUser = useRouter()

</script>
