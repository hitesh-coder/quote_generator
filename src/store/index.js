import { createStore } from "vuex";

export default createStore({
  state: {
    quotesByAuthor: [],
    authorName:'',
    randQuotes: [],
    noOfPagesInApi: 7268,
    randNumber: null,
    randNumberBtw10: null,
    api_Url: "https://quote-garden.herokuapp.com/api/v3/quotes",
  },
  mutations: {
    generateNewQuote(state, payload) {
      state.randQuotes = payload
      state.randNumberBtw10 = Math.floor(Math.random() * 10)
      state.randNumber = Math.floor(Math.random() * state.noOfPagesInApi)
    },
    randomNumber(state) {
      state.randNumberBtw10 = Math.floor(Math.random() * 10)
      state.randNumber = Math.floor(Math.random() * state.noOfPagesInApi)
    },
    setNewQuotes(state, payload) {
      state.randQuotes = payload
    },
    setAuthor(state){
      state.authorName = state.randQuotes[state.randNumberBtw10].quoteAuthor
      console.log(state.authorName)
    },
    getQuotesByAuthor(state,payload){
      state.quotesByAuthor = payload
      console.log(state.quotesByAuthor)
    }
  },
  actions: {
    async randomNumber(state) {
      state.commit("randomNumber")
    },
    async generateNewQuote({ commit, state }) {
      // console.log(`${state.api_Url}?page=${state.randNumber}`)

      fetch(`${state.api_Url}?page=${state.randNumber}`)
        .then(response => response.json())
        .then(res => {
          commit('generateNewQuote', res.data)
        })
    },
    async setAuthor(state){
      state.commit("setAuthor")
    },
    async getQuotesByAuthor({ commit, state }){
      fetch(`${state.api_Url}?author=${state.authorName}`)
        .then(response => response.json())
        .then(res =>{
          commit('getQuotesByAuthor',res.data)
        })
    }
  },
  modules: {},
  getters: {
    randNumberBtw10: state => state.randNumberBtw10,
    randQuotes: state => state.randQuotes,
    quotesByAuthor: state => state.quotesByAuthor,
    authorName: state => state.authorName,
  }
});
