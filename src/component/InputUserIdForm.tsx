import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import idCopy from './img/id_copy.jpg';
import discordSettingDetail from './img/discord-setting-detail.jpg';
import discordUserSetting from './img/discord-user-setting.jpg';

export type InputUserIdFormProps = {
  title: string;
  onChange: (userId: string) => void;
};
const InputUserIdForm = ({ title, onChange }: InputUserIdFormProps) => {
  const [userId, setUserId] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "discord_user_id" });

  React.useEffect(() => {
    onChange(userId);
  }, [userId])

  // @ts-ignore
  const handleUserIdChange = (event: React.ChangeEvent) => { setUserId(event?.target?.value || ''); };

  return (
    <>
      <ListItem
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', columnGap: 2 }}>
        <FormLabel component="legend">{title}</FormLabel>
        <TextField label={t('discord_user_id')} variant="outlined" helperText={(
          <Box component="span" sx={{ display: 'inline-block', textAlign: 'right', mx: -2 }}>
            <Button onClick={() => { setOpen(true) }} sx={{ margin: '0 0 0 auto', fontSize: '.9em', alignItems: 'flex-end' }}>
              <HelpOutlineIcon fontSize="small" />{t('what_discord_user_id')}
            </Button>
          </Box>
        )} onChange={handleUserIdChange} InputLabelProps={{ shrink: true }} placeholder="739000000000000000" />
      </ListItem>

      <Dialog open={open} onClose={() => { setOpen(false) }}>
        <DialogTitle>{t('what_discord_user_id')}</DialogTitle>
        <DialogContent>
          <AboutDiscordUserIdDialogContent />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default InputUserIdForm;

const AboutDiscordUserIdDialogContent = () => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "discord_user_id" });
  return (
    <>
      {t('explain_discord_user_id')}
      <Box sx={{ textAlign: 'center', m: 2 }}>
        <img src={idCopy} alt="メンバーを右クリックしてIDをコピー" />
      </Box>
      <Box sx={{ textAlign: 'right' }}>
        <Button onClick={() => { setOpen(true) }}>
          <>
            <HelpOutlineIcon />
            {t('disabled_id_copy')}
          </>
        </Button>
      </Box>

      <Dialog maxWidth="lg" open={open} onClose={() => { setOpen(false) }}>
        <DialogTitle><>{t('how_to_enable_copy')}</></DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 2 }}>
            <>{t('on_developer_mode')}</>
          </Typography>

          <Typography>
            <>{t('open_user_setting')}</>
          </Typography>
          <Box sx={{ textAlign: 'center', m: 2 }}>
            <img src={discordUserSetting} alt="Discordの左下からユーザー設定を開く" />
          </Box>

          <Typography>
            <>{t('check_developer_mode')}</>
          </Typography>
          <Box sx={{ textAlign: 'center', m: 2 }}>
            <img src={discordSettingDetail} alt="詳細設定を開き、開発モードの欄をチェック" />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

type MouthAnimationStyleProps = {
  userId: string;
  mouthImgUrl: string;
};
const MouthAnimationStyle = React.memo((props: MouthAnimationStyleProps) => {
    if (!props.userId || !props.mouthImgUrl) return null;
    return (
      <style>
        {`@keyframes mouth-${props.userId} {
            0% {
            }
            50%{
              content: url("${props.mouthImgUrl}")
            }
            100% {
            }
        }`}
      </style>
    );
  }, (p, n) => p.userId === n.userId && p.mouthImgUrl === n.mouthImgUrl);
