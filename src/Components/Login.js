import React, {useState} from 'react';
import { GlobalContext } from './GlobalContextProvider';
import TextField from '@material-ui/core/TextField';
import Button from  '@material-ui/core/Button';


export const Login = () => {
    const {username, password} = React.useContext(GlobalContext);
    const onClickFunc = event => {
        if(username === user && password === pass){
            console.log("access granted");
        }else{
            console.log("access denied");
        }

    }
    const [user, setUser] = useState("");
    const onHandleChangeUser = event => setUser(event.target.value);
    const [pass, setPass] = useState("");
    const onHandleChangePassword = event => setPass(event.target.value);
    


    return(
        <>
        <div>
            <TextField label="User Name" onChange={onHandleChangeUser} />
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                onChange={onHandleChangePassword}
            />
            <Button variant="outlined" color="primary" type="submit" onClick={onClickFunc}>
                Submit
            </Button>
        </div>
      
        </>
    );
}

export default Login;