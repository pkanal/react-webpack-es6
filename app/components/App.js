import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(e) {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {

    /**
    * Clone children and pass window width here instead of adding
    * event listeners in each child component
    */
    let _this = this;
    let children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {windowWidth: _this.state.windowWidth});
    });

    return (
      <div>
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { counter } = state;

  return {
    counter,
  };
}

export default connect(mapStateToProps)(App);
