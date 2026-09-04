<script setup>
import painterpicture from '../assets/painterpicture.png'
</script>

<template>
  <div class="signup-container">
    <!-- LEFT SIDE: SIGNUP FORM -->
    <div class="signup-left-side">
      <div class="signup-card">
        <div class="signup-logo-section">
          <h2>Sign up</h2>
        </div>

        <form id="signupForm">
          <div class="signup-input-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="First Name" required>
          </div>

          <div class="signup-input-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Last Name" required>
          </div>

          <div class="signup-input-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="someone@gmail.com" required>
          </div>

          <div class="signup-input-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="*************" required>
          </div>

          <button type="submit" class="signup-button">Signup</button>
          
          <div class="signup-bottom-section">
            <p>Already have an account?</p>
            <button type="button" class="signup-button-link">login</button>
          </div>

          <p id="message"></p>
        </form>
      </div>
    </div>

    <!-- RIGHT SIDE: PAINTER IMAGE -->
    <div class="signup-right-side">
      <img :src="painterpicture" alt="Painter">
    </div>
  </div>
</template>

<style>
@import url('https://googleapis.com');

html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh; /* Lock structural boundaries exactly to the viewport */
  overflow: hidden; /* This hides the scrollbar completely on desktop */
  background: white;
  color: black;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.signup-container {
  display: flex;
  width: 100%;
  height: 100vh; /* Changed from min-height back to height */
  overflow: hidden; 
}

/* LEFT SIDE - FORM HOLDER */
.signup-left-side {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

/* RIGHT SIDE - IMAGE HOLDER */
.signup-right-side {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevents the large image dimensions from pushing out a scrollbar */
}


.signup-right-side img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.signup-card {
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
}

.signup-logo-section {
  text-align: center;
  margin-bottom: 35px;
}

.signup-logo-section h2 {
  color: #136163;
  font-weight: 900;
  margin: 0 0 8px;
  font-size: 30px;
}

.signup-input-group {
  margin-bottom: 20px;
}

.signup-input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.signup-input-group input {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  outline: none;
  transition: 0.3s;
  font-size: 15px;
}

.signup-input-group input:focus {
  border-color: #136163;
  box-shadow: 0 0 12px rgba(19, 97, 99, 0.18);
}

.signup-button {
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 40px;
  background: #136163;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.signup-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(19, 97, 99, 0.25);
}

.signup-bottom-section {
  text-align: center;
  margin-top: 20px;
}

.signup-button-link {
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: pointer;
  color: #136163;
  font-weight: 600;
  border: none;
  background: none;
  text-decoration: underline;
}

/* RESPONSIVE MOBILE OVERRIDES */
@media (max-width: 768px) {
  /* 1. Allow the page to scroll vertically on mobile so elements aren't cut off */
  html, body, #app {
    overflow-y: auto !important; 
  }

  .signup-container {
    flex-direction: column; /* Stacks image above the form */
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
  }

  /* 2. Give the image section a clear, visible height on mobile */
  .signup-right-side {
    width: 100%;
    height: 200px; /* Adjust this number to make the image area taller or shorter */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background-color: #ffffff;
  }

  /* 3. Keep the image constrained within its box so it stays perfectly visible */
  .signup-right-side img {
    max-height: 100%;
    width: auto;
    object-fit: contain; /* Prevents the stickman from getting cut off */
  }

  /* 4. Allow the form section to take up the remaining space naturally */
  .signup-left-side {
    width: 100%;
    height: auto;
    padding: 20px 20px 60px 20px; /* Bottom padding so the login button doesn't hit the screen edge */
    display: block; /* Allows form contents to flow downward natively */
  }
  
  .signup-card {
    margin: 0 auto;
  }
}

</style>
