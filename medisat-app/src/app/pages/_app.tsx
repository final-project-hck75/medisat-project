// // src/app/_app.tsx
// import { SessionProvider, getSession } from "next-auth/react";
// import type { AppProps } from "next/app";

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }

// MyApp.getInitialProps = async ({ ctx: any }) => {
//   const session = await getSession(ctx);
//   return {
//     pageProps: {
//       session,
//     },
//   };
// };