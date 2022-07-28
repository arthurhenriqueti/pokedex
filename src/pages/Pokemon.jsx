import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Pokemon.scss";

const Pokemon = () => {
    const { id } = useParams();

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPokemon = async () => {
        setLoading(true);
        await api.get(`${id}`).then((response) => {
            setPokemon(response.data);
        });
        setLoading(false);
    };

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <>
            <Header />
            <main className="pokemon-background">
                <div className="pokemon-area container">
                    <h3>#{pokemon.id}</h3>
                    <h1>{pokemon.name}</h1>
                    {pokemon.sprites ? (
                        <div className="pokemon-image">
                            <figure>
                                <img
                                    src={pokemon.sprites.front_default}
                                    width={80}
                                    height={80}
                                    alt={pokemon.name}
                                />
                            </figure>
                        </div>
                    ) : (
                        <></>
                    )}
                    {pokemon.types ? (
                        <div className="pokemon-types">
                            <span className="pokemon-type-1">
                                {pokemon.types[0].type.name}
                            </span>
                            {pokemon.types[1] ? (
                                <span className="pokemon-type-2">
                                    {pokemon.types[1].type.name}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                    ) : (
                        <></>
                    )}
                    <div className="pokemon-infos">
                        <h3 className="pokemon-info-border">
                            Altura: {pokemon.height * 10} cm
                        </h3>
                        <h3>Peso: {pokemon.weight / 10} kg</h3>
                    </div>
                    <div className="pokemon-btn">
                        <Link to={"/"} className="link">
                            <span>Voltar</span>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Pokemon;
