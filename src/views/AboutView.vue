<template>
  <main class="about-page">
    <section class="about-hero">
      <p class="section-label">ABOUT YENZA!</p>

      <h1>
        Connecting people with
        <span>skilled local workers.</span>
      </h1>
      <p class="hero-description">
        Yenaz makes it easier to find, connect with and book trusted skilled workers for the services you need.
      </p>
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
  max-width: 90px;
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
</style>
