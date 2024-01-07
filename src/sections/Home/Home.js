import Nav from '../../components/Nav';
import Socials from '../../components/Socials';
import './Home.css';

// import Monitor from '../../images/monitor.png'
// import ReactIcon from '../../images/react-icon.svg'

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
                        I love coding with React ⚛️
                        I'm a lifelong learner 📖
                        and electronic music brings me joy 😊
                    </div>
                </div>
                {/* <div>
                    <img src={ReactIcon} className='hook-image'/>
                </div> */}
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