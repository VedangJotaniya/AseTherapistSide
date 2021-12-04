import React from "react";
import UserDp from "./dist/img/user2-160x160.jpg";
import "./css/App.css"

function DisplayUser(props) {
    const UserImage = props.UserImage;
    const UserName = props.UserName;


    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src={UserImage} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <button className="d-block btn btn-link" onClick="">{UserName}</button>
            </div>
        </div>
    );
}


function SentMessage(props) {
    const Receiver = props.Receiver;
    const DateTime = props.DateTime;
    const Text = props.Text;
    const ReceiverDp = props.ReceiverDp;

    return (
        <div className="direct-chat-msg right">
            <div className="direct-chat-infos clearfix">
                <span className="direct-chat-name float-right">{Receiver}</span>
                <span className="direct-chat-timestamp float-left">{DateTime}</span>
            </div>
            {/* <!-- /.direct-chat-infos --> */}
            <img className="direct-chat-img" src={ReceiverDp} alt="message user image" />
            {/* <!-- /.direct-chat-img --> */}
            <div className="direct-chat-text">
                {Text}
            </div>
            {/* <!-- /.direct-chat-text --> */}
        </div >
    );

}


function ReceiveMessage(props) {

    const Sender = props.Sender;
    const DateTime = props.DateTime;
    const Text = props.Text;
    const SenderDp = props.SenderDp;

    return (
        <div className="direct-chat-msg">
            <div className="direct-chat-infos clearfix">
                <span className="direct-chat-name float-left">{Sender}</span>
                <span className="direct-chat-timestamp float-right">{DateTime}</span>
            </div>
            <img className="direct-chat-img" src={SenderDp} alt="message user image" />
            <div className="direct-chat-text">
                {Text}
            </div>
        </div>

    );


}





export default class Chat extends React.Component {

    constructor() {
        super();
        this.state = {
            clients: [],
            currentClient: "F1",
            Messages: []
        }
        this.updateMessages = this.updateMessages.bind(this);

    }

    componentDidMount() {
        const myClients = [
            {
                name: "A",
                imageUrl: "https://picsum.photos/id/237/200/300"
            },
            {
                name: "A",
                imageUrl: "https://picsum.photos/id/237/200/300"
            }
        ];

        this.updateMessages();

        this.setState({
            clients: myClients
        })
    }

    updateMessages() {
        const myMessages = [
            {
                To: "t1",
                From: "F1",
                DateTime: "Jan 03 2:00pm",
                read: "False",
                Text: "This is a sample Text",
                UserDp: "https://picsum.photos/id/237/200/300"
            },
            {
                To: "F1",
                From: "t1",
                DateTime: "Jan 03 2:00pm",
                read: "False",
                Text: "This is a sample Text",
                UserDp: "https://picsum.photos/id/237/200/300"
            },
            {
                To: "t1",
                From: "F1",
                DateTime: "Jan 03 2:00pm",
                read: "False",
                Text: "This is a sample Text",
                UserDp: "https://picsum.photos/id/237/200/300"
            }

        ];
        console.log("Called update Messages");
        this.setState({
            Messages: myMessages
        });
    }


    render() {

        const chatUsers = this.state.clients.map((client) => {

            return <DisplayUser UserName={client.name} UserImage={client.imageUrl} />
        });

        const chatMessages = this.state.Messages.map((Message) => {
            console.log("Meassage");
            console.log(Message.To);
            console.log(this.state.currentClient);
            if (Message.To == this.state.currentClient) {
                return <SentMessage Receiver={Message.To} DateTime={Message.DateTime} Text={Message.Text} ReceiverDp={Message.UserDp} />
            }

            return <ReceiveMessage Sender={Message.To} DateTime={Message.DateTime} Text={Message.Text} SenderDp={Message.UserDp} />
        });

        console.log("message");
        console.log(chatMessages);

        return (
            <section className="content ">
                <div className="container-fluid">
                    <div className="row " >
                        <div className="col-2">
                            <aside className="main-sidebar sidebar-light-primary elevation-1">
                                <div className="sidebar">
                                    {chatUsers}
                                </div>
                            </aside>
                        </div>
                        <div className="col ">
                            <div className="card direct direct-chat-primary ">
                                <div className="card-body">
                                    <div className="direct-chat-messages border border-primary set-row">
                                        {chatMessages}
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



