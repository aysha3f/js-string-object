const school = 'RAJ UK Uttara Model School';

//  console.log(school);
//  console.log(school.toLocaleLowerCase());
//  console.log(school.toLocaleUpperCase());

// uppercase: ABCD EF
// lowercase:abcd efg

const subject = 'Chemistry';
const book = 'ChemIsTry';


if(subject.toLocaleLowerCase() ===  book.toLocaleLowerCase()){
    console.log('I am reading book aibar porikkhai fatai felmu');
}
else{
    console.log('hudai hudai prista ultai ar vat khawar jonno')
}


const drink = 'water';
const liquid = '  water';

if(drink.trim() === liquid.trim()){
    console.log('pani er opor nam life');
}
else{
    console.log('somudre pani ase khaite pari nah')
}