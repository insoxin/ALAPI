(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{222:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bilibili-封面获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bilibili-封面获取"}},[t._v("#")]),t._v(" Bilibili  封面获取")]),t._v(" "),a("blockquote",[a("p",[t._v("想必很多人都会遇到这样的一个问题。在B站浏览视频的时候，往往很多人会被各式各样的封面所吸引，从而点了进去，结果发现往往封面的图片在这些视频中一闪而过，甚至有的时候都没有出现。")]),t._v(" "),a("p",[t._v("这个接口就可以获取 b 站的 视频封面，直播封面，专栏封面等。")])]),t._v(" "),a("h2",{attrs:{id:"接口参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口参数"}},[t._v("#")]),t._v(" 接口参数")]),t._v(" "),a("p",[t._v("请求地址："),a("code",[t._v("/api/bbcover")])]),t._v(" "),a("p",[t._v("请求方式："),a("code",[t._v("get")]),t._v(" "),a("code",[t._v("post")])]),t._v(" "),a("p",[t._v("接口参数:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名称")]),t._v(" "),a("th",[t._v("必选")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("c")])]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("string|number")]),t._v(" "),a("td",[t._v("b 站的视频地址，或者视频的 av 号")])])])]),t._v(" "),a("p",[a("code",[t._v("c")]),t._v(" 参数支持什么呢？")]),t._v(" "),a("p",[t._v("支持：链接 或者  视频或者 直播 的"),a("code",[t._v("id")])]),t._v(" "),a("p",[t._v("例如视频支持："),a("code",[t._v("https://www.bilibili.com/video/av86863038")]),t._v("  或者 "),a("code",[t._v("av86863038")]),t._v("  `")]),t._v(" "),a("p",[t._v("直播："),a("code",[t._v("https://live.bilibili.com/14524390 或者")]),t._v("14524390`")]),t._v(" "),a("p",[t._v("专栏："),a("code",[t._v("https://www.bilibili.com/read/cv4750375")]),t._v(" 或者 "),a("code",[t._v("cv4750375")])]),t._v(" "),a("h2",{attrs:{id:"返回数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回数据"}},[t._v("#")]),t._v(" 返回数据")]),t._v(" "),a("p",[t._v("测试参数 ："),a("code",[t._v("c=av86863038")])]),t._v(" "),a("p",[a("code",[t._v("title")]),t._v(" : 标题")]),t._v(" "),a("p",[a("code",[t._v("description")]),t._v(" 描述")]),t._v(" "),a("p",[a("code",[t._v("cover")]),t._v(" 封面 "),a("code",[t._v("url")]),t._v(" 地址")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"【酥酥】进来看看她玩皮城执法官 蔚！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"素材来源斗鱼直播。剪辑成品<br />喜欢记得三连～后续会更新很多好看的视频<br />酥酥的斗鱼直播间是266055，每晚九点直播"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cover"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://i2.hdslb.com/bfs/archive/d68a7cacb2ee51fae9a34b294ad554c5c0672280.jpg"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Alone88"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"由Alone88提供的免费API 服务，官方文档：www.alapi.cn"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);