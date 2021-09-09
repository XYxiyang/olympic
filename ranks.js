var male=localStorage.getItem("male");
var female=localStorage.getItem("female");
var countryNum=localStorage.getItem("countryNum");
var countrie=localStorage.getItem("countries");
var ranksfemale=localStorage.getItem("ranksFemale");
var ranksmale=localStorage.getItem("ranksMale");
var ranksFemale=ranksfemale.split(",");
var ranksMale=ranksmale.split(",");
var countries=countrie.split(",");
var round=0;

var points=new Array();

//消除其他选项产生的界面
function removeDrawed(id=0){
    let old=document.getElementById("sheet");
    if(old!=null)
        old.remove();
    if(id!=1){
        let old1=document.getElementById("sheet1");
        if(old1!=null)
            old1.remove();
    }

    if(id!=2){
        let old2=document.getElementById("sheet2");
        if(old2!=null)
            old2.remove();
    }
    let old1=document.getElementById("table");
    if(old1!=null)
        old1.remove();
}

//定义了country类，方便后面排序
function country(){
    this.name="";
    this.point=0;
    this.id=0;
    this.male=0;
    this.female=0;
}

//计算各国男团、女团、总体得分
function calculate(){
    console.log()
    if(round)
        return;
    round=1;
    let malePoints=new Array();
    for(i=1;i<=countryNum;i++)
        malePoints[i]=0;
    
    let femalePoints=new Array();
    for(i=1;i<=countryNum;i++)
        femalePoints[i]=0;
    for(i=1;i<=male;i++){
        let rank=ranksMale[i];
        rank=rank.split(' ');
        if(rank.length==3){
            malePoints[rank[0]]+=5;
            malePoints[rank[1]]+=3;
            malePoints[rank[2]]+=2;
        }
        else if(rank.length==5){
            malePoints[rank[0]]+=7;
            malePoints[rank[1]]+=5;
            malePoints[rank[2]]+=3;
            malePoints[rank[3]]+=2;
            malePoints[rank[4]]+=1;
        }
    }

    for(i=1;i<=female;i++){
        let rank=ranksFemale[i];
        rank=rank.split(' ');
        if(rank.length==3){
            femalePoints[rank[0]]+=5;
            femalePoints[rank[1]]+=3;
            femalePoints[rank[2]]+=2;
        }
        else if(rank.length==5){
            femalePoints[rank[0]]+=7;
            femalePoints[rank[1]]+=5;
            femalePoints[rank[2]]+=3;
            femalePoints[rank[3]]+=2;
            femalePoints[rank[4]]+=1;
        }
    }
    console.log(femalePoints)
    for(i=1;i<=countryNum;i++){
        let item=new country();
        item.name=countries[i];
        item.point=femalePoints[i]+malePoints[i];
        item.female=femalePoints[i];
        item.male=malePoints[i];
        item.id=i;
        points[i-1]=item;
    }
}

//返回图片类型，解决png和jpg
function retCountryType(con){
    if(con=="中国"||con=="法国")
        return "jpg";
    else 
        return "png";
}

//按照国家id顺序进行排名，显示总分和国旗
function rankByCountryID(){

    calculate();

    points.sort(function(a,b){return a.id-b.id});
    removeDrawed();
    let sheet=document.createElement("div");

    sheet.style="width: 150px; margin: 0 auto;text-align: left"
    sheet.id="sheet";

    let items="";
    for(i=1;i<=countryNum;i++){
        items+="<div class='item'>";
        items+="<img class='ui avatar image' src='./flags/"+points[i-1].name+"."+retCountryType(points[i-1].name)+"'></img>";
        //items+="<i class='"+retCountryFlag(countries[i])+" flag'></i>";
        items+="<div class='content'>"
        items+="<a class='header'>"+i+'.'+points[i-1].name+"</a>";
        items+="<div class='description'>积分"+points[i-1].point+"<br> </div>"
        items+="</div>"
        items+="</div>"


    }
    sheet.innerHTML="<div class='ui middle aligned animated list'><h1> </h1>"+items;

    document.body.appendChild(sheet);
}


