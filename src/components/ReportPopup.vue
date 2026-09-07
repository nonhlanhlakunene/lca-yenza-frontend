<template>
    <div class="n-reportCard">
        
        <div class="n-header">
            <h2>Report an issue with Theo M. (Worker)</h2>
        </div>
        
        <div class="form-group">
            <label for="reasons">Reasons for reporting:</label> <br>
            <select name="reasons" id="reasons">
                <option value="">Select a reason</option>
                <option value="behavior">Inappropriate behavior / Harassment</option>
                <option value="no-show">No-show</option>
                <option value="communication">Poor Communication</option>
                <option value="safety">Safety Concern</option>
                <option value="scam">Scam or fraud attempt</option>
                <option value="unprofessional">Unprofessional</option>
                <option value="Other">Other</option>
            </select>
            
        </div>
        
        <div class="description-text">
            <label for="message">Please describe what happened: </label>
            <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Add details about the incident...?"
            ></textarea>
        </div>

        <div class="booking-info">
            <p>Booking: #123</p>
            <p>Date: 2026-09-07</p>
        </div>

        <div class="warning">
            <p>!! False reports may result in action against your account.</p>
        </div>

        <div class="n-buttons">
          <button class="cancel-button" type="button">Cancel</button>  
          <button class="submit-button" type="button">Submit</button>
        </div>
    </div>
</template>


<script></script>

<style></style>