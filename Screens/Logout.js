import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux'
import {userLogout} from '../Strore/Actions/data.actions'
const Logout = ( props) =>{
    const dispatch = useDispatch()
    const logout = async ( ) =>{
        try{
         dispatch(userLogout())
         console.log("Log")
         console.log(props.navigation.navigate('Auth'))
         props.navigation.navigate('Auth')
        }catch(err){
            console.log(err.message,"err")
        }
    }
    //  useEffect(()=>{
        logout()
    // },[dispatch])
    
    return (<>

            </>);
}

export default Logout