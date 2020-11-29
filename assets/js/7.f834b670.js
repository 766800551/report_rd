(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{361:function(a,t,s){"use strict";s.r(t);var r=s(42),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("ul",[s("li",[a._v("通过 wps 加载项来实现报表的生成，不再分发在线版，后续都是离线版。")]),a._v(" "),s("li",[a._v("预留了自动备份功能，但是暂不开启。")]),a._v(" "),s("li",[a._v("此次更新日期为：2020-11-29，"),s("a",{attrs:{href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/software/form.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载地址"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"它是如何生成的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#它是如何生成的"}},[a._v("#")]),a._v(" 它是如何生成的？")]),a._v(" "),s("p",[a._v("报表生成插件主要是读取已经被激活的工作表，然后根据 report 设置（主要是报表的基本参数），section 设置（每一个数据块的范围），field 设置（节点所拥有的属性）来对表格的所有属性进行读取，最后进行 xml 拼接，生成的 xml 直接拷贝即可使用。后续会逐步实现将配置的 xml 一键转换成为旧版本（5.1 以下的）以及预览")]),a._v(" "),s("h3",{attrs:{id:"它为什么不支持版本为-5-1-以下的系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#它为什么不支持版本为-5-1-以下的系统"}},[a._v("#")]),a._v(" 它为什么不支持版本为 5.1 以下的系统？")]),a._v(" "),s("p",[a._v("5.1 以下的版本存在很多问题，xml 报表属性的不统一，没有勾选框节点，双页设置方式不统一等等，这些问题会导致如果兼容 5.1 以下的，那么这个插件的复杂性要上升很多。")]),a._v(" "),s("h3",{attrs:{id:"_5-1-版本以下的系统是否能够使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-版本以下的系统是否能够使用"}},[a._v("#")]),a._v(" 5.1 版本以下的系统是否能够使用？")]),a._v(" "),s("p",[a._v("5.1 以下的系统是能够使用的，但是像一些特殊的标签，那么就可能存在不支持的情况，另外后续会考虑将生成的 xml 进行转换，转换成 5.1 以下的系统能够使用的。。。")]),a._v(" "),s("h2",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[a._v("#")]),a._v(" 快速上手")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("安装 wps 插件。首先需要保证你电脑安装了 wps2019。启动离线版的服务，然后浏览器会自动访问：http://localhost:63189/setup/publish.html ，出现如下图所示的页面，点击安装即可。")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20201116112515232",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116112515232.png"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116112515232.png",alt:"image-20201116112515232"}})])])]),a._v(" "),s("li",[s("p",[a._v("打开表格。即可看到菜单栏多了一栏报表生成，点击后如下图所示：")])])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20201116112954450",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116112954450.png"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116112954450.png",alt:"image-20201116112954450"}})])]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[a._v("如上图所示，上面有四个按钮，每个按钮都对应一些配置（看起来很复杂，其实很简单），一般情况下是按照顺序从左到右配置过去的。首先我们点击第一个按钮："),s("strong",[a._v("report 设置")]),a._v("，点击如下图：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20201116113348102",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116113348102.png"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116113348102.png",alt:"image-20201116113348102"}})])]),a._v(" "),s("p",[a._v("点击进来后会有一些默认参数，但是还必须要设置页面范围，如果是单页的话就只设置 A 页范围，否则 A，B 页范围都需要设置，设置方法如下：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201116_115544",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_115544.gif"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_115544.gif",alt:"20201116_115544"}})])]),a._v(" "),s("p",[a._v("底下还有三个按钮：")]),a._v(" "),s("p",[s("strong",[a._v("导出全部配置")]),a._v("：将所有报表生成的配置进行导出，导出的是一个二进制文件")]),a._v(" "),s("p",[s("strong",[a._v("导入全部配置")]),a._v("：将所有报表生成的配置进行导入，导入的是一个二进制文件")]),a._v(" "),s("p",[s("strong",[a._v("清除全部缓存")]),a._v("：将所有的配置进行清空（不会清除默认配置，但是会还原）")])])]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[a._v("至此 report 设置已经完成了，再次点击 report 设置进行关闭，接下来我们点击 section 配置。点击如下图：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20201116114852569",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116114852569.png"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116114852569.png",alt:"image-20201116114852569"}})])]),a._v(" "),s("p",[a._v("右边有个空的表格，每一行都对应这报表 xml 的一个 section。")]),a._v(" "),s("p",[a._v("操作如下：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201116_115137",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_115137.gif"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_115137.gif",alt:"20201116_115137"}})])]),a._v(" "),s("p",[a._v("索引和合并索引是为了双页准备的，但是经测试不配置这两个双页也没有任何问题（奇奇怪怪的 xml 参数+1）。")])])]),a._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[a._v("就这样，section 设置也完成了，是不是觉得很简单，so easy，哈哈哈哈。接下来点击 field 设置。这个就没那么容易了。")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20201116115754681",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116115754681.png"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116115754681.png",alt:"image-20201116115754681"}})])]),a._v(" "),s("p",[a._v("首先看页面，很清楚的看到，除了文字以外还有这些被大括号包括的内容。右侧的任务窗格里面的表格便是对这些内容进行相应的解析配置。")]),a._v(" "),s("p",[a._v("不过你应该感觉到很奇怪，右侧的任务窗格里面的表格没有新增按钮，那怎么新增数据呢。")]),a._v(" "),s("p",[a._v("新增数据如下图：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201116_120723",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_120723.gif"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_120723.gif",alt:"20201116_120723"}})])]),a._v(" "),s("p",[a._v("多个节点呢？修改？是否只能是数字？")]),a._v(" "),s("p",[a._v("下图是对其操作的一个演示。")]),a._v(" "),s("ul",[s("li",[a._v("多个节点就多个大括号")]),a._v(" "),s("li",[a._v("如果大括号不是闭合的话，不会识别")]),a._v(" "),s("li",[a._v("可以随意加文字或符号，但是文字和符号会被去除，并不做任何保留")]),a._v(" "),s("li",[s("strong",[a._v("如果是节点的话，大括号里面必须要有数字")])])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201116_120849",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_120849.gif"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_120849.gif",alt:"20201116_120849"}})])]),a._v(" "),s("p",[a._v("这里说下原理，当然你可以选择跳过。")]),a._v(" "),s("p",[a._v("当你录入内容后，wps 会监测到单元格发生改变，这个时候就会判断内容，是否满足节点，是什么样的操作（新增还是删除还是修改），然后当你鼠标离开这个单元格后这个单元格改变的事件算是触发完成，这个时候相应数据会写进 localstorage，当你再次点击这个单元格的时候，会触发单元格被选中的事件，这个时候，会将相应数据进行展示。")]),a._v(" "),s("p",[a._v("注意：由于大括号里面必须要有数字，但是 docNode.Time 又是特殊的节点，所以表格里面需要写 99999。")]),a._v(" "),s("p",[a._v("右侧的表格里面可以录入哪些内容呢？")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201116_121846",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_121846.gif"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_121846.gif",alt:"20201116_121846"}})])]),a._v(" "),s("p",[a._v("录入内容后，点击下方的空白，即可保存录入。 关于选框节点，推荐配置成如下图：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20201116122123188",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116122123188.png"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116122123188.png",alt:"image-20201116122123188"}})])]),a._v(" "),s("p",[a._v("通过之前的我们知道，大括号里面非数字的会被过滤，其实选框真正的文本是存储在右侧表格的选框文本里，为什么表格里面要写这个是因为方便你在做的时候进行观看。不然一堆数字你也不知道谁是选框，是什么内容。当然这个不是必须的，"),s("strong",[a._v("因为大括号里面的除数字，英文逗号，冒号之外的所有字符都会被去除")]),a._v("。")]),a._v(" "),s("p",[a._v("完成了之后，最好点击一下清除无效缓存，因为删除的操作有很多种，我没法保证你删除的操作一定触发了相关操作（不想枚举），每次自动轮询监测又是非常浪费性能的，所以加个按钮手动点，可以当成保存按钮点击，虽然它是用来删除的。")])]),a._v(" "),s("li",[s("p",[a._v("现在，field 设置也已经完成，关闭后，点击 xml 内容。如下图：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20201116122742665",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116122742665.png"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116122742665.png",alt:"image-20201116122742665"}})])]),a._v(" "),s("p",[a._v("可以看到除了生成按钮和复制按钮外，还有几个选项，具体意思就不解释了，操作一边：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201116_123021",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_123021.gif"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201116_123021.gif",alt:"20201116_123021"}})])])])]),a._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[s("p",[a._v("点击复制 xml，拷贝过去看一下，拖动表格，可以调整的比较整齐，下方的报表用了 1.3 倍行高（xml 行高=报表行高*1.3）")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20201116123526313",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116123526313.png"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201116123526313.png",alt:"image-20201116123526313"}})])])])]),a._v(" "),s("h2",{attrs:{id:"report设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#report设置"}},[a._v("#")]),a._v(" report设置")]),a._v(" "),s("h3",{attrs:{id:"纸张宽度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纸张宽度"}},[a._v("#")]),a._v(" 纸张宽度")]),a._v(" "),s("p",[a._v("文书宽度，需要为大于0的整数")]),a._v(" "),s("h3",{attrs:{id:"纸张高度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纸张高度"}},[a._v("#")]),a._v(" 纸张高度")]),a._v(" "),s("p",[a._v("文书高度，需要为大于0的整数")]),a._v(" "),s("h3",{attrs:{id:"外边距"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外边距"}},[a._v("#")]),a._v(" 外边距")]),a._v(" "),s("p",[a._v("文书的外边距，需要用英文逗号隔开，分别是左，右，上，下，需要为大于0的整数。")]),a._v(" "),s("h3",{attrs:{id:"横向打印"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#横向打印"}},[a._v("#")]),a._v(" 横向打印")]),a._v(" "),s("p",[a._v("默认为否，如果选是则横着打印，否则竖着打印。")]),a._v(" "),s("h3",{attrs:{id:"行高缩放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行高缩放"}},[a._v("#")]),a._v(" 行高缩放")]),a._v(" "),s("p",[a._v("指excel的行高按照什么比例缩放到xml报表中，大于0的小数。")]),a._v(" "),s("h3",{attrs:{id:"双页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双页"}},[a._v("#")]),a._v(" 双页")]),a._v(" "),s("p",[a._v("默认不启用，如果是双页文书则需要启用")]),a._v(" "),s("h3",{attrs:{id:"a页范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a页范围"}},[a._v("#")]),a._v(" A页范围")]),a._v(" "),s("p",[a._v("指定excel的一个范围来生成文书，如果是单页的话，只需要设置A页范围，如果是双页则需要设置B页范围")]),a._v(" "),s("h3",{attrs:{id:"b页范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b页范围"}},[a._v("#")]),a._v(" B页范围")]),a._v(" "),s("p",[a._v("指定excel的一个范围来生成文书，需要双页配置为已启用")]),a._v(" "),s("h3",{attrs:{id:"保存-重新载入字体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存-重新载入字体"}},[a._v("#")]),a._v(" 保存/重新载入字体")]),a._v(" "),s("p",[a._v("当配置发生变化时，需要点击保存才会生效（只是针对report设置）。")]),a._v(" "),s("p",[a._v("因为wps遍历字体并重新编号的速度并不可观，因此当excel发生字体变化时，请点击这个按钮，否则发生变化的字体便是未定义。")]),a._v(" "),s("h3",{attrs:{id:"导出全部配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出全部配置"}},[a._v("#")]),a._v(" 导出全部配置")]),a._v(" "),s("p",[a._v("将所有报表生成的配置进行导出，导出的是一个二进制文件")]),a._v(" "),s("h3",{attrs:{id:"导入全部配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入全部配置"}},[a._v("#")]),a._v(" 导入全部配置")]),a._v(" "),s("p",[a._v("将所有报表生成的配置进行导入，导入的是一个二进制文件")]),a._v(" "),s("h3",{attrs:{id:"清除全部缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除全部缓存"}},[a._v("#")]),a._v(" 清除全部缓存")]),a._v(" "),s("p",[a._v("将所有的配置进行清空（不会清除默认配置，但是会还原）")]),a._v(" "),s("h2",{attrs:{id:"section设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#section设置"}},[a._v("#")]),a._v(" section设置")]),a._v(" "),s("p",[a._v("每一行的section都对应着xml里面的一对section标签。")]),a._v(" "),s("h3",{attrs:{id:"报表块类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报表块类型"}},[a._v("#")]),a._v(" 报表块类型")]),a._v(" "),s("p",[a._v("对应着section标签里面的kind，区段类型。")]),a._v(" "),s("h3",{attrs:{id:"范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范围"}},[a._v("#")]),a._v(" 范围")]),a._v(" "),s("p",[a._v("指一个section在表格里面所作用的范围是多大，选中范围内单元格，点击即可进行录入。")]),a._v(" "),s("h3",{attrs:{id:"列数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列数"}},[a._v("#")]),a._v(" 列数")]),a._v(" "),s("p",[a._v("VerticalDetail专有，指定列数（后续可能会考虑删除此参数，因为是多余配置，主要因为当指定范围后，其实表格里面的列数就已经明确了）")]),a._v(" "),s("h3",{attrs:{id:"索引、合并索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引、合并索引"}},[a._v("#")]),a._v(" 索引、合并索引")]),a._v(" "),s("p",[a._v("暂未用到，预留的双页参数。")]),a._v(" "),s("h3",{attrs:{id:"清除section缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除section缓存"}},[a._v("#")]),a._v(" 清除section缓存")]),a._v(" "),s("p",[a._v("点击后会删除目前所有的section配置并且进行刷新。")]),a._v(" "),s("h2",{attrs:{id:"field设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field设置"}},[a._v("#")]),a._v(" field设置")]),a._v(" "),s("p",[a._v("field为节点的配置，相关配置会写入LocalStorage里。")]),a._v(" "),s("p",[s("strong",[a._v("清除field缓存在存在类型为opfield的时候会误删，所以请谨慎使用，后续会修复这个bug")])]),a._v(" "),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("p",[a._v("内容有点多，暂略，后续有空补上，可以参考报表的配置文档。")]),a._v(" "),s("h3",{attrs:{id:"按钮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按钮"}},[a._v("#")]),a._v(" 按钮")]),a._v(" "),s("h4",{attrs:{id:"高亮节点-取消高亮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高亮节点-取消高亮"}},[a._v("#")]),a._v(" 高亮节点/取消高亮")]),a._v(" "),s("p",[a._v("激活后，会标识那些单元格已经存在节点。")]),a._v(" "),s("h4",{attrs:{id:"选框替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选框替换"}},[a._v("#")]),a._v(" 选框替换")]),a._v(" "),s("p",[a._v('对选中的单元格进行添加replace="1,√"这样的配置。')]),a._v(" "),s("h4",{attrs:{id:"签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名"}},[a._v("#")]),a._v(" 签名")]),a._v(" "),s("p",[a._v('对选中的单元格进行添加format="signature"这样的配置')]),a._v(" "),s("h4",{attrs:{id:"日期时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日期时间"}},[a._v("#")]),a._v(" 日期时间")]),a._v(" "),s("p",[a._v('对选中的单元格进行添加format="yyyy-MM-dd HH:mm" dataType="System.DateTime"这样的配置')]),a._v(" "),s("h4",{attrs:{id:"日期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日期"}},[a._v("#")]),a._v(" 日期")]),a._v(" "),s("p",[a._v('对选中的单元格进行添加format="yyyy-MM-dd" dataType="System.DateTime"这样的配置')]),a._v(" "),s("h4",{attrs:{id:"时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间"}},[a._v("#")]),a._v(" 时间")]),a._v(" "),s("p",[a._v('对选中的单元格进行添加format="HH:mm" dataType="System.DateTime"这样的配置')]),a._v(" "),s("h4",{attrs:{id:"清除field缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除field缓存"}},[a._v("#")]),a._v(" 清除field缓存")]),a._v(" "),s("p",[a._v("目前存在bug，慎用（最好不用）")]),a._v(" "),s("h2",{attrs:{id:"斜线框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#斜线框"}},[a._v("#")]),a._v(" 斜线框")]),a._v(" "),s("p",[a._v("斜线框区别于一般的边框，主要是因为文本的斜线框与节点的斜线框配置方式不一样。")]),a._v(" "),s("h3",{attrs:{id:"文本的斜线框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文本的斜线框"}},[a._v("#")]),a._v(" 文本的斜线框")]),a._v(" "),s("p",[a._v("文本的斜线框需要在文字内容中间加入分割符，分割符是一对大括号，里面可以有内容，但不会影响文本的位置，例如：")]),a._v(" "),s("p",[s("strong",[a._v("评估内容{}评估日期")]),a._v("  和 "),s("strong",[a._v("评估内容{       }评估日期")]),a._v(" 的效果是一模一样的，如下所示：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201126_182207",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201126_182207.gif"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201126_182207.gif",alt:"20201126_182207"}})])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201126_182423",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201126_182423.gif"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201126_182423.gif",alt:"20201126_182423"}})])]),a._v(" "),s("h3",{attrs:{id:"节点的斜线框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点的斜线框"}},[a._v("#")]),a._v(" 节点的斜线框")]),a._v(" "),s("p",[a._v("节点的斜线框就比文本的斜线框简单的多，因为节点本身就已经被大括号包裹了，所以直接加上斜边框即可，如下：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201126_182820",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201126_182820.gif"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201126_182820.gif",alt:"20201126_182820"}})])]),a._v(" "),s("p",[a._v("节点之间录入空格，不会影响效果，例如，你可以这样配置：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201126_183045",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201126_183045.gif"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/20201126_183045.gif",alt:"20201126_183045"}})])]),a._v(" "),s("h2",{attrs:{id:"排序方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排序方式"}},[a._v("#")]),a._v(" 排序方式")]),a._v(" "),s("p",[a._v("生成xml的时候可以选择排序方式，"),s("strong",[a._v("5.1以下的版本请慎重选择，因为低版本的可能不支持docNode.Time参数")])]),a._v(" "),s("p",[a._v("排序方式默认是以时间正式排序，如果是有出入量统计的护理记录单的话，可以将出入量统计时间也进行选中。")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20201126183526907",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201126183526907.png"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201126183526907.png",alt:"image-20201126183526907"}})])]),a._v(" "),s("h2",{attrs:{id:"页脚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页脚"}},[a._v("#")]),a._v(" 页脚")]),a._v(" "),s("p",[a._v("页脚默认选中生成，如果不需要可以取消勾选，取消勾选则不生成。")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20201126183704937",href:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201126183704937.png"}},[s("img",{attrs:{src:"https://monn.oss-cn-hangzhou.aliyuncs.com/form-20201129/image/image-20201126183704937.png",alt:"image-20201126183704937"}})])])])}),[],!1,null,null,null);t.default=_.exports}}]);