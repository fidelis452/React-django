import React, {Component} from 'react';

// const list =[
//   {
//     'id': 1,
//     'title': '1st Item',
//     'description': 'Description here.'
//   },
//   {
//     'id': 2,
//     'title': '2nd Item',
//     'description': 'Another description here.'
//   },
//   {
//     'id': 3,
//     'title': '3rd Item',
//     'description': 'Third description here.'
//   }
// ];
class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state ={ list };
  // }
  state = {
    todos: []
  };
  async componentDidMount(){
    try{
      const res = await fetch('http://127.0.0.1:8000/api/');
      const todos = await res.json();
      this.setState({
        todos
      });
    }catch(e){
      console.log(e);
    }
  }
  render(){
    return(
      <div>
        {this.state.todos.map(item => (
          <div>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
