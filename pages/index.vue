<template>
  <div>
    <kit-molecules-header />
    <kit-molecules-sections-discover
      :data-movies="dataMovies"
      :data-banner="dataBanner"
      class="py-20"
    />
    <kit-molecules-footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import dataMockMovies from '@/mock/movies.json'
@Component({})
export default class PagesIndex extends Vue {
  dataMovies: any = dataMockMovies.movies
  dataBanner: any = dataMockMovies.recommendation
}
</script>
