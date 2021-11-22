import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersActions'
import Users from './Users.css'

 class users extends Component {
    componentDidMount(){
        this.props.getUsers()
        
    }
    render() {
        const {users} = this.props.users
        console.log(users)

        
        return (
            <div>
                <h1>Title - Post</h1>
                {users.map(user => 
                     <div class="post">
                         <h3>{user.title}</h3>
                         <h5>{user.body}</h5>
                     </div>           
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(users)
