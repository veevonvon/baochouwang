var app = (function($){
	var appObj={};
	//处理模板
	appObj.temInit=function(tplId,dataObj){
		var $tpl = $("#"+tplId);
		var source = $tpl.text();
		var template = Handlebars.compile(source);
		var html = template(dataObj);
		$tpl.before(html);
	}
	//处理ajax请求
	appObj.ajax = function(data,url){
		$.ajax({
			url:url,
			type:"POST",
			data:data,
			dataType: "json",
			success: function(data){
				data = JSON.parse(data);
				return data;
			}
		})
	}
	

	return appObj;
})($)
var GetQueryString = function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

var loginChange = function (){
        var status;
  return $.ajax({
      url:"/e/ajax/?enews=getUserInfo",
      type:"POST",
      data:{},
      success:function(data){
      data = JSON.parse(data);
      if(data.userid !=="0"&&data.username!=="0"){
         $(".am-header-right.am-header-nav >a").attr("href","/mobile/e/member/cp");
      }else{}
        }
    })
}