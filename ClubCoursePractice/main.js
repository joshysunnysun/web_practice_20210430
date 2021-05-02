$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;

    var millisecsPerDay = 24*60*60*1000;

    for (var x=0; x<topicCount; x++){
        if(x%2==0){
        $("#courseTable").append("<tr>");
        // $("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append(`<td style="background-color: bisque;">${x+1}</td>`);
        $("#courseTable").append(`<td style="background-color: bisque;">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
        $("#courseTable").append(`<td style="background-color: bisque;">${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
    } else{
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
    }
    } 
});

/*
var str="2/21/2021";
var str1="2/3/2021";
document.write(str.slice(0,-5)+"\r");
document.write(str1.slice(0,-5));
*/