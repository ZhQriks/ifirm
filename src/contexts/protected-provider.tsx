import { useAuth } from '@clerk/clerk-expo';
import { useRootNavigationState, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';

function useProtectedRoute() {
  const segments = useSegments();
  const router = useRouter();
  const { userId } = useAuth();
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    if (rootNavigationState?.key) {
      const inAuthGroup = segments[0] === '(auth)';

      if (
        // If the user is not signed in and the initial segment is not anything in the auth group.
        !userId &&
        !inAuthGroup
      ) {
        // Redirect to the sign-in page.
        router.replace('/login');
      } else if (userId && inAuthGroup) {
        // Redirect away from the sign-in page.
        router.replace('/home');
      }
    }
  }, [userId, segments]);
}

export function AuthProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  useProtectedRoute();

  return <>{children}</>;
}
