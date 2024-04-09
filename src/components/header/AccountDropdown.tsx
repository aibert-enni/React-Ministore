import logo from '../../assets/person_icon.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Link } from 'react-router-dom'
import { ROUTES_PATHS } from '../../router/types'
import { logOut } from '../../store/slices/UserSlice'

const AccountDropdown = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    console.log(user.initialized)

    if (user.initialized && user.user != null) {
        return (
            <div className='flex flex-col gap-1'>
                <div className='flex gap-3'>
                    <img src={logo} alt="" />
                    <p>{user.user.firstname} {user.user.lastname}</p>
                </div>
                <div className='h-[0.1px] bg-grey-75'></div>
                <Link className='text-center' to={ROUTES_PATHS.CREATE_POST}>
                    Write post
                </Link>
                <div className='h-[0.1px] bg-grey-75'></div>
                <button onClick={() => dispatch(logOut())}>Log out</button>
            </div>
        )
    } else {
        return (
            <Link to={ROUTES_PATHS.LOGIN}>
                Login
            </Link>
        )
    }
}

export default AccountDropdown