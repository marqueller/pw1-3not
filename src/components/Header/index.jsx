import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span>MarceloFlix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    )
}

export default Header;