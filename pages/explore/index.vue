<template>
  <main class="bg-gray-50 w-full h-screen p-20">
    <Breadcrumb :model="items" style="background-color: #f9fafb;">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon, 'text-color']" />
            <span class="text-primary text-14 font-semibold">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Breadcrumb>
    <section>
      <span class="flex text-violet-500 text-4xl font-bold">Explorar</span>
      <span class="flex text-gray-400 text-2xl">Novos Lançamentos</span>
    </section>
    <section class="grid grid-cols-2 bg-gray-100 mt-14 w-full drop-shadow-md p-4">      
      <div v-for="info in information">
        <CardBookDescription :information="info" />
      </div>  
    </section>
  </main>
</template>

<script setup lang="ts">
import { BookInformation } from '~/models/book-information'

const items = ref([
  { icon: 'pi pi-home', label: 'Home', route: '/' },
  { icon: 'pi pi-compass', label: 'Explorar', route: '/explore' }
])

function redirect(puth: string) {
  const route = useRouter()
  route.push(puth)
}

const information = ref([
  {
    statusBook: 'COMPLETED', bookTitle: 'Mermaids', authorName: 'Lisa Ann Scott', rating: '+10',
    abstract: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,' +
              'consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2Lorem ipsum dolor sit amet,' +
              'consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    textStyle: [{ label: 'Romance' },{ label: 'Fantasia' },{ label: 'Infantil' },{ label: 'Aventura' },{ label: 'Infantil' },{ label: 'Aventura' }],
    image: 'https://www.scholastic.ca/hipoint/648/?src=9781338266979.jpg&w=380',
  } as BookInformation,
  {
    statusBook: 'COMPLETED', bookTitle: 'A Million Miles Away', authorName: 'Nome do autor', rating: '+10',
    abstract: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,' +
              'consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2Lorem ipsum dolor sit amet,' +
              'consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    textStyle: [{ label: 'Drama' },{ label: 'Aventura' },{ label: 'História' }],
    image: 'https://www.justwatch.com/images/poster/307580601/s718/a-million-miles-away.jpg',
  } as BookInformation,
  {
    statusBook: 'INCOMPLETED', bookTitle: 'Titulo do Livro', authorName: 'Nome do autor', rating: '+8',
    abstract: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,' +
              'consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2Lorem ipsum dolor sit amet,' +
              'consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    textStyle: [{ label: 'Fantasia' },{ label: 'Infantil' },{ label: 'Aventura' }],
    image: 'https://www.scholastic.ca/hipoint/648/?src=9781338266979.jpg&w=380',
  } as BookInformation
])
</script>