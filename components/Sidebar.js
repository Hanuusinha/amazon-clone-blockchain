import react from "react";
import { ConnectionButton } from 'web3uikit'
import Link from 'next/link'
import logo from '.../assets/amazon_logo.png'
import logoFull from '.../assets/amazon_logo_full.png'
import {FaBox} from 'react-icons/fa'

const isAuthenticated = true
const username = 'Yash'


const Sidebar = () => {
  const styles = {
    container: `h-full w-[300px] flex flex-col bg--[#fff] static`,
    profile: ` w-full py-16 flex flex-col justify-center items`,
    profilePicContainer: `flex- rounded-xl items-center justify`,
    profilePic: 'rounded-3xl object-cover',
    welcome: ` text-md mb-2 fond-bold text-2xl text-white`,
  }
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {
          isAuthenticated && (
            <div className={styles.profilePicContainer}>
              <Image
                src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                alt='profile'
                className={styles.profilePic}
                height={100}
                width={100}
              />
            </div>
            {!username ? (
          <>
            <div className={styles.username}>
              <input
                type='text'
                placeholder='' Username...'
                className={styles.usernameInput}
                  // value={nickname}
                  // onChange = {e => setNickname(e.target.value)}
                  />
            </div>
            <button
              className={styles.setNickname}
            // onClick={handleSetUsername}
            >
              Set Nickname
            </button>
          </>
        ) : (
            <div>
              <div className={styles.welcome}Welcome username></div>
            </div>
        )}
        </>
        )
        }
      </div>
    </div>
    <div className={styles.menu}>
      <Link href='/'>
        <div className={styles.menuItem}>
          <Image
          src={logo}
          height={30}
          width={30}
          className= {styles: amazonLogo}
         />
         My Amazon
         <br /> board
        </div>
      </Link>
          <div className={styles.menuItem}>
            <FaBox/>
            Collections
          </div>
    </div>
  )
}