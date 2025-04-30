import Gallery from "../Components/Gallery";

function Drawings({year}) {
    const imageData = Array.from({ length: 8 }, (_, i) => ({
        src: `/assets/drawings/${year}/${i + 1}.jpg`,
        alt: `Drawing ${i + 1}`
      }));
      
      

      return (
        <div>
          <Gallery images={imageData} />
        </div>
      );
}

export default Drawings;