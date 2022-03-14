import React from 'react'
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import ListItem from '@mui/material/ListItem';
import Slider from '@mui/material/Slider';

export type SliderListItemProps = {
  title: string;
  onChange: (value: string) => void;
};
const SliderListItem = ({ title, onChange }: SliderListItemProps) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_: any, val: number | number[], activeThumb: number) => {
    if (typeof val !== 'number') return;
    setValue(val);
    onChange(`${val}px`);
  };
  return (
    <ListItem divider sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <FormLabel component="legend">{title}</FormLabel>
      <Box sx={{ width: 250 }}>
        <Slider
          defaultValue={0}
          value={value}
          min={-150}
          max={150}
          valueLabelDisplay="auto"
          onChange={handleChange} />
      </Box>
    </ListItem>
  );
};
export default SliderListItem;
