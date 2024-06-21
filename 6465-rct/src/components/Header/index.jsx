import styles from "./Header.modules.css"

function Header(){
    return (
        <header className={styles.header}>
            <span>CedupFlix </span>
            <nav>
                <a href="#"> Home </a>
                <a href="# "> Assistir</a>
            </nav>
        </header>

    )
}