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

@media (max-width: 768px){
    .home-navbar{
        flex-direction: column;
    }

    .navbar-links{
        flex-direction: column;
        margin: 15px 0;
        text-align: center;
    }

    .navbar-links a{
        margin: 10px 0;
    }
}

/* ========================= */



.home-text {
    background: #136163;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.home-services {
  width: 50%;
  height: 100%;
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
}



</style>