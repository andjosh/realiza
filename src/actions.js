import Elizabot from './elizabot/elizabot';

let eliza = new Elizabot();

export function addMessage(text, sender) {
	return {
		type: 'ADD_MESSAGE',
                message: { text, sender }
	};
}

export function getResponse(text) {
	return {
		type: 'ADD_MESSAGE',
                message: {
                    text: eliza.transform(text),
                    sender: 'BOT'
                }
	};
}

export function getInitial() {
	return {
		type: 'ADD_MESSAGE',
                message: {
                    text: eliza.getInitial(),
                    sender: 'BOT'
                }
	};
}

export function removeMessage(message) {
	return {
		type: 'REMOVE_MESSAGE',
		message
	};
}
