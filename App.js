import React,{useEffect} from 'react';
import { Text, View, Button, Platform,StyleSheet } from 'react-native';
import * as Notification from 'expo-notifications';


Notification.setNotificationHandler({
  handleNotification:async()=>{
    return {
      shouldPlaySound:true,
      shouldShowAlert:true,
    }
  }
})


export default function App() {


  const handleNotification=()=>{
    Notification.scheduleNotificationAsync({
      content:{
        title:'Local Notification Example',
        body:'This is my local notification'
      },
      trigger:{
        seconds:10
      }
    })
  }

  return (
    <View style={styles.container}>
      <Button title={"Open Notification"} onPress={handleNotification}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
