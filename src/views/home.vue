<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><img src="../assets/简书.png" alt=""></el-menu-item>

        <RouterLink :to="{ path: '/home' }"><el-menu-item index="2">首页</el-menu-item></RouterLink>&nbsp;
        <RouterLink :to="{ path: '/home/mylist' }"> <el-menu-item index="3">会员</el-menu-item></RouterLink>&nbsp;
        <RouterLink :to="{ path: '/login' }"><el-menu-item index="4">登录</el-menu-item></RouterLink>&nbsp;
        <RouterLink :to="{ path: '/register' }"><el-menu-item index="5">注册</el-menu-item></RouterLink>&nbsp;
    </el-menu>
    <div class="main">
        <RouterView></RouterView>
    </div>
</template>

<script setup>

</script>

<style scoped>
img {
    padding-right: 16rem;
}

.flex-grow {
    flex-grow: 2;
}

.el-menu {
    align-items: center;
    /* 垂直居中 */
    justify-content: left;

    /* 水平居中 */
}

.main {
    position: fixed;
    top: 3.5rem;
    left: 0;
    height: fit-content;
    width: 100%;
    border-top: .5px solid gray;
    overflow-y: scroll;

}

a {
    text-decoration: none;
}
</style>