<template lang="jade">

  form.control(v-bind:class="{'is-loading': isLoading }", 
  @submit.prevent="search()")

    input.input(type='text' placeholder="Type movie name here..." 
    v-model="lookup" v-on:keydown="search()" 
    @focus="toggleDropdown()" @blur="onBlur()")

    div.wrapper
      div.dropdown-list(:class="{'open': visible }")
        p.menu-label Sugessted
        ul.menu-list
          li(v-for="(item, index) in suggested")
            a(@click="select(index)") {{item.Title}}
          li(v-if="!suggested && !isLoading")
            a.disabled No results...

</template>


<script>

  import Vue from 'vue';
  import mixins from '../init/mixins';
  import axios from 'vue-axios';
  import store from '../init/store';


  const component = {

      data() {

        return {

          isLoading: false,
          visible: false,
          debounce: null,
          lookup: '',
          suggested: [],
          selected: [],
        }
      },

      methods: {

        search(){

          this.isLoading = true;

          this.getSuggestions();

        },
        select(index){

          let selected = this.suggested[index];

            Vue.axios
            .get(`https://omdbapi.com/?i=${selected.imdbID}`)
            .then(( response ) => {
              this.$store.commit('assign', {
                    result: response.data,
                    variable: this.variable,
                    collection: this.collection
              });   
            });  
        },

        getSuggestions() {

          let vm = this;

          clearTimeout(this.debounce);

          if(!this.lookup) {

            this.isLoading = false;
            this.suggested = [];
            return;
          }

          this.debounce = setTimeout(() => {

            Vue.axios
            .get(`https://omdbapi.com/?s=${this.lookup}`)
            .then(( response ) => this.suggested = response.data.Search);

            vm.isLoading = false;
            vm.visible = true;

           // vm.$emit = ('foundSuggestions', this.suggested);
          }, 1050);

        },


        toggleDropdown() {

          if(!this.suggested.length) {

            this.visible = false;

            return;
          }

          this.visible = !this.visible;

        },


        onBlur() {

          clearTimeout(this.debounce);

          this.debounce = setTimeout(() => {

            this.visible = false;

          }, 150);

        },
      
      },


      props: {

        variable: { required: true },
        collection: { required: true }

      },
    };
    
  export default component;

</script>


<style lang="sass?sourceMap">

    .wrapper {

      position: relative;

    }

    .dropdown-list {

      background: #fff;

        .menu-label {
          padding: 1em 1em 0;
        }
        .menu-list {
          overflow-y: auto;
          max-height: 160px;
        }

      position: absolute;
      opacity: 0;
      max-height: 0;

      overflow: hidden;
      width: 100%;
    
      transition: opacity .1s ease, max-height .2s ease;
      top: 1px;
      left: 0;
      right: 0;
    }

    .open {
      position: absolute; 
      background: #fff;

      border: 1px solid rgba(0,0,0, .1);
      z-index: 2;

      max-height: 220px;
      opacity: 1;
      
      transition: opacity .1s ease, max-height .2s ease;
    }

    .disabled {
      pointer-events: none;
    }

</style>
