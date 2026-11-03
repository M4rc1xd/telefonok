import { useEffect, useState } from 'react'

const URL = '../../public/phones.json'

type Telefon = {
        id: number,
        nev: string,
        gyarto: string,
        ar: number,
        memoria: number,
    }

export default function Users() {
    const [telefonok, setTelefonok] = useState<Telefon[]>([])

    useEffect ( () => {
        async function adatokBetoltese () {
            try {
                const valasz = await fetch(URL)
                const adatok:Telefon[] = await valasz.json()
                setTelefonok(adatok)
            } catch (err) {
                console.log(err)
            }
        }
      adatokBetoltese()
    },[] )

    return (
        <>
        <h2>Telefonok</h2>
        <ul>
            {telefonok.map( (telefon) => (
                <li key={telefon.id}>
                    {telefon.nev} - {telefon.gyarto} - {telefon.ar} Ft - {telefon.memoria} GB
                </li>
            ))}
        </ul>
        </>
    )
}