//按照国家总分排名，显示总分和国旗
function rankByCountryPoints(){
    calculate();


    points.sort(function(a,b){return b.point-a.point});
    removeDrawed();
    let sheet=document.createElement("div");

    sheet.style="width: 150px; margin: 0 auto;text-align: left"
    sheet.id="sheet";
    let items="";
    for(i=1;i<=countryNum;i++){
        console.log(i);  

        items+="<div class='item'>";
        items+="<img class='ui avatar image' src='./flags/"+points[i-1].name+"."+retCountryType(points[i-1].name)+"'></img>";
        //items+="<i class='"+retCountryFlag(countries[i])+" flag'></i>";
        items+="<div class='content'>"
        items+="<a class='header'>"+i+'.'+points[i-1].name+"</a>";
        items+="<div class='description'>积分"+points[i-1].point+"<br> </div>"
        items+="</div>"
        items+="</div>"


    }
    sheet.innerHTML="<div class='ui middle aligned animated list'><h1> </h1>"+items;

    document.body.appendChild(sheet);
}

//按照女团总分排名，显示总分和国旗
function rankByFemale(){
    calculate();


    points.sort(function(a,b){return b.female-a.female});
    removeDrawed();
    let sheet=document.createElement("div");

    sheet.style="width: 150px; margin: 0 auto;text-align: left"
    sheet.id="sheet";
    let items="";
    for(i=1;i<=countryNum;i++){
        console.log(i);  

        items+="<div class='item'>";
        items+="<img class='ui avatar image' src='./flags/"+points[i-1].name+"."+retCountryType(points[i-1].name)+"'></img>";
        //items+="<i class='"+retCountryFlag(countries[i])+" flag'></i>";
        items+="<div class='content'>"
        items+="<a class='header'>"+i+'.'+points[i-1].name+"</a>";
        items+="<div class='description'>积分"+points[i-1].female+"<br> </div>"
        items+="</div>"
        items+="</div>"


    }
    sheet.innerHTML="<div class='ui middle aligned animated list'><h1> </h1>"+items;

    document.body.appendChild(sheet);

}

//按照男团总分排名，显示总分和国旗
function rankByMale(){
    calculate();


    points.sort(function(a,b){return b.male-a.male});
    removeDrawed();
    let sheet=document.createElement("div");

    sheet.style="width: 150px; margin: 0 auto;text-align: left"
    sheet.id="sheet";
    let items="";
    for(i=1;i<=countryNum;i++){
        console.log(i);  

        items+="<div class='item'>";
        items+="<img class='ui avatar image' src='./flags/"+points[i-1].name+"."+retCountryType(points[i-1].name)+"'></img>";
        //items+="<i class='"+retCountryFlag(countries[i])+" flag'></i>";
        items+="<div class='content'>"
        items+="<a class='header'>"+i+'.'+points[i-1].name+"</a>";
        items+="<div class='description'>积分"+points[i-1].male+"<br> </div>"
        items+="</div>"
        items+="</div>"


    }
    sheet.innerHTML="<div class='ui middle aligned animated list'><h1> </h1>"+items;

    document.body.appendChild(sheet);

}


//显示一个国家所有项目的排名，给出选择国家的下拉框
function searchByCountry(){
    removeDrawed();
    let selectsheet=document.createElement("div");
    selectsheet.style="width: 250px; margin: 0 auto;text-align: center";
    selectsheet.id="sheet1";

    let options="<option value='0'>国家</option>";
    for(i=1;i<=countryNum;i++){
        options+="<option value="+i+">"+countries[i]+"</option>";
    }

    selectsheet.innerHTML="<select class='ui fluid dropdown' id='countryopt' onchange='showCountry()'>"+options;

    document.body.appendChild(selectsheet);

}

