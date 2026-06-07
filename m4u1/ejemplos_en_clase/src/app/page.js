import { TituloPrincipal } from "./components/tituloPrincipal";

const titulo2 = 'Hola, estoy aprendiendo Next!'

import { ListaProductos } from "./components/listaSuper";

const productos = [
  { id: 1, nombre: 'Bananas', precio: 3000 },
  { id: 2, nombre: 'Manzanas', precio: 3500 },
  { id: 3, nombre: 'Peras', precio: 4000 },
  { id: 4, nombre: 'Pan', precio: 5000 },
]

import { NovedadItem } from "./components/novedadItem";

const contenidoNovedad = {
  id: "1",
  titulo: "Next.js lanza componentes",
  subtitulo: "La versión 15 introduce...",
  autor: "Silvina Gómez",
  cuerpo: "El nuevo enfoque en la arquitectura de Server Components permite..."
};


import { Contador } from "./components/contador";

import { BotonLuz } from "./components/encender-apagar";

export default function Home() {
  return (
    <div >
      <h2>Props</h2>
      {/*propiedad simple*/}
      <TituloPrincipal titulo="hola curso!" />

      <hr />
      {/*hr es para hacer una linea de separacion*/}
      {/*propiedad simple y la reutilice*/}
      <TituloPrincipal titulo={titulo2} />

      <hr />
      {/*props con un array*/}
      <ListaProductos items={productos} />

      <hr />
      {/*multiples props y destructuring*/}
      <NovedadItem
        title={contenidoNovedad.titulo}
        subtitle={contenidoNovedad.subtitulo}
        author={contenidoNovedad.autor}
        body={contenidoNovedad.cuerpo}
      />

      <hr />

      <h2>Ejemplos de Estados</h2>

      <Contador />

      <hr />
      <BotonLuz/>


    </div>
  );
}
