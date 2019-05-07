import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content, Textfield } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Title" scroll>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
