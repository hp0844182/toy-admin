
const { generate, presetPalettes } = require('@ant-design/colors');
const gray = generate('#bfbfbf');
/**
 * 生成antd主题颜色
 */
function generateColors() {
  const colorObj = {
    gray:{}
  };
  gray.forEach((color,index) => {
    colorObj.gray[+100*(index+1)] = color
  });
  console.log(colorObj);
  
  return colorObj
}

module.exports = {
  generateColors
}