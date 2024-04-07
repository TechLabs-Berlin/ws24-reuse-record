import { View } from '@/components/Themed';
import Cell from '@/components/Cell';

import { Grid as GridProps } from '@/data/data';
import { FunctionComponent } from 'react';

const Grid: FunctionComponent<GridProps> = (gridData) => {
  return (
    <View
      style={{
        width: gridData.frame.width + 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: gridData.frame.height + 20,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        borderWidth: 2,
        borderColor: '#aaa',
        backgroundColor: '#ccc',
        padding: 10,
      }}
    >
      {gridData.cells.map((cell, i) => (
        <Cell {...cell} key={i} cellIndex={i} />
      ))}
    </View>
  );
};

export default Grid;
