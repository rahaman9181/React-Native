import React, { useState, useEffect } from 'react';
import {ImageBackground,ActivityIndicator,Image,View,Alert,TextInput,Text,ScrollView,Button,TouchableOpacity} from 'react-native';
import { Row,Grid,Col } from 'react-native-easy-grid';
import { useDispatch,useSelector } from 'react-redux';
import {userLogin} from '../Strore/Actions/data.actions'
import background from '../Assets/Background3.jpg'
import logo from '../Assets/logo2.png'
import Icon from 'react-native-vector-icons/FontAwesome'

const AuthScreen = (props) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [rollNo , setRollNo] = useState()
    const [password , setPassword] = useState()
    const [error, setError] = useState();
    const logged = useSelector(state => state.data.logged)
    const [passwordVisible,setPasswordVisibile] = useState(true)
    const [passwordIcon,setPasswordIcon] = useState('eye')
    useEffect(() => {
        if (error) {
          Alert.alert('An Error Occurred!', error, [{ text: 'Ok' }]);
        }
      }, [error]);
    useEffect(() =>{
        if(logged){
            props.navigation.navigate('RealApp')
            }
        },[logged])
    
    const dispatch = useDispatch()
    const loginFunc = async () =>{
            try{
            setError(null);
            setIsLoading(true)
            if(rollNo && password){
            await dispatch(userLogin(rollNo.toUpperCase(),  password))
            }
            else{
                setIsLoading(false)
                Alert.alert("Enter RollNo and Password!!")
            }
            }
            catch(err){
                setIsLoading(false)
                setError(err.message)
                
                console.log(err,"errror")
            }
            
    }
    useEffect(() =>{
        loginFunc
    },[loginFunc])
    const showPassword = ( ) =>{
        setPasswordVisibile(!passwordVisible)
        if(passwordIcon === 'eye'){
            setPasswordIcon('eye-slash')
        }
        else{
            setPasswordIcon('eye')
        }
    }
    return (
        <ImageBackground source={background} style={{width: "100%", height: "100%",overflow:'hidden'}}>
        <ScrollView>
        <Grid>
        <Row style={{justifyContent:'center',padding:20}}>
        <Image source={logo}/>
        </Row>
        <Col  style={{padding:30}}>
        <Row style={{backgroundColor:'#50befa',borderWidth:1,borderColor:'white',borderRadius:25,paddingLeft:20,}}>
            <Col size={10} style={{padding:"4%"}} >
            <Icon name="user" size={20} color="#fff" />
            </Col>
            <Col size={90}>
            <TextInput style={{color:'#fff',fontWeight:'500',fontSize:18}} selectionColor="#fff"  value={rollNo} placeholderTextColor="#fff"  placeholder="Your RollNo" onChangeText = { text => setRollNo(text) } autoCapitalize="characters" />
            </Col>
        </Row>
        <Row style={{paddingBottom:20}}></Row>
        <Row style={{backgroundColor:'#50befa',borderWidth:1,borderRadius:25,borderColor:'white',paddingLeft:20}}>
        <Col size={10} style={{padding:"4.2%"}} >
        <Icon name="lock" size={20} color="#fff" />
        </Col>
        <Col size={80}>
        <TextInput style={{color:'#fff',fontWeight:'500',fontSize:18}} value={password} placeholderTextColor="white" placeholder="Your Password" onChangeText = { text => setPassword(text) } secureTextEntry={passwordVisible}  />
        </Col>
        <Col size={10} style={{padding:"4.2%"}} >
        <TouchableOpacity onPress={showPassword}  >
        <Icon name={passwordIcon} size={20} color="#fff" />
        </TouchableOpacity>
        </Col>
        </Row>
        <Row style={{paddingBottom:20}}></Row>
        {/* <Row style={{borderWidth:1,borderRadius:25,paddingLeft:20}}> */}
            {/* <Button title ="To Main App" onPress = { () => props.navigation.navigate('RealApp')} /> */}
            {/* <Button title ="Login" onPress = {loginFunc} /> */}
              {isLoading ? (
                <ActivityIndicator size="small" color="blue" />
              ) : (
                  <TouchableOpacity activeOpacity={0.8} onPress={loginFunc}  >
                    <Row style={{backgroundColor:'#50befa',borderWidth:1,borderRadius:25,borderColor:'white',justifyContent:'center'}} >
                        <Text style={{padding:10,fontWeight:'500',fontSize:20,color:'#fff'}}> Login </Text>
                    </Row>
                  </TouchableOpacity>
                // <Button
                //   title="Login"
                //   onPress={loginFunc}
                // />
              )}
        {/* </Row> */}
        {/* {logged ? (
             props.navigation.navigate('RealApp')
           ): null}  */}
        </Col>
        </Grid>
        </ScrollView>
        </ImageBackground>
    );
}

export default AuthScreen;