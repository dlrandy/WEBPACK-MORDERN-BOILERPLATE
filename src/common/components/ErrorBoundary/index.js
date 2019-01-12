import React, { Component } from 'react';
import PropTypes from 'prop-types';
//https://sentry.io/settings/freelance-6g/gochen/
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('error, info ', error, info);
  }
  render() {
    const { hasError } = this.state;
    const {
      fallback = <div className="error_boundary">something wrong...</div>,
      children
    } = this.props;
    if (hasError) {
      return fallback;
    } else {
      return children;
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
  fallback: PropTypes.any
};
export default ErrorBoundary;
