import React from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import TextField from '@mui/material/TextField'
import { getCssText } from './lib/cssText'
import DiscordIconPreview, { CustomStyle } from './component/DiscordIconPreview'
import SelectorListItem from './component/SelectorListItem'
import InputArea from './component/InputArea'
import './App.css'

function App() {
  const [styles, setStyles] = React.useState<CustomStyle>({
    voiceContainer: {},
    voiceStates: {},
    voiceState: {},
    avatar: {},
    speaking: {},
    name: {},
  });

  const handleSetAvatar = (value: { [key: string]: string; }) => {
    setStyles({ ...styles, avatar: { ...styles.avatar, ...value } })
  };

  return (
    <div className='App-header'>
      <h1>OBSのDiscordアイコンの見た目変更ジェネレータ</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputArea>
            <List>
              <SelectorListItem
                title="アイコンの並び"
                onChange={(val) => {
                  switch (val) {
                    case 'horizontal':
                      setStyles({
                        ...styles,
                        voiceStates: {
                          display: 'flex',
                        },
                        voiceState: {
                          ...styles.voiceState,
                          display: 'flex',
                          flexDirection: 'column',
                        },
                        name: {
                          maxWidth: styles?.avatar?.width || '64px',
                          boxSizing: 'border-box',
                          textOverflow: 'clip',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          display: 'block',
                          textAlign: 'center',
                        }
                      });
                      break;
                    default:
                      setStyles({
                        ...styles,
                        voiceStates: {
                          display: 'block',
                        },
                        voiceState: {
                          ...styles.voiceState,
                          display: 'block',
                          flexDirection: 'unset',
                        },
                        name: {
                          maxWidth: styles?.avatar?.width || '100%',
                          boxSizing: 'none',
                          textOverflow: 'clip',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          display: 'initial',
                        }
                      });
                      break;
                  }
                  return {}
                }}
                options={[
                  { value: 'vertical', label: '縦並び' },
                  { value: 'horizontal', label: '横並び' },
                ]} />
              <SelectorListItem
                title="アイコンの形"
                onChange={(val) => handleSetAvatar({
                  borderRadius: (val === 'rect') ? '0' 
                              : (val === 'rect-r') ? '8px' : '50%',
                })}
                options={[
                  { value: 'circle', label: '○ 丸' },
                  { value: 'rect-r', label: '□ 角丸四角' },
                  { value: 'rect', label: '□ 四角' },
                ]} />
              <SelectorListItem
                title="話すときの動き"
                onChange={(val) => {
                  switch (val) {
                    case 'light':
                      setStyles({
                        ...styles,
                        avatar: {
                          ...styles.avatar,
                          filter: 'brightness(70%)',
                        },
                        speaking: {
                          position: 'relative',
                          animation: '300ms infinite alternate speak-light',
                          filter: 'brightness(100%)',
                          borderColor: 'rgba(255,255,255,.5)', // !important
                        }
                      });
                      break;
                    case 'jump':
                      setStyles({
                        ...styles,
                        avatar: {
                          ...styles.avatar,
                          filter: 'brightness(70%)',
                        },
                        speaking: {
                          position: 'relative',
                          animation: '300ms infinite alternate ease-in-out speak-jump',
                          filter: 'brightness(100%)',
                          borderColor: 'transparent', // !important
                        }
                      });
                      break;
                    default:
                      setStyles({
                        ...styles,
                        avatar: {
                          ...styles.avatar,
                          filter: 'none',
                        },
                        speaking: {
                          position: 'initial',
                          animation: 'none',
                          filter: 'none',
                          borderColor: '#43b581', // !important
                        }
                      });
                      break;
                  }
                  return {};
                }}
                options={[
                  { value: 'border', label: '縁取り' },
                  { value: 'light', label: '点滅' },
                  { value: 'jump', label: 'ぴょこぴょこ' },
                ]} />
                <SelectorListItem
                  title="アイコンの大きさ"
                  onChange={(val) => {
                    switch (val) {
                      case 'lg':
                        setStyles({
                          ...styles,
                          avatar: {
                            ...styles.avatar,
                            width: '80px',
                            height: '80px',
                          },
                          voiceState: {
                            ...styles.voiceState,
                            height: '80px',
                          },
                          name: {
                            ...styles.name,
                            maxWidth: '80px',
                          },
                        });
                        break;
                      case 'xg':
                        setStyles({
                          ...styles,
                          avatar: {
                            ...styles.avatar,
                            width: '96px',
                            height: '96px',
                          },
                          voiceState: {
                            ...styles.voiceState,
                            height: '96px',
                          },
                          name: {
                            ...styles.name,
                            maxWidth: '96px',
                          },
                        });
                        break;
                      default:
                        setStyles({
                          ...styles,
                          avatar: {
                            ...styles.avatar,
                            width: '64px',
                            height: '64px',
                          },
                          voiceState: {
                            ...styles.voiceState,
                            height: '64px',
                          },
                          name: {
                            ...styles.name,
                            maxWidth: '64px',
                          },
                        });
                        break;
                    }
                  }}
                  options={[
                    { value: 'normal', label: '標準' },
                    { value: 'lg', label: '大きい' },
                    { value: 'xg', label: 'とても大きい' },
                  ]} />
                <SelectorListItem
                  title="名前"
                  onChange={(val) => {
                    switch (val) {
                      case 'exist':
                        setStyles({
                          ...styles,
                          name: {
                            ...styles.name,
                            visibility: 'visible',
                          },
                        });
                        break;
                      default:
                        setStyles({
                          ...styles,
                          name: {
                            ...styles.name,
                            visibility: 'hidden',
                          },
                        });
                        break;
                    }
                  }}
                  options={[
                    { value: 'exist', label: 'あり' },
                    { value: 'hidden', label: 'なし' },
                  ]} />
            </List>
          </InputArea>
        </Grid>
        <Grid item xs={6} sx={{ overflow: 'hidden' }}>
          <DiscordIconPreview styles={styles} />
        </Grid>
        <Grid item xs={12}>
          <InputArea>
            <TextField
              fullWidth
              multiline
              value={getCssText(styles)} />
          </InputArea>
        </Grid>
      </Grid>
    </div >
  );
};
export default App
