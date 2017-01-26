<template lang="jade">
.container
  .section
    .columns
      .column.is-3
        searchbox(variable="movieOne" collection="User")
        searchbox(variable="movieTwo" collection="User")

      .column.is-9
            searchbox-result
</template>

<style lang="!postcss!sass?outputStyle=compressed">
@charset "utf-8";
@import "~bulma/bulma";
</style>

<script>
import Vue from 'vue';

import Searchbox from './components/searchbox.vue';
import SearchboxRES from './components/searchbox_result.vue';

Vue.component('searchbox-result', SearchboxRES);
Vue.component('searchbox', Searchbox);
</script>
