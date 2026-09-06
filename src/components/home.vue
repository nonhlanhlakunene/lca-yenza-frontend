<script>
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
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

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
    font-size: 18px;
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


</style>