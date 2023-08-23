import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Img_2 } from "../assets";

const About = () => {
  const Navigate = useNavigate();
  return (
    <AboutUs>
      <div className="container">
        <div className="Image-box">
          <img src={Img_2} alt="" />
        </div>
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro
            reiciendis, deleniti tempora ut sunt assumenda nam, vitae modi ipsa
            necessitatibus. Illum harum provident, tempora velit dolorum debitis
            ut assumenda quibusdam magni, id quis ipsam eligendi cupiditate
            nesciunt neque aliquid iusto, aperiam consectetur! Error architecto
            debitis maiores iure animi illum autem nulla incidunt nobis
            laboriosam eos temporibus earum facere, voluptatibus hic eveniet
            facilis placeat. Magni at doloremque, voluptatum aliquam esse veniam
            accusamus beatae quas animi quae obcaecati veritatis cupiditate
            dolorem id iusto qui optio ipsum neque.
          </p>
          <button className="btn" onClick={() => Navigate("/about")}>
            Read more
            <BsArrowUpRightCircle className="btn-icon" />
          </button>
        </div>
      </div>
    </AboutUs>
  );
};

const AboutUs = styled.div`
  background-color: black;
  height: 70vh;
  overflow: hidden;
  color: #fff;
  .container {
    max-width: 1300px;
    width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;

    img {
      width: 350px;
      height: 400px;
    }

    .about-us-text {
      width: 50%;
      h2 {
        font-size: 2.8rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.15rem;
        font-family: "Poppins";
        line-height: 1.75rem;
        letter-spacing: 1.5px;
        font-weight: 300;
        text-align: justify;
        padding-right: 2rem;
      }

      button {
        color: white;
        background-color: black;
        font-size: 0.8rem;
        letter-spacing: 2px;
        padding: 1rem 2rem;
        margin-top: 1rem;
        border: 1px solid white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .btn-icon {
          font-size: 1.563rem;
          margin-left: 1rem;
        }
      }
    }
  }
`;

export default About;
