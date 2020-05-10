import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Child11 from './child11.js'


class App extends Component {
  constructor(props) {
    super(props);
this.num =1;

    this.state = {
      co: {},
        tiv:'ppp',
        iflag:true,
    }
    this.cssd={}

  }


  componentWillReceiveProps(nect){
    const aa = nect.addRedux&&nect.addRedux[0]&&nect.addRedux[0].text;
    // console.log(`Fa componentWillReceiveProps::::${aa}`)
    // this.setState({inputV:aa})
    // console.log(`Fa::::componentWillReceiveProps`)
  }
  componentDidUpdate(){
    // console.log(`Fa:::componentDidUpdate`)
  }
  changeF = (e)=>{
    this.setState({tiv:e.target.value,iflag:!this.state.iflag})
  }
  content(){
    if(this.state.iflag){
      return <input  key={99} value={this.state.tiv} onChange={this.changeF}/>
    }
    return <input  key={9999} value={this.state.tiv} onChange={this.changeF}/>
  }



  render() {
    console.log('Fa-render999999999999999999|||||||  child1')
      return (
        <div className="container" style={{background:'grey',padding:'20px'}}>
          <div onClick={()=>this.setState({tiv:5})}>fa组件--qqw--点55击触发tyy  {this.state.tiv}</div>
          <div onClick={()=>this.props.noa(++this.num)}>点击触发nono</div>
          <div onClick={()=>this.props.abc(++this.num)}>点击触发add</div>
      <div >123 {this.props.test1}</div>
      +++++++++++++
      <Child11 />
        </div>
    );
  }
}
let num = 1;

const faActionCreators = {
    abc:aaa=>{
        console.log(9232666);
        return {
            type:'ADD',
            id:num++,
            text:aaa,
        }
    },
    qqw:aaa=>({
        type:'TYY',
        id:num++,
        text:aaa,
    }),
    noa:aaa=>({
        type:'nono',
        id:num++,
        text:aaa,
    })
}

//写法三
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(faActionCreators, dispatch);
};

//mapStateToProps第一种写法结束-------
const mapStateToProps = (state)=>{
  console.log(1)
    return ({tyyReducer:state.tyyReducer})
    // return ({ccc:state.data,tyyReducer:state.tyyReducer})
};


// export default connect(mapStateToProps,null)(App);
// export default connect(null,mapDispatchToProps)(App);
export default connect(mapStateToProps,mapDispatchToProps)(App);
// export default connect(null,null)(App);
// export default App;



