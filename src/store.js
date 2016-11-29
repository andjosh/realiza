import { createStore } from 'redux';

let ACTIONS = {
	ADD_MESSAGE: ({ messages, ...state }, { message }) => ({
		messages: [...messages, {
			id:       Math.random().toString(36).substring(2),
			text:     message.text,
                        sender:   message.sender
		}],
		...state
	}),

	REMOVE_MESSAGE: ({ messages, ...state }, { message }) => ({
		messages: messages.filter( i => i!==message ),
		...state
	})
};

const INITIAL = {
	messages: []
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());
