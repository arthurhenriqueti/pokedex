import { useState, useEffect } from "react";
import { api } from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "./Home.scss";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPokemons = async () => {
        setLoading(true);
        let newArray = [];
        for (let i = 1; i <= 50; i++) {
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

    return (
        <>
            <Header />
            <main className="home-background">
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
