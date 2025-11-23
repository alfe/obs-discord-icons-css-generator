import React from 'react'
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import cssObj, { setIconSpeakingStyle } from '../lib/cssObj'
import { getCssText } from '../lib/cssText'
import { getCssKeyFrames } from '../lib/getCssKeyFrames';
import CheckBoxListItem from './CheckBoxListItem';
import ColorPickerListItem from './ColorPickerListItem';
import CssString from './CssString';
import DiscordIconPreview, { CustomStyle } from './DiscordIconPreview'
import InputArea from './InputArea'
import InputUserIdForm from './InputUserIdForm';
import SelectorListItem from './SelectorListItem'
import SelectorToggleButtonGroup from './SelectorToggleButtonGroup';
import SliderListItem from './SliderListItem'
import Typography from '@mui/material/Typography';
import TutorialButton from './TutorialButton';

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
    avatar: {
      marginRight: '0',
    },
    avatarSpeaking: {},
    name: {},
  });

  const [alignment, setAlignment] = React.useState('vertical');
  const [activeNamePosition, setActiveNamePosition] = React.useState(true);
  const [speakingStyles, setSpeakingStyles] = React.useState(['border']);
  const [animationColor, setAnimationColor] = React.useState('#FFFFFF');
  const [hiddenUserId, setHiddenUserId] = React.useState('');
  const { t } = useTranslation("translation", { keyPrefix: "css_maker" });
  console.log(styles)

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <SectionTitle index={1} title={t("appearance_settings")} />
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
                { value: 'tall', label: t('tall') },
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
      <Grid size={6} sx={{ overflow: 'hidden' }}>
        <SectionTitle index={2} title={t("check_preview")} />
        <DiscordIconPreview styles={styles} />
      </Grid>
      <Grid size={12}>
        <SectionTitle index={3} title={t("copy_css")} />
        <CssString value={getCssText({ styles, speakingStyles, animationColor, hiddenUserId })} />
      </Grid>
      <Grid size={12}>
        <SectionTitle index={4} title={t("paste_obs")} />
        <InputArea>
          <Typography variant="body1" component="p" sx={{ my: 2 }}>
            {t("paste_obs_description")}
          </Typography>
          <TutorialButton />
        </InputArea>
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

const SectionTitle = ({ index, title }: { index: number, title: string }) => {
  return (
    <Typography variant="h6" component="h2" sx={{
      fontSize: '1.5rem',
      fontWeight: 'bold',
      padding: '.25rem 1rem',
      mb: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderRadius: '4px',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      }}>
      {index}. {title}
    </Typography>
  );
};