<template>
  <div class="bg-black-quartenary w-full h-full">
    <div class="py-12">
      <client-only>
        <swiper class="swiper w-full" :options="swiperOption">
          <swiper-slide>
            <kit-atoms-cards-banner />
          </swiper-slide>
          <swiper-slide>
            <kit-atoms-cards-banner />
          </swiper-slide>
          <swiper-slide>
            <kit-atoms-cards-banner />
          </swiper-slide>
          <swiper-slide />
        </swiper>
      </client-only>
    </div>
    <div class="w-full max-w-7xl mx-auto px-7">
      <div class="flex w-full justify-between items-end">
        <div>
          <div class="w-28 h-1 bg-red-secondary" />
          <h4 class="text-white pt-3">Discover Movies</h4>
        </div>
        <div class="flex items-center space-x-5">
          <button
            :class="
              activeSort === 'rate'
                ? 'bg-red-primary hover:bg-red-secondary'
                : 'bg-black bg-opacity-20 hover:bg-gray-800'
            "
            class="py-1.5 px-4 cursor-pointer rounded-full"
            @click="sortByPopularity()"
          >
            <p class="text-white text-sm">Popularity</p>
          </button>
          <button
            :class="
              activeSort === 'release'
                ? 'bg-red-primary hover:bg-red-secondary'
                : 'bg-black bg-opacity-20 hover:bg-gray-800'
            "
            class="py-1.5 cursor-pointer px-4 rounded-full"
            @click="sortByReleaseDate()"
          >
            <p class="text-white text-sm z-10">Release Date</p>
          </button>
        </div>
      </div>
      <div
        class="flex justify-between items-center flex-wrap mt-10 pb-28 space-y-4"
      >
        <div v-for="list in tempMovies" :key="list.id">
          <kit-atoms-cards-movies :item="list" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class MoleculesSectionsDiscover extends Vue {
  @Prop({ required: false, type: Array }) readonly data!: any
  activeSort: 'rate' | 'release' = 'rate'
  tempMovies: any = this.data

  swiperOption: object = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
  }

  sortByReleaseDate() {
    this.activeSort = 'release'
    const temp = this.data
    temp.sort((a: any, b: any) => {
      return a.release < b.release ? -1 : a.release > b.release ? 1 : 0
    })
    this.tempMovies = temp
  }

  sortByPopularity() {
    this.activeSort = 'rate'
    const temp = this.data
    temp.sort((a: any, b: any) => {
      return parseInt(a.rate) - parseInt(b.rate)
    })
    this.tempMovies = temp
  }

  mounted() {
    this.sortByPopularity()
  }
}
</script>

<style>
.ssr-carousel-dot-icon {
  width: 100px !important;
  height: 10px !important;
  background-color: red !important;
}
</style>
