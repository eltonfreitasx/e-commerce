import { User, useAuth0 } from "@auth0/auth0-react";
import { CiUser } from "react-icons/ci";
import { ProfileInfo } from "./styles";

export function Profile() {
    const { isAuthenticated, isLoading } = useAuth0();
    const { user } = useAuth0<User>()

    if (isLoading) {
        return <ProfileInfo>
            <div className="icon">
                <CiUser />
            </div>
            <div className="info">
                <p>Please Login</p>
            </div>
        </ProfileInfo>
    }

    return (
        isAuthenticated && (
            <ProfileInfo>
                <div className="icon">
                    {/* <CiUser /> */}
                     <img src={user?.picture} alt={user?.name} /> 
                </div>
                <div className="info">
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                </div>
            </ProfileInfo>
        )
    );
} 
