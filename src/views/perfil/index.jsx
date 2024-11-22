import Header from "../../components/header";
import UserProfile from "../../components/userProfile";
import "./index.css";

export default function Perfil() {
  return (
    <div className="app-container">        
      <div className="nav">
        <Header />
      </div>
      <div className="main-content">
        <div className="container">            
          <UserProfile />
        </div>
        <div className="feed-container">
          <div className="titulo" >Perfil</div>        
        </div>
      </div>            
    </div>
  )
}