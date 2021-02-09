import React, {Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, Alert,Image, Modal, KeyboardAvoidingView,ScrollView} from 'react-native';
import {createStackNavigator} from 'react-naviagtion-stack';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';

/*export const AppStackNavigator = createStackNavigator({
    ExchangeScreen:{
        screen:ExchangeScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    ReceiverDetails:{
        screen:ReceiverDetailsScreen,
        navigationOptions:{
            headerShown:false
        }
    }
 },
 {
     initialRouteName:'BookDonateList'
 }
)*/