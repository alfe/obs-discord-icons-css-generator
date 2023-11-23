import React from 'react';
import { useTranslation } from 'react-i18next';
import './animation.css'
import './Discord.css'
// https://discord.com/branding
import DiscordIcon from './Discord-icon.svg'

export type CustomStyle = {
  voiceContainer?: { [key: string]: string },
  voiceStates?: { [key: string]: string };
  voiceState?: { [key: string]: string };
  avatar?: { [key: string]: string };
  avatarSpeaking?: { [key: string]: string };
  user?: { [key: string]: string };
  name?: { [key: string]: string };
}
export type DiscordIconPreviewProps = {
  styles: CustomStyle,
}
const DiscordIconPreview = ({ styles }: DiscordIconPreviewProps) => {
  const [speaking, setSpeaking] = React.useState(true);
  const { t } = useTranslation("translation", { keyPrefix: "preview" });
  return (
    <div id="app-mount">
      <div style={{
        fontFamily: 'Whitney, sans-serif',
        backgroundColor: 'transparent',
      }} data-reactid=".0">
        <div className="voice-container" style={styles.voiceContainer} data-reactid=".0.0">
          <ul className="voice-states" style={styles.voiceStates} data-reactid=".0.0.0">
            <User userId="739080466790875187" backgroundColor="#5865F2" styles={styles} userName={t('user_click_to_switch')} speaking={speaking} onClick={() => setSpeaking(!speaking)} />
            <User userId="739080466790875187" backgroundColor="#57F287" styles={styles} userName={t('user')} />
            <User userId="739080466790875187" backgroundColor="#f7a000" styles={styles} userName={t('user_always_talking')} speaking />
            <User userId="739080466790875187" backgroundColor="#EB459E" styles={styles} userName={t('user_always_talking')} speaking />
            <User userId="739080466790875187" backgroundColor="#ED4245" styles={styles} userName={t('user')} />
            <User userId="739080466790875187" backgroundColor="#5865F2" styles={styles} userName={t('user')} />
            <User userId="739080466790875187" backgroundColor="#57F287" styles={styles} userName={t('user')} />
            <User userId="739080466790875187" backgroundColor="#f7a000" styles={styles} userName={t('user')} />
            <User userId="739080466790875187" backgroundColor="#EB459E" styles={styles} userName={t('user')} />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DiscordIconPreview;

type UserProps = {
  userId: string;
  userName: string;
  backgroundColor: string;
  speaking?: boolean;
  src?: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  styles: CustomStyle;
}
const User = ({ userId, userName, backgroundColor, speaking, src, onClick, styles }: UserProps) => {
  return (
    <li className="voice-state" style={styles.voiceState} data-reactid={`.0.0.0.$${userId}/=1$${userId}`} onClick={onClick}>
      <img
        className={`avatar ${speaking ? 'speaking' : ''}`}
        src={src || DiscordIcon}
        style={{ ...styles.avatar, ...(speaking ? styles.avatarSpeaking : {}), ...(!backgroundColor ? {} : { background: backgroundColor }) }}
        data-reactid={`.0.0.0.$${userId}/=1$${userId}.$=10`} />
      <div className="user" style={styles.user} data-reactid={`.0.0.0.$${userId}/=1$${userId}.$/=11`}>
        <span
          className="name"
          style={{
            color: '#ffffff',
            fontSize: 14,
            backgroundColor: 'rgba(30, 33, 36, 0.95)',
            ...styles.name,
          }}
          data-reactid={`.0.0.0.$${userId}/=1$${userId}.$/=11.0`}>
          {userName}
        </span>
      </div>
    </li>
  );
};
