import {connect} from 'react-redux'
import Counter from "../component/Counter";
import {decrement, increment, multiple} from "../actions";


const mapStateToProps = (state, ownProps) =>{
    return {
        value: state[ownProps.index]
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onIncrement:(index) => dispatch(increment(index)),
        onDecrement:(index) => dispatch(decrement(index)),
        Multiple:( multipler,index) => dispatch(multiple(multipler,index)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)