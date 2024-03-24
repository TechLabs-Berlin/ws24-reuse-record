import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
const materials = ['PVC', 'wood', 'aluminium'];
const surfaces = ['natural', 'licquer', 'stained', 'anadized', 'fail'];

type SettingsType = {
  material: string;
  surface: string;
};
const WindowFrame = () => {
  const [settings, setSettings] = useState<SettingsType>({
    material: 'PVC',
    surface: 'natural',
  });

  const updateSettings = (change: Partial<SettingsType>) => {
    setSettings((prev) => {
      return { ...prev, ...change };
    });
  };
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <Text>Frame</Text>
          <View style={styles.options}>
            <Text>Material</Text>
            {materials.map((material) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    updateSettings({ material });
                  }}
                  style={{
                    ...styles.Btn,
                    backgroundColor:
                      settings.material === material ? '#9f6b1d' : '#ccc',
                  }}
                >
                  <Text>{material}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.options}>
            <Text>Surface</Text>
            {surfaces.map((surface) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    updateSettings({ surface });
                  }}
                  style={{
                    ...styles.Btn,
                    backgroundColor:
                      settings.surface === surface ? '#9f6b1d' : '#ccc',
                  }}
                >
                  <Text>{surface}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.options}>
            <Text>Depth</Text>
            <TouchableOpacity style={styles.Btn}>
              <Text>7cm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.options}>
            <Text>Thickness</Text>
            <TouchableOpacity style={styles.Btn}>
              <Text>8cm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  Btn: {
    backgroundColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },

  buttonLabel: {
    color: '#fff',
  },
});

export default WindowFrame;
