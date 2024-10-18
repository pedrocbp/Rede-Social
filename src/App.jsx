import { Post } from "./components/Post";
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedrocbp.png',
      name: 'Pedro Miguel',
      role: 'Desenvolvedor Full Stack'
    },
    content:  [
      {type: 'paragraph', content: '🚀 Mergulhando no mundo do ReactJS!'},
      {type: 'paragraph', content: 'A cada componente criado, novas portas se abrem no desenvolvimento web.'},
      {type: 'paragraph', content: 'Entender o poder dos hooks e da renderização eficiente é um verdadeiro game changer!'},
      {type: 'paragraph', content: 'Quem mais está nessa jornada com o React?'},
    ],
    publishedAt: new Date('2024-10-14 22:46:00'),
  },

  {
  id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @RocketSeat'
    },
    content:  [
      {type: 'paragraph', content: '🚀 Mergulhando no mundo do ReactJS!'},
      {type: 'paragraph', content: 'A cada componente criado, novas portas se abrem no desenvolvimento web.'},
      {type: 'paragraph', content: 'Entender o poder dos hooks e da renderização eficiente é um verdadeiro game changer!'},
      {type: 'paragraph', content: 'Quem mais está nessa jornada com o React?'},
    ],
    publishedAt: new Date('2024-10-11 20:30:00'),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(posts => {
            return (
              <Post 
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}  
        </main>
      </div>
    </div>
  )
}

export default App

