import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const HeadStyle = styled.div`
    background-color: pink;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const BtnStyle = styled.button`
    width: 100px;
    height: 40px;
    background-color: white;
    border-radius: 6px;
  `;

  return (
    <HeadStyle>
      <BtnStyle>
        <Link to="/movie">영화등록</Link>
      </BtnStyle>
      <BtnStyle>
        <Link to="/">영화목록</Link>
      </BtnStyle>
    </HeadStyle>
  );
};

export default Header;
