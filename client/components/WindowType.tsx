import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const WindowType = () => {
  const [activeCondition, setActiveCondition] = useState<
    'Fixed' | 'Open' | 'Parapet'
  >('Open');

  const toggleWindowType = () => {
    setActiveCondition((prev) => {
      switch (prev) {
        case 'Open':
          return 'Fixed';
        case 'Fixed':
          return 'Parapet';
        case 'Parapet':
          return 'Open';
      }

      // return prev === 'Open' ? 'Fixed' : prev === 'Fixed' ? 'Parapet' : 'Open';
    });
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <LinearGradient
        colors={['#bdd7f4', '#b8e1fc', '#a2caf2', '#a9d2f3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.3, 0.4, 0.4, 0.6]} // Adjust the color stop positions here
        style={styles.gradient}
      >
        <Pressable
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
          }}
          onPress={() => toggleWindowType()}
        >
          <Text style={{ textAlign: 'center' }}>{activeCondition} </Text>
        </Pressable>
      </LinearGradient>
    </View>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default WindowType;
