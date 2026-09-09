<template>
    <div class="n-verifyForm">
        <div class="n-bars">

        </div>

        <div class="n-headings">
            <h3>VERIFY YOUR PHONE</h3>
            <p>Enter your mobile number to receive the code.</p>
        </div>

        <form class="verification-card">
            <label for="number">Phone Number</label> <br>
            <input id="number" name="number" type="tel" pattern="^(0|\+27)[1-9][0-9]{8}$" 
            placeholder="e.g., 0821234567 or +27821234567"> <br>
            <button class="send-otp" type="submit">Send OTP</button>
        </form>
    </div>
</template>

<script>

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap");

:root {
  --color-page: #ffffff;
  --color-primary: #136163;
  --color-primary-dark: #134748;
  --color-text: #000000;
  --font-main: "Plus Jakarta Sans", sans-serif;
  --font-xs: 0.7rem;
  --font-sm: 0.85rem;
  --font-md: 1rem;
  --font-lg: 1.5rem;
  --font-xl: 2rem;
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  --page-max-width: 1200px;
  --page-padding: 2rem;
}
</style>

<style scoped>
</style>