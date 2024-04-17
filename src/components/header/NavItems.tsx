import { Link } from "react-router-dom"
import { ROUTES_PATHS } from "../../router/types"
import { useState } from "react"

import dropIcon from "../../assets/ion_caret-down.svg"

const NavItems = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    return (
        <div className='flex gap-10 mr-28 font-lato'>
            <Link className='uppercase font-normal hover:underline underline-offset-2' to={ROUTES_PATHS.HOME}>home</Link>
            <Link className='uppercase font-normal hover:underline underline-offset-2' to={ROUTES_PATHS.ABOUT}>about</Link>
            <div className="group">
                <div className="flex items-end">
                    <p onClick={() => setIsClicked(!isClicked)} className="cursor-pointer uppercase font-normal">pages</p>
                    <img className='w-[10px] pb-1 transition-all group-hover:rotate-180' src={dropIcon} alt="" />
                </div>
                <div className='group-hover:flex absolute hover:flex flex-col bg-white px-2 py-2 gap-2 rounded-md shadow hidden'>
                    <Link className='uppercase font-normal hover:underline underline-offset-2' to={ROUTES_PATHS.SHOP}>shop</Link>
                    <Link className='uppercase font-normal hover:underline underline-offset-2' to={ROUTES_PATHS.CART}>cart</Link>
                </div>
            </div>
            <Link className='uppercase font-normal hover:underline underline-offset-2' to={ROUTES_PATHS.BLOG}>blogs</Link>
            <Link className='uppercase font-normal hover:underline underline-offset-2' to={ROUTES_PATHS.CONTACT}>contact</Link>
        </div>
    )
}

export default NavItems