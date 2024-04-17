import { SubmitHandler, useForm } from 'react-hook-form'
import logo from '../assets/logo.svg'
import { appApi } from '../services/ApiService'
import { useEffect } from 'react'
import { IUser } from '../models/apiUserModels'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES_PATHS } from '../router/types'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { initUser } from '../store/slices/UserSlice'

type FormFields = {
    login: string
    firstname: string
    lastname: string
    password: string
}

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>()

    const [createUser] = appApi.useCreateUserMutation()

    const dispatch = useAppDispatch()

    const user = useAppSelector(state => state.user)

    const navigate = useNavigate()

    useEffect(() => {
        if (user.initialized) navigate(ROUTES_PATHS.HOME)
    })

    const checkLogin = async (login: string) => {
        const response = await fetch(`http://localhost:3000/users?login=${login}`, {
            method: "GET"
        })
        const data: IUser[] = await response.json()
        if (data.length <= 0) {
            return false
        } else {
            return true
        }
    }

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        createUser(data)
        dispatch(initUser(data))
        navigate(ROUTES_PATHS.HOME)
    }

    return (
        <div className="container-large flex flex-col items-center">
            <div className='py-5'>
                <img className='w-32' src={logo} alt="" />
            </div>
            <div className="p-5 border rounded border-[#D9D9D9]">
                <p className="text-3xl font-jost font-normal">Sign up</p>
                <form onSubmit={handleSubmit(onSubmit)} className="my-5 w-[312px] flex flex-col gap-5 font-lato">
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Login</label>
                        <input {...register('login', {
                            required: true,
                            validate: async (value) => {
                                if (!/^[0-9A-Za-z]{6,16}$/.test(value)) {
                                    return "Invalid login"
                                }
                                if (await checkLogin(value)) {
                                    return "Login already exist"
                                }
                                return true
                            }
                        })} className="focus:outline-none border rounded px-2 py-1 border-[#a6a6a6]" type="text" placeholder='Length from 6 to 16' />
                        {errors.login && <p className='text-error'>{errors.login.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Firstname</label>
                        <input {...register('firstname', {
                            required: true,
                            validate: (value) => {
                                if (!/^[A-Za-z]+$/.test(value)) {
                                    return "Use only letters"
                                }
                                return true
                            }
                        })} className="focus:outline-none border rounded px-2 py-1 border-[#a6a6a6]" type="text" />
                        {errors.firstname && <p className='text-error'>{errors.firstname.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Lastname</label>
                        <input {...register('lastname', {
                            required: true,
                            validate: (value) => {
                                if (!/^[A-Za-z]+$/.test(value)) {
                                    return "Use only letters"
                                }
                                return true
                            }
                        })} className="focus:outline-none border rounded px-2 py-1 border-[#a6a6a6]" type="text" />
                        {errors.lastname && <p className='text-error'>{errors.lastname.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Password</label>
                        <input {...register('password', {
                            required: true,
                            validate: (value) => {
                                if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value)) {
                                    return "Use at least 1 upper letter, 1 lower letter, 1 digit, 1 special character and minimum 8 characters"
                                }
                            }
                        })} className="focus:outline-none border rounded px-2 py-1 border-[#a6a6a6]" type="text" />
                        {errors.password && <p className='text-error'>{errors.password.message}</p>}
                    </div>
                    <button className="bg-black-1 rounded text-white py-2">Sign up</button>
                </form>
                <Link className='font-jost' to={ROUTES_PATHS.LOGIN}>
                    Already have account? <span className='text-blue font-bold'>Login</span>
                </Link>
            </div>
        </div>
    )
}

export default SignUp