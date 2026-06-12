import { TituloPrincipal } from "./componentes/titulo";
const titulo2 = "Estoy eprendiendo Next"

import { ListaProductos } from "./componentes/lista";
const productos = [
  { id: 1, nombre: 'coca-cola', precio: 25800 },
  { id: 2, nombre: 'sprite', precio: 25800 },
  { id: 3, nombre: 'agua', precio: 7000 },
  { id: 4, nombre: 'monster', precio: 13500 },
  { id: 5, nombre: 'aquarius', precio: 15200 },

]


export default function Home() {
  return (
    <div >
      <TituloPrincipal titulo="Esta es mi tarea" />

      <hr />
      <TituloPrincipal titulo={titulo2} />

      <hr />
      <ListaProductos items={productos} />

    </div>
  );
}
