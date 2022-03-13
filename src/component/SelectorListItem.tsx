import React from 'react'
import FormLabel from '@mui/material/FormLabel';
import ListItem from '@mui/material/ListItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type Option = { label: string; value: string };
type SelectorListItemProps = {
  title: string;
  options: Option[];
  onChange: (value: string) => void;
};
const SelectorListItem = ({ title, options, onChange }: SelectorListItemProps) => {
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
