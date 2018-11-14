import {
  test1_str1
} from './test1.js'

import {
  test1_str2,
  test1_str3_export_as,
  // import 中使用 as 重命名
  test1_str4 as test1_str4_import_as,
  test1_str5
} from './test1.js'

console.log(test1_str1)
console.log(test1_str2)
console.log(test1_str3_export_as)
console.log(test1_str4_import_as)
console.log(test1_str5)
// 验证动态绑定
setTimeout(() => {
  console.log('验证动态绑定', test1_str5)
}, 2000)
// debugger

// 浏览器不支持直接用 import了
// 浏览器JS不支持模块系统，如果需要，需要用requirejs或者seajs或者webpack处理

// 1. 引用了两次同一路径的模块，只加载一次
// 2. import 输入变量名应和 export 输出的变量名一致
// 3. import 输入的变量是只读的，但是变量是对象的可以改变属性（不推荐）
// 4. from 后面加上文件地址 绝对/相对
// 5. import命令具有提升效果，会提升到整个模块的头部，首先执行。