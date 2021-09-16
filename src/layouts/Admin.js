import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import routes from "../routes";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  // getBrandText = path => {
  //   console.log('brandtext' , routes)
  //   for (let i = 0; i < routes.length; i++) {
  //     if (
  //       this.props.location.pathname.indexOf(
  //         routes[i].layout + routes[i].path
  //       ) !== -1
  //     ) {
  //       return routes[i].name;
  //     }
  //   }
  //   return "Brand";
  // };
 
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      console.log("Admin", routes);
      if (prop.layout == "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={routes}  />
        <div id="main-panel" className="main-panel" >
          <AdminNavbar 
          {...this.props}
          // brandText={this.getBrandText(this.props.location.pathname)}
          
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Admin;
