function sendMessageFunction(){
    alert("Your message has been sent");
};

var table = $('#CollegeResults')
var count = 0;


function showMoreFunction(){
if (count ==0)
{
    $('#CollegeResults').css("display","block");
    count +=1;
    $('.Show').text("Hide Grades")
}

else
{
    $('#CollegeResults').css("display","none");
    count = 0;
    $('.Show').text("Show Grades")
}

}

