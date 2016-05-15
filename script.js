// generate the graph's bars using this data array
    data = [
  'green', 100,
  'yellow', 50,
  'orange', 10,
  'purple', 75,
  'brown', 52,
  'lime', 16,
  'coral', 71,
  'cyan', 85,
  'linen', 22,
  'maroon', 55,
  'navy', 91,
  'olive', 41,
  'peru', 34,
  'pink', 43,
  'silver', 11,
  'tan', 60,
  'salmon', 87,
  'wheat', 12
]
    
    
    var color;
    var percent;
    var origin = 0 ;
    
for (i= 0; i < data.length; i++){
            
        var bar = document.createElement('div');
        bar.setAttribute('class', 'bar');
        document.getElementById('frame').appendChild(bar);
        origin += 20;
        bar.style.left = origin + 'px';
            
            for (var label = 0; label < i; label += 1) {
                color = data[label];
            }           
                document.write("<br>");
            
            for (var percentage = 1; percentage < i+1; percentage +=1){
                percent = data[percentage]*4 + 'px';
            }
    
        bar.style.backgroundColor = color;
        bar.style.height = percent;           
}