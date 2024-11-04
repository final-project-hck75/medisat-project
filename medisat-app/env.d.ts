declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV: "development" | "production";
      MONGO_URL: string;
      JWT_SECMEDI: string;
      MEDISAT_EMAIL:string
      MEDISAT_PASSWORD:string
      API_KEY: string;
    }
  }
}

export {};
