import React from 'react'
import {BsFacebook, BsGithub, BsTiktok, BsYoutube} from 'react-icons/bs';
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://facebook.com/basbhai' target='_blank'><BsFacebook/> </a>
        <a href='https://github.com/basbhai' target='_blank'><BsGithub/></a>
        <a href='https://tiktok.com/@basbhai' target='_blank'><BsTiktok/></a>
        <a href='https://youtube.com/@brosintech2484' target='_blank'><BsYoutube/></a>


    </div>
  )
}

export default HeaderSocial