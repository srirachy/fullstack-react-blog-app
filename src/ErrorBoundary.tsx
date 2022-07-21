import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean
}
// # Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in component constructors full the whole tree below them.
class ErrorBoundary extends Component<Props, State> {

  // ? MUST return an updated state object and MUST NOT trigger side effects
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  // ? CAN trigger side effects; commonly used to log out any errors
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>An error has occurred in a child component!</h1>
          <p>
            (Your error boundary should typically include a way for
            the user to get back on track: at the very least a link to
            the home page of your app, or more often fully functional
            header/footer components.)
          </p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// # Error boundaries work like a JavaScript catch {} block, but for components. Only class-based (smart) components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application, or you may create separate error boundary components to wrap around particular, exception-prone sections of your app. Error boundaries do NOT catch errors for any of the following:
// - Event handlers (error boundaries run only on render; click events don't run then... use try/catch if needed)
// - Asynchronous code (setTimeouts)
// - Server side rendering
// - Errors thrown within the error boundary itself
