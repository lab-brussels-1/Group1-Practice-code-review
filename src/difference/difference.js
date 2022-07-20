export const difference = (a1 = [], a2 = []) => {
    const arrayDiff1 = a1.filter((x) => !a2.includes(x));
    return arrayDiff1;
};