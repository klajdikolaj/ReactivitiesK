import React, {SyntheticEvent} from 'react';
import {Form, Grid, List} from 'semantic-ui-react';
import {IActivity} from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
    createActivity: (activity: IActivity) => void
    editActivity: (Activity: IActivity) => void
    deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void
    submitting: boolean,
    target: string

}

const ActivityDashboard: React.FC<IProps> = ({
                                                 activities,
                                                 selectActivity,
                                                 selectedActivity,
                                                 editMode,
                                                 setEditMode,
                                                 setSelectedActivity,
                                                 createActivity,
                                                 editActivity,
                                                 deleteActivity,
                                                 submitting,
    
                                                 target
                                             }) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectedActivity={selectActivity} submitting={submitting}
                              deleteActivity={deleteActivity} target={target}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                <ActivityDetails activity={selectedActivity}
                                 setEditMode={setEditMode}
                                 setSelectedActivity={setSelectedActivity}/>}
                {editMode &&
                <ActivityForm key={selectedActivity && selectedActivity.id || 0}
                              activity={selectedActivity}
                              setEditMode={setEditMode}
                              createActivity={createActivity}
                              editActivity={editActivity}
                              submitting={submitting}/>}
            </Grid.Column>
        </Grid>
    );
};

export default ActivityDashboard;
