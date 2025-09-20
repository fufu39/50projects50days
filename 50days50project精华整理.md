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

- **`filter`属性**

  filter属性用于为元素进行视觉处理（如模糊、亮度调整、色调变化），类似于添加滤镜效果，无需改动原始图像

  常用滤镜函数：

  1. `blur(radius)`：调整模糊效果，模糊程度由半径决定

     ```css
     filter: blur(5px);
     ```

  2. `brightness(percentage)`：调整亮度，0%全黑到100%原始亮度，大于100%更亮

     ```css
     filter: brightness(150%);

  3. `contrast(percentage)`：调整对比度，0%全灰到100%原始对比度，大于100%增强对比度

     ```css
     filter: contrast(200%);

  

- JS逻辑：通过定时器实现加载效果

  ```js
  let load = 0
  /* 定时器，每30ms调用blurring函数 */
  let timer = setInterval(blurring, 30)
  
  function blurring() {
    load++
    if(load > 99){
      clearInterval(timer)
    }
    loadText.innerHTML = `${load}%`
    /* 透明度和模糊效果变化 */
    loadText.style.opacity = scale(load, 100, 0, 0, 1)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  }
  ```

  工具函数：将输入值`n`从一个范围`[inMin, inMax]`线性映射到另一个范围`[outerMin, outerMax]`

  ```js
  const scale = (n,inMin,inMax,outerMin,outerMax) => (n - inMin) * (outerMax - outerMin) / (inMax - inMin) + outerMin;
  ```



### **Day6 Scroll Animation 滚动动画**

- **`box-shadow`属性**

  ```css
  box-shadow: [inset] 水平偏移 垂直偏移 (模糊半径) (拓展半径) 阴影颜色 [, .....];
  ```

  1. [inset]为设置内阴影，默认是外阴影
  2. 水平偏移正值右移、负值左移。垂直偏移正值下移，负值上移
  3. 模糊半径：越大越模糊，0为无模糊。
  4. 拓展半径：正值扩大阴影，负值缩小
  5. 阴影颜色一般用rgba，可以支持透明度
  6. **此外可以用逗号分隔多个阴影，会顺序渲染，前面覆盖后面的**

  

  例子：

  ```css
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 0, 0, 0.5);
  ```

  

