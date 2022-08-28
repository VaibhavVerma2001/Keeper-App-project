import './css/App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Note from './components/Note'
import notes from './notes';

function createNotes (noteItem)
{
  return (
    <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
  );
}

function App() {
  return (
    <>
      <Header />

      {notes.map(createNotes)};

      <Footer />
    </>
  );
}

export default App;
