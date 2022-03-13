import React from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import TextField from '@mui/material/TextField'
import cssObj from '../lib/cssObj'
import { getCssText } from '../lib/cssText'
import DiscordIconPreview, { CustomStyle } from './DiscordIconPreview'
import SelectorListItem from './SelectorListItem'
import InputArea from './InputArea'
import SliderListItem from './SliderListItem'

const CssMaker = () => {
  const [styles, setStyles] = React.useState<CustomStyle>({
    voiceContainer: {},
    voiceStates: {},
    voiceState: {},
    avatar: {},
    speaking: {},
    name: {},
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <InputArea>
          <List>
            <SelectorListItem
              title="アイコンの並び"
              onChange={(val) => cssObj.iconAlign({val, styles, setStyles})}
              options={[
                { value: 'vertical', label: '縦並び' },
                { value: 'horizontal', label: '横並び' },
              ]} />
            <SelectorListItem
              title="アイコンの形"
              onChange={(val) => cssObj.iconShape({val, styles, setStyles})}
              options={[
                { value: 'circle', label: '○ 丸' },
                { value: 'rect-r', label: '□ 角丸四角' },
                { value: 'rect', label: '□ 四角' },
              ]} />
            <SelectorListItem
              title="話すときの動き"
              onChange={(val) => cssObj.iconSpeaking({val, styles, setStyles})}
              options={[
                { value: 'border', label: '縁取り' },
                { value: 'light', label: '点滅' },
                { value: 'jump', label: 'ぴょこぴょこ' },
              ]} />
              <SelectorListItem
                title="アイコンの大きさ"
                onChange={(val) => cssObj.iconSize({val, styles, setStyles})}
                options={[
                  { value: 'normal', label: '標準' },
                  { value: 'lg', label: '大きい' },
                  { value: 'xg', label: 'とても大きい' },
                ]} />
              <SelectorListItem
                title="名前"
                onChange={(val) => cssObj.nameVisibility({val, styles, setStyles})}
                options={[
                  { value: 'exist', label: 'あり' },
                  { value: 'hidden', label: 'なし' },
                ]} />
              <SliderListItem
                title="名前の位置（上下）"
                onChange={(val) => cssObj.namePositionVertical({val, styles, setStyles})} />
              <SliderListItem
                title="名前の位置（左右）"
                onChange={(val) => cssObj.namePositionHorizontal({val, styles, setStyles})} />
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
  );
};
export default CssMaker;
