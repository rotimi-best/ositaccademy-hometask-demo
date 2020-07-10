import React from 'react';
import Users from './Users'
import { reguestAPI } from '../../api/api'

class UsersContainer extends React.Component {
    state = {
        users: [
            {
                userId: 1,
                id: 1,
                title: "",
                body: ""
            }
        ],
        totatUsersQuantity: 100,
        pageSize: 10,
        currentPage: 1,

    }
    componentDidMount() {
        this.requestUsers(this.state.currentPage);

    }

    requestUsers = async (page) => {
       let response = await reguestAPI.getUsers(page);
       if (response.status === 200) {
           this.setState({
               users:[...response.data]
           })
       }
    }

    onPageChanged = (page) => {
        this.setCurrentPage(page)
        this.requestUsers(page)
    }
    
    setCurrentPage = (page) => {
        this.setState((state) => ({currentPage: page }))
    }

    render() {
        return (
            <div>
                <Users state={this.state} onPageChanged={this.onPageChanged} />
            </div>
        )
    }
}

export default UsersContainer;