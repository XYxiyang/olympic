var countryNum;
var male;
var female;
var countries;
//输入国家数目
//之后建立相对应个数的国家选择框
//之后给出相应的男女项目个数输入
function inputCountries(){

    countryNum=document.getElementById("nums").value;
    if(countryNum>18||countryNum<3)
        return;
    document.getElementById("confirm").setAttribute("disabled","true");
    console.log(countryNum);
    for(i=1;i<=countryNum;i++){
        let div=document.createElement("div");
        div.style.textAlign="center";
        div.innerHTML="<p></p>";
        div.innerHTML+="<div class='ui form'>";
        div.innerHTML+="<div class='field'>";
        div.innerHTML+="<label>Country"+i+"</label>"
        div.innerHTML+="<select class='ui search dropdown' id="+i+"th><option value=''>Select Country</option><option value='中国'>中国</option><option value='德国'>德国</option><option value='美国'>美国</option><option value='韩国'>韩国</option><option value='法国'>法国</option><option value='巴西'>巴西</option><option value='冰岛'>冰岛</option><option value='日本'>日本</option><option value='英国'>英国</option><option value='加拿大'>加拿大</option><option value='俄罗斯'>俄罗斯</option><option value='波兰'>波兰</option><option value='埃及'>埃及</option><option value='墨西哥'>墨西哥</option><option value='荷兰'>荷兰</option><option value='西班牙'>西班牙</option><option value='牙买加'>牙买加</option><option value='印度'>印度</option>";
        div.innerHTML+="</select>";
        div.innerHTML+="</div>";
        document.body.appendChild(div);
    }

    let tips=document.createElement("p");
    tips.style.textAlign="center";

    tips.innerHTML="<br>请告诉我们有多少个男/女子项目吧！<br>";
    document.body.appendChild(tips);


    let div=document.createElement("div");
    div.style.textAlign="center";

    div.innerHTML="<div class='ui icon input'><input type='text' placeholder='男子项目' id='male'><i class='mars icon'></i></div>";
    div.innerHTML+="<div class='ui icon input'><input type='text' placeholder='女子项目' id='female'><i class='venus icon'></i></div>";
    document.body.appendChild(div);

    let button=document.createElement("div");
    button.style.textAlign="center";
    button.innerHTML="<p></p><button class='ui compact labeled icon blue button' onclick='move()'><i class='check icon'></i>确认</button>"
    
    document.body.appendChild(button);

}

//检查输入数据的正确性
//把输入的数据保存在本地
//跳转到下一个界面
function move(){
    countries=new Array();
    for(i=1;i<=countryNum;i++){
        countries[i]=document.getElementById(i+"th").value;
        for(j=1;j<=i-1;j++){
            if(countries[i]==countries[j])
                return;
        }
    }

    male=document.getElementById("male").value;
    female=document.getElementById("female").value;
    if(male<0||female<0||female+male<=0)
        return;
    localStorage.setItem("male",male);
    localStorage.setItem("female",female);
    localStorage.setItem("countryNum",countryNum);
    localStorage.setItem("countries",countries);

    window.location.href="process.html";
}