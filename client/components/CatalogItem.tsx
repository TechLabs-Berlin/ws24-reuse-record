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
import CatalogPreview, { CatalogPreviewProps } from './CatalogPreview';

const CatalogItem: FC<CatalogPreviewProps> = (props) => {
  return (
    <Link href={`/CatalogDetail/${props.id}`} asChild>
      <Pressable
        style={{
          position: 'relative',
          backgroundColor: 'rgba(210, 210, 210, 0.5)',
          borderRadius: 20,
          padding: 24,
        }}
      >
        <View
          style={{
            ...styles.button,
            borderWidth: 1,
            position: 'absolute',
            right: 34,
            top: 34,
          }}
        >
          <Text>2x</Text>
        </View>
        <AntDesign
          style={{ display: 'none', position: 'absolute', right: 40, top: 30 }}
          name="up"
          size={30}
          color="#ccc"
        />
        <CatalogPreview {...props} />

        <AntDesign
          style={{ position: 'absolute', right: 40, bottom: 30 }}
          name="right"
          size={30}
          color="#ccc"
        />
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
