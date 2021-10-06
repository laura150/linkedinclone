import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoutes = ({isAuth: isAuth, firstcomponent:FirstComponent, component:Component, ...rest}) => {
    return (
            <Route {...rest} 
            render={(props)=>{
                if(isAuth){
                    return <div>
                        <FirstComponent/>
                        <Component/>
                        </div>
                }else{
                    return <Redirect to={{pathname:'/', state:{from: props.location}}}/>
                }
            }}/>
    )
}

export default ProtectedRoutes
