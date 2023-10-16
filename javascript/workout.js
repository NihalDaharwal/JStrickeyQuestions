// const tempObj = {
//     18: 'user is major',
//     0: '0 age is not allowed'
// };

// const getMessage = (givenAge) => {
//     if (givenAge === 18) {
//         return 'user is major';
//     } else if (givenAge < 18) {
//         return 'user is minor';
//     } else if (givenAge === 0) {
//         return '0 age is not allowed';
//     } else {
//         return 'invalid age';
//     }
// };

// const userAge = 'usergae';
// const result = getMessage(userAge);
// console.log(result)

const tempFeatureFlag = true; // businessPartner: 'SBIC'

const tempObj = {
  id: "01",
  name: "test-user",
  ...tempFeatureFlag && { businessPartner: "SBIC" },
};

if (tempFeatureFlag==true) {
  Object.assign(tempObj, { businessPartner: "SBIC" });
}

if (tempFeatureFlag) {
    tempObj.businessPartner ="SBIC";
}

console.log(tempObj);
