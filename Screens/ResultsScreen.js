import React,{useState,useEffect, useCallback} from 'react';
import {Text,View,StyleSheet,ScrollView,Button,RefreshControl,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Display from '../Components/Display';
import { useSelector,useDispatch } from 'react-redux';
import {dataLoad,dataReady} from '../Strore/Actions/data.actions'
import dataReducer from '../Strore/Reducers/data.reducers';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const ResultsScreen = (props) =>{
    const [isLoading,setIsLoading] = useState(false)
    const [error , setError] = useState();
    const [isRefreshing , setIsRefreshing] = useState(false);
    const rollno = useSelector(state => state.data.rollno)
    const dataStore = useSelector(state => state.data.sems)
    const dispatch = useDispatch();
    const loadData = useCallback(async () =>{
        setIsRefreshing(true);
        setError(null)
        setIsLoading(true)
        try{
        await dispatch(dataReady(rollno))
        }catch(err){
            console.log(err)
            setError(err.message)
        }
        setIsRefreshing(false);
        setIsLoading(false)
    },[dispatch,setError,setIsLoading] ) 


    useEffect( () =>{
        const willFocus  = props.navigation.addListener(
            'willFocus',
            loadData
        );
        return () =>{
            willFocus.remove()
        }
    },[loadData])


    useEffect(() => {
        loadData();
      }, [dispatch,setIsLoading,loadData])
    
    if(error){
        return (
        <View style={{flex:1,alignItems:'center',alignContent:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'bold'}}>An error occured</Text>
            <Button title = "Try Again" onPress={loadData} color="blue"/>
        </View>)
    }
    if(isLoading || !dataStore){
        return (
        <View style={{flex:1,alignItems:'center',paddingVertical:'60%'}}>
        <ActivityIndicator size='large' color="green"  />
        </View>
        );
    }
    else
    {
    return (
        <ScrollView 
        refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={loadData} />
            }
        >
           <Grid>
           <Row style={{paddingVertical : 10}}>
            <Col>
            <View style={ { alignItems : 'center' } }>
            <Text style={{ fontWeight : 'bold',fontSize:RFPercentage(2.5)}} >
                Subject Name
            </Text>
            </View>
            </Col>
            <Col>
            <View style={ { alignItems : 'center' } }>
            <Text style={{ fontWeight : 'bold',fontSize:RFPercentage(2.5)}} >
                Grade
            </Text>
            </View>
            </Col>
            </Row>
    
{/* important */}
{/*     
     {Object.entries(one).map(item=>
         
     <Display item = {item} />
     )} */}

    
     {
     Object.entries(dataStore).map(item=>
    Object.entries(item[1]).map(([key,value])=>
    <Display sem={key} item={value}/>
    )
     )}

            </Grid>
        </ScrollView>
    );
    }
};



const styles = StyleSheet.create({
    contain : {
        flex : 1,
        justifyContent : 'center',
    },
    text : {
        fontSize : 22,
    }
});


export default ResultsScreen;