import React from "react";
import UserDp from "./dist/img/user2-160x160.jpg";


function DisplayUser(props) {
    const UserImage = props.UserImage;
    const UserName = props.UserName;


    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src={UserDp} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
            </div>
        </div>
    );
}


function SentMessage(props) {


    return (
        <div className="direct-chat-msg right">
            <div className="direct-chat-infos clearfix">
                <span className="direct-chat-name float-right">Sarah Bullock</span>
                <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
            </div>
            {/* <!-- /.direct-chat-infos --> */}
            <img className="direct-chat-img" src={UserDp} alt="message user image" />
            {/* <!-- /.direct-chat-img --> */}
            <div className="direct-chat-text">
                I would love to.
            </div>
            {/* <!-- /.direct-chat-text --> */}
        </div >
    );

}


function ReceiveMessage(props) {


    return (
        <div className="direct-chat-msg">
            <div className="direct-chat-infos clearfix">
                <span className="direct-chat-name float-right">Sarah Bullock</span>
                <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
            </div>
            <img className="direct-chat-img" src={UserDp} alt="message user image" />
            <div className="direct-chat-text">
                You better believe it!
            </div>
        </div>

    );


}





export default class Chat extends React.Component {




    render() {

        const users = [1, 2, 3, 4, 5];
        const chatUsers = users.map((i) => (<DisplayUser UserName="Alexander Pierce" UserImage={UserDp} />));
        return (
            <section className="content ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <div className="main-sidebar sidebar-light-primary elevation-1">
                                <div className="sidebar">
                                    {chatUsers}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card direct direct-chat-primary">
                                <div className="card-body">
                                    <div className="direct-chat-messages">
                                        <SentMessage />
                                        <ReceiveMessage />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <form action="#" method="post">
                                        <div className="input-group">
                                            <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-primary">Send</button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



