<template>
  <div class="bg-black-senary fixed z-40 w-full h-16 flex">
    <div
      class="w-full max-w-7xl mx-auto flex items-center justify-between px-7"
    >
      <div class="flex items-center w-3/5">
        <img src="@/assets/images/logo/movie-time.png" alt="logo" />
        <div
          class="relative bg-gray-900 rounded-lg flex items-center py-3 px-5 w-full ml-9"
        >
          <img
            src="@/assets/images/icon/movies.svg"
            alt="movies-icon"
            class="pr-4"
          />
          <input
            type="text"
            :value="input"
            @input="handleInput"
            class="w-full text-white text-md bg-gray-900 placeholder-white outline-none border-none"
            placeholder="Find Movie"
          />
          <font-awesome-icon
            ref="chartIcon"
            :icon="['fa', 'magnifying-glass']"
            class="text-white pl-4 text-sm"
          />
          <div
            v-if="listSearch.length !== 0 && input !== ''"
            class="absolute overflow-x-auto w-full h-min max-h-52 top-0 left-0 mt-14 bg-black-primary rounded p-4"
          >
            <div v-for="list in listSearch">
              <nuxt-link
                :to="`/movies/${list.id}`"
                class="text-sm text-white w-full flex text-left p-2"
              >
                {{ list.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <ul class="flex items-center w-auto">
        <li class="relative">
          <button
            @click="isShow = !isShow"
            class="flex items-center text-white text-sm px-4 py-3"
          >
            <img
              src="@/assets/images/icon/categories.svg"
              alt="movies-icon"
              class="pr-3"
            />
            CATEGORIES
          </button>
          <div
            v-if="isShow"
            class="absolute w-40 ml-5 py-4 pl-4 bg-white shadow-xl rounded"
          >
            <div v-for="list in dataCategory">
              <kit-atoms-buttons-category :name="list.name" />
            </div>
          </div>
        </li>
        <li>
          <a class="text-white text-sm px-4 py-3">MOVIES</a>
        </li>
        <li>
          <a class="text-white text-sm px-4 py-3">TV SHOWS</a>
        </li>
        <li>
          <a class="text-white text-sm px-4 py-3">LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
import dataMockCategory from "@/mock/category.json";
import dataMovies from "@/mock/movies.json";
import { watch } from "vue";
@Component({})
export default class MoleculesHeaderIndex extends Vue {
  @Prop({ required: false, type: Array }) readonly items!: any;
  isShow: boolean = false;
  dataCategory: any = dataMockCategory.data;
  input: string = "";
  listSearch: any = [];

  handleInput(e: Event) {
    const target = <HTMLInputElement>e.target;
    console.log("datas", target.value);
    this.input = target.value;
  }

  @Watch("input")
  searchKeyWord() {
    const temp: any = dataMovies.movies;
    const result = temp.filter((element: any) => {
      const itemData = this.parseSentences(element.title);
      const keywordData = this.parseSentences(this.input);
      return itemData.indexOf(keywordData) > -1;
    });
    this.listSearch = result;
  }
  parseSentences(value: string) {
    const keywordLowerCase = value.toLowerCase();
    const keywordParsed = keywordLowerCase.replace(/ /g, "-");
    return keywordParsed;
  }
}
</script>
