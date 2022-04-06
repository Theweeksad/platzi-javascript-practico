function calculateArithmeticMean (list) {
    //let sumList = 0;

    //for (let i = 0; i < list.length; i++) {
    // sumList = sumList + list[i]
    //}

    const sumList = list.reduce(
        function(accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );

    const averageList = sumList / list.length;

    return averageList;
};

const list1 = [
    100,
    200,
    500,
    400000,
];

const mediumList1 = parseInt(list1.length / 2);

function isFor(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let median;

if(isFor(list1.length)) {
    const element1 = list1[mediumList1 - 1];
    const element2 = list1[mediumList1];

    const averageElement1y2 = calculateArithmeticMean([
        element1,
        element2
    ]);

    median = averageElement1y2;
} else {
    median = list1[mediumList1]
    
}