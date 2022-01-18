const { graphql,  buildSchema } = require('graphql')

const db = {
    users: [
        {id: '1', email: 'Poom@gmail.com', name: "Poom"},
        {id: '2', email: 'Someone@gmail.com', name: "Someone"},
    ]
}

const schema = buildSchema(`
    type Query {
        users: [User!]!
    }

    type User {
        id: ID!
        email: String!
        name: String
        avatarUrl: String
    }
`)

const rootValue = {
    users: () => db.users
}

graphql(
    {
        schema,
        source: `
            {
                users {
                    id
                    email
                }
            }
        `,
        rootValue
    }
).then((res) => {
    console.dir(res, {depth: null})
}).catch(
    console.error
)