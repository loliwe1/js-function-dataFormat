'use strict';

const source = {
  order: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  days: {
    Monday: {
      start: 10,
      end: 19.5
    },
    Tuesday: {
      start: 10.75,
      end: 23.5
    },
    Sunday: {
      start: 9,
      end: 18
    },
    Wednesday: {
      start: 10.75,
      end: 23.5
    },
    Thursday: {
      start: 10.75,
      end: 23.5
    },
    Saturday: {
      start: 9,
      end: 18
    }
  }
};

const source2 = {
  order: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  days: {
    Monday: {
      start: 9,
      end: 18.35
    },
    Tuesday: {
      start: 10,
      end: 19.2
    },
    Wednesday: {
      start: 9,
      end: 18.35
    },
    Thursday: {
      start: 10,
      end: 19.2
    },
    Saturday: {
      start: 10,
      end: 19.2
    },
    Sunday: {
      start: 10,
      end: 19.2
    }
  }
}

const source3 = {
  order: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  days: {
    Monday: {
      start: 7.5,
      end: 18.5
    },
    Tuesday: {
      start: 7.5,
      end: 18.5
    },
    Saturday: {
      start: 7.5,
      end: 18.5
    },
    Sunday: {
      start: 9,
      end: 18
    }
  }
}

function dataFormat(source, selector) {
let box = document.querySelector(selector);
let ord = source.order;
let day = source.days;

for (let i = 0; i < ord.length; i++) {
  if(day[ord[i]])
  day[ord[i]].index = i;
}

let arr = Object.entries(day);
let sort = arr.sort((a,b) => a[1].index - b[1].index);
let result = [];

for (let i = 0; i < sort.length; i++) {
  if(i === 0) {
    result.push(sort[i])
    result[i][0] = result[i][0].slice(0,3);

  }else if(sort[i][1].index-1 === result[i-1][1].index && sort[i][1].start === result[i-1][1].start && sort[i][1].end ===  result[i-1][1].end) {
    result[i-1][0] =  result[i-1][0] + '-' + sort[i][0].slice(0,3);
    if(result[i-1][0].length > 7) {
      result[i-1][0] = result[i-1][0].slice(0,4) + result[i-1][0].slice(-3)
    }
    result[i-1][1].index = sort[i][1].index;
    sort.splice(i,1);
    i--;
  }else {
    result.push(sort[i]);
    result[i][0] = result[i][0].slice(0,3);
  }
  
};

for(let i = 0; i< result.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = `${result[i][0]}: ${result[i][1].start} AM - ${result[i][1].end} PM`;
  box.append(li)
}


console.log(result);

}

dataFormat(source, '#box1 ul');
dataFormat(source2, '#box2 ul');
dataFormat(source3, '#box3 ul');