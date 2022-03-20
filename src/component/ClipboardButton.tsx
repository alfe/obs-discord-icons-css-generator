import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

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
      title='Copied!'
    >
      <div>
        <CopyToClipboard text={props.value} onCopy={handleClickButton}>
          <IconButton
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
