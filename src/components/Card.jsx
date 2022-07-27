import { Link } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
    return (
        <>
            <div className="card-background">
                <div className="card-area">
                    <h4>#{props.pokemon.id}</h4>
                    <h1>{props.pokemon.name}</h1>
                    <div className="card-image">
                        <figure>
                            <img
                                src={props.pokemon.sprites.front_default}
                                width={80}
                                height={80}
                                alt={props.pokemon.name}
                            />
                        </figure>
                    </div>
                    <div>
                        <Link
                            to={`/pokemon/${props.pokemon.id}`}
                            className="link"
                        >
                            <span>Detalhes</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
