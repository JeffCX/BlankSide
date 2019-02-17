import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import db from "./db"
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Board extends React.Component{

    componentWillMount(){
        db.ref("data").on("value",(data)=>{
           
                this.renderData()
                this.setState({
                    img:data.val()
                })

        
         
        })
    }

    renderData = () =>{
        this.setState({
            loading:true
        })

        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },3500)
       
    }

    renderData(){

    }

    state = {
        img:""
    }
    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root}>
              <Grid container spacing={24} style={{padding:20}}>
               
                <Grid item xs={12} md={6}>
                  <Paper className={classes.paper}>
                    {this.state.loading?
                            <CircularProgress />
                            :
                            <img src={this.state.img.imgUrl} alt='scaned image' style={{height:"80vh"}}/>}
                
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper className={classes.paper} style={{height:"80vh"}}>
                  {this.state.loading?
                    <CircularProgress />
                    :
                    this.state.img.status==="1"?<h3>The paper is reuseable</h3>:<h3>The paper is recycled</h3>}

                    {this.state.loading?
                      ""
                      :
                      this.state.img.texts?<p  style={{textAlign:"left"}}>{this.state.img.texts}</p>:<p>No text detected in the image!</p>}
                  </Paper>
                </Grid>
                
              </Grid>
            </div>
          ); 
    }


 
}


export default withStyles(styles)(Board);
