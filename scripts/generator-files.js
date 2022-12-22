global.window = {};
const meta = require('../build/lowcode/meta');
let template = require('./template');
const path = require('path');
const {
  getuid,
  writeFileSync,
  mkdirSync,
  deleteAll,
  isForderExist,
  readFileSync,
} = require('./utils');
const uploadForderPath = path.join(__dirname, '../upload');
console.log(uploadForderPath);
async function initForder() {
  if (!(await isForderExist(uploadForderPath))) {
    mkdirSync(uploadForderPath);
  }
}

function createTemplate() {
  if (meta) {
    let { components } = meta;
    components.forEach((component) => {
      template.componentsTree[0].children[0].children.push({
        componentName: component.componentName,
        id: 'node_' + getuid(),
        props: {},
        hidden: false,
        title: component.title,
        isLocked: false,
        condition: true,
        conditionGroup: '',
      });
    });

    writeFileSync(path.resolve(uploadForderPath, 'template.json'), JSON.stringify(template));
  }
}

function createMeta() {
  if (meta) {
    writeFileSync(path.resolve(uploadForderPath, 'meta.json'), JSON.stringify(meta.components[0]));
  }
}

function cpFiles() {
  const viewjsPath = path.join(__dirname, '../build/lowcode/view.js');
  const viewcssPath = path.join(__dirname, '../build/lowcode/view.css');
  const viewjsData = readFileSync(viewjsPath);
  const viewcssData = readFileSync(viewcssPath);
  writeFileSync(path.resolve(uploadForderPath, 'view.js'), viewjsData);
  writeFileSync(path.resolve(uploadForderPath, 'view.css'), viewcssData);
}

(async () => {
  await initForder();
  createTemplate();
  createMeta();
  cpFiles();
})();
