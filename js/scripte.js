
  function validate(){

    document.getElementById('errorMessage').innerHTML = ''
    let userName = document.userform.name.value.trim()

    if (userName === '' || userName.length < 3 || !/\s/.test(userName)){
        document.getElementById('errorMessage').innerHTML = "Please enter your name (Example: noha salim)";
        document.userform.name.focus();
        return false;
    }
    let userEmail = document.userform.email.value.trim()
    let atposn = userEmail.indexOf("@");   
    let dotposn = userEmail.lastIndexOf(".");  
    if (userEmail === '' || atposn < 1 || dotposn - atposn < 2){
        document.getElementById('errorMessage').innerHTML = "Please enter a valid email (Example: username@gmail.com) ";
        document.userform.email.focus();
        return false;
    }

    let userProject = document.userform.message.value.trim()
    if(userProject === '' || userProject.length < 4){
        document.getElementById('errorMessage').innerHTML = 'Please enter at least four letters...';
        document.userform.message.focus();
        return false;
    }


}