//显示一个项目所有的排名，给出选择项目的下拉框
function searchByGame(){
    removeDrawed();
    let selectsheet=document.createElement("div");
    selectsheet.id="sheet2";
    selectsheet.style="width: 250px; margin: 0 auto;text-align: center";

    let options="<option value='0'>项目</option>";
    for(i=1;i<=male;i++){
        options+="<option value=male"+i+">男子项目"+i+"</option>";
    }
    for(i=1;i<=female;i++){
        options+="<option value=female"+i+">女子项目"+i+"</option>";
    }

    selectsheet.innerHTML="<select class='ui fluid dropdown' id='gameopt' onchange='showGame()'>"+options;

    document.body.appendChild(selectsheet);
}


//显示一个国家所有项目的排名，显示国旗和各个项目的排名
function showCountry(){

    removeDrawed(1);
    var select = document.getElementById("countryopt");
    var coun = select.options[select.selectedIndex].value;

    if(coun==0)
        return;

    let table=document.createElement("div");
    table.style="width: 180px; margin: 0 auto;text-align: center";
    table.id="table";

    let content="<thead><tr><th>Country</th><th>Rank</th></tr></thead>";
    content+="<tbody>";

    for(i=1;i<=male;i++){
        content+="<tr><td><h4 class='ui image header'><img src='./flags/"+countries[coun]+"."+retCountryType(countries[coun])+"' class='ui mini rounded image'>";
        content+="<div class='content'>"+countries[coun]+"<div class='sub header'>男子项目"+i+"</div></div>";
        content+="</h4></td><td>";
        let rank=ranksMale[i];
        rank=rank.split(' ');
        let place=rank.indexOf(coun);
        place++;
        if(place==0){
            place="/";
        }
        content+=place;
        content+="</td></tr>";
    }
    for(i=1;i<=female;i++){
        content+="<tr><td><h4 class='ui image header'><img src='./flags/"+countries[coun]+"."+retCountryType(countries[coun])+"' class='ui mini rounded image'>";
        content+="<div class='content'>"+countries[coun]+"<div class='sub header'>女子项目"+i+"</div></div>";
        content+="</h4></td><td>";
        let rank=ranksFemale[i];
        rank=rank.split(' ');
        let place=rank.indexOf(coun);
        place++;
        if(place==0){
            place="/";
        }
        content+=place;
        content+="</td></tr>";
    }
    content+="</tbody>";

    table.innerHTML="<table class='ui very basic collapsing celled table'>"+content+"</table>";

    document.body.appendChild(table);
}

//显示一个项目所有的排名，显示国旗和各个国家的排名
function showGame(){

    removeDrawed(2);
    var select = document.getElementById("gameopt");
    var opt = select.options[select.selectedIndex].value;

    if(opt==0)
        return;

    let rank,gender,index; 
    if(opt.indexOf("female")==-1){
        index=opt[opt.length-1];
        rank=ranksMale[index];
        gernder=1;
    }
    else{
        index=opt[opt.length-1];
        rank=ranksFemale[index];
        gender=0;
    }
    rank=rank.split(" ");
    let table=document.createElement("div");
    table.style="width: 180px; margin: 0 auto;text-align: center";
    table.id="table";

    let content="<thead><tr><th>Country</th><th>Rank</th></tr></thead>";
    content+="<tbody>";

    console.log(rank);
    for(i=0;i<rank.length;i++){
        content+="<tr><td><h4 class='ui image header'><img src='./flags/"+countries[rank[i]]+"."+retCountryType(countries[rank[i]])+"' class='ui mini rounded image'>";
        content+="<div class='content'>"+countries[rank[i]]+"<div class='sub header'>";
        if(gender==0){
            content+="女子";
        }
        else
            content+="男子";
        content+="项目"+index+"</div></div>";
        content+="</h4></td><td>";
        content+=i+1;
        content+="</td></tr>";
    }
    
    content+="</tbody>";

    table.innerHTML="<table class='ui very basic collapsing celled table'>"+content+"</table>";

    document.body.appendChild(table);
}