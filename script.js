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
 
 //    <div class="bar" style="height:200px; left:60px; background-color:yellow"></div>
    var color;
    var percent;
        var left;
    
for (i= 0; i < data.length; i++){

            for (var label = 0; label < data.length; label += 2) {
                    document.write(data[label]);
                    color = data[label];
            }           
            document.write("<br>");
            
                for(var percentage = 1; percentage < data.length; percentage += 2){
                    document.write(data[percentage]*4 + 'px');
                    percent = data[percentage]*4 + 'px';
                }
                
        var bar = document.createElement('div');
        bar.setAttribute('class', 'bar');
        document.getElementById('frame').appendChild(bar);
        bar.style.backgroundColor = color;
        
        bar.style.left = left + 40 + 'px';
        bar.style.height = percent;
}