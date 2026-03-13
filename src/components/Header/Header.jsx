import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="styles.logo">🛒 ShopMaker</div>
            <nav>
                <ul className={styles.nav}>
                    <li><a href="#features">Возможности</a></li>
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </nav>
            <button className={styles.loginBtn} onClick={() => alert('Переход в конструктор...')}>
                Войти
            </button>
        </header>
    );
}

