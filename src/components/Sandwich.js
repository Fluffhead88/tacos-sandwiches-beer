import React, {Component} from 'react';

class Sandwich extends Component{
constructor(props){
  super(props);

  this.state={
    sandwichInfo:[]
  }

  this._postRequest=this._postRequest.bind(this);
  this._editRequest=this._editRequest.bind(this);
  this._deleteRequest=this._deleteRequest.bind(this);
}

componentDidMount(){
var self = this;
fetch('http://tiny-lasagna-server.herokuapp.com/collections/zthigpen')
.then(function(response){
  if(!response.ok){
    throw Error(response.statusText);
  }
  return response.json();
})
.then(function(responseAsJson){
  self.setState({sandwichInfo: responseAsJson})
})
.catch(function(error){
  console.log('Looks like there was a problem: \n', error);
});
}

_postRequest(){
let sandwich={
  name:"italian",
  ingredients:["ham", "salami", "cappacola", "provolone", "dressing"]
}

fetch('http://tiny-lasagna-server.herokuapp.com/collections/zthigpen',{
method:"POST",
body:JSON.stringify(sandwich),
headers:{
  'Content-Type': 'application/json'
}
})
.catch(function(error){
console.log('Looks like there was a problem: \n', error);
});
}

_editRequest(obj){
let sandwich={
  name:"italian",
  ingredients:["ham", "salami", "pepperoni", "provolone", "dressing"]
}
let id=obj._id;
fetch(`http://tiny-lasagna-server.herokuapp.com/collections/zthigpen/${id}`,{
method:'PUT',
body:JSON.stringify(sandwich),
headers:{
  'Content-Type': 'application/json'
}
})
.catch(function(error){
console.log('Looks like there was a problem: \n', error);
});
}

_deleteRequest(obj){
let id = obj._id;
fetch(`http://tiny-lasagna-server.herokuapp.com/collections/zthigpen/${id}`,{
method:'DELETE'
})
.catch(function(error){
console.log('Looks like there was a problem: \n', error);
})
}

render() {
  let $sandwiches = this.state.sandwichInfo.map(function(sandwich){
    console.log('this is it', sandwich);
    return(
      <div key={sandwich._id}>
        <p>Name: {sandwich.name}</p>
        <p>Ingredients: {sandwich.ingredients}</p>
      </div>
    );
  })
  return (
    <div className="App">
      <h1>Sandwiches</h1>
      {$sandwiches}
      <input type="button" value="Post Request" onClick={this._postRequest}/>
      <input type="button" value="Put Request" onClick={this._editRequest}/>
      <input type="button" value="Delete Request" onClick={this._deleteRequest}/>
    </div>
  );
}
}
export default Sandwich;
