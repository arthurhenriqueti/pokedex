import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <Header />
            <main className="home-background">
                <h1>Página Home</h1>
            </main>
            <Footer />
        </>
    );
};

export default Home;
