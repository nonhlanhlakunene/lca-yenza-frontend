<template>
  <main class="about-page">
    <section class="about-hero">
      <p class="section-label">ABOUT YENZA!</p>

      <h1>
        Connecting people with
        <span>skilled local workers.</span>
      </h1>
      <p class="hero-description">
        Yenza makes it easier to find, connect with and book trusted skilled workers for the services you need.
      </p>
    </section>

    <section class="our-story">
      <div class="story-number">01</div>

      <div class="story-content">
        <p class="section-label">OUR STORY</p>

        <h2>
          Finding skilled help
          <span>shouldn't be difficult.</span>
        </h2>

        <p>
          Yenza was created to make it easier for people to find skilled,
          reliable workers in their local area.
        </p>

        <p>
          Instead of relying on word-of-mouth or spending hours searching,
          customers can use one platform to find services and connect with
          workers who can help.
        </p>
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
