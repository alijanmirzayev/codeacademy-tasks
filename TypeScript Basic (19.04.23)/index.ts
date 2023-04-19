import axios, { Axios, AxiosResponse } from "axios"

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

type Posts = {
    userId: number,
    id: number,
    title: string,
    body: string
}

type Albums = {
    userId: number,
    id: number,
    title: string,
}

type Users = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: string,
    website: string,
    company: Company
}

type UserAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: UserAddressGeo
}

type UserAddressGeo = {
    lat: string,
    lng: string
}

type Company = {
    name: string,
    catchPhrase: string,
    bs: string
}

async function getAllPostsById(userId: number): Promise<Posts[]> {
    const userData: Users = (await instance.get(`users/${userId}`)).data
    const postsData: Posts[] = (await instance.get(`posts`)).data
    const allPostsByUserId: Posts[] =  postsData.filter(posts => posts.userId == userData.id)
    return allPostsByUserId
}

async function getAllAlbumsById(userId: number): Promise<Albums[]> {
    const userData: Users = (await instance.get(`users/${userId}`)).data
    const albumsData: Albums[] = (await instance.get(`albums`)).data
    const allAlbumssByUserId: Albums[] =  albumsData.filter(albums => albums.userId == userData.id)
    return allAlbumssByUserId
}

async function Main() {
    await getAllPostsById(1)
    await getAllAlbumsById(1)
}
Main()