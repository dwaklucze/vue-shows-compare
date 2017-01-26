<template lang="jade">
transition-group(name="list" tag="div" v-if="details").columns
  .column.is-half(v-for="item in details" v-bind:key="item")
    .card
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

  mounted() {
    this.$parent.$on('searchbox-ITEM_SELECTED', (msg) => {
      console.info('User has selected an item.');

      // we can process firebase request now

    });
  },
  computed: {
    details(newVal, oldVal){

    return this.$store.getters.getSearchResults;
    }
},

}

export default component;
</script>

<style lang="sass?sourceMap">

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-active {
  opacity: 0;
}

</style>


