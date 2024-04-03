import personIcon from '../../assets/person_icon.svg'
import AccountDropdown from './AccountDropdown'

const AccountNav = () => {

    return (
        <div className='group'>
            <img src={personIcon} alt="sign icon" />
            <div className='group-hover:flex absolute hover:flex flex-col bg-white px-2 py-2 gap-2 rounded-md shadow hidden -translate-x-2/4'>
                <AccountDropdown />
            </div>
        </div>
    )
}

export default AccountNav