- **浏览器高度、滚动和元素位置相关API总结**

  - **视口**

    1. `window.innerHeight`

       - 获取浏览器视口高度(单位px)，可用于计算滚动触发线

       - 示例：

         ```js
         console.log(window.innerHeight) // 假设为 900px
         const triggerBottom = window.innerHeight * 0.8
         // triggerBottom = 720px，触发线在视口距离顶部80%位置
         ```
         
         
  
    2. `window.innerWidth`

       - 获取浏览器视口宽度，可用于响应式布局

       - 示例：

         ```js
         console.log(window.innerWidth)
         if (window.innerWidth < 768) {
           console.log('移动端布局')
         }
         ```
         
         
  
    3. `window.outerHeight / window.outerWidth`

       获取整个浏览器窗口的高度/宽度（包含工具栏、地址栏等），使用较少。

       

    4. `document.documentElement.clientHeight / clientWidth`

       - 获取 `<html>` 根元素的可见区域宽高。
       - 对比：相比前面innerHeight、innerWidth，**包括padding，不包括滚动条、边框、margin**
  
       
  
    5. `document.documentElement.scrollHeight`
  
       - 用法：获取 `<html>` 根元素完整高度，可用于判断是否滚动到底部
  
       - 示例：
  
         ```js
         console.log(document.documentElement.scrollHeight)
         if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
           console.log('滚动到底了')
         }
  
    
  
  - **元素位置**
  
    1. `element.getBoundingClientRect()`
  
       - 返回元素相对于视口的矩形对象，可以得到下面属性：
  
         > 1. top：元素顶部到视口顶部的距离（可能是负数）
         > 2. bottom：元素底部到视口顶部的距离
         > 3. left / right：元素左侧/右侧到视口左侧的距离
         > 4. width / height：元素尺寸
  
       - 示例：
  
         ```js
         const box = document.querySelector('.box')
         const rect = box.getBoundingClientRect()
         console.log(rect.top, rect.bottom)
         // top < window.innerHeight 表示进入视口
         ```
  
         
  
    2. `element.offsetTop / offsetLeft`
  
       - 获取元素相对最近的定位祖先元素（offsetParent）各个方向的位置。与`getBoundingClientRect`不同，它不随滚动变化
  
       - 示例：
  
         ```html
         <div style="position: relative;">
           <div class="box">Content</div>
         </div>
         <script>
           const box = document.querySelector('.box')
           console.log(box.offsetTop)
         </script>
         ```
  
         
  
    3. `element.clientWidth / clientHeight`
  
       - 获取元素自身内容可见区域尺寸（包含 padding，不含 margin/border/滚动条）
  
       - 示例：
  
         ```html
         <div class="box" style="width:200px; padding:10px;">Content</div>
         <script>
           const box = document.querySelector('.box')
           console.log(box.clientWidth)
         </script>
         ```
  
         
  
    4. `element.scrollHeight / scrollWidth`
  
       - 获取元素内容的完整高度/宽度（包含溢出隐藏部分）
  
       - 对比：相比`element.clientWidth / clientHeight`，这个还包含了隐藏部分尺寸
  
         
  
    5. `element.scrollTop / scrollLeft`
  
       - 获取元素内容顶部/左侧到视口顶部/左侧的滚动距离（已滚动的距离）
  
    
  
  - **滚动**
  
    1. `window.scrollX / window.scrollY`
  
       - 用法：表示水平/垂直方向的滚动距离（滚动距离就是已经被卷出去的距离）
  
         通常配合 `scrollTo`、`scrollBy` 控制滚动位置
  
       
  
    2. `window.scrollTo(x, y) / window.scrollTo({ top, left, behavior })`
  
       - 滚动到指定位置（behavior默认auto是直接跳转，smooth是平滑滚动）
  
       - 示例：
  
         ```js
         // 滚动到(x, y)位置
         window.scrollTo(x, y)
         window.scrollTo({
           top: y, left: x, behavior: "smooth"
         })
         // 回到顶部（平滑滚动）
         window.scrollTo({ top: 0, behavior: 'smooth' })
  
    3. `window.scrollBy(x, y)`
  
       - 相对当前位置进行滚动
  
       - 示例：
  
         ```js
         // 向下滚动100px
         window.scrollBy(0, 100)
  
       
  
    4. element.scrollIntoView(options)
  
       - 滚动页面，让某元素进入可视区域。
  
         options内属性：
  
         > 1. behavior：滚动行为
         >
         >    `auto`（默认，瞬间跳过去）
         >
         >    `smooth`（平滑滚动）
         >
         > 2. block：垂直方向对齐方式
         >
         >    `start`（顶部对齐，默认）
         >
         >    `center`（元素滚到视口中间）
         >
         >    `end`（底部对齐）
         >
         >    `nearest`（就近对齐）
         >
         > 3. inline：水平方向对齐方式
         >
         >    （同 block，但针对 x 轴）
  
       - 示例：
  
         ```js
         document.querySelector('.box').scrollIntoView({
           behavior: 'smooth',
           block: 'center',
           inline: "center"
         })
  
       
  
    5. 事件：
  
       `window.addEventListener('scroll', callback)`监听整个页面滚动
  
       `element.addEventListener('scroll', callback)`监听特定容器的滚动 (需overflow: auto/scroll)
  



### **Day7 Split Landing Page 页面分裂**

- **`@media`响应式布局**

  根据不同的设备特性（屏幕宽度、高度、分辨率、方向等）应用不同的样式，实现设备适配的响应式布局。

  **基本语法：**

  media-type默认是all，screen为屏幕、print为打印机

  condition用来描述设备特性，如min-width最小宽度、max-width最大宽度、orientation: portrait竖屏、orientation: landscape横屏

  ```css
  @media media-type and (condition) {
    /* CSS样式 */
  }
  ```

  **常见示例：**

  1. 不同宽度

     ```css
     /* 宽度小于1024px */
     @media screen and (max-width: 1024px) {
       body {
         background: lightgreen;
       }
     }
     /* 宽度小于600px。后面的覆盖前面的 */
     @media screen and (max-width: 600px) {
       body {
         background: lightcoral;
       }
     }
     
     ```

     ```css
     /* 宽度在600px和1024px间 */
     @media screen and (min-width: 600px) and (max-width: 1024px) {
       .container {
         font-size: 18px;
       }
     }

  2. 打印机

     ```css
     @media print {
       body {
         background: none; /* 打印时去掉背景 */
         color: black;
       }
     }



