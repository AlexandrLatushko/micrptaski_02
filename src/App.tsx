import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { NavLink } from "react-router-dom";
// import s from "././components/Site.module.css"
import {S} from "././components/pages/_styles"

const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
    PAGEERROR:'/page/error',
} as const

function App() {
    return (
        <div>
            <S.StyleHeader><h1>HEADER</h1></S.StyleHeader>
            <S.StyleBody>
                <S.StyleNav>
                    <S.NavWrapper> <NavLink  to={PATH.PAGE1}>Page1</NavLink> </S.NavWrapper>
                    <S.NavWrapper> <NavLink  to={PATH.PAGE2}>Page2</NavLink> </S.NavWrapper>
                    <S.NavWrapper> <NavLink  to={PATH.PAGE3}>Page3</NavLink> </S.NavWrapper>                    
                </S.StyleNav>
                <S.StyleContent>
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>} />
                        <Route path={PATH.PAGE2} element={<PageTwo/>} />
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>
                        <Route path={PATH.PAGEERROR} element={<Error404/>}/>
                        <Route path='/*' element={<Navigate to={'/page1'}/>}/>
                    </Routes>
                </S.StyleContent>
            </S.StyleBody>
            <S.StyledFooter>abibas 2023</S.StyledFooter>
        </div>
    );
}

export default App;
