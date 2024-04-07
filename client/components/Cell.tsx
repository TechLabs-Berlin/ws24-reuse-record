import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { Cell } from '@/data/data';
import { WindowDataContext } from '@/app/Configurator/_layout';

const CellComponent: FunctionComponent<Cell & { cellIndex: number }> = ({
  width,
  height,
  type,
  glass,
  cellIndex,
}) => {
  const [winType, setWinType] = useState<Cell['type']>(type);
  const { windowData, setWindowData } = useContext(WindowDataContext);

  useEffect(() => {
    const newWindowData = { ...windowData };
    newWindowData.cells[cellIndex].type = winType;
    setWindowData(newWindowData);
  }, [winType]);
  const toggleCellType = () => {
    setWinType((prev) => {
      switch (prev) {
        case 'openable':
          return 'fixed';
        case 'fixed':
          return 'openable';
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
        style={{
          ...styles.gradient,
          width,
          height,
          padding: 2,
          borderColor: '#888',
          borderWidth: 2,
        }}
      >
        <Pressable
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            borderColor: '#888',
            borderWidth: winType === 'openable' ? 2 : 0,
          }}
          onPress={() => toggleCellType()}
        >
          <Text style={{ textAlign: 'center' }}>{winType} </Text>
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
    borderColor: '#e2e8f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonLabel: {
    color: '#fff',
  },
});

export default CellComponent;
