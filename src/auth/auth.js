import { AuthenticationError } from 'apollo-server-express'
import { User } from '../models'

export const attemptSignIn = async (email, password) => {
	const message = 'Incorrect email or password. Please try again.'
	const user = await User.findOne({ email })

	if (!user) {
		throw new AuthenticationError(message)
	}

	if (!(await user.matchesPassword(password))) {
		throw new AuthenticationError(message)
	}

	return user
}

const signedIn = req => req.session.userId

export const checkSingedIn = req => {
	if (!signedIn(req)) {
		throw new AuthenticationError('You must be log in.')
	}
}

export const checkSignedOut = req => {
	if (signedIn(req)) {
		throw new AuthenticationError('You are already signed in.')
	}
}
