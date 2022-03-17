import { useState } from "react";
import Button from "@mui/material/Button";
import HelpIcon from '@mui/icons-material/Help';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Dialog, DialogContent, DialogTitle, Link } from "@mui/material";
import Add_browser from './img/1_add_browser.png';
import obs_empty from './img/1_obs_empty.png';
import DiscordStreamKitOverlay from './img/2_Discord-StreamKit-Overlay.png';
import discordStartIcon from './img/Discord-start-icon.png';
import discordUrl from './img/discord-url.png';
import copyCss from './img/copy-css.png';
import obsCss from './img/obs-css.png';
import obsComplete from './img/obs-complete.png';

const TutorialButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" onClick={() => setOpen(true)} startIcon={<HelpIcon />}>
          使い方
        </Button>
      </Box>
      <Dialog maxWidth="md" open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{
          textAlign: 'center',
          fontSize: '2rem',
          borderBottom: '2px solid #333',
          fontWeight: 'bold',
        }}>
          使い方
        </DialogTitle>
        <DialogContent>
          <h2>1. OBSのソースにブラウザを追加</h2>
          <p>OBSを起動
          <br />OBSのシーンを選択後、「ソース」欄で右クリックしてブラウザを追加</p>
          <Box sx={{ textAlign: 'center' }}>
            <img src={Add_browser} />
          </Box>

          <h2>2. Discord を起動</h2>
          <p>起動していない場合は起動してください</p>
          <Box sx={{ textAlign: 'center' }}>
            <img src={discordStartIcon} />
          </Box>

          <h2>3. Discord StreamKit Overlay にアクセス</h2>
          <Link href="https://streamkit.discord.com/overlay" target="_blank">
            https://streamkit.discord.com/overlay
            <OpenInNewIcon sx={{ mb : '-.4rem' }} />
          </Link> にアクセス
          <Link href="https://streamkit.discord.com/overlay" target="_blank">
            <Box sx={{ textAlign: 'center' }}>
              <img width="80%" style={{
                border: '1px solid #1976d2',
                borderRadius: '8px',
                margin: '1rem 0',
              }} src={DiscordStreamKitOverlay} />
            </Box>
          </Link>
          
          <h2>4. ボイスウィジェットのURLを取得</h2>
          <p>「Install for OBS」をクリックし、「VOICE WIDGET」のタブを選択</p>
          <p>「Server」と「Voice Channel」からボイスチャンネルを選択</p>
          <p>右下に表示されるURLをコピー</p>
          <p style={{ fontSize: '.8rem', color: '#666' }}>
            ※画面が見切れている場合はCtrlを押しながらスクロールして縮小して確認します
          </p>
          <Box sx={{ textAlign: 'center' }}>
            <img width="80%" src={discordUrl} />
          </Box>

          <h2>5. OBSにURLを入力</h2>
          <p>OBSに戻り、中央にあるURLの入力欄に 3. でコピーしたURLを貼り付け</p>
          <Box sx={{ textAlign: 'center' }}>
            <img width="80%" src={obs_empty} />
          </Box>

          <h2>6. カスタムCSSを作成</h2>
          <p>アイコン外観変更ジェネレーターで好みの見た目を決めたあと、下に表示されるCSSをコピー</p>
          <Box sx={{ textAlign: 'center' }}>
            <img width="80%" src={copyCss} />
          </Box>

          <h2>7. OBSにカスタムCSSを入力</h2>
          <p>OBSに戻り、URLの少し下にあるカスタムCSSの入力欄に 5. でコピーしたカスタムCSSを貼り付け</p>
          <Box sx={{ textAlign: 'center' }}>
            <img width="80%" src={obsCss} />
          </Box>

          <h2>8. 作成完了</h2>
          <p>ダイアログをOKで閉じて完了です<br />OBSに話している人が表示されます</p>
          <Box sx={{ textAlign: 'center' }}>
            <img width="80%" src={obsComplete} />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default TutorialButton;
