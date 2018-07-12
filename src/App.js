import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this._postRequest=this._postRequest.bind(this);
    this._editRequest=this._editRequest.bind(this);
    this._deleteRequest=this._deleteRequest.bind(this);
  }

componentDidMount(){
  fetch('http://tiny-lasagna-server.herokuapp.com/collections/zthigpen')
  .then(function(response){
    if(!response.ok){
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(function(responseAsJson){
    console.log(responseAsJson);
  })
  .catch(function(error){
    console.log('Looks like there was a problem: \n', error);
  });
}

_postRequest(){
  let context={
    name:"italian",
    ingredients:["ham", "salami", "cappacola", "provolone", "dressing"]
  }

fetch('http://tiny-lasagna-server.herokuapp.com/collections/zthigpen',{
  method:"POST",
  body:JSON.stringify(context),
  headers:{
    'Content-Type': 'application/json'
  }
})
.then(function(response){
  console.log(response);
})
.catch(function(error){
  console.log('Looks like there was a problem: \n', error);
});
}

_editRequest(obj){
  let context={
    name:"italian",
    ingredients:["ham", "salami", "pepperoni", "provolone", "dressing"]
  }
  let id=obj._id;
  fetch(`http://tiny-lasagna-server.herokuapp.com/collections/zthigpen/${id}`,{
  method:'PUT',
  body:JSON.stringify(context),
  headers:{
    'Content-Type': 'application/json'
}
})
.then(function(response){
  console.log(response);
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
.then(function(response){
  console.log(response);
})
.catch(function(error){
  console.log('Looks like there was a problem: \n', error);
})
}
  render() {
    return (
      <div className="App">
        <input type="button" value="Post Request" onClick={this._postRequest}/>
        <input type="button" value="Put Request" onClick={this._editRequest}/>
        <input type="button" value="Delete Request" onClick={this._deleteRequest}/>
      </div>
    );
  }
}

export default App;
