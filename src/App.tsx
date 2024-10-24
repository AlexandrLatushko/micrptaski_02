import {  Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// import s from "././components/Site.module.css"
import {S} from "././components/pages/_styles"

export const PATH = {
  PAGE1: "/Adidas",
  PAGE2: "/Puma",
  PAGE3: "/Abibas",
  PAGE4: "/Prices",

  PAGEMODAL: "/:model/:id",
  PAGEERROR: "/page/error",
} as const;

function App() {
    return (
      <div>
        
        <S.StyleHeader>
          <h1>HEADER</h1>
        </S.StyleHeader>

        <S.StyleBody>

          <S.StyleNav>
            <S.NavWrapper><NavLink to={PATH.PAGE1}>ADIDAS</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PAGE2}>PUMA</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PAGE3}>ABIBAS</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PAGE4}>Ceny OPT</NavLink></S.NavWrapper>

          </S.StyleNav>

          <S.StyleContent>
            <Outlet/>
            {/* <Routes>
              <Route path="/" element={<Navigate to={PATH.PAGE1} />} />
              <Route path={PATH.PAGE1} element={<Adidas />} />
              <Route path={PATH.PAGE2} element={<Puma />} />
              <Route path={PATH.PAGE3} element={<Abibas />} />
              <Route path={PATH.PAGE4} element={<Prices />} />
              <Route path={PATH.PAGEMODAL} element={<Model />} />
              <Route path="/*" element={<Error404 />}/>
            </Routes> */}
          </S.StyleContent>

        </S.StyleBody>
        <S.StyledFooter>abibas 2023</S.StyledFooter>
      </div>
    );
}

export default App;
