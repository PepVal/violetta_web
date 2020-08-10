const Card = (props) =>{
    return(
        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <ul className="card-body ">
                <svg viewBox="0 0 24 24">
                    <path d={props.icon} />
                </svg>
            </ul>
            <div className="card-body">
               {props.datos}
            </div>
        </div>
    );

};
export default Card;