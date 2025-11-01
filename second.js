const createObject = (str) => {
    const objects = str.split('.')

    return function inner(obj = {}){
        if (objects.length === 0){ // база
            return obj
        } else {
            const parent = objects.pop() // оборачиваем в 'parent': {} что уже насобирали
            return inner({
                [parent]: obj,
            })
        }
    }
}

const creator = createObject('s1.s2.s3.s4.s5')
console.log(creator())
