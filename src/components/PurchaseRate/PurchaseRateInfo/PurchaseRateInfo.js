import { Grid } from '@material-ui/core';
import React from 'react';
import { purchaseInfo } from '../../FakeData/FakeData';
import PurchaseRate from '../PurchaseRate/PurchaseRate';

const PurchaseRateInfo = () => {
    return (
        <>
        <h1 className="text-center"><span className="fontColor">CHOOSE THE OFFER</span> THAT SUITS YOU</h1>
        <p className="text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br/> laudantium, totam rem aperiam</p>
        <Grid
                className = "ml-5 pl-5"
                style={{marginTop:'50px'}}
                container item xs={10} spacing={4}
                justify="center"
                alignItems="center"
                >
                {
                    purchaseInfo.map(purchaseItem => <PurchaseRate purchaseItem = {purchaseItem} key = {purchaseItem.id}></PurchaseRate>)
                }
           </Grid>
           </>
    );
};

export default PurchaseRateInfo;