// components/RequireAuth.js
"use client";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const RequireAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
      if (status === "authenticated") {
        // User is logged in, allow access to the route
        return;
      } else if (status === "loading") {
        // Session is being fetched, do nothing
        return;
      } else {
        // User is not logged in, redirect to login page
        router.replace("/"); // Redirect to the login page
      }
    }, [status, router]);

    // Render the wrapped component if user is logged in
    return status === "authenticated" ? <WrappedComponent {...props} /> : null;
  };

  return AuthComponent;
};

export default RequireAuth;
