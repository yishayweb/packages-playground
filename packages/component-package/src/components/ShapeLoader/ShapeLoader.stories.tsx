import { useTheme } from '@mui/system';
import React from 'react';
import ShapeLoader from './ShapeLoader';

export default {
  title: 'Component Lib/Feedback/Shape Loader',
  component: ShapeLoader,
};

export const Primary = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <ShapeLoader style={{ width: 300, height: 50 }} />
      <ShapeLoader style={{ width: 50, height: 50, borderRadius: '50%' }} />
      <ShapeLoader style={{ width: 300, height: 50, borderRadius: '5rem' }} />
      <ShapeLoader
        style={{
          width: 300,
          height: 300,
          backgroundColor: '#000000',
          borderRadius: '50%',
          border: '30px solid #e5e5e5',
        }}
      />
    </div>
  );
};
