import Nav from '../../components/Nav';
import Socials from '../../components/Socials';
import './Home.css';

import { connect } from "react-redux";

const Home = ({ user, setName }) => {
    return (
        <div className='home'>
            <Nav/>
            <div className='hook'>
                <div className='inner-hook'>
                    <div className='title white'>
                        Hi, I'm{' '}
                        <div className='name'>Li Chien |</div>
                        <div className='underline'>Software Engineer</div>
                    </div>
                    <Socials/>
                    <div className='description white'>
                        I love creating websites 🚀
                        I'm a lifelong learner 📖
                        and making electronic music brings me joy 😊
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);