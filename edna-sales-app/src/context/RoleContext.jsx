import { createContext, useContext, useState } from 'react'

const RoleContext = createContext(null)

export function RoleProvider({ children }) {
  const [role, setRole] = useState(() => localStorage.getItem('edna_role') || null)

  const selectRole = (r) => {
    localStorage.setItem('edna_role', r)
    setRole(r)
  }

  const clearRole = () => {
    localStorage.removeItem('edna_role')
    setRole(null)
  }

  return (
    <RoleContext.Provider value={{ role, selectRole, clearRole }}>
      {children}
    </RoleContext.Provider>
  )
}

export const useRole = () => useContext(RoleContext)
