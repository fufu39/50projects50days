[TOC]

---

## **目录**

## **50projects50days 精华整理**

> 官网：[50 Projects 50 Days](https://50projects50days.com/)
>
> 介绍：`50projects50days`是一个非常经典的前端实战练习项目，核心目标是通过 50 天完成 50 个小型前端项目来快速提升 JavaScript、HTML、CSS 的实际开发能力。



### **Day1 Expanding Cards 拓展卡片**

- **cover与contain**

  `background-size: cover;`：尽量让**背景图铺满**，图片比例不变，**多余的裁剪掉**

  `background-size: contain;`：**完整显示整个图片**，图片比例不变，**没填满的留空白**

  

- **`flex: 1;`**

  父容器flex布局，子项设置`flex: 1;`，**可以均分空间（设置不同值可以按比例分配）**

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

- **`:root`与变量**

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

- **伪类选择器**

  1. 链接伪类选择器（注意书写的顺序LVHA：Link, Visited, Hover, Active）

     ```css
     /* 未访问过的链接 */
     a:link {text-decoration: none; color: black;}
     /* 访问过的链接 */
     a:visited {color: orange;}
     /* 鼠标悬停时 */
     a:hover {color: skyblue;}
     /* 鼠标按下未松 */
     a:active {color: green;}
     
     /* 可以这样用，悬停在a时修改b */
     a:hover b{}
     ```

  2. 焦点伪类选择器（获取焦点，常用于input表单元素）

     ```css
     input:focus {
         background-color: pink;
     }
     ```

  3. **结构伪类选择器**（基于元素在父元素中的位置选择）

     ```css
     ul li:first-child  //选择ul里的第一个子元素，同时必须是li
     ul li:last-child  //选择最后一个子元素，同时必须是li
     ul li:nth-child(5)  //选择第n个子元素，同时必须是li
     ul li:nth-child(even) //选择偶数位置的子元素li
     ul li:nth-child(odd) //选择奇数位置的子元素li
     ul li:nth-child(2n+1) //选择第2n+1个子元素li
     ```

  4. **类型伪类选择器**（基于**特定类型**元素在父元素中的位置选择）

     在结构伪类选择器的基础上指定类型

     ```css
     div p:first-of-type //选择div中第一个p元素
     div p:last-of-type /选择div中最后一个p元素
     div p:nth-of-type(2) //选择div下第二个p元素
     div p:nth-of-type(2n+1)
     ```

  5. 否定伪类选择器（排除指定元素）

     ```css
     /* 选择div中类名不为file的p元素 */
     div p:not(.file)
     ```



### **Day4 Hidden Search Widget 隐藏搜索框**

- **渐变**

  > 渐变是一种背景图像效果，不是简单的颜色填充，因此用于`background-image`或`background`属性

  1. 线性渐变（颜色沿直线变化）

     ```css
     background-image: linear-gradient(方向, 颜色1, 颜色2, ...);
     ```

     - 方向：可以用关键词：`to right`、`to bottom`、`to top left`。也可以用角度（0deg是从下到上，增加角度是顺时针旋转），因此90deg是水平向右，不写的话默认方向是`to bottom（180deg）`
     - 颜色：就是颜色停止点，默认是均分的，也可以添加百分比：`linear-gradient(90deg, #71b7e6 0%, #ffffff 30%, #9b59b6 100%)`，指定在对应百分比位置的颜色颜色停止点

  2. 径向渐变（颜色从一个点向外辐射）

     ```css
     background-image: radial-gradient(形状, 颜色1, 颜色2, ...);
     ```

     - 形状：默认是椭圆(`ellipse`)，设置`circle`为圆
     - 一般用于模拟光源效果、突出中心内容

  

- **`classList`属性**

  classList是DOM元素的一个只读属性，会返回一个该元素的CSS类名列表（并不是真数组，但类似数组），提供了一些方法(add、remove、toggle...)来操作类名

  1. add

     向元素添加一个或多个类名。如果类名存在，不会重复添加

     ```js
     element.classList.add('className1', 'className2', ...);
     ```

  2. remove

     向元素移除一个或多个类名。如果类名不存在，则不影响

     ```js
     element.classList.remove('className1', 'className2', ...);
     ```

  3. toggle

     切换类名。如果类名存在就remove，不存在就add

     ```js
     element.classList.toggle('className');
     ```

  4. contains

     检查元素是否包含指定类名

     ```js
     element.classList.contains('className'); // 返回 true 或 false
     ```

  5. replace

     将一个类名替换为另一个类名

     ```js
     element.classList.replace('oldClass', 'newClass');
     ```



### **Day5 Blurry Loading 模糊加载**

- filter

  

- JS逻辑：定时器

  ```js
  let load = 0;
  let timer = null;
  let blurryLoadingHandler = function(){
      load++;
      if(load > 99){
          clearTimeout(timer)
      }else{
          timer = setTimeout(blurryLoadingHandler,20);
      }
      text.textContent = `页面加载${ load }%`;
      text.style.opacity = scale(load,0,100,1,0);
      bg.style.filter = `blur(${scale(load,0,100,20,0)}px)`;
  }
  blurryLoadingHandler();



### **Day6 Scroll Animation 滚动动画**
