import * as React from "react";
import {number} from "prop-types";
import { observer, inject } from 'mobx-react';
import {counterStore} from '../../stores/index'



@observer
class Counter extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {name: "",
                      count: null
                     }

    }



    render() {
        return(
                <div>
                    {this.state.name}
                    <input id="name-input" type="text" onChange={(e) => this.setState({name: e.target.value})}/>
                    <input id="initial-count-input" type="text" />
                    <button></button>

                </div>);
    }
}

export default Counter;