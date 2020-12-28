import React,{useEffect} from 'react'
import {StatusBar,ImageBackground,ActivityIndicator,View,AsyncStorage} from 'react-native'
import { useDispatch,useSelector } from 'react-redux';
import background from '../Assets/Background3.jpg'
import {userLogin} from '../Strore/Actions/data.actions'
const StartUpScreen = (props) =>{
    const logged = useSelector(state => state.data.logged)
    const dispatch = useDispatch()
    useEffect(() =>{
        if(logged){
            props.navigation.navigate('RealApp')
            }
        },[logged])

    const loginFunc = async (rollNo,password) =>{
        try{
        // setError(null);
        // setIsLoading(true)
        if(rollNo && password){
        await dispatch(userLogin(rollNo.toUpperCase(),  password))
        }
        else{
            // setIsLoading(false)
            Alert.alert("Enter RollNo and Password!!")
        }
        }
        catch(err){
            // setIsLoading(false)
            // setError(err.message)
            
            console.log(err,"errror")
        }
        
}
// useEffect(() =>{
//     loginFunc()
// },[loginFunc])

    useEffect(()=>{
        const tryLogin = async ()=>{
            const userData = await AsyncStorage.getItem('userData');
            console.log(userData,"UserData")
            if(!userData){
                props.navigation.navigate('Auth');
                return;
            }
            else if(userData){
                const transfrmedData = JSON.parse(userData)
                const { rollno,password } = transfrmedData
                if(rollno && password){
                    loginFunc(rollno,password);
                }
            }
        };
        

        tryLogin()
    },[]);

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="blue"/>
        </View>
        //     {/* <StatusBar barStyle="dark-content" backgroundColor="#4f6d7a" /> */}
        // {/* <ImageBackground source={props.background} style={{width: "100%", height: "100%",overflow:'hidden'}}> */}

        // {/* </ImageBackground> */}
    
    )
}

export default StartUpScreen;