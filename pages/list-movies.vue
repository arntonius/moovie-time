<template>
  <div>
    <kit-molecules-header />
    <kit-molecules-sections-list
      :data-movies="dataMovies"
      :data-category="dataCategory"
      class="pt-32"
    />
    <kit-molecules-footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import dataMockMovies from '@/mock/movies.json'
import dataCategoryMovies from '@/mock/category.json'
import { Movies } from '~/types'
@Component({})
export default class PgesListMovies extends Vue {
  dataMovies: Array<Movies> = dataMockMovies.movies
  dataCategory: Array<{ name: string }> = dataCategoryMovies.data
}
</script>
