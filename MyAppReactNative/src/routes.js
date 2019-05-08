import { createStackNavigator } from 'react-navigation'; // navagacao por botao
import Main from './pages/main'
import Product from './pages/product'

export default createStackNavigator({
    Main,
    Product
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#da552f",
            },
            headerTitleStyle: {
                alignSelf: "center",
                textAlign: "center",
                justifyContent: "center",
                flex: 1,
            },
            headerTintColor: "#fff",
        }
    })

