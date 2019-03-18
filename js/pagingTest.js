//前进和后退按钮
var backButton = $("backButton");
var forwardButton = $("forwardButton");

//下拉栏
var pageSelector = $("pageSelector");

//从后台获取的总数据数，并通过自定的分页策略进行总页数计算
var totalItemsNum = 0;
var totalPagesNum = 0;

//标识符
var page = 0;

//前进、后退两个按钮的可用性控制
var backOrForwardControl = (page)=>{
    backButton.disabled = false;
    forwardButton.disabled = false;
    if(page == 1) {
        backButton.disabled = true;
    }else if(page == totalPagesNum) {
        forwardButton.disabled = true;
    }
    console.log(page);
}

onload = ()=>{
    //下拉列表填充 HTML 文本初始化
    var pageSelectorString = "";
    
    //从后台获取的总数目，在此由于是测试 demo ，没有后台直接手动输入
    var totalItemsNum = Number(window.prompt("请输入可以获取的记录条数！"));

    //下拉列表填充
    //有小数部分的话，整数部分加一取整
    totalPagesNum = Math.ceil(totalItemsNum / 8);
    for(var i=0; i<totalPagesNum; i++) {
        pageSelectorString += '<option value="' + (i+1) + '">' + (i+1) + '</option>';
    }
    pageSelector.innerHTML = pageSelectorString;

    //页面初始
    page = 1;
    backOrForwardControl(page);
    console.log(totalPagesNum);
    pagesLoad(totalPagesNum, page);
}

var selectPage = (that)=>{
    page = Number(that.innerText);
    backOrForwardControl(page);
    pagesLoad(totalPagesNum, page);
}

var previousPage = ()=>{
    page--;
    backOrForwardControl(page);
    pagesLoad(totalPagesNum, page);
}

var nextPage = ()=>{
    page++;
    backOrForwardControl(page);
    pagesLoad(totalPagesNum, page);
}

//这里存在一个 bug ，当直接使用下拉列表进行跳转时，2_2 的代表 page + 1 的按钮不会显示
//关于这点问题正在施工中
var skip = ()=>{
    //已解决，原先是 page = pageSelector.value ，数据类型出错了
    page = Number(pageSelector.value);
    backOrForwardControl(page);
    pagesLoad(totalPagesNum, page);
}