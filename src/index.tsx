import React, { createElement, useEffect, useState } from 'react';
import './index.less';
import { Avatar, Grid } from 'antd-mobile';
import { Navigate } from 'react-router-dom'
import axios from 'axios'
interface Props {
  jumpConfig: string;
}
// const defaultAvatarUrl =
//   'https://img1.baidu.com/it/u=344570870,104153257&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=470';
const UserCardModule = (props: Props) => {
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      const config = {
        headers: {
          Authorization: localStorage.getItem('access_token')
        }
      }
      const params = {
        channel: 'changanqiche'
      }
      axios.post('https://apitest.changan.com.cn:30597/restcloud/auth-dev/queryUserInfo', params, config).then(resp => {
        const { code, data } = resp.data
        if (code == 200) {
          setUserInfo(data)
        }
      })
    }
  }, [])
  return (
    <>
      <div className='user-card'>
        <Grid columns={8} gap={8} className='card-content'>
          <Grid.Item className='avtar-wrapper' span={2} onClick={() => {
            Navigate({ to: '/page/user/login' })
          }}>
            <Avatar src={userInfo?.avtarUrl} />
          </Grid.Item>
          <Grid.Item span={6}>
            <div className='user-info'>
              <span>{userInfo?.name}</span>
              <span>2022-12-16</span>
            </div>
          </Grid.Item>
        </Grid>
      </div>
    </>
  );
};

export default UserCardModule;
