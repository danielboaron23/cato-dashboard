// GENERATED ad-hoc canvas entry (rev 1cb83c206ddb). Router-less mount — providers from main.tsx only.
import { Component, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "/src/index.css";
import AdHocTarget from "/src/App";

// Rev-marked error boundary: renders the data-adhoc-rev root in BOTH the ok and the
// error (fallback) branch, so the marker survives a throwing render (invariant 4).
class SpringCanvasBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { didError: false };
  }
  static getDerivedStateFromError() {
    return { didError: true };
  }
  render() {
    return (
      <div data-adhoc-rev="1cb83c206ddb" data-spring-canvas-root>
        {this.state.didError ? (
          <div role="alert" data-adhoc-state="error">Ad-hoc render error.</div>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

const el = document.getElementById('root');
if (el) {
  createRoot(el).render(
    <StrictMode>
      <SpringCanvasBoundary>
        <AdHocTarget {...({})} />
      </SpringCanvasBoundary>
    </StrictMode>,
  );
}
