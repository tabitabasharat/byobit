import React from "react";
import logo from "../../assets/Logo 2.png";
import styled from "styled-components";
import footer from "../Footer/Footer.css";
import socialimg from "../../assets/Group 69.svg"

const Bgcolr = styled.div`
  background: linear-gradient(#050517 0%, #1a053d 100%);
  padding: 37px 150px 37px 150px;
`;
const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
  color: white;
  height: 22px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Copyright = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
const Socialimg = styled.div`
    width: 194px;
    height: 41px;
`;
const Dislaimer = styled.div`
    background: #0B0931;
    width: 100%;
    height: 106px;
    position: absolute;
    left: 0px;
    bottom: -724px;
    color: white;
    padding: 29px 150px 29px 150px;
    /* position: absolute; */
    font-size: 14px;
`
const Styledspan = styled.span`
font-size: 14px;
font-weight: 600;
`

const Footer = () => {
  return (
    <Bgcolr>
      <div className="d-flex justify-content-between position-relative">
        <img src={logo} />
        <StyledList>
          <li>Airdrop</li>
          <li>News</li>
          <li>Blogs</li>
        </StyledList>
      </div>
      <div className="bgfooter">
        <Copyright> Copyright © 2023 Byobit.com</Copyright>
        <Socialimg>
            <img src={socialimg}/>
        </Socialimg>
      </div>
      <Dislaimer><Styledspan className="fw-2">Disclaimer:</Styledspan> The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</Dislaimer>
    </Bgcolr>
  );
};

export default Footer;
