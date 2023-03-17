<!-- eslint-disable vue/valid-v-model -->
<template>
  <div class="bg-black-quartenary w-full h-full flex relative">
    <div class="bg-black-senary h-96 w-full absolute z-0"></div>
    <div class="w-full max-w-7xl mx-auto px-7 py-5 mt-32 z-10">
      <div>
        <div class="w-28 h-1 bg-red-secondary" />
        <h4 class="text-base md:text-xl text-white pt-3">Movies</h4>
      </div>
      <div class="mt-10 md:mt-14 mb-27 flex flex-col md:flex-row w-full">
        <div
          class="w-92 h-min bg-navy-primary md:bg-gradient-to-b md:from-navy-primary md:to-navy-secondary rounded-xl p-2"
        >
          <h6 class="text-white py-3 md:py-5 px-4 border-b-2 border-white">
            Sort Result By
          </h6>
          <div class="w-full">
            <button
              class="mt-5 w-full md:w-60 text-sm text-white px-4 py-2 md:mx-2 my-2 md:my-4 bg-gray-septenary flex items-center justify-between rounded"
              @click="isSortShow = !isSortShow"
            >
              {{ sortingActive }}
              <svg
                :class="isSortShow ? 'rotate-180' : ''"
                class="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              v-if="isSortShow"
              class="flex flex-col z-10 md:mx-2 mb-4 w-full md:w-60 divide-gray-100 rounded-lg shadow bg-gray-700"
            >
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                <kit-atoms-buttons-sort
                  v-for="(type, key) in sortType"
                  :key="key"
                  :name="type"
                  :click="() => setSorting(type)"
                />
              </ul>
            </div>
          </div>
          <h6
            class="hidden md:block text-white py-2 md:py-5 px-4 border-y-2 border-white"
          >
            Genres
          </h6>
          <button
            class="flex md:hidden w-full md:w-60 text-sm text-white px-4 py-2 md:mx-2 my-2 md:my-4 bg-gray-septenary items-center justify-between rounded"
            @click="isSortGenreShow = !isSortGenreShow"
          >
            Genres
            <svg
              :class="isSortGenreShow ? 'rotate-180' : ''"
              class="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div v-if="isSortGenreShow" class="px-1 py-2 md:p-4">
            <div
              v-for="(list, key) in dataCategory"
              :key="key"
              class="flex items-center justify-between py-1 md:py-2 px-1"
            >
              <label
                for="default-checkbox"
                class="ml-2 text-xs md:text-sm font-medium text-white"
                >{{ list.name }}</label
              >
              <input
                id="default-checkbox"
                v-model="selectedCategory"
                :value="list.name"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                @change="handleSelectCategory"
              />
            </div>
          </div>
        </div>
        <div
          v-if="dataMovies.length === 0"
          class="flex flex-wrap gap-4 md:ml-8 mt-5 md:mt-0"
        >
          <kit-atoms-skeleton-movies v-for="key in 8" :key="key" />
        </div>
        <div
          v-else
          class="w-full flex justify-between flex-wrap mt-5 md:mt-0 md:ml-8 gap-3"
        >
          <div
            v-if="isNoCategory && selectedCategory.length !== 0"
            class="w-full my-10"
          >
            <h4 class="text-center text-white">
              Oops, your movies is not available
            </h4>
          </div>
          <kit-atoms-cards-movies
            v-for="list in tempMovies.slice(0, maxShow)"
            :key="list.id"
            :item="list"
          />

          <div class="w-full h-min flex justify-center mt-12 mb-20">
            <button
              v-if="isLoadMoreShow && tempMovies.length !== 0"
              class="py-1.5 cursor-pointer px-4 w-40 bg-red-primary hover:bg-red-secondary rounded-full"
              @click="loadMore()"
            >
              <p class="text-white text-sm z-10">Load More</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, namespace } from 'nuxt-property-decorator'
