let righttriangle = ''
for (i = 1; i < 6; i++) {
    for (j=0;j<i;j++){
        righttriangle +='*'
    }
    righttriangle += '\n'
}
console.log("Right Triangle :");
console.log(righttriangle);

let square = ''

for (i = 1;i<6;i++){
    for(j = 1;j<6;j++){
        square += '*'

    }
    square+='\n'
}
console.log("Square :");
console.log(square);

let hollowSQ = ''

for(i = 0;i<6;i++){
    for(j=0;j<6;j++){

        if(i === 0 || i === 5){
            hollowSQ += '*'
        }else{
            if( j === 0 || j === 5){
                hollowSQ += '*'
            }
            else{
                hollowSQ += ' '
            }
        }
    }
    hollowSQ += '\n'
}
console.log("Hollow Square :");
console.log(hollowSQ);

let righttriangle2 = ''

for(i = 0;i<6;i++){
    for(j = 0;j<6-i;j++){
        righttriangle2 += ' '
    }
    for(k = 0;k<i;k++){
        righttriangle2+='*'
    }
    righttriangle2 += '\n'
}
console.log(righttriangle2);
console.log(righttriangle2);


let hollowtriangle = ''

for(i = 0;i<10;i++){
    for(j=0;j<i;j++){
        if(i ===9){
            hollowtriangle += "*"
        }else{
            if(j === 0  || j === i-1){
                hollowtriangle +="*"
            }
            else{
                hollowtriangle+=" "
            }
        }
       
     }

     hollowtriangle+='\n'   
}

console.log('Hollow Triangle :');
console.log(hollowtriangle);

let hollowtriangle2 = ''

for(i = 0;i<10;i++){
    for(j = 0;j<10-i;j++){
        hollowtriangle2 += ' '
    }

    for(k = 0;k<i;k++){

        if(i === 9){
            hollowtriangle2 +="*"
        }else{
            if(k === 0 || k === i-1){
                hollowtriangle2 +='*'
            }else{
                hollowtriangle2 += ' '
            }
        }

        
    }
    hollowtriangle2 +='\n'
}
console.log("hollow Triangle2 :");
console.log(hollowtriangle2);

let pyramid = ''

for(i = 0;i<6;i++){
    for(j = 0;j<6-i;j++){
        pyramid += ' '
    }
    for(j = 0;j <2*i-1;j++){
        pyramid+='+'
    }
    pyramid+='\n'
}
console.log("pyramid :");
console.log(pyramid);

let revpyramid = ''

for(i = 0;i<6;i++){
    for(j = 0;j<i;j++){
        revpyramid +=' '
    } 
    for(k = 0;k< 2*(5-i)-1;k++){
        revpyramid += "*"
    }
    revpyramid +='\n'

}

console.log(revpyramid);


let hollowpyramid = ''
for(i = 0;i<6;i++){
    for(j = 0;j<6-i;j++){
        hollowpyramid +=' '
    }
    for(k = 0;k<2*i-1;k++){
        if(i === 5){
            hollowpyramid+='*'
        }else{
            if(k === 0 || k ===2*i-2){
                hollowpyramid+='*'
            }
            else{
                hollowpyramid+=' '
            }
        }
    }
    hollowpyramid += '\n'
}
console.log(hollowpyramid);

let diamond = ''
for(i=0;i<6;i++){
    for(j = 0;j<5-i;j++){
        diamond += ' '
    }
    for(j = 0;j <2*i-1;j++){
        diamond+='*'
    }
        diamond+='\n'
    
  


}
for(i=0;i<6;i++){
    for(j = 0;j<i;j++){
        diamond +=' '
    } 
    for(k = 0;k< 2*(5-i)-1;k++){
        diamond += "*"
    }
    diamond +='\n'
}
console.log("diamond:");
console.log(diamond);

let hollowdiamond = ''

for(i=0;i<6;i++){
    for(j = 0;j<5-i;j++){
        hollowdiamond += ' '
    }
    for(j = 0;j <2*i-1;j++){
        if(j === 0 || j === 2*i-2){
            hollowdiamond +='*'
        }
        else{
            hollowdiamond += ' '
        }
    }
    hollowdiamond+='\n'
    
  


}
for(i=0;i<6;i++){
    for(j = 0;j<i;j++){
        hollowdiamond +=' '
    } 
    for(k = 0;k< 2*(5-i)-1;k++){
        if(k === 0 || k ===2*(5-i)-2){
            hollowdiamond +='*'
        }
        else{
            hollowdiamond += ' '
        }
    }
    hollowdiamond +='\n'
}
console.log(
    "hollow diamond :"
);
console.log(hollowdiamond);