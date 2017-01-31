import react from 'react'
import Feature from './Feature'


const withFeature = (Component, featureFlag) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
		}

		render() {
			return (
				<Feature flag={featureFlag} >
					<Component {..this.props} />
				</Feature>
			);
		}
	}
};

export default withFeature;
