import { Children, createContext,useCallback,useContext,useEffect,useState } from "react";
import { auth ,db  } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import {setDoc ,   doc} from  'firebase/firestore'
const AuthContext =createContext ()

export function AuthContextProvider ({children}){
    const [user ,setUser] = useState({})

    function acount(email ,password){
       createUserWithEmailAndPassword(auth , email , password)
       setDoc(doc(db,'user',email),{
         sawedShows:[]
         
       })

    }
     
    function logIn(email , password){
        return signInWithEmailAndPassword(auth , email , password)

    }
    
    function logOut(){
        return signOut(auth)
    }
useEffect (()=>{
    const unsubscribe = onAuthStateChanged(auth , (currentUser) =>{
        setUser(currentUser);
    });
    return () => {
        unsubscribe();
    }
})

return (
    <AuthContext.Provider value={{acount , logIn , logOut , user}}>
        {children}
    </AuthContext.Provider>
)

}
export function UserAuth(){
    return useContext(AuthContext)

}