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
      made by <a href='https://twitter.com/alfe_below' target='_blank' >@alfe_below</a>
    </p>
  </footer>
);
