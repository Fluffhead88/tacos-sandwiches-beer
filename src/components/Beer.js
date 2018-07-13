import React, {Component} from 'react';

class Beer extends Component{
constructor(props){
  super(props);

  this.state={
    beerInfo:[]
  }

}

componentDidMount(){
var self = this;
fetch('http://tiny-lasagna-server.herokuapp.com/collections/johnhassler')
.then(function(response){
  if(!response.ok){
    throw Error(response.statusText);
  }
  return response.json();
})
.then(function(responseAsJson){
  self.setState({beerInfo: responseAsJson})
})
.catch(function(error){
  console.log('Looks like there was a problem: \n', error);
});
}
render() {
  let $beers = this.state.beerInfo.map(function(beer){
    console.log('this is it', beer);
    return(
      <div key={beer._id}>
        <p>Name: {beer.name}</p>
        <p>Type: {beer.type}</p>
        <p>Where it belongs: {beer.whereItBelongs}</p>
      </div>
    );
  })
  return (
    <div className="App">
      <h1>Beers</h1>
      {$beers}
    </div>
  );
}
}
export default Beer;
