import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/pedrocbp.png' />
                    <div className={styles.authorInfo}>
                        <strong>Pedro Miguel</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>

                <time title='12 de outubro ás 12:35' dateTime='2024-10-12'>Publicado à 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>🚀 Mergulhando no mundo do ReactJS!</p>
                <p>A cada componente criado, novas portas se abrem no desenvolvimento web.</p>
                    Entender o poder dos hooks e da renderização eficiente é um verdadeiro game changer!
                <p>Quem mais está nessa jornada com o React?</p>
                <p>
                    <a href=''>#ReactJS</a>{' '}
                    <a href=''>#DesenvolvimentoWeb</a>{' '}
                    <a href=''>#Frontend</a>{' '}
                    <a href=''>#EstudandoSempre</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.CommentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>

    )
}
