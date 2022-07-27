import { useState, useEffect } from "react";
import { api } from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
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
                <div className="home-pokemons-area container">
                    {pokemons?.map((pokemon, index) => (
                        <Card key={index} pokemon={pokemon} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
