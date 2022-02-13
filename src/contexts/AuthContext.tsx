import { useRouter } from "next/router";
import { ReactNode, useState, createContext, useContext } from "react";
import { auth, firebase } from "../services/firebase";
import { setCookie, parseCookies, destroyCookie } from "nookies";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AutContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  removeUser: () => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AutContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (!user && result.user) {
      const { displayName, photoURL, uid } = result.user;

      const userInfo: User = {
        avatar: photoURL,
        id: uid,
        name: displayName,
      };

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setCookie(null, "userInfo", JSON.stringify(userInfo), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setUser(userInfo);

      router.push("/home");
    } else {
      const { userInfo } = parseCookies();
      const user = JSON.parse(userInfo);
      console.log(user);
    }
  }

  function removeUser() {
    destroyCookie(null, "userInfo");
    setUser(undefined);
    router.push("/");
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, removeUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
