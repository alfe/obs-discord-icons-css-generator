import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, ButtonGroup, colors, Container, Typography } from '@mui/material';
import { green, grey, purple } from '@mui/material/colors';
import CssMaker from './component/CssMaker'
import TutorialButton from './component/TutorialButton';
import './App.css'
import shadows from '@mui/material/styles/shadows';

const DISCORD_BLUE = '#5865F2';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: DISCORD_BLUE,
      },
      secondary: {
        main: green[500],
      },
      text: {
        primary: grey[50],
        secondary: grey[100],
      }
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            color: grey[900],
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            color: grey[200],
          }
        }
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            color: grey[50],
            '.Mui-selected.Mui-selected': {
              backgroundColor: '#5865F2',
              color: grey[50],
              boxShadow: shadows[2],
              borderRadius: '4px',
            },
            '.Mui-selected.Mui-selected:hover': {
              backgroundColor: '#5865F2',
              color: grey[50],
              boxShadow: shadows[2],
              borderRadius: '4px',
            }
          }
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className='App-content'>
        <Header />
        <Container>
          <CssMaker />
        </Container>
        <Footer />
      </div >
    </ThemeProvider>
  );
};
export default App

const Header = () => {
  const { t, i18n } = useTranslation("translation", { keyPrefix: "header" });
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    location.replace(`${location.origin}/${language === 'ja' ? '' : language}`)
  };
  useEffect(() => {
    switch (location.pathname) {
      case '/en': i18n.changeLanguage('en'); break;
      case '/cs': i18n.changeLanguage('cs'); break;
      case '/ct': i18n.changeLanguage('ct'); break;
      case '/ja': i18n.changeLanguage('ja'); break;
      case '':
      default:
        break;
    }
  }, [])

  return (
    <header>
      <Box sx={{ m: 5, mt: 8 }}>
        <Box sx={{
          position: 'absolute',
          right: '1rem',
          top: '0.5rem',
        }}>
          <Button
            variant={(location.pathname === '' || i18n.language==="ja") ? "contained" : "text"}
            onClick={() => changeLanguage("ja")}>
              日本語
          </Button>
          <Button
            variant={i18n.language==="en" ? "contained" : "text"}
            onClick={() => changeLanguage("en")}>
              English
          </Button>
          <Button
            variant={i18n.language==="cs" ? "contained" : "text"}
            onClick={() => changeLanguage("cs")}>
              簡体字
          </Button>
          <Button
            variant={i18n.language==="ct" ? "contained" : "text"}
            onClick={() => changeLanguage("ct")}>
              繁体字
          </Button>
        </Box>
        <Typography align="center" component="h1" variant="h3" paragraph>
          <>{t("title")}</>
        </Typography>
        <Container>
        <Typography align="center" paragraph>
            <>{t("title_anno")}</>
          </Typography>
          <Typography align="center" paragraph variant="caption">
            <a href="https://obs-discord-picture.alfebelow.com/">{t('icon_link')}</a>&emsp;/&emsp; 
            <a href="https://obs-discord-text.alfebelow.com/">{t('text_link')}</a>
            <br /><>{t('news')}</>
          </Typography>
          <TutorialButton />
        </Container>
      </Box>
    </header>
  );
};

const Footer = () => {
  const { t,i18n } = useTranslation("translation", { keyPrefix: "footer" });
  console.log(i18n)
  return (
    <footer className='App-footer'>
      <p>
        <>
        {t("commentary_article")} (
          <a href='https://blog.alfebelow.com/entry/2022/03/20/obs-discord-icon' target='_blank' >
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
        {!(i18n.language === 'cs' || i18n.language === 'ct') ? '' : (<>
          &emsp; 中文翻译 <a href='https://twitter.com/kiyomi425alice' target='_blank' >@kiyomi425alice</a>
        </>)}
      </p>
    </footer>
  );
};
