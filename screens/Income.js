import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput ,Alert, ScrollView,KeyboardAvoidingView,Modal,Image,Dimensions,Button,Pressable} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/header';
import * as Font from 'expo-font';
import { Icon } from 'react-native-elements';
import { Input } from 'react-native-elements';
export default class Income extends React.Component{
    constructor(){
        super();
        this.state={
            amount:0,
            category:'',
            userId:firebase.auth().currentUser.email,
            balance:0,
            userName:''
        }
    }
   getUserDetails=()=>{
        db.collection("users").where("email_id","==",this.state.userId).get()
        .then((snapshot)=>{
          snapshot.forEach((doc) => {
            this.setState({
              balance :doc.data().balance
            })
          });
        })
      }
    updateIncome(amount){
       db.collection('users').where("email_id","==",this.state.userId).get()
    .then()
 .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        db.collection('users').doc(doc.id).update({
            Income:firebase.firestore.FieldValue.increment(amount),
            balance:firebase.firestore.FieldValue.increment(amount),
      })
     
      this.setState({
        balance:doc.data().balance,

      })
      console.log(doc.data().balance)
    })
  })
 
    }
    componentDidMount(){
        console.log(this.state.balance)
      
    }
    render(){
        return(
            <View>
                <MyHeader title=""/>
                <Text style={{marginLeft:130,marginTop:100}}>Add Income</Text>
                <Input
                 label="Amount"
                placeholder="eg:200"
                onChangeText={(text)=>this.setState({amount:text})}
                keyboardType={'email-address'}
                containerStyle={{width:300,marginTop:20,alignSelf:'center'}}
                 leftIcon={
                  <Icon
                  name="envelope"
                  type="font-awesome"
                  
                  />
                 }
                 />
                  <Input
                 label="Category"
                placeholder="eg:Salary"
                secureTextEntry={true}
                containerStyle={{width:300,marginTop:-10,alignSelf:'center'}}
                onChangeText={(text)=>this.setState({category:text})}
                 leftIcon={
                  <Icon
                  name="lock"
                  type="font-awesome"
                  
                  />
                 }
                 />
                 <TouchableOpacity style={{marginLeft:110,marginTop:50,backgroundColor:"#02CDCF",width:150,height:40,borderRightColor:'red',borderRadius:2}} onPress={()=>{
                     this.updateIncome(this.state.amount)
                 }}><Text style={{color:"white",alignSelf:'center',marginTop:8}}>Add</Text></TouchableOpacity>
            </View>
        )
    }
}
