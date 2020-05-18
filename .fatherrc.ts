import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  // lessInRollupMode: { },
};

export default options;
