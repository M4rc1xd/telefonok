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
        <table>
            <tr>
                <th>Nev</th>
                <th>Gyarto</th>
                <th>Ar</th>
                <th>Memoria</th>
            </tr>
            {telefonok.map( (telefon) => (
                <tr key={telefon.id}>
                    <td>{telefon.nev}</td>
                    <td>{telefon.gyarto}</td>
                    <td>{telefon.ar} Ft</td>
                    <td>{telefon.memoria} GB</td>
                </tr>
            ))}
            </table>

        </>
    )
}

