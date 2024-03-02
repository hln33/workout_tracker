import { Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
  onAdd: () => void;
  backgroundColor: string;
  size: string;
  text: string;
  textColor: string;
}
export const AddButton = (props: Props) => {
  let buttonHeight = undefined;
  let buttonFontSize = undefined;
  switch (props.size) {
    case 'medium':
      buttonHeight = 50;
      buttonFontSize = 22;
      break;
    case 'small':
      buttonHeight = 30;
      buttonFontSize = 18;
      break;
  }

  return (
    <>
      <Pressable
        style={[
          styles.button,
          { backgroundColor: props.backgroundColor, height: buttonHeight },
        ]}
        onPress={props.onAdd}
      >
        <Text
          style={[
            styles.buttonText,
            { color: props.textColor, fontSize: buttonFontSize },
          ]}
        >
          {props.text}
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
