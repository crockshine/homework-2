const carriedSum = (arg) => {
    const inner = (nextArg, sum = 0) => {
        sum += nextArg ?? 0;

        return (smth) => {
            // если аргумента не было передано
            if (smth === undefined) return sum;

            return inner(smth, sum)
        }
    }

    return inner(arg) // первый аргумент
}
const curriedFn = carriedSum(1)(2)
console.log(curriedFn())
