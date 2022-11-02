import storageInstance from "./storageInstance";

const storageAPI =  {
    connect: (token: string) => { // exemple
        storageInstance.set('token', token)
    },
}

export default storageAPI