import path from 'path';

export default {
  hash: true,
  title: 'chaos-form-antd4',
  // mode: 'site',
  includes: [path.resolve(__dirname, '../mds')],
  resolve: {
    alias: {
      'chaos-form-antd4': path.resolve(__dirname, '../src'),
    },
  }
};
