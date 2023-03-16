<template>
  <div>
    <div v-if="!isHover" class="relative" @mouseover="isHover = true">
      <img
        :src="require(`@/assets/images/movies/${item.image}`)"
        class="h-80 w-56"
        quality="30"
      />
      <div
        class="absolute right-0 top-0 opacity-80 bg-gray-600 text-white px-3 py-2"
      >
        {{ item.rate }}
      </div>
    </div>
    <div
      v-else
      class="bg-gray-600 flex flex-col justify-center items-center w-56 h-80"
      @mouseleave="isHover = false"
    >
      <div class="text-xl text-white">
        <font-awesome-icon
          ref="chartIcon"
          :icon="['fab', 'whatsapp']"
          class="text-yellow-300 pr-2.5 text-2xl inline-block"
        />
        {{ item.rate }}
      </div>
      <p class="text-lg text-white pt-12">{{ item.category }}</p>
      <nuxt-link
        :to="`/movies/${item.id}`"
        class="py-2 px-8 bg-red-600 rounded-full mt-11"
      >
        <p class="text-white text-sm">VIEW</p>
      </nuxt-link>
    </div>
    <h6 class="text-white pt-4">{{ item.title }}</h6>
    <p class="text-gray-secondary text-sm font-bold">{{ parsedDateYear }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class AtomsCardsMovies extends Vue {
  @Prop({ required: false, type: Object }) readonly item!: any

  isHover: boolean = false

  get parsedDateYear() {
    const tempYear: Date = new Date(this.item.release)
    return tempYear.getFullYear()
  }

  // get imgUrl() {
  //   console.log("datas", this.item.image);
  //   return "@/assets/movies/below-zero.png";
  // }
}
</script>
