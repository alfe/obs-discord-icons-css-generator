import './animation.css'
import './Discord.css'

const ALFE_IMG_URL = "https://cdn.discordapp.com/avatars/739080466790875187/7f5f725b7de03aedfde45417e164a927.jpg";

export type CustomStyle = {
  voiceContainer: { [key: string]: string | number },
  voiceStates: { [key: string]: string | number };
  voiceState: { [key: string]: string | number };
  avatar: { [key: string]: string | number };
  speaking: { [key: string]: string | number };
  name: { [key: string]: string | number };
}
type DiscordIconPreviewProps = {
  styles: CustomStyle,
}
const DiscordIconPreview = ({ styles }: DiscordIconPreviewProps) => {
  return (
    <div id="app-mount">
      <div style={{
        fontFamily: 'Whitney, sans-serif',
        backgroundColor: 'transparent',
      }} data-reactid=".0">
        <div className="voice-container" style={styles.voiceContainer} data-reactid=".0.0">
          <ul className="voice-states" style={styles.voiceStates} data-reactid=".0.0.0">
            <User userId="739080466790875187" styles={styles} userName="あるふ（話し中）" speaking />
            <User userId="789526218957389834" styles={styles} userName="あるふ" />
            <User userId="739080466790875187" styles={styles} userName="あるふ（とてもお話し中）" speaking />
            <User userId="739080466790875187" styles={styles} userName="あるふ" />
            <User userId="739080466790875187" styles={styles} userName="あるふ" />
            <User userId="739080466790875187" styles={styles} userName="あるふ" />
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
  speaking?: boolean;
  styles: CustomStyle;
}
const User = ({ userId, userName, speaking, styles }: UserProps) => {
  return (
    <li className="voice-state" style={styles.voiceState} data-reactid={`.0.0.0.$${userId}/=1$${userId}`}>
      <img
        className={`avatar ${speaking ? 'speaking' : ''}`}
        src={ALFE_IMG_URL}
        style={{ ...styles.avatar, ...(speaking ? styles.speaking : {}) }}
        data-reactid={`.0.0.0.$${userId}/=1$${userId}.$=10`} />
      <div className="user" data-reactid={`.0.0.0.$${userId}/=1$${userId}.$/=11`}>
        <span
          className=" name"
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
