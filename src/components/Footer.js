import React,{ useState } from 'react';
import api from '../services/api';
import {Twitter, GitHub, Database, Mail, Send} from 'react-feather';
import {useTranslation} from 'react-i18next';
import { Input, Button } from '@material-ui/core';
import './formSubscribe.css'
import swal from 'sweetalert';

function Footer() {
  const {t} = useTranslation();
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");

  const setRequest = ()=>{
    let form = new FormData();

    form.append("first_name", firstName);
    form.append("last_name", lastName);
    form.append("email", email);
    api.post('/cidadaos/',form).then((response) => {
      swal("Cidadãos subscrito com sucesso!", "", "success");
      setFirstName("")
      setEmail("")
      setLastName("")
    });
  } 


  return (
    <footer>

      <h3>{t('Mantenha-se actualizado, faça já a sua subscrição e receba todas as actualizações diretamente no seu e-mail')}</h3>

      <div className="links">
      <span>
      <Input onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} className="input-top" placeholder="Primeiro Nome" inputProps={{ 'aria-label': 'description' }} />
      <Input onChange={(e)=>{setLastName(e.target.value)}} value={lastName} className="input-top" placeholder="Último Nome" inputProps={{ 'aria-label': 'description' }} />
      <Input onChange={(e)=>{setEmail(e.target.value)}} value={email} className="input-top" placeholder="E-Mail" inputProps={{ 'aria-label': 'description' }} />
      <Button onClick={()=>{setRequest()}} variant="contained" color="primary">
        Subscrever-se
      </Button>
      </span>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
