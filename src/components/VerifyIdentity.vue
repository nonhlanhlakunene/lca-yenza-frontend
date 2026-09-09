<template>
    <div v-if="showVerification" class="verification-overlay">
        <div class="n-verifyForm">
            
            <button class="close-btn" type="button" @click="$emit('close')">×</button>
            
            <div class="n-bars">
                <div
                v-for="n in totalSteps"
                :key="n"
                class="progress-segment"
                :class="{ active: step >= n }"
                ></div>
            </div>
            
            <!-- STEP 1: Phone number -->
            <div v-if="step === 1">
                <div class="n-headings">
                    <h3>VERIFY YOUR PHONE</h3>
                    <p>Enter your mobile number to receive the code.</p>
                </div>
                
                <form class="verification-card" @submit.prevent="sendOtp">
                    <label for="number">Phone Number</label> <br>
                    <input
                    id="number"
                    name="number"
                    type="tel"
                    v-model="phoneNumber"
                    pattern="^(0|\+27)[1-9][0-9]{8}$"
                    placeholder="e.g., 0821234567 or +27821234567"
                    required
                    /> <br>
                    <button class="send-otp" type="submit">Send OTP</button>
                </form>
            </div>
            
            <!-- STEP 2: OTP entry -->
            <div v-if="step === 2">
                <div class="n-headings">
                    <h3>ENTER VERIFICATION CODE</h3>
                    <p>We sent a code to {{ phoneNumber }}</p>
                </div>
                
                <form class="verification-card" @submit.prevent="verifyOtp">
                    <label for="otp">6-digit code</label> <br>
                    <input
                    id="otp"
                    type="text"
                    maxlength="6"
                    v-model="enteredOtp"
                    placeholder="123456"
                    required
                    /> <br>
                    <p v-if="otpError" class="error-message">Incorrect code, try again.</p>
                    <button class="send-otp" type="submit">Verify OTP</button>
                    <p class="resend" @click="sendOtp">Resend code</p>
                </form>
            </div>
            
            <!-- STEP 3: ID upload (WORKERS ONLY) -->
            <div v-if="step === 3 && userType === 'worker'">
                <div class="n-headings">
                    <h3>UPLOAD YOUR ID</h3>
                    <p>Upload a clear photo of your South African ID.</p>
                </div>
                
                <div class="phone-confirmed">✔ Phone verified · {{ phoneNumber }}</div>
                
                <form class="verification-card" @submit.prevent="submitId">
                    <label for="idUpload">ID Document</label> <br>
                    <input
                    id="idUpload"
                    type="file"
                    accept="image/*"
                    capture="environment"
                    @change="handleFileUpload"
                    required
                    /> <br>
                    <p v-if="idFileName" class="file-selected">Selected: {{ idFileName }}</p>
                    <button class="send-otp" type="submit" :disabled="!idFile">Submit for review</button>
                </form>
            </div>
            
            <!-- FINAL STEP -->
            <div v-if="step === totalSteps">
                <div class="n-headings" v-if="userType === 'worker'">
                    <h3>YOU'RE ALL SET ✓</h3>
                    <p>Your details are under review. We'll notify you once approved.</p>
                </div>
                <div class="n-headings" v-else>
                    <h3>PHONE VERIFIED ✓</h3>
                    <p>You're ready to start booking.</p>
                </div>
                <button class="send-otp" type="button" @click="finishVerification">Continue</button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "PhoneVerification",
    props: {
        showVerification: {
            type: Boolean,
            default: true
        },
        userType: {
            type: String,
            default: 'customer', // Default to 'customer' if not provided
            validator: (value) => ['worker', 'customer'].includes(value)
        }
    },
    data() {
        return {
            step: 1,
            phoneNumber: '',
            generatedOtp: '',
            enteredOtp: '',
            otpError: false,
            idFile: null,
            idFileName: ''
        }
    },
    computed: {
        totalSteps() {
            return this.userType === 'worker' ? 4 : 3
        }
    },
    watch: {
        // Reset form when verification modal opens
        showVerification(newVal) {
            if (newVal) {
                this.resetForm()
            }
        }
    },
    methods: {
        resetForm() {
            this.step = 1
            this.phoneNumber = ''
            this.generatedOtp = ''
            this.enteredOtp = ''
            this.otpError = false
            this.idFile = null
            this.idFileName = ''
        },
        
        sendOtp() {
            // Validate phone number first
            const phoneRegex = /^(0|\+27)[1-9][0-9]{8}$/
            if (!phoneRegex.test(this.phoneNumber.replace(/\s/g, ''))) {
                alert('Please enter a valid South African phone number')
                return
            }
            
            this.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString()
            console.log('Simulated OTP sent to', this.phoneNumber, ':', this.generatedOtp)
            
            // In production, you would call your API here
            // await this.$api.sendOTP({ phone: this.phoneNumber })
            
            this.otpError = false
            this.enteredOtp = ''
            this.step = 2
        },
        
        verifyOtp() {
            if (this.enteredOtp === this.generatedOtp) {
                this.otpError = false
                // Workers go to ID upload next. Customers skip straight to done.
                this.step = this.userType === 'worker' ? 3 : this.totalSteps
                
                // Emit event for successful verification
                this.$emit('phone-verified', this.phoneNumber)
            } else {
                this.otpError = true
                // Clear the OTP input for retry
                this.enteredOtp = ''
            }
        },
        
        handleFileUpload(event) {
            const file = event.target.files[0]
            if (file) {
                // Validate file type
                if (!file.type.startsWith('image/')) {
                    alert('Please upload an image file')
                    event.target.value = ''
                    return
                }
                
                // Validate file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert('File size must be less than 5MB')
                    event.target.value = ''
                    return
                }
                
                this.idFile = file
                this.idFileName = file.name
            }
        },
        
        submitId() {
            if (!this.idFile) {
                alert('Please select an ID document')
                return
            }
            
            // In production, you would upload the file here
            // const formData = new FormData()
            // formData.append('id', this.idFile)
            // formData.append('phone', this.phoneNumber)
            // await this.$api.uploadID(formData)
            
            console.log('Verification submitted:', {
                phoneNumber: this.phoneNumber,
                idFile: this.idFile.name
            })
            
            this.step = this.totalSteps
        },
        
        finishVerification() {
            this.$emit('complete')
        }
    }
}
</script>

