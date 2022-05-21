export const upperFirstLetter = (str) => 
(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())

export const upperCamelCase = (str) => {
    const arr = str.split(' ');
    const newArr = arr.map( elem => upperFirsLetter(elem) );
    return newArr.join(' ')
}
