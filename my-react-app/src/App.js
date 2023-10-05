import React from 'react';
import './App.css';


function App() {
  const backgroundStyle = {
    backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-boao-asia-forum-technology-earth-asia-city-silhouette-poster-image_210932.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  }; 
  return (
    <div className="container" style={backgroundStyle}>
     
        <table className="centered-table">
          <tbody> <tr style={{
            
          }} ><h1  style={{
        margin:0,
        padding:0,
      }} >Forum</h1>
            </tr>
            <tr>
              <td>Ime:</td>
              <td>
                <input type="text" name="ime" />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input type="email" name="email" />
              </td>
            </tr>
            <tr>
              <td>Odaberi:</td>
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