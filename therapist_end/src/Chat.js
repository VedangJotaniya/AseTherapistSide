import React from "react";
import UserDp from "./dist/img/user2-160x160.jpg";
import "./css/App.css"
import axios from "axios"


function DisplayUser(props) {
    const UserImage = props.UserImage;
    const UserName = props.UserName;


    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src={UserImage} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <button className="d-block btn btn-link" onClick={() => { props.handleCurrentClient({ UserName }) }}>{UserName}</button>
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

    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            currentClient: "Jayesh",
            Messages: [],
            user: ""
        }
        this.updateMessages = this.updateMessages.bind(this);
        this.handleCurrentClient = this.handleCurrentClient.bind(this);
        this.sendMessage = this.sendMessage.bind(this);


    }

    componentDidMount() {
        var u = this.props.thisUserName.split(" ")[0];
        alert("name is " + u);
        this.setState({
            user: u
        })
        const myClients = [
            {
                name: "Jayesh",
                imageUrl: "https://picsum.photos/id/237/200/300"
            },
            {
                name: "Mayank",
                imageUrl: "https://picsum.photos/id/237/200/300"
            }
        ];


        this.setState({
            clients: myClients
        })
        this.updateMessages();

    }


    updateMessages() {
        var mm;
        console.log("data");
        console.log(this.state.currentClient);
        console.log(this.state.user);
        const fetchMessages = axios.get("http://localhost:3001/chat/getChats", { to: this.state.currentClient, from: "Vedang" })
            .then(
                res => {
                    alert(res.status);
                    console.log(res.data);
                    mm = res.data;
                }
            )
        const myMessages = [
            {
                To: "Jayesh",
                From: "Vedang",
                DateTime: "Jan 03 2:00pm",
                read: "False",
                Text: "This is a sample Text",
                UserDp: "https://picsum.photos/id/237/200/300"
            },
            {
                To: "Jayesh",
                From: "Vedang",
                DateTime: "Jan 03 2:00pm",
                read: "False",
                Text: "This is a sample Text",
                UserDp: "https://picsum.photos/id/237/200/300"
            },
            {
                To: "Vedang",
                From: "Jayesh",
                DateTime: "Jan 03 2:00pm",
                read: "False",
                Text: "This is a sample Text",
                UserDp: "https://picsum.photos/id/237/200/300"
            }

        ];
        this.setState({
            Messages: mm
        });
    }

    handleCurrentClient(props) {
        this.setState({
            currentClient: props.UserName
        });
        this.updateMessages();
    }

    sendMessage() {

    }
    render() {

        const chatUsers = this.state.clients.map((client) => {

            return <DisplayUser key={client.name} UserName={client.name} UserImage={client.imageUrl} handleCurrentClient={this.handleCurrentClient} />
        });

        const chatMessages = this.state.Messages.map((Message) => {
            if (Message.To == this.state.currentClient) {
                return <SentMessage Receiver={Message.To} DateTime={Message.DateTime} Text={Message.Text} ReceiverDp={Message.UserDp} />
            }

            return <ReceiveMessage Sender={Message.To} DateTime={Message.DateTime} Text={Message.Text} SenderDp={Message.UserDp} />
        });


        return (
            <div className="wrapper">
                <div className="main-sidebar sidebar-light-primary elevation-4">
                    <div className="sidebar">
                        {chatUsers}
                    </div>
                </div>
                <div className="content-wrapper">
                    <section className="content ">
                        <div className="container-fluid">
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
                    </section>
                </div>
            </div>
        );
    }
}



