import { StyleSheet, Text, View,TouchableOpacity ,TextInput,Image} from 'react-native';
import React from 'react'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer'


import {Icon} from 'react-native-elements';
import Savings from '../screens/Savings';
export const SideDrawer=createDrawerNavigator({
   Savings:{
       screen:Savings,
       navigationOptions:{
        drawerIcon:()=>  <Icon name="home" style={{fontSize:24,color:"green"}}/>
          
    }
    
   }
},

    {
        contentComponent:Savings
    },

    

)

