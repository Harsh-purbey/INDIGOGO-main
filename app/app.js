import './i18n';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import createReducer from './redux/reducers';
import rootSaga from './redux/rootSaga';
import {
  Landing,
  Collections,
  NotFound,
  Blog,
  DynamicBlog,
} from './containers/pageListAsync';
// import Collections from './containers/Collections';

const sagaMiddleware = createSagaMiddleware();
const reducer = createReducer();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/blog/:id" element={<DynamicBlog />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </Provider>
  );
}

export default App;
