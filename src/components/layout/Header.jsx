import styles from './Header.module.css'

export default function Header() {
    return(<header role="banner" className={styles.header}>
        <h1>
            <a className={styles.header_banner_link} href="/" >
                <img className={styles.header_image} src={`${process.env.PUBLIC_URL}/ThaCabin512.png`} alt="Line drawn log cabin"/> Chris I Powell
            </a>
        </h1>
    </header>)
}