import React from 'react';
import { Grid } from '@material-ui/core';
import OurClasses from '../OurClasses/OurClasses';
import { classDetail } from '../../FakeData/FakeData';

const OurClassInfo = () => {
    return (
           <Grid
                className = "ml-5 pl-5"
                style={{marginTop:'50px'}}
                container item xs={10} spacing={4}
                justify="center"
                alignItems="center"
                >
                {
                    classDetail.map(classItem => <OurClasses classItem = {classItem} key = {classItem.id}></OurClasses>)
                }
           </Grid>
    );
};

export default OurClassInfo;