const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Property {
    id: String!
    tag: String!
    title: String!
    desc: String!
    price: String!
    location: String!
    availability: String!
    deposit: String!
    commission: String!
    factor: String!
    img: [String!]
}

input PropertyInput {
    id: Int!
    tag: String!
    title: String!
    desc: String!
    price: String!
    location: String!
    availability: String!
    deposit: String!
    commission: String!
    factor: String!
    img: String!
}

type RootQuery {
    properties(filter: String): [Property!]!
}

type RootMutation {
    createProperty(propertyInput: PropertyInput): Property
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);