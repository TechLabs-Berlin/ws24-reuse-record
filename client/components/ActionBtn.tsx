import { Pressable, View, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const ActionBtn = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
      }}
    >
      <Link href="#">
        <Pressable>
          <AntDesign
            style={{ position: 'absolute', right: 40, bottom: 30 }}
            name="left"
            size={30}
            color="#ccc"
          />
        </Pressable>
      </Link>
      <Link href="#">
        <Pressable>
          <AntDesign
            style={{ position: 'absolute', right: 40, bottom: 30 }}
            name="right"
            size={30}
            color="#ccc"
          />
        </Pressable>
      </Link>
      <Link href="#">
        <Pressable>
          <AntDesign
            style={{ position: 'absolute', right: 40, bottom: 30 }}
            name="right"
            size={30}
            color="#ccc"
          />
        </Pressable>
      </Link>
      <Link href="#">
        <Pressable>
          {' '}
          <FontAwesome name="times" size={24} color="#fff" />
        </Pressable>
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
