import config from '../../app.json'
import ROUTES from './routes'

const useUrlResolver = () => {
    
    const screenName = Object.values(ROUTES).map(routeObject => routeObject.NAME)
    const screens = {}

    screenName.forEach(name => {
        screens[name] = name
    })

    const linking = {
        prefixes: [`${config.expo.name}://`, `https://${config.expo.name}.com`],
        config: {
          screens: screens
        }
    };

    return linking
}

export default useUrlResolver