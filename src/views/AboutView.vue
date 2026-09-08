<!-- <template>
  <main class="about-page"> -->

    <!-- ABOUT HERO
    <section class="about-hero">
      <h1>ABOUT US</h1>

      <h2>Connecting you with local professionals, fast!</h2>

      <p class="hero-description">
        YENZA was created to make it easier for households and businesses to find skilled and reliable manual labourers in their own area. We believe finding the right help should be simple, convenient, and stress-free. . 
      </p>
    </section>

    BANNER
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
</style> -->



<template>
  <div class="page-container">

    <!-- TOP DIVIDER -->
    <div class="divider"></div>

    <main class="about-page">

      <!-- HERO SECTION -->
      <section class="about-hero">
        <h1>About Us</h1>
        <h2>Connecting you with local professionals, fast.</h2>
        <p class="hero-description">
          YENZA! was created to make it easier for households and businesses to find skilled service providers in their own area. We believe in reliable work, no stress.
        </p>
      </section>


      <!-- BANNER SECTION -->
       <section class="banner-section">
        <div v-for="(item, index) in bannerItems" :key="index" class="banner-item">

          <div class="banner-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-Width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2"/>
              <path d="M9"/>
            </svg>
          </div>
          <p>{{  item.title  }}</p>
        </div> 
       </section>

      <!-- FAQ SECTION -->
       <section class="faq-section">
        <h2>FAQ</h2>

        <div class="faq-list">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <h3>{{  faq.question  }}</h3>
            <p>{{  faq.answer  }}</p>
          </div>
        </div>
       </section>

    </main>

    <!-- BOTTOM DIVIDER -->
    <div class="divider-line"></div>

  </div>
</template>

<style scoped>
/* Base Page Styling */
.page-container {
  background-color: var(--color-primary);
  color: var(--color-page);
  min-height: 100vh;
  font-family: var(--font-main);
}

/* Divider Styling */
.divider-line {
  width: 100%;
  height: 2px;
  background-color: var(--color-page);
}

/* Hero Section Styling */
.about-hero {
  padding: var(--spacing-lg) var(--page-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.about-hero h1 {
  font-size: var(--font-xl);
  font-weight: 700;
  margin: 0 0 var(--spacing-xs) 0;
}
.about-hero h2 {
  font-size: var(--font-md);
  font-weight: 600;
  margin: 0 0 var(--spacing-xs) 0;
}
.hero-description {
  max-width: 500px;
  font-size: var(--font-sm);
  line-height: 1.5;
  opacity: 0.9;
  margin: 0;
}
/* Banner Section Styling */
.banner-section {
  background-color: var(--color-primary-dark);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: var(--spacing-md) var(--page-padding);
  margin-bottom: var(--spacing-lg);
}
.banner-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}
banner-icon svg {
  width: 42px;
  height: 42px;
  stroke: var(--color-page);
}
.banner-item p {
  font-size: var(--font-xs);
  font-weight: 600;
  margin: 0;
}
/* FAQ Section Styling */
.faq-section {
  text-align: center;
  padding: 0 var(--page-padding) var(--spacing-lg);
  max-width: var(--page-max-width);
  margin: 0 auto;
}
.faq-section h2 {
  font-size: var(--font-xl);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
}
.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
.faq-item h3 {
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin: 0 0 var(--spacing-xs) 0;
}
.faq-item p {
  font-size: var(--font-xs);
  line-height: 1.5;
  opacity: 0.85;
  max-width: 500px;
  margin: 0 auto;
}
</style>