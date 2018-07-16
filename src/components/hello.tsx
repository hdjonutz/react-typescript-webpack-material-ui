import * as React from 'react';
import Button from '@material-ui/core/Button';
import style from './hello.less';

interface HelloProps{
    name: string
}

export default class Hello extends React.Component<HelloProps,{}>{
    constructor(props: HelloProps){
        super(props);
    }

    render(){
        return (
            <div className={style.test}>{this.props.name}
                <Button variant="raised" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}