const titleCaps = arr => {
    const titleCased = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    console.log(titleCased);
};
titleCaps(['hello world', 'javascript is fun']);
