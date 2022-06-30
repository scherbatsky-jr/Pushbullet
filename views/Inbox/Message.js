import React from 'react';
import {Text} from 'react-native';

const Message = props => {
  const message = props.message;

  return (
    <Text key={message.name}>
      {message.type === 'note' ? message.body : message.file_name}
    </Text>
  );
};

export default Message;
