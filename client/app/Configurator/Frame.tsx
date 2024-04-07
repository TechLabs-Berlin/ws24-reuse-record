import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
const materials = ['PVC', 'Wood', 'Aluminium'];
const surfaces = ['Natural', 'Lacquer', 'Stained', 'Anodized', 'Foil'];

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
            gap: 18,
          }}
        >
          <View style={styles.options}>
            <Text style={styles.label}>Material</Text>
            {materials.map((material, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    updateSettings({ material });
                  }}
                  style={{
                    ...styles.Btn,
                    backgroundColor:
                      settings.material === material ? '#3498db' : '#ccc',
                  }}
                >
                  <Text>{material}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.options}>
            <Text style={styles.label}>Surface</Text>
            {surfaces.map((surface, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    updateSettings({ surface });
                  }}
                  style={{
                    ...styles.Btn,
                    backgroundColor:
                      settings.surface === surface ? '#3498db' : '#ccc',
                  }}
                >
                  <Text>{surface}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.options}>
            <Text style={styles.label}>Depth</Text>
            <TouchableOpacity style={styles.Btn}>
              <Text>7cm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.options}>
            <Text style={styles.label}>Thickness</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    width: 70,
  },
  Btn: {
    backgroundColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  buttonLabel: {
    color: '#fff',
  },
});

export default WindowFrame;
