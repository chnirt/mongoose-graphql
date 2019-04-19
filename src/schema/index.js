import { gql } from 'apollo-server-express';

import userSchema from './user';
import todoSchema from './todo';
import eventSchema from './event';

const linkSchema = gql`
	type Query {
		_: Boolean
	}

	type Mutation {
		_: Boolean
	}

	type Subscription {
		_: Boolean
	}
`;

export default [linkSchema, userSchema, todoSchema, eventSchema];
