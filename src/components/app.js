import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../util';
import reduce from '../reducers';
import * as actions from '../actions';
import ChatMessage from './chat-message';

@connect(reduce, bindActions(actions))
export default class App extends Component {

        componentDidMount = () => {
            this.props.getInitial();
        };

        componentDidUpdate = () => {
            window.scroll(0, document.body.offsetHeight);
        }

	addMessageText = () => {
		let { text } = this.state;
                if (!text || !text.length) return;
		this.setState({ text: '' });
		this.props.addMessage(text, 'USER');
                setTimeout(this.props.getResponse, Math.random() * 5000, text);
		return false;
	};

	removeMessage = (message) => {
		this.props.removeMessage(message);
	};

        getPrompt = (display) => {
            if (!display) return;
            return (
                <div class="prompt">
                    <p>Eliza is here to talk about your problems with you.</p>
                    <p>It is a simple language program originating in 1966. It will have no memory of your conversations, but you are encouraged to treat it like a human being.</p>
                    <p>Hopefully, you are able to gain some personal insight.</p>
                    <p>
                        <a href="https://github.com/andjosh/realiza#realiza"
                        target="_blank">
                            Read more
                        </a>
                    </p>
                </div>
            );
        }

	render({ messages }, { text }) {
		return (
			<div id="app">
                                <div class="messages">
                                    { messages.map(message => (
                                            <ChatMessage key={message.id}
                                                message={message}
                                            />
                                    )) }
                                </div>
                                { this.getPrompt(messages.length < 3) }
                                <form onSubmit={this.addMessageText}
                                    action="javascript:">
					<input value={text}
                                            onInput={this.linkState('text')}
                                            placeholder="message Eliza..."
                                        />
				</form>
			</div>
		);
	}
}
