// 对象冻结函数
// Object.isFrozen 是 JavaScript 中用于检查对象是否被冻结的方法。它返回一个布尔值，指示给定对象是否被冻结。

const deepFreeze = (object) => {
  if (object && typeof object === 'object' && !Object.isFrozen(object)) {
    Object.freeze(object);
    Object.keys(object).forEach((key) => {
      deepFreeze(object[key]);
    });
  }
};

-- 当一个对象被冻结后，它的属性将无法被修改、添加或删除。这种技术有一些用途，包括：--

1. 数据保护：当你想确保某个对象的属性不会在代码的其他部分被意外修改时，可以使用对象冻结。这对于保护重要的配置信息或常量非常有用。

2. 避免意外修改：在大型应用程序中，特别是多人协作开发的项目中，对象冻结可以帮助避免意外修改对象的属性，从而减少程序中的错误。

3. 函数式编程：在函数式编程中，不可变性是一个重要的概念。通过冻结对象，你可以确保数据不会被修改，从而更容易地实现函数式编程的原则。

总之，对象冻结是一种有用的技术，可以帮助你确保对象的不可变性，从而提高代码的可靠性和可维护性。 

// 创建一个可变对象
let person = {
  name: "Jakson",
  age: 23
};

// 检查对象是否被冻结
console.log(Object.isFrozen(person)); // 输出: false

// 冻结对象
Object.freeze(person);

// 再次检查对象是否被冻结
console.log(Object.isFrozen(person)); // 输出: true
