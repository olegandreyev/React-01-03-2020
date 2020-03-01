import React, { Component } from 'react'
import classes from './User.module.css';


class User extends Component {
    render() {
        const { name, id } = this.props.data;
        return (
            <div className={classes.user} style={styles}>
                <div></div>
                {name}
                <button className={styles.removeButton} onClick={() => this.props.onUserRemove(id)}>remove</button>
            </div>
        )
    }
}

export  default User;
