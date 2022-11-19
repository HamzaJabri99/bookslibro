import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </div>
  );
}

export default App;
