import Masonry from "react-responsive-masonry";
import styled from "styled-components";
import {
  Img_1,
  Img_2,
  Img_3,
  Img_4,
  Img_5,
  Img_6,
  Img_7,
  Img_8,
} from "../assets";
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
  width: 90vw;

  img {
    object-fit: contain;
    display: block;
  }
`;

const imagesData = [
  {
    img: Img_1,
    title: "Fern",
  },
  {
    img: Img_2,
    title: "Snacks",
  },
  {
    img: Img_3,
    title: "Mushrooms",
  },
  {
    img: Img_4,
    title: "Tower",
  },
  {
    img: Img_5,
    title: "Sea star",
  },
  {
    img: Img_6,
    title: "Mushrooms",
  },
  {
    img: Img_7,
    title: "Tower",
  },
  {
    img: Img_8,
    title: "Sea star",
  },
];
