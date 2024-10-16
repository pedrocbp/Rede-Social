import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ author, publishedAt, content }){
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={{publishedDateFormated}} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href='#'>{line.content}</a></p>;

                    }
                })}
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
