import { useState, useEffect } from "react";
import { api } from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState("");
    const [loading, setLoading] = useState(false);

    const getPokemons = async () => {
        setLoading(true);
        let newArray = [];
        for (let i = 1; i <= 200; i++) {
            await api.get(`${i}`).then((response) => {
                newArray = [...newArray, response.data];
            });
        }
        setPokemons(newArray);
        setLoading(false);
    };

    useEffect(() => {
        getPokemons();
    }, []);

    const saveName = (e) => {
        setPokemon(e.target.value);
    };

    return (
        <>
            <Header />
            <main className="home-background">
                <div className="home-search-pokemon">
                    <input
                        type="text"
                        placeholder="Digite aqui o pokemon..."
                        id="search-pokemon"
                        onChange={saveName}
                    />
                    <Link to={`/pokemon/${pokemon.toLowerCase()}`}>
                        <button className="home-btn-search">
                            <BsSearch size={24} color={"#fff"} />
                        </button>
                    </Link>
                </div>
                {loading ? (
                    <div className="container">Carregando...</div>
                ) : (
                    <div className="home-pokemons-area container">
                        {pokemons?.map((pokemon, index) => (
                            <Card key={index} pokemon={pokemon} />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
};

export default Home;
