const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const listarPlanetasDynamoDB = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    
    const result = await dynamodb.scan({
        TableName: 'planetas'
    }).promise();
    const planetas = result.Items;
    return {
        status: 200,
        body: planetas
    };
};

module.exports = {
    listarPlanetasDynamoDB
};