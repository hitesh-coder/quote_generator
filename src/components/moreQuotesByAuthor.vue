<template>
    <div class="moreQuotesByAuthor">
        <h2>{{ authorName }}</h2>
        <div v-for="item in quotesByAuthor" :key="item" class="quoteText">
            <h1>"{{ item.quoteText }}"</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "moreQuotesByAuthor",
    computed: {
        quotesByAuthor() {
            return this.$store.getters.quotesByAuthor;
        },
        authorName() {
            return this.$store.getters.authorName;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/variable.scss";

.moreQuotesByAuthor {
    margin-top: 2rem;

    h2 {
        margin-left: 5rem;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;

        color: $light-black;
    }
}

@media screen and (max-width: 650px) {
    .moreQuotesByAuthor{
        h2 {
            margin-left: 5rem;
            font-size: 24px;
            line-height: 38px;
        }
    }
}

@media screen and (max-width: 450px) {
    .moreQuotesByAuthor{
        h2 {
            margin-left: 3rem;
        }
    }
}
</style>