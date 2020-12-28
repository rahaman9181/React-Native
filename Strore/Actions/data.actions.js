import {AsyncStorage} from 'react-native'

export const DATA_LOAD = 'DATA_LOAD';
export const DATA_READY = 'DATA_READY';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT'

export const dataLoad = () =>{
    return{
        type : DATA_LOAD
    }
}

export const userLogout = ( ) =>{
    removeUser()
    return {
        type : USER_LOGOUT,
        }
    }

export const dataReady = (rollno) =>{
    return async dispatch =>{
    //async code 
    try{
    const response = await fetch('https://manatutor.com/index-r.php',{
        // const response = await fetch('https://24e089afc5bd.ngrok.io/ManaApp/index.php',{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body :JSON.stringify({
            rollno : rollno
        })
    })
    console.log(response)
    if(!response.ok){
        throw new Error('Something went wrong')
    }
    const resData = await response.json()
    console.log(resData)
    dispatch({
        type : DATA_READY,
        data : resData
    });
    }catch(err){
        throw err;
    }
    }
}

export const userLogin = ( userRollNo , userPassword ) =>{
    return async dispatch =>{
        //async code
        try{    
        const response = await fetch('https://www.manatutor.com/signin.php',{
            // const response = await fetch('https://24e089afc5bd.ngrok.io/ManaApp/signin.php',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body :JSON.stringify({
                username : userRollNo,
                password : userPassword,
            })
        })
        if(!response.ok){
            throw new Error('Something went wrong')
        }
        console.log(response ,"Response")
        const resjson = await response.json()
        console.log(resjson.data)
        if(!resjson.data['logged'])
        {
            throw new Error('Invalid UserName or Password')
        }
        dispatch({
            type : USER_LOGIN,
            data : resjson.data,
        });
        saveDataTStorage(userRollNo,userPassword)
    }catch(err){
        throw err;
    }
    }       
    }



const saveDataTStorage = (rollno,password) =>{
    AsyncStorage.setItem('userData',JSON.stringify({
        rollno : rollno,
        password : password,
    }))
}

const removeUser = () =>{
    AsyncStorage.removeItem('userData')
}