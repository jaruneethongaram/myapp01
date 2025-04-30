import logo from './logo.svg';
import reactLogo from './images/logo-reactjs.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ทดสอบการแสดงผลบนหน้าเว็บ
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Home() {
  return (
    <div>
      ทดสอบสร้าง Home ขึ้นมาแสดงผล
    </div>
  );
}

function About() {
  return (
    <div>
      <h3 className="bg-lightblue title">
        React คืออะไร ?</h3>
        <div className='content'>
          React เป็นไลบรารี JavaScript ที่พัฒนาโดย Facebook เพื่อช่วยสร้าง User Interface (UI) ที่มีประสิทธิภาพ โดย React มุ่งเน้นการสร้าง Component ซึ่งเป็นส่วนประกอบของ UI ที่สามารถใช้ซ้ำได้ และแต่ละ Component สามารถเก็บสถานะ (state) และเมทอด (methods) ต่างๆ เพื่อการจัดการกับข้อมูลและการแสดงผล
        </div>
        <div>
          <img 
            src={reactLogo} 
            className="App-logo" 
            alt="React Logo" />
        </div>
    </div>
  );
}

/*
หากรูปภาพอยู่ในโฟลเดอร์ public ใช้
<img src="/logo-reactjs.png" />
*/

export default About;




