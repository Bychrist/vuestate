<template>
  <div class="containter">
    <h1>A different component</h1>
    
      <p>There are currently {{ countRemovedLinks <= 0 ? 'no' : countRemovedLinks }} removed link{{ countRemovedLinks <= 1 ? '' : 's'  }}</p>
     <hr>
      <h1 v-if="countRemovedLinks > 0">Number of removed links</h1>
      <h1 v-else>There are no removed links yet</h1>
      <ul>
        <li v-for="(removedlink,index) in removedLinks" :key="index">{{ removedlink }}
          <button @click="restoreLink(index)">Restore</button>
        </li>
      </ul>
     
  </div>
</template>

<script>

import {mapGetters, mapState} from 'vuex'
  
  export default{

    computed:{
      
      ...mapGetters([
        'countLinks',
        'countRemovedLinks'
      ]),

      ...mapState([
        'removedLinks'
      ])
    


    },
    methods:{
      restoreLink:function(index){
        this.$store.dispatch('restoreLink',index)
      }
    }

  }

</script>