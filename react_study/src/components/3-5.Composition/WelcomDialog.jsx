import React from 'react'
import CustomDialog from './CustomDialog'
//import Dialog from './Dialog'

export default function WelcomDialog() {
//   return (
//     <Dialog>
//         <h1>Welcome</h1>
//         <h5>Thank you!</h5>
//     </Dialog>
//   )
    return(
        <CustomDialog title={<button>Welcome</button>} description="Thanks"/>
    );
}
