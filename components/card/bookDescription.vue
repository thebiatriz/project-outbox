<template>
  <div class="grid grid-cols-2 w-[588px] my-4 mx-2 ">
    <div class="flex w-fit shadow-[12px_12px_0_0_rgb(139,92,246)]">
      <img class="flex w-[260px]" :src="bookInformation.information?.image" />
    </div>
    <div>
      <span class="flex text-2xl text-gray-800">{{ bookInformation.information?.bookTitle }}</span>
      <span class="flex text-gray-500 mt-2">{{ bookInformation.information?.authorName }}</span>
      <div class="flex flex-row gap-3 mt-4 text-sm text-gray-400">
        <i class="pi pi-eye" />
        <span>12k</span>
        <i class="pi pi-star" />
        <span>12k</span>
        <i class="pi pi-list" />
        <span>32</span>
      </div>
      <div class="flex w-[330px] max-h-[161px] text-justify text-gray-400 overflow-hidden text-ellipsis ">
        <a class="flex text-4xl text-violet-500">"</a>
        {{ bookInformation.information?.abstract }}
      </div>
      <div class="mt-6">
        <span v-if="bookInformation.information?.statusBook === 'COMPLETED'" class="flex my-4 p-1 w-fit rounded-lg border-solid border-[1px] border-green-500">Concluido</span>
        <span v-else class="flex my-4 p-1 w-fit rounded-lg border-solid border-[1px] border-yellow-400">Em andamento</span>
      </div>
      <div class="flex overflow-hidden">      
        <div v-for="tag in bookInformation.information?.textStyle">
          <div class="snap-center" >
            <span class="flex m-1 p-2 w-fit text-sm rounded-2xl bg-neutral-300">{{ tag.label }}</span>
          </div>
        </div>        
        <span class="flex items-center text-sm text-gray-400">{{ bookInformation.information?.rating }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BookInformation } from '~/models/book-information'

const bookInformation = defineProps({ information: BookInformation })

</script>