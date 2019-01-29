import React from 'react';
import Loadable from 'react-loadable';

const EventPickerLoadable = Loadable({
  loader: () => import('./EventPicker' /* webpackChunkName: 'about' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default EventPickerLoadable;
