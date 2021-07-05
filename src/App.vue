<template>
    <div>
        <p class="randomBtn" @click="generateNewQuote">
            <span>random</span>
            <i class="material-icons">autorenew</i>
        </p>
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>

        <credits />
    </div>

    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Raleway:wght@500;700&display=swap"
        rel="stylesheet"
    />
</template>

<script>
import Credits from './components/credits.vue';

export default {
    components:{
        Credits
    },
    methods: {
        generateNewQuote() {
            this.$store.dispatch("generateNewQuote");
        },
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
}

#app {
    padding: 10vh 25vw;
}

.randomBtn {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    right: 15%;
    top: 3%;

    * {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 120%;
    }
}

@media screen and (max-width: 1100px) {
    #app {
        padding: 10vh 20vw;
    }
}

@media screen and (max-width: 800px) {
    #app {
        padding: 10vh 15vw;
    }
}

@media screen and (max-width: 500px) {
    #app {
        padding: 10vh 10vw;
    }
}

@media screen and (max-width: 400px) {
    #app {
        padding: 10vh 5vw;
    }
}

</style>
