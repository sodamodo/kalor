import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from '../registerServiceWorker';
import Counter from './containers/Counter/Counter';

class App extends React.Component {
    public render() {
        return (
            <div>
                Wheeee
            </div>
        );
    }
}


ReactDOM.render(
        <Counter />,

  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
