export function ListaProductos(props) {
    return (
        <div>
            <h2>Lista Packs</h2>
            <ul>
                {props.items.map(item => (
                    <li key={item.id}>
                        {item.nombre} - {item.precio}
                    </li>
                ))}
            </ul>
        </div>
    )
}