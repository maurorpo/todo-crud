import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from '../../ContextUser' //Importo estado de atentificacion
 
const LinkNav = ({ path, nameLink, isPrivate }) => {
 
    return (
        <NavLink
          to={path}
        >
          {nameLink}
        </NavLink>
    )
}
 
export default LinkNav