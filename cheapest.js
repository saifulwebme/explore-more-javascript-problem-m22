const phones = [
    {name: 'Sumsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'ipone', camera: 7, storage: '32gb', price: 82000, color: 'silver'},
    {name: 'Xoami', camera: 17, storage: '32gb', price: 52000, color: 'silver'},
    {name: 'Oppo', camera: 25, storage: '32gb', price: 20000, color: 'black'},
    {name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'goalden'},
    {name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySeclecation = cheapestPhone(phones);
console.log(mySeclecation);