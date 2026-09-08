<template>
  <main class="about-page">

    <!-- ABOUT HERO -->
    <section class="about-hero">
      <h1>ABOUT US</h1>

      <h2>Connecting you with local professionals, fast!</h2>

      <p class="hero-description">
        YENZA was created to make it easier for households and businesses to find skilled and reliable manual labourers in their own area. We believe finding the right help should be simple, convenient, and stress-free. . 
      </p>
    </section>

    <!-- BANNER -->
    <section class="banner-section">

      <div class="banner-item">
        <div class="banner-icon">.</div>
        <p>Verified Professionals</p>
      </div>

      <div class="banner-item">
        <div class="banner-icon">.</div>
        <p>Easy Booking</p>
      </div>

      <div class="banner-item">
        <div class="banner-icon">.</div>
        <p>Local Services</p>
      </div>

      <div class="banner-item">
        <div class="banner-icon">.</div>
        <p>24/7 Support</p>
      </div>

    </section>
    
  </main>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
}
.about-hero {
  min-height: 80vh;
  padding: 100px 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.section-label {
  margin-bottom: 20px;
  font-size: 0.8rem;
  letter-spacing: 0.15rem;
}
.about-hero h1 {
  max-width: 900px;
  margin: 0;
  font-size: clamp(3rem, 8vw, 8rem);
  line-height: 0.95;
}
.about-hero h1 span {
  display: block;
}
.hero-description {
  max-width: 600px;
  margin-top: 30px;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* OUR STORY */
.our-story {
  min-height: 80vh;
  padding: 100px 8%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 80px;
  align-items: start;
}
.story-number {
  font-size: clamp(3rem, 6vw, 7rem);
  line-height: 1;
}
.story-content {
  max-width: 750px;
}
.story-content h2 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 6rem);
  line-height: 1;
}
.story-content h2 span {
  display: block;
}
.story-content p:not(.section-label) {
  max-width: 600px;
  margin-top: 30px;
  font-size: 1.1rem;
  line-height: 1.7;
}
</style>
