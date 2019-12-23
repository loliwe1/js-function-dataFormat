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
}

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

console.log(result);
