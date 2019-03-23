<template>
  <div class="containter">
    
      
      <div class="one">
        <h1 class="text-right alert alert-success">Welcome to {{title}}</h1>
         <p>There are currently {{ countLinks < 1 ? 'no' : countLinks  }} link{{ countLinks <= 1 ? '' : 's'  }}</p>
        <div>
          
          <form @submit.prevent="submitForm(form)">
            <label for="">Enter Link Here</label><br>
            <input type="url" v-model="form.url" name="url" style="width:200px;border-radius:10px">
          
            <input type="submit" :value="submitme"><br>
              <small>{{ form.url }}</small>
          </form>
        </div>
        <ul>
          <li v-for="(link,index) in links" :key="index">{{ link }} &nbsp;   
             <button @click="removeLink(index)" >Remove</button>
          </li>
       
        </ul>
        
      </div>
      <div class="two">
          <stats />
      </div>
  
  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'
import Stats from '@/components/stats'
  export default{
    components:{
      Stats
    },
    computed:{
      ...mapState([
        'title',
        'links',
        'submitme',
        'form'
        ]),
      ...mapGetters([
        'countLinks'
      ])

    },
    methods:{
      submitForm:function(form){
        this.$store.dispatch('submitForm',form);
      },

      removeLink:function(index){
        this.$store.dispatch('removeLink',index)
      }
    }

  }

</script>

<style scoped>
  .one{
    width:40%;
    float:left;
    padding:50px;
    background:#ccc;
    margin-left:20px;
    border-radius:20px;
  }

    .two{
    width:40%;
    padding:50px;
    float:right;
    margin-right:20px;
    background:#cce;
    border-radius:20px;
  }
</style>
