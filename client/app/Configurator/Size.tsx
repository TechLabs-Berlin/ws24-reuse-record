import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import Grid from '@/components/Grid';
import { WindowDataContext } from './_layout';
import { windowCalc } from '@/helper/calc';

const SizeConfigurator = () => {
  const { windowData, setWindowData } = useContext(WindowDataContext);
  const [width, setWidth] = useState(windowData.frame.width);
  const [height, setHeight] = useState(windowData.frame.height);

  useEffect(() => {
    console.log(width);
    const newWindowData = { ...windowData };
    newWindowData.frame.width = width;
    setWindowData(windowCalc({ grid: newWindowData }).grid);
  }, [width]);

  useEffect(() => {
    console.log(width);
    const newWindowData = { ...windowData };
    newWindowData.frame.height = height;
    setWindowData(windowCalc({ grid: newWindowData }).grid);
  }, [height]);

  return (
    <>
      <Grid {...windowData} />
      <View style={{ ...styles.input, top: 0, right: '50%', marginRight: -40 }}>
        <TextInput
          defaultValue={`${width}`}
          keyboardType="numeric"
          onChangeText={(value) => {
            if (value !== '') setWidth(parseInt(value));
          }}
        ></TextInput>
        <Text>cm</Text>
      </View>
      <View
        style={{
          ...styles.input,
          right: 50,
          bottom: '50%',
          marginBottom: -10,
        }}
      >
        <TextInput
          onChangeText={(value) => {
            if (value !== '') setHeight(parseInt(value));
          }}
          defaultValue={`${height}`}
          keyboardType="numeric"
        ></TextInput>
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
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    position: 'absolute',
  },
});

export default SizeConfigurator;
