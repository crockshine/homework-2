const createObject = (str) => {
    const objects = str.split('.')

    const wrapper = () => { // враппер нужен для пересоздания i
        let i = 0;

        const inner = (obj = {}) => {
            if (i === objects.length) { // база
                return obj
            } else {
                const parent = objects[objects.length - 1 - i] // оборачиваем в 'parent': {} что уже насобирали
                i++;
                return inner({
                    [parent]: obj,
                })
            }
        }

        return inner()
    }

    return wrapper
}

const creator = createObject('s1.s2.s3.s4.s5')
console.log(creator())
