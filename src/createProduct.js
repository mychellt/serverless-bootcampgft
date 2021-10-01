"use strict"

const {v4} = require("uuid");
const AWS = require("aws-sdk");



const createProduct  = async(event) => {
    const {content} = JSON.parse(event.body);
    const createAt = new Date().toISOString();
    const id = v4();

    const db =  new AWS.DynamoDB.DocumentClient();

    const product = {
        id,
        content,
        createAt,
        status: false,
    };
 
    await db.put({
        TableName:"Product",
        Item: product,
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(product),
    };

};


module.exports = {
    handler: createProduct,
}