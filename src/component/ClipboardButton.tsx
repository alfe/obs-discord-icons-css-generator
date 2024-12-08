import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { grey } from '@mui/material/colors';

export type ClipboardButtonProps = {
  value: string;
};
const ClipboardButton = (props: ClipboardButtonProps) => {
  const [openTip, setOpenTip] = React.useState<boolean>(false);

  const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  const handleClickButton = (): void => {
    setOpenTip(true);
    setTimeout(() => {
      setOpenTip(false);
    }, 1000);
  };

  return (
    <Tooltip
      arrow
      open={openTip}
      disableHoverListener
      placement='top'
      title='Copied!'>
      <div>
        <CopyToClipboard text={props.value} onCopy={handleClickButton}>
          <IconButton
            sx={{
              color: grey[50],
              background: 'linear-gradient(145deg, #24282f, #2b2f38)',
              boxShadow: '20px 20px 40px #20232a,-20px -20px 40px #30353e, 0 0 0 2px inset var(--main-color)',
            }}
            size="large"
            disabled={props.value === ''}
            aria-label="copy to clipboard"
            onMouseDown={handleMouseDownPassword}>
            {openTip ? <AssignmentTurnedInIcon /> : <AssignmentIcon />}
          </IconButton>
        </CopyToClipboard>
      </div>
    </Tooltip>
  );
}
export default ClipboardButton;
