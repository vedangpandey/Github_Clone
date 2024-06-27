import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext= createContext()


export const useAuthContext = ()=>{
    return useContext(AuthContext)
}
export const AuthContextProvider =({children})=>{
    const [authUser,setAuthUser]=useState(null);

    useEffect(()=>{
        const checkUserLoggedIn = async ()=>{
            try {
                const res=await fetch("/api/auth/check",{credentials:"include"})
                const data=await res.json()
                setAuthUser(data.user)
            } catch (error) {
                toast.error(error.message)
            }
        }
        checkUserLoggedIn()
    },[])

    return (
        <AuthContext.Provider value={{authUser,setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}