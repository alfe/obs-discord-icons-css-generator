import React from 'react'
import { FormLabel, ListItem, ToggleButton, ToggleButtonGroup } from '@mui/material'

type Option = { label: string; value: string };
type SelectorListItemPorps = {
  title: string;
  options: Option[];
  onChange: (value: string) => void;
};
const SelectorListItem = ({ title, options, onChange }: SelectorListItemPorps) => {
  const [value, setValue] = React.useState(options[0].value || '');
  const handleChange = (_: any, val: string) => {
    setValue(val);
    onChange(val);
  };
  return (
    <ListItem divider sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <FormLabel component="legend">{title}</FormLabel>
      <ToggleButtonGroup
        color="primary"
        value={value}
        exclusive
        onChange={handleChange}>
        {(options || []).map((item: Option) => (
          <ToggleButton value={item.value}>{item.label}</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ListItem>
  );
};
export default SelectorListItem;
