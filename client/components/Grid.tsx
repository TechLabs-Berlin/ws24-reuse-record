import { View } from '@/components/Themed';
import Cell from '@/components/Cell';

import { Grid as GridProps } from '@/data/data';
import { FunctionComponent } from 'react';

const Grid: FunctionComponent<GridProps> = (gridData) => {
  return (
    <View
      style={{
        width: gridData.frame.width,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: gridData.frame.height,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        alignContent: 'space-around',
      }}
    >
      {gridData.cells.map((cell, i) => (
        <Cell {...cell} key={i} />
      ))}
    </View>
  );
};

export default Grid;
