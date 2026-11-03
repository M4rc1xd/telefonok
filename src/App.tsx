import { useState, useEffect } from 'react'
import Users from './components/users'

function App() {
  const [szamlalo, setSzamlalo] = useState(Number(localStorage.getItem("szamlalo") || 0))
  const [nev, setNev] = useState(String(localStorage.getItem("nev") || "pista"))


  useEffect( () => {
    console.log("1. effect: minden rendereles utan")
  })

  useEffect ( () => {
    console.log("2. effect: elso megjelenites")
  }, [] )

  useEffect ( () => {
    // localStorage.setItem("szamlalo", szamlalo.toFixed())
    document.title = `${szamlalo} - ${nev}`
    console.log("3. effect: szamlalo valtozas")
  }, [szamlalo, nev])


  return (
    <>
    <h1>React hookok: useeffect</h1>
    <p>ertek: {szamlalo}</p>
    <p>nev: {nev}</p>
    <button onClick={() => setSzamlalo(szamlalo + 1)}>novel</button>
    <button onClick={() => setNev("kati")}>nev modositasa</button>
    <Users />
    </>
  )
}

export default App