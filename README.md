

Функция dataFormat(source, selector) - приминамет в качтестве аргумента объект source в таком формате : 

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

и css selector в виде строки, например - '#box';

Далее функция преобразует объект в вид - 

Mon: 10:00 AM - 7:30 PM
Tue-Thu: 10:45 AM - 11:30 PM
Sat-Sun: 9:00 AM - 6:00 PM

и выводит списком в конец тега '#box' ;

Задача взята с канала Владилена Минина в качестве тренировки.
Ссылка на видео с задачей - https://www.youtube.com/watch?v=8gxn9q6oDfM .
