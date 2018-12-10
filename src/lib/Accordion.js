import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Accordion.css';

class Accordion extends Component{
  constructor(props){
    super(props);

    this.state = {
      datas: [],
      activeData: undefined
    }
  }

  render(){
    return (
      <React.Fragment>
        {this.mapStateDatasToAccordions()}
      </React.Fragment>
    )
  }

  adaptPropsDatasToState(){
    const {datas} = this.props;

    const tempDatas = new Array()
    datas.forEach((data) => {
      tempDatas.push({
        ...data,
        active: false
      })
    })

    this.setState({...this.state, datas: tempDatas});
  }

  mapStateDatasToAccordions(){
    const {datas} = this.state;
    return datas.map((data, idx) => {
      return (
        <div key={data.id}>
          <div 
            onClick={(e) => this.activateAccordionItem(e, data.id)}  
            className="a-heading">
            <b>{data.title}</b>
          </div>
          <div 
            className={`a-content inactive ${data.active ? "active" : ""}`}>
            {data.content}
          </div>
        </div>
      )
    })
  }

  activateAccordionItem = (e, id) => {
    const {datas} = this.state;
    const tempDatas = new Array()

    datas.forEach((data) => {
      if(data.id === id){
        if(data.active){
          tempDatas.push({
            ...data,
            active: false
          })
        }
        else{
          tempDatas.push({
            ...data,
            active: true
          })
        }
      }
      else{
        tempDatas.push({
          ...data,
          active: false
        })
      }
    })
    this.setState({...this.state, datas: tempDatas})
  }

  componentDidMount = () => {
    this.adaptPropsDatasToState();
  }
}

/**
 * datas: [{
 *   title: <item title>,
 *   id: <unique item id>,
 *   content: <html content>
 * }]
 */
Accordion.propTypes = {
  datas: PropTypes.array.isRequired
}

export default Accordion;