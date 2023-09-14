// console.log(..."anil");
// console.log([...[2, 3, 5, 6]]);

// // const currentDate = new Date();
// // const isoString = currentDate.toISOString();

// // console.log(isoString);

// const currentDate = new Date();

// console.log('currentDate',typeof currentDate);
// // Define the number of years to add
// const yearsToAdd = 2; // You can change this to the number of years you want to add

// // Add the years to the date
// currentDate.setFullYear(currentDate.getFullYear() + yearsToAdd);

// // Convert the updated date to an ISO string
// const updatedISOString = currentDate.toISOString();

// console.log(updatedISOString);




const dbDate = "2023-07-25T18:30:00.000Z";

function addYear (givenDate, yearCount) {
    const currentDate = new Date(givenDate);
    currentDate.setFullYear(currentDate.getFullYear() + yearCount);
    return currentDate.toISOString();
}

function addMonth (givenDate, monthCount) {
    const currentDate = new Date(givenDate);
    currentDate.setMonth(currentDate.getMonth() + monthCount);
    return currentDate.toISOString();
}

function addDay (givenDate, dayCount) {
    const currentDate = new Date(givenDate);
    currentDate.setDate(currentDate.getDate() + dayCount);
    return currentDate.toISOString();
}

console.log(addDay(dbDate,2));
