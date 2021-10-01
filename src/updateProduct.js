"use strict"

const AWS = require("aws-sdk");



const updateProduct  = async(event) => {
    const {status} = JSON.parse(event.body);
    const {id} = event.pathParameters;

    const db =  new AWS.DynamoDB.DocumentClient();

    const product = {
        id,
        content,
        createAt,
        status: false,
    };

    await db.update({
        TableName:"Product",
        Key: id,
        UpdateExpression: 'set status = :status ',
        ExpressionAttributeValues: {
            ":status": status,
        },
        ReturnValues: "ALL_NEW",
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            msg: "Product updated"
        }),
    };

};


module.exports = {
    handler: updateProduct,
}