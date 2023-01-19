import React from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import { useTranslation } from "react-i18next";
import cssObj, { setIconSpeakingStyle } from '../lib/cssObj'
import { getCssText } from '../lib/cssText'
import DiscordIconPreview, { CustomStyle } from './DiscordIconPreview'
import SelectorListItem from './SelectorListItem'
import InputArea from './InputArea'
import SliderListItem from './SliderListItem'
import CssString from './CssString';
import Box from '@mui/material/Box';
import CheckBoxListItem from './CheckBoxListItem';
import Divider from '@mui/material/Divider';
import InputUserIdForm from './InputUserIdForm';
import SelectorToggleButtonGroup from './SelectorToggleButtonGroup';
import ColorPickerListItem from './ColorPickerListItem';
import { getCssKeyFrames } from '../lib/getCssKeyFrames';

const CssMaker = () => {
  const [styles, setStyles] = React.useState<CustomStyle>({
    voiceContainer: {},
    voiceStates: {
      display: 'flex',
      flexDirection: 'column',
    },
    voiceState: {
      display: 'flex',
      height: 'initial',
      marginBottom: '0',
    },
    avatar: {},
    avatarSpeaking: {},
    name: {},
  });

  const [alignment, setAlignment] = React.useState('vertical');
  // const [activeMove, setActiveMove] = React.useState(false);
  const [activeNamePosition, setActiveNamePosition] = React.useState(true);
  const [speakingStyles, setSpeakingStyles] = React.useState(['border']);
  const [animationColor, setAnimationColor] = React.useState('#FFFFFF');
  const [hiddenUserId, setHiddenUserId] = React.useState('');
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
            {alignment === 'horizontal' && (
              <Box sx={{ ml: 2 }}>
                <SliderListItem
                  title={t("icon_row_gap")}
                  disabled={alignment !== 'horizontal'}
                  min={0}
                  onChange={(val) => cssObj.iconRowGap({val, styles, setStyles})} />
                <SliderListItem
                  title={t("icon_column_gap")}
                  disabled={alignment !== 'horizontal'}
                  min={0}
                  onChange={(val) => cssObj.iconColumnGap({val, styles, setStyles})} />
              </Box>
            )}
            <Divider />
            <SelectorListItem
              title={t("icon_shape")}
              onChange={(val) => cssObj.iconShape({val, styles, setStyles})}
              options={[
                { value: 'circle', label: t('circle') },
                { value: 'rect-r', label: t('rounded') },
                { value: 'rect', label: t('square') },
              ]} />
            <SelectorListItem
              title={t("icon_size")}
              onChange={(val) => cssObj.iconSize({val, styles, setStyles})}
              options={[
                { value: 'normal', label: t('normal') },
                { value: 'lg', label: t('large') },
                { value: 'xg', label: t('huge') },
              ]} />
              
            <SelectorToggleButtonGroup
              title={t("movement")}
              onChange={(val) => {
                setSpeakingStyles(val);
                setIconSpeakingStyle({val, animationColor, styles, setStyles});
              }}
              options={[
                { value: 'border', label: t('border') },
                { value: 'light', label: t('blinking') },
                { value: 'jump', label: t('jump') },
              ]} />

            {(speakingStyles.includes('light') || speakingStyles.includes('jump')) && (
              <Box sx={{ ml: 2 }}>
                <SliderListItem
                  title={t("speed_of_movement")}
                  onChange={(val) => cssObj.iconSpeakingDuration({val, styles, setStyles})} />
              </Box>
            )}
            
            {(speakingStyles.includes('light') || speakingStyles.includes('border')) && (
              <Box sx={{ ml: 2 }}>
                <ColorPickerListItem
                  title={t("color")}
                  defaultValue={animationColor}
                  onChange={(value) => {
                    setAnimationColor(`${value}`);
                    setIconSpeakingStyle({ val: speakingStyles, animationColor, styles, setStyles });
                  }} />
              </Box>
            )}
            <Divider />
            <CheckBoxListItem
              title={t("name")}
              onChange={(value: boolean) => {
                const val = value ? 'exist' : 'hidden';
                cssObj.nameVisibility({val, styles, setStyles});
                setActiveNamePosition(val === 'exist');
              }} />
            {activeNamePosition && (
              <Box sx={{ ml: 2 }}>
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
              </Box>
            )}
            <Divider />
            <InputUserIdForm
              title={t("hide_particular_user")}
              onChange={(userId) => setHiddenUserId(userId)} />
          </List>
        </InputArea>
        <AnimationStyle
          speakingStyles={speakingStyles}
          animationColor={animationColor} />
      </Grid>
      <Grid item md={6} xs={12} sx={{ overflow: 'hidden' }}>
        <DiscordIconPreview styles={styles} />
      </Grid>
      <Grid item xs={12}>
        <CssString value={getCssText({ styles, speakingStyles, animationColor, hiddenUserId })} />
      </Grid>
    </Grid>
  );
};
export default CssMaker;

type AnimationStyleProps = {
  speakingStyles: string[];
  animationColor: string;
};
const AnimationStyle = ((props: AnimationStyleProps) => {
  if ((props.speakingStyles || []).length === 0 || !props.animationColor) return null;
  return (
    <><style>{getCssKeyFrames(props.speakingStyles, props.animationColor)}</style></>
  );
});
