<template>
  <div class="homePage" v-if="randQuotes.length">
    <div class="quoteText">
      <h1>"{{ randQuotes[randNumberBtw10].quoteText }}"</h1>
    </div>
    <div class="nav">
      <router-link
        :to="{ name: 'moreQuotesByAuthor' }"
        @click="setQuotesByAuthor"
      >
        <div class="nextPage">
          <div class="text">
            <h3>{{ randQuotes[randNumberBtw10].quoteAuthor }}</h3>
            <span>{{ randQuotes[randNumberBtw10].quoteGenre }}</span>
          </div>
          <div class="icon">
            <i class="material-icons">arrow_forward</i>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "homePage",
  beforeCreate() {
    this.$store.dispatch("randomNumber");
    this.$store.dispatch("generateNewQuote");
  },
  computed: {
    randNumberBtw10() {
      return this.$store.getters.randNumberBtw10;
    },
    randQuotes() {
      return this.$store.getters.randQuotes;
    },
  },
  methods: {
    setQuotesByAuthor() {
      this.$store.dispatch("setAuthor");
      this.$store.dispatch("getQuotesByAuthor");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variable.scss";

.homePage {
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav {
    a {
      text-decoration: none;
      color: $light-black;

      .nextPage {
        width: 40vw;
        padding: 2rem 4rem;
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        transition: all 0.4s ease;

        &:hover {
          background: $light-black;
          color: $light-white;
        }

        .text {
          h3 {
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
          }
          span {
            color: $light-gray;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .homePage {
    .nav {
      a {
        .nextPage {
          width: 65vw;
          background: $light-black;
          color: $light-white;
        }
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .homePage {
    .nav {
      a {
        .nextPage {
          width: 75vw;
          padding: 1.5rem 3rem;

          .text {
            h3 {
              font-size: 16px;
              line-height: 22px;
            }
            span {
              font-size: 12px;
              line-height: 15px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .homePage {
    .nav {
      a {
        .nextPage {
          width: 90vw;
          padding: 1.5rem 3rem;

          .text {
            h3 {
              font-size: 16px;
              line-height: 22px;
            }
            span {
              font-size: 12px;
              line-height: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
