

export default function Main(props){
    return(
       <div className = "main">
        <h3 className = "about">About</h3>
        <div>{props.about}
        </div>
        <h3 className="interests">Interests</h3>
        <div>{props.interests}
        </div>
       </div>
    )
}