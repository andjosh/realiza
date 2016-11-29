import { h, Component } from 'preact';

export default class ChatMessage extends Component {
	shouldComponentUpdate({ message }) {
		return message !== this.props.message;
	}

	render({ message }) {
		return (
			<div class={message.sender}>
				<span class="inner">
                                    { '' + message.text }
                                </span>
			</div>
		);
	}
}
