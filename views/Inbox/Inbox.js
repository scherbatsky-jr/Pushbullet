import React, {useState} from 'react';
import {View} from 'react-native';
import Message from './Message';

const Inbox = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);

  console.log(route.params.accessToken);

  fetch('https://api.pushbullet.com/v2/pushes', {
    method: 'GET',
    headers: {
      'Access-Token': route.params.accessToken,
    },
  })
    .then(response => response.json())
    .then(json => {
      console.log(json.pushes);
      setMessages(json.pushes);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <View>
      {messages && messages.length
        ? messages.map(message => {
            return <Message message={message} key={message.index} />;
          })
        : null}
    </View>
  );
};

export default Inbox;
