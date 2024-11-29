<template>
    <main>
        <p>Esta é a view de login</p>
        <section>
            <!-- Teste Login -->
            <h3 class="text-lg font-medium mt-6 mb-2">Entrar</h3>
            <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border mb-2 rounded" />
            <input v-model="password" type="password" placeholder="Senha" class="w-full p-2 border mb-4 rounded" />
            <button @click="handleLogin" class="bg-green-500 text-white px-4 py-2 rounded w-full">Entrar</button>
        </section>
        <br>

        <!-- Teste Usuário logado -->
        <section>
            <p class="mb-4">Usuário logado: {{ currentUser?.email }}</p>
            <button @click="handleLogout" class="bg-red-500 text-white px-4 py-2 rounded w-full">Sair</button>
        </section>
        <p class="text-center text-sm text-gray-600 mt-4">{{ message }}</p>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuth from '~/composables/useAuth';

const { login, logout, currentUser } = useAuth();

const email = ref('');
const password = ref('');
const message = ref('');

const handleLogin = async () => {
    try {
        await login(email.value, password.value);
        message.value = 'Login realizado com sucesso!';
        email.value = '';
        password.value = '';
    } catch (error) {
        message.value = error instanceof Error ? error.message : 'Erro desconhecido';
    }
};

const handleLogout = async () => {
    try {
        await logout();
        message.value = 'Logout realizado com sucesso!';
    } catch (error) {
        message.value = error instanceof Error ? error.message : 'Erro desconhecido';
    }
};
</script>