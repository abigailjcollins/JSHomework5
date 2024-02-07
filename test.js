//   3 Intermediate Algorithm Scripting: Seek and Destroy
    function destroyer(arr){
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1);
        var placeHolder = [];

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < args.length; j++) {
                if(arr[i] == args[j]){
                    delete arr[i];
                }
            }
            
        }
        placeHolder = arr.filter(removeFalseVar)
        return placeHolder;
    }
    function removeFalseVar(value){
        return Boolean(value)
    }

destroyer([1, 2, 3, 1, 2, 3], 2, 3)



//   8.Intermediate Algorithm Scripting: DNA Pairing

function pair(str){
    str = str.toUpperCase();
    str = str.split('');
    var placeHolderArray = [];
    
    for (let i = 0; i < str.length; i++) {
      if(str[i] == 'G'){
        placeHolderArray.push(['G', 'C'])

      } else  if(str[i] == 'C'){
        placeHolderArray.push(['C', 'G'])
        
      }
      else  if(str[i] == 'A'){
        placeHolderArray.push(['A', 'T'])
        
      }
      else  if(str[i] == 'T'){
        placeHolderArray.push(['T', 'A'])
        
      }
        
        
    }
    return placeHolderArray

}

pair("GCG");


// 11.Intermediate Algorithm Scripting: Convert HTML Entities

function convert(str){
    var placeHolder = str.split('');
    for (var i = 0; i < placeHolder.length; i++) {
        switch (placeHolder[i]){
            case '&':
            placeHolder[i] = "&amp;";
            break;
            case '<':
            placeHolder[i] = "&lt;";
            break;
            case '>':
            placeHolder[i] = "&gt;";
            break;
            case '"':
            placeHolder[i] = "&quot"
            break;
            case "'":
            placeHolder[i] = "&apos;";
            break;
        }

        
    }
    str = placeHolder.join('');
}

convert("Dolce & Gabbana");