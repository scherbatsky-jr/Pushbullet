import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Message = props => {
  const message = props.message;

  return (
    <Text key={message.name} style={styles.messageBox}>
      {message.type === 'note' ? message.body : message.file_name}
    </Text>
  );
};

const styles = StyleSheet.create({
  messageBox: {
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    textAlign: 'right',
    width: '50%',
  },
});

export default Message;
