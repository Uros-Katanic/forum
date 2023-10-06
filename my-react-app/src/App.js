import React from 'react';
import './App.css';


function App() {
  const backgroundStyle = {
    backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-boao-asia-forum-technology-earth-asia-city-silhouette-poster-image_210932.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  }; 

  const h1Style = {
    margin: 0,
    padding: 20,
    textAlign: 'center', 
    color: 'cyan',
  };

  const centeredTrStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="container" style={backgroundStyle}>
     
        <table className="centered-table">
          <tbody>
             <tr style={centeredTrStyle} >
            
        <h1 style={h1Style} >Forum</h1>
            </tr>
            <tr>
              <td  style={{
                color : 'cyan',
              }}>Ime:</td>
              <td>
                <input type="text" name="ime" />
              </td>
            </tr>
            <tr>
              <td style={{
                color : 'cyan',
              }}>Email:</td>
              <td>
                <input type="email" name="email" />
              </td>
            </tr>
            <tr>
              <td style={{
                color : 'cyan',
              }}>Odaberi:</td>
              <td>
                <select>
                  <option value="prvi">Prvi</option>
                  <option value="drugi">Drugi</option>
                  <option value="treci">Treći</option>
                  <option value="cetvrti">Četvrti</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Pošalji</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default App;