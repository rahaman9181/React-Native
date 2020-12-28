import React from 'react';
import {View,Text} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import DispalayResults from './DisplayResults'
const Display = (props) =>{
    // console.log(props.item,"item Display");
        if(props.item.length!==0){
        return(
        <>
        <Row style ={{paddingVertical : 10,justifyContent:'center'}}>
        <Text style={{fontWeight:'bold'}} >{props.sem}</Text>
        </Row>
        <DispalayResults data = {props.item} />
        </>
        )
        }
        else{
            return null;
        }
}

export default Display;