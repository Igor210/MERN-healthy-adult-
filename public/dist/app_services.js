function MetaTagsService(){this.setDefaultTags=function(t){angular.copy(t,e),n({})},this.setTags=n;var e={},r=[];function n(t){angular.forEach(r,function(t){document.head.removeChild(t)}),r.length=0,function(n){angular.forEach(e,function(t,e){n[e]?"title"===e&&(n.title+=" - "+t):n[e]=t})}(t),angular.forEach(t,function(t,e){var n=function(t,e){{if("title"==e){var n=document.createElement("title");return n.textContent=t,n}var r=0===e.indexOf("og:")?"property":"name",o=document.createElement("meta");return o.setAttribute(r,e),o.setAttribute("content",t),o}}(t,e);document.head.appendChild(n),r.push(n)})}}app.factory("FlashService",["$rootScope",function(n){var t={Success:function(t,e){n.flash={message:t,type:"success",keepAfterLocationChange:e}},Error:function(t,e){n.flash={message:t,type:"error",keepAfterLocationChange:e}}};return n.$on("$locationChangeStart",function(){!function(){var t=n.flash;t&&(t.keepAfterLocationChange?t.keepAfterLocationChange=!1:delete n.flash)}()}),t}]),app.factory("HttpService",["$http","$modal","$rootScope","$location",function(a,t,i,e){var n={Login:function(t){var e=JSON.stringify(t),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/login",e,n).then(s,p("Error while trying to send authentication email"))}},r=localStorage.getItem("user");function s(t){return t}function p(t){return function(){return{success:!1,message:t}}}return r&&(i.user=JSON.parse(r)),i.open_login=function(){i.modalInstance=t.open({templateUrl:"app-view/login/LoginView.html"})},i.logout=function(){localStorage.removeItem("user"),i.user=null,a.get("/api/user/logout-local")},i.open_post=function(){if(!i.user)return i.open_login();e.path("/post")},i.open_pages=function(){e.path("/pages")},n.status=function(t,e){a.post("/api/user/status",t).then(function(t){e(t.data)},p("Error getting sales report"))},n.login=function(t,e){a.post("/api/user/login-local",t).then(function(t){e(t.data)},p("Error getting sales report"))},n.sign=function(t,e){a.post("/api/user/signup-local",t).then(function(t){e(t.data)},p("Error getting sales report"))},n.request=function(t,e){a.post("/api/user/request",t).then(function(t){e(t.data)},p("Error getting sales report"))},n.change=function(t,e){a.post("/api/user/change",t).then(function(t){e(t.data)},p("Error getting sales report"))},n.AddPost=function(t){var e=JSON.stringify(t),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/posts",e,n).then(s,p("Error getting sales report"))},n.ReactPost=function(t,e){var n=JSON.stringify({postId:t,reaction:e}),r={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/reactPost",n,r).then(s,p("Error"))},n.LikePage=function(t){var e=JSON.stringify({pageId:t}),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/likePage",e,n).then(s,p("Error"))},n.DislikePage=function(t){var e=JSON.stringify({pageId:t}),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/dislikePage",e,n).then(s,p("Error"))},n.LikePost=function(t){var e=JSON.stringify({postId:t}),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/likePost",e,n).then(s,p("Error"))},n.DislikePost=function(t){var e=JSON.stringify({postId:t}),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/dislikePost",e,n).then(s,p("Error"))},n.LikePostPhoto=function(t){var e=JSON.stringify({photoId:t}),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/likePostPhoto",e,n).then(s,p("Error"))},n.DislikePostPhoto=function(t){var e=JSON.stringify({photoId:t}),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/dislikePostPhoto",e,n).then(s,p("Error"))},n.LikePostVideo=function(t){var e=JSON.stringify({postId:t}),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/likePostVideo",e,n).then(s,p("Error"))},n.DislikePostVideo=function(t){var e=JSON.stringify({postId:t}),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/dislikePostVideo",e,n).then(s,p("Error"))},n.LikeComment=function(t,e){var n=JSON.stringify({commentId:t,reply:e}),r={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/likeComment",n,r).then(s,p("Error"))},n.DislikeComment=function(t,e){var n=JSON.stringify({commentId:t,reply:e}),r={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/dislikeComment",n,r).then(s,p("Error"))},n.AddPostWithPage=function(t){var e=JSON.stringify(t),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/postWithPage",e,n).then(s,p("Error getting data"))},n.SendMail=function(t){var e=JSON.stringify(t),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/sendMail",e,n).then(s,p("Error getting sales report"))},n.GetPosts=function(){var t="";return"Country"==i.search.country||""==i.search.country?i.search.country="":"United States"==i.search.country||(t=t+"country="+i.search.country),"State"==i.search.state||""==i.search.state||"Provinces"==i.search.state?i.search.state="":t="United States"==i.search.country?t+"state="+i.search.state:t+"&state="+i.search.state,"Region"==i.search.region||""==i.search.region?i.search.region="":t=t+"&region="+i.search.region,"Category"==i.search.category||""==i.search.category?i.search.category="":t=t+"&category="+i.search.category,a({url:"/api/posts?"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.GetPagePosts=function(){var t="";return"Country"==i.search.country||""==i.search.country?i.search.country="":"United States"==i.search.country||(t=t+"country="+i.search.country),"State"==i.search.state||""==i.search.state||"Provinces"==i.search.state?i.search.state="":t="United States"==i.search.country?t+"state="+i.search.state:t+"&state="+i.search.state,"Region"==i.search.region||""==i.search.region?i.search.region="":t=t+"&region="+i.search.region,"Category"==i.search.category||""==i.search.category?i.search.category="":t=t+"&category="+i.search.category,a({url:"/api/pages?"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.GetAllPosts=function(){return a({url:"/api/posts?",method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.GetAllPagePosts=function(){return a({url:"/api/pages?",method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.GetPageWithPosts=function(t){return a({url:"/api/page/"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.GetPageForCurrentUser=function(){return a({url:"/api/user/page/",method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.GetPostByPhoto=function(t){return a({url:"/api/photo/"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.EditPage=function(t,e){var n=JSON.stringify(e),r="/api/page/"+t,o={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post(r,n,o).then(s,p("Error getting sales report"))},n.GetComments=function(t){return a({url:"/api/comments/"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.GetAPost=function(t){return a({url:"/api/posts/"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.GetAPostForEdit=function(t){return a({url:"/api/postForEdit/"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.GetAPagePost=function(t,e){return a({url:"/api/page/"+t+"/post/"+e,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.EditPost=function(t,e){var n=JSON.stringify(e),r="/api/editpost/"+t,o={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post(r,n,o).then(s,p("Error getting sales report"))},n.FlagPostReason=function(t,e){var n=JSON.stringify(e),r="/api/flagpostreason/"+t,o={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post(r,n,o).then(s,p("Error getting sales report"))},n.ReportPageReason=function(t,e){var n=JSON.stringify(e),r="/api/reportpagereason/"+t,o={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post(r,n,o).then(s,p("Error getting sales report"))},n.SubscribePost=function(t,e){var n=JSON.stringify(e),r="/api/subscribe/"+t,o={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post(r,n,o).then(s,p("Error"))},n.ResendPageLink=function(t){var e=JSON.stringify(t),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/resendPageLink/",e,n).then(s,p("Error"))},n.ResendPostLink=function(t){var e=JSON.stringify(t),n={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post("/api/resendPostLink/",e,n).then(s,p("Error"))},n.SubscribePage=function(t,e){var n=JSON.stringify(e),r="/api/subscribePage/"+t,o={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post(r,n,o).then(s,p("Error"))},n.DeleteAPost=function(t){return a({url:"/api/posts/"+t,method:"DELETE",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.DeleteAComment=function(t){return a({url:"/api/comments/"+t,method:"DELETE",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.DeleteAReply=function(t){return a({url:"/api/deletereply/"+t,method:"DELETE",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.FlagAReply=function(t,e){var n=JSON.stringify(e),r="/api/flagreply/"+t,o={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post(r,n,o).then(s,p("Error getting sales report"))},n.UnflagAReply=function(t){return a({url:"/api/unflagreply/"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.FlagAComment=function(t){return a({url:"/api/flagcomment/"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.FlagACommentReason=function(t,e){var n=JSON.stringify(e),r="/api/flagcommentreason/"+t,o={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post(r,n,o).then(s,p("Error getting sales report"))},n.UnflagAComment=function(t){return a({url:"/api/unflagcomment/"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.ReplyAComment=function(t,e){var n=JSON.stringify(e),r="/api/replycomment/"+t,o={headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}};return a.post(r,n,o).then(s,p("Error getting result"))},n.FlagAPost=function(t){return a({url:"/api/flagpost/"+t,method:"GET",headers:{"Content-Type":"application/json;"}}).then(s,p("Error getting result"))},n.GetSalesPerMan=function(t){return a({url:"http://localhost:8080/salesmandata?sessionid="+t,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}}).then(s,p("Error getting sales report"))},n.GetSalesPerMonth=function(t){return a({url:"http://localhost:8080/lastyeardata?sessionid="+t,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}}).then(s,p("Error getting sales report"))},n.GetTopSalesOrder=function(t){return a({url:"http://localhost:8080/topsalesorders?sessionid="+t,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}}).then(s,p("Error getting sales report"))},n.GetTopSalesMan=function(t){return a({url:"http://localhost:8080/topsalesmen?sessionid="+t,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:i.token}}).then(s,p("Error getting sales report"))},n}]),angular.module("app").service("MetaTagsService",MetaTagsService);