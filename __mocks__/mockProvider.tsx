import React, { PropsWithChildren } from 'react';
import { RenderOptions, render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import {configureStore } from '@reduxjs/toolkit'
import { rootReducer } from 'src/store';

type CustomRenderOptions =  RenderOptions & {initialState?: any};

const store = ({ preloadedState } = {} as any) => configureStore({ reducer: rootReducer as any, preloadedState });

function render(
    ui: React.ReactElement,
    {
      initialState,
      ...renderOptions
    } = {} as CustomRenderOptions,
  ) {
    function Wrapper({ children }: PropsWithChildren) {
      return <Provider store={store({ preloadedState: initialState })}>{children}</Provider>;
    }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}


export * from '@testing-library/react';

export { render };

export { store };