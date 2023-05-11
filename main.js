
//sort 
let array = [
    { date: '2017-01-10' },
    { date: '2016-05-18' },
    { date: '2002-12-20' },
    { date: '2020-06-30' }
];
array.sort((a, b) => Number(a.date.split('-').join('')) - Number(b.date.split('-').join('')));
// event id click 

const ROOT = document.getElementById('root');

ROOT.addEventListener('click', function (event) {
    if (event.target.id === 'root') return;
    console.log(event.target.id);
});

