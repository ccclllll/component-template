import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const CAFTUserCardMeta: ComponentMetadata = {
  componentName: 'CAFTUserCard',
  title: '用户信息卡',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'CAFTUserCard',
    version: '0.1.0',
    exportName: 'default',
    main: '',
    destructuring: false,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'jumpConfig',
        title: '跳转配置',
        setter: 'jumpSetter',
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '用户信息卡',
    screenshot: '',
    schema: {
      componentName: 'CAFTUserCard',
      props: {},
    },
  },
];

export default {
  ...CAFTUserCardMeta,
  snippets,
};
