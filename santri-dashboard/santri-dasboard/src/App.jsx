import './App.css'
import SantriList from './components/SantriList'

function App() {
  const daftarSantri = [
    {nama: 'sugenk', nilai:70, kehadiran:90},
    {nama: 'sigit', nilai:60, kehadiran:75},
    {nama: 'lipan', nilai:70, kehadiran:100},
    {nama: 'wibowo', nilai:85, kehadiran:65},
    {nama: 'erpen', nilai:100, kehadiran:80},
    {nama: 'adhie', nilai:95, kehadiran:95},
  ]

  return (
   
    <div style={{ padding: "20px"}}>
      <h1>💋 Dashboard Santri</h1>

      <SantriList data={daftarSantri} />
    </div>
    
  )
}

export default App
