import CssMaker from './component/CssMaker'
import './App.css'
import { Box, Container, Typography } from '@mui/material';
import TutorialButton from './component/TutorialButton';

function App() {
  return (
    <div className='App-content'>
      <Header />
      <Container>
        <CssMaker />
      </Container>
      <Footer />
    </div >
  );
};
export default App

const Header = () => (
  <header>
    <Box sx={{ m: 5 }}>
      <Typography align="center" component="h1" variant="h3" paragraph>
        OBSのDiscordアイコン外観変更ジェネレーター
      </Typography>
      <Container>
        <Typography paragraph>
          Discordで通話中のメンバーをOBS Studioに表示するときに、横並びにしたりアイコンを四角にしたりするためのカスタムCSSをつくるジェネレーター
        </Typography>
        <TutorialButton />
      </Container>
    </Box>
  </header>
);
const Footer = () => (
  <footer className='App-footer'>
    <p>
      解説記事 (<a href='https://blog.alfebelow.com/entry/obs-discord-icon' target='_blank' >ブログ</a>)
      / 解説動画 (<a href='https://www.nicovideo.jp/watch/sm40224062' target='_blank' >ニコニコ動画</a> / <a href='https://youtu.be/ZXNQdsp-M0k' target='_blank' >Youtube</a>)
      / メディア紹介 (<a href='https://gigazine.net/news/20220517-obs-discord-icon-generator/' target='_blank' >GIGAZINE</a>)
    </p>
    <p>
      made by <a href='https://twitter.com/alfe_below' target='_blank' >@alfe_below</a>
      / <a href='https://github.com/alfe/obs-discord-icons-css-generator' target='_blank' >GitHub</a>
    </p>
  </footer>
);
