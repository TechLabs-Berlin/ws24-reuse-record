import { ScrollView, TextInput, View } from 'react-native';
import CatalogItem from '@/components/CatalogItem';

const CatalogList = () => {
  return (
    <ScrollView>
      <View>
      <TextInput
          style={{
            borderColor: "#ddd",
            borderWidth: 1,
            padding: 10,
            paddingLeft:20,
            borderRadius: 30,
            marginTop: 8,
            marginBottom: 8,
          }}
          placeholder="search"
        />
        <CatalogItem
          title="Hello"
          img="https://reactnative.dev/img/tiny_logo.png"
          size="100cm x 200cm"
          material={'frame material'}
          feature={'feature'}
        />
        <CatalogItem
          title="Hello"
          img="https://reactnative.dev/img/tiny_logo.png"
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />
        <CatalogItem
          title="Hello"
          img="https://reactnative.dev/img/tiny_logo.png"
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />

        <CatalogItem
          title="Hello"
          img="https://reactnative.dev/img/tiny_logo.png"
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />
         <CatalogItem
          title="Hello"
          img="https://reactnative.dev/img/tiny_logo.png"
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />
         <CatalogItem
          title="Hello"
          img="https://reactnative.dev/img/tiny_logo.png"
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />

<CatalogItem
          title="Hello"
          img="https://reactnative.dev/img/tiny_logo.png"
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />
      </View>
    </ScrollView>
  );
};

export default CatalogList;
