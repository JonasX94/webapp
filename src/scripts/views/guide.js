var guideTpl = require('../tpl/guide.string');

SPA.defineView('guide',{
	html:guideTpl,

	//插件列表
	plugins:[
		'delegated'
	],

	//给模板绑定事件
	bindActions:{
		'goto.index':function (){
			//进入index视图
			SPA.open('index');
		//	alert(111);
		}
	}

})
