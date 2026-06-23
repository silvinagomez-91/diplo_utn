export function Personaje(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <h3>Vive o no vive: {props.status}</h3>
            <h4>{props.species}</h4>
            <hr />
        </div>
    )

}