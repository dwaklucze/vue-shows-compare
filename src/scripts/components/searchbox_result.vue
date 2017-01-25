<template lang="jade">
span(v-if="details")
  .column.is-6(v-for="item in loadedData")
  
      .card.hero
        .card-image
          figure.image.is-4by3
            img(v-bind:src="item.Poster", alt='Image') 

        .column

              h1.title.is-5 {{item.Title}} ({{item.Year}})
              h2.subtitle.is-6 Director: {{item.Director}}

        .is-4.hero.is-dark
            .columns.container.is-marginless

              p.column.is-6
                strong Actors
                ul.list-people
                  li(v-for="actor in item.Actors")
                    a {{actor}}
              p.column.is-6
                strong Writers
                ul.list-people
                  li(v-for="writer in item.Writer")
                    a {{writer}}

          .column
            p {{item.Plot}}
            
          .column.has-text-right 
            small Released: {{item.Released}}
</template>

<script>
import Vue from 'vue';
import store from '../init/store';
const bus = new Vue({});
  

const component = {

    data(){
      return {
        loadedData: {},
        isLoaded: false
      }
    },

  computed: {
    details(){

     this.$parent.$on('searchbox-ITEM_SELECTED', (msg) => {
      this.loadedData = this.$store.getters.getSearchResults;    
    });
  
    return this.loadedData;
    }
},
watch: {
  loadedData(newVal) {
    return this.$store.getters.getSearchResults;
  }
}

}

export default component;
</script>

<style lang="sass?sourceMap">
</style>


