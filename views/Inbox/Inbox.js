import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import Message from './Message';

const Inbox = ({navigation, route}) => {
  const [messages, setMessages] = useState([
    {
      type: 'note',
      name: 'no name 1',
      body: 'This is the body of the message. Hello 1',
    },
    {
      type: 'note',
      name: 'no name 2',
      body: 'This is the body of the message. Hello 2',
    },
    {
      type: 'note',
      name: 'no name 3',
      body: 'This is the body of the message. Hello 3',
    },
    {
      type: 'note',
      name: 'no name 4',
      body: 'This is the body of the message. Hello 4',
    },
    {
      type: 'note',
      name: 'no name 1',
      body: 'This is the body of the message. Hello 1',
    },
    {
      type: 'note',
      name: 'no name 2',
      body: 'This is the body of the message. Hello 2',
    },
    {
      type: 'note',
      name: 'no name 3',
      body: 'This is the body of the message. Hello 3',
    },
    {
      type: 'note',
      name: 'no name 4',
      body: 'This is the body of the message. Hello 4',
    },
    {
      type: 'note',
      name: 'no name 1',
      body: 'This is the body of the message. Hello 1',
    },
    {
      type: 'note',
      name: 'no name 2',
      body: 'This is the body of the message. Hello 2',
    },
    {
      type: 'note',
      name: 'no name 3',
      body: 'This is the body of the message. Hello 3',
    },
    {
      type: 'note',
      name: 'no name 4',
      body: 'This is the body of the message. Hello 4',
    },
    {
      type: 'note',
      name: 'no name 1',
      body: 'This is the body of the message. Hello 1',
    },
    {
      type: 'note',
      name: 'no name 2',
      body: 'This is the body of the message. Hello 2',
    },
    {
      type: 'note',
      name: 'no name 3',
      body: 'This is the body of the message. Hello 3',
    },
    {
      type: 'note',
      name: 'no name 4',
      body: 'This is the body of the message. Hello 4',
    },
    {
      type: 'note',
      name: 'no name 1',
      body: 'This is the body of the message. Hello 1',
    },
    {
      type: 'note',
      name: 'no name 2',
      body: 'This is the body of the message. Hello 2',
    },
    {
      type: 'note',
      name: 'no name 3',
      body: 'This is the body of the message. Hello 3',
    },
    {
      type: 'note',
      name: 'no name 4',
      body: 'This is the body of the message. Hello 4',
    },
    {
      type: 'note',
      name: 'no name 1',
      body: 'This is the body of the message. Hello 1',
    },
    {
      type: 'note',
      name: 'no name 2',
      body: 'This is the body of the message. Hello 2',
    },
    {
      type: 'note',
      name: 'no name 3',
      body: 'This is the body of the message. Hello 3',
    },
    {
      type: 'note',
      name: 'no name 4',
      body: 'This is the body of the message. Hello 4',
    },
  ]);

  const fetchMessages = () => {
    fetch('https://api.pushbullet.com/v2/pushes', {
      method: 'GET',
      headers: {
        'Access-Token': route.params.accessToken,
      },
    })
      .then(response => response.json())
      .then(json => {
        setMessages(json.pushes);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.inboxView}>
      <ScrollView contentContainerStyle={styles.messagesList}>
        {messages && messages.length
          ? messages.map(message => {
              return (
                <Message
                  message={message}
                  key={message.name}
                  style={styles.messageBox}
                />
              );
            })
          : null}
      </ScrollView>
      <TextInput style={styles.messageInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  inboxView: {
    flex: 1,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 1,
    paddingLeft: 10,
  },
  messagesList: {
    alignItems: 'flex-end',
    borderColor: 'blue',
    borderWidth: 2,
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    textAlign: 'right',
  },
});

export default Inbox;
