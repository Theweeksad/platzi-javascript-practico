//helpers
function isEven (number) {
    return (number % 2 === 0);
}
function calculateArithmeticMean (list) {
    const sumList = list.reduce(
        function(accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    const averageList = sumList / list.length;
    return averageList;
};

//median
function medianSalaries(list) {
    const medium = parseInt( list.length / 2);

    if (isEven(list.length)) {
        const personMedium1 = list [medium - 1];
        const personMedium2 = list [medium];

        const median = calculateArithmeticMean([personMedium1, personMedium2]);
        return median;
    } else {
        const personMedium = list [medium];
        return personMedium;
    }
}


//Mediana General
const salarieCol = colombia.map(
    function (person) {
        return person.salary;
    }
);

const salariesColSorted = salarieCol.sort(
    function (salryA, salryB) {
        return salryA - salryB;
    }
);

const medianGeneralCol = medianSalaries(salariesColSorted);

//mediana top 10% colombia


const spliceStart = (salariesColSorted.length * 90) / 100;
const spliceCount = salariesColSorted - spliceStart;

const salariesColTop10 =salariesColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianTop10Col = medianSalaries(salariesColTop10);

console.log({
    medianGeneralCol,
    medianTop10Col,
});