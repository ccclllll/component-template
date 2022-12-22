const template = {
  version: '1.0.0',
  componentsMap: [
    {
      package: 'dizuo-atoms',
      version: '0.1.14',
      exportName: 'ImageView',
      main: '',
      destructuring: true,
      subName: '',
      componentName: 'ImageView',
    },
    {
      package: 'dizuo-atoms',
      version: '0.1.14',
      exportName: 'BaseContainer',
      main: '',
      destructuring: true,
      subName: '',
      componentName: 'BaseContainer',
    },
    { devMode: 'lowCode', componentName: 'Page' },
  ],
  componentsTree: [
    {
      componentName: 'Page',
      id: 'node_dockcviv8fo1',
      props: {
        ref: 'outterView',
        style: {
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh)',
        },
      },
      dataSource: { list: [] },
      css: 'body {\n  font-size: 24px;\n}\n\n.botton {\n  width: 100px;\n  color: #ff00ff\n}',
      lifeCycles: {
        componentDidMount: {
          type: 'JSFunction',
          value: "function() {\n    console.log('did mount');\n  }",
        },
        componentWillUnmount: {
          type: 'JSFunction',
          value: "function() {\n    console.log('will umount');\n  }",
        },
      },
      methods: {},
      state: {},
      isLocked: false,
      condition: true,
      conditionGroup: '',
      hidden: false,
      title: '',
      children: [
        {
          componentName: 'BaseContainer',
          id: 'node_oclb39t9ll3',
          props: {
            scrollEnable: false,
            style: {
              display: 'flex',
              flexDirection: 'column',
              flex: '1',
            },
          },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: '',
          children: [
            // {
            //   "componentName": "MineSettingListModule",
            //   "id": 'node_' + getuid(),
            //   "props": {},
            //   "hidden": false,
            //   "title": "",
            //   "isLocked": true,
            //   "condition": true,
            //   "conditionGroup": ""
            // }
          ],
        },
      ],
    },
  ],
  i18n: {},
};
module.exports = template;
