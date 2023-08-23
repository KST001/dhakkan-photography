import styled from "styled-components";
import { IMG_1, IMG_2, IMG_3 } from "../assets";

const Slider = () => {
  const ImageList = () =>
    ImageData.map((img) => (
      <figure key={img.id}>
        <img src={img.src} alt="" />
        <figcaption>{img.title}</figcaption>
        <p>{img.date}</p>
      </figure>
    ));
  return (
    <>
      <Carousel className="img-grid">{ImageList()}</Carousel>
    </>
  );
};

export default Slider;

const ImageData = [
  {
    id: 1,
    src: IMG_1,
    title: "Travel",
    date: "1.2.2020",
  },
  {
    id: 2,
    src: IMG_2,
    title: "Travel",
    date: "1.2.2020",
  },
  {
    id: 3,
    src: IMG_3,
    title: "Travel",
    date: "1.2.2020",
  },
  // {
  //   id: 4,
  //   src: "/public/images/card/IMG_8829.jpg",
  //   title: "Travel",
  //   date: "1.2.2020",
  // },
];

const Carousel = styled.section`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  /* grid-gap: 0 20px; */
  justify-content: center;
  /* flex-wrap: wrap; */
  align-items: center;
  max-width: 1300px;
  width: 90vw;
  margin: 3rem auto;
  /* gap: 3rem; */

  figure {
    width: 336px;
    grid-auto-flow: row;
    object-fit: contain;
    height: 403px;
    position: relative;
    background-color: #eaeaea;
    padding: 19px 19px 85px 19px;

    img {
      /* width: 100%; */
      max-width: 100%;
      height: auto;
    }
    figcaption {
      font-size: 1.563rem;
      text-align: center;
      color: #2c2c2c;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      letter-spacing: 0.5rem;
      text-align: center;
      font-weight: 400;
      font-family: "Poppins", sans-serif;
    }

    @media screen and (max-width: 768px) {
      .img-grid {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      figure {
        width: 200px;
        height: 350px;
      }
    }
    @media screen and (max-width: 900px) {
      .img-grid {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
    }
  }
`;
