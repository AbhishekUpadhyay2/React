import React from 'react';
import ReactDOM, {createRoot}  from 'react-dom/client';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

/** Food Ordering App
 * Header
 *   -- logo
 *   -- NavItems
 * Body
 *   --Search
 *   --Card Container
 *   --Card
 * Footer
 *  --Copyright
 *  --Adress
 *  --links
 */

const WelcomeComponent=()=>(
    <div className='app'>
        <Header/>
        <Body/>
    </div>
)
const Applayout=()=><div><WelcomeComponent/></div>
const root=createRoot(document.getElementById("root"));
root.render(<Applayout/>);

