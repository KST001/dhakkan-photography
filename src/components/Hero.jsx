import styled from "styled-components";

const Hero = () => {
  return (
    <>
      <MainSection>
        <div>{/* <img src="/public/images/IMG_6.jpg" alt="" /> */}</div>
      </MainSection>
    </>
  );
};

export default Hero;

const MainSection = styled.section`
  height: 80vh;
  /* background-color: #777; */
  background: url("/public/images/IMG_6.jpg");
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
  background-size: cover;
  opacity: 0.5;
  background-color: black;

  div {
    margin: 0 auto;
    max-width: 1300px;
  }
`;
