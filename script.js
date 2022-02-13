var idpw = {"hoochoo":"kojw0224", "jsjsjs":"js123123", "262mee":"262seoseo"};
//idpw[0] = 후루추룹
//idpw[1] = 정시니
//idpw[2] = 메밀묵
function login()  {
    var id = document.getElementById("id").value;
    var pw = document.getElementById("pw").value;
    
    if(id in idpw && idpw[id] == pw) {
        location.href = "index.html";
    }
    else{
        alert("아이디나 비밀번호가 틀렸습니다");
    }
}