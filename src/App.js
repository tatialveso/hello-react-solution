import './App.css';
import Card from './components/Card/Card';
import iconOne from '../src/images/icon1.png';
import iconTwo from '../src/images/icon2.png';
import iconThree from '../src/images/icon3.png';
import iconFour from '../src/images/icon4.png';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className='card-name'>
        <Card
          img={iconOne}
          title="Declarative"
          text="React makes it painless to create interactive UIs." 
        />
        <Card
          img={iconTwo}
          title="Components"
          text="Build encapsulated components that manage their state."
        />
        <Card
          img={iconThree}
          title="Single-Way"
          text="A set of immutable values are passed to the components."
        />
        <Card
          img={iconFour}
          title="JSX"
          text="Statically-typed, designed to run on modern browsers."
        />
      </section>
    </div>
  );
}

export default App;
