import React from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import { useTranslation } from "react-i18next";
import cssObj from '../lib/cssObj'
import { getCssText } from '../lib/cssText'
import DiscordIconPreview, { CustomStyle } from './DiscordIconPreview'
import SelectorListItem from './SelectorListItem'
import InputArea from './InputArea'
import SliderListItem from './SliderListItem'
import CssString from './CssString';

const CssMaker = () => {
  const [styles, setStyles] = React.useState<CustomStyle>({
    voiceContainer: {},
    voiceStates: {},
    voiceState: {},
    avatar: {},
    speaking: {},
    name: {},
  });

  const [alignment, setAlignment] = React.useState('vertical');
  const [activeMove, setActiveMove] = React.useState(false);
  const [activeNamePosition, setActiveNamePosition] = React.useState(true);
  const { t } = useTranslation("translation", { keyPrefix: "css_maker" });
  console.log(styles)

  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <InputArea>
          <List>
            <SelectorListItem
              title={t("icon_alignment")}
              onChange={(val) => {
                cssObj.iconAlign({val, styles, setStyles});
                setAlignment(val);
              }}
              options={[
                { value: 'vertical', label: t('vertical') },
                { value: 'horizontal', label: t('horizontal') },
              ]} />
            <SliderListItem
              title={t("top_and_bottom")}
              disabled={alignment !== 'horizontal'}
              min={0}
              onChange={(val) => cssObj.iconRowGap({val, styles, setStyles})} />
            <SliderListItem
              title={t("left_right")}
              disabled={alignment !== 'horizontal'}
              min={0}
              onChange={(val) => cssObj.iconColumnGap({val, styles, setStyles})} />
            <SelectorListItem
              title={t("icon_shape")}
              onChange={(val) => cssObj.iconShape({val, styles, setStyles})}
              options={[
                { value: 'circle', label: t('circle') },
                { value: 'rect-r', label: t('rounded') },
                { value: 'rect', label: t('square') },
              ]} />
            <SelectorListItem
              title={t("movement")}
              onChange={(val) => {
                cssObj.iconSpeaking({val, styles, setStyles});
                setActiveMove(val !== 'border');
              }}
              options={[
                { value: 'border', label: t('border') },
                { value: 'light', label: t('blinking') },
                { value: 'jump', label: t('jump') },
              ]} />
            <SliderListItem
              title={t("speed_of_movement")}
              disabled={!activeMove}
              onChange={(val) => cssObj.iconSpeakingDuration({val, styles, setStyles})} />
            <SelectorListItem
              title={t("icon_size")}
              onChange={(val) => cssObj.iconSize({val, styles, setStyles})}
              options={[
                { value: 'normal', label: t('normal') },
                { value: 'lg', label: t('large') },
                { value: 'xg', label: t('huge') },
              ]} />
            <SelectorListItem
              title={t("name")}
              onChange={(val) => {
                cssObj.nameVisibility({val, styles, setStyles});
                setActiveNamePosition(val === 'exist');
              }}
              options={[
                { value: 'exist', label: t('show') },
                { value: 'hidden', label: t('none') },
              ]} />
            <SelectorListItem
              title={t("look_of_the_name")}
              onChange={(val) => cssObj.nameStyle({val, styles, setStyles})}
              disabled={!activeNamePosition}
              options={[
                { value: 'blackBk', label: t('black_base') },
                { value: 'bordering', label: t('border') },
                { value: 'none', label: t('text_only') },
              ]} />
            <SliderListItem
              title={t("top_and_bottom")}
              disabled={!activeNamePosition}
              onChange={(val) => cssObj.namePositionVertical({val, styles, setStyles})} />
            <SliderListItem
              title={t("left_right")}
              disabled={!activeNamePosition}
              onChange={(val) => cssObj.namePositionHorizontal({val, styles, setStyles})} />
          </List>
        </InputArea>
      </Grid>
      <Grid item md={6} xs={12} sx={{ overflow: 'hidden' }}>
        <DiscordIconPreview styles={styles} />
      </Grid>
      <Grid item xs={12}>
        <CssString value={getCssText(styles)} />
      </Grid>
    </Grid>
  );
};
export default CssMaker;
