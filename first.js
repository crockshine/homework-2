const somethingCb = (a, b, c) => a * b * c

const makeCarry = (cb) => {
    const carried = (...args) => {
        if (args.length >= cb.length) { // база
            return cb(...args)
        } else {
            //нужно создать доп функцию (чтобы добавились еще скобки) ()() и передать туда все что насобирали с
            // предыдущих шагов
            return (...args2) => carried(...args, ...args2)
        }
    }
    return carried
}

const curriedCb = makeCarry(somethingCb)
// в данном примере мы можем карировать callback, написанный выше,
// при этом результат будет верным на разном количестве аргументов в callback-е
console.log(curriedCb(1)(2)(3) )