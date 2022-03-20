import React from 'react'
import FormLabel from '@mui/material/FormLabel';
import ListItem from '@mui/material/ListItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type Option = { label: string; value: string };
export type SelectorListItemProps = {
  title: string;
  options: Option[];
  disabled?: boolean;
  onChange: (value: string) => void;
};
const SelectorListItem = ({ title, options, disabled, onChange }: SelectorListItemProps) => {
  const [value, setValue] = React.useState(options[0].value || '');

  React.useEffect(() => {
    onChange(value);
  }, [disabled])

  const handleChange = (_: any, val: string) => {
    if (!val) return;
    setValue(val);
    onChange(val);
  };
  return (
    <ListItem
      divider
      sx={{ display: 'flex', justifyContent: 'space-between', ...(disabled && { backgroundColor: '#DDD' }) }}
    >
      <FormLabel component="legend">{title}</FormLabel>
      <ToggleButtonGroup
        color="primary"
        value={value}
        disabled={disabled}
        exclusive
        onChange={handleChange}>
        {(options || []).map((item: Option) => (
          <ToggleButton key={`${title}-${item.label}-${item.value}`} value={item.value}>{item.label}</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ListItem>
  );
};
export default SelectorListItem;
