function count(x , y){
    console.log(x)
    x++;
    if(x<=y){
        count(x, y)
    }
    
}

count(7,15)