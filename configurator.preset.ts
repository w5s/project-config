import { definePreset, useRuntimeContext } from '@w5s/configurator-core';

export default definePreset((config) => {
  console.log(config);
  console.log(useRuntimeContext());
});
