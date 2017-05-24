import React from 'react';
import { CardPanel,Input,Button,Icon,Panel } from 'react-materialize';
import axios from 'axios';

class Weatherform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        stateName: '',
        city: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(propertyName,event){
    const location = this.state.location;
    location[propertyName] = event.target.value;
    // console.log(location);
    this.setState({
      location:location
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const stateAbbreviation = this.state.location.stateName;
    const city = this.state.location.city;
    const API_Key = 'a2f1e6f9e97a474a';
    const API_URL = 'http://api.wunderground.com/api/';
    return axios.get(`${API_URL}${API_Key}/conditions/q/${stateAbbreviation}/${city}.json`)
    .then((response)=>{
      console.log(response.data.current_observation);
      const weatherData = response.data.current_observation;
    })
  }

  render() {
    return (
      <CardPanel className="search">
        <form onSubmit={this.handleSubmit}>
          <Input
            s={12} m={12}
            id="city"
            label="city"
            validate
            name="city"
            value={this.state.city}
            type="text"
            onChange={this.handleChange.bind(this, 'city')}><Icon>my_location</Icon>
          </Input>

          <Input
            s={12} m={12}
            id="stateName"
            label="State"
            validate
            value={this.state.stateName}
            type="text"
            onChange={this.handleChange.bind(this, 'stateName')}><Icon>my_location</Icon>
          </Input>

          <Button type="submit">Search</Button>
        </form>
        <h6>{this.state.city}</h6>
        <h6>{this.state.stateName}</h6>
      </CardPanel>
    )
  }
}

export default Weatherform;
