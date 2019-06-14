import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Dakota Whelchel" scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Dakota Whelchel">
                    <Navigation>
                        <Link to="/">Home</Link>
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
