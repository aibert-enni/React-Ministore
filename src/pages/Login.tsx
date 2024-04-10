import { SubmitHandler, useForm } from 'react-hook-form'
import logo from '../assets/logo.svg'
import { useState } from 'react'
import { appApi } from '../services/ApiService'
import { IUser } from '../models/apiUserModels'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES_PATHS } from '../router/types'
import { useAppDispatch } from '../hooks/redux'
import { initUser } from '../store/slices/UserSlice'

type FormFields = {
    login: string
    password: string
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>()

    const dispatch = useAppDispatch()

    const [error, setError] = useState<string>()

    const [getUser] = appApi.useLazyFetchCheckUserQuery()

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const user: IUser[] = await getUser(data as IUser).unwrap()
        if (user && user.length > 0) {
            dispatch(initUser(user[0]))
            navigate(ROUTES_PATHS.HOME)
        } else {
            setError('Login or password incorrect')
        }
    }

    return (
        <div className="container-large flex flex-col items-center">
            <div className='py-5'>
                <img className='w-32' src={logo} alt="" />
            </div>
            <div className="p-5 border rounded border-[#D9D9D9]">
                <p className="text-3xl font-medium">Login</p>
                {error && <p className='text-error'>{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)} className="my-5 w-[312px] flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Login</label>
                        <input {...register('login', {
                            required: true,
                            validate: async (value) => {
                                if (!/^[0-9A-Za-z]{6,16}$/.test(value)) {
                                    return "Invalid login"
                                }
                                return true
                            }
                        })} className="focus:outline-none border rounded px-2 py-1 border-[#a6a6a6]" type="text" />
                        {errors.login && <p className='text-error'>{errors.login.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold">Password</label>
                        <input {...register('password', {
                            required: true
                        })} className="focus:outline-none border rounded px-2 py-1 border-[#a6a6a6]" type="text" />
                        {errors.password && <p className='text-error'>{errors.password.message}</p>}
                    </div>
                    <button className="bg-black-1 rounded text-white py-2">Login</button>
                </form>
                <Link to={ROUTES_PATHS.SIGN_UP}>
                    sign up
                </Link>
            </div>
        </div>
    )
}

export default Login