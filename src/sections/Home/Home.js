import './Home.css';
import profPic from '../../images/prof-pic.png';

import { connect } from "react-redux";

const Home = ({ user, setName }) => {
    return (
        <div className='home'>
            <div className='title'>{user.name}</div>
            <div className='subtitle'>Front-End Web Developer</div>
            <button onClick={() => setName("Chriszyca Soth")}>change name</button>
            <img src={profPic} className="prof-pic center-content" alt="logo" />
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