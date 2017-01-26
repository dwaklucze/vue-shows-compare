<template lang="jade">
div(v-if="details || matches")
  transition-group(name="list" tag="div").columns
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
                      a(:class="{'is-matched': matchItem(actor, 'Actors') }") {{actor}}

                p.column.is-6
                  strong Writers
                  ul.list-people
                    li(v-for="writer in item.Writer")
                      a(:class="{'is-matched': matchItem(writer, 'Writer') }") {{writer}}

            .column
              p {{item.Plot}}
              
            .column.has-text-right 
              small Released: {{item.Released}}


  .notification.is-success(v-if="matches && !isNotifyClosed")
    button(@click="isNotifyClosed = true").delete 
    p.
      Wow! U just have found some matches in comparison on these two movies, congratulations!
</div>

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
  data() {
    return {
      isNotifyClosed: false
    }
  },
  computed: {
    details () {
    return this.$store.getters.getSearchResults;
    },
    matches () {
      const first = this.details[Object.keys(this.details)[0]];
      const second = this.details[Object.keys(this.details)[1]];

      if(!second) {
        return;
      }
      const match = {
        Actors:  _.intersection(first.Actors, second.Actors),
        Writer:  _.intersection(first.Writer, second.Writer),
        Director: _.intersection([first.Director], [second.Director])[0]
      }

      return _.omitBy(match, _.isEmpty);
    },
  },
  methods: {
    matchItem(item, category) {
      
      if(_.isEmpty(this.matches)){
        return false;
      }

      if(!this.matches[category]) {
        return false;
      }
      console.log(_.indexOf(this.matches[category], item));
      return (_.indexOf(this.matches[category], item) > -1);
    }
  }

}

export default component;
</script>

<style lang="sass?sourceMap">

.list-enter-active, .list-leave-active {
  transition: all 1s ease;
}

.list-enter, .list-leave-active {
  opacity: 0;
}
.list-people a {
  pointer-events: none;
}
.is-matched {
  color: rgb(35, 209, 96) !important;
}

</style>


