import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Welcome.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const classes = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        color: 'white',

      },
      
    },
    qw: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        color: 'white',
    }  }
  }));
const FooterPage = () => {
  return (
    <MDBFooter  color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="8">
            <h5 className="title">Footer Content</h5>
            <p>
             Subrecreva-se aqui para receber as informações sobre as doenças directamente no seu e-mail
            </p>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField  className={classes.qw} id="standard-basic" label="Digite o seu e-mail" />
            </form>

          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://minsa.gov.ao"> minsa.gov.ao </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;