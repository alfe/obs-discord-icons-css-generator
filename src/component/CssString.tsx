import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputArea from './InputArea'
import ClipboardButton from './ClipboardButton';

export type CssStringProps = {
  value: string;
};
const CssString = (props: CssStringProps) => {
  return (
    <InputArea>
      <OutlinedInput
        fullWidth
        multiline
        endAdornment={
          <InputAdornment position="end">
            <ClipboardButton value={props.value} />
          </InputAdornment>
        }
        value={props.value} />
    </InputArea>
  );
};
export default CssString;
