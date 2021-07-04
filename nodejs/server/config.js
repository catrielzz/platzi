const config = {
    dbUrl: process.env.DB_URL || 'database',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost:',
    publicRoute: process.env.PUBLIC_ROUTE || 'app'
}

export default config;