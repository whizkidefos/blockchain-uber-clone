import React from 'react';
import Image from 'next/image';
import avatar from '../temp/efosa_igbinehi.jpg';
import { BsPerson } from 'react-icons/bs';

const style = {
    wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
    leftMenu: `flex gap-3`,
    logo: `text-3xl text-white flex cursor-pointer mr-16`,
    menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
    rightMenu: `flex gap-3 items-center`,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
    loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
    loginText: `ml-2`
}

const currentAccount = '0xD08c7F7677a32EcF99D54a4D823b376EF9fCdA29';
// const currentAccount = '';

const Navbar = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.leftMenu}>
            <div className={style.logo}>Uber</div>
            <p className={style.menuItem}>Ride</p>
            <p className={style.menuItem}>Drive</p>
            <p className={style.menuItem}>More</p>
        </div>
        <div className={style.rightMenu}>
            <p className={style.menuItem}>Help</p>
            <p className={style.menuItem}>Efosa</p>
            <div className={style.userImageContainer}>
                <Image className={style.userImage} src={avatar} width={40} height={40} />
            </div>
            {currentAccount ? (
                <small>{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}</small>
            ): (
                <div className={style.loginButton}>
                    <BsPerson />
                    <small className={style.loginText}>Login</small>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar;