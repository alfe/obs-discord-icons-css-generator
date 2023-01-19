import React from 'react'
import FormLabel from '@mui/material/FormLabel';
import ListItem from '@mui/material/ListItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type Option = { label: string; value: string };
export type SelectorToggleButtonGroupProps = {
  title: string;
  options: Option[];
  onChange: (value: string[]) => void;
};
const SelectorToggleButtonGroup = ({ title, options, onChange }: SelectorToggleButtonGroupProps) => {
  const [value, setValue] = React.useState<string[]>([options[0].value || '']);
  const handleChange = (_: any, val: string[]) => {
    if (!val) return;
    setValue(val);
    onChange(val);
  };
  return (
    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <FormLabel component="legend">{title}</FormLabel>
      <ToggleButtonGroup
        color="primary"
        value={value}
        onChange={handleChange}>
        {(options || []).map((item: Option) => (
          <ToggleButton key={`${title}-${item.label}-${item.value}`} value={item.value}>{item.label}</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ListItem>
  );
};
export default SelectorToggleButtonGroup;
