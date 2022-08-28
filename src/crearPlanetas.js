const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const crearPlanetas = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient()

    const { 
        nombre ,
        periodo_rotacion,
        periodo_orbital,
        diametro,
        clima,
        gravedad,
        terreno,
        superficie_agua,
        poblacion,
        residentes,
        peliculas,
        creado,
        editado,
        url } = JSON.parse(event.body);
    const id = v4();

    const newPlaneta = {
        id,
        nombre ,
        periodo_rotacion,
        periodo_orbital,
        diametro,
        clima,
        gravedad,
        terreno,
        superficie_agua,
        poblacion,
        residentes,
        peliculas,
        creado,
        editado,
        url
    };
    console.log(newPlaneta)
    await dynamodb.put({
        TableName: 'planetas',
        Item: newPlaneta
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(newPlaneta)
    };
};

module.exports = {
    crearPlanetas
};