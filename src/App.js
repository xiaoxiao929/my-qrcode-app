import React from 'react';
import './App.css';
import { useTranslation } from "react-i18next";
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { Player } from 'video-react';
// 👈 關鍵：必須補上這一行，video-react 的播放器外觀才會正常！
import 'video-react/dist/video-react.css'; 

// 1. 把 Player1 定義在 App 之外（拿掉最前方的 export default）
function Player1() {
  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', borderRadius: '8px', overflow: 'hidden' }}>
      <Player
        poster='/123.jpg'
        src="/五府.mp4"
      />
    </div>
  );
}

function App() { 
  const { t, i18n } = useTranslation(); 
  
  return (
    <div className="App" style={{ textAlign: 'center', paddingBottom: '50px' }}>
      {/* 多國語系文字與按鈕區 */}
      <div>
        <h1>{t("hello")}</h1>
        <h2>{t("link")}</h2>
      </div>

      <div>
        <button onClick={() => i18n.changeLanguage('en')} type="button" style={{ margin: '0 5px' }}>
          英文
        </button>
        <button onClick={() => i18n.changeLanguage('zh')} type="button" style={{ margin: '0 5px' }}>
          中文
        </button>
        <button onClick={() => i18n.changeLanguage('es')} type="button" style={{ margin: '0 5px' }}>
          西班牙文
        </button>
      </div>

      <hr style={{ width: '60%', margin: '30px auto', borderColor: '#eee' }} />

      

      {/* QR Code 顯示區 */}
      <div>
        <h2>SVG QRcode</h2>
        <div style={{ background: 'white', padding: '10px', display: 'inline-block', borderRadius: '4px' }}>
          <QRCodeSVG value={`${window.location.origin}/0918.jpg`} size={150} />        
        </div>

        <h2>Canvas QRcode</h2>
        <div style={{ background: 'white', padding: '10px', display: 'inline-block', borderRadius: '4px' }}>
          <QRCodeCanvas value="https://drive.google.com/file/d/1iViON-d-v718i8v0HraSQqAAhC0lUoIc/view?usp=sharing" size={150} />
        </div>
      </div>
      {/* 2. 影片播放器放這裡（呼叫上面的 Player1） */}
      <div>
        <h2>影片播放器</h2>
        <Player1 />
      </div>

      <hr style={{ width: '60%', margin: '30px auto', borderColor: '#eee' }} />
    </div>
    
  );
}

export default App;