### **Day8 Form Wave 输入框波浪效果**

- JS逻辑：文字波浪效果

  innerHTML为label内HTML结构，innerText为该label元素纯文本内容，`.split('')`将文本分割成字符数组，最后map返回一个包含多个`<span>`的数组，每个span内为一个字母。`transition-delay`会让span因延迟不同依次产生动画，形成波浪效果

  ```js
  label.innerHTML = label.innerText.split('').map((letter, index) => {
      return `<span style="transition-delay: ${index*50}ms">${letter}</span>`
  }).join('')



### **Day9 Sound Board 音板**

- **相关知识点：操作DOM元素**

  1. **创建元素**

     `const btn = document.createElement('button')`：创建新的HTML元素节点，可用于创建常用标签（如div、p、button等）

     > 此时创建的元素会存在到内存中，不会直接显示到页面上，需要专门插入

     

  2. **设置元素内容与属性**

     - 文本类型

       `element.innerText = '内容'`：设置或获取纯文本（会考虑样式，例如隐藏的文本不读取）

       `element.textContent = '内容'`：设置或获取纯文本（完全不考虑样式）

       `element.innerHTML = '<b>内容</b>'`：设置或获取HTML结构

     - 属性

       `element.setAttribute('属性名', '值')`：设置任意属性

       `element.id = 'xxx'`，`element.className = 'btn'`：直接设置常用属性

       `element.src = 'xx.png'`：设置图片地址

     - 样式

       `element.style.color = 'red'`：直接设置行内样式

       `element.classList.add('className')` / `.remove()` / `.toggle()`：动态修改类名

     

  3. **插入到文档中**

     `parent.appendChild(child)`：添加节点到父元素内的最后一个子节点后面

     `parent.insertBefore(newNode, referenceNode)`：把newNode插入到指定元素referenceNode前面

     `element.append()`：添加一个或多个节点和字符串到父元素内的最后

     `element.prepend()`：添加一个或多个节点和字符串到父元素内的最前面

     > `appendChild` 只能插入节点，`append` 可以插入节点和字符串。

     

  4. **绑定事件**

     `element.addEventListener('click', ()=>{})`：绑定事件处理函数

     

  5. **删除元素**

     `parent.removeChild(child)`：从父元素中移除某个子节点

     `element.remove()`：直接删除自身

     

  6. **克隆元素**

     `element.cloneNode(true/false)`

     - `true`：深拷贝，复制子元素和内容。
     - `false`：浅拷贝，只复制当前元素本身。

     

  7. **查找元素**

     `document.querySelector(selector)`：返回第一个匹配的元素

     `document.querySelectorAll(selector)`：返回所有匹配元素（NodeList类数组对象）

     `document.getElementById('id')`：根据id获取元素

     `document.getElementsByClassName('className')`：获取类名集合（HTMLCollection类数组对象）

     > 区别：
     >
     > `querySelector` / `querySelectorAll` 使用 CSS 选择器，通用性更强
     >
     > `getElementById` / `getElementsByClassName` 更快，但功能单一

  

- **概念区分：节点与元素**

  - **节点（Node）**

    DOM 树上的所有对象，包括元素节点、文本节点、注释节点等。

    1. 元素节点（Element Node）：HTML 标签，比如 `<div>`、`<p>`
    2. 文本节点（Text Node）：标签里的文字，比如 `<p>Hello</p>` 里的 `Hello`
    3. 注释节点（Comment Node）：HTML 注释 `<!-- comment -->`
    4. 文档节点（Document Node）：整个 HTML 文档对象 `document`

    

  - **元素（Element）**

    元素是节点的一种（元素节点），专指HTML标签

    > 例如 `<div>Hello</div>` 中：`<div>` 是元素节点，`Hello` 是文本节点



### **Day10 Dad Jokes 随机笑话**



