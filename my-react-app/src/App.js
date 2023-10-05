import React from 'react';
import './App.css';


function App() {
  const backgroundStyle = {
    backgroundImage: "url('./pictures/background-forum.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  }; 
  return (
    <div className="container" style={backgroundStyle}>
      <h1  style={{
        margin:0,
        padding:0,
      }} >Forum</h1>
        <table className="centered-table">
          <tbody>
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