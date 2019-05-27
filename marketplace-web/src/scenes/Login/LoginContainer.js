import { compose, withHandlers, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import { withRouter } from 'react-router-dom';
import { authOperations } from '../../modules/auth';
import { routes } from '../router';

function mapStateToProps(state) {
    return {
        isLoading: state.auth.login.isLoading,
    }
}
const mapDispatchToProps = {
    login: authOperations.login,
}

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps ),
    withStateHandlers(
        {
            fields: {
                email: '',
                password: '',
            },
        },
        {
            handleFieldChange: (state) => (fieldName, value) => ({
                ...state,
                fields: {
                    ...state.fields,
                    [fieldName]: value,
                },
            }),
        }
    ),
    withHandlers({
        handleLogin: (props) => async () => {
            await props.login(props.fields);
            
            props.history.push(routes.home);
        }
    })
);

export default enhancer(LoginView);