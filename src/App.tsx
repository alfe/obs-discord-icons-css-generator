import CssMaker from './component/CssMaker'
import './App.css'
import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";
import TutorialButton from './component/TutorialButton';
import { useEffect } from 'react';

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

const Header = () => {
  const { t, i18n } = useTranslation("translation", { keyPrefix: "header" });
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    location.replace(`${location.origin}/${language === 'ja' ? '' : language}`)
  };
  const setLanguage = () => {
    const language = i18n.language;
    if ((location.pathname === '' || location.pathname === '/') && language === 'ja') {
      return;
    }
    if (location.pathname === '/ja') {
      changeLanguage('ja');
    }
    if ((location.pathname !== '' && location.pathname !== '/') && location.pathname !== '/ja' && (location.pathname.substring(1) !== language)) {
      changeLanguage(location.pathname.substring(1));
    }
  }
  useEffect(() => {
    setLanguage();
  }, []);

  return (
    <header>
      <Box sx={{ m: 5 }}>
        <ButtonGroup sx={{
          position: 'absolute',
          right: '2rem',
          top: '1rem',
        }}>
          <Button
            variant={i18n.language==="ja" ? "contained" : "outlined"}
            onClick={() => changeLanguage("ja")}>
              日本語
          </Button>
          <Button
            variant={i18n.language==="en" ? "contained" : "outlined"}
            onClick={() => changeLanguage("en")}>
              English
          </Button>
        </ButtonGroup>
        <Typography align="center" component="h1" variant="h3" paragraph>
          <>{t("title")}</>
        </Typography>
        <Container>
        <Typography align="center" paragraph>
            <>{t("title_anno")}</>
          </Typography>
          <Typography align="center" paragraph variant="caption">
            <>※ 2022.12.22 「特定のユーザを隠す」機能を追加しました</> / 
            <a href="https://obs-discord-picture.alfebelow.com/">アイコンから立ち絵に変えたいときはこちら</a> /
            <a href="https://obs-discord-text.alfebelow.com/">テキストチャンネルの見た目を変えたいときはこちら</a>
          </Typography>
          <TutorialButton />
        </Container>
      </Box>
    </header>
  );
};

const Footer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });
  return (
    <footer className='App-footer'>
      <p>
        <>
        {t("commentary_article")} (
          <a href='https://blog.alfebelow.com/entry/obs-discord-icon' target='_blank' >
            <>{t("blog")}</>
          </a>)
          /
          {t("commentary_video")} (
            <a href='https://www.nicovideo.jp/watch/sm40224062' target='_blank' >
              <>{t("niconico")}</>
            </a>
            /
            <a href='https://youtu.be/ZXNQdsp-M0k' target='_blank' >
              <>{t("youtube")}</>
            </a>)
          /
          {t("media_introduction")} (
            <a href='https://gigazine.net/news/20220517-obs-discord-icon-generator/' target='_blank' >
              <>{t("gigazine")}</>
            </a>)
        </>
      </p>
      <p>
        made by <a href='https://twitter.com/alfe_below' target='_blank' >@alfe_below</a>
        / <a href='https://github.com/alfe/obs-discord-icons-css-generator' target='_blank' >GitHub</a>
      </p>
    </footer>
  );
};
