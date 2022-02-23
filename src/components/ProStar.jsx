import React, { Component } from 'react';
import data from '../resources/prostars.json';
class ProStar extends Component{
    constructor(props){
        super(props);
        this.state={
            stardata:[...data].splice(0,5)
        };
    }
     randomStar = () => {
        let r = [...data];
        let newStar = [];
        for(let i =0;i < 5;i++){
            let num = Math.floor(Math.random() * 52) + 1;
            newStar.push(r[num]);
        }
        this.setState({
            stardata:[...newStar]
        })
    } 
    sorting = () => {
        let oldStar = [...data];
        oldStar.sort((a,b) => {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
        });
        this.setState({
            stardata:[...oldStar]
        })

    }
    psorting = () => {
        let oldStar = [...data];
        oldStar.sort((a,b) => {
            return b.popularity - a.popularity;
        });
        this.setState({
            stardata:[...oldStar]
        });
    }
    deletebtn = (p) => {
        let stars =[...this.state.stardata];
        let star = stars.filter((star) => {
            return star.id != p.target.value;
        });
        this.setState({
            stardata:[...star]
        });
    }
    render() {
        return(
          <div className='main-container'>
              <div className='head'><center><h1>ProStars</h1></center></div>
              <div className='btn'>
                  <button onClick={this.randomStar}>Get Random Contact</button>
                  <button onClick={this.sorting}>Sort By Name</button>
                  <button onClick={this.psorting}>Sort By Popularity</button>
              </div>
              <table>
                  <thead>
                      <tr>
                          <th>Picture</th>
                          <th>Name</th>
                          <th>Popularity</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.stardata.map((star) => {
                              return <tr key={star.id}>
                                  <td><img src={star.pictureUrl} alt="error" height="500px" width="350px"/></td>
                                  <td>{star.name}</td>
                                  <td>{star.popularity}</td>
                                  <td><button onClick={this.deletebtn} value={star.id}>Delete</button></td>
                              </tr>
                          })
                      }
                  </tbody>
              </table>
          </div>
        );
    }
}
export default ProStar;