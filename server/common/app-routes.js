/**
 * 基于react-routerd的路由
 */
import React from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';

class Detail extends React.Component{

    static fetchData(){
        return {
            a:100
        }
    }

    render(){
        return <div>detail</div>
    }
}

class Index extends React.Component {

    render() {
        return <div>index</div>
    }
}



const Root = ({ route }) => (
    <div>
        <h1>Root</h1>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
    </div>
);

const Home = ({ route }) => (
    <div>
        <h2>Home</h2>
    </div>
);

const Child = ({ route }) => (
    <div>
        <h2>Child</h2>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
    </div>
);

const GrandChild = ({ someProp }) => (
    <div>
        <h3>Grand Child</h3>
        <div>{someProp}</div>
    </div>
);

const routes = [
    {
        component: Root,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home
            },
            {
                path: "/child/:id",
                component: Child,
                routes: [
                    {
                        path: "/child/:id/grand-child",
                        component: GrandChild
                    }
                ]
            },
            {
                path:'/detail',
                component:Detail
            }
        ]
    }
];

export default routes;
