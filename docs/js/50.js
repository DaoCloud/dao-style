(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[50],{305:function(e,t,n){var o=n(306);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(4).default)("15a93f10",o,!0,{})},306:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"#thelist[data-v-66b813ad]{height:600px}",""])},362:function(e,t,n){"use strict";n.r(t);var o=n(60),a=n.n(o),i=(new Date).getTime(),r={data:function(){var e=this;return{columns:{service:{text:"服务",name:"service",mainKey:!0},status:{text:"状态",name:"status",unsortable:!0},mode:{text:"模式",name:"mode"},containers:{text:"容器数",name:"containers"},memory:{text:"内存限制",name:"memory"},cpu:{text:"CPU 限制",name:"cpu"},creationTime:{text:"创建时间",name:"creationTime"},sin:{text:"正弦",name:"sin",isFilter:!0}},rows:a.a.map(Array(100),function(t,n){return{service:{text:n+"dce-plugin-applb",value:n+"dce-plugin-applb",type:"goto",other:{url:n+"dce-plugin-applb"}},status:{text:"正在运行",value:"running",type:"status",other:{color:"green"}},mode:{text:"弹性",type:"text",value:"弹性"},containers:{text:"10",type:"text",value:10},memory:{text:"0.5M/1G",type:"text",value:5e6},cpu:{render:function(t,n){return t("dao-progress",{props:{progress:n.value/3},domProps:{innerHTML:"baz"},on:{click:e.clickHandler}})},type:"custom",value:.5},creationTime:{type:"time",value:i-1e3*Math.pow(1.23,100*Math.random())},sin:{type:"filter",value:Math.sin(n)>0?"正弦值正":"正弦值负"}}}),config:{tableId:"serviceList",tableName:"服务",columnsOrder:["service","status","containers","memory","creationTime","cpu"],hideCheckbox:!1,hideOperation:!1,defaultCheck:!0,sorting:{defaultSortBy:"creationTime",order:"asc"},pagination:{limit:10},mainOperation:{name:"添加服务",svg:"plus",event:"create-service",disabled:!0,disabledSvg:"key",disabledTooltip:"没有权限"},operations:[{groupName:"状态",operations:[{name:"暂停",svg:"pause",event:"pause-service",disabled:!1,disabledSvg:"crown",disabledTooltip:"许可证到期"},{name:"删除",svg:"trash",event:"remove-service",disabled:!0,disabledSvg:"crown",disabledTooltip:"许可证到期"}]},{groupName:"资源",single:!0,operations:[{name:"网络",svg:"node",event:"network"},{name:"存储",svg:"cpu",event:"storage"}]}]}}},methods:{onRefresh:function(){console.log("更新")},onCheckedRowsChange:function(e){console.log("选中的行改变",e)},onCreateService:function(){console.log("创建容器")},onRemoveService:function(e){console.log("删除容器",e)},onPauseService:function(e){console.log("暂停容器",e)},clickHandler:function(){console.log("hhhh")}}},s=n(2);var c=function(e){n(305)},l=Object(s.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"thelist"}},[n("dao-list",{attrs:{columns:e.columns,rows:e.rows,config:e.config},on:{refresh:e.onRefresh,"checked-rows-change":e.onCheckedRowsChange,"create-service":e.onCreateService,"remove-service":e.onRemoveService,"pause-service":e.onPauseService}})],1)},[],!1,c,"data-v-66b813ad",null);t.default=l.exports}}]);