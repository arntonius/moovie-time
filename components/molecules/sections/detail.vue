<template>
  <div class="relative">
    <div class="md:h-130 w-full relative">
      <img
        :src="require(`@/assets/images/movies/${dataDetail.image}`)"
        alt="moovie-items-image"
        class="hidden md:block h-full object-cover w-screen z-0 opacity-80"
        quality="30"
      />
      <div
        class="hidden md:block w-full h-full absolute bg-black-primary opacity-60 top-0"
      ></div>
      <div
        class="hidden md:flex items-center absolute bottom-0 bg-black-primary opacity-50 h-20 z-10 w-full"
      ></div>
      <div class="w-full h-full md:absolute top-32 md:top-72 z-20">
        <div class="w-full max-w-7xl mx-auto px-4 md:px-7 z-10 h-112">
          <div class="flex flex-col md:flex-row h-full pt-20 md:pt-0">
            <img
              :src="require(`@/assets/images/movies/${dataDetail.image}`)"
              class="h-96 md:h-auto md:w-52 object-cover"
              alt="moovie-items-image"
              quality="30"
            />
            <div class="mt-5 md:ml-8 md:mt-0">
              <div class="flex justify-between">
                <div>
                  <h6 class="text-lg text-black-senary md:text-white">
                    {{ parsedDateYear }}
                  </h6>
                  <h2 class="text-black-senary md:text-white font-bold">
                    {{ dataDetail.title }}
                  </h2>
                </div>
                <div class="md:hidden flex items-start">
                  <img src="@/assets/images/icon/star.svg" alt="star-icon" />
                  <p
                    class="text-3xl font-bold text-black-senary md:text-white pl-2"
                  >
                    {{ dataDetail.rate || 0 }}
                  </p>
                </div>
              </div>

              <div class="flex pt-1">
                <p
                  v-for="(list, key) in dataDetail.category"
                  :key="key"
                  class="text-sm text-black-senary md:text-white pr-2"
                >
                  {{ list }}
                </p>
              </div>
              <div
                class="flex flex-col md:flex-row md:items-center md:h-20 mt-5"
              >
                <div
                  class="hidden md:flex items-center pr-8 md:border-r border-gray-400"
                >
                  <img src="@/assets/images/icon/star.svg" alt="star-icon" />
                  <p
                    class="text-3xl font-bold text-black-senary md:text-white pl-4 pr-3"
                  >
                    {{ dataDetail.rate || 0 }}
                  </p>
                  <div class="hidden md:block">
                    <p class="text-xs pt-1 text-gray-tertiary">USER SCORE</p>
                    <p class="text-xs pt-1 text-black-senary md:text-white">
                      {{ dataDetail.votes || 0 }} VOTES
                    </p>
                  </div>
                </div>
                <kit-atoms-labels
                  title="STATUS"
                  :value="dataDetail.status || 'Un-Publised'"
                />
                <kit-atoms-labels
                  title="LANGUAGE"
                  :value="dataDetail.status || 'English'"
                />
                <kit-atoms-labels
                  title="BUDGET"
                  :value="dataDetail.budget || 100000000 | priceFormat"
                />
                <kit-atoms-labels
                  title="PRODUCTION"
                  is-last-element
                  :value="dataDetail.production || 'none'"
                />
              </div>
              <div class="pt-8 w-full md:w-3/5 pr-10">
                <p class="text-sm text-red-primary font-bold">OVERVIEW</p>
                <p class="text-sm text-black-primary leading-7 pt-2">
                  {{ dataDetail.overview || '' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white w-full h-full flex mt-10 md:mt-40">
      <div
        v-if="dataReview.length !== 0"
        class="w-full max-w-7xl mx-auto px-4 md:px-7"
      >
        <h6 class="text-red-primary text-sm font-bold">REVIEWS</h6>
        <div class="flex items-center flex-wrap w-full mt-6 mb-14 gap-8">
          <div v-for="list in dataReview" :key="list.id">
            <kit-atoms-cards-testimony :item="list" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black-quartenary w-full h-full flex">
      <div class="w-full max-w-7xl mx-auto px-7">
        <h6 class="my-12 text-white text-sm">RECOMMENDATION MOVIES</h6>
        <div class="flex justify-between items-center flex-wrap mt-9 mb-11">
          <div v-for="list in dataRecommendation.slice(0, 5)" :key="list.id">
            <kit-atoms-cards-movies :item="list" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Movies, Review } from '~/types'
@Component({})
export default class MoleculesSectionsDetail extends Vue {
  @Prop({ required: false, type: Object }) readonly dataDetail!: Movies
  @Prop({ required: false, type: Array }) readonly dataReview!: Array<Review>
  @Prop({ required: false, type: Array })
  readonly dataRecommendation!: Array<Movies>

  priceFormat: any

  get parsedDateYear() {
    const tempYear: Date = new Date(this.dataDetail.release)
    return tempYear.getFullYear()
  }
}
</script>
