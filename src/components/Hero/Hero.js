import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Background from "../../assets/background.png";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>We Serve The Taste You Love</HeroH1>
          <HeroP>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </HeroP>
          <HeroSearch>
            <HeroInput type="text" placeholder="Search ..." />
            <HeroSearchIcon />
          </HeroSearch>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-image: url(${Background});
  height: 80vh;
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

const HeroContent = styled.div`
  height: 80vh;
  max-height: 100%;
  width: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #0f0e32;
  line-height: 1;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const HeroH1 = styled.h1`
  position: relative;
  font-size: clamp(2.5rem, 9vw, 5rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
  font-weight: bolder;

  &::after {
    content: "";
    width: 55%;
    height: 25px;
    position: absolute;
    border-bottom: solid 5px #f54748;
    border-radius: 100px;
    margin-bottom: -5px;
    bottom: 0;
    left: 1;
    right: 58px;
  }
`;

const HeroP = styled.p`
  font-size: clamp(1em, 1vw, 3rem);
  margin-bottom: 2rem;
  color: #707070;
  line-height: normal;
`;

const HeroSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 2px solid #f54748;
  border-radius: 20px;
  width: 50%;
`;

const HeroInput = styled.input`
  height: auto;
  width: 80%;
  border: none;
  outline: none;
  color: #f54748;

  &::placeholder {
    color: #f54748;
    font-weight: bold;
  }
`;

const HeroSearchIcon = styled(AiOutlineSearch)`
  color: #f54748;
  font-size: larger;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
    transition: 0.3s ease-in-out;
  }
`;

export default Hero;
