<template>
    <main>
        <p>Esta é a view de cadastro da conta</p>
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 class="text-xl font-bold mb-4 text-center">Teste de Autenticação</h2>

            <!-- Verifica se o usuário está autenticado -->
            <div v-if="!currentUser">
                <!-- Formulário de Cadastro -->
                <h3 class="text-lg font-medium mb-2">Cadastrar</h3>
                <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border mb-2 rounded" />
                <input v-model="password" type="password" placeholder="Senha" class="w-full p-2 border mb-4 rounded" />

                <!-- Botão de Cadastro -->
                <button @click="handleRegister" class="bg-blue-500 text-white px-4 py-2 rounded w-full"
                    :disabled="isLoading">
                    Cadastrar
                </button>

                <p v-if="message" :class="{ 'text-red-500': isError, 'text-green-500': !isError }" class="mt-4">
                    {{ message }}
                </p>
            </div>

            <div v-else>
                <p>Usuário cadastrado: {{ currentUser.email }}</p>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuth from '~/composables/useAuth';

const { registerUser, currentUser } = useAuth();

const email = ref('');
const password = ref('');
const message = ref('');
const isError = ref(false);
const isLoading = ref(false);

// Funções de Cadastro, Login e Logout
const handleRegister = async () => {
    // Verifica se os campos não estão vazios
    if (!email.value || !password.value) {
        message.value = 'Por favor, preencha ambos os campos.';
        isError.value = true;
        return;
    }

    try {
        // Tenta registrar o usuário
        await registerUser(email.value, password.value);
        message.value = 'Cadastro realizado com sucesso!';
        isError.value = false;

        // Limpa os campos após o cadastro
        email.value = '';
        password.value = '';
    } catch (error: unknown) {
        // Trata o erro retornado pelo Firebase
        if (error instanceof Error) {
            // Verifica se o erro é de "email already in use"
            if (error.message.includes('email-already-in-use')) {
                message.value = 'Este email já está cadastrado.';
            } else {
                message.value = `Erro: ${error.message}`;
            }
            isError.value = true;
        } else {
            message.value = 'Erro desconhecido. Tente novamente.';
            isError.value = true;
        }
    }
};
</script>
