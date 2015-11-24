import React, { Component } from 'react';

export default class App extends Component {
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
    const style = {
      container: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#eeeeee',
        position: 'absolute',
        top: 0,
      },
    };

    /**
    * Clone children and pass window width here instead of adding
    * event listeners in each child component
    */
    let _this = this;
    let children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {windowWidth: _this.state.windowWidth});
    });

    return (
      <div style={style.container} className='container'>
        {children}
      </div>
    );
  }

}
