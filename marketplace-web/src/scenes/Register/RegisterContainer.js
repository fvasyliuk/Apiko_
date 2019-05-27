import { compose, withStateHandlers, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authOperations } from '../../modules/auth'
import { routes } from '../router';
import RegisterView from './RegisterView';


const mapStateToProps = (state) => ({
    isLoading: state.auth.register.isLoading,
});

const mapDispatchToProps = {
    register: authOperations.register,
}

const enhancer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withStateHandlers(
        {
            fields: {
                email: '',
                fullName: '',
                password: '',
                passwordAgain: '',
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
        handleRegister: (props) => async () => {
            await props.register({
                fullName: props.fields.fullName,
                email: props.fields.email,
                password: props.fields.password,
            });
            
            props.history.push(routes.home);
        }
    }),
)



export default enhancer(RegisterView);