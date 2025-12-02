// 欢迎信息
window.onload=function(){
    console.log('页面加载完成！欢迎访问我的个人网站');
    document.title='酱板鸭的主页';
}
// 改变文本内容
function changeText(){
    var demoText = document.getElementById('demoText');
    demoText.innerHTML = '文本已改变！';
    demoText.style.color = '#e74c3c';
    demoText.style.fontWeight = 'bold';
    setTimeout(function(){
    demoText.innerHTML='原始文本：欢迎来到我的网站';
    demoText.style.color='';
    demoText.style.fontWeight='';
},3000);
}
// 问候
function showAlert() {
    alert('感谢您的访问！');
}



