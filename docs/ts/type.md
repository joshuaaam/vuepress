# 类型别名（Type Aliases）
我们已经学会在类型注解里直接使用对象类型和联合类型，这很方便，但有的时候，一个类型会被使用多次，此时我们更希望通过一个单独的名字来引用它。

这就是类型别名（type alias）。所谓类型别名，顾名思义，一个可以指代任意类型的名字。类型别名的语法是：

``` typescript
type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

 
printCoord({ x: 100, y: 100 });
```

你可以使用类型别名给任意类型一个名字，举个例子，命名一个联合类型：

``` typescript
type ID = number | string;
```

注意别名是唯一的别名，你不能使用类型别名创建同一个类型的不同版本。当你使用类型别名的时候，它就跟你编写的类型是一样的。换句话说，代码看起来可能不合法，但对 TypeScript 依然是合法的，因为两个类型都是同一个类型的别名:
``` typescript

type UserInputSanitizedString = string;
 
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
 
// Create a sanitized input
let userInput = sanitizeInput(getInput());
 
// Can still be re-assigned with a string though
userInput = "new input";
```
