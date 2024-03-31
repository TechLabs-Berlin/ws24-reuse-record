import { View } from '@/components/Themed';
import Cell from '@/components/Cell';

import { Grid as GridProps } from '@/data/data';
import { FunctionComponent } from 'react';

const Grid: FunctionComponent<GridProps & { magnification: number }> = ({
  magnification = 1,
  ...gridData
}) => {
  return (
    <View
      style={{
        width: (gridData.frame.width + 20) * magnification,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: gridData.height ? (gridData.height + 20) * magnification : 10,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        borderWidth: 2,
        borderColor: '#aaa',
        backgroundColor: '#ccc',
        padding: 4,
      }}
    >
      {gridData.cells.map((cell, i) => (
        <Cell {...cell} key={i} magnification={magnification} />
      ))}
    </View>
  );
};

export default Grid;