<style scoped>
/* Your existing styles... */
.verification-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.n-verifyForm {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    max-width: 400px;
    width: 90%;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
}

.close-btn:hover {
    color: #000;
}

.n-bars {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
}

.progress-segment {
    flex: 1;
    height: 4px;
    background: #e5e7eb;
    border-radius: 2px;
    transition: background 0.3s ease;
}

.progress-segment.active {
    background: #136163;
}

.n-headings h3 {
    margin: 0 0 8px 0;
    font-size: 1.25rem;
}

.n-headings p {
    margin: 0 0 16px 0;
    color: #6b7280;
    font-size: 0.9rem;
}

.verification-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.verification-card label {
    font-weight: 600;
    font-size: 0.9rem;
}

.verification-card input[type="tel"],
.verification-card input[type="text"] {
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
}

.verification-card input:focus {
    outline: none;
    border-color: #136163;
    box-shadow: 0 0 0 3px rgba(19, 97, 99, 0.1);
}

.send-otp {
    background: #136163;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
}

.send-otp:hover:not(:disabled) {
    background: #0f4e50;
}

.send-otp:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.error-message {
    color: #ef4444;
    font-size: 0.85rem;
    margin: -4px 0 4px 0;
}

.resend {
    color: #136163;
    text-align: center;
    cursor: pointer;
    font-size: 0.9rem;
    margin: 4px 0 0 0;
}

.resend:hover {
    text-decoration: underline;
}

.phone-confirmed {
    background: #f0fdf4;
    color: #166534;
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 16px;
    font-size: 0.9rem;
}

.file-selected {
    color: #136163;
    font-size: 0.85rem;
    margin: -4px 0 0 0;
}

@media (max-width: 480px) {
    .n-verifyForm {
        padding: 1.5rem;
        width: 95%;
    }
}
</style>