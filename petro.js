/* petro.js */
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const photos = [
        'petroo.jpeg.jpeg',
        'petro,jpeg.jpeg',
        'petrooo.jpeg.jpeg',
        'petro4.jpeg.jpeg',
        'petro5.jpeg.jpeg',
        'petro6.jpeg.jpeg',
        'petro7.jpeg.jpeg',
        'petro8.jpeg.jpeg',
        'petro9.jpeg.jpeg',
        'petro10.jpeg.jpeg'
        // Add more photo file names here
    ];

    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `Image ${index + 1}`;
        img.style.animationDelay = `${index * 0.2}s`;
        gallery.appendChild(img);
    });
});
