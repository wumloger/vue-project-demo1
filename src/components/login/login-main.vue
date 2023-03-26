<template>
    <div class="container">
        <img src="../../assets/简书登录.png" alt="">
        <el-form ref="ruleFormRef" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
            <div class="change">
                <div>登录</div>
                <div>
                    <router-link :to="{ path: '/register' }">
                        <div>注册</div>
                    </router-link>
                </div>
            </div>
            <el-form-item label="账号" prop="pass">
                <el-input type="text" autocomplete="off" />
            </el-form-item>

            <el-form-item label="密码" prop="checkPass">
                <el-input type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <router-link :to="{ path: './home/main' }"><el-button type="primary">登录</el-button></router-link>
            </el-form-item>

        </el-form>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    background-color: #f1f1f1;
    width: 100%;
    height: 100vh;
}



a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: green;
}

.change {
    width: 37%;
    height: 3rem;
    margin-left: 10rem;

    display: flex;
    justify-content: space-around;
}

.change div {
    width: 50%;
    height: 100%;
    text-align: center;
}

.el-form {
    text-align: center;
}

.el-form-item {
    margin-right: 4rem;
}

.el-button {
    margin-left: 5.5rem;
}

.el-form {
    border: 0.5px solid gray;
    padding: 1rem;
    height: 13rem;
    width: 28rem;
    margin: 15rem auto;
}
</style>