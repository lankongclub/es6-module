export var test1_str1 = 'test1_str1'
export var test1_obj1 = {
  name: 'test1_obj1'
}
export function test1_fun1(num) {
  return num * 2
}

var test1_str2 = 'test1_str2'
var test1_str3 = 'test1_str3'
var test1_str4 = 'test1_str4'
var test1_str5 = 'test1_str5'
setTimeout(() => {
  test1_str5 = 'test1_str5_change'
}, 1000)
var test1_obj2 = {
  name: 'test1_obj2'
}

function test1_fun2(num) {
  return num * 2
}

export {
  test1_str2,
  test1_obj2,
  test1_fun2,
  // export 中使用 as 重命名
  test1_str3 as test1_str3_export_as,
  test1_str5
}

export {
  test1_str4
}

console.log('test1 file')

// export 不能置于块级作用域