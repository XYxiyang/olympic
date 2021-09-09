var male=localStorage.getItem("male");
var female=localStorage.getItem("female");
var countryNum=localStorage.getItem("countryNum");
var countries=localStorage.getItem("countries");
//控制进度条
function loadbar(){
    
    countries=countries.split(',');
    console.log(male);
    console.log(countries);

    let bar=document.getElementById("bar");
    let process=document.getElementById("speed");
    let time=0;
    document.getElementById("start").setAttribute("disabled","ture");
    document.getElementById("text").innerHTML="正在比赛中...";
    let counttime=setInterval(function(){
        time=time+0.1;
        bar.setAttribute("style","transition-duration: 300ms; width: "+time*20+"%;");
        process.innerHTML=time.toFixed(1)*20+"%";

        if(time>=5-0.0000001){//当进度条结束后显示比赛结束，并且给出输入成绩的输入框
            clearInterval(counttime);
            document.getElementById("text").innerHTML="比赛结束！";
            document.getElementById("going").setAttribute("class","ui progress success");

            let tips1=document.createElement("p");
            tips1.style.textAlign="center";

            
            tips1.innerHTML="<br> 您输入的国家对应的序号为：<br>"
            for(i=1;i<=countryNum;i++){
                tips1.innerHTML+=i+"."+countries[i]+"   ";
            }
            tips1.innerHTML+="<br>输入三个序号则取前三名成绩，五个序号则取前五名成绩<br>";
            
            
            document.body.appendChild(tips1);

            console.log(male);

            let tips2=document.createElement("p");
            tips2.innerHTML="<br>请告诉我们男子选手的成绩吧！<br> ";
            tips2.style.textAlign="center";
            document.body.appendChild(tips2);
            for(i=1;i<=male;i++){
                let input=document.createElement("div");
                input.style.textAlign="center";
                input.style.width="200px";
                input.style.margin="0 auto";
                input.innerHTML="<p></p>";
                input.innerHTML+="<div class='ui fluid input'><input type='text' placeholder='项目"+i+"排名，空格分隔' id='male"+i+"'></div>";
                document.body.appendChild(input);

            }
            
            let tips3=document.createElement("p");
            tips3.innerHTML="<br>请告诉我们女子选手的成绩吧！<br> ";
            tips3.style.textAlign="center";
            document.body.appendChild(tips3);
            for(i=1;i<=female;i++){
                let input=document.createElement("div");
                input.style.textAlign="center";
                input.style.width="200px";
                input.style.margin="0 auto";
                input.innerHTML="<p></p>";
                input.innerHTML+="<div class='ui fluid input'><input type='text' placeholder='项目"+i+"排名，空格分隔' id='female"+i+"'></div>";
                document.body.appendChild(input);

            }

            let confirm=document.createElement("div");
            confirm.style.textAlign="center";
            confirm.innerHTML="<p></p>";
            confirm.innerHTML+="<button class='positive ui button' onclick='finished()'>输入完成</button>";
            confirm.innerHTML+="<h1> </h1>";
            confirm.innerHTML+="<h1> </h1>";
            document.body.appendChild(confirm);
                }
    },80
    );

    
}


//输入了所有的成绩，准备统计，同时检验数据正确性，转到显示界面，储存得到的数据
function finished(){
    let ranksMale=new Array();
    for(i=1;i<=male;i++){
        ranksMale[i]=document.getElementById("male"+i).value;
    }
    let ranksFemale=new Array();
    for(i=1;i<=female;i++){
        ranksFemale[i]=document.getElementById("female"+i).value;
    }
    
    localStorage.setItem("ranksMale",ranksMale);
    localStorage.setItem("ranksFemale",ranksFemale);

    window.location.href="ranks.html";
}