import CatalogItem from '@/components/CatalogItem';
import CatalogPreview from '@/components/CatalogPreview';
import { Text, View } from '@/components/Themed';
import { StyleSheet } from 'react-native';

const CatalogDetails = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        padding: 20,
      }}
    >
      <View style={{ width: '100%' }}>
        <CatalogPreview
          title="3X2"
          img={require('../assets/images/WindowPreview.png')}
          size="100cm x 200cm"
          material={'frame material'}
          feature={'feature'}
        />
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 'auto',

          borderRadius: 10,
          backgroundColor: '#ccc',
          width: '80%',
          height: 200,
          marginBottom: 30,
        }}
      >
        <Text style={{ fontSize: 25 }}>300 x 200</Text>
      </View>
      {/* Glass Element code start here */}
      <View style={{ width: '100%' }}>
        <Text>Glass Element</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginVertical: 10,
              gap: 5,
            }}
          >
            <View style={{ ...styles.GlassELement, marginBottom: 10 }}>
              <Text style={styles.text}>3x</Text>
            </View>
            <Text>W 70 cm</Text>
            <Text>h 90 cm</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginVertical: 10,
              gap: 5,
            }}
          >
            <View style={{ ...styles.GlassELement, marginBottom: 10 }}>
              <Text style={styles.text}>3x</Text>
            </View>
            <Text>W 70 cm</Text>
            <Text>h 90 cm</Text>
          </View>
        </View>
      </View>
      {/* Glass elemewnt code end here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GlassELement: {
    display: 'flex',
    justifyContent: 'center',

    width: 150,
    height: 90,

    backgroundColor: '#ccc',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
  },
});
export default CatalogDetails;
