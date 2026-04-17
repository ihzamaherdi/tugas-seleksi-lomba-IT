import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const calonPeserta = [
    { nama: 'Tariq', nilaiUjian: 85 },
    { nama: 'Ziyad', nilaiUjian: 60 },
    { nama: 'Aisyah', nilaiUjian: 92 },
    { nama: 'Fulan', nilaiUjian: 70 },
    { nama: 'Khadijah', nilaiUjian: 88 }
    ];

    const pesertaLolos = calonPeserta.filter((peserta)=> peserta.nilaiUjian >= 80);
console.log("Peserta Lolos:", pesertaLolos);

const daftarNamaLolos = pesertaLolos.map((peserta)=> peserta.nama);
console.log("Daftar Peserta Lolos:", daftarNamaLolos);

  return (
    <>
     <div>
      <h1>Seleksi Lomba</h1>

      <h2>Peserta Lomba</h2>
      <ul>{calonPeserta.map ((peserta) =>(
        <li>{peserta.nama}</li>
      ))}
      </ul>

       <h2>peserta Lolos</h2>
      <ul>
      {
       pesertaLolos.map ((peserta, index) => (
      <li>{peserta.nama} - {peserta.nilaiUjian}</li>
       ))
       }
      </ul>
     </div>
    </>
  )
}

export default App
