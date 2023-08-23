import styled from "styled-components";
import { Img_6 } from "../assets";

const Hero = () => {
  return (
    <>
      <MainSection>
        <div></div>
      </MainSection>
    </>
  );
};

export default Hero;

const MainSection = styled.section`
  height: 80vh;
  width: 100%;
  /* background-color: #777; */
  background: url(${Img_6});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* opacity: 0.5; */
  background-color: black;

  div {
    margin: 0 auto;
    max-width: 1300px;
  }
`;
