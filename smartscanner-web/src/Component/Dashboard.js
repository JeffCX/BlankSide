import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as firebase from "firebase"
import Board from './Board'
import {history} from "../App"

var config = {
    apiKey: "AIzaSyAy00SJ7NINY4c1iGsjG-B8-Ao9KlSTXg8",
    authDomain: "smart-scanner-38c89.firebaseapp.com",
    databaseURL: "https://smart-scanner-38c89.firebaseio.com",
    projectId: "smart-scanner-38c89",
    storageBucket: "smart-scanner-38c89.appspot.com",
    messagingSenderId: "552126616979"
  };





const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


class App extends React.Component{

  state = {
    view:true,
    loading:true,
    data:[]
  }

  gan = () =>{
    let lst = []
    firebase.database().ref("Home").once("value",(data)=>{
      let val = data.val()
      
      Object.entries(val).forEach(([key, val]) => {
        lst.push({
          id:key,
          imagePath:val
        })
       
    });
      
    this.setState({
      data:lst
    })
     
      
    })
  }
   
  
  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar >
            <div style={{flexGrow:1,display:"flex",flexDirection:"row"}}>
            
            <Typography variant="h6" color="inherit" style={{cursor:"pointer"}} noWrap onClick={()=>{
                history.push("/")
            }}>
              Smart Scanner
            </Typography>
            </div>
            <Button style={{color:"white"}} onClick={()=>{
                history.push("/dashboard")
            }}>Dashboard</Button>
          </Toolbar>
  
        </AppBar>
        <main>
        <Board />
         
        </main>
            
        </React.Fragment>
        );
    }
    } {


    
    }



    export default withStyles(styles)(App);
