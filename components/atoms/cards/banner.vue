<template>
  <nuxt-link
    :id="id"
    :to="`/movies/${item.idMovie}`"
    :class="isHighlight ? 'opacity-100' : 'opacity-100 md:opacity-40'"
    class="flex flex-row w-72 md:w-full md:pb-12"
  >
    <img
      :src="require(`@/assets/images/movies/${item.image}`)"
      class="w-40 h-60 md:w-60 md:h-full"
      alt="movie-items"
      quality="30"
    />
    <div class="px-2 pt-4 md:px-6 md:pt-6 bg-black-primary w-80 my-2 md:my-5">
      <div class="flex items-center">
        <img
          src="@/assets/images/icon/star.svg"
          alt="star-icon"
          class="w-4 mr-1.5"
        />
        <p class="text-lg font-bold text-white">{{ item.rate }}</p>
      </div>
      <h3 class="text-white text-2xl">{{ item.title }}</h3>
      <div class="flex items-center pt-3">
        <p class="text-white text-md">{{ parsedDateYear }}</p>
        <img src="@/assets/images/icon/dot.svg" alt="dot-icon" class="mx-1.5" />
        <p class="text-white text-md">Sci-Fi</p>
      </div>
      <p class="text-white text-xs pt-3 line-clamp-3 md:line-clamp-7">
        {{ item.overview }}
      </p>
    </div>
  </nuxt-link>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { RecommendationMovies } from '~/types'
@Component({})
export default class AtomsCardsBanner extends Vue {
  @Prop({ required: false, type: Object }) readonly item!: RecommendationMovies
  @Prop({ required: false, type: Number }) readonly id!: number
  @Prop({ required: false, type: Boolean }) readonly isHighlight!: boolean
  get parsedDateYear() {
    const tempYear: Date = new Date(this.item.release)
    return tempYear.getFullYear()
  }
}
</script>
