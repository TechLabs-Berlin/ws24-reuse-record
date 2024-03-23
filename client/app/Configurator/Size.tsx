import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import Grid from '@/components/Grid';

import { seedWindows } from '@/data/data';
const gridData = seedWindows[0].grid;

const SizeConfigurator = () => {
  const [activeCondition, setActiveCondition] = useState(null);

  const handelPress = (condition: any) => {
    setActiveCondition(condition === activeCondition ? null : condition);
  };
  return (
    <>
      <Grid {...gridData} />
      <View style={{ ...styles.input, top: 0, right: '50%', marginRight: -40 }}>
        <TextInput defaultValue="100" keyboardType="numeric"></TextInput>
        <Text>cm</Text>
      </View>
      <View
        style={{
          ...styles.input,
          right: 0,
          bottom: '50%',
          marginBottom: -10,
        }}
      >
        <TextInput defaultValue="100" keyboardType="numeric"></TextInput>
        <Text>cm</Text>
      </View>
    </>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    gap: 3,
    width: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    position: 'absolute',
  },
});

export default SizeConfigurator;
