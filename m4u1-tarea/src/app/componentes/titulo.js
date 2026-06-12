export function TituloPrincipal(props) {
    return (
        <header style={{ backgroundColor: 'rgb(250, 185, 185)', padding: '10px' }}>
            <h1> {props.titulo}</h1>
        </header>
    )
}