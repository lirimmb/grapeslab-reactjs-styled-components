import React from "react";
import styled from "styled-components";
import Delivery from "../../assets/food-delivery.svg";
import FastFood from "../../assets/fast-food.svg";
import Discount from "../../assets/discount.svg";

const Services = () => {
  return (
    <ServicesSection>
      <ServicesContent>
        <CardItem>
          <CardHeader>
            <CartIconDiv color="#fee9e4">
              <CartIcon src={Delivery} />
            </CartIconDiv>
            <CartTitle>Fastest Delivery</CartTitle>
          </CardHeader>
          <CardDesc>
            <CardText>
              Lorum Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
              Sed Do Eiusm Incidiunet Ut.
            </CardText>
          </CardDesc>
        </CardItem>

        <CardItem>
          <CardHeader>
            <CartIconDiv color="#e4f5fc">
              <CartIcon src={FastFood} />
            </CartIconDiv>
            <CartTitle>Best Taste</CartTitle>
          </CardHeader>
          <CardDesc>
            <CardText>
              Lorum Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
              Sed Do Eiusm Incidiunet Ut.
            </CardText>
          </CardDesc>
        </CardItem>

        <CardItem>
          <CardHeader>
            <CartIconDiv color="#fef7e5">
              <CartIcon src={Discount} />
            </CartIconDiv>
            <CartTitle>Best Offers in Town</CartTitle>
          </CardHeader>
          <CardDesc>
            <CardText>
              Lorum Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
              Sed Do Eiusm Incidiunet Ut.
            </CardText>
          </CardDesc>
        </CardItem>
      </ServicesContent>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  display: flex;
  justify-content: center;
  height: 200px;
  margin-top: 40px;
`;

const ServicesContent = styled.div`
  height: 100%;
  width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

const CardItem = styled.div`
  height: auto;
  width: 28%;
  border: 1px solid #e6e6e6;
  margin-right: 35px;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  transition: .3s ease-in-out;

  &:hover{
      border: 2px solid #a2a2a2;
      transition: .3s ease-in-out;
  }

`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  padding-top: 10px;
`;

const CartIconDiv = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => (props.color ? props.color : "white")};
  align-items: center;
  width: 18%;
  border-radius: 5px;
`;

const CartIcon = styled.img`
  width: 50%;
`;

const CartTitle = styled.h3`
  color: #000029;
  padding-left: 15px;
  align-self: center;
  font-family: "Poppins", sans-serif;
`;

const CardDesc = styled.div`
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
`;

const CardText = styled.p`
  font-size: 15px;
  color: #707070;
  font-family: "Poppins", sans-serif;
`;

export default Services;
