<script setup>
import plumberImage from '../assets/stickman plumber.png'
</script>

<template>
        <div class="right-side">
            <div class="login-card">
                <div class="logo-section">
                    <h2>YENZA!</h2>
                    <p>Login</p>
                </div>
                <form id="loginForm">

                    <div class="input-group">
                        <label>email</label>
                        <input type="text" id="username" placeholder="someone@gmail.com" required>
                    </div>
                    <div class="input-group">
                        <label>Password</label>
                        <input type="password" id="password" placeholder="Enter password" required>
                    </div>
                    <button type="submit">
                        Login
                    </button>
                    <p id="message"></p>
                </form>
            </div>
        </div>
        <div class="login-left-side">
            
        </div>
</template>

<style>
html,
body,
#app {
  background: white;
  min-height: 100vh;
  color: black;
}


.login-card{
    width:100%;
    max-width:420px;
}

.logo-section{
    text-align:center;
    margin-bottom:35px;
}

.brand-icon{
    width:90px;
    height:90px;
    margin:0 auto 20px;

    border-radius:50%;
    background:#0d6efd;
    color:#fff;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:32px;
    font-weight:bold;
}

.logo-section h2{
    color:#243864;
    margin-bottom:8px;
    font-size:30px;
}

.logo-section p{
    color:#777;
}


.input-group{
    margin-bottom:20px;
}

.input-group label{
    display:block;
    margin-bottom:8px;
    font-weight:600;
    color:#333;
}

.input-group input{
    width:100%;
    padding:15px;

    border:1px solid #d8d8d8;
    border-radius:10px;

    outline:none;

    transition:.3s;
    font-size:15px;
}

.input-group input:focus{
    border-color:#0d6efd;
    box-shadow:0 0 12px rgba(13,110,253,.18);
}


button{
    width:100%;
    padding:15px;

    border:none;
    border-radius:10px;

    background:#136163;

    color:#fff;
    font-size:16px;
    font-weight:600;

    cursor:pointer;

    transition:.3s;
}

button:hover{
    transform:translateY(-2px);
    box-shadow:0 10px 20px rgba(13,110,253,.25);
}


/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');


</style>