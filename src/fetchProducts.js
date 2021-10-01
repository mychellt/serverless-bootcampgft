"use strict"

const AWS = require("aws-sdk");

const fetchProducts = async (event) => {
    const db =  new AWS.DynamoDB.DocumentClient();  
    let items;
    try {
        const results =  await db.scan({
            TableName: "Product"
        }).promise();

        items = results.Items;

    } catch (error) {
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items),
    }
};

module.exports = {
    handler: fetchProducts,
}