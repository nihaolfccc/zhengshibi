webpackJsonp([29],{"o7M+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){var a=[];return e.forEach(function(e,r){var n={value:e,name:t[r]};a.push(n)}),a};t.default=function(e){if("twoSfunnel"===e.type)return{title:{},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"},legend:{data:e.data.handleNameArr,type:"scroll",orient:"vertical",left:"left",formatter:function(e){return""!=e&&"string"==typeof e?e.substring(0,6):e}},calculable:!0,series:[{name:e.data.coordinateX+":"+e.data.name,type:"funnel",gap:2,label:{normal:{show:!0,position:"inside"},emphasis:{textStyle:{fontSize:20}}},labelLine:{normal:{length:10,lineStyle:{width:1,type:"solid"}}},itemStyle:{normal:{borderColor:"#fff",borderWidth:1}},data:r(e.data.handleDataArr,e.data.handleNameArr)}]};console.error("数据类型错误")}}});