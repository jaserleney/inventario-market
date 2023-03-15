//swagger config
export const options = {
    definition: {
        openapi:'3.0.0',
        info: {
            title: 'inventory-restapi',
            version: '1.0.0',
            description: 'Simple REST API'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: ['./src/routes/*.js']
}