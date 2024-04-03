export interface IUser {
    id?: string,
    login: string,
    firstname: string,
    lastname: string,
    password: string
}

export interface SignFields {
    login: string,
    password: string
}