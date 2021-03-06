import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, auth, ...rest}) => (
		<Route
				{...rest}
				render={props =>
						(localStorage.getItem('openSkyUser') === 'demo' && localStorage.getItem('openSkyPassword') === 'demo') ? (
								<Component {...props}/>
						) : (
								<Redirect to="/login"/>
						)}
		/>
);

export default PrivateRoute;