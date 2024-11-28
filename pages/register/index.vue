<template>
    <main>
        <p>Esta é a view de cadastro da conta</p>
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                <h2 class="text-xl font-bold mb-4 text-center">Teste de Autenticação</h2>

                <!-- Verifica se o usuário está autenticado -->
                <div v-if="!currentUser">
                    <!-- Cadastro -->
                    <h3 class="text-lg font-medium mb-2">Cadastrar</h3>
                    <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border mb-2 rounded" />
                    <input v-model="password" type="password" placeholder="Senha"
                        class="w-full p-2 border mb-4 rounded" />
                    <button @click="handleRegister"
                        class="bg-blue-500 text-white px-4 py-2 rounded w-full">Cadastrar</button>

                    <!-- Login -->
                    <h3 class="text-lg font-medium mt-6 mb-2">Entrar</h3>
                    <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border mb-2 rounded" />
                    <input v-model="password" type="password" placeholder="Senha"
                        class="w-full p-2 border mb-4 rounded" />
                    <button @click="handleLogin"
                        class="bg-green-500 text-white px-4 py-2 rounded w-full">Entrar</button>
                </div>

                <!-- Usuário logado -->
                <div v-else>
                    <h3 class="text-lg font-medium mb-2">Bem-vindo(a)!</h3>
                    <p class="mb-4">Usuário logado: {{ currentUser?.email }}</p>
                    <button @click="handleLogout" class="bg-red-500 text-white px-4 py-2 rounded w-full">Sair</button>
                </div>

                <!-- Mensagem -->
                <p class="text-center text-sm text-gray-600 mt-4">{{ message }}</p>
            </div>
        </div>

    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';

// Importa os métodos do composable
const { register, login, logout, currentUser } = useAuth();

// Campos do formulário
const email = ref('');
const password = ref('');
const message = ref('');

// Funções de Cadastro, Login e Logout
const handleRegister = async () => {
    try {
        await register(email.value, password.value);
        message.value = 'Cadastro realizado com sucesso!';
        email.value = '';
        password.value = '';
    } catch (error) {
        message.value = error instanceof Error ? error.message : 'Erro desconhecido';
    }
};

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