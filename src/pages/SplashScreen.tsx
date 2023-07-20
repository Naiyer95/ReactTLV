import { useState,useEffect } from "react";
import { StyleSheet,Image,Text,View,ImageBackground,StatusBar } from "react-native";
function SScreen({navigation}:any):JSX.Element{
    useEffect(()=>{
        setTimeout(() =>{
            navigation.replace('login');
        },5000);
    },[navigation]);
    return (<View style={styles.container}></View>
    <StatusBar translucent = {true}, backgroundColor={'transparent'}/>

  <ImageBackground>
    <source /> = {require('')}
  </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    img:{
        flex: 1,
        justifyContent: 'center',
    },
    imgLogo:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
export default SScreen;