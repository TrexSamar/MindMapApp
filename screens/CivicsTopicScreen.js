import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class CivicsTopicScreen extends React.Component{

    render(){
        return(

            <View style = {styles.container}>
                <LinearGradient locations = {[0.1, 0.3, 1]} colors ={["white", "skyblue", 'navy']} style = {styles.linearGradient}>

            <Text style = {styles.headingText}> Civics </Text>
            <View style = {styles.lowerContainer}>

            <TouchableOpacity style = {styles.topicContainer}
            onPress = {()=>{this.props.navigation.navigate('Civics1')}}
            >

<Text style ={styles.topicText}>Constitutional Design</Text>

</TouchableOpacity>

<TouchableOpacity style = {styles.topicContainer}
onPress = {()=>{this.props.navigation.navigate('Civics2')}}
>

<Text style ={styles.topicText}>Electoral Politics</Text>

</TouchableOpacity>

<TouchableOpacity style = {styles.topicContainer}
onPress = {()=>{this.props.navigation.navigate('Civics3')}}
>

<Text style ={styles.topicText}>What is Democracy? Why Democracy?</Text>

</TouchableOpacity>

<TouchableOpacity style = {styles.topicContainer}
onPress = {()=>{this.props.navigation.navigate('Civics4')}}
>

<Text style ={styles.topicText}>Working of Institutions</Text>

</TouchableOpacity>


            </View>
             </LinearGradient>
            </View>

        )
    }

}

const styles = StyleSheet.create({

    container:{

        flex: 1,
        backgroundColor: "white"

    },

    headingText:{

        color: "#15193c",
        fontSize: 30,
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        marginTop: 20

    },

    topicContainer:{

        justifyContent: 'center',
        marginTop: 40,
        borderRadius: 10,
        backgroundColor: "#15193c",
        width: "75%",
        height: 70

    },

    lowerContainer:{

        flex: 0.5,
        alignItems: "center"

    },

    topicText:{

        color: "white",
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'

    },

    linearGradient:{

        flex: 1

    }

})
