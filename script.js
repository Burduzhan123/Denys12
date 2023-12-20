/*function summarize(num) {
    return function (y) {
        if(y = 5)
      return num + y;
    };
  }
  
  var add5 = summarize(3);
  var add10 = summarize(1);
  
  console.log(add5());
  console.log(add10());*/


  /*var Counter = (function () {
    var privateCounter = 1;
    
  
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function () {
        changeBy(1);
      },
      decrement: function () {
        changeBy(-2);
      },
      value: function () {
        return privateCounter;
      },
      countReset: function(){
        return privateCounter
      }
    };
  })();
  
  console.log(Counter.value()); 
  
  Counter.increment();
  Counter.decrement();
  
  console.log(Counter.value());
  console.countReset(Counter.value());*/


  function sequence(x) {
    function sequence2(y) {
      return x + y;
    }
    return sequence2;
  }
  fn_inside = sequence(3);
  
  result = fn_inside(5);
  
  result1 = sequence(3)(6);

  console.log(result)
  console.log(result1)

  
  





