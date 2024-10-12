import { Post } from "./components/Post";
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
        author="Pedro Miguel"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, obcaecati aperiam. Quam illum commodi velit tempora? Alias, reprehenderit et adipisci cumque, iusto autem, impedit dolorem quos suscipit porro rerum corporis?"
      />

      <Post 
        author="Pedro Miguel"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, obcaecati aperiam. Quam illum commodi velit tempora? Alias, reprehenderit et adipisci cumque, iusto autem, impedit dolorem quos suscipit porro rerum corporis?"
      />  
        </main>
      </div>
    </div>
  )
}

export default App

