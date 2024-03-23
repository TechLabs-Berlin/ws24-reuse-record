import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Keyboard,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import KeyboardBtn from '@/components/KeyboardBtn';
import KeyboardInput from '@/components/KeyboradInput';

const Grid = () => {
  const [activeCondition, setActiveCondition] = useState(null);

  const handelPress = (condition: any) => {
    setActiveCondition(condition === activeCondition ? null : condition);
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          width: '100%',
        }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Pressable onPress={() => handelPress('open')}>
            <Text>{activeCondition === 'open' ? 'close' : 'Open'} </Text>
          </Pressable>
          <Pressable onPress={() => handelPress('fixed')}>
            <Text>{activeCondition === 'close' ? 'parapet' : 'Fixed'}</Text>
          </Pressable>
          <Pressable onPress={() => handelPress('Parapet')}>
            <Text>{activeCondition === 'parapet' ? 'open' : 'Parapet'}</Text>
          </Pressable>
          <LinearGradient
            colors={['#bdd7f4', '#b8e1fc', '#a2caf2', '#a9d2f3']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.3, 0.4, 0.4, 0.6]} // Adjust the color stop positions here
            style={styles.gradient}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: '50%',
            marginBottom: -30,
          }}
        >
          <Pressable style={styles.customButton}>
            <Text style={styles.buttonLabel}>+</Text>
          </Pressable>
          <Pressable style={styles.customButton}>
            <Text style={styles.buttonLabel}>-</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            right: '50%',
          }}
        >
          <Pressable style={styles.customButton}>
            <Text style={styles.buttonLabel}>-</Text>
          </Pressable>
          <Pressable style={styles.customButton}>
            <Text style={styles.buttonLabel}>+</Text>
          </Pressable>
        </View>
        <TextInput
          style={{ ...styles.input, top: 0, right: '50%' }}
        ></TextInput>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#e2e8f1',
  },
  customButton: {
    borderRadius: 50,
    backgroundColor: 'rgb(146 159 29)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
  },
  buttonLabel: {
    color: '#fff',
  },
  input: {
    width: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    position: 'absolute',
  },
});

export default Grid;
