import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
	return createStyles({
		bar: {
			widows: '100%',
			'& > * + *': {
				marginTop: theme.spacing(2)
			}
		}
	});
});

export default () => {
	const styles = useStyles();

	return (
		<div className={styles.bar}>
			<LinearProgress />
		</div>
	);
};
