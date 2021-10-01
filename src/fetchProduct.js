"use strict"

const AWS = require("aws-sdk");

const fetchProduct = async (event) => {
    const db =  new AWS.DynamoDB.DocumentClient();  
    
    const {id} = event.pathParameters;

    let item;

    try {
        const result = await db.get({
            TableName: "Product",
            Key: id,
        }).promise();

    } catch (error) {
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item),
    }
};

module.exports = {
    handler: fetchProduct,
}