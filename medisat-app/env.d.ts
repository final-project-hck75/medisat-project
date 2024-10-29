declare global{
    namespace NodeJS{
        interface ProcessEnv{
            PORT?:string
            NODE_ENV:"development"| "production"
            MONGO_URL:string
            JWT_SECMEDI:string
        }
    }
}

export {}