import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FC } from 'react';

export type CatalogPreviewProps = {
  title: string;
  img: ImageSourcePropType;
  size: string;
  material: string;
  feature: string;
};

const CatalogPreview: FC<CatalogPreviewProps> = ({
  title,
  img,
  size,
  material,
  feature,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
        gap: 10,
      }}
    >
      <Image style={{ width: '50%' }} source={img} />
      <View style={{ flexDirection: 'column', gap: 10, flex: 1 }}>
        {/* Glanzings code start here */}
        <View style={{ display: 'flex', gap: 15, flexDirection: 'row' }}>
          <View style={{ ...styles.button, backgroundColor: '#ccc' }}>
            <Image
              style={{ width: '50%', height: '80%' }}
              source={require('../assets/images/Glazing.png')}
            />
          </View>
        </View>
        {/* Glanzings code End here */}

        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        <Text>{size}</Text>
        <Text>{material}</Text>
        <Text>{feature}</Text>
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
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
export default CatalogPreview;
