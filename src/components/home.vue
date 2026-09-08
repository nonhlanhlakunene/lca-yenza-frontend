<script setup>
import services from '../assets/services2.png'
</script>

<template>
        <nav class="home-navbar">
            <ul class="navbar-links">
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Reviews</a></li>
                <li><a href="">Bookings</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    <div class="home-container">
        <div class="home-hero-section">
            <div class="home-text">
                <h1 class="home-heading">YENZA!</h1>
                <p>Need a helping hand?</p><br>
                <p> 
                    Find trusted professionals for all your home and maintenance needs.
                    From plumbing and painting to gardening, carpentry, and more — 
                    get the job done by skilled workers you can rely on.
                </p>
            </div>

            <div class="home-services">
                <img :src="services" alt="Services">
            </div>
        </div>
    </div>
</template>

<style>

@import url('https://db.onlinewebfonts.com/c/2da952d097bffd198ec0f0aa3fdd6804?family=JejuHallasan');



* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

.home-container{
  display: flex;
  width: 100%;
  height: 500px; 
}

/* Navbar */

.home-navbar{
    background: #136163;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 50px;
}

.navbar-links{
    gap: 50px;
    display: flex;
    list-style: none;
}

.navbar-links a {
    color: white;
    text-decoration: none;
    font-size: 15px;
    transition: 0.3s;
}


/* ========================= */

.home-heading {
    font-family: "JejuHallasan", sans-serif;
    color: white;
    font-size: 100px;
    font-weight: 800;
    margin-bottom: 25px;
}

.home-text {
  height: 600px;
  padding: 50px;
  color: white;
  background: #136163;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
}

.home-text p{
  max-width: 550px;
  font-size: 18px;
  line-height: 1.7;
  word-spacing: 10%;
}

.home-services {
  width: 70%;
  height: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
}

.home-services img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.home-hero-section{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}



@media (max-width: 1024px) {
    .home-navbar {
        justify-content: center;
        padding: 15px 30px;
    }

    .navbar-links {
        gap: 25px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .home-container {
        height: auto;
    }

    .home-hero-section {
        flex-direction: column;
        height: auto;
    }

    .home-text {
        width: 100%;
        height: auto;
        min-height: 400px;
        padding: 40px;
    }

    .home-heading {
        font-size: 80px;
    }

    .home-text p {
        max-width: 100%;
        font-size: 17px;
    }

    .home-services {
        width: 100%;
        height: 500px;
    }

    .home-services img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

@media (max-width: 768px) {
    .home-navbar {
        padding: 15px 20px;
    }

    .navbar-links {
        gap: 15px;
    }

    .navbar-links a {
        font-size: 14px;
    }

    .home-text {
        min-height: 400px;
        padding: 35px 25px;
    }

    .home-heading {
        font-size: 65px;
        margin-bottom: 20px;
    }

    .home-text p {
        font-size: 16px;
        line-height: 1.6;
    }

    .home-services {
        height: 400px;
    }
}

@media (max-width: 480px) {
    .home-navbar {
        padding: 12px 15px;
    }

    .navbar-links {
        gap: 10px;
    }

    .navbar-links a {
        font-size: 13px;
    }

    .home-text {
        min-height: 350px;
        padding: 30px 20px;
    }

    .home-heading {
        font-size: 55px;
    }

    .home-text p {
        font-size: 15px;
        line-height: 1.5;
    }

    .home-services {
        height: 220px;
    }

    .home-services img {
        height: 220px;
        object-fit: cover;
    }
}




</style>