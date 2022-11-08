import Nav from "../Nav/Nav";
import './Header.css';

function Header() {
    return(
        <header>
            <Nav />
            <section>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button className="btn">Awesome!</button>
            </section>
        </header>
    )
}

export default Header