<template>
  <div class="bg-black-quartenary w-full h-full">
    <div class="mt-12">
      <client-only>
        <swiper
          ref="mySwiperRef"
          class="swiper w-full"
          :options="swiperOption"
          @slideChange="setIndex"
        >
          <swiper-slide v-for="(item, key) in dataBanner" :key="key">
            <kit-atoms-cards-banner
              :id="key"
              :item="item"
              :is-highlight="activeIndexData === item.id"
            />
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </client-only>
    </div>
    <div class="w-full max-w-7xl mx-auto px-7">
      <div class="flex w-full justify-between items-end">
        <div>
          <div class="w-28 h-1 bg-red-secondary" />
          <h4 class="text-base md:text-xl text-white pt-3">Discover Movies</h4>
        </div>
        <div class="flex items-center space-x-2 md:space-x-5">
          <button
            :class="
              activeSort === 'rate'
                ? 'bg-red-primary hover:bg-red-secondary'
                : 'bg-black bg-opacity-20 hover:bg-gray-800'
            "
            class="py-1 md:py-1.5 px-2 cursor-pointer rounded-full"
            @click="sortByPopularity()"
          >
            <p class="text-white text-xs md:text-sm">Popularity</p>
          </button>
          <button
            :class="
              activeSort === 'release'
                ? 'bg-red-primary hover:bg-red-secondary'
                : 'bg-black bg-opacity-20 hover:bg-gray-800'
            "
            class="py-1 md:py-1.5 cursor-pointer px-0 rounded-full"
            @click="sortByReleaseDate()"
          >
            <p class="text-white text-xs md:text-sm z-10">Release Date</p>
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
import { Component, Prop, namespace, Vue } from 'nuxt-property-decorator'
const utils = namespace('utils')

@Component({})
export default class MoleculesSectionsDiscover extends Vue {
  @utils.Getter activeIndexData!: number
  @utils.Mutation setActiveIndex!: (value: number) => void

  @Prop({ required: false, type: Array }) readonly dataMovies!: any
  @Prop({ required: false, type: Array }) readonly dataBanner!: any
  activeSort: 'rate' | 'release' = 'rate'
  tempMovies: any = this.dataMovies

  setIndex() {
    // @ts-ignore
    const index = this.$refs.mySwiperRef.swiperInstance.realIndex
    if (index === this.dataBanner.length - 1) this.setActiveIndex(0)
    else this.setActiveIndex(parseInt(index + 1))
  }

  swiperOption: object = {
    slidesPerView: 2,
    slidesPerGroup: 1,
    initialSlide: 0,
    breakpoints: {
      1030: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: true,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  }

  sortByReleaseDate() {
    this.activeSort = 'release'
    const temp = this.dataMovies
    temp.sort((a: any, b: any) => {
      return a.release < b.release ? -1 : a.release > b.release ? 1 : 0
    })
    this.tempMovies = temp
  }

  sortByPopularity() {
    this.activeSort = 'rate'
    const temp = this.dataMovies
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
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 60px !important;
  height: 12px !important;
  border-radius: 6px !important;
  background-color: #e74c3c !important;
}
.swiper-pagination-bullet {
  width: 12px !important;
  height: 12px !important;
  border-radius: 6px !important;
  background-color: gray !important;
}
.swiper-pagination {
  margin-top: 10px !important;
}
</style>
