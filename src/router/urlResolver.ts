import {Platform} from 'react-native'
import * as Linking from 'expo-linking';
import ROUTES from './routes';
import getBaseUrl from "get-base-url"

const launchUrlResolver = async (setView: React.Dispatch<React.SetStateAction<string>>, view: string, navigate: (route: any) => void, redirectionListener:  (callback: (event: any)=>void)=>void) => {
    if(Platform.OS === 'web'){
        Linking.addEventListener('url', event => {
            Object.values(ROUTES).forEach(route => {
                if((new URL(event.url)).pathname === route.NAME && route.NAME !== view) {
                    navigate(route.NAME)
                }
            })
        })
        redirectionListener(async (event) => {
            if(event.data?.state){
                const url = await Linking.getInitialURL()
                const view = event.data?.state.routeNames[event.data?.state.index]
                if((new URL(url)).pathname !== view){
                    setView(view)
                    Linking.openURL(`${(new URL(url)).protocol}//${getBaseUrl(url)}${view}`)
                }
            }
        })

    }
}

export default launchUrlResolver