<template>
  <div class="relative w-full">
    <kit-molecules-header is-secondary />
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
import { Movies, RecommendationMovies, Review } from '~/types'

@Component({})
export default class PagesMoviesIndex extends Vue {
  dataRecommendationMovies: Array<RecommendationMovies> =
    dataMockMovies.recommendation

  get dataDetail() {
    const id: string = this.$route.params.id
    const detail: Array<Movies> = dataMockMovies.movies.filter(
      (element: Movies) => element.id === parseInt(id)
    )
    return detail[0]
  }

  get dataReview() {
    const id: string = this.$route.params.id
    const detail: Array<Review> = dataReviewMovies.data.filter(
      (element: Review) => element.idMovies === parseInt(id)
    )
    return detail
  }
}
</script>
