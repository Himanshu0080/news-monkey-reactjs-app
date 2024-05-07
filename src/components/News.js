import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spnr from './Spnr'
import PropTypes from 'prop-types'
export class News extends Component {
    static defaultProps={
        country:"in",
        pagesize:8,
        category:"general",
        
      }
      static propTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string

      }

       capatalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1)
      }
        
      
   
   
    constructor(props){
        super(props)
        console.log("hello im a constructor from news component");
        console.log(process.env.REACT_APP_NEWS);
        this.state={
            articles:[],
            loading:false,
            page:1


        }

       
        document.title=`${this.capatalizeFirstLetter(this.props.category)}-NewsMonkey`

        

    }
   async componentDidMount(){
    this.props.setProgress(0)
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pagesize=${this.props.pagesize}`
        this.props.setProgress(50)
        this.setState({loading:true})
        let data= await fetch(url)
         let parseddata=await data.json()
        console.log(parseddata);
        this.props.setProgress(80)
        this.setState({articles:parseddata.articles,
                    totalResults:parseddata.totalResults,
                loading:false})
                
                this.props.setProgress(100)
    }
    


    handlePrevClick= async()=>{
        console.log("prev");
        this.props.setProgress(0)

        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
        this.props.setProgress(50)
        this.setState({loading:true})
        let data= await fetch(url)
         let parseddata=await data.json()
        console.log(parseddata);
        this.props.setProgress(80)
        this.setState({
             page: this.state.page-1,
             articles:parseddata.articles,
             loading:false
            })
            this.props.setProgress(100)

    }

    handleNextClick=async()=>{
        console.log("next");
        if (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)) {
            
        }
        else{
          this.props.setProgress(0)
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
        this.props.setProgress(50)
        this.setState({loading:true})
        let data= await fetch(url)
         let parseddata=await data.json()
        console.log(parseddata);
        this.props.setProgress(80)
        this.setState({
             page: this.state.page+1,
             articles:parseddata.articles,
             loading:false
            })
        }
        this.props.setProgress(100)

        

    }
  render() {
   
    return (
      <div className='my-3'>
         <h2 className='text-center'>news Monkey -Top head lines from {this.capatalizeFirstLetter(this.props.category)} </h2>
       { this.state.loading && <Spnr/>}
         <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return(
             
             <div className="col-md-3" key={element.url}>
             <NewsItems  title={element.title?element.title:""} imageurl= {element.urlToImage} source={element.source.name} author={element.author} date={element.publishedAt} discripton= {element.description?element.description:""}  newsurl={element.url}/>
             </div>
             )
            

        })}</div>

        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        
       
       

        
            
        </div>

        
      
        
       
       

        
    )
  }
}

export default News
















