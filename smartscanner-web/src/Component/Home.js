import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import db from "./db"
import {history} from "../App"



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
    db.ref("Home").once("value",(data)=>{
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
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Smart Scanner
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Smart Scanner
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Avoid recycle useable paper to let the paper recycled efficiently, Recycle the need-to-be-recylced paper rightly 
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" onClick={
                      ()=>{
                        this.setState({
                          view:true,
                          loading:true
                        })

                        this.gan()

                        this.setState({
                          view:false
                        })
                        setTimeout(()=>{
                          this.setState({
                            loading:false
                          })
                        },2000)
                       
                      }
                    }>
                      Check Pages
                    </Button>

                    
                  </Grid>

                  <Grid item>
                  <Button variant="contained"  onClick={
                    ()=>{
                     history.push("/dashboard")
                     
                    }
                  }>
                    Realtime dashboard
                  </Button>

                  
                </Grid>
                  
                </Grid>
              </div>
            </div>
          </div>
          {this.state.view?"": this.state.loading?  <CircularProgress  style={{position:"absolute",top:"40%",left:"50%",marginTop:"10%"}}/>:this.state.data.length===0?"no data...":<div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            
            {this.state.data.map(card => (
              <Grid item key={card.id} sm={6} md={4} lg={3}>
              
                <Card className={classes.card}>
                  <img src={card.imagePath.imgPath} alt="images" style={{height:"400px"}}/>
                    
                  
                
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>}
         
        </main>
        
      </React.Fragment>
    );
  }
} {


  
}



export default withStyles(styles)(App);
