<template>
    <nav class="fixed top-0 w-full z-50">
        <Toolbar class="!bg-gray-800 !border-gray-800 !rounded-none !py-[2vh] !font-roboto !font-medium !text-xl">
            <template #start>
                <figure class="flex items-center cursor-pointer" @click="navigateTo('/')">
                    <img src="../assets/images/out-box.svg" alt="Logotipo do site Outbox" class="h-16 pl-[3vw]" />
                </figure>
            </template>
            <template #end>
                <section class="flex flex-row pr-[1vw]">
                    <div class="flex items-center">
                        <div v-for="view in views">
                            <NuxtLink :to="view.path">
                                <span :class="{ '!text-violet-400': isCurrentRoute(view.path) }"
                                    class="flex py-1 pr-[2vw] justify-center text-gray-50 hover:!text-violet-400">{{
                                        view.label }}</span>
                            </NuxtLink>
                        </div>
                    </div>
                    <div v-for="view in userRegistry" class="pr-[2vw]">
                        <Button :label="view.label" @click="navigateTo(view.path)"
                            class="!text-xl !w-28 !border-2 !bg-gray-800 !rounded-md duration-75 !border-violet-400 hover:!bg-violet-400" />
                    </div>
                </section>
            </template>
        </Toolbar>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue"

const views = ref([
    { label: "Home", path: "/" },
    { label: "Explorar", path: "/explore" },
    { label: "Criar", path: "/story" },
]);

const userRegistry = ref([
    { label: "Entrar", path: "/login" },
    { label: "Cadastrar", path: "/register" },
]);

function isCurrentRoute(path: string): boolean {
    const route = useRoute()
    return route.path === path
}
</script>