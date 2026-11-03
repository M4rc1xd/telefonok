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
    const [asc, setAsc] = useState(true)

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


    function rendezes() {
        setAsc(!asc)
        if (asc) {
            setTelefonok([...telefonok].sort((a,b) => a.nev.localeCompare(b.nev)))
        } else {
            setTelefonok([...telefonok].sort((a,b) => b.nev.localeCompare(a.nev)))
        }
    }
    return (
        <>
        <h2>Telefonok</h2>
        <button onClick={rendezes}>nev szerinti rendezés</button>
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

