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
@Component({})
export default class PgesListMovies extends Vue {
  dataMovies: any = dataMockMovies.movies
  dataCategory: any = dataCategoryMovies.data
}
</script>
