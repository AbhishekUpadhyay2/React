import React from 'react';
import ReactDOM, {createRoot}  from 'react-dom/client';
import WelcomeComponent from './Components/Header/Welcome';

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


const Applayout=()=><div><WelcomeComponent/></div>
const root=createRoot(document.getElementById("root"));
root.render(<Applayout/>);

