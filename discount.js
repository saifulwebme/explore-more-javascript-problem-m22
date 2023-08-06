/**
1. if ticket number is less than taka 100, per ticket price: 100
2. if ticket number is more than 100, but less than 200, First 100 ticket will be 100/ ticket.rest ticket will be 90 taka per pice.

 first 100 -----> 100 taka;
 seat -----> 90taka
3. if you purshes more than 200 ticket

first 100 -----> 100taka
101-200 -------> 90 taka
200+ ----------> 70taka
 */

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100price = 100 *second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100price + restTicketPrice;
        return totalCost;
    }

}

const price = ticketPrice(220);
console.log('price:', price);