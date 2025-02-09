import '@splidejs/splide/dist/css/splide.min.css';  // Correct Splide CSS import
import 'lightbox2/dist/css/lightbox.min.css';  // Lightbox CSS
import React, { useState, useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';  // Correct React Splide import
import "../../Styles/gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const splideRef = useRef(null);  // Create a ref to store the Splide instance

  // Fetch image data from JSON
  useEffect(() => {
    fetch('/src/data/images.json')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  const handleThumbnailClick = (index) => {
    if (splideRef.current) {
      splideRef.current.splide.go(index);  // Navigate to the selected slide
    }
  };

  return (
    <div className='gallery'>
      {/* Image Carousel */}
      <h1>INTERRUPT'23</h1>
      <Splide
        ref={splideRef}  // Attach the ref to the Splide component
        options={{
          type: 'loop',
          perPage: 3,
          gap: '1rem',
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
          arrows: true,
          pagination: true,
          drag: true,
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <a href={image.url} data-lightbox="gallery" data-title={image.caption}>
              <img src={image.url} alt={image.caption} />
            </a>
            <div className="caption">{image.caption}</div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Thumbnail Navigation */}
      <div className="thumbnail-nav">
        {images.map((image, index) => (
          <img
            src={image.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            key={index}
            onClick={() => handleThumbnailClick(index)}  // Use the ref to navigate
            style={{ cursor: 'pointer', margin: '0.5rem' }}  // Optional style for thumbnails
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
