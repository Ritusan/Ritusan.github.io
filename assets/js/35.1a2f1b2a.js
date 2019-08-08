(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{357:function(t,v,_){"use strict";_.r(v);var r=_(9),e=Object(r.a)({},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"《图解http》"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#《图解http》","aria-hidden":"true"}},[t._v("#")]),t._v(" 《图解HTTP》")]),t._v(" "),_("p",[t._v("HTTP，超文本传输协议")]),t._v(" "),_("p",[t._v("把与互联网相关联的协议集合起来总称为TCP/IP。")]),t._v(" "),_("p",[t._v("TCP/IP协议族按层次分别分为4层：")]),t._v(" "),_("ul",[_("li",[t._v("应用层(HTTP协议,DNS)")]),t._v(" "),_("li",[t._v("传输层(TCP协议)")]),t._v(" "),_("li",[t._v("网络层(IP协议)")]),t._v(" "),_("li",[t._v("数据链路层(网络接口层)")])]),t._v(" "),_("h2",{attrs:{id:"三次握手建立tcp连接，保证通信的可靠性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三次握手建立tcp连接，保证通信的可靠性","aria-hidden":"true"}},[t._v("#")]),t._v(" 三次握手建立TCP连接，保证通信的可靠性")]),t._v(" "),_("ol",[_("li",[t._v("发送端首先发送一个带SYN标志的数据包给对方。")]),t._v(" "),_("li",[t._v("接收端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息。")]),t._v(" "),_("li",[t._v("最后，发送端再回传一个带ACK标志的数据包，代表“握手”结束。")])]),t._v(" "),_("h2",{attrs:{id:"四次挥手断开tcp连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手断开tcp连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 四次挥手断开TCP连接")]),t._v(" "),_("ol",[_("li",[t._v("Client发送一个FIN，用来关闭Client到Server的数据传送")]),t._v(" "),_("li",[t._v("Server收到FIN后，发送一个ACK给Client")]),t._v(" "),_("li",[t._v("Server发送一个FIN，用来关闭Server到Client的数据传送")]),t._v(" "),_("li",[t._v("Client收到FIN后，发一个ACK给Server")])]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",[t._v("SYN:synchronize(同步)"),_("br"),t._v("\nACK:acknowledgement(回单，确认)"),_("br"),t._v("\nFIN:finish(结束)")])]),t._v(" "),_("h3",{attrs:{id:"dns"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns","aria-hidden":"true"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",[t._v("DNS(Domain Name System)服务位于应用层，提供域名到IP地址之间的解析服务。")])]),t._v(" "),_("h2",{attrs:{id:"http协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),_("blockquote",[_("p",[t._v("请求报文包括：请求方法，请求URI，协议版本，可选的请求首部字段和内容实体。")])]),t._v(" "),_("blockquote",[_("p",[t._v("响应报文：协议版本，状态码，用以解释状态码的原因短语，可选的响应首部字段以及实体。")])]),t._v(" "),_("p",[t._v("HTTP是无状态协议。有了Cookie再用HTTP协议通信，就可以管理状态了。")]),t._v(" "),_("ul",[_("li",[t._v("GET：获取资源")]),t._v(" "),_("li",[t._v("POST：传输实体主体")]),t._v(" "),_("li",[t._v("PUT：传输文件")]),t._v(" "),_("li",[t._v("HEAD：获得报文首部")]),t._v(" "),_("li",[t._v("DELETE：删除文件")]),t._v(" "),_("li",[t._v("OPTIONS：询问支持的方法")]),t._v(" "),_("li",[t._v("TRACE：追踪路径")]),t._v(" "),_("li",[t._v("CONNECT：要求用隧道协议连接代理")])]),t._v(" "),_("h3",{attrs:{id:"持久连接节省通信量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#持久连接节省通信量","aria-hidden":"true"}},[t._v("#")]),t._v(" 持久连接节省通信量")]),t._v(" "),_("blockquote",[_("p",[t._v("持久连接：建立1次TCP连接之后进行多次请求和响应的交互")])]),t._v(" "),_("h3",{attrs:{id:"管线化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#管线化","aria-hidden":"true"}},[t._v("#")]),t._v(" 管线化")]),t._v(" "),_("blockquote",[_("p",[t._v("管线化技术出现之后，不用等待响应亦可直接发送下一个请求。")])]),t._v(" "),_("h3",{attrs:{id:"使用cookie的状态管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用cookie的状态管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用Cookie的状态管理")]),t._v(" "),_("blockquote",[_("p",[t._v("Cookie会根据从服务器端发送的响应报文内的一个叫做Set-Cookie的首部字段信息，通知客户端保存Cookie。")])]),t._v(" "),_("h2",{attrs:{id:"http状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),_("p",[t._v("状态码告知从服务端返回的请求结果")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("状态码")]),t._v(" "),_("th",[t._v("类别")]),t._v(" "),_("th",[t._v("原因短语")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1xx")]),t._v(" "),_("td",[t._v("Informational(信息性状态码)")]),t._v(" "),_("td",[t._v("接收的请求正在处理")])]),t._v(" "),_("tr",[_("td",[t._v("2xx")]),t._v(" "),_("td",[t._v("Success(成功状态码)")]),t._v(" "),_("td",[t._v("请求正常处理完毕")])]),t._v(" "),_("tr",[_("td",[t._v("3xx")]),t._v(" "),_("td",[t._v("Redirection(重定向状态码)")]),t._v(" "),_("td",[t._v("需要进行附加操作以完成请求")])]),t._v(" "),_("tr",[_("td",[t._v("4xx")]),t._v(" "),_("td",[t._v("Client Error(客户端错误状态码)")]),t._v(" "),_("td",[t._v("服务器无法处理请求")])]),t._v(" "),_("tr",[_("td",[t._v("5xx")]),t._v(" "),_("td",[t._v("Server Error(服务器错误状态码)")]),t._v(" "),_("td",[t._v("服务器处理请求出错")])])])]),t._v(" "),_("p",[t._v("具有代表性的14个状态码")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("状态码")]),t._v(" "),_("th"),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("200")]),t._v(" "),_("td",[t._v("OK")]),t._v(" "),_("td",[t._v("请求已正常处理")])]),t._v(" "),_("tr",[_("td",[t._v("204")]),t._v(" "),_("td",[t._v("No Content")]),t._v(" "),_("td",[t._v("请求处理成功，但是没有资源可返回")])]),t._v(" "),_("tr",[_("td",[t._v("206")]),t._v(" "),_("td",[t._v("Partial Content")]),t._v(" "),_("td",[t._v("对资源某一部分的请求")])]),t._v(" "),_("tr",[_("td",[t._v("301")]),t._v(" "),_("td",[t._v("Moved Permanently")]),t._v(" "),_("td",[t._v("永久性重定向，资源的URI已更新")])]),t._v(" "),_("tr",[_("td",[t._v("302")]),t._v(" "),_("td",[t._v("Found")]),t._v(" "),_("td",[t._v("临时性重定向，资源的URI已临时定位到其它位置了")])]),t._v(" "),_("tr",[_("td",[t._v("303")]),t._v(" "),_("td",[t._v("See Other")]),t._v(" "),_("td",[t._v("资源的URI已更新，用GET方法定向获取请求的资源")])]),t._v(" "),_("tr",[_("td",[t._v("304")]),t._v(" "),_("td",[t._v("Not Modified")]),t._v(" "),_("td",[t._v("资源已找到，但未符合条件请求")])]),t._v(" "),_("tr",[_("td",[t._v("307")]),t._v(" "),_("td",[t._v("Temporary Redirect")]),t._v(" "),_("td",[t._v("临时性重定向，不会从POST变成GET")])]),t._v(" "),_("tr",[_("td",[t._v("400")]),t._v(" "),_("td",[t._v("Bad Request")]),t._v(" "),_("td",[t._v("请求报文中存在语法错误")])]),t._v(" "),_("tr",[_("td",[t._v("401")]),t._v(" "),_("td",[t._v("Unauthorized")]),t._v(" "),_("td",[t._v("发送的请求需要有通过HTTP认证的信息")])]),t._v(" "),_("tr",[_("td",[t._v("403")]),t._v(" "),_("td",[t._v("Forbidden")]),t._v(" "),_("td",[t._v("对请求资源的访问被服务器拒绝了，访问权限出现问题")])]),t._v(" "),_("tr",[_("td",[t._v("404")]),t._v(" "),_("td",[t._v("Not Found")]),t._v(" "),_("td",[t._v("服务器上找不到请求的资源")])]),t._v(" "),_("tr",[_("td",[t._v("405")]),t._v(" "),_("td",[t._v("Method Not Allowed")]),t._v(" "),_("td",[t._v("方法不被允许")])]),t._v(" "),_("tr",[_("td",[t._v("500")]),t._v(" "),_("td",[t._v("Internal Server Error")]),t._v(" "),_("td",[t._v("服务端错误")])]),t._v(" "),_("tr",[_("td",[t._v("503")]),t._v(" "),_("td",[t._v("Service Unavailable")]),t._v(" "),_("td",[t._v("服务器暂时处于超负荷或正在进行停机维护")])])])]),t._v(" "),_("h2",{attrs:{id:"http-加密-认证-完整性保护-https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-加密-认证-完整性保护-https","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP+加密+认证+完整性保护=HTTPS")]),t._v(" "),_("p",[t._v("HTTPS是身披SSL外壳的HTTP")])])},[],!1,null,null,null);v.default=e.exports}}]);