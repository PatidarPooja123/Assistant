import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const AddEmployee = ({navigation}) => {

    const [text, onChangeText] = useState("");
    const [lastName, setLastName] = useState("");
    const [title, setJobTitle] = useState("");
    const [salary, setSalary] = useState("");

    const _onDone =()=>{
        if(text === ""){
            Alert.alert('Alert on !' , "Please Enter First Name" )
        }
        else  if(lastName === ""){
            Alert.alert('Alert on !' , "Please Enter Last Name" )
        }
        else  if(title === ""){
            Alert.alert('Alert on !' , "Please Enter Job title" )
        }
        else  if(salary === ""){
            Alert.alert('Alert on !' , "Please Enter Salary" )
        }
       else {
        navigation.navigate('HomeScreen')
       }
    }
  

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>Enter employee details</Text>
            </View>
            <View style={styles.textInput}>
                <Text style ={styles.firstName}>First Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
            <View style={styles.textInput}>
                <Text style ={styles.firstName}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setLastName}
                    value={lastName}
                />
            </View>
            <View style={styles.textInput}>
                <Text style ={styles.firstName}>Job  Title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setJobTitle}
                    value={title}
                />
            </View>
            <View style={styles.textInput}>
                <Text style ={styles.firstName}> Salary</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setSalary}
                    value={salary}
                    keyboardType = "numeric"
                />
            </View>
            <TouchableOpacity onPress={()=> _onDone()}
            style ={styles.button}>
                <Text style ={{fontSize:16,color:'#fff',fontWeight:'bold'}}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%'
    },
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    text: {
        color: '#32cd32',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        margin: 15,
        borderBottomWidth: 1,
        padding: 10,
        width: WIDTH / 1.2,
        borderColor: '#32cd32'
    },
    textInput: {
       
    },
    firstName:{
        marginStart:20,
        color:'#808080',
        fontWeight:'bold'
    },
    button:{
        height: HEIGHT/18,
        width: WIDTH/1.3,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#32cd32',
        alignSelf:'center',
        marginTop:30
    }
})

export default AddEmployee;