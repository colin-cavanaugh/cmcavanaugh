import React from 'react'

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so next render shows fallback
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo)
    // Optionally log the error to an external service here
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1> // fallback UI
    }

    return this.props.children
  }
}

export default ErrorBoundary
