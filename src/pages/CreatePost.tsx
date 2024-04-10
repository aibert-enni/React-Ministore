import { ChangeEvent, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { appApi } from "../services/ApiService";
import { skipToken } from "@reduxjs/toolkit/query";
import { Post } from "../models/apiBlogModels";
import { useAppSelector } from "../hooks/redux";

type FormFields = {
    title: string,
    coverLink: string
}

const CreatePost = () => {
    const currentDate = new Date()

    const [postContent, setPostContent] = useState<string>('')

    const [category, setCategory] = useState<string>('')

    const [error, setError] = useState<string>('')

    const user = useAppSelector(state => state.user)

    const [chosenCategories, setChosenCategories] = useState<string[]>([])

    const { data: categories } = appApi.useFetchPostCategoriesQuery(category ? category : skipToken)

    const [createPost] = appApi.useCreatePostMutation()

    const { handleSubmit, register } = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(localStorage.getItem('user'))
        if (!postContent || !user.user?.id || chosenCategories.length <= 0 || !data.coverLink || !data.title) {
            setError('All fields need to be is filled!')
            return
        }
        const post: Post = {
            author_id: user.user.id,
            title: data.title,
            coverLink: data.coverLink,
            content: postContent,
            categories: chosenCategories,
            date: currentDate.toDateString()
        }
        createPost(post)
    }

    const onChange = (value: ChangeEvent<HTMLInputElement>) => {
        setCategory(value.target.value)
    }

    const categoryOnClick = (value: string) => {
        if (!chosenCategories.includes(value)) setChosenCategories([...chosenCategories, value])
        setCategory('')
    }

    const deleteCategoryOnClick = (value: string) => {
        setChosenCategories(chosenCategories.filter(category => category !== value))
    }

    return (
        <div className="container-lg my-28">
            <p className="text-center font-medium text-3xl mb-4">Post publishing</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex flex-col items-center">
                    <input {...register('title')} className="form-input" type="text" placeholder="Title" />
                </div>
                <div className="flex flex-col">
                    <input {...register('coverLink')} className="form-input" type="text" placeholder="Cover image link" />
                </div>
                <ReactQuill theme="snow" value={postContent} onChange={setPostContent} />
                <div>
                    <div className="flex gap-3 items-center">
                        <p className="">Categories:</p>
                        {chosenCategories.length > 0 && chosenCategories.map(value => <p onClick={() => deleteCategoryOnClick(value)} className="tag">{value}</p>)}
                    </div>
                    <input value={category} onChange={(e) => onChange(e)} className="form-input mb-2" type="text" placeholder="Tags" />
                    <div className="absolute">
                        {category && categories && categories.map(value => <p onClick={() => categoryOnClick(value.name)} className="tag">{value.name}</p>)}
                    </div>
                </div>
                {error && <p className="text-error text-2xl">{error}</p>}
                <button className="button" type="submit">
                    Publish
                </button>
            </form>
        </div>
    )
}

export default CreatePost