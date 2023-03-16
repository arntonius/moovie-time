<template>
  <div class="relative w-full">
    <kit-molecules-header />
    <kit-molecules-sections-detail
      :data-detail="dataDetail"
      :data-review="dataReview"
      :data-recommendation="dataRecommendationMovies"
    />
    <kit-molecules-footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import dataMockMovies from '@/mock/movies.json'
import dataReviewMovies from '@/mock/reviews.json'

@Component({})
export default class PagesMoviesIndex extends Vue {
  dataRecommendationMovies: any = dataMockMovies.recommendation

  get dataDetail() {
    const id = this.$route.params.id
    const detail = dataMockMovies.movies.filter(
      (element: any) => element.id === parseInt(id)
    )
    return detail[0]
  }

  get dataReview() {
    const id = this.$route.params.id
    const detail = dataReviewMovies.data.filter(
      (element: any) => element.idMovies === parseInt(id)
    )
    return detail
  }
}
</script>
