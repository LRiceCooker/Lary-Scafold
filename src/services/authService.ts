import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session'
import api from '../api'
import ROUTES from '../router/routes'
const authService = {
    login: (setIsConnected : React.Dispatch<React.SetStateAction<boolean>>, token: string) => {
        api.storage.connect(token)
        setIsConnected(true)
    },

    logout: (setIsConnected : React.Dispatch<React.SetStateAction<boolean>>) => {
        api.storage.logout()
        setIsConnected(false)
    },

    checkIfConnected: async (isConnected: boolean, setIsConnected : React.Dispatch<React.SetStateAction<boolean>>, loginCallback : (options?: AuthRequestPromptOptions) => Promise<AuthSessionResult>, navigate: (route : any) => any) => {
        console.log(! await api.storage.isConnected())
        if(!isConnected) loginCallback()
        else {
            setIsConnected(true)
            navigate(ROUTES.HOME_SCREEN.NAME)
        }
    }
}

export default authService