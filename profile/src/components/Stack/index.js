import React from 'react';
import './style.css'

function Stack() {




    return (
        <>
        <div className="con1">
            <div className="SC">
                <div className="SC-H saira fS2 fc3">
                    Front-End
                </div>
                <div className="SC-B">
                    <img className="SC-I" alt="html5" src={require("./img/html5.png")}/>
                    <img className="SC-I" alt="css3" src={require("./img/css3.png")} />
                    <img className="SC-I" alt="javascript" src={require("./img/javascript.png")} />
                    <img className="SC-I" alt="jquery" src={require("./img/jquery.png")} />
                    <img className="SC-I2" alt="bootstrap" src={require("./img/bootstrap.png")} />
                    <img className="SC-I3" alt="tailwind" src={require("./img/tailwind.png")} />

                </div>
            </div>

            <div className="SC">
                <div className="SC-H saira fS2 fc3">
                    Back-End
                </div>
                <div className="SC-B2">
                    <img className="SC-I5" alt="nodejs" src={require("./img/node.png")} />
                    <img className="SC-I4" alt="handlebars" src={require("./img/handlebars.png")} />
                    <img className="SC-I5" alt="react" src={require("./img/react.png")} />
                    {/* <img className="SC-I5" alt="" src="./img/angular.png" /> */}
                </div>
            </div>

            <div className="SC">
                <div className="SC-H saira fS2 fc3">
                    Database
                </div>
                <div className="SC-B1">
                    <img className="SC-I" alt="mysql" src={require("./img/mysql.png")} />
                    <img className="SC-I5" alt="microsoft sql" src={require("./img/microsql.png")} />
                    <img className="SC-I5" alt="mongodb" src={require("./img/mongodb.png")} />
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default Stack;