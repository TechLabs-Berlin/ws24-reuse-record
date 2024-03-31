import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useState } from 'react';

const GlassConfigurator = () => {
  const [isActive, setIsActive] = useState('false');
  const handlerpress = () => {
    setIsActive('!isActive');
  };
  return (
    <View style={{ display: 'flex', gap: 20, flexDirection: 'row' }}>
      <View
        style={{
          ...styles.glass,
          backgroundColor: isActive ? '#555' : '#fff  ',
        }}
      >
        <Image
          style={{ width: 30, height: 60 }}
          source={require('../../assets/images/glazing1.png')}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.glass}>
        <Image
          style={{ width: 30, height: 60 }}
          source={require('../../assets/images/glazing2.png')}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.glass}>
        <Image
          style={{ width: 30, height: 60 }}
          source={require('../../assets/images/glazing3.png')}
        />
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glass: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

export default GlassConfigurator;
