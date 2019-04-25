import React from 'react';
import { Switch, Route } from 'react-router';
import StockPage from '../StockPage';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path='/stock/:id?' component={StockPage} />
                <Route path='/' component={StockPage} />
            </Switch>
        </div>
    );
}

export default Routes;