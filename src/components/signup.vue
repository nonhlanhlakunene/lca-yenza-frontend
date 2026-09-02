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
            <img src="stickman plumber.png" alt="plumber">
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


/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');


</style>