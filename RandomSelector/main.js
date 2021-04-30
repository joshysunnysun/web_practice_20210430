$(function(){
    $("input").on("click",function(){ //$("input")=document.getElementsByTagName 所有input的tag名稱
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        //$("h1")=document.getElementsByTagName("h1")
        $("h1").text($("li").eq(randomChildNumber).text());
        //找到img元件
        //設定img元件的src屬性 -> 對應元件的title值
        $("img").attr("src",$("li").eq(randomChildNumber).attr("title"));
    });
});