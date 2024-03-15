const SubscribeEmail = () => {
    return (
        <div className='flex justify-between items-center bg-[#272727] py-20 px-20 w-[100%]'>
            <div>
                <p className='text-3xl text-white uppercase'>Subscribe Us now</p>
                <p className='font-light text-base mt-3 text-white'>Get latest news, updates and deals directly mailed to your inbox.</p>
            </div>
            <div className='flex max-h-14'>
                <input className='py-1 px-4 text-[#3A3A3A] font-light  bg-white focus:outline-none' type="email" id="email" placeholder='Your email address here' />
                <button className='py-4 px-4 bg-[#72AEC8] text-white uppercase'>
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default SubscribeEmail