import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const DisplayResults = (props) =>{

    const gradestoInt = (grade) =>{
        if(grade === 'O')
        {
            return parseInt(10);
        }
        if(grade === 'S')
        {
            return parseInt(9);
        }
        if(grade === 'A')
        {
            return parseInt(8);
        }
        if(grade === 'B')
        {
            return parseInt(7);
        }
        if(grade === 'C')
        {
            return parseInt(6);
        }
        if(grade === 'D')
        {
            return parseInt(5);
        }
        if(grade === 'F')
        {
            return parseInt(0);
        }

    }

    var count = 0
    // console.log(count = count+1,"Data")
    var credits = props.data.map(data => parseInt(data.credits))
    var grades = props.data.map(data => 
         gradestoInt(data.grade))
    // console.log(credits);
    // console.log(grades);
    var tot = 0
    var numerator = 0
    for(var i=0;i<credits.length;i++){
        if(parseInt(credits[i]))
		{
            tot += parseInt(credits[i]);
			numerator+=  parseInt(credits[i]) * parseInt(grades[i]);
    }}
    const sgpa = (numerator/tot).toFixed(2)
    
    return <>
    {props.data.map(data=>
    <TouchableOpacity key={data.subjectcode} activeOpacity={0.6}>
    <Row style={ {paddingVertical:5,paddingHorizontal:5} } >
    <Row style={{ backgroundColor:data.grade==='F'?'red':'#fff'
         ,paddingVertical : 10 ,borderRadius:18}}>
    <Col>
    <View style={ { alignItems : 'flex-start',paddingHorizontal:10 } }>
    <Text style={{fontWeight:'500',fontSize:RFPercentage(2.5)}} >
    {data.subjectname}
    </Text>
    </View>
    </Col>
    <Col>
    <View style={ { alignItems : 'center' } }>
    <Text style={{fontWeight:'500',fontSize:RFPercentage(2.5)}} >
        {data.grade}
    </Text>
    </View>
    </Col>
    </Row>
    </Row>
    </TouchableOpacity>
    )
    }
    <Row style={{paddingTop:15,justifyContent:'center'}}>
    <Text style={{fontSize:RFPercentage(3)}}>SGPA - {sgpa}</Text>
    </Row>
    </>
}

export default DisplayResults;