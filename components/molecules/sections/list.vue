<template>
  <div class="bg-black-quartenary w-full h-full flex">
    <div class="w-full max-w-7xl mx-auto px-7 py-20">
      <div>
        <div class="w-28 h-1 bg-orange-400" />
        <h4 class="text-white pt-3">Movies</h4>
      </div>
      <div class="mt-16 mb-27 flex w-full">
        <div
          class="w-80 h-min bg-gradient-to-b from-navy-primary to-navy-secondary rounded-xl"
        >
          <h6 class="text-white py-5 px-4 border-b-2 border-white">
            Sort Result By
          </h6>
          <div class="w-full">
            <button
              class="text-white px-4 py-2 mx-5 my-4 bg-gray-septenary w-52 flex items-center justify-between rounded"
              @click="isSortShow = !isSortShow"
            >
              Popularity
              <svg
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
              class="z-10 mx-5 mb-4 w-52 divide-gray-100 rounded-lg shadow bg-gray-700"
            >
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                <button
                  class="text-white px-2.5 py-3"
                  @click="setSorting('PopularityAscending')"
                >
                  Popularity Ascending
                </button>
                <button
                  class="text-white px-2.5 py-3"
                  @click="setSorting('PopularityDescending')"
                >
                  Popularity Descending
                </button>
                <button
                  class="text-white px-2.5 py-3"
                  @click="setSorting('ReleaseDateAscending')"
                >
                  Release Date Ascending
                </button>
                <button
                  class="text-white px-2.5 py-3"
                  @click="setSorting('ReleaseDateDescending')"
                >
                  Release Date Descending
                </button>
                <button
                  class="text-white px-2.5 py-3"
                  @click="setSorting('RatingAscending')"
                >
                  Rating Ascending
                </button>
                <button
                  class="text-white px-2.5 py-3"
                  @click="setSorting('RatingDescending')"
                >
                  Rating Descending
                </button>
              </ul>
            </div>
          </div>
          <h6 class="text-white py-5 px-4 border-y-2 border-white">Genres</h6>
          <div class="p-4">
            <div
              v-for="list in dataCategory"
              :key="list.id"
              class="flex items-center justify-between py-2 px-1"
            >
              <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-white"
                >{{ list.name }}</label
              >
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
        <div class="w-full flex justify-between flex-wrap ml-8 gap-3">
          <kit-atoms-cards-movies
            v-for="list in dataMovies.slice(0, maxShow)"
            :key="list.id"
            :item="list"
          />
          <div class="w-full flex justify-center mt-12 mb-20">
            <button
              v-if="isLoadMoreShow"
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
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class MoleculesSectionsList extends Vue {
  @Prop({ required: false, type: Array }) readonly dataCategory!: any
  @Prop({ required: false, type: Array }) readonly dataMovies!: any

  tempMovies: any = this.dataMovies
  sortingActive: string = 'PopularityAscending'

  maxShow: number = 12
  maxData: number = this.dataMovies.length
  isSortShow: boolean = false
  isLoadMoreShow: boolean = this.maxData > this.maxShow

  loadMore() {
    this.maxShow = this.maxShow + 12
    const comparison = Math.floor(this.maxShow / this.maxData)
    if (comparison >= 1) {
      this.isLoadMoreShow = false
    }
  }

  setSorting(value: string) {
    this.sortingActive = value
  }

  sortByReleaseDateDesc() {
    const temp = this.dataMovies
    temp.sort((a: any, b: any) => {
      return a.release < b.release ? -1 : a.release > b.release ? 1 : 0
    })
    this.tempMovies = temp
  }

  sortByReleaseDateAsc() {
    const temp = this.dataMovies
    temp.sort((a: any, b: any) => {
      return a.release < b.release ? -1 : a.release > b.release ? 0 : 1
    })
    this.tempMovies = temp
  }

  sortByPopularityDesc() {
    const temp = this.dataMovies
    temp.sort((a: any, b: any) => {
      return parseInt(a.votes) - parseInt(b.votes)
    })
    this.tempMovies = temp
  }

  sortByPopularityAsc() {
    const temp = this.dataMovies
    temp.sort((a: any, b: any) => {
      return parseInt(b.votes) - parseInt(a.votes)
    })
    this.tempMovies = temp
  }

  sortByRateDesc() {
    const temp = this.dataMovies
    temp.sort((a: any, b: any) => {
      return parseInt(b.rate) - parseInt(a.rate)
    })
    this.tempMovies = temp
  }

  sortByRateAsc() {
    const temp = this.dataMovies
    temp.sort((a: any, b: any) => {
      return parseInt(b.rate) - parseInt(a.rate)
    })
    this.tempMovies = temp
  }
}
</script>
