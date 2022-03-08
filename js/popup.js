
status="Trần Kảnh"
var a=new Array(),n=""
a[1]='K';
a[2]='h';
a[3]='u';
a[4]='2';
a[5]=' ';
a[6]='H';
a[7]='o';
a[8]='à';
a[9]='n';
a[10]='g ';
a[11]=' ';
a[12]='K';
a[13]='h';
a[14]='ư';
a[15]='ơ';
a[16]='n';
a[17]='g';
a[18]=' ';
a[19]='T';
a[20]='h';
a[21]='a';
a[22]='n';
a[23]='h';
a[24]=' ';
a[25]='B';
a[26]='a';
a[27]=' ';
a[28]='P';
a[29]='h';
a[30]='ú';
a[31]=' ';
a[32]='T';
a[33]='h';
a[34]='ọ';
a[35]=' ';
a[36]=' ';
a[37]='Đ';
a[38]='ụ';
a[39]='n';
a[40]='g';
a[41]=' ';
a[42]='l';
a[43]='à';
a[44]=' ';
a[45]='đ';
a[46]='ó';
a[47]='n';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==48)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('#k').slideUp('fast');
                }
            });
        });
					function Don()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>Vãi lồn luôn đầu cắt moi</h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Bố mày sợ mày quá bố mày sợ mày quá bố mày sợ mày quá</p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>ĐỊT MẸ THẰNG ĐẦU CẮT MOI NÀY</p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				
