"use strict";(self["webpackChunks029"]=self["webpackChunks029"]||[]).push([[4586,5324,6988,8188],{5324:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("添加")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"姓名",prop:"name"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("FormItem",{attrs:{label:"性别",prop:"sex"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"sex",transfer:"",clearable:"",placeholder:"请选择性别..."},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}})],1),t("FormItem",{attrs:{label:"年龄",prop:"age"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("FormItem",{attrs:{label:"学号",prop:"number"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),t("FormItem",{attrs:{label:"学校",prop:"school"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},l=[],i=a(2368),o=a(8188);const r={name:"add",components:{dict:o["default"]},data(){return{submitLoading:!1,form:{name:"",sex:"",age:0,number:"",school:""},formValidate:{}}},methods:{init(){},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,i.tS)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},n=r;var c=a(1001),m=(0,c.Z)(n,s,l,!1,null,null,null);const h=m.exports},6988:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"姓名",prop:"name"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("FormItem",{attrs:{label:"性别",prop:"sex"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"sex",transfer:"",clearable:"",placeholder:"请选择性别..."},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}})],1),t("FormItem",{attrs:{label:"年龄",prop:"age"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("FormItem",{attrs:{label:"学号",prop:"number"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),t("FormItem",{attrs:{label:"学校",prop:"school"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},l=[],i=a(2368),o=a(8188);const r={name:"edit",components:{dict:o["default"]},props:{data:Object},data(){return{submitLoading:!1,form:{name:"",sex:"",age:0,number:"",school:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,i.Zt)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},n=r;var c=a(1001),m=(0,c.Z)(n,s,l,!1,null,null,null);const h=m.exports},4586:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},["add"==e.currView?t("add",{on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),"edit"==e.currView?t("edit",{attrs:{data:e.formData},on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),t("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==e.currView,expression:"currView=='index'"}]},[t("Alert",{attrs:{type:"success","show-icon":"",banner:""}},[e._v("温馨提示：您使用代码生成器生成后，无需任何改动就可以得到这个界面！")]),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{attrs:{label:"",prop:"name"}},[t("Input",{staticStyle:{width:"120px"},attrs:{type:"text",placeholder:"姓名",clearable:""},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),t("Form-item",{attrs:{label:"",prop:"sex"}},[t("dict",{staticStyle:{width:"120px"},attrs:{dict:"sex",transfer:"",clearable:"",placeholder:"性别"},model:{value:e.searchForm.sex,callback:function(t){e.$set(e.searchForm,"sex",t)},expression:"searchForm.sex"}})],1),t("Form-item",{attrs:{label:"",prop:"number"}},[t("Input",{staticStyle:{width:"120px"},attrs:{type:"text",placeholder:"学号",clearable:""},model:{value:e.searchForm.number,callback:function(t){e.$set(e.searchForm,"number",t)},expression:"searchForm.number"}})],1),t("Form-item",{attrs:{label:"",prop:"school"}},[t("Input",{staticStyle:{width:"120px"},attrs:{type:"text",placeholder:"学校",clearable:""},model:{value:e.searchForm.school,callback:function(t){e.$set(e.searchForm,"school",t)},expression:"searchForm.school"}})],1),t("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"info",size:"small",icon:"md-add",ghost:""},on:{click:e.add}},[e._v("添加")]),t("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:""},on:{click:e.delAll}},[e._v("删除")]),t("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:e.excelData}},[e._v("导出")])],1),t("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"170px"}},[t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(t){e.showFilterPanelFlag=!e.showFilterPanelFlag}}},[e._v(" 列筛选")]),t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(t){e.modal1=!0}}},[e._v(" 使用教程")]),t("Modal",{attrs:{title:"使用教程"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[t("p",[e._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),t("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[t("transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[t("CheckboxGroup",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.mycolumns,(function(e){return t("div",{key:e.key},[t("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:e.title}})],1)})),0)],1)])],1),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]}),t("Row",[t("Table",{ref:"table",attrs:{loading:e.loading,height:e.tableHeight,border:"",stripe:"",size:"small",columns:e.columns,data:e.data,sortable:"custom","row-class-name":e.rowClassNmae},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect,"on-row-click":e.rowClick}})],1),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)},l=[],i=a(2368),o=a(5324),r=a(6988),n=a(8188);const c={name:"single-window",components:{add:o["default"],edit:r["default"],dict:n["default"]},data(){return{tableHeight:0,selected:["选择","序号","姓名","性别","年龄","学号","学校","创建时间","创建者","修改时间","修改者","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(e,t)=>e("span",t.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"姓名",key:"name",minWidth:120,tooltip:!0,sortable:!1},{title:"性别",key:"sex",minWidth:120,tooltip:!0,sortable:!1},{title:"年龄",key:"age",minWidth:120,tooltip:!0,sortable:!1},{title:"学号",key:"number",minWidth:120,tooltip:!0,sortable:!1},{title:"学校",key:"school",minWidth:120,tooltip:!0,sortable:!1},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:200,fixed:"right",render:(e,t)=>e("div",[e("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",ghost:!0},style:{marginRight:"5px"},on:{click:()=>{this.edit(t.row)}}},"编辑"),e("Button",{props:{type:"error",size:"small",icon:"md-trash",ghost:!0},on:{click:()=>{this.remove(t.row)}}},"删除")])}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1}},methods:{init(){this.getDataList()},submited(){this.currView="index",this.getDataList()},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},rowClick(e,t){this.selectRow=e},rowClassNmae(e,t){return e.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(e){this.selectList=e,this.selectCount=e.length},getDataList(){this.loading=!0,(0,i.TF)(this.searchForm).then((e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)}))},add(){this.currView="add"},edit(e){for(let s in e)null==e[s]&&(e[s]="");let t=JSON.stringify(e),a=JSON.parse(t);this.formData=a,this.currView="edit"},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 ?",loading:!0,onOk:()=>{(0,i.MA)({ids:e.id}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),(0,i.MA)({ids:e}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let e=[];for(var t=0;t<this.selected.length;t++)for(var a=this.selected[t],s=0;s<this.columns.length;s++)this.columns[s].title==a&&e.push(this.columns[s]);this.columns=e},watch:{selected:function(e){let t=[];for(var a=0;a<this.mycolumns.length;a++){var s=this.mycolumns[a];(void 0==s.title||e.contains(s.title))&&t.push(s)}this.columns=t}}},m=c;var h=a(1001),d=(0,h.Z)(m,s,l,!1,null,null,null);const u=d.exports},8188:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return t("div",[t("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:e.filterable,transfer:e.transfer,clearable:e.clearable,placement:e.placement,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dictData,(function(a,s){return t("Option",{key:s,attrs:{value:a.value}},[e._v(e._s(a.title))])})),1)],1)},l=[],i=a(7877);const o={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(e){this.loading=!0,(0,i.i3)(e).then((e=>{this.loading=!1,e.success&&(this.dictData=e.result)}))},handleChange(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange(e){this.$emit("on-query-change",e)},handleClear(){this.$emit("on-clear","")},handleOpenChange(e){this.$emit("on-open-change",e)},handleSelect(e){this.$emit("on-select",e)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)},dict(e){this.getData(e)}},mounted(){this.getData(this.dict)}},r=o;var n=a(1001),c=(0,n.Z)(r,s,l,!1,null,null,null);const m=c.exports},2368:(e,t,a)=>{a.d(t,{MA:()=>r,TF:()=>l,Zt:()=>o,tS:()=>i});var s=a(7184);const l=e=>(0,s.A_)("/student/getByPage",e),i=e=>(0,s.j0)("/student/insert",e),o=e=>(0,s.j0)("/student/update",e),r=e=>(0,s.j0)("/student/delByIds",e)}}]);