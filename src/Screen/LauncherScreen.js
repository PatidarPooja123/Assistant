import React, { useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const LauncherScreen = ({ navigation }) => {

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate('AddEmployee')
    //     }, 3000)
    // })

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.navigate('AddEmployee') }}
                style={styles.button}>
                <Text style={styles.text}>ADD EMPLOYEE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32cd32',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: HEIGHT / 15,
        backgroundColor: '#808080',
        width: WIDTH / 1.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default LauncherScreen