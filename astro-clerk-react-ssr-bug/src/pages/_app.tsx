import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

export function App() {
  return (
    <ClerkProvider publishableKey="pk_test_aHVtYW5lLW1hbGFtdXRlLTUzLmNsZXJrLmFjY291bnRzLmRldiQ">
      <SignedIn>hello world</SignedIn>
      <SignedOut>signed out</SignedOut>
    </ClerkProvider>
  );
}
