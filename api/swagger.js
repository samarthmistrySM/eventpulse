import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        title: 'Event Pulse',
        description: 'Soon..',
    },
    host: 'localhost:4000/api',
    schemes: ['http'],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            description:
                'Enter your bearer token in the format **Bearer &lt;token&gt;**',
        },
    },
}

const outputFile = './swagger-output.json'
const routes = ['./src/routes/index.js']

swaggerAutogen()(outputFile, routes, doc)
