

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <div className="w-full flex justify-center">
        <div className="w-96">
          {children}
          </div>
        </div>
      
  );
}
