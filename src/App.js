
// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import{
  BrowserRouter as Router,

  Route,
  Routes,
  
} from "react-router-dom"

export default class App extends Component {
  // static propTypes = {second: third}
  pageSize=15;
 
 
 // apiKey=process.env.REACT_APP_NEWS_API
  apiKey="f815fc4f95ce4355a9d3f7c4b3b0187e"
  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  
  render() {
    return (
      <div>
        
        
        
        <Router>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        height="5px"
        progress={this.state.progress} 
       
      />
       
       
        <Routes> 
        <Route exact  path='/' element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="general" pagesize={this.pageSize} country="in" category="general"/>}></Route>
        <Route exact  path='/general' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pagesize={this.pageSize} country="in" category="general"/>}></Route>
        <Route exact path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pagesize={this.pageSize} country="in" category="business"/>}></Route>
        <Route exact  path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pagesize={this.pageSize} country="in" category="entertainment"/>}></Route>
        <Route exact  path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pagesize={this.pageSize} country="in" category="health"/>}></Route>
        <Route exact  path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pagesize={this.pageSize} country="in" category="science"/>}></Route>
        <Route exact  path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pagesize={this.pageSize} country="in" category="sports"/>}></Route>
        <Route exact  path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pagesize={this.pageSize} country="in" category="technology"/>}></Route>
       
        </Routes>
        </Router>
   
       
      </div>
    )
  }
}








