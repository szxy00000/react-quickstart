### 依赖安装：
首先安装yarn
之后执行
yarn
安装好依赖之后
yarn start

## 架构思路：

### 整体开发逻辑：
推崇stateless component，所有数据尽量用redux管理，在actions中将逻辑抽象出来，写成纯函数，放在utils中，便于单元测试，同时数据集中管理，出问题只需去看处理数据的纯函数，大幅降低出错风险，便于快速定位问题（大多数bug会出在前端数据逻辑处理上，将这块抽象成纯函数非常必要）

##### 关于页面：
 - 每个页面 仅有路由的页面连接redux，子页面均通过 {...this.props} 的形式传值，保证数据流向单一
 - 页面中的模块，若有复用可能，放在component文件夹中，否则放在页面index.jsx同级
 - 每个页面/模块可以通过 import { actions } from 'store/$pageName' 的形式获得action 然后进行dispatch

##### 关于redux：
 - 设计的思路：
    开发的时候只需要一边维护action用来发请求，准备数据，一边维护页面view，不需要关心新增types，不需要新增reducer，不需要去总reducer的combine里添加reducer（这块参考 src/store/index.js 已经集中处理，将store文件名作为页面store名），大幅减少开发过程中文件切换工作
 - 每个页面是自己的一个小的store，所以每个页面只需要维护自己的小store，大多数情况只需要一个更新操作来更新这个小store
    更新操作如下：
       ```
          dispatch({
             type: TYPES.UPDATE_PROPS,
             payload: {}
          })
       ```

    对应只需要一个reducer：
       ```
          if (type === TYPES.UPDATE_PROPS) {
            return {
              ...state,
              ...payload
            }
          }
       ```

### 附带快速新增页面工具：
``` npm run page $pagename ```  $pagename为要新增页面的名称
运行命令后会生成符合上面逻辑的页面，less，store，再手动到router/index.js中添加路由即可

