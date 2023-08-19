import Masonry from "react-responsive-masonry";
import styled from "styled-components";
const Gallery = () => {
  const ImageGrid = () =>
    imagesData?.map((image, index) => (
      <img key={index} src={image.img} alt={`Image ${index}`} />
    ));

  return (
    <Grid>
      <Masonry columnsCount={4} gutter="10px">
        {ImageGrid()}
      </Masonry>
    </Grid>
  );
};

export default Gallery;

const Grid = styled.div`
  max-width: 1300px;
  margin: 1rem auto;

  img {
    object-fit: contain;
    display: block;
  }
`;

const imagesData = [
  {
    img: "public/images/IMG_1.jpg",
    title: "Fern",
  },
  {
    img: "public/images/IMG_2.jpg",
    title: "Snacks",
  },
  {
    img: "public/images/IMG_3.jpg",
    title: "Mushrooms",
  },
  {
    img: "public/images/IMG_1.jpg",
    title: "Tower",
  },
  {
    img: "public/images/IMG_5.jpg",
    title: "Sea star",
  },
  {
    img: "public/images/IMG_6.jpg",
    title: "Mushrooms",
  },
  {
    img: "public/images/IMG_7.jpg",
    title: "Tower",
  },
  {
    img: "public/images/IMG_8.jpg",
    title: "Sea star",
  },
];
