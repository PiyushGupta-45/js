const  myobj = {
    'js': 'javascript',
    'cpp': 'c++',
    'rb': 'ruby',
    'swift': 'swift'
}
for (const key in myobj) {
    // console.log(`${key} shortcut for ${myobj[key]}`)
}

const program = [1,2,3,4,5,6]
for (const key in program) {
    console.log(key)
}