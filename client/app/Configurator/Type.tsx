import { View } from '@/components/Themed';
import WindowType from '@/components/WindowType';

const Type = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 2,
        flex: 1,
        height: '100%',
        borderWidth: 2,
      }}
    >
      <WindowType />
      <WindowType />
      <WindowType />
      <WindowType />
      <WindowType />
      <WindowType />
      <WindowType />
      <WindowType />
      <WindowType />
    </View>
  );
};

export default Type;
