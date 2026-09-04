<template>
    <div class="contact-page"> 
        <div class="contact-card">                                                                                                                                             
            
            <div class="contact-content">
                <div class="form-column">
                    <h1>Contact Us</h1>
                    <h3>We would love  hear from you.</h3>
                    
                    <form class="contact-form" @submit.prevent="sendMessage">
                        <div class="form-group">
                            <label for="n-name">Name:</label>
                            <input type="text" id="n-name" name="name" placeholder="Enter your name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="n-email">Email:</label>
                            <input type="email" id="n-email" name="email" placeholder="Enter your email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="n-message">Message:</label>
                            <textarea id="n-message" name="message" rows="4" placeholder="How can we help you?"></textarea>
                        </div>
                        <button class="send-button" type="submit">Send Message</button>
                    </form>
                </div>
                
                
                
                
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
        </div>
        
        <p id="confirm-message" v-if="messageSent">Thank you, the team will get back to you soon!</p>
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
            contactImage: contactImgFile,
            messageSent: false
        }
    },

    methods: {
        sendMessage: function() {
            this.messageSent = true
        }
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

:root {
  --color-page: #FFFFFF;
  --color-primary: #286568;
  --color-primary-dark: #21595C;
  --color-text: #E8E8E8;
  --color-text-muted: #C7C7C7;
  --color-border: #D9D9D9;
  --font-main: 'Plus Jakarta Sans', sans-serif;
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.contact-page {
    font-family: var(--font-main);
    background: #f0f4f8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
}

.contact-card {
    background: var(--color-page);
    border-radius: 20px;
    max-width: var(--page-max-width);
    width: 100%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--color-page);
}

.form-column {
    padding: 50px 40px;
    background: var(--color-page);
}

.form-column h1 {
    color: var(--color-primary);
    font-size: var(--font-xl);
    margin-bottom: var(--spacing-xs);
    font-weight: 700;
}

.form-column h3 {
    color: #666;
    font-size: var(--font-md);
    font-weight: 400;
    margin-bottom: var(--spacing-md);
}

.contact-form label {
    display: block;
    font-weight: 600;
    color: #333;
    margin-bottom: 6px;
    font-size: var(--font-sm);
}

.form-group {
    margin-bottom: 18px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 14px 16px;
    background: #f5f5f5;
    border: 2px solid var(--color-border);
    border-radius: 10px;
    font-family: inherit;
    font-size: var(--font-sm);
    transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    background: white;
}

.contact-form textarea {
    resize: vertical;
    min-height: 100px;
}

.send-button {
    background: var(--color-primary);
    color: white;
    border: none;
    padding: 14px 50px;
    border-radius: 10px;
    cursor: pointer;
    font-size: var(--font-md);
    font-weight: 600;
    transition: all 0.3s ease;
    width: 100%;
}

.send-button:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(26, 95, 95, 0.3);
}

.contact-info {
    background: var(--color-page);
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
}

.contact-image {
    width: 100%;
    background: #d9dedd;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}

.contact-image img {
    width: 100%;
    height: auto;
    max-height: 320px;
    object-fit: contain;
    display: block;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.contact-icons {
    width: 100%;
    margin-top: auto;
}

.contact-icons p {
    background: #f5f8f7;
    border-radius: 10px;
    color: #333;
    font-size: var(--font-sm);
    transition: all 0.3s ease;
}

.contact-icons p:hover {
    transform: translateX(5px);
    background: #e8f3f0;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
}

#confirm-message {
    max-width: var(--page-max-width);
    width: 100%;
    margin: 20px auto 0;
    background: #2ecc71;
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    text-align: center;
    font-weight: 500;
}

@media (max-width: 850px) {
    .contact-content {
        grid-template-columns: 1fr;
    }
    .form-column {
        padding: 30px 30px;
    }
    .contact-info {
        padding: 30px 30px;
    }
    .contact-image img {
        max-height: 250px;
    }
}

@media (max-width: 600px) {
    .contact-page {
        padding: 20px 15px;
    }
    .form-column {
        padding: 25px 20px;
    }
    .form-column h1 {
        font-size: 30px;
    }
    .contact-info {
        padding: 25px 20px;
    }
    .contact-image {
        padding: 15px;
    }
    .contact-image img {
        max-height: 200px;
    }
}
</style>