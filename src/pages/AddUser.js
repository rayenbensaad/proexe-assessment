import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { createUser, updateUser } from '../redux/actions/users'
import { Button, Label, Input, Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { Redirect } from 'react-router-dom';

const AddUser = (props) => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    // console.log(window.location.search.split('=')[1]);
    let userID = window.location.search.split('=')[1];
    
    const initialUserState = {
        id: null,
        name: "",
        email: "",
    };
    
    const [user, setUser] = useState(users.filter(({ id }) => id === parseInt(userID))[0]);
    const [submitted, setSubmitted] = useState(false);
    const { message } = useSelector(state => state.message);
    // const { user: currentUser } = useSelector((state) => state.auth);


    useEffect(() => {
        setUser(users.filter(({ id }) => id === parseInt(userID))[0])
        console.log(users.filter(({ id }) => id === parseInt(userID)));
        // if (!currentUser) {
        //   return <Redirect to="/login" />;
        // }    
    
      }, []);

      
    const validateEmail = (emailAdress) => {
        if(emailAdress){
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return !!emailAdress.match(regexEmail);
        }
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = () => {
        console.log(user);
        const data = {
            id: users?.length +1,
            name: user.name,
            email: user.email,
        }
        setSubmitted(true)
        if(validateEmail(user.email) && user.email !== '' && user.name !== ''){

            dispatch(updateUser(data, userID))
            props.history.push("/home")
        }
    };

    const submitUser = () => {
        console.log(user);
        const data = {
            id: users?.length +1,
            name: user.name,
            email: user.email,
        }
        setSubmitted(true)
        if(validateEmail(user.email) && user.email !== '' && user.name !== ''){

            dispatch(createUser(data))
            props.history.push("/home")
        }
    };

    return (
        <div>
        <h3> Dashboard</h3>
        {user?.email}
        <Card color="light">
          <CardBody>
            <CardTitle tag="h5">
                Form
            </CardTitle>
            <CardText>
        <div className="submit-form">

                <div>
                    <div className="form-group">
                        <label htmlFor="title">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={user?.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                        {user?.name.length < 3 && user?.name.length !== 0 ?
                            (<div className="error-input mt-2">Please provide a valid Name ( min 3 characters )</div>) : null}
                        {user?.name.length === 0 && submitted ?
                            (<div className="error-input danger">Name is Required</div>) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="Email"
                            required
                            value={user?.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                        {user?.email && !validateEmail(user?.email) ?
                            (<div className="error-input danger">Please provide a valid email</div>) : null}
                        {user?.email.length === 0 && submitted ?
                            (<div className="error-input danger">Email is Required</div>) : null}
                    </div>

                    {userID ?
                    <button onClick={saveUser} className="btn btn-success">
                    Save
                </button>
                :
                <button onClick={submitUser} className="btn btn-success">
                        Submit
                    </button>}
                    
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-success" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                </div>
        </div>
        </CardText>
        </CardBody>
      </Card>
    </div>
    );
};

export default AddUser;