<template>
  <div>
    <kit-molecules-header />
    <kit-molecules-sections-discover
      :data-movies="dataMovies"
      :data-banner="dataBanner"
    />
    <kit-molecules-footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import dataMockMovies from '@/mock/movies.json'
import { Movies, RecommendationMovies } from '~/types'
@Component({})
export default class PagesIndex extends Vue {
  dataMovies: Array<Movies> = dataMockMovies.movies
  dataBanner: Array<RecommendationMovies> = dataMockMovies.recommendation
}
</script>
