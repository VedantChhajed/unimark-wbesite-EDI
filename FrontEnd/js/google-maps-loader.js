/**
 * Google Maps Loader
 * 
 * Dynamically loads the Google Maps JavaScript API with the API key from environment variables.
 * This should be loaded after env-config.js
 */

(function() {
    // Get the API key from environment variables
    const apiKey = window.ENV?.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE';
    
    // Build the Google Maps API URL
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry&callback=initMap`;
    script.defer = true;
    script.async = true;
    
    // Add error handling
    script.onerror = function() {
        console.error('Failed to load Google Maps API. Please check your API key.');
    };
    
    // Append the script to the document
    document.head.appendChild(script);
})();
