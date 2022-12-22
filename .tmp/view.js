

export { default } from 'D:\\gitlab\\materials-react\\packages\\CAFTUserCard\\src\\index.tsx';

import * as componentInstances from 'D:\\gitlab\\materials-react\\packages\\CAFTUserCard\\src\\index.tsx';



export * from 'D:\\gitlab\\materials-react\\packages\\CAFTUserCard\\src\\index.tsx';

const coveredComponents = {};

const library = 'CAFTUserCard';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}