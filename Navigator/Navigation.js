import React from 'react'
import { Platform,Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createBottomTabNavigator  } from 'react-navigation-tabs';
import Icon  from 'react-native-vector-icons/FontAwesome';
import MainScreen from '../Screens/MainScreen';
import ResultsScreen from '../Screens/ResultsScreen';
import AuthScreen from '../Screens/AuthScreen'
import StartUpScreen from '../Screens/StartUpScreen'
import Logout from '../Screens/Logout';
const navStyle = {
    headerStyle : {
        backgroundColor : '#0976eb'
    },
    headerTintColor : '#fff'
}

const ManaNavigator = createStackNavigator({
    Home : {
        screen : MainScreen,
        navigationOptions: navStyle,
    }

});

const ResultsNavigator = createStackNavigator({
    Results : {
        screen : ResultsScreen,
        navigationOptions: navStyle,
    }

});

// const LogoutNavigator = createStackNavigator({
//     Results : {
//         screen : Logout,
//         navigationOptions: navStyle,
//     }

// });


const MainNavigator = createBottomTabNavigator({
    Meals :{screen: ManaNavigator,navigationOptions :{
        fontSize : 33,
        // tabBarLabel : <Text style ={{ fontSize : 15 }} >Home</Text> ,
        tabBarLabel : 'Home',
        tabBarIcon : (tabInfo) => {
            return <Icon   name="user-circle" size={25} color = {tabInfo.tintColor} />;
        },
        },
    },
    Results : {screen: ResultsNavigator,
        navigationOptions :{
            tabBarLabel : 'Results' ,
            tabBarIcon : (tabInfo) => {
                return <Icon  name="file" size={25} color = {tabInfo.tintColor} />;
            }
        }
    },
    Logout : {screen: Logout,
        navigationOptions :{
            tabBarLabel : 'Logout' ,
            tabBarIcon : (tabInfo) => {
                return <Icon  name="sign-out" size={25} color = {tabInfo.tintColor}  />;
            }
        }
    }

},
{
tabBarOptions : {
    activeTintColor : '#0976eb',
    style: {
        // backgroundColor: '#345eeb',
      }, 
      labelStyle: {
        fontSize: 13,
      },   
    }
}
);

const RealMainNavigator = createSwitchNavigator({
    StartUp : StartUpScreen,
    Auth : AuthScreen,
    RealApp : MainNavigator
})

export default createAppContainer(RealMainNavigator);