/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { enableScreens } from 'react-native-screens'
import MainNavigator from './Navigator/Navigation';
import { createStore, combineReducers,applyMiddleware } from 'redux'
import dataReducer from './Strore/Reducers/data.reducers'
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {StatusBar} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
// import background from './Assets/Background3.jpg'
// enableScreens();
const rootReducer = combineReducers({
  data : dataReducer
})
const store = createStore(rootReducer , applyMiddleware(thunk))
const App = () => {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#4f6d7a" />
    <Provider store = { store }>
    <MainNavigator />
    </Provider>
    </>
  );
};



export default App;
