import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/pedrocbp.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Miguel</strong>
                            <time title='12 de outubro ás 12:35' dateTime='2024-10-12'>Cerca de 1 hora atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>React é demais! Hooks e renderização fazem toda a diferença! 🙌</p>
                </div>

                <footer>
                    <button >
                        <ThumbsUp />
                         <p>Curtir</p><span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}