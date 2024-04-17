const ContactStores = () => {
    return (
        <div>
            <p className='uppercase text-2xl font-jost'>Our stores</p>
            <p className='font-light text-black-2 mt-3 font-lato'>You can also directly buy products from our stores.</p>
            <div className='mt-7 flex gap-5'>
                <div>
                    <p className='text-xl mb-4 uppercase underline decoration-[1px] underline-offset-2 font-jost'>USA</p>
                    <div className='flex flex-col gap-1 font-lato'>
                        <p className='text-black-2'>730 Glenstone Ave 65802, Springfield, US</p>
                        <p className='text-black-2'>+123 222 333 44</p>
                        <p className='text-black-2'>+123 666 777 88</p>
                        <p className='text-black-2'>ministore@yourinfo.com</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl mb-4 uppercase underline decoration-[1px] underline-offset-2 font-jost'>France</p>
                    <div className='flex flex-col gap-1 font-lato'>
                        <p className='text-black-2'>730 Glenstone Ave 65802, Springfield, US</p>
                        <p className='text-black-2'>+123 222 333 44</p>
                        <p className='text-black-2'>+123 666 777 88</p>
                        <p className='text-black-2'>ministore@yourinfo.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactStores