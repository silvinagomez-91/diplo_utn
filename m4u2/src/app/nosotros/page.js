import { Personaje } from "@/Components/personaje";

//le aviso que es asincronico porque no se sabe cuando alguien va a hacer click
export default async function Nosotros() {

    const response = await fetch('https://rickandmortyapi.com/api/character/');

    const personajes = (await response.json()).results;

  return (
    <div className="">
      <main >
        <h1>PERSONAJES</h1>
        {personajes.map((personaje) => (

            <Personaje
            key = {personaje.id}
            {...personaje}
            />

        )
        )}
       
      </main>
    </div>
  );
}
