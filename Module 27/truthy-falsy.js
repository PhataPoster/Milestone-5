const justify = {
    data: 0,
    data2: "",
    data3: false,
    data4: null,
    data5: undefined,
    data6: "Ashikur Rahman",
    data7: 42,
    data8: true,
    data9: [],
    data10: {}
}

for (const key in justify) {
    const data = justify[key];
    if (data) {
        console.log("This is a truthy value");
    }
    else {
        console.log("This is a falsy value");
    }
}

