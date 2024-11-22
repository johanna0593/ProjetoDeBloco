import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "../views/home";
import Perfil from "../views/perfil";
import Explorar from "../views/explorar";
import Configuracoes from "../views/configuracoes";


const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/">         
         <Route index element={<Home />}/>
         <Route path="perfil" element={<Perfil />}/>         
         <Route path="explorar" element={<Explorar />}/>
         <Route path="configuracoes" element={<Configuracoes />}/>
      </Route>
   )
);


const Index =() => {
   return (
      <RouterProvider router={router} />
   )
};

export default Index;