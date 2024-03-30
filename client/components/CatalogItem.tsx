import { Link } from 'expo-router';
import { FC } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type CatalogItemProps = {
  title: string;
  img: ImageSourcePropType;
  size: string;
  material: string;
  feature: string;
};

const CatalogItem: FC<CatalogItemProps> = ({
  title,
  img,
  size,
  material,
  feature,
}) => {
  return (
    <Link href="/Camera" asChild>
      <Pressable>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10,
            gap: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 8,
          }}
        >
          <Image style={{ width: '50%' }} source={img} />
          <View style={{ flexDirection: 'column', gap: 10 }}>
            {/* Glanzings code start here */}
            <View style={{ display: 'flex', gap: 15, flexDirection: 'row' }}>
              <View style={{ ...styles.button, backgroundColor: '#ccc' }}>
                <Image
                  style={{ width: '50%', height: '80%' }}
                  source={require('../assets/images/Glazing.png')}
                />
              </View>
              <View style={{ ...styles.button, borderWidth: 1 }}>
                <Text>2x</Text>
              </View>
              <AntDesign
                style={{ position: 'absolute', right: -40, bottom: 30 }}
                name="up"
                size={30}
                color="#ccc"
              />
            </View>
            {/* Glanzings code End here */}

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
            <Text>{size}</Text>
            <Text>{material}</Text>
            <Text>{feature}</Text>
            <AntDesign
              style={{ position: 'absolute', right: -40, bottom: 30 }}
              name="right"
              size={30}
              color="#ccc"
            />
          </View>
        </View>
      </Pressable>
    </Link>
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
export default CatalogItem;
