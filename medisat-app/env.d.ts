declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV: "development" | "production";
      MONGO_URL: string;
      JWT_SECMEDI: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      NEXT_PUBLIC_BASE_URL: string;
      NEXTAUTH_URL: string;
    }
  }
}

export {};
