import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'Vue state',
    form:{
      url:''
    },
    submitme:'Submit',
    links:[
      'http://meevajobs.com',
      'http://ikooba.com',
      'http://onebmac.com',
      'http://facebook.com',
      'http://google.com',
    ],

    removedLinks:[],
  },
  getters:{
    countLinks(state){
      return state.links.length
    },

    countRemovedLinks(state){
      return state.removedLinks.length
    }

  },
  mutations: {
    submitFormMutation:function(state, form){
      state.links.push(form.url)
 
    },
    resetFormMutation:function(state)
    {
      state.form.url = ''
    },
    removeLinkMutation:function(state,index)
    {
      state.removedLinks.push(state.links[index]);
      state.links.splice(index,1);
      

    },

    restoreLinkMutataion:function(state,index)
    {
      state.links.push(state.removedLinks[index])
      state.removedLinks.splice(index,1)
    }
  },
  actions: {

    submitForm:function(context,form){
      context.commit('submitFormMutation',form)
      context.commit('resetFormMutation')

    },
    removeLink:function(context,index)
    {
      context.commit('removeLinkMutation', index)
    },

    restoreLink:function(context,index){
      context.commit('restoreLinkMutataion',index)
    }

  }
})
