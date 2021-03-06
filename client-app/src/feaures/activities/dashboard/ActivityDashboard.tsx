import React, {useContext, useEffect} from 'react';
import {Grid} from 'semantic-ui-react';
import ActivityList from './ActivityList';
import {observer} from 'mobx-react-lite';
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { RootStoreContext } from "../../../app/stores/rootStore";


const ActivityDashboard: React.FC = () => {
    const roosStore = useContext(RootStoreContext);
    const {loadActivities, loadingInitial} = roosStore.activityStore;
    useEffect(() => {
       loadActivities()
    }, [loadActivities])

    if (loadingInitial) return <LoadingComponent content="loading activities..."/>
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList/>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Activity Filters</h2>
            </Grid.Column>
        </Grid>
    );
};

export default observer(ActivityDashboard);
