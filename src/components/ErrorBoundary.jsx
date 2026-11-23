import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F4F8FD] text-[#082B59] flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-blue-100 shadow-xl text-center">
            <div className="w-14 h-14 bg-blue-50 text-[#0866E8] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
              !
            </div>
            <h2 className="text-xl font-bold text-[#082B59] mb-2">Notice</h2>
            <p className="text-slate-600 text-sm mb-6">
              An unexpected display issue occurred. Click below to reload the application cleanly.
            </p>
            <button
              onClick={this.handleReload}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0866E8] to-[#00B9E8] text-white font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Reload Website
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
