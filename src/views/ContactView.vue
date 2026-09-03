<template>
    <div class="contact-page">                                                                                                                                                  
        <h1>Contact Us</h1>
        <h3>We would love hear from you.</h3>
        
        <br>
        
        <form class="contact-form">
            <label for="n-name">Name:</label><br>
            <input type="text" id="n-name" name="name" placeholder="Enter your name"><br>
            <label for="n-email">Email:</label><br>
            <input type="email" id="n-email" name="email" placeholder="Enter your email"><br>
            <label for="n-message">Message:</label><br>
            <textarea id="n-message" name="message" rows="4" placeholder="How can we help you?"></textarea><br>
            <button class="send-button" type="button">Send Message</button>
        </form>

        <p id="confirm-message" v-if="messageSent">Thank you, the team will get back to you soon!</p>
        
        <br>
        
        <div class="contact-info">

            <div class="contact-image">
                <img :src="contactImage"
                alt="Image of woman with headphone and laptop" width="100%">
            </div>
            
            <div class="contact-icons">
                <p>📞 +27 00 000 000</p>
                <p>📧 support@yenza.co.za </p>
                <p>⌚ Mon-Fri, 8:30am-4:30pm</p>
            </div>

        </div>
    </div>
    
</template>

<script>
//Fetching image file into this component
//"contactImgFile" is a name i chose myself
import contactImgFile from "../assets/image-of-woman-with-headphone-and-laptop.jpg"

//Every component's script needs this wrapper
export default {
    data: function () {
        return {
            contactImage: contactImgFile 
        }
    }
}
</script>

<style></style>