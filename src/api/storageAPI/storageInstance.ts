import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
    get : async (key : string) : Promise<any> => {
        return JSON.parse(await AsyncStorage.getItem(key))
    }, 

    set :  async (key : string, value: any) => {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    }, 

    delete : async (key: string) => {
        await AsyncStorage.removeItem(key)
    }
}