'use client';
import { Provider } from 'react-redux';
import { createStore } from './redux/store';

export const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
};
