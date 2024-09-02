import React from 'react';
import { SvgIcon } from '@mui/material';

const BackArrowIcon: React.FC = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24" fill="#000" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" fill="#000"/>
    <path d="M10 19l-7-7 7-7" fill="#000"/>
  </SvgIcon>
);

export default BackArrowIcon;
