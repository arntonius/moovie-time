<template>
  <div class="h-64 w-32 md:h-96 md:w-56">
    <div v-if="!isHover" class="relative" @mouseover="isHover = true">
      <img
        :src="require(`@/assets/images/movies/${item.image}`)"
        class="h-44 w-32 md:h-80 md:w-56"
        alt="movies-item"
        quality="30"
      />
      <div
        class="absolute right-0 top-0 opacity-80 bg-gray-600 text-white p-1 md:px-3 md:py-2"
      >
        {{ item.rate }}
      </div>
    </div>
    <div
      v-else
      class="bg-gray-600 flex flex-col justify-center items-center h-44 w-32 md:w-56 md:h-80"
      @mouseleave="isHover = false"
    >
      <div class="flex items-center pb-5">
        <img
          src="@/assets/images/icon/star.svg"
          alt="star-icon"
          class="w-4 md:w-8"
        />
        <p class="text-sm md:text-xl text-white pl-2.5">{{ item.rate }}</p>
      </div>
      <p
        v-for="(list, key) in item.category"
        :key="key"
        class="text-xs md:text-lg text-white"
      >
        {{ list }}
      </p>
      <nuxt-link
        :to="`/movies/${item.id}`"
        class="py-1 md:py-2 px-4 md:px-8 bg-red-600 rounded-full mt-5 md:mt-11"
      >
        <p class="text-white text-xs md:text-sm">VIEW</p>
      </nuxt-link>
    </div>
    <h6 class="text-white text-xs md:text-md pt-4">{{ item.title }}</h6>
    <p class="text-gray-secondary text-sm font-bold">{{ parsedDateYear }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Movies } from '~/types'
@Component({})
export default class AtomsCardsMovies extends Vue {
  @Prop({ required: false, type: Object }) readonly item!: Movies
  isHover: boolean = false

  get parsedDateYear() {
    const tempYear: Date = new Date(this.item.release)
    return tempYear.getFullYear()
  }
}
</script>
