import React from 'react'
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import ListItem from '@mui/material/ListItem';
import Slider from '@mui/material/Slider';

export type SliderListItemProps = {
  title: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
};
const SliderListItem = ({ title, disabled, onChange, min, max }: SliderListItemProps) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    onChange(`${value}`);
  }, [disabled])

  const handleChange = (_: any, val: number | number[], activeThumb: number) => {
    if (typeof val !== 'number') return;
    setValue(val);
    onChange(`${val}`);
  };
  return (
    <ListItem
      divider
      sx={{ display: 'flex', justifyContent: 'space-between', ...(disabled && { backgroundColor: '#DDD' }) }}
    >
      <FormLabel component="legend">{title}</FormLabel>
      <Box sx={{ width: 250 }}>
        <Slider
          defaultValue={0}
          value={value}
          disabled={disabled}
          min={typeof min === 'number' ? min : -150}
          max={typeof max === 'number' ? max : 150}
          valueLabelDisplay="auto"
          onChange={handleChange} />
      </Box>
    </ListItem>
  );
};
export default SliderListItem;
