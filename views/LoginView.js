import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const LoginView = ({navigation}) => {
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

  const fetchData = () => {
    fetch('https://api.pushbullet.com/v2/users/me', {
      method: 'GET',
      headers: {
        'Access-Token': accessToken,
      },
    })
      .then(response => response.json())
      .then(json => {
        setUserInfo(json);
        navigation.navigate('Inbox', {accessToken: accessToken});
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.loginView}>
      <Text style={styles.header}>Enter you access token below:</Text>
      <TextInput
        style={styles.accessInput}
        defaultValue={accessToken}
        onChangeText={newText => setAccessToken(newText)}
      />
      <Button title="Enter" onPress={fetchData} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    alignItems: 'center',
  },
  accessInput: {
    borderWidth: 1,
    borderRadius: 1,
    width: 200,
  },
  header: {
    fontSize: 20,
  },
});

export default LoginView;
