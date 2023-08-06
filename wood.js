/**
 fixed: per items wood requerement
 1. chair ---> 3cft
 2. table ---> 10cft
 3. bed ---> 50cft

vary: queantity
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const pertableWood = 10;
    const perbedQuantity = 50;

    const chairWood = chairQuantity * perChairWood ;
    const tableWood = tableQuantity * pertableWood;
    const bedWood = bedQuantity * perbedQuantity;
    // console.log(chairQuantity, tableQuantity, bedQuantity);
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(1, 1, 1);
console.log('total wood', totalWood);
