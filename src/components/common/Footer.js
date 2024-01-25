import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/style/common/footer.scss";
import { BsDiscord } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import logo from "../../assets/images/onlyfooter.svg";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa"
import { Image } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <footer className='app_footer'>
        {/* <Container fluid> */}
        <div className='footer_text_wrap'>
          <ul>
            <li><Link to="https://onlylayer.com/"><Image src={logo} alt="logo" width="80" fluid /></Link></li>
          </ul>
        </div>
        <div className='footer_icn_wrap'>
          <ul>
            <li><Link to="https://github.com/layeronly"><FaGithub /></Link></li>
          <li><Link to="https://discord.gg/XEDkfXvq"><FaDiscord /></Link></li>
            <li><Link to="https://x.com/onlylayer"><AiFillTwitterCircle /></Link></li>
          </ul>
        </div>
        {/* </Container> */}
      </footer>
    </>
  )
}

export default Footer
