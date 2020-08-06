# wx-subpackage
小程序分包加载—未分包



1.前言

小程序规定

考虑到包大小对用户体验的影响，平台限制单个代码包的大小上限为 2M。代码包上限的增加对于开发者来说，能够实现更丰富的功能，但对于用户来说，也增加了下载流量和本地空间的占用。为了保证启动速度，开发者应该尽可能的控制代码包大小

所以

某些情况下，开发者需要将小程序划分成不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载。

在构建小程序分包项目时，构建会输出一个或多个分包。每个使用分包小程序必定含有一个主包。所谓的主包，即放置默认启动页面/TabBar 页面，以及一些所有分包都需用到公共资源/JS 脚本；而分包则是根据开发者的配置进行划分。

在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，客户端才会把对应分包下载下来，下载完成后再进行展示。

2.分包的限制

目前小程序分包大小有以下限制：

整个小程序所有分包大小不超过 16M

单个分包/主包大小不能超过 2M

（分包数量目前没有限制，也就是说你可以放N个分包，甚至每个页面一个分包；
但是作为一个正直且有品位的程序猿，我们最好是根据项目的tabbar去决定分包的多少）

2.分包的优点

微信限制了代码包不能超过2M，当我们代码包超过2M时，项目将无法正常运行。使用分包可以提升小程序代码包总体积上限，承载更多的功能与服务。


对小程序进行分包，可以优化小程序首次启动的下载时间，以及在多团队共同开发时可以更好的解耦协作。（需要下载的代码量小了很多，白屏时间更短，用户体验更佳）

3.原则

打包原则
声明 subpackages 后，将按 subpackages 配置路径进行打包，subpackages 配置路径外的目录将被打包到 app（主包） 中
app（主包）也可以有自己的 pages（即最外层的 pages 字段）
subpackage 的根目录不能是另外一个 subpackage 内的子目录
入口页面/tabBar 页面必须在 app（主包）内

引用原则
分包A 无法 require 分包B JS 文件，但可以 require app、自己 分包 内的 JS 文件
分包A 无法 import 分包B 的 template，但可以 require app、自己 分包 内的 template
分包A 无法使用 分包B 的资源，但可以使用 app、自己 分包 内的资源

3.1按需分包

确认需要进行分包的文件

分包

  分出主包和分包文件，主包包含tabbar页面以及其他公共文件。

  分包根据tabbar配置项进行划分【页面、分包使用的公共文件】（分包结构建议与主包结构统一规范）
  
3.2配置app.json

开发者通过在 app.json subpackages 字段声明项目分包结构：
{
  "pages":[
    "pages/index",
    "pages/logs"
  ],
  "subpackages": [
    {
      "root": "packageA",
      "pages": [
        "pages/cat",
        "pages/dog"
      ]
    }, {
      "root": "packageB",
      "name": "pack2",
      "pages": [
        "pages/apple",
        "pages/banana"
      ]
    }
  ]
}

字段	类型	说明
root	String	分包根目录
name	String	分包别名，分包预下载时可以使用
pages	StringArray	分包页面路径，相对与分包根目录
independent	Boolean	分包是否是独立分包

文档链接: https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html

3.3修改页面路径

分包之后页面中所有涉及到分包的路径都会发生变化，此时需要进行对应的修改。

建议：

  相同包之间使用相对路径

  非相同包之间使用绝对路径

3.4独立分包

文档链接：https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/independent.html

开发者通过在app.json的subpackages字段中对应的分包配置项中定义independent字段声明对应分包为独立分包。

{
  "pages": [
    "pages/index",
    "pages/logs"
  ],
  "subpackages": [
    {
      "root": "moduleA",
      "pages": [
        "pages/rabbit",
        "pages/squirrel"
      ]
    }, {
      "root": "moduleB",
      "pages": [
        "pages/pear",
        "pages/pineapple"
      ],
      "independent": true
    }
  ]
}

