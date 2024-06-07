const getData = (key) => {
    return new Promise((resolve, reject) => {
        console.log("Getting data...");
        setTimeout(() => {
            if (key === "abc123"){
                const data = "Raw Data";
                resolve(data)
            }else{
                reject("Invalid Key...")
            }
        }, 1000)
    });
}


const processData = (rawData) => {
    return new Promise((resolve, reject) => {
        console.log("Processing Data...");
        setTimeout(() => {
            const processedData = rawData + " is Processed.";
            resolve(processedData)
        }, 1000);
    });
}


const formatdata = (processedData) => {
    return new Promise((resolve, reject) => {
        console.log("Formatting Data...");
        setTimeout(() => {
            const formattedData = processedData + " and formatted."
            resolve(formattedData);
        }, 1000)
    })
}


const displayData = async () => {
    try{
        const data = await getData("abc123");
        const processedData = await processData(data);
        const formattedData = await formatdata(processedData)
        console.log("Displaying..", formattedData)
    }catch(err){
        console.log(err)
    }
}

displayData()