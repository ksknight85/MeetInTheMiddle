import React, {Component} from 'react';
// import auth0Client from '../Auth';
import './splash-screen.css';

function LoadingMessage() {
  return (
    <div className="splash-screen">
      <div>
      <ul className="circle">
      <img id = "splashImage" src="./assets/images/MeetInTheMiddle7.png" alt="logo" style={{height: "150px", width: "240px"}}/>
      <img id = "splashImage2" src="./assets/images/MeetInTheMiddleSmall.png" alt="logo" style={{height: "150px", width: "35px"}}/>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
    </ul>
      </div>
    </div>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        // await auth0Client.loadSession();
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 3000)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;