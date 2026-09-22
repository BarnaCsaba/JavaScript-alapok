//1. feladat

const nev = "Csabi";
const kor = 19;
const nyelv = "python";

console.log(`A nevem ${nev}, ${kor} eves vagyok, es a kedvenc programozasi nyelvem a ${nyelv}. Jövőre ${kor + 1} eves leszek.   `);

//2.feladat

let sugar = 7.5;
let kerulet = 2 * Math.PI * sugar;
let terulet = Math.PI * sugar ** 2;

console.log(`A kör kerülete: ${kerulet.toFixed(2)}`);
console.log(`A kör területe: ${terulet.toFixed(2)}`);


//3.feladat

let random = Math.random() * 100;
console.log(`A random szám: ${Math.round(random)}`);

function paritas(szam)
{
    if (szam % 2 === 0) {
        console.log(`${Math.round(szam)} páros.`);
    } else {
        console.log(`${Math.round(szam)} páratlan.`);
    }
}

paritas(random);

if (random > 50) {
    console.log(`A random szám nagyobb, mint 50.`);
}
else {
    console.log(`A random szám kisebb, mint 50.`);
}



//4. feladat: Egy termék ára 12 990 Ft. Sorsold ki véletlenszámmal, hányszor vásárolt már a vevő (0 és 10 között), és
//írd ki ezt a számot. Ha legalább 5-ször vásárolt, 10% kedvezményt kap, egyébként nem. Írd ki az eredeti
//és a kedvezményes árat egész forintra kerekítve.
//Tipp: Math.random() + Math.floor(), if / else vagy ternary, Math.round().

let ár = 12990;
let rand = Math.random() * 10;
console.log(`Vásárlások: ${Math.round(rand)}`);

function árKalkulátor(ár, rand) {
    if (rand > 5) {
        let kedvezmény = ár * 0.1;
        let újÁr = ár - kedvezmény;
        console.log(`A kedvezmény mértéke: ${kedvezmény.toFixed(2)} Ft`);
        console.log(`Az új ár: ${újÁr.toFixed(2)} Ft`);
    } else {
        console.log(`Nincs kedvezmény. Az ár változatlan: 12990 Ft`);
    }
}

árKalkulátor();


//5.feladat


let sorszam = Math.random() * 100;

function sorszamKalkulátor(sorszam) {
    if (sorszam <= 49)
    {
        console.log(`elégtelen.`);
    }
    else if (sorszam <= 64 &&  sorszam >= 50)
    {
        console.log(`elégséges.`);
    }
    else if (sorszam <= 79 && sorszam >= 65)
    {
        console.log(`közepes.`);
    }
    else if (sorszam <= 89 && sorszam >= 80)
    {
        console.log(`jó.`);
    
    }
    else if (sorszam <= 100 && sorszam >= 90)
    {
        console.log(`jeles.`);
    }

    
}

sorszamKalkulátor(sorszam);


//6.feladat: sorban, vesszővel elválasztva.

let szamok = [];

for (let i = 30; i >= 0; i -= 3) 
    { szamok.push(i); }

console.log(szamok.join(", "));


//7.feladat
let hatosok = 0;
let osszes = 0;
let tomb = [];

for (let i = 0; i <= 20; i++) {
    let dobas = Math.floor(Math.random() * 6) + 1;
   
    osszes += dobas;
    if (dobas === 6) {
        hatosok++;
    }
    tomb.push(dobas);
}
    console.log(`${tomb.join(" ")}`);
console.log(`A hatosok száma: ${hatosok}`);     
console.log(`A dobások összege: ${osszes}`);     


//8.feladat

let osszeg = 0;

function szamjegyOsszeg(n){
    while (n > 0) {
        let szamjegy = n % 10;
        osszeg += szamjegy;
        n = Math.floor(n / 10);
    }
    console.log(`A számjegyek összege: ${osszeg}`);
}

szamjegyOsszeg(4721);

//9.feladat

let ih = false;

function tokeletes(n) {
    let ossz = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            ossz += i;
        }
        else {continue;}
    }  
        if (ossz === n) {
            return true;
        }
        
}




for (let i = 1; i <= 10000; i++) {
    if (tokeletes(i)) {
        console.log(`${i}`);
    }
}

//10.feladat

let matrix = []

for (let i = 1; i <=10; i++)
{
    let sor = ' ';
    for (let j = 0; j < 10; j++) {
        String().padStart(4, ' ')
        const sor = String(i*j).padStart(4, ' ')
        
    }
    console.log(sor);

}

//11.feladat

let cucc = [];

for (let i = 0; i < 15; i++) {
    cucc.push(Math.floor(Math.random() * 50) + 1);
}
console.log(cucc.join(", "));

let nagyobb = 0;
let kisebb = Math.max(...cucc);

for (let i = 0; i < cucc.length; i++) {
    if (cucc[i] > nagyobb) {
        nagyobb = cucc[i];
    }
    
}

for (let i = 0; i < cucc.length; i++) {
if (cucc[i] < kisebb) {
        kisebb = cucc[i];
    }
}

console.log(`legkisebb: ${kisebb}`);
console.log(`legnagyobb: ${nagyobb}`);

let osszeg2 = 0;

for (var item in cucc) {
    osszeg2 += cucc[item];
}
//console.log(`Az elemek összege: ${osszeg2}`);
console.log(`Az elemek átlaga: ${ (osszeg2 / cucc.length).toFixed(2) }`);

//12.feladat

function parosak(t){
    let parosSzamok = [];
    for (let i = 0; i < t.length; i++) {
        if (t[i] % 2 === 0) {
            parosSzamok.push(t[i]);
        }
    }
    return parosSzamok;
}


//let v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let paros = parosak(v);
//console.log(`A páros számok: ${paros.join(", ")}`);

//13.feladat
let vmi = [];

function masodikLegnagyobb(t)
{
    
} 