webpackJsonp([15],{"5Fa2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("vLgD");var a={name:"node",created:function(){this._getData()},data:function(){return{tree:[],showDialog:!1,title:"",form:{id:0,type_id:0,node_name:"",control_name:"",action_name:"",component_name:"",is_menu:0,p_name:""},formRule:{node_name:[{required:!0,message:"请输入节点名",trigger:"blur"}],control_name:[{required:!0,message:"请输入控制器名",trigger:"blur"}],action_name:[{required:!0,message:"请输入方法名",trigger:"blur"}],component_name:[],is_menu:[{required:!0,message:"请选择是否是菜单",trigger:"blur"}]}}},methods:{renderContent:function(e,t){var n=this,o=t.node,a=t.data;t.store;return e("span",{class:"custom-tree-node"},[e("span",[o.label]),e("span",{class:"operation"},[e("div",[e("el-button",{attrs:{size:"mini",type:"text"},style:"color:#409EFF",on:{click:function(){return n.append(o,a,1)}}},["编辑该节点"]),e("el-button",{attrs:{size:"mini",type:"text"},style:"color:#67c23a",on:{click:function(){return n.append(o,a,2)}}},["添加子节点"]),e("el-button",{attrs:{size:"mini",type:"text"},style:"color:#f56c6c",on:{click:function(){return n.remove(o,a)}}},["删除该节点"])])])])},append:function(e,t,n){this.showDialog=!0,this.title="添加节点",1==n?(this.form.p_name=e.parent.data.label||"顶级节点",this.form.type_id=t.type_id,this.form.control_name=t.control_name,this.form.action_name=t.action_name,this.form.component_name=t.component_name,this.form.node_name=t.label,this.form.is_menu=t.is_menu,this.form.id=t.id):2==n?(this.title="添加节点",this.form.p_name=t.label,this.form.type_id=t.id,this.form.control_name="",this.form.action_name="",this.form.component_name="",this.form.node_name="",this.form.is_menu=2,this.form.id=0):(this.title="添加节点",this.form.p_name="顶级节点",this.form.type_id=0,this.form.control_name="#",this.form.action_name="#",this.form.component_name="",this.form.node_name="",this.form.is_menu=2,this.form.id=0)},onSubmit:function(){var e=this;this.$refs.nodeForm.validate(function(t){if(!t)return!1;var n;0===e.form.id?(n=e.form,Object(o.a)({url:"node/nodeAdd",method:"post",data:n})).then(function(t){e.$message({message:t.msg,type:"success"}),e.showDialog=!1,e._getData()}):function(e){return Object(o.a)({url:"node/nodeEdit",method:"post",data:e})}(e.form).then(function(t){e.$message({message:t.msg,type:"success"}),e.showDialog=!1,e._getData()})})},remove:function(e,t){var n=this;this.$confirm("删除节点将不可恢复","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a;(a=t,Object(o.a)({url:"node/nodeDel",method:"post",data:a})).then(function(o){n.$message({message:o.msg,type:"success"});var a=e.parent,i=a.data.children||a.data,r=i.findIndex(function(e){return e.id===t.id});i.splice(r,1)})})},_getData:function(){var e=this;Object(o.a)({url:"node/index"}).then(function(t){e.tree=t.data})}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("p",{staticClass:"page-title"},[e._v("节点列表")]),e._v(" "),n("div",{staticClass:"filter-container"},[n("el-button",{staticClass:"filter-item",attrs:{type:"primary",plain:""},on:{click:function(t){e.append("")}}},[e._v("添加顶级节点")])],1),e._v(" "),n("el-tree",{staticStyle:{width:"40%",margin:"50px 0 0 80px"},attrs:{data:e.tree,"node-key":"id","expand-on-click-node":!1,"render-content":e.renderContent}}),e._v(" "),n("el-dialog",{attrs:{visible:e.showDialog,title:e.title,width:"30%"},on:{"update:visible":function(t){e.showDialog=t}}},[n("el-form",{ref:"nodeForm",attrs:{model:e.form,"status-icon":"","label-width":"100px",rules:e.formRule},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",{attrs:{label:"节点名",prop:"node_name"}},[n("el-input",{model:{value:e.form.node_name,callback:function(t){e.$set(e.form,"node_name",t)},expression:"form.node_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"所属节点"}},[n("el-input",{attrs:{disabled:""},model:{value:e.form.p_name,callback:function(t){e.$set(e.form,"p_name",t)},expression:"form.p_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"控制器名",prop:"control_name"}},[n("el-input",{attrs:{disabled:!e.form.type_id},model:{value:e.form.control_name,callback:function(t){e.$set(e.form,"control_name",t)},expression:"form.control_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"方法名",prop:"action_name"}},[n("el-input",{attrs:{disabled:!e.form.type_id},model:{value:e.form.action_name,callback:function(t){e.$set(e.form,"action_name",t)},expression:"form.action_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"组件名",prop:"component_name"}},[n("el-input",{model:{value:e.form.component_name,callback:function(t){e.$set(e.form,"component_name",t)},expression:"form.component_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否是菜单",prop:"is_menu"}},[n("el-radio-group",{attrs:{disabled:!e.form.type_id},model:{value:e.form.is_menu,callback:function(t){e.$set(e.form,"is_menu",t)},expression:"form.is_menu"}},[n("el-radio",{attrs:{label:2,border:""}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:1,border:""}},[e._v("否")])],1)],1),e._v(" "),n("el-form-item",[n("div",{staticStyle:{float:"right"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(t){e.showDialog=!1}}},[e._v("取消")])],1)])],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")(a,i,!1,function(e){n("A6uE")},null,null);t.default=r.exports},A6uE:function(e,t){}});