import React from 'react';
import { MuiColorInput } from 'mui-color-input';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import ListItem from '@mui/material/ListItem';

export type ColorPickerListItemProps = {
  title: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  defaultValue?: string;
};
const ColorPickerListItem = ({
  title,
  disabled,
  onChange,
  defaultValue,
}: ColorPickerListItemProps) => {
  const [value, setValue] = React.useState<string>(defaultValue || '#ffffff');

  React.useEffect(() => {
    onChange(value);
  }, [disabled]);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <FormLabel component="legend">{title}</FormLabel>
      <Box sx={{ width: 250 }}>
        <MuiColorInput value={value} disabled={disabled} onChange={handleChange} />
      </Box>
    </ListItem>
  );
};
export default ColorPickerListItem;
