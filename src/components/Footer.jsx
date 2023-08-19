import { RxInstagramLogo } from "react-icons/rx";
import { RiFacebookCircleFill } from "react-icons/ri";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <FooterSection>
        <div className="container">
          <div className="social-icon">
            <RxInstagramLogo className="size" />
            <RiFacebookCircleFill className="size" />
          </div>
          <p>&copy; 2023 Dhakkan Photography - All Rights Reserved</p>
          <p>Powered By TrinityTech.com</p>
        </div>
      </FooterSection>
    </>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;

  .container {
    margin: 0 auto;
    width: 90vw;
    display: flex;
    border-top: 1px solid white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .social-icon {
      display: flex;
      gap: 10px;
      margin-top: 2rem;
      margin-bottom: 1rem;
      .size {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1rem;
      letter-spacing: 0.15rem;
    }
  }
`;
