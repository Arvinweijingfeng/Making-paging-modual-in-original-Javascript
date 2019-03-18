//封装 ID 选择器
//在 Demo 中需要重写，如果在项目中将其移到顶层 JS 文件即可
var $ = (id)=>{
    return document.getElementById(id);
};

var pagesLoad = (totalPagesNum, flag)=>{
    if(totalPagesNum != 0){
        if(totalPagesNum <=7){
            var xmlHttp;
            if(window.XMLHttpRequest){
                xmlHttp = new XMLHttpRequest();
            }else {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlHttp.onreadystatechange = ()=>{
                if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                    var pagingList = $("pagingList");
                    var pagesList = xmlHttp.responseText;
                    for(var i=1; i<=totalPagesNum; i++){
                        var item = 'id="item' + i + '"';
                        var itemReg = new RegExp(item);
                        if(i == flag) {
                            pagesList = pagesList.replace(itemReg, item + ' class="checked"');
                        }else{
                            pagesList = pagesList.replace(itemReg, item + ' class="pageAbled"');
                        }
                    }
                    pagingList.innerHTML = pagesList;
                }
            }
            xmlHttp.open("POST","pagingList1.html",true);
            xmlHttp.send();
        }else if(totalPagesNum > 7){
            if(flag <= 3 && flag > 0) {
                var xmlHttp;
                if(window.XMLHttpRequest){
                    xmlHttp = new XMLHttpRequest();
                }else {
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlHttp.onreadystatechange = ()=>{
                    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                        var pagingList = $("pagingList");
                        var pagesList = xmlHttp.responseText;
                        for(var i=1; i<=totalPagesNum; i++){
                            if(i > 0 && i <=3) {
                                var item = 'id="item' + i + '"';
                                var itemReg = new RegExp(item);
                                if(i == flag) {
                                    pagesList = pagesList.replace(itemReg, item + ' class="checked"');
                                }else{
                                    pagesList = pagesList.replace(itemReg, item + ' class="pageAbled"');
                                }
                            }else if(i == 4) {
                                pagesList = pagesList.replace(/id="item4"/,'id="item4" class="pageAbled"');
                            }else if(i == totalPagesNum) {
                                pagesList = pagesList.replace(/id="item_n"/,'id="item_n" class="pageAbled"');
                                pagesList = pagesList.replace(/max/,totalPagesNum);
                            }else continue;
                        }
                        pagingList.innerHTML = pagesList;
                    }
                }
                xmlHttp.open("POST","pagingList2_1.html",true);
                xmlHttp.send();
            }else if(flag >= (totalPagesNum - 2) && flag <= totalPagesNum) {
                var xmlHttp;
                if(window.XMLHttpRequest){
                    xmlHttp = new XMLHttpRequest();
                }else {
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlHttp.onreadystatechange = ()=>{
                    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                        var pagingList = $("pagingList");
                        var pagesList = xmlHttp.responseText;
                        for(var i=1; i<=totalPagesNum; i++){
                            if(i == 1) {
                                pagesList = pagesList.replace(/id="item1"/,'id="item1" class="pageAbled"');
                            }else if(i == (totalPagesNum - 3)) {
                                pagesList = pagesList.replace(/id="item_n4"/,'id="item_n4" class="pageAbled"');
                                pagesList = pagesList.replace(/max4/, i);
                            }else if(i == (totalPagesNum - 2)) {
                                if(i == flag) {
                                    pagesList = pagesList.replace(/id="item_n3"/,'id="item_n3" class="checked"');
                                }else {
                                    pagesList = pagesList.replace(/id="item_n3"/,'id="item_n3" class="pageAbled"');
                                }
                                pagesList = pagesList.replace(/max3/, i);
                            }else if(i == (totalPagesNum - 1)) {
                                if(i == flag) {
                                    pagesList = pagesList.replace(/id="item_n2"/,'id="item_n2" class="checked"');
                                }else {
                                    pagesList = pagesList.replace(/id="item_n2"/,'id="item_n2" class="pageAbled"');
                                }
                                pagesList = pagesList.replace(/max2/, i);
                            }else if(i == totalPagesNum) {
                                if(i == flag) {
                                    pagesList = pagesList.replace(/id="item_n1"/,'id="item_n1" class="checked"');
                                }else {
                                    pagesList = pagesList.replace(/id="item_n1"/,'id="item_n1" class="pageAbled"');
                                }
                                pagesList = pagesList.replace(/max1/, i);
                            }else continue;
                        }
                        pagingList.innerHTML = pagesList;
                    }
                }
                xmlHttp.open("POST","pagingList2_3.html",true);
                xmlHttp.send();
            }else if(flag > 3 && flag < (totalPagesNum - 2)) {
                var xmlHttp;
                if(window.XMLHttpRequest){
                    xmlHttp = new XMLHttpRequest();
                }else {
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlHttp.onreadystatechange = ()=>{
                    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                        var pagingList = $("pagingList");
                        var pagesList = xmlHttp.responseText;
                        for(var i=1; i<=totalPagesNum; i++){
                            if(i == 1) {
                                pagesList = pagesList.replace(/id="item1"/,'id="item1" class="pageAbled"');
                            }else if(i == (flag - 1)) {
                                pagesList = pagesList.replace(/id="item_back"/,'id="item_back" class="pageAbled"');
                                pagesList = pagesList.replace(/flag0/, i);
                            }else if(i == flag) {
                                pagesList = pagesList.replace(/id="item_flag"/,'id="item_flag" class="checked"');
                                pagesList = pagesList.replace(/flag1/, i);
                            }else if(i == (flag + 1)) {
                                pagesList = pagesList.replace(/id="item_forward"/,'id="item_forward" class="pageAbled"');
                                pagesList = pagesList.replace(/flag2/, i);
                            }else if(i == totalPagesNum) {
                                pagesList = pagesList.replace(/id="item_n"/,'id="item_n" class="pageAbled"');
                                pagesList = pagesList.replace(/max/,totalPagesNum);
                            }else continue;
                        }
                        pagingList.innerHTML = pagesList;
                    }
                }
                xmlHttp.open("POST","pagingList2_2.html",true);
                xmlHttp.send();
            }else {
                console.log("不存在此按钮！");
            }
        }
    }else {
        window.alert("获取到数据为空！");
    }
}