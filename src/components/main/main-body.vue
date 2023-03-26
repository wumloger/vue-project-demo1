<template>
    <div class="box">
        <template v-if="items.length != 0">
            <div class="item" v-for="item in items">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <button>+关注</button>
                <img src="../../assets/最近跟新.png" alt="">
                <p style="padding-top: 1rem;">{{ item.msg }}</p>
                <img class="author" :src="item.img">
            </div>
        </template>
    </div>
</template>

<script setup>
import axios from 'axios';
import {
    onBeforeMount,
    ref,
    onMounted,
} from 'vue'
const items = ref([])
onBeforeMount(() => {
    axios.get('/books').then((res) => {
        items.value = res.data
        console.log(items);
    })
})
</script>

<style scoped>
button {
    width: 6rem;
    height: 2.5rem;
    background-color: #42c02e;
    border: none;
    color: white;
    font-size: large;
    border-radius: 2rem;
    margin-top: 2rem;
}

.item {
    width: 30%;
    height: 20rem;
    text-align: center;
    background-color: #f7f7f7;
    border: .2px solid #e6e6e6;
    border-radius: 5px;
    position: relative;
    padding-top: 3rem;
    margin-top: 5rem;
}

.author {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    position: absolute;
    top: -2.5rem;
    left: 35%;
}

.item p {
    height: 2rem;
}

.box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}

.item:hover {
    box-shadow: 1px 1px 2px gray;
    transition: all;
}
</style>