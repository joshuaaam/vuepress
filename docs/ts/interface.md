<!--
 * @Author: g05047
 * @Date: 2023-05-30 15:01:51
 * @LastEditors: g05047
 * @LastEditTime: 2023-05-30 16:36:33
 * @Description: file content
-->
# 接口（Interfaces）
接口声明（interface declaration）是命名对象类型的另一种方式：

``` javascript
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
```
 
printCoord({ x: 100, y: 100 });
就像我们在上节使用的类型别名，这个例子也同样可以运行，就跟我们使用了一个匿名对象类型一样。TypeScript 只关心传递给 printCoord 的值的结构（structure）——关心值是否有期望的属性。正是这种只关心类型的结构和能力的特性，我们才认为 TypeScript 是一个结构化（structurally）的类型系统。

类型别名和接口的不同
类型别名和接口非常相似，大部分时候，你可以任意选择使用。接口的几乎所有特性都可以在 type 中使用，两者最关键的差别在于类型别名本身无法添加新的属性，而接口是可以扩展的。

``` javascript

// Interface
// 通过继承扩展类型
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
        
// Type
// 通过交集扩展类型
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
// Interface
// 对一个已经存在的接口添加新的字段
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
        
// Type
// 创建后不能被改变
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}
```

// Error: Duplicate identifier 'Window'.
在后续的章节里，你还会了解的更多。所以下面这些内容不能立刻理解也没有关系：

在 TypeScript 4.2 以前，类型别名的名字可能会出现在报错信息中，有时会替代等价的匿名类型（也许并不是期望的）。接口的名字则会始终出现在错误信息中。
类型别名也许不会实现声明合并，但是接口可以
接口可能只会被用于声明对象的形状，不能重命名原始类型
接口通过名字使用的时候，他们的名字会总是出现在错误信息中，如果直接使用，则会出现原始结构
大部分时候，你可以根据个人喜好进行选择。TypeScript 会告诉你它是否需要其他方式的声明。如果你喜欢探索性的使用，那就使用 interface ，直到你需要用到 type 的特性。
