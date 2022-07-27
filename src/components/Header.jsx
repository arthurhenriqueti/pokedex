import PokeballImage from "../public/assets/images/pokeball.png";
import "./Header.scss";

const Header = () => {
    return (
        <>
            <header className="header-background">
                <div className="header-area container">
                    <h1>Pokedex</h1>
                    <div>
                        <figure>
                            <img
                                src={PokeballImage}
                                width={40}
                                height={40}
                                alt="Pokedex"
                            />
                        </figure>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
