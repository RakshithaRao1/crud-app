import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import { editUser, getUsers } from "../Service/api";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () =>{
    const [user, setUser] = useState(initialValues);
    const {name, username, email, phone} = user;
    const { id } = useParams();
    const classes = useStyle();
    const history = useHistory();
    const [isEditSuccessfull,setIsEditSuccesfull] = useState(false)
    useEffect(()=> {
        loadUserData();
    },[]);
    const loadUserData = async() =>{
        const response = await getUsers(id);
        setUser(response.data);
    }
    const onValueChange = (e) =>{
        setUser({ ...user, [e.target.name]: e.target.value})
        console.log(user);
    }
    
    const editUserDetails = async() =>{
        const response = await editUser(id, user);
        console.log("checking",response);
        if(response.status === 200) {
            setIsEditSuccesfull(true);
            }
            if (isEditSuccessfull) {
                return <Redirect to = "/all" />
                const allUsers = await getUsers();
                console.log(allUsers)
                }
       // history.push('./all');
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='username'  value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='email'  value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='phone'  value={phone}/>
            </FormControl>
            <Button variant="contained" onClick={() => editUserDetails() } component={Link} to={`/all`} color="primary">Edit User</Button>
        </FormGroup>
    )
}
export default EditUser;