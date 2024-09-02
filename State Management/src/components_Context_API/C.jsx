import React, { useContext } from 'react'
// import { Greet2Context, Greet2Context } from './A';
// import { GreetContext, Greet2Context } from './A';
// Or
import { GreetContext } from './A';


export default function C() {
  // console.log(props);

  const useCon = useContext(GreetContext)
  console.log(useCon);

  // const useCon = useContext(GreetContext)
  // const useCon2 = useContext(Greet2Context)
  return (
  //   <h1>Greet: {useCon} {useCon2}</h1>
    // OR
      <h1>Greet: {useContext.greet} {useContext.greet2}</h1>

    // <GreetContext.Consumer>
    // {
    //     (val) => {
    //         // return <h1>Greet: {val}</h1>
    //         // multiple return
    //         return (
    //           <Greet2Context>
    //             {
    //               (val2) => {
    //                 return <h1>Greet: {val} {val2}</h1>
    //               }
    //             }
    //           </Greet2Context>
    //         )
    //     }
    // }

    // </GreetContext.Consumer>

    // <div>
    //     {/* {props.greet} */}

    // </div>
  );
}


{/* <GreetContext.Consumer>
    {
        (val) => {
            // return <h1>Greet: {val}</h1>
            // multiple return
            return (
              <Greet2Context>
                {
                  (val2) => {
                    return <h1>Greet: {val} {val2}</h1>
                  }
                }
              </Greet2Context>
            )
        }
    }
    </GreetContext.Consumer> */}