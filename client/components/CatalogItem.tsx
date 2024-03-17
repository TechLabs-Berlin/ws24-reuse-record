import { FC } from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

type CatalogItemProps = {
  title: string;
  img: string;
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
    <View
      style={{ flexDirection: 'row', marginBottom: 10, marginTop: 10, gap: 10, borderWidth:1, borderColor:"#ccc", padding:8 }}
    >
      <Image style={{ width: 100, height: 100 }} source={{uri: img}} />
      <View style={{ flexDirection: 'column', gap: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        <Text>{size}</Text>
        <Text>{material}</Text>
        <Text>{feature}</Text>
      </View>
    </View>
  );
};

export default CatalogItem;
