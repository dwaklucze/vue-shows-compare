<template lang="jade">
section(v-bind:class="{'is-loading': isLoading && movieLookup }").control

  input(debounce="3000" type='text', placeholder='Type movie name here...' v-model="movieLookup" @keyup="search" @click="toggleDropdown()" @blur="visible = false").input


  div(v-if="visible && suggested.length").wrapper
    div(v-if="movieLookup").open
      p.menu-label Sugessted
      ul.menu-list
        li(v-for="item in suggested" v-if="suggested.length")
          a {{item.Title}}
        li(v-if="!suggested && !isLoading")
          a.disabled No results...

</template>

<script>

  import store from '../init/store';
  import Vue from 'vue';



  export default {

    data() {

      return {

        movieLookup: '',
        visible: false,
        suggested: [],
        isLoading: false

      }

    },	
    
    store: ['User'],

    methods: {

      search(){

        this.isLoading = true;
        this.visible = true;

        console.log('hello');

      },

      toggleDropdown(){
        this.visible = !this.visible;
      },

      getSuggestions(){
        this.isLoading = true;

        if(!this.movieLookup) {
          this.isLoading = false;
          this.suggested = [];
          return;
        }
      }

    },

    props: {

      variable: { required: true }

    }
  }
</script>

<style lang="sass?sourceMap">

    .wrapper {

      position: relative;

    }

    .dropdown-list {

      .menu-label {

        padding: 1em 1em 0;

      }

      position: absolute;

      width: 100%;
    
    }

    .open {
      position: absolute; 
      top: 1px;
      left: 0;
      right: 0;
      background: #fff;

      border: 1px solid rgba(0,0,0, .1);
      z-index: 2;

      .menu-label {
        padding: 1em 1em 0;
      }

      .menu-list {
        overflow-y: auto;
        max-height: 200px;

      }
    }

    .disabled {
      pointer-events: none;
    }

</style>
