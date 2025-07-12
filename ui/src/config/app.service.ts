import { Permission, Query, Role } from "appwrite";
import { APPWRITE_ARTICLES, APPWRITE_DB, APPWRITE_STORAGE } from "../constants";
import { account, database, ID, storage } from "./appwrite";


export const singUp = (email: string, password: string) => {
    return account.create(ID.unique(), email, password);
}

export const verificationLink = () => {
    return account.createVerification('http://localhost:5173/verify');
}

export const login = (email: string, password: string) => {
    return account.createEmailPasswordSession(email, password);
}

export const accountDetails = () => {
    return account.get();
}

export const verifyAccount = (userId: string, secret: string) => {
    return account.updateVerification(userId, secret);
}

export const createBlog = async (payload: any) => {
    const user = await account.get();
    return database.createDocument(APPWRITE_DB, APPWRITE_ARTICLES, ID.unique(), { ...payload, user_id: user.$id }, [
        Permission.read(Role.user(user.$id)),
        Permission.update(Role.user(user.$id))
    ]);
}
export const getBlogs=async()=>{
    return database.listDocuments(APPWRITE_DB, APPWRITE_ARTICLES,[Query.orderDesc('$createdAt'),Query.limit(10),Query.offset(0)]);
}

export const uploadFile=async(file:any,id:string)=>{
    return  storage.createFile(
    APPWRITE_STORAGE,
    id,
    file
);
}

export const viewFile=(bucket_id:string,file_id:string)=>{
    return storage.getFileView(bucket_id, file_id)
}