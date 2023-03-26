<template>
    <div class="container">
        <mainHeader></mainHeader>
        <mainBody></mainBody>
    </div>
</template>

<script setup>
import mainHeader from '../components/main/main-header.vue'
import mainBody from '../components/main/main-body.vue'
</script>

<style scoped>
.container {
    margin: 0 auto;
    padding: 2rem 0 2rem 0;
    width: 960px;
    height: 100vh;
}
</style>