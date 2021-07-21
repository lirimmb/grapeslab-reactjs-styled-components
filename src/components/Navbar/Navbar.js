import React from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";



export const Navbar = () => {
  return (
    <NavSection>
      <NavContainer>
        <NavLogo>grapeslab</NavLogo>
        <Navul>
            <Navli>Menu</Navli>
            <Navli>Offers</Navli>
            <Navli>Foods</Navli>
            <Navli>Services</Navli>
            <Navli>Restaurants</Navli>
        </Navul>
        <Navicons>
            <NavHeart>
                <Heart/>
            </NavHeart>
            <NavShop>
                <ShopIcon/>
            </NavShop>
        </Navicons>
      </NavContainer>
    </NavSection>
  );
};

const NavSection = styled.section`
  background: #fef2f2;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
`;


const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 1300px;
  height: 100%;
`;

const NavLogo = styled.h1`
  color: #0f0e32;
  font-size: 25px;
  font-family: 'Otomanopee One', sans-serif;
  cursor: pointer;
  transition: .3s all;

  &:hover{
    opacity: 0.8;
    transition: .3s all;
  }
`;

const Navul = styled.ul`
    display: inline;
`;

const Navli = styled.li`
    display: inline;
    padding-left: 25px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 800;
`;

const Navicons = styled.div`
    display: flex;
    justify-content: center;
`

const NavHeart = styled.div`
    width: 18px;
    display: flex;
    justify-content: center;
    background: #f8484b;
    border-radius: 100px;
    padding: 8px;
    align-items:center;
    margin-right: 15px;
    cursor: pointer;
    
`

const Heart = styled(BsHeart)`
    color: #fff;
    transition: .3s all;

    &:hover{
      opacity: .8;
      transition: .3s all;
    }
`;

const NavShop = styled.div`
    width: 18px;
    display: flex;
    justify-content: center;
    background: #f8484b;
    border-radius: 100px;
    padding: 8px;
    align-items:center;
    cursor: pointer;
`

const ShopIcon = styled(FiShoppingCart)`
    color: #fff;
    transition: .3s all;

    &:hover{
      opacity: .8;
      transition: .3s all;
    }
`;
