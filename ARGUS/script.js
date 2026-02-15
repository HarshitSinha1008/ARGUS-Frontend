function shuffleFeatures() {
    const featuresList = document.querySelector('.features-list');
    const features = Array.from(featuresList.children);
    
    // Show only 3 features at a time
    const visibleCount = 3;
    let currentIndex = 0;
    
    // Initially hide all features except first three
    features.forEach((feature, index) => {
        if (index >= visibleCount) {
            feature.style.display = 'none';
        }
    });

    setInterval(() => {
        // Get current visible features
        const currentFeature = features[currentIndex];
        
        // Add shuffle out animation
        currentFeature.classList.add('shuffle-out');
        
        // After animation, hide current feature and show next one
        setTimeout(() => {
            currentFeature.style.display = 'none';
            currentFeature.classList.remove('shuffle-out');
            
            // Calculate next index
            const nextIndex = (currentIndex + visibleCount) % features.length;
            const nextFeature = features[nextIndex];
            
            // Show and animate in the next feature
            nextFeature.style.display = 'flex';
            nextFeature.style.animation = 'none';
            nextFeature.offsetHeight; // Trigger reflow
            nextFeature.style.animation = null;
            
            currentIndex = (currentIndex + 1) % features.length;
        }, 500); // Match this with the animation duration
    }, 3000); // Shuffle every 3 seconds
}

// Start shuffling when the page loads
document.addEventListener('DOMContentLoaded', shuffleFeatures); 