let imgname1='1';
let imgname2='2';
let imgname3='3';
let imgname4='4';
function Click1() {
    let img=document.getElementById('image1');
    switch (imgname1) {
        case "1":
            imgname1='5';
            break;
        case "5":
            imgname1='9';
            break;
        case "9":
            imgname1='1';
            break;
    }
    img.src= imgname1 + '.png';
    if (imgname1==='1'&& imgname2==='2'&&imgname3==='3'&&imgname4==='4'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else if (imgname1==='5'&& imgname2==='6'&&imgname3==='7'&&imgname4==='8'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else if (imgname1==='9'&& imgname2==='10'&&imgname3==='11'&&imgname4==='12'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else {
        document.getElementById('image1').style.border = 'none';
        document.getElementById('image2').style.border = 'none';
        document.getElementById('image3').style.border = 'none';
        document.getElementById('image4').style.border = 'none';
        document.getElementById('Hienthi').innerHTML='';
    }
}
function Click2() {
    let img=document.getElementById('image2');
    switch (imgname2) {
        case "2":
            imgname2='6';
            break;
        case "6":
            imgname2='10';
            break;
        case "10":
            imgname2='2';
            break;
    }
    img.src= imgname2 + '.png';
    if (imgname1==='1'&& imgname2==='2'&&imgname3==='3'&&imgname4==='4'){
        document.getElementById('image1').style.border= 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else if (imgname1==='5'&& imgname2==='6'&&imgname3==='7'&&imgname4==='8'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else if (imgname1==='9'&& imgname2==='10'&&imgname3==='11'&&imgname4==='12'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else {
        document.getElementById('image1').style.border = 'none';
        document.getElementById('image2').style.border = 'none';
        document.getElementById('image3').style.border = 'none';
        document.getElementById('image4').style.border = 'none';
        document.getElementById('Hienthi').innerHTML='';
    }
}
function Click3() {
    let img=document.getElementById('image3');
    switch (imgname3) {
        case "3":
            imgname3='7';
            break;
        case "7":
            imgname3='11';
            break;
        case "11":
            imgname3='3';
            break;
    }
    img.src= imgname3 + '.png';
    if (imgname1==='1'&& imgname2==='2'&&imgname3==='3'&&imgname4==='4'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else if (imgname1==='5'&& imgname2==='6'&&imgname3==='7'&&imgname4==='8'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else if (imgname1==='9'&& imgname2==='10'&&imgname3==='11'&&imgname4==='12'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else {
        document.getElementById('image1').style.border = 'none';
        document.getElementById('image2').style.border = 'none';
        document.getElementById('image3').style.border = 'none';
        document.getElementById('image4').style.border = 'none';
        document.getElementById('Hienthi').innerHTML='';

    }
}
function Click4() {
    let img=document.getElementById('image4');
    switch (imgname4) {
        case "4":
            imgname4='8';
            break;
        case "8":
            imgname4='12';
            break;
        case "12":
            imgname4='4';
            break;
    }
    img.src= imgname4 + '.png';
    if (imgname1==='1'&& imgname2==='2'&&imgname3==='3'&&imgname4==='4'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else if (imgname1==='5'&& imgname2==='6'&&imgname3==='7'&&imgname4==='8'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else if (imgname1==='9'&& imgname2==='10'&&imgname3==='11'&&imgname4==='12'){
        document.getElementById('image1').style.border = 'solid';
        document.getElementById('image2').style.border = 'solid';
        document.getElementById('image3').style.border = 'solid';
        document.getElementById('image4').style.border = 'solid';
        document.getElementById('Hienthi').innerHTML='Ban da chon dung!!!';
    }else {
        document.getElementById('image1').style.border = 'none';
        document.getElementById('image2').style.border = 'none';
        document.getElementById('image3').style.border = 'none';
        document.getElementById('image4').style.border = 'none';
        document.getElementById('Hienthi').innerHTML='';
    }
}