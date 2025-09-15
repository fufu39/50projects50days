[TOC]

---

## **目录**

## **50projects50days 精华整理**

> 官网：[50 Projects 50 Days](https://50projects50days.com/)
>
> 介绍：`50projects50days`是一个非常经典的前端实战练习项目，核心目标是通过 50 天完成 50 个小型前端项目来快速提升 JavaScript、HTML、CSS 的实际开发能力。



### **Day1 Expanding Cards 拓展卡片**

- 区分cover与contain：

  `background-size: cover;`：尽量让**背景图铺满**，图片比例不变，**多余的裁剪掉**

  `background-size: contain;`：**完整显示整个图片**，图片比例不变，**没填满的留空白**

  

- 父容器flex布局，子项设置`flex: 1;`，**可以均分空间（设置不同值可以按比例分配）**

  > **简而言之，子组件全部`flex: 1;`就是均分，部分设置更大值可以占据更多比例，用于实现拓展卡片效果**

  `flex: 1`等价于下面三行：
  
  ```css
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  ```
  
  flex是简写属性，包含flex-grow、flex-shrink、flex-basis三个子属性：
  
  1. flex-grow（默认0）：当父容器有剩余空间时，子项按比例增长。
  2. flex-shrink（默认1）：当父容器空间不足时，子项按比例缩小。
  3. flex-basis（默认auto）：子项在主轴上的初始大小（通常是内容宽度）。
  
  
  
- JS逻辑：去除全部active，给当前元素添加`.active`

  ```js
  const panels = document.querySelectorAll('.container > .panel')
  panels.forEach(item => {
    // 全部添加点击事件
    item.addEventListener('click', () => {
      // 前面得到的panels是NodeList（DOM节点集合），无法使用数据方法，Array.from转化其为真数组。从而去掉全部active
      Array.from(item.parentElement.children).forEach(el => el.classList.remove('active'))
      item.classList.add('active')
    });
  });
  ```




### **Day2 Progress Steps 步骤器**

- `:root`与变量：

  1. `:root`等价于html文档的根元素，即`<html>`。一般用于存放全局变量，也成为全局变量区域

     ```css
     :root{
       --line-border-fill: #3498db;
       --line-border-empty: #e0e0e0;
     }
     ```

  2. **CSS变量（自定义属性）**

     变量名称必须以`--`开头，例如`--main-color`；`var`是取值函数，用来调用变量

     ```css
     .button {
       /*第二个参数为回退值，如果变量不存在就用第二个值：var(--变量名, [可选的默认值])*/
       color: var(--main-color, blue);
       border-color: var(--main-color);
     }
     ```

     变量不仅可以放在`:root`作为全局变量，还可以放在局部选择器内，只是作用域只在该元素及其所有子元素



### **Day3 Rotating Navigation Animation 旋转菜单**

- rotate







### **Day4 Hidden Search Widget 隐藏搜索框**

