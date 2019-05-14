import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Avatar, Card, Icon } from 'antd'
import { fetchPosts } from '../actions/PostsAction';

const { Meta } = Card;

class Posts extends Component {
    componentDidMount() {
        // 触发action操作
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps, nextStates) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }


    render() {
        const postItems = this.props.posts.map(post => (
            <Card
                id={ post.id }
                style={ { width: 500, margin: 20 } }
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={ [<Icon type="setting"/>, <Icon type="edit"/>, <Icon type="ellipsis"/>] }
            >
                <Meta
                    avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> }
                    title={ post.title }
                    description={ post.body }
                />
            </Card>
        ));

        return (
            <div>
                <h1>Posts</h1>
                { postItems }
            </div>
        )
    }
}


const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
