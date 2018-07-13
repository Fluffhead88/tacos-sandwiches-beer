import React, {Component} from 'react';

class Taco extends Component{
constructor(props){
  super(props);

  this.state={
    tacoInfo:[]
  }

}

componentDidMount(){
var self = this;
fetch('http://tiny-lasagna-server.herokuapp.com/collections/kevinbeach')
.then(function(response){
  if(!response.ok){
    throw Error(response.statusText);
  }
  return response.json();
})
.then(function(responseAsJson){
  self.setState({tacoInfo: responseAsJson})
})
.catch(function(error){
  console.log('Looks like there was a problem: \n', error);
});
}
render() {
  let $tacos = this.state.tacoInfo.map(function(taco){
    console.log('this is it', taco);
    return(
      <div key={taco._id}>
        <p>Name: {taco.name}</p>
        <p>Ingredients: {taco.ingredients}</p>
      </div>
    );
  })
  return (
    <div className="App">
      <h1>Tacos</h1>
      {$tacos}
    </div>
  );
}
}
export default Taco;
