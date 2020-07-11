import React, {useState, Component } from 'react';
import logo from './logo.svg';
import TesteComponent from './component/teste'
import './App.css';

const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());


var road = { url: "https://mercos.com/uploads/the-road-to-learn-react.pdf#page=", page: 76 }

function App() {
  const [state,setState] = useState(list);
  const [searchTerm,setSearchTerm] = useState('')
  const [name, setName] = useState('');
  
  return (
    <div className="App">   
      {searchTerm}
      <h2>
        <a href={road.url + road.page} target="_blank">
          Pagina {road.page}
        </a>
      </h2>
      {/* <form>
      <input 
        type="text" 
        value={searchTerm}
        onChange={(e) => {
          setName(e.target.value)
          setSearchTerm(e.target.value)        
        }} 
      />
      </form>
      
      {state.filter(isSearched(name)).map(item => 
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span> / 
          <span>{item.author}</span> / 
          <span>{item.num_comments}</span> / 
          <span>{item.points}</span>
          <span>
            <button onClick={() => this.onDismiss(item.objectID)} type="button">
              Dismiss
            </button>
  
          </span>
        </div>
      )} */}


      <Search value={ } onChange={(e) => { setName(e.target.value);setSearchTerm(e.target.value)}} />
      {/* <Table
        list={list}
        pattern={searchTerm}
        onDismiss={this.onDismiss}
      /> */}


    </div>
  );
}

class Search extends Component {
  render() {
    const { value, onChange } = this.props;
      return (
      <form>
          <input
          type="text"
          value={value}
          onChange={onChange}
          />
      </form>
      );
    }
  }
  
  class Table extends Component {
    render() {
      const { list, pattern, onDismiss } = this.props;
      return (
        <div>
          {list.filter(isSearched(pattern)).map((item) => (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button onClick={() => onDismiss(item.objectID)} type="button">
                  Dismiss
                </button>
              </span>
            </div>
          ))}
        </div>
      );
    }
  }
export default App;