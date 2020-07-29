import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: 'aeeca59a0670471da388923b264301a6'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      celebrity: "Click Detect"
    }
  }

  handleChange = (evt) => {
    this.setState({
      imageUrl: evt.target.value
    });
  }

  handleSubmit = async (evt) => {
    try {
      const response = await app.models.predict(Clarifai.CELEBRITY_MODEL, this.state.imageUrl);
      console.log(response.outputs[0].data.regions[0].data.concepts[0].name);
      this.setState({ celebrity: response.outputs[0].data.regions[0].data.concepts[0].name });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App" >
        <Particles className={'particles'} params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <FaceRecognition image={this.state.imageUrl} celebrity={this.state.celebrity} />
      </div>
    );
  }
}

export default App;
