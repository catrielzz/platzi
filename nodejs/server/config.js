const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://UserName:Password@cluster0.dbfc0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost:',
    publicRoute: process.env.PUBLIC_ROUTE || 'app'
}

export default config;