import { Component, ReactNode, PropsWithChildren } from "react";

export type Props = PropsWithChildren<{
  fallback?: ReactNode;
}>;
export type State = {
  error: Error | null;
};

const DEFAULT_ERROR_MESSAGE = "Something went wrong.";

function DefaultFallback() {
  return <p>{DEFAULT_ERROR_MESSAGE}</p>;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: unknown) {
    const newError =
      error instanceof Error ? error : new Error(DEFAULT_ERROR_MESSAGE);
    return { error: newError };
  }

  render() {
    if (this.state.error) {
      return this.props?.fallback || <DefaultFallback />;
    }

    return this.props.children;
  }
}
