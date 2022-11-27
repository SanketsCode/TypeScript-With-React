import * as React from 'react';
import { Child,ChildAsFC } from './Child';

// const Parent = () => {
//     return <Child color="red" onClick={() => console.log("Clicked")} />
// }

const Parent = () => {
 return <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
    Test
 </ChildAsFC>
}

export default Parent;