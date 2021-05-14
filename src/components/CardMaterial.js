import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 135,
    minHieght: 335,
    margin: '4px 2px',
    cursor: 'pointer'

  },
  bullet: {
    display: 'inline-block',
    margin: '0px 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Arial, sans-serif',
  },
  pos: {
    marginBottom: 3,
  },
});
const showValueSlowly = (value)=>{
    for(let i = 0;i<value;i++){
        setTimeout(()=> i ,100)
    }
        
}
export default function CardMaterial({label, value, color, bgcolor}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card style={{color:color}} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
            {label}
        </Typography>
        <Typography variant="body2" component="p">
            {
              value  
            }
        </Typography>
      </CardContent>
    </Card>
  );
}
