import { SubmitHandler, useForm } from "react-hook-form"
import Validator from "../models/Validator"
import { appApi } from "../services/ApiService"
import contactImg from "../assets/contact_img.jpg"

type FormFields = {
    fullname: string
    email: string,
    phone: string,
    subject: string,
    message: string
}

const Contact = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormFields>()

    const [createQuestion] = appApi.useCreateQuestionMutation()

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        createQuestion(data)
        reset()
    }

    return (
        <div className='container-lg my-28'>
            <div className="grid grid-cols-2 gap-5 mb-28">
                <div>
                    <p className='uppercase text-2xl'>Contact info</p>
                    <p className='font-light text-black-2 mt-3'>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
                    <div className='mt-7 flex gap-5'>
                        <div>
                            <p className='text-xl mb-4 uppercase underline decoration-[1px] underline-offset-2'>Office</p>
                            <div className='flex flex-col gap-1'>
                                <p className='text-black-2'>730 Glenstone Ave 65802, Springfield, US</p>
                                <p className='text-black-2'>+123 222 333 44</p>
                                <p className='text-black-2'>+123 666 777 88</p>
                                <p className='text-black-2'>ministore@yourinfo.com</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-xl mb-4 uppercase underline decoration-[1px] underline-offset-2'>Management</p>
                            <div className='flex flex-col gap-1'>
                                <p className='text-black-2'>730 Glenstone Ave 65802, Springfield, US</p>
                                <p className='text-black-2'>+123 222 333 44</p>
                                <p className='text-black-2'>+123 666 777 88</p>
                                <p className='text-black-2'>ministore@yourinfo.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <p className="uppercase text-2xl">any questions?</p>
                    <p className="font-light text-black-2">Use the form below to get in touch with us.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4 w-full">
                        <div className="flex justify-between gap-4">
                            <div className="flex flex-col w-full">
                                <input {...register('fullname', {
                                    required: true,
                                    validate: Validator.fullname
                                })} className="form-input" type="text" placeholder="Your full name *" />
                                {errors.fullname && <p className="text-error">{errors.fullname.message}</p>}
                            </div>
                            <div className="flex flex-col w-full">
                                <input {...register('email', {
                                    required: true,
                                    validate: Validator.email
                                })} className="form-input" type="text" placeholder="Write your email here *" />
                                {errors.email && <p className="text-error">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div>
                            <input {...register('phone', {
                                required: true,
                                validate: Validator.phone
                            })} className="form-input w-full" type="text" placeholder="Phone number" />
                            {errors.phone && <p className="text-error">{errors.phone.message}</p>}
                        </div>
                        <div>
                            <input {...register('subject', {
                                required: true
                            })} className="form-input w-full" type="text" placeholder="Write your subject here" />
                            {errors.subject && <p className="text-error">{errors.subject.message}</p>}
                        </div>
                        <div>
                            <input {...register('message', {
                                required: true,
                                minLength: 10
                            })} className="form-input w-full" type="text" placeholder="Write your message here *" />
                            {errors.message && <p className="text-error">{errors.message.message}</p>}
                        </div>
                        <button className="h-auto py-2 my-2 button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <img className="w-[500px] h-[400px]" src={contactImg} alt="" />
                <div>
                    <p className='uppercase text-2xl'>Our stores</p>
                    <p className='font-light text-black-2 mt-3'>You can also directly buy products from our stores.</p>
                    <div className='mt-7 flex gap-5'>
                        <div>
                            <p className='text-xl mb-4 uppercase underline decoration-[1px] underline-offset-2'>USA</p>
                            <div className='flex flex-col gap-1'>
                                <p className='text-black-2'>730 Glenstone Ave 65802, Springfield, US</p>
                                <p className='text-black-2'>+123 222 333 44</p>
                                <p className='text-black-2'>+123 666 777 88</p>
                                <p className='text-black-2'>ministore@yourinfo.com</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-xl mb-4 uppercase underline decoration-[1px] underline-offset-2'>France</p>
                            <div className='flex flex-col gap-1'>
                                <p className='text-black-2'>730 Glenstone Ave 65802, Springfield, US</p>
                                <p className='text-black-2'>+123 222 333 44</p>
                                <p className='text-black-2'>+123 666 777 88</p>
                                <p className='text-black-2'>ministore@yourinfo.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact