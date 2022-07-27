import { useState, useEffect } from "react";
import { api } from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.scss";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        let newArray = [];
        for (let i = 1; i <= 50; i++) {
            await api.get(`${i}`).then((response) => {
                return (newArray = [...newArray, response.data]);
            });
        }
        setPokemons(newArray);
    };

    useEffect(() => {
        getPokemons();
    }, []);

    return (
        <>
            <Header />
            <main className="home-background">
                <h1>Página Home</h1>
                <div className="home-pokemons-area container">
                    {pokemons?.map((pokemon, index) => (
                        <p>{pokemon.name}</p>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
