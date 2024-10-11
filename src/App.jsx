import { Post } from "./Post";
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

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

