import { Pressable, View, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ActionBtn = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        borderLeftWidth: 1,
        borderLeftColor: '#ccc',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        height: '100%',
        paddingRight: insets.right,
        paddingLeft: 20,
      }}
    >
      <Link href="#">
        <Pressable style={styles.button}>
          <AntDesign name="left" size={30} color="#555" />
        </Pressable>
      </Link>
      <Link href="#">
        <Pressable
          style={{
            ...styles.button,
            backgroundColor: '#3498db',
            padding: 20,
            borderWidth: 0,
          }}
        >
          <AntDesign name="arrowright" size={30} color="#fff" />
        </Pressable>
      </Link>
      <Link href="#">
        <Pressable style={styles.button}>
          <AntDesign name="close" size={30} color="#555" />
        </Pressable>
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#eee',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    shadowColor: '#555', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 1, // For iOS shadow
    shadowRadius: 4, // For iOS shadow
    elevation: 6, // For Android shadow
    opacity: 0.9,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  secondaryBtn: {
    borderWidth: 4, // Border width
    borderColor: '#222', // Border color
    borderStyle: 'solid', // Half of the width or height
    backgroundColor: '#fff  ', // Example color, can be any color or gradient\
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  secondaryBtnlabel: {
    color: '#222',
  },
  primaryBtn: {
    backgroundColor: '#555',
  },
});

export default ActionBtn;
