
const Gallery = () => {
  const gallery = [
    "/img1.jpeg",
    "/img1.jpg",
    "/img2.webp",
    "/img3.webp",
    "/img4.webp",
    "/img5.jpeg",
    "/img6.jpeg",
    "/img7.webp",
    "/img8.jpeg",
    "/img9.jpeg",
    "/img10.jpg",
  ];
  return (
    <section className="gallery">
      <h1>HEALTH AND FITNESS</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
