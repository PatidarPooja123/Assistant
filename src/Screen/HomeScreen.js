import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from "react-native";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.view}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image style={styles.image}
                            source={require('../Image/download.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.box}>
                <View style={styles.lp}>
                    <Text style ={{fontSize:18}}>LP</Text>
                </View>
                <View style ={{flexDirection:'column',padding:20, marginLeft:-15}}>
                 <Text style ={styles.textttt}>Louis Patric</Text>
                 <Text>manager</Text>
                </View>
                <View style ={{padding:20,marginStart:70}}>
                    <Image style ={{height:30,width:30}}
                    source={require('../Image/yellostar.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <View style={styles.lp}>
                    <Text style ={{fontSize:18}}>LP</Text>
                </View>
                <View style ={{flexDirection:'column',padding:20, marginLeft:-15}}>
                 <Text style ={styles.textttt}>Louis Patric</Text>
                 <Text>manager</Text>
                </View>
                <View style ={{padding:20,marginStart:70}}>
                    <Image style ={{height:30,width:30}}
                    source={require('../Image/star.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <View style={styles.lp}>
                    <Text style ={{fontSize:18}}>LP</Text>
                </View>
                <View style ={{flexDirection:'column',padding:20, marginLeft:-15}}>
                 <Text style ={styles.textttt}>Louis Patric</Text>
                 <Text>manager</Text>
                </View>
                <View style ={{padding:20,marginStart:70}}>
                    <Image style ={{height:30,width:30}}
                    source={require('../Image/star.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <View style={styles.lp}>
                    <Text style ={{fontSize:18}}>LP</Text>
                </View>
                <View style ={{flexDirection:'column',padding:20, marginLeft:-15}}>
                 <Text style ={styles.textttt}>Louis Patric</Text>
                 <Text>manager</Text>
                </View>
                <View style ={{padding:20,marginStart:70}}>
                    <Image style ={{height:30,width:30}}
                    source={require('../Image/yellostar.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <View style={styles.lp}>
                    <Text style ={{fontSize:18}}>LP</Text>
                </View>
                <View style ={{flexDirection:'column',padding:20, marginLeft:-15}}>
                 <Text style ={styles.textttt}>Louis Patric</Text>
                 <Text>manager</Text>
                </View>
                <View style ={{padding:20,marginStart:70}}>
                    <Image style ={{height:30,width:30}}
                    source={require('../Image/star.png')}/>
                </View>
            </TouchableOpacity>
            <View style={styles.box}>
                <View style={styles.lp}>
                    <Text style ={{fontSize:18}}>LP</Text>
                </View>
                <View style ={{flexDirection:'column',padding:20, marginLeft:-15}}>
                 <Text style ={styles.textttt}>Louis Patric</Text>
                 <Text>manager</Text>
                </View>
                <View style ={{padding:20,marginStart:70}}>
                    <Image style ={{height:30,width:30}}
                    source={require('../Image/star.png')}/>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.lp}>
                    <Text style ={{fontSize:18}}>LP</Text>
                </View>
                <View style ={{flexDirection:'column',padding:20, marginLeft:-15}}>
                 <Text style ={styles.textttt}>Louis Patric</Text>
                 <Text>manager</Text>
                </View>
                <View style ={{padding:20,marginStart:70}}>
                    <Image style ={{height:30,width:30}}
                    source={require('../Image/star.png')}/>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: HEIGHT / 8,
        backgroundColor: '#32cd32',
        justifyContent: 'center',
    },
    image: {
        height: 30,
        width: 30
    },
    view: {
        marginStart: 20
    },
    box: {
        height: HEIGHT / 10,
        backgroundColor: '#fff',
        width: WIDTH / 1.1,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row'
    },
    lp:{
        height: 50,
         width: 50,
          borderRadius: 30,
           backgroundColor: '#32cd32' ,
           margin:15,
           justifyContent:'center',
           alignItems:'center'
    },
    textttt:{
        fontSize:17,
        color:'#000',
        fontWeight:'bold'
    }
})

export default HomeScreen;