import styles from './Header.module.css'

export default function Header() {
    return(<header role="banner" className={styles.header}>
        <h1><img className={styles.header_image} src={`${process.env.PUBLIC_URL}/ThaCabin512.png`} alt="Line drawn log cabin"/> Chris I Powell</h1>
    </header>)
}