import { Movies } from '~/types'
const utils = namespace('utils')
@Component({})
export default class MoleculesSectionsList extends Vue {
  @utils.Getter activeCategoryData!: string
  @Prop({ required: false, type: Array }) readonly dataCategory!: Array<{
    name: string
  }>

  @Prop({ required: false, type: Array }) readonly dataMovies!: Array<Movies>

  sortType: Array<string> = [
    'Popularity Ascending',
    'Popularity Descending',
    'Release Date Ascending',
    'Release Date Descending',
    'Rating Ascending',
    'Rating Descending',
  ]

  tempMovies: any = this.dataMovies
  selectedCategory: any = []
  sortingActive: string = 'Popularity'

  maxShow: number = 12
  maxData: number = this.dataMovies.length
  isSortShow: boolean = false
  isSortGenreShow: boolean = true
  isNoCategory: boolean = false
  isLoadMoreShow: boolean = this.tempMovies.length > this.maxShow

  mounted() {
    if (this.activeCategoryData !== '')
      this.selectedCategory.push(this.activeCategoryData)
    this.handleSelectCategory()
  }

  loadMore() {
    this.maxShow = this.maxShow + 12
    const comparison = Math.floor(this.maxShow / this.maxData)
    if (comparison >= 1) {
      this.isLoadMoreShow = false
    }
  }

  setSorting(value: string) {
    switch (value) {
      case 'Popularity Ascending':
        this.sorting(this.tempMovies, this.sortByPopularityAsc)
        break
      case 'Popularity Descending':
        this.sorting(this.tempMovies, this.sortByPopularityDesc)
        break
      case 'Release Date Ascending':
        this.sorting(this.tempMovies, this.sortByReleaseDateAsc)
        break
      case 'Release Date Descending':
        this.sorting(this.tempMovies, this.sortByReleaseDateDesc)
        break
      case 'Rating Ascending':
        this.sorting(this.tempMovies, this.sortByRateAsc)
        break
      case 'Rating Descending':
        this.sorting(this.tempMovies, this.sortByRateDesc)
        break
    }
    this.isSortShow = false
    this.sortingActive = value
  }

  sortByReleaseDateDesc(a: Movies, b: Movies) {
    return b.release < a.release ? -1 : b.release > a.release ? 0 : 1
  }

  sortByReleaseDateAsc(a: Movies, b: Movies) {
    return a.release < b.release ? -1 : a.release > b.release ? 0 : 1
  }

  sortByPopularityDesc(a: Movies, b: Movies) {
    return a.votes - b.votes
  }

  sortByPopularityAsc(a: Movies, b: Movies) {
    return b.votes - a.votes
  }

  sortByRateDesc(a: Movies, b: Movies) {
    return parseInt(b.rate) - parseInt(a.rate)
  }

  sortByRateAsc(a: Movies, b: Movies) {
    return parseInt(a.rate) - parseInt(b.rate)
  }

  sorting(data: Array<Movies>, fn: any) {
    const temp = data
    temp.sort((a: Movies, b: Movies) => {
      return fn(a, b)
    })
    this.tempMovies = temp
  }

  intersect = (a: Array<Movies>, b: Array<Movies>) => {
    const setB = new Set(b)
    return a.filter((el: any) => setB.has(el))
  }

  handleSelectCategory() {
    this.maxShow = 12
    const dataTemp = this.dataMovies
    this.isLoadMoreShow = false
    this.isNoCategory = false
    // eslint-disable-next-line array-callback-return
    const temp = dataTemp.filter((e: any) => {
      if (this.intersect(e.category, this.selectedCategory).length !== 0) {
        return e
      }
    })
    if (temp.length === 0) {
      if (this.dataMovies.length > this.maxShow) this.isLoadMoreShow = true
      this.tempMovies = this.dataMovies
      this.isNoCategory = true
    } else {
      if (temp.length > this.maxShow) this.isLoadMoreShow = true
      this.tempMovies = temp
    }
  }
}
</script>
