////////////// TASK 1 //////////////
// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// 3) Alinan yeni arrayi stringe cevirin(join)

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// let FullName = 'Nur Davidli Baloglan'
// console.log(FullName.split (''));

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// function adsoyad(FullName) {
//     let names = FullName.split(' ')
//     if (names.length < 2)
//         return FullName
//     let deyisenad = names[1] + ' ' + names[0]
//     for (let i = 2; i < names.length; i++) {
//         deyisenad += ' ' + names[i] }
//     return deyisenad}
//     console.log(adsoyad(FullName))

// /////////internetden baxa baxa yazmisam amma eror aliram

// 3) Alinan yeni arrayi stringe cevirin(join) 

// console.log(FullName.split(' ')[1]);



////////////// const FullName = ['Nur','Davidli', 'Baloglan'];

//////////////const FullName2 = FullName.slice(-1)[0, 2];
//////////////// console.log(FullName);





// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// let result = arr.filter(item => item==5)
// console.log(result);


//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// let sum = 0
// let result = arr.map (item => sum += item)
// console.log(result);

// let result2 = arr.reduce((acc, prev) => acc + prev, 0)
// console.log(result2);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// // 0-100 / a-z (asc)
// // 100-0 / z-a (desc)
// arr.sort()
// console.log(arr);

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// console.log(Math.max(4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7));
// let arr2 = arr.filter (item => item == 7)
// console.log(arr2);

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
// const arr1 = [0, 1, 2];

// console.log(arr1.includes(2));



//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
//  let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// let result  = arr.filter(item => item %3 == 2) 
// console.log(result);
// [5, 2, 5, 2, 5, 5, 2, 2, 2, 5, 2, 5, 2, 5] bolunenler.
// let result = arr.findIndex(item => item == '2')
// console.log(result);

// let result = arr.findIndex(item => item == '5')
// console.log(result);

//10) arraydaki en boyuk reqemin ilk indexini tapin
// let result = arr.findIndex (item => item =='7')
// console.log(result);
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// let result = arr.findIndex (item => item =='4')
// console.log(result);
//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// let result = arr.findLastIndex(item => item == '5')
// console.log(result); en boyuk indexsi

// en kicik indexsi 
//  let result = arr.findIndex(item => item == '5')
// console.log(result); 


// //13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// let result = arr.filter(item => item > 2)
// console.log(result);
// console.log(arr.length);   //uzunlugu 32
// let arr2 = [4, 5, 5, 5, 3, 5, 6, 6, 6, 5, 3, 7, 4, 6, 4, 5, 6, 5, 6, 3, 7, 3, 7]
// console.log(arr2.length);    //uzunlugu 23
// let result3 = arr.map (item => sum += item)

// soruc





//14) 7 reqeminin indexleri cemini tapin.
// let arr = [19, 29, 31]
// let sum = 0
// let result = arr.map(item => sum += item)
// console.log(result);


// const result2 = arr.reduce((acc, prev) => acc + prev, 0)

// console.log(result2);



///////////// TASK 2//////////////

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

//QEYD Bu tasklarda arr2 istifade edilecekdir


// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// let arr = arr2.filter(item => item.name.startsWith('t'))
// console.log(arr);


// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

// let name1 = arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
// console.log(name1);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin.

// let key1 = arr2.reduce((a5, a4) => (a4.name.startsWith('t') &&a4.name.endsWith('t')) ? a5 + a4.key : a5, 0);
// console.log(key1);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// let arr3 = arr2.map((item, index) => {
//     if (item.name.slice(-1) === 'e') {
//         return { ...item, name: "SuperDev" };
//     } else {
//         return item;
//     }
// });
// console.log(arr2)

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

// let key4 = arr2.reduce((maxKey, obj) => (obj.name.length > arr2[maxKey].name.length ? arr2.indexOf(obj) : maxKey), 0);
// console.log(key4);

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// let long1 = arr2.findIndex(obj => obj.name.length === Math.max(...arr2.map(obj => obj.name.length))) ** 2;
// console.log(long1);

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// let Length = arr2.filter(obj => obj.name.length === 4);
// console.log(Length);
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// const enboyukKey = arr2.reduce((max, current) => {
//     return current.key > max ? current.key : max;
// }, arr2[0]);
// console.log(enboyukKey.name);


// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// let indexess = arr2.reduce((indexes, obj, index) => (obj.name.split
//     ('L').length - 1 === 2 ? [...indexes, index] : indexes), []);
// console.log(indexess);
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
// let key= arr2.filter(obj => obj.name.split
//     ('t').length - 1 === 2).map(obj => obj.key);
//     console.log(key);



