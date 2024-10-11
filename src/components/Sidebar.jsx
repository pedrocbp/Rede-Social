import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src='https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            
            <div className={styles.profile}>
                <img className={styles.avatar} src='https://github.com/pedrocbp.png' />
                <strong>Pedro Miguel</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                Editar seu perfil
            </footer>
        </aside>
    )
}