import { SubmitHandler, useForm } from "react-hook-form"
import { useAppSelector } from "../hooks/redux"
import { productApi } from "../services/ProductService"
import { IOrder } from "../models/apiModels"
import { useEffect } from "react"

export interface IOrderFormFields {
    firstname: string
    lastname: string
    company: string
    coutry: string
    streetAddress: string
    city: string
    state: string
    zipCode: string
    phone: string
    email: string
    orderNotes: string
    payment: string
}

function letterValidator(value: string): string | boolean {
    if (!/^[A-Za-z]+$/.test(value)) {
        return "use only letters"
    }
    return true
}

const Checkout = () => {
    const cartProducts = useAppSelector(state => state.cart)

    const [updateOrder] = productApi.useUpdateOrderMutation()

    const { register, handleSubmit, formState: { errors } } = useForm<IOrderFormFields>({
        defaultValues: {
            payment: 'direct bank transfer'
        }
    })

    const onSubmit: SubmitHandler<IOrderFormFields> = (data) => {
        if (cartProducts.productAmount <= 0) return
        const order: IOrder = { ...data, order: cartProducts }
        updateOrder(order)
    }

    return (
        <div className="container-lg my-28">
            <div>
                <form className="flex flex-col gap-28" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 *:text-[#3A3A3A] gap-5">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col">
                                <p className="uppercase text-[#272727] text-2xl mb-7">Billing details</p>
                                <label className="font-light">First name *</label>
                                <input className="form-input" {...register("firstname", {
                                    required: "required firstname",
                                    validate: letterValidator
                                })} type="text" />
                                {errors.firstname && <p className="text-[#72AEC8]">{errors.firstname.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="font-light">Last name *</label>
                                <input className="form-input" {...register("lastname", {
                                    required: true,
                                    validate: letterValidator
                                })} type="text" />
                                {errors.lastname && <p className="text-[#72AEC8]">{errors.lastname.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="font-light">Company name (optional)</label>
                                <input className="form-input" {...register("company")} type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-light">Country/Region *</label>
                                <select {...register('coutry', {
                                    required: true
                                })} value="United States(US)" className="p-2 form-input">
                                    <option value="US">United States(US)</option>
                                    <option value="RU">Russia</option>
                                    <option value="KZ">Kazakhstan</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-light">Street address *</label>
                                <input className="form-input" {...register("streetAddress", {
                                    required: true
                                })} type="text" />
                                {errors.streetAddress && <p className="text-[#72AEC8]">{errors.streetAddress.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="font-light">Town/City *</label>
                                <input className="form-input" {...register("city", {
                                    required: true,
                                    validate: letterValidator
                                })} type="text" />
                                {errors.city && <p className="text-[#72AEC8]">{errors.city.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="font-light">State *</label>
                                <input className="form-input" {...register("state", {
                                    required: true,
                                    validate: letterValidator
                                })} type="text" />
                                {errors.state && <p className="text-[#72AEC8]">{errors.state.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="font-light">ZIP code *</label>
                                <input className="form-input" {...register("zipCode", {
                                    required: true,
                                    valueAsNumber: true
                                })} type="text" />
                                {errors.zipCode && <p className="text-[#72AEC8]">{errors.zipCode.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="font-light">Phone *</label>
                                <input className="form-input" {...register("phone", {
                                    required: true,
                                    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
                                })} type="tel" />
                                {errors.phone && <p className="text-[#72AEC8]">{errors.phone.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="font-light">Email address *</label>
                                <input className="form-input" {...register("email", {
                                    required: true,
                                    validate: (value) => {
                                        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
                                            return "invalid email"
                                        }
                                        return true
                                    }
                                })} type="email" />
                                {errors.email && <p className="text-[#72AEC8]">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="uppercase text-[#272727] text-2xl mb-7">Additional Information</p>
                            <div className="flex flex-col">
                                <label className="font-light">Order notes(optional)</label>
                                <input {...register('orderNotes')} className="form-input" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7">
                        <p className="uppercase text-2xl">cart totals</p>
                        <div className="grid text-xl grid-cols-2 py-5 border-y border-[#CDCDCD]">
                            <p className="">Total</p>
                            <p className="text-[#72AEC8]">${cartProducts.totalPrice}.00</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 font-light text-[#3A3A3A]">
                                <input {...register('payment')} className="border-[#D3D3D3]" type="radio" name="payment" id="bank" value="direct bank transfer" />
                                <label htmlFor="bank">Direct bank transfer</label>
                            </div>
                            <div className="flex items-center gap-3 font-light text-[#3A3A3A]">
                                <input {...register('payment')} type="radio" name="payment" id="check" value="check payments" />
                                <label htmlFor="check">Check payments</label>
                            </div>
                            <div className="flex items-center gap-3 font-light text-[#3A3A3A]">
                                <input {...register('payment')} type="radio" name="payment" id="cash" value="cash on delivery" />
                                <label htmlFor="cash">Cash on delivery</label>
                            </div>
                            <div className="flex items-center gap-3 font-light text-[#3A3A3A]">
                                <input {...register('payment')} type="radio" name="payment" id="paypal" value="paypal" />
                                <label htmlFor="paypal">PayPal</label>
                            </div>
                        </div>
                        <button className="button" type="submit">Place on order</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout