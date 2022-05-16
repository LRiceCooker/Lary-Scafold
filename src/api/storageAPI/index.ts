import storageInstance from "./storageInstance";

export default {
    connect: (token: string) => {
        storageInstance.set('token', token)
    },
}