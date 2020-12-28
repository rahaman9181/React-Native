import React , { useState } from 'react';
import {Text,View,StyleSheet,ScrollView,Alert} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import NetInfo from '@react-native-community/netinfo';
import { useSelector } from 'react-redux';

const MainScreen = () =>{
//     const netStatus =  NetInfo.fetch()  
// if (netStatus === 'none' || netStatus === 'NONE') {
//     Alert.alert("Internet not connected.!!!")
//     return []
// }else{ 
//     Alert.alert("Internet connected.!!! ")
// }
    const [rollNo, setRollNo] = useState(useSelector(state => state.data.rollno))
    const [name, setName] = useState(useSelector(state => state.data.firstname))
    const [logged,setLogged] = useState(useSelector(state => state.data.logged))
    const lastName = useSelector(state => state.data.lastname)
    const mobile = useSelector(state => state.data.mobile)
    const email = useSelector(state => state.data.email)
    return (
        <ScrollView>
        <Col style = {{ paddingVertical : 22, }}>
        <Row style={{paddingVertical:12}}>
        <Row style={styles.row}>
            <Col style={styles.col}>
            <Text style={styles.text}>Roll No</Text>
            </Col>
            <Col style={styles.col}>
            <Text style={styles.text}>
            {rollNo}
            </Text>
            </Col>
        </Row>
        </Row>
        <Row style={{paddingVertical:12}}>
        <Row style={styles.row}>
            <Col style={styles.col}>
            <Text style={styles.text}>First Name</Text>
            </Col>
            <Col style={styles.col}>
            <Text style={styles.text}>
            {name}
            </Text>
            </Col>
        </Row>
        </Row>
        <Row style={{paddingVertical:12}}>
        <Row style={styles.row}>
            <Col style={styles.col}>
            <Text style={styles.text}>Last Name</Text>
            </Col>
            <Col style={styles.col}>
            <Text style={styles.text}>
            {lastName}
            </Text>
            </Col>
        </Row>
        </Row>
        <Row style={{paddingVertical:12}}>
        <Row style={styles.row}>
            <Col style={styles.col}>
            <Text style={styles.text}>Email</Text>
            </Col>
            <Col style={styles.col}>
            <Text style={styles.text}>
            {email}
            </Text>
            </Col>
        </Row>
        </Row>
        <Row style={{paddingVertical:12}}>
        <Row style={styles.row}>
            <Col style={styles.col}>
            <Text style={styles.text}>Mobile No</Text>
            </Col>
            <Col style={styles.col} >
            <Text style={styles.text}>
            {mobile}
            </Text>
            </Col>
        </Row>
        </Row>
        </Col>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center', // if you want to fill rows left to right,
          padding : 20,
          borderWidth : 1,

        },
        item: {
          width: '50%', // is 50% of container width
          alignItems : 'flex-start',
        //   paddingVertical : 10,
        //   borderWidth : 1,
        },
        text : {
            // fontSize : 18,
            fontSize : RFPercentage(3),
            fontWeight:'bold'
        },
        row : {
            borderRadius:30,
            backgroundColor:'#fff',
        },
        col : {
            paddingVertical:20,
            paddingHorizontal:18
        },
        view : {
            paddingVertical:20,
            paddingHorizontal:18
        }
})
    

export default MainScreen;