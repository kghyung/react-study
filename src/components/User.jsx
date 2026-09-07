import {memo} from 'react';

const User = ({user}) => {
    console.log("User 렌더링!!!!");
    return (
        <div>
            <h2>사용자 : {user}</h2>
        </div>
    );
};

export default User;