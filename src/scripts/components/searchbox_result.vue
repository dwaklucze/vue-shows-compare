<template lang="jade">
.column.is-6(@if="result") searchbox reults
  .column.is-12
    .card
      .card-image
        figure.image.is-4by3
          img(src='http://bulma.io/images/placeholders/1280x960.png', alt='Image')
      .card-content
        .media
          .media-left
            figure.image(style='height: 40px; width: 40px;')
              img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
          .media-content
            p.title.is-4 John Smith
            p.subtitle.is-6 @johnsmith
        .content
          a @bulmaio
          a #css
          a #responsive
          br
          small 11:09 PM - 1 Jan 2016


</template>

<script>
import vue from 'vue';
import store from '../init/store';

const component = {
  data() {

  return {
    store: this.$store.User,
    getResults() {
      console.log(this.$store.getSearchResults());
    }
  }
},

  computed: {
    result(newVal){    }
  }

}

export default component;
</script>

<style lang="sass?sourceMap">
</style>


