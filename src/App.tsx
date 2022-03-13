import CssMaker from './component/CssMaker'
import './App.css'

function App() {
  return (
    <div className='App-content'>
      <Header />
      <CssMaker />
      <Footer />
    </div >
  );
};
export default App

const Header = () => (
  <header>
    <h1>OBSのDiscordアイコンの見た目変更ジェネレータ</h1>
  </header>
);
const Footer = () => (
  <footer className='App-footer'>
    <p>
      made by <a href='https://twitter.com/alfe_below' target='_blank' >@alfe_below</a>
    </p>
  </footer>
);