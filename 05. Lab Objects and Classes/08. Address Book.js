function storeInfo(arr){
    const phoneObj = arr.reduce((acc, curr) => {
        let [name, phone] = curr.split(':');
        acc[name] = phone;
        return acc;
    }, {});
    Object.entries(phoneObj).sort().forEach(function ([key, value]) {
        console.log(`${key} -> ${value}`)
    })
}
