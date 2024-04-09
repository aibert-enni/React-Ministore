export interface PostCard {
    title: string;
    date: string;
    category: string;
    img_url: string;
    postId: string;
}

export interface PostForm {
    id?: string
    title: string
    coverLink: string
    content: string
    category: string
    date: string
}

export interface PostCategories {
    name: string
}

export interface Post {
    id?: string
    author_id: string
    title: string
    coverLink: string
    content: string
    categories: string[]
    date: string
}