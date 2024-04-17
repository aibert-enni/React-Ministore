import { useForm, SubmitHandler } from 'react-hook-form'
import Validator from '../../models/Validator'
import { appApi } from '../../services/ApiService'

type FormFields = {
    fullname: string
    email: string,
    phone: string,
    subject: string,
    message: string
}

const ContactForm = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormFields>()

    const [createQuestion] = appApi.useCreateQuestionMutation()

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        createQuestion(data)
        reset()
    }

    return (
        <div className="w-full">
            <p className="uppercase text-2xl font-jost">any questions?</p>
            <p className="font-light text-black-2 font-lato">Use the form below to get in touch with us.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4 w-full font-lato">
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
    )
}

export default ContactForm