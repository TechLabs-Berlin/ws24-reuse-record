import Grid from '@/components/Grid';
import { useContext } from 'react';
import { WindowDataContext } from './_layout';

const WindowType = () => {
  const { windowData } = useContext(WindowDataContext);
  return <Grid {...windowData} />;
};

export default WindowType;
