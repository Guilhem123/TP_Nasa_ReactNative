import React, { Component,useEffect,useState } from 'react';
import axios from 'axios';
import { StyleSheet,View, Text, Button, Image, SafeAreaView, ScrollView,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
import Constants from 'expo-constants';

//path in project
import { Nasa, JSONNasa } from '../model/type'
import { toNasa } from '../model/utils'

type Props = {
    //navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

// FlatList test
const HomeScreen: React.FC<Props> = () => {

    //récupération de la date du pc
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var date="&date="+year+"-"+month+"-"+day;

    var paramsSearch: String="";
    //conversion de la date int en string 
    paramsSearch = date;
    //console.log("parametre ====="+paramsSearch);
    //const API_ERIC = "https://nasa-apod-ynov.herokuapp.com/";
    function _onPressButton() {
        alert('You tapped the button!')
      }
      //const  [picture, setNasa]= useState<Nasa>();
      //AXIOS
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=0xy8D0M96HpF4Ek91fxRz9R3ksl0QlMmO5ExG3ww`+paramsSearch)
        //axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then((res) => {
            // return an array
            if (res.data == null || res.data == undefined) {
                console.log("Your value hasn't been found");
                // TODO: display an error message
            } else {
                console.log(res.data);
                //const media: Nasa =toNasa(res.data)
                //setNasa(media);

            }

        })
        .catch((err) => {
            throw err;
        })
    },[]);
    return(
        <View>
            <ScrollView style={styles.scrollView}>
                <TouchableHighlight onPress={_onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        </View>
    )

    
    
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }

  });