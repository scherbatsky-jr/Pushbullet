import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const LoginView = () => {
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

  const fetchData = () => {
    console.log('reached her');
    fetch('https://api.pushbullet.com/v2/users/me', {
      method: 'GET',
      header: {
        'Access-Token': accessToken,
      },
    }).then(response => {
      setUserInfo(response);
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
      {userInfo ? <Text>{userInfo.name}</Text> : null}
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
