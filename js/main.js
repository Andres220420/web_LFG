// Gallery main functionality
document.addEventListener('DOMContentLoaded', function() {
    // Basic gallery functionality
    console.log('Gallery page loaded');
    
    // Handle any gallery-specific interactions
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add any click functionality for gallery items
            console.log('Gallery item clicked');
        });
    });
});