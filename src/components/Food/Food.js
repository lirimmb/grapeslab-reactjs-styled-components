import React from "react";
import styled from "styled-components";
import Background from "../../assets/food1.svg";

const Food = () => {
  return (
    <FoodSection>
      <FoodContainer>
        <FoodContent>
            <FoodFirstP>20% off in your first order</FoodFirstP>
            <FoodH1>Gobi Manchurian Ribs Lamb And Mutton Rosemary Herb</FoodH1>
            <FoodP>$39</FoodP>
            <FoodButton>Add to cart</FoodButton>
        </FoodContent>
        <FoodContent>
            <FoodImg src={Background} alt="Food"/>
        </FoodContent>
      </FoodContainer>
    </FoodSection>
  );
};

const FoodSection = styled.section`
  background: #fdf3f4;
  height: 70vh;
  width: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 700px 1000px;
  overflow: hidden;
  margin-top: 20px;
`;

const FoodContainer = styled.section`
  width: 1200px;
  display: flex;
  flex-direction: row;
`;

const FoodContent = styled.div`
  width: 50%;
  display: flex;
  padding-top: 100px;
  padding-right: 50px;
  flex-direction: column;
`;


const FoodImg = styled.img`
  width: 55%;
  display: none;
`;

const FoodH1 = styled.h1`
  position: relative;
  font-size: clamp(2.5rem, 9vw, 2rem);
  font-weight: 900;
  font-family: "Poppins", sans-serif;
  color: #030327;
`;

const FoodFirstP = styled.p`
  font-size: clamp(1em, 1vw, 3rem);
  color: #fc7d52;
  line-height: normal;
  padding-right: 60px;
  font-family: "Poppins", sans-serif; 
  font-weight: 900;
  margin-bottom: -40px;
`

const FoodP = styled.p`
  font-size: clamp(1em, 2vw, 3rem);
  margin-bottom: 2rem;
  color: #fc7d52;
  line-height: normal;
  font-weight: 900;
  font-family: "Poppins", sans-serif;
  color: #f54748;
`;

const FoodButton = styled.button`
  height: 50px;
  width: 35%;
  background: #f54748;
  border: 2px solid #f54748;
  color: #ffff;
  border-radius: 20px;
  cursor: pointer;
  transition: .2s ease-in-out;

  &:hover{
    background: none;
    color: #f54748;
    border:2px solid #f54748;
    transition: .2s ease-in-out;
  }
`

export default Food;
