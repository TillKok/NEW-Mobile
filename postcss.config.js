/**
* post-css是一个后处理器
* 与预处理器 less sass 处理之后的css再进一步处理
*该文件是post-css的配置文件
*它有很多插件：
* autoprefixer 用来处理样式兼容前缀用的
* postcss-pxtorem
*/
const { sep } = require('path')
module.exports = ({ file }) => {
  // path.sep 用于获取操作系统的路径分隔符
  const rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
    ? 37.5
    : 75

  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue,
        propList: ['*']
      }
    }
  }
}
