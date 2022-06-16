import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    UserIcon,
    SearchIcon
  } from "@heroicons/react/outline"

import Image from "next/image"
import huluLogo from '../public/hulu-white.png'
import HeaderItem from "./HeaderItem"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title='HOME' Icon={HomeIcon}/>
          <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
          <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
          <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
          <HeaderItem title='SEARCH' Icon={SearchIcon}/>
          <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
        </div>
        <Image className="" src={huluLogo} width={200} height={100}/>
    </header>


  )
}

export default Header