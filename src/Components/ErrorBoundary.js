import React from "react";
import {Link } from "react-router-dom";



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
  }
  
  render() {
    if (this.state.errorInfo) {
      
      return (
        <div>
          <h2>NOTHING TO SEE HERE...OR MAYBE THERE IS.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
          <Link to="/">Back</Link>
        </div>
      );
    }
    
    return this.props.children;
  }  
  
}

export default ErrorBoundary