<template>
  <div class="relative">
    <div class="h-130 w-full relative">
      <img
        :src="require(`@/assets/images/movies/${dataDetail.image}`)"
        alt=""
        class="h-full object-cover w-screen z-0 opacity-80"
        quality="30"
      />
      <div
        class="flex items-center absolute bottom-0 bg-black-primary opacity-50 h-20 z-10 w-full"
      ></div>
      <div class="w-full absolute top-72 z-20">
        <div class="w-full max-w-7xl mx-auto px-7 z-10 h-112">
          <div class="flex">
            <img
              :src="require(`@/assets/images/movies/${dataDetail.image}`)"
              alt=""
              quality="30"
            />
            <div class="ml-8">
              <h6 class="text-lg text-white">{{ parsedDateYear }}</h6>
              <h2 class="text-white font-bold">{{ dataDetail.title }}</h2>
              <div class="flex pt-1">
                <p
                  v-for="(list, key) in dataDetail.category"
                  :key="key"
                  class="text-sm text-white pr-2"
                >
                  {{ list }}
                </p>
              </div>
              <div class="flex items-center h-20 mt-5">
                <div class="flex items-center pr-8 border-r-2 border-gray-400">
                  <img src="@/assets/images/icon/star.svg" alt="star-icon" />
                  <p class="text-3xl font-bold text-white pl-4 pr-3">
                    {{ dataDetail.rate || 0 }}
                  </p>
                  <div>
                    <p class="text-xs pt-1 text-gray-tertiary">USER SCORE</p>
                    <p class="text-xs pt-1 text-white">
                      {{ dataDetail.votes || 0 }} VOTES
                    </p>
                  </div>
                </div>
                <div class="px-8 border-r-2 border-gray-400">
                  <p class="text-xs pt-1 text-gray-tertiary">STATUS</p>
                  <p class="text-xs pt-1 text-white">
                    {{ dataDetail.status || 'Un-Publised' }}
                  </p>
                </div>
                <div class="px-8 border-r-2 border-gray-400">
                  <p class="text-xs pt-1 text-gray-tertiary">LANGUAGE</p>
                  <p class="text-xs pt-1 text-white">
                    {{ dataDetail.language || 'English' }}
                  </p>
                </div>
                <div class="px-8 border-r-2 border-gray-400">
                  <p class="text-xs pt-1 text-gray-tertiary">BUDGET</p>
                  <p class="text-xs pt-1 text-white">
                    {{ dataDetail.budget || 100000000 | priceFormat }}
                  </p>
                </div>
                <div class="px-8">
                  <p class="text-xs pt-1 text-gray-tertiary">PRODUCTION</p>
                  <p class="text-xs pt-1 text-white">
                    {{ dataDetail.production || 'none' }}
                  </p>
                </div>
              </div>
              <div class="pt-8 w-3/5 pr-10">
                <p class="text-sm text-red-primary font-bold">OVERVIEW</p>
                <p class="text-sm leading-7 pt-2">
                  {{ dataDetail.overview || '' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white w-full h-full flex mt-40">
      <div v-if="dataReview.length !== 0" class="w-full max-w-7xl mx-auto px-7">
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
          <div v-for="list in dataRecommendation" :key="list.id">
            <kit-atoms-cards-movies :item="list" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class MoleculesSectionsDetail extends Vue {
  @Prop({ required: false, type: Object }) readonly dataDetail!: any
  @Prop({ required: false, type: Array }) readonly dataReview!: any
  @Prop({ required: false, type: Array }) readonly dataRecommendation!: any
  priceFormat: any

  get parsedDateYear() {
    const tempYear: Date = new Date(this.dataDetail.release)
    return tempYear.getFullYear()
  }
}
